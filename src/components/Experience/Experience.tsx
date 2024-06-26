"use client";
import { useTranslation } from "react-i18next";
import CV from "@/cv.json";
import Icon from "../Icon/Icon";

export default function Experience() {
  const { t } = useTranslation();
  const { experience } = CV;
  return (
    <section
      id="experience"
      className="w-full sm:w-[90%] lg:max-w-[850px] xl:max-w-[1000px] pt-12 md:pt-20 mx-auto px-4 md:px-0"
    >
      <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black dark:text-white">
        <Icon
          name="briefcase"
          className="size-7 text-black dark:invert"
          width={24}
          height={24}
        />
        {t("experience_label")}
      </h2>
      <ol className="relative border-s border-gray-400 dark:border-gray-200 ml-3">
        {experience.map((job, index) => (
          <li className="mb-10 ms-4" key={`experience-${index}`}>
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700 dark:bg-slate-50"></div>
            <h3 className="text-lg font-semibold text-[#08107d] dark:text-sky-300/80 mt-2">
              {t(job.position_key)} - {job.company}
            </h3>
            <time className="block mb-2 text-sm leading-none text-gray-600 font-semibold dark:text-black-200/90">
              {t(job.startDate_key)} - {t(job.endDate_key)}
            </time>
            <p className="mb-4 text-base font-normal dark:text-white text-pretty text-justify">
              {t(job.summary_key)}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
