"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

import CV from "@/cv.json";
import Icon from "../Icon/Icon";
import { IconKeys } from "../Icon/IIcon";

import "./Projects.css";

export default function Projects() {
  const { t } = useTranslation();
  const { projects } = CV;

  return (
    <section id="projects" className="w-full bg-gray-100">
      <div className="w-full sm:w-[90%] lg:max-w-[850px] xl:max-w-[1000px] py-12 md:pt-20 mx-auto px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black dark:text-white">
          <Icon
            name="webCode"
            className="size-7 text-black dark:invert"
            width={24}
            height={24}
          />
          {t("projects_label")}
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              href={project.url}
              data-title="Demo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex align-middle items-center gap-1 icon"
              key={`project-${project.name}-${index}`}
            >
              <div className="project-card">
                <div className="aspect-video rounded-sm relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name_key}
                    layout="fill"
                    objectFit="cover"
                    className="project-card-image"
                  />
                </div>
                <div
                  rel="noopener noreferrer"
                  className="text-lg mx-auto font-semibold text-center text-[#08107d] dark:text-sky-300/80 flex gap-2 group relative w-fit"
                >
                  {/* <div className="flex align-middle items-center group gap-2 relative"> */}
                    <span>{t(project.name_key)}</span>
                    <Icon
                      name="openLink"
                      className="size-4 text-black dark:invert"
                      width={14}
                      height={14}
                      color="#08107d"
                    />
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-200 h-0.5 bg-[#08107d] group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-200 h-0.5 bg-[#08107d] group-hover:w-3/6"></span>

                </div>
                <div className="flex justify-center gap-3 align-middle flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span
                      className="min-h-7 min-w-7"
                      key={`tech-${project.name}-${tech.name}-${index}`}
                    >
                      <Icon
                        key={`tech-${index}`}
                        name={tech.icon as IconKeys}
                        className="size-6 text-black dark:invert hover:size-[26px] transition-all"
                        width={24}
                        height={24}
                        title={tech.name}
                      />
                    </span>
                  ))}
                </div>
                <p className="text-base dark:text-white text-pretty text-justify mt-1">
                  {t(project.description_key)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
