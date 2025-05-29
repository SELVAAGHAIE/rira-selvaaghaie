import React from "react";
import Header from "./Components/Header";
import "./Style/theme.scss";
import Card from "./Components/Card";
import ExchangeSection from "./Components/ExchangeSection";
import CaptionOfPage from "./Components/CaptionOfPage";
import { useTranslation } from "react-i18next";
const App: React.FC = () => {
  const exchangeRate: number = 85000;
const { t, i18n } = useTranslation();
  return (
    <div>
      <Card>
        <Header />
        <CaptionOfPage title={"DollartoToman"} />
        <ExchangeSection exchangeRate={exchangeRate} />
        <footer className="footer">{t("CurrencyConverter")}</footer>
      </Card>
    </div>
  );
}

export default App;