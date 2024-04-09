import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
const ServiceSettingPage = lazy(() => import("./container/services"));
const SettingPage = () => {
  const element = useRoutes([
    {
      path: "services/*",
      element: (
        <Suspense>
          <ServiceSettingPage />
        </Suspense>
      ),
    },
  ]);
  return element;
};

export default SettingPage;
