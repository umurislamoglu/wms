//React & Redux
import { useEffect } from "react";
import { useAppSelector } from "redux/hooks";

// i18n
import { I18nextProvider } from "react-i18next";
import i18n from "./common/i18n";

//style
import "./App.css";

//Config
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import "dayjs/locale/en";

function App() {
  const { localeConfig } = useAppSelector((state) => state.common);

  useEffect(() => {
    dayjs.locale(localeConfig.locale);
  }, [localeConfig]);

  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider locale={localeConfig}>
        <div></div>
      </ConfigProvider>
    </I18nextProvider>
  );
}

export default App;
