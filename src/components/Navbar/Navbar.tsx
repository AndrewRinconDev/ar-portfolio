"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { useTranslation } from "react-i18next";
import Icon from "../Icon/Icon";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { t } = useTranslation();

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <header className="backdrop-blur-md bg-dark-200/30 dark:bg-dark-900/30 w-full z-20 top-0 left-0">
      <nav className="container px-2 w-full md:w-[90%] max-w-[1000px] flex flex-wrap items-center justify-between mx-auto py-2 ">
        <Link
          href="/"
          className="flex gap-2 w-20 h-14 items-center self-center text-3xl font-black whitespace-nowrap text-primary-600 dark:text-primary-400 relative"
        >
          <Image src="/Logos/andrew-logo-bg.png" alt="Logo image" fill />
        </Link>
        <div className="relative inline-flex text-left md:order-2">
          <LanguageDropdown />
          <div>
            <button
              onClick={toggleNavbar}
              className="p-2 text-sm text-black dark:text-white rounded-lg md:hidden"
            >
              <Icon
                name={navbarOpen ? "mobileMenu" : "close"}
                className="size-6 text-black dark:invert"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <div
          className={`${
            !navbarOpen && "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-500`}
        >
          <ul className="flex flex-col gap-6 p-4 md:p-0 mt-4 font-medium  md:flex-row  md:mt-0 md:border-0">
            <li className="text-center">
              <Link
                href="#experience"
                className="relative overflow-hidden z-10 p-2"
              >
                {t("navbar_option_experience")}
              </Link>
            </li>
            <li className="text-center">
              <Link
                className="relative overflow-hidden z-10 p-2"
                href="#projects"
              >
                {t("navbar_option_projects")}
              </Link>
            </li>
            <li className="text-center">
              <Link className="relative overflow-hidden z-10 p-2" href="#about">
                {t("navbar_option_about")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
