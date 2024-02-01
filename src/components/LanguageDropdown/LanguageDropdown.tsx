import { useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../Icon/Icon";

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
        <Icon
          name={i18n.language === "es" ? "spanish" : "english"}
          width={750}
          height={500}
          className="w-4 h-3 text-black dark:invert"
        />
        <Icon
          name="downArrow"
          width={20}
          height={20}
          className={`${
            dropdownOpen && "rotate-180"
          } -ml-1 text-black dark:invert`}
        />
      </button>
      {dropdownOpen && (
        <ul className="block bg-gray-400/30 animate-fade-down animate-duration-200 pt-0.5 absolute w-max rounded">
          <li>
            <button
              onClick={changeLanguage("es")}
              className="hover:bg-gray-400/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
            >
              <Icon
                className="w-4 h-auto"
                name="spanish"
                width={750}
                height={500}
              />
              Spanish
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={changeLanguage("en")}
              className="hover:bg-gray-400/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
            >
              <Icon
                className="w-4 h-3"
                name="english"
                width={750}
                height={500}
              />
              English
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
