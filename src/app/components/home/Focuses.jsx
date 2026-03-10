"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

// Structural data only - no hardcoded text
const desktopItems = [
    { id: "A", key: "strategy", side: "left", className: "-top-5 right-[calc(50%+220px)] lg:right-[calc(41%+250px)] w-[200px]" },
    { id: "B", key: "angel", side: "left", className: "top-28 right-[calc(50%+290px)] lg:right-[calc(40%+340px)] w-[220px]" },
    { id: "C", key: "setup", side: "left", className: "top-60 right-[calc(50%+275px)] lg:right-[calc(34%+350px)] w-[250px]" },
    { id: "D", key: "hr", side: "left", className: "bottom-0 right-[calc(50%+140px)] lg:right-[calc(42%+170px)] w-[240px]" },
    { id: "E", key: "marketing", side: "right", className: "-top-5 left-[calc(50%+220px)] lg:left-[calc(42%+250px)] w-[200px]" },
    { id: "F", key: "banking", side: "right", className: "top-28 left-[calc(50%+290px)] lg:left-[calc(40%+340px)] w-[220px]" },
    { id: "G", key: "finance", side: "right", className: "top-60 left-[calc(50%+275px)] lg:left-[calc(33%+350px)] w-[246px]", contentClassName: "pl-24" },
    { id: "H", key: "risk", side: "right", className: "bottom-0  left-[calc(50%+140px)] lg:left-[calc(28%+350px)] w-[230px]" },
];

function FocusLabel({ item }) {
    const t = useTranslations("home");
    const isLeft = item.side === "left";
    const points = t.raw(`focus.items.${item.key}.points`) || [];

    return (
        <div className={`absolute ${item.className}`}>
            <div className="relative">
                {/*  L-shape border */}
                <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-black" />
                <div
                    className={`absolute bottom-0 h-18.75 w-[0.5px] bg-black ${isLeft ? "left-0" : "right-0"
                        }`}
                />
                {/* line only for D and H */}
                {item.id === "D" && (
                    <div className="absolute bottom-0 right-0 h-24 w-[0.5px] bg-black" />
                )}

                {item.id === "H" && (
                    <div className="absolute bottom-0 left-0 h-28 w-[0.5px] bg-black" />
                )}

                <div className={`p-4 text-left ${item.contentClassName ?? ""}`}>
                    <h3 className="whitespace-nowrap text-base font-extrabold uppercase text-black">
                        <span className="mr-1 text-base font-extrabold text-[#ADA9A0]">
                            {item.id}.
                        </span>
                        {t(`focus.items.${item.key}.title`)}
                    </h3>

                    <ul className="mt-1 space-y-0.5 whitespace-nowrap pl-3 text-[10px] leading-[1.35] capitalize text-black">
                        {points.map((point, index) => (
                            <li key={index}>
                                <span>- {point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

const Focuses = () => {
    const t = useTranslations("home");

    return (
        <section className="bg-[#F7F1E5] py-12 md:py-14 lg:py-16">
            <div className="container-1200 px-5">
                <div className="text-center" data-aos="zoom-in-down">
                    <span className="inline-flex rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                        {t("main_focus.badge")}
                    </span>
                    <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] lg:leading-16 font-extrabold text-black uppercase">
                        {t("main_focus.title")}
                    </h2>
                </div>

                {/* Desktop layout */}
                <div className="relative mx-auto mt-16 lg:mt-20 hidden w-full md:block h-full md:h-[500px]" data-aos="zoom-in">
                    <div className="absolute left-1/2 top-60 z-10 w-123.5 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            <Image src="/images/focuses.png" alt="Business 360 diagram" width={560} height={490} priority className="h-auto w-full object-contain" />
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <div className="mb-[2%] ml-[1%] text-center leading-none text-black">
                                    <h3 className="text-[36px] font-extrabold text-black capitalize">{t("focus.center.title")}</h3>
                                    <div className="mt-1 text-2xl font-medium">{t("focus.center.subtitle")}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {desktopItems.map((item) => (
                        <FocusLabel key={item.id} item={item} />
                    ))}
                </div>

                {/* Mobile layout */}
                <div className="mt-10 md:hidden">
                    <div className="mx-auto max-w-[360px]">
                        <div className="relative">
                            <Image src="/images/focuses.png" alt="Business 360 diagram" width={494} height={432} priority className="h-auto w-full object-contain" />
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <div className="text-center leading-none text-black">
                                    <div className="text-[24px] font-extrabold">{t("focus.center.title")}</div>
                                    <div className="mt-1 text-[18px] font-medium">{t("focus.center.subtitle")}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {desktopItems.map((item) => (
                            <div key={item.id} className="border-l border-[#7A746C] bg-white/40 p-4 text-left">
                                <h3 className="text-[14px] font-extrabold uppercase leading-tight text-black">
                                    <span className="mr-1 font-medium text-[#7A746C]">{item.id}.</span>
                                    {t(`focus.items.${item.key}.title`)}
                                </h3>
                                <ul className="mt-3 space-y-1.5 text-[12px] leading-[1.4] text-black">
                                    {(t.raw(`focus.items.${item.key}.points`) || []).map((point, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full bg-[#4D4A45]" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Focuses;