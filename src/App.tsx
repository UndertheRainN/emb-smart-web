import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect, useMemo, useRef } from "react";
import LoadingManager from "@components/Loadding/loading-manager";
import LoadingModal from "@components/Loadding";
import { ConfigProvider, ThemeConfig } from "antd";
import { SettingState } from "store/setting.slice";
import { useSelector } from "react-redux";
import { RootState } from "store";

function App() {
  let loadingRef = useRef(null);
  const setting: SettingState = useSelector(
    (state: RootState) => state.setting
  );
  useEffect(() => {
    LoadingManager.register(loadingRef);
    return () => {
      LoadingManager.unRegister(loadingRef);
    };
  }, [loadingRef]);
  const configTheme: ThemeConfig = useMemo(() => {
    return {
      token: {
        colorPrimary: setting.primaryColor || "#1F2A40",
        // colorText: setting.textColor || "#e0e0e0",
      },
      components: {
        Layout: {
          siderBg: setting.primaryColor || "#1F2A40",
        },
        Menu: {
          itemBg: setting.primaryColor || "#1F2A40",
          subMenuItemBg: setting.primaryColor || "#1F2A40",
          colorBgLayout: setting.primaryColor || "#1F2A40",
          colorText: setting.textColor || "#e0e0e0",
          hover: "#a4a9fc",
          itemHoverColor: "#a4a9fc",
          itemHoverBg: "#3e4396",
        },
        Typography: {
          fontSize: 14,
          fontFamily: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;`,
          // colorText: setting.textColor || "#e0e0e0",
        },
      },
    };
  }, [setting]);
  return (
    <>
      <LoadingModal ref={(ref: any) => (loadingRef = ref)} />
      <ConfigProvider theme={configTheme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
