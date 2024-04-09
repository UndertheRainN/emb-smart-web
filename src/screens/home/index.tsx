import { TranslationPage } from "@translation/index";
import { useTranslation } from "react-i18next";
import "./home.styless.scss";
const HomePage = () => {
  const { t } = useTranslation(TranslationPage.HOME);
  return <>{t("home")}</>;
};

export default HomePage;
