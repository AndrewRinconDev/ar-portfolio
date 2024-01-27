'use client';
import { I18nContext } from "react-i18next";
import i18n from "../index"

export default function I18nProvider({ children }) {
  return (
    <I18nContext.Provider value={i18n}>
      {children}
    </I18nContext.Provider>
  );
}