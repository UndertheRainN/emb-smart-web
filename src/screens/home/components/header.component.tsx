import {
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { TranslationPage } from "@translation/index";
import {
  Avatar,
  Breadcrumb,
  Col,
  Dropdown,
  Flex,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";
import { AccountState } from "store/account.slice";
const HeaderComponent = () => {
  const account: AccountState = useSelector(
    (state: RootState) => state.account
  );
  const { t } = useTranslation(TranslationPage.HOME);
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };
  const itemDropDown: ItemType[] = [
    {
      key: "1",
      label: t("change-user"),
      icon: <SettingOutlined />,
      onClick: () => {
        navigate("/change-user");
      },
    },
    {
      key: "2",
      label: "Đăng xuất",
      icon: <LogoutOutlined />,
      onClick: onLogout,
    },
  ];
  return (
    <Layout.Header className="px-5 bg-gradient-to-r from-[#0E1c31] to-[#606c7d]">
      <Row>
        <Col span={20}>
          <Flex className="flex items-center h-full">
            <Breadcrumb
              separator={
                <Typography.Text className="text-primary-100">
                  {">"}
                </Typography.Text>
              }
              style={{ color: "white" }}
              items={[
                {
                  title: (
                    <Typography.Text className="text-primary-100">
                      Trang chủ
                    </Typography.Text>
                  ),
                  path: "",
                },
                {
                  title: (
                    <Typography.Text className="text-primary-100">
                      Page 1
                    </Typography.Text>
                  ),
                  path: "page1",
                },
                { title: "Page2" },
              ]}
            />
          </Flex>
        </Col>
        <Col span={4} className="flex justify-end b-l-2 border-l-primary-400">
          <Dropdown
            menu={{
              items: itemDropDown,
            }}
          >
            <Space size={16}>
              <Typography.Text className="text-lg text-primary-100 hover:text-primary-300 ">
                <Avatar
                  size={36}
                  src={account.avatar}
                  icon={<UserOutlined />}
                  className="mr-3 "
                />
                {account.username}
                <DownOutlined size={24} className="pl-3 " />
              </Typography.Text>
            </Space>
          </Dropdown>
          {/* <Space size={16}>
          <Badge count={1} size="small" className="mt-7">
            <BellOutlined className="text-2xl" />
          </Badge>
        </Space> */}
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default HeaderComponent;
