// i18n
import { I18nextProvider } from "react-i18next";
import i18n from "./common/i18n";

import "./App.css";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div></div>
    </I18nextProvider>
  );
}

export default App;
