import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SiderBarComponent from "../components/siderbar.component";
import HeaderComponent from "../components/header.component";
const HomeContainer = () => {
  return (
    <Layout className="h-screen">
      <SiderBarComponent />
      <Layout>
        <HeaderComponent />
        <Layout.Content className="bg-[#dadcdf]">
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default HomeContainer;
