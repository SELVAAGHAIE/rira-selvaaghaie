import React from "react";
import "../Style/CaptionOfPage.scss";
import { useTranslation } from "react-i18next";

const CaptionOfPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="caption-section">
      <h3 className="captionofpage">{t("DollartoToman")}</h3>
    </div>
  );
};

export default CaptionOfPage;
