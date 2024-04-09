import { UserOutlined } from "@ant-design/icons";
import ComtainerComponent from "@components/container";
import HeaderComponent from "@components/header";
import { Avatar, Button, Col, Form, Row } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { AccountInformation } from "store/account.slice";

const ChangeUserPage = () => {
  const account: AccountInformation = useSelector(
    (state: RootState) => state.account
  );
  const [formInstance] = Form.useForm();
  useEffect(() => {}, [account]);

  return (
    <div className="w-full ">
      <HeaderComponent
        title={"Thông tin cá nhân"}
        onBack={() => {}}
        buttonRight={[<Button danger>Lưu</Button>, <Button danger>Lưu</Button>]}
      />
      <ComtainerComponent>
        <Form form={formInstance}>
          <Row>
            <Col span={4} className="flex justify-center">
              <Avatar
                size={{ xs: 24, sm: 32, md: 60, lg: 100, xl: 150, xxl: 150 }}
                icon={<UserOutlined />}
              />
            </Col>
            <Col span={20}>
              <Row gutter={16}>
                <Form.Item></Form.Item>
              </Row>
            </Col>
          </Row>
        </Form>
      </ComtainerComponent>
    </div>
  );
};

export default ChangeUserPage;
