"use client";

import React from "react";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
    const t = useTranslations("home");

    const items = [
        {
            no: "01",
            title: t("why_choose_us.points.0.title"),
            desc: t("why_choose_us.points.0.desc"),
        },
        {
            no: "02",
            title: t("why_choose_us.points.1.title"),
            desc: t("why_choose_us.points.1.desc"),
        },
        {
            no: "03",
            title: t("why_choose_us.points.2.title"),
            desc: t("why_choose_us.points.2.desc"),
        },
        {
            no: "04",
            title: t("why_choose_us.points.3.title"),
            desc: t("why_choose_us.points.3.desc"),
        },
    ];

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
            <div className="container-1200 px-5">
                {/* heading */}
                <div className="text-center" data-aos="zoom-in-down">
                    <span className="inline-flex rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                        {t("why_choose_us.badge")}
                    </span>

                    <h2 className="mt-3 sm:mt-4 capitalize text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] text-black">
                        {t("why_choose_us.title")}
                    </h2>
                </div>

                {/* cards */}
                <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8 md:grid-cols-2" data-aos="zoom-in-up">
                    {items.map((item) => (
                        <div
                            key={item.no}
                            className="group rounded-[12px] border border-[#D9DBDF] bg-white hover:bg-[#0E0F22] duration-500 ease-in-out transition-colors px-5 sm:px-6 py-4"
                        >
                            <span className="block text-base sm:text-lg font-extrabold text-black group-hover:text-[#ECD29A]">
                                {item.no}
                            </span>

                            <h3 className="py-4 sm:py-5 lg:py-6 text-[22px] sm:text-[24px] lg:text-[28px] leading-[1.2] font-extrabold text-black group-hover:text-white">
                                {item.title}
                            </h3>

                            <p className="text-sm sm:text-base leading-6 sm:leading-7 font-[350] text-black group-hover:text-white">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;