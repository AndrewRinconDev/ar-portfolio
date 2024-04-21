"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import CV from "@/cv.json";
import Icon from "../Icon/Icon";
import { IconKeys } from "../Icon/IIcon";

import "./Banner.css";
import { colors } from "@/utils/Constants";

export default function Banner() {
  const { t } = useTranslation();
  const { profile_image, name_key, label_key, summary_key, profiles } =
    CV.basics;

  return (
    <section className="banner-section relative pt-24 px-4 pb-6 md:pt-0 md:min-h-screen md:flex md:flex-col md:justify-center w-screen">
      <div className="w-full sm:w-[90%] md:w-[90%] max-w-[850px] xl:max-w-[1000px] m-auto">
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center md:gap-x-4">
          <div className="mb-6 w-36 h-36 relative md:w-44 md:h-44 lg:w-56 lg:h-56 mx-auto">
            <Image
              src={profile_image}
              alt={t("banner_profile_image_label")}
              className="banner-image drop-shadow-lg shadow-lg dark:shadow-dark-800"
              loading="lazy"
              fill
            />
          </div>
          <header className="md:w-9/12 text-white text-center md:text-left">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-dark-700 dark:text-dark-200">
              {t("banner_title")}
              <span className={`text-[${colors.lightBlue}] dark:text-blue-300`}>
                {t(name_key)}
              </span>
            </h1>
            <span className="font-semibold inline-flex animate-background-shine text-gray-400/90 bg-clip-text text-xl">
              {t(label_key)}
            </span>
            <h2 className="lg:text-2xl md:text-xl mt-6 md:mt-10 text-dark-700 dark:text-dark-200 text-pretty text-justify px-4 md:text-left md:px-0">
              {t(summary_key)}
            </h2>
          </header>
        </div>
        <ul className="mt-6 md:mt-10 flex flex-wrap gap-4 px-4 md:px-0 justify-center md:justify-start">
          {profiles.map((profile) => (
            <li key={profile.network}>
              <Link
                href={profile.url}
                className="profile-button text-dark-800 dark:text-dark-200 border border-dark-300 dark:border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 text-xs md:text-base md:px-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-950 hover:scale-105 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name={profile.icon.name as IconKeys}
                  width={profile.icon.width}
                  height={profile.icon.height}
                  className="size-4 md:size-6 dark:invert"
                />
                {` ${profile.network}`}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute hidden md:flex bottom-4 left-0 w-full justify-end">
          <Link
            href="#experience"
            className="md:flex gap-2 animate-bounce dark:text-white text-black font-bold mr-8"
          >
            <Icon
              name="downwardsArrow"
              width={24}
              height={24}
              className="w-8 h-8"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
