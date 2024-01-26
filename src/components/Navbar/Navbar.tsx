"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <header className="backdrop-blur-md bg-dark-200/30 dark:bg-dark-900/30 fixed w-full z-20 top-0 left-0">
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
              className="p-2 text-sm text-dark-700 dark:text-dark-200 rounded-lg md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {navbarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                )}
              </svg>
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
                className="relative overflow-hidden z-10 p-2  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary-500 before:backdrop-blur-lg before:rounded-lg  rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300 text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50"
              >
                Experience
              </Link>
            </li>
            <li className="text-center">
              <Link
                className="relative overflow-hidden z-10 p-2  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary-500 before:backdrop-blur-lg before:rounded-lg  rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300 text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50"
                href="#projects"
              >
                Projects
              </Link>
            </li>
            <li className="text-center">
              <Link
                className="relative overflow-hidden z-10 p-2  before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-primary-500 before:backdrop-blur-lg before:rounded-lg  rounded-xl before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300 text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50"
                href="#about"
              >
                About me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
