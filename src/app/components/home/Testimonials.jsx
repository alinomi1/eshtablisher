"use client";

import React, { useEffect, useMemo, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { TestimonialsIcon } from "../../../../public/icons/icons";

const testimonials = [
    {
        text: "We have helped firms of all sizes compete and win internationally.",
        name: "Keri, UK",
        role: "CEO at PakDevStudio",
    },
    {
        text: "Exceptional consultancy services! Business Consultancy provided clear insights, tailored solutions, and hands-on support that transformed our operations.",
        name: "Keri, UK",
        role: "CEO at PakDevStudio",
    },
    {
        text: "They helped us expand internationally with seamless strategy and expert guidance. Their team simplified complex processes and delivered results.",
        name: "Keri, UK",
        role: "CEO at PakDevStudio",
    },
    {
        text: "A fantastic experience. Their comprehensive approach to strategy, HR, and recruitment empowered our business to grow with confidence.",
        name: "Keri, UK",
        role: "CEO at PakDevStudio",
    },
    {
        text: "Professional, responsive, and genuinely invested in results. The clarity and structure they brought to our roadmap made a huge difference.",
        name: "Keri, UK",
        role: "CEO at PakDevStudio",
    },
];

export default function Testimonials() {
    const [api, setApi] = useState(null);
    const [selected, setSelected] = useState(0);

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
        <section className="bg-[#F6F0E3] py-12 sm:py-14 md:py-16 overflow-hidden">
            <div className="px-4 sm:px-5 md:px-6 lg:px-5 flex flex-col items-center">
                <span className="inline-flex items-center rounded-full bg-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-sm sm:text-base lg:text-lg font-bold text-black shadow-sm">
                    Service Countries
                </span>

                <h2 className="capitalize font-extrabold text-black leading-[1.15] text-[30px] sm:text-[36px] md:text-[44px] lg:text-[56px] pt-5 sm:pt-6 lg:pt-8 text-center">
                    Our Global Service Coverage
                </h2>

                <div className="mt-6 sm:mt-8 w-full">
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
                        <CarouselContent className="-ml-4 sm:-ml-5 md:-ml-6 lg:-ml-8 items-stretch py-8 sm:py-10 md:py-12">
                            {testimonials.map((t, idx) => {
                                const isActive = idx === selected;

                                return (
                                    <CarouselItem
                                        key={idx}
                                        className="pl-4 sm:pl-5 md:pl-6 lg:pl-8 basis-[86%] sm:basis-[70%] md:basis-1/2 lg:basis-[30%] flex"
                                    >
                                        <div
                                            className={`
                                                flex-1 flex flex-col justify-between rounded-[16px] p-4 sm:p-5 md:p-6
                                                transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
                                                transform-gpu
                                                ${isActive
                                                    ? "bg-white opacity-100 scale-105 z-20"
                                                    : "bg-white opacity-70 scale-90 z-10"
                                                }
                                            `}
                                        >
                                            <div>
                                                <TestimonialsIcon />
                                                <p className="text-base sm:text-lg md:text-xl text-black font-medium leading-7 sm:leading-8 py-6 sm:py-8 md:py-10">
                                                    "{t.text}"
                                                </p>
                                            </div>

                                            <div>
                                                <div className="text-xs sm:text-sm font-bold text-black uppercase">
                                                    {t.name}
                                                </div>
                                                <div className="text-sm sm:text-base text-black font-normal">
                                                    {t.role}
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