import { useState } from "react";
import { EnglishIcon, SpanishIcon } from "../Icons/LanguageIcons";
import { ArrowDownIcon } from "../Icons/Icons";

export default function LanguageDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="text-white rounded-md text-xs font-semibold bg-black/30 hover:bg-black/70 transition-all">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <EnglishIcon />
        English
        <ArrowDownIcon className={`${dropdownOpen && "rotate-180"}`} />
      </button>
      {dropdownOpen && (
        <ul className="block bg-black/50 animate-fade-down animate-duration-200 pt-0.5 absolute w-full">
          <li className="">
            <button className="hover:bg-black/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2">
              <SpanishIcon />
              Spanish
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:bg-black/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
              aria-expanded="true"
              aria-haspopup="true"
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
