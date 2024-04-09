import HomeContainer from "@screens/home/containter/home.container";
// import LoginPage from "@screens/login";
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const LoginPage = lazy(() => import("@screens/login"));
const NotFoundPage = lazy(() => import("@screens/404"));
const HomePage = lazy(() => import("@screens/home"));
const ChangeUserPage = lazy(() => import("@screens/change-user"));
const SettingPage = lazy(() => import("@screens/setting"));
export const router = createBrowserRouter([
  {
    element: <HomeContainer />,
    children: [
      {
        path: "",
        index: true,
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "setting/*",
        element: (
          <Suspense>
            <SettingPage />
          </Suspense>
        ),
      },
      {
        path: "/change-user",
        element: (
          <Suspense>
            <ChangeUserPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    index: true,
    element: (
      <Suspense>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);
