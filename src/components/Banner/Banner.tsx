"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Icon from "../Icon/Icon";
import CV from "@/cv.json";
import { IconKeys } from "../Icon/IIcon";

export default function Banner() {
  const { t } = useTranslation();
  const { profile_image, name_key, label_key, summary_key, profiles } =
    CV.basics;

  return (
    <section className="relative mx-auto container pt-12 md:pt-0 md:min-h-[calc(100vh-70px)] lg:h-[calc(100vh-70px)] overflow-hidden md:max-w-[700px] lg:max-w-[800px] md:flex md:flex-col md:justify-center">
      <div className="text-left md:flex md:flex-row-reverse md:justify-center md:items-center md:gap-x-4">
        <div className="justify-center mb-6 w-36 h-36 relative md:w-44 md:h-44 lg:w-56 lg:h-56">
          <Image
            src={profile_image}
            alt={t("banner_profile_image_label")}
            className="drop-shadow-lg rounded-full shadow-lg dark:shadow-dark-800"
            loading="lazy"
            fill
          />
        </div>
        <header className="md:w-9/12 lg:w-8/12">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-dark-700 dark:text-dark-200">
            {t("banner_title")}
            <span className=" text-blue-600 dark:text-blue-300">
              {t(name_key)}
            </span>
          </h1>
          <span className=" font-semibold inline-flex animate-background-shine bg-[linear-gradient(110deg,#64748b,45%,#0f172a,55%,#64748b)] dark:bg-[linear-gradient(110deg,#b6eaff,45%,#065074,55%,#b6eaff)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
            {t(label_key)}
          </span>
          <h2 className="lg:text-2xl md:text-xl mt-6 md:mt-10 text-dark-700 dark:text-dark-200 text-pretty">
            {t(summary_key)}
          </h2>
        </header>
      </div>
      <ul className="mt-6 md:mt-10 flex flex-wrap gap-4 justify-start lg:px-2">
        {profiles.map((profile) => (
          <li key={profile.network}>
            <Link
              href={profile.url}
              className="rounded-full text-dark-800 dark:text-dark-200 border border-dark-300 dark:border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 text-xs md:text-base md:px-4 bg-gradient-to-r from-slate-50 to-slate-100  dark:from-slate-800 dark:to-slate-950 hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name={profile.icon.name as IconKeys}
                width={profile.icon.width}
                height={profile.icon.height}
                className="size-4 md:size-6 dark:text-white"
              />
              {` ${profile.network}`}
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute hidden md:flex bottom-4 w-full justify-end">
        <Link
          href="#experience"
          className="md:flex gap-2 animate-bounce dark:text-white font-bold"
        >
          <Icon
            name="downwardsArrow"
            width={24}
            height={24}
            className="w-8 h-8"
          />
        </Link>
      </div>
    </section>
  );
}
