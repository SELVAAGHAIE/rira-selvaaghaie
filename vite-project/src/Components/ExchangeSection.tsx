import React, { useState } from "react";
import "../Style/ExchangeSection.scss";
import { useTranslation } from "react-i18next";
interface ExchangeSectionProps {
  exchangeRate: number;
}

const ExchangeSection: React.FC<ExchangeSectionProps> = ({ exchangeRate }) => {
  const [usdValue, setUsdValue] = useState < string > ("");
  const [tomanValue, setTomanValue] = useState < string >("") ;

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setUsdValue(value);

    const usd = Number(value);
    if (!isNaN(usd) && value !== "") {
      const toman = (usd * exchangeRate).toFixed(0);
      setTomanValue(toman);
    } else {
      setTomanValue("");
    }
  };

  const handleTomanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setTomanValue(value);

    const toman = Number(value);
    if (!isNaN(toman) && value !== "") {
      const usd = (toman / exchangeRate).toFixed(2);
      setUsdValue(usd);
    } else {
      setUsdValue("");
    }
  };
const { t, i18n } = useTranslation();
  return (
    <div className="exchange-section">
      <div className="conversion-box">
        <div className="currency">
          <span>{t("USD")}</span>
        </div>
        <input
          type="text"
          value={usdValue}
          onChange={handleUsdChange}
          placeholder={t("EnterUSDamount")}
        />
      </div>

      <div className="conversion-box">
        <div className="currency">
          <span>{t('TOMAN')}</span>
        </div>
        <input
          type="text"
          value={tomanValue}
          onChange={handleTomanChange}
          placeholder={t("EnterTomanamount")}
        />
      </div>
    </div>
  );
};

export default ExchangeSection;
