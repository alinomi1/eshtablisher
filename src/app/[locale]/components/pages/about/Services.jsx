"use client";

import React, { useEffect, useState, } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { NextIcon } from '../../../../../../public/icons/icons';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const services = [
    { id: "01", key: "strategy", image: "/images/about-solution-1.png" },
    { id: "02", key: "angel", image: "/images/about-solution-2.png" },
    { id: "03", key: "digital_marketing", image: "/images/marketing-image.png" },
    { id: "04", key: "company_formation", image: "/images/formation-image.png" },
    { id: "05", key: "hr_payroll", image: "/images/payroll-image.png" },
    { id: "06", key: "finance", image: "/images/finance-image.png" },
];

const Services = () => {
    const [api, setApi] = useState(null);
    const [progress, setProgress] = useState(0);
    const t = useTranslations("home")



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
        <section className="bg-[#F6F6F6] py-12  md:py-14 lg:py-16 overflow-hidden">
            <div className="container-1200 px-5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center" data-aos="zoom-in-up">
                    {/* Left Content */}
                    <div className="lg:col-span-5 w-full">
                        <span className="inline-block rounded-full bg-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base lg:text-[18px] font-bold text-black capitalize">
                            {t("services.badge")}
                        </span>

                        <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  lg:leading-18 font-extrabold text-[#0E0F22]">
                            {t("services.title")}
                        </h2>

                        <p className="mt-5 sm:mt-8 md:mt-10 lg:mt-16 text-sm sm:text-base leading-6 sm:leading-7 font-[350] text-black max-w-114">
                            {t("services.description")}
                        </p>
                    </div>

                    {/* Right Slider */}
                    <div className="lg:col-span-7 w-full">
                        <div className="w-full lg:w-[calc(100%+max(0px,(100vw-1200px)/2))]">
                            <Carousel
                                setApi={setApi}
                                opts={{
                                    align: "start",
                                    loop: false,
                                }}
                                className="w-full cursor-grab active:cursor-grabbing"
                            >
                                <CarouselContent className="items-stretch">
                                    {services.map((service) => (
                                        <CarouselItem
                                            key={service.id}
                                            className="flex pr-2 basis-[85%] sm:basis-[70%] md:basis-[52%] lg:basis-[45%] grow"
                                        >
                                            <div className="bg-white rounded-[16px] overflow-hidden flex flex-col  h-full  w-full">
                                                <div className="relative h-52 sm:h-56 md:h-60 lg:h-66 w-full">
                                                    <Image
                                                        src={service.image}
                                                        alt="services image"
                                                        fill
                                                        className="object-cover"
                                                        priority
                                                    />
                                                </div>

                                                <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between flex-1  gap-4 sm:gap-5 lg:gap-6">
                                                    <span className="text-[28px] sm:text-[34px] lg:text-[40px] leading-none font-extrabold text-black/24">
                                                        {service.id}
                                                    </span>

                                                    <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] leading-[1.2] capitalize text-black font-extrabold">
                                                        {t(`services.cards.${service.key}.title`)}
                                                    </h3>

                                                    <p className="text-black text-sm sm:text-base leading-6 ">
                                                        {t(`services.cards.${service.key}.desc`)}
                                                    </p>

                                                    <Link
                                                        href="#"
                                                        className="mt-auto text-start text-[#0E0F22] capitalize font-bold text-sm sm:text-base hover:underline cursor-pointer underline-offset-8 decoration-2 hover:opacity-75 transition-all"
                                                    >
                                                        {t("services.buttons.learn_more")}
                                                    </Link>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
                {/* Custom Bottom  */}
                <div className=' mt-8 sm:mt-10 w-full'>
                    <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 w-full px-0 sm:px-1 md:px-2">
                        {/* Visual Progress Bar */}
                        <div className="h-2 grow rounded-[10px] bg-white relative min-w-full">
                            <div
                                className="absolute left-0 top-0 h-full bg-[#E5C999] rounded-[10px] transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-3 sm:gap-4 lg:gap-5 ">
                            <button
                                onClick={() => api?.scrollPrev()}
                                className="h-8 md:h-10 w-8 md:w-10  rounded-full cursor-pointer flex items-center justify-center bg-[#ECD29A] rotate-180 hover:bg-white transition-all duration-200 text-white hover:text-[#ECD29A]"
                            >
                                <NextIcon />
                            </button>

                            <button
                                onClick={() => api?.scrollNext()}
                                className="h-8 md:h-10 w-8 md:w-10  rounded-full cursor-pointer flex items-center justify-center bg-[#ECD29A] hover:bg-white transition-all text-white duration-200 hover:text-[#ECD29A]"
                            >
                                <NextIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;