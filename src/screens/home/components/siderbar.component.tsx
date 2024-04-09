import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Col,
  Flex,
  Layout,
  Menu,
  MenuProps,
  Row,
  Typography,
} from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";
import { AccountState } from "store/account.slice";
import { SettingState } from "store/setting.slice";
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Cài đặt", "setting", <SettingOutlined />, [
    getItem("Quản lý Menu ", "setting/menu"),
    getItem("Quản lý Services", "setting/services"),
    getItem("Quản lý Vai trò", "setting/roles"),
    getItem("Quản lý Tài khoản", "setting/account"),
  ]),
];

const SiderBarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const account: AccountState = useSelector(
    (state: RootState) => state.account
  );
  const setting: SettingState = useSelector(
    (state: RootState) => state.setting
  );
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };
  const _characterKey = account.lastName?.split(" ") || [];
  return (
    <Layout.Sider
      theme="dark"
      color="primary"
      width="20%"
      collapsed={collapsed}
      className="py-5"
    >
      <Row className="justify-center px-5 pb-5">
        <Col span={22}>
          {!collapsed && (
            <Typography.Text className="text-2xl font-thin text-white">
              {(account.role || "admin")?.toUpperCase()}
            </Typography.Text>
          )}
        </Col>
        <Col className="flex row">
          <MenuOutlined
            onClick={() => {
              setCollapsed((prev) => !prev);
            }}
            className="text-lg cursor-pointer"
            style={{ color: setting.textColor || "#e0e0e0" }}
          />
        </Col>
        {!collapsed && (
          <Col span={24} className="py-5">
            <Flex gap={10} vertical justify="center" align="center">
              <Avatar
                size={{ xs: 24, sm: 32, md: 60, lg: 100, xl: 80, xxl: 80 }}
              >
                {_characterKey[_characterKey?.length - 1][0] || ""}
              </Avatar>
              <Typography.Text className="text-greenAccent-600">{`${account.firstName} ${account.lastName}`}</Typography.Text>
            </Flex>
          </Col>
        )}
        <Col span={24}>
          <Menu
            //   defaultSelectedKeys={["1"]}
            onClick={onClick}
            mode="inline"
            items={items}
          />
        </Col>
      </Row>

      {/* <Button
        className="collapsed-button"
        icon={
          collapsed ? (
            <RightOutlined className="text-white " />
          ) : (
            <LeftOutlined className="text-white " />
          )
        }
        onClick={() => setCollapsed((prev) => !prev)}
      />
      <div className="bg-white/[.2] w-full flex justify-center h-16 items-center">
        <Image className=" max-h-14" preview={false} src={setting.logo}></Image>
      </div> */}
    </Layout.Sider>
  );
};

export default SiderBarComponent;
