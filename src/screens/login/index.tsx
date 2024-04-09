import { AES } from "crypto-js";
import "./login.styless.scss";
import { Button, Flex, Form, Typography, message } from "antd";
import { Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { postClient } from "@server/http.client";
import { AccountInformation, addAccount } from "store/account.slice";
import { hideLoading, showLoading } from "@components/Loadding";
const LoginPage = () => {
  const { backgroundImage } = useSelector((state: RootState) => state.setting);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formInstance] = Form.useForm<{ username: string; password: string }>();
  const onLogin = () => {
    formInstance.submit();
  };
  const onSubmit = async (value: { username: string; password: string }) => {
    try {
      showLoading();

      const res = await postClient<AccountInformation>({
        endPoint: "auth/login",
        data: {
          username: value.username,
          password: AES.encrypt(value.password, "").toString(),
        },
      });

      if (res.data) {
        const { access_token, ...params } = res.data;
        dispatch(addAccount(params));
        navigate("/");
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      hideLoading();
    }
  };

  return (
    <div
      className="container-login"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Flex justify="center" align="center" className="h-screen">
        <Form
          className="form-container"
          form={formInstance}
          onFinish={onSubmit}
        >
          <Form.Item name="username" className="form-item">
            <Input
              placeholder="Tên đăng nhập"
              className="input"
              allowClear
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              placeholder="Mật khẩu"
              className="input"
              allowClear
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Button type="primary" danger className="w-full" onClick={onLogin}>
            Đăng nhập
          </Button>
        </Form>
      </Flex>
    </div>
  );
};

export default LoginPage;
