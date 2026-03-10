"use client";

import React, { useEffect, useMemo, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { TestimonialsIcon } from "../../../../public/icons/icons";
import { useTranslations } from "next-intl";

export default function Testimonials() {
    const t = useTranslations("home");
    const [api, setApi] = useState(null);
    const [selected, setSelected] = useState(0);

    const testimonials = [
        {
            text: t("testimonials.items.0.text"),
            name: t("testimonials.items.0.name"),
            role: t("testimonials.items.0.role"),
        },
        {
            text: t("testimonials.items.1.text"),
            name: t("testimonials.items.1.name"),
            role: t("testimonials.items.1.role"),
        },
        {
            text: t("testimonials.items.2.text"),
            name: t("testimonials.items.2.name"),
            role: t("testimonials.items.2.role"),
        },
        {
            text: t("testimonials.items.3.text"),
            name: t("testimonials.items.3.name"),
            role: t("testimonials.items.3.role"),
        },
        {
            text: t("testimonials.items.4.text"),
            name: t("testimonials.items.4.name"),
            role: t("testimonials.items.4.role"),
        },
    ];

    const autoplay = useMemo(
        () =>
            Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
            }),
        []
    );

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setSelected(api.selectedScrollSnap());
        };

        api.on("select", onSelect);
        api.on("reInit", onSelect);

        onSelect();

        return () => {
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api]);

    return (
        <section className="bg-[#F6F0E3] py-12  md:py-14 lg:py-16 overflow-hidden">
            <div className="px-5 flex flex-col items-center">
                {/* heading */}
                <div className="text-center" data-aos="zoom-in-down">
                    <span className="inline-flex items-center capitalize rounded-full bg-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-sm sm:text-base lg:text-lg font-bold text-black">
                        {t("testimonials.badge")}
                    </span>

                    <h2 className="capitalize font-extrabold text-black leading-[1.15] text-[30px] sm:text-[36px] md:text-[44px] lg:text-[56px] pt-5 sm:pt-6 lg:pt-8 text-center">
                        {t("testimonials.title")}
                    </h2>
                </div>
                <div className="mt-6 sm:mt-8 w-full" data-aos="fade-up">
                    <Carousel
                        setApi={setApi}
                        plugins={[autoplay]}
                        opts={{
                            align: "center",
                            loop: true,
                            skipSnaps: false,
                        }}
                        className="w-full max-w-[1400px] mx-auto"
                    >
                        <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4 lg:-ml-5 items-stretch py-8 sm:py-10 md:py-12">
                            {testimonials.map((item, idx) => {
                                const isActive = idx === selected;

                                return (
                                    <CarouselItem
                                        key={idx}
                                        className="pl-2 sm:pl-3 md:pl-4 lg:pl-5 basis-[86%] sm:basis-[70%] md:basis-1/2 lg:basis-[30%] flex"
                                    >
                                        <div
                                            className={`
                                                flex-1 flex flex-col justify-between rounded-[16px] p-4 sm:p-5 md:p-6
                                                transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
                                                transform-gpu
                                                ${isActive
                                                    ? "bg-white opacity-100 scale-[1.03] z-20"
                                                    : "bg-white opacity-70 scale-[0.96] z-10"
                                                }
                                            `}
                                        >
                                            <div>
                                                <TestimonialsIcon />
                                                <p className="text-base sm:text-lg md:text-xl text-black font-medium leading-7 sm:leading-8 py-6 sm:py-8 md:py-10">
                                                    &ldquo;{item.text}&rdquo;
                                                </p>
                                            </div>

                                            <div>
                                                <div className="text-xs sm:text-sm font-bold text-black uppercase">
                                                    {item.name}
                                                </div>
                                                <div className="text-sm sm:text-base text-black font-normal">
                                                    {item.role}
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}