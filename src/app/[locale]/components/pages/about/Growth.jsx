import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Growth = () => {
    const t = useTranslations("about")
    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
            <div className="container-1200 px-5 grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
                {/* Left */}
                <div className="w-full" data-aos="zoom-in-down">
                    <span className="inline-flex items-center rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                        {t("about_page.badge")}
                    </span>

                    <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  lg:leading-16 font-extrabold text-black ">
                        {t("about_page.title")}
                    </h2>

                    <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                        {t.rich("about_page.description_top", {
                            bold: (chunks) => <span className="font-extrabold text-black">{chunks}</span>
                        })}
                    </p>

                    <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                        {t("about_page.description_bottom")}
                    </p>
                </div>

                {/* Right */}
                <div className="relative w-full lg:max-w-xl aspect-576/624 overflow-hidden" data-aos="zoom-in-up">
                    <Image
                        src="/images/about-growth.webp"
                        alt="Establisher team discussion"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Growth;