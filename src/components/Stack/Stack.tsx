"use client"
import { useTranslation } from "react-i18next";

import CV from "@/cv.json";
import Icon from "../Icon/Icon";
import { IconKeys } from "../Icon/IIcon";

import "./Stack.css"

function Stack() {
    const { t } = useTranslation();
    const { stack } = CV.about;

    return (
        <div className="stack-section w-full relative">
            <div className="w-full sm:w-[90%] lg:max-w-[850px] xl:max-w-[1000px] py-12 md:pt-20 mx-auto px-4 md:px-0">
                <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black dark:text-white">
                    <Icon
                        name="stack"
                        className="size-10 text-black dark:invert"
                        color="#1ea1e8"
                        width={36}
                        height={36}
                    />
                    <span className="text-[#1ea1e8]">{t("stack_label")}</span>
                </h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {stack.map((stackElement, index) => (
                        <div
                            className="flex flex-col stack-card rounded-sm px-8 py-6 gap-6 transition-all duration-300 cursor-pointer hover:shadow-gray-400"
                            key={`stack-${stackElement.category_key}-${index}`}
                        >
                            <h3 className="text-2xl font-semibold text-sky-300/80 text-center">
                                {t(stackElement.category_key)}
                            </h3>
                            <div className="flex justify-center gap-6 align-middle flex-wrap">
                                {stackElement.technologies.map((tech, index) => (
                                    <span
                                        className="tech-icon min-h-12 min-w-12"
                                        key={`tech-${tech}-${index}`}
                                    >
                                        <Icon
                                            name={tech.icon as IconKeys}
                                            title={tech.name}
                                            className="size-10 text-black dark:invert"
                                            width={40}
                                            height={40}
                                        />
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Stack;
