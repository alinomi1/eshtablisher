"use client";

import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    // Calculate progress bar width
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!api) return;

        const updateCarousel = () => {
            const snaps = api.scrollSnapList().length;
            const selected = api.selectedScrollSnap();

            let calculatedProgress = ((selected + 1) / snaps) * 100;

            // If no more next scroll possible → force 100%
            if (!api.canScrollNext()) {
                calculatedProgress = 100;
            }

            setProgress(calculatedProgress);
        };

        updateCarousel();
        api.on("select", updateCarousel);
    }, [api]);

    return (
        <section className="bg-[#F7F1E5] py-24  overflow-hidden">
            <div className=" grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* Left Content */}
                <div className="lg:col-span-6 w-full pl-40">
                    <span className="inline-block rounded-full bg-white px-6 py-3 text-[18px] font-bold text-black capitalize">
                        Our Services
                    </span>
                    <h2 className="mt-8 text-[58px] leading-18  font-extrabold text-[#0E0F22]">
                        Tailored End-to-End Solutions
                    </h2>
                    <p className="mt-16 text-base font-[350] text-black max-w-114 ">
                        We provide a complete suite of professional services designed to support your business at every stage of its global journey:
                    </p>
                </div>

                {/* Right Slider */}
                <div className="lg:col-span-6 w-full">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="">
                            {services.map((service) => (
                                <CarouselItem key={service.id} className="px-6 md:basis-1/2 lg:basis-1/2">
                                    <div className="bg-white rounded-[16px] overflow-hidden">
                                        <div className="relative h-66 w-full">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col gap-6">
                                            <span className="text-[40px] font-extrabold text-black/24 ">
                                                {service.id}
                                            </span>
                                            <h3 className="text-[26px] capitalize text-black font-extrabold">
                                                {service.title}
                                            </h3>
                                            <p className="text-black text-base max-w-84">
                                                {service.description}
                                            </p>

                                            <Link href="#" className="text-start text-[#0E0F22] capitalize font-bold text-base hover:underline cursor-pointer underline-offset-8 decoration-2 hover:opacity-75 transition-all">
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
            <div className='container-1200 px-5 mt-10'>
                <div className="flex items-center gap-10 w-full px-2">
                    {/* Visual Progress Bar */}
                    <div className="h-2 grow rounded-[10px] bg-white relative">
                        <div
                            className="absolute left-0 top-0 h-full bg-[#E5C999] rounded-[10px] transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-5">
                        <button
                            onClick={() => api?.scrollPrev()}
                            className="h-14 w-14 rounded-full cursor-pointer flex items-center justify-center bg-[#ECD29A] rotate-180 hover:bg-white transition-all duration-200 text-white hover:text-[#ECD29A]"
                        >
                            <NextIcon />
                        </button>
                        <button
                            onClick={() => api?.scrollNext()}
                            className="h-14 w-14 rounded-full cursor-pointer flex items-center justify-center bg-[#ECD29A] hover:bg-white transition-all text-white duration-200 hover:text-[#ECD29A]"
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