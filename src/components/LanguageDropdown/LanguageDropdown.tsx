import { MouseEventHandler, useState } from "react";
import { EnglishIcon, SpanishIcon } from "../Icons/LanguageIcons";
import { ArrowDownIcon } from "../Icons/Icons";
import { useTranslation } from "react-i18next";

export default function LanguageDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const changeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <div className="text-black dark:text-white rounded text-xs font-semibold bg-transparent hover:bg-gray-400/30 transition-all">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {i18n.language === "es" ? <SpanishIcon /> : <EnglishIcon />}
        <ArrowDownIcon className={`${dropdownOpen && "rotate-180"}`} />
      </button>
      {dropdownOpen && (
        <ul className="block bg-gray-400/30 animate-fade-down animate-duration-200 pt-0.5 absolute w-fit rounded">
          <li>
            <button
              onClick={changeLanguage("es")}
              className="hover:bg-gray-400/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
            >
              <SpanishIcon />
              Spanish
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={changeLanguage("en")}
              className="hover:bg-gray-400/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
            >
              <EnglishIcon />
              English
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
