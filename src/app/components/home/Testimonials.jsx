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
                // Changed to false so you can see it move even if mouse is over it
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
        <section className="bg-[#F6F0E3] py-16 overflow-hidden">
            <div className="flex flex-col items-center">
                <span className="inline-flex items-center rounded-full bg-white px-6 py-2 text-lg font-bold text-black shadow-sm">
                    Service Countries
                </span>

                <h2 className="capitalize font-extrabold text-black leading-tight text-[40px] md:text-[56px] pt-8 text-center">
                    Our Global Service Coverage
                </h2>

                <div className="mt-6 w-full">
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
                        {/* py-12 gives room for the scaled-up card so it doesn't clip */}
                        <CarouselContent className="-ml-4 md:-ml-8 items-stretch py-12">
                            {testimonials.map((t, idx) => {
                                const isActive = idx === selected;

                                return (
                                    <CarouselItem
                                        key={idx}
                                        // REMOVED transition-all duration-700 from here!
                                        className="basis-[85%] md:basis-1/3 lg:basis-[30%]  flex"
                                    >
                                        <div
                                            className={`
                                                flex-1 flex flex-col justify-between rounded-[16px] p-6
                                                transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
                                                transform-gpu
                                                ${isActive
                                                    ? "bg-white opacity-100 scale-105  z-20"
                                                    : "bg-white opacity-70 scale-90 z-10"
                                                }
                                            `}
                                        >
                                            <div>
                                                <TestimonialsIcon />
                                                <p className="text-xl text-black font-medium leading-relaxed py-10">
                                                    "{t.text}"
                                                </p>
                                            </div>

                                            <div>
                                                <div className="text-sm font-bold text-black uppercase ">
                                                    {t.name}
                                                </div>
                                                <div className="text-base text-black font-normal">
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