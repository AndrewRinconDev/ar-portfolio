"use client"
import { useTranslation } from "react-i18next";

import CV from "@/cv.json";
import Icon from "../Icon/Icon";
import Stack from "../Stack/Stack";
import ProfileImageEffect from "../ProfileImageEffect/ProfileImageEffect";

import "./About.css"

function About() {
    const { t } = useTranslation();
    const { title_key, content_key, image } = CV.about;

    return (
        <section id="about" className="w-screen relative box-border">
            <div className="about-section w-full relative">
                <div className="w-full sm:w-[90%] lg:max-w-[850px] xl:max-w-[1000px] py-12 md:py-20 mx-auto px-4 md:px-0">
                    <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center text-black dark:text-white">
                        <Icon
                            name="computerUser"
                            className="size-7 text-black dark:invert"
                            width={24}
                            height={24}
                        />
                        {t(title_key)}
                    </h2>
                    <article className="flex flex-col md:flex-row justify-center gap-x-12">
                        <ProfileImageEffect url={image} className="self-center" />
                        <div className="text-justify p-4 w-full md:w-[350px] lg:w-[500px] md:text-lg -mt-24 md:mt-0">
                            <p>{t(content_key)}</p>
                        </div>
                    </article>
                </div>
            </div>
            <Stack />
        </section>
    );
}

export default About;
