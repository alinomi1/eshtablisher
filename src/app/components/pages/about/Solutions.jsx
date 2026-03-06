"use client";

import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { NextIcon } from '../../../../../public/icons/icons';
import Link from 'next/link';

const services = [
    {
        id: "01",
        title: "Business Strategy",
        description: "Navigate company set up Globally with expert guidance on structure, licensing, compliance, and market strategy.",
        image: "/images/about-solution-1.png",
    },
    {
        id: "02",
        title: "Business Angel",
        description: "Tax guidance in global markets, covering structure, compliance, and innovative tax planning for sustainable growth.",
        image: "/images/about-solution-2.png",
    },
    {
        id: "03",
        title: "Market Expansion",
        description: "Comprehensive support for entering new territories, including localized research and strategic partnerships.",
        image: "/images/about-solution-1.png",
    },
];

const Solutions = () => {
    const [api, setApi] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!api) return;

        const updateCarousel = () => {
            const snaps = api.scrollSnapList().length;
            const selected = api.selectedScrollSnap();

            let calculatedProgress = ((selected + 1) / snaps) * 100;

            if (!api.canScrollNext()) {
                calculatedProgress = 100;
            }

            setProgress(calculatedProgress);
        };

        updateCarousel();
        api.on("select", updateCarousel);

        return () => {
            api.off("select", updateCarousel);
        };
    }, [api]);

    return (
        <section className="bg-[#F7F1E5] py-14 sm:py-16 md:py-20 lg:py-24 xl:py-24 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
                {/* Left Content */}
                <div className="lg:col-span-6 w-full px-4 sm:px-5 md:px-6 lg:pl-16 lg:pr-6 xl:pl-24 2xl:pl-40">
                    <span className="inline-block rounded-full bg-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base lg:text-[18px] font-bold text-black capitalize">
                        Our Services
                    </span>

                    <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] leading-[1.2] lg:leading-18 font-extrabold text-[#0E0F22]">
                        Tailored End-to-End Solutions
                    </h2>

                    <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-16 text-sm sm:text-base leading-6 sm:leading-7 font-[350] text-black max-w-114">
                        We provide a complete suite of professional services designed to support your business at every stage of its global journey:
                    </p>
                </div>

                {/* Right Slider */}
                <div className="lg:col-span-6 w-full pl-4 sm:pl-5 md:pl-6 lg:pl-0">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {services.map((service) => (
                                <CarouselItem
                                    key={service.id}
                                    className="pr-4 sm:pr-5 md:pr-6 basis-[85%] sm:basis-[70%] md:basis-[52%] lg:basis-1/2"
                                >
                                    <div className="bg-white rounded-[16px] overflow-hidden">
                                        <div className="relative h-52 sm:h-56 md:h-60 lg:h-66 w-full">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>

                                        <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-4 sm:gap-5 lg:gap-6">
                                            <span className="text-[28px] sm:text-[34px] lg:text-[40px] leading-none font-extrabold text-black/24">
                                                {service.id}
                                            </span>

                                            <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] leading-[1.2] capitalize text-black font-extrabold">
                                                {service.title}
                                            </h3>

                                            <p className="text-black text-sm sm:text-base leading-6 max-w-84">
                                                {service.description}
                                            </p>

                                            <Link
                                                href="#"
                                                className="text-start text-[#0E0F22] capitalize font-bold text-sm sm:text-base hover:underline cursor-pointer underline-offset-8 decoration-2 hover:opacity-75 transition-all"
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            {/* Custom Bottom Controls */}
            <div className='container-1200 px-4 sm:px-5 md:px-6 lg:px-5 mt-8 sm:mt-10'>
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 w-full px-0 sm:px-1 md:px-2">
                    {/* Visual Progress Bar */}
                    <div className="h-2 grow rounded-[10px] bg-white relative">
                        <div
                            className="absolute left-0 top-0 h-full bg-[#E5C999] rounded-[10px] transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3 sm:gap-4 lg:gap-5 shrink-0">
                        <button
                            onClick={() => api?.scrollPrev()}
                            className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full cursor-pointer flex items-center justify-center bg-[#ECD29A] rotate-180 hover:bg-white transition-all duration-200 text-white hover:text-[#ECD29A]"
                        >
                            <NextIcon />
                        </button>

                        <button
                            onClick={() => api?.scrollNext()}
                            className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full cursor-pointer flex items-center justify-center bg-[#ECD29A] hover:bg-white transition-all text-white duration-200 hover:text-[#ECD29A]"
                        >
                            <NextIcon />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;