import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'cs' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-10 h-10 rounded-full bg-white border-2 border-gray-100 hover:border-purple-200 transition-colors flex items-center justify-center text-lg shadow-sm hover:shadow-md"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? '🇨🇿' : 'en'}
    </button>
  );
}