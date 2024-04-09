import { useRoutes } from "react-router-dom";
import { lazy } from "react";
const ServicesListPage = lazy(() => import("./container/list"));
const ServiceSettingPage = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <ServicesListPage />,
    },
  ]);
  return element;
};

export default ServiceSettingPage;
