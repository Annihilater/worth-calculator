"use client";

import React from 'react';
import { useLanguage } from './LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center gap-0.5 p-1 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm">
      <button
        onClick={() => setLanguage('zh')}
        className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
          language === 'zh'
            ? 'bg-blue-500 text-white dark:bg-blue-600'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
          language === 'en'
            ? 'bg-blue-500 text-white dark:bg-blue-600'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('ja')}
        className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
          language === 'ja'
            ? 'bg-blue-500 text-white dark:bg-blue-600'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        日本語
      </button>
    </div>
  );
}; 