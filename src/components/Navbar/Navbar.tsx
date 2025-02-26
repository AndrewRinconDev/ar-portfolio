"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { useTranslation } from "react-i18next";
import Icon from "../Icon/Icon";
import { navbarLinks } from "./NavbarLinks";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { t } = useTranslation();

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="backdrop-blur-sm bg-[#0c030e]/60 dark:bg-dark-900/30 w-full z-20 top-0 left-0 fixed">
      <nav className="container px-2 w-full md:w-[90%] max-w-[850px] xl:max-w-[1000px] flex flex-wrap items-center justify-between mx-auto py-2 text-white">
        <Link
          href="/"
          className="flex gap-2 w-14 h-12 items-center self-center text-3xl font-black whitespace-nowrap text-primary-600 dark:text-primary-400 relative p-2"
        >
          <Image src="/Logos/AD_logo.webp" alt="Logo image" fill />
        </Link>
        <div className="relative inline-flex text-left md:order-2">
          <LanguageDropdown />
          <div>
            <button
              onClick={toggleNavbar}
              className="p-2 text-sm text-white dark:text-white rounded-lg md:hidden"
            >
              <Icon
                name={navbarOpen ? "mobileMenu" : "close"}
                className="size-6 text-white dark:invert"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <div
          className={`${!navbarOpen ? "hidden" : ""
            } block bg-black/50 dark:bg-black/70 md:bg-transparent animate-fade-down animate-duration-200 absolute md:relative left-0 top-[70px] md:top-auto items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-500`}
        >
          <ul className="flex flex-col gap-0 md:gap-6 pt-0 font-medium  md:flex-row  md:mt-0 md:border-0">
            {navbarLinks.map((link, index) => (
              <li className="text-center" key={`${index}-navbar-link`}>
                <Link
                  href={link.href}
                  onClick={closeNavbar}
                  className="p-2 group relative w-fit"
                >
                  <span>{t(link.label_key)}</span>
                  <span className="absolute -bottom-1 left-0 w-0 transition-all duration-200 h-0.5 bg-[#651F52] group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
