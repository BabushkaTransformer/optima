import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export const Language = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div>
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>
      <div>{t("menu.map")}</div>
      <div>{t("menu.contact")}</div>
      <button onClick={() => setLanguage("kg")}>Change To Kg</button>
      <button onClick={() => setLanguage("en")}>Change To En</button>
      <button onClick={() => setLanguage("ru")}>Change Ru</button>
    </div>
  );
};
