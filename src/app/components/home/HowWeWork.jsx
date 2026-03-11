"use client";
import Cta from '@/common/Cta';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const HowWeWork = () => {
    const t = useTranslations("home");
    const [activeStep, setActiveStep] = useState(0);
    const [hoveredStep, setHoveredStep] = useState(null);

    const steps = [
        {
            id: t("process.step.step1"),
            title: t("process.steps.step_1"),
            cardTitle: t("process.active_card.step1.title"),
            cardDesc: t("process.active_card.step1.desc"),
            icon: "/images/evaluate-icon.png",
        },
        {
            id: t("process.step.step2"),
            title: t("process.steps.step_2"),
            cardTitle: t("process.active_card.step2.title"),
            cardDesc: t("process.active_card.step2.desc"),
            icon: "/images/plan-icon.png",
        },
        {
            id: t("process.step.step3"),
            title: t("process.steps.step_3"),
            cardTitle: t("process.active_card.step3.title"),
            cardDesc: t("process.active_card.step3.desc"),
            icon: "/images/develop-icon.png",
        },
        {
            id: t("process.step.step4"),
            title: t("process.steps.step_4"),
            cardTitle: t("process.active_card.step4.title"),
            cardDesc: t("process.active_card.step4.desc"),
            icon: "/images/deploy-icon.png",
        },
    ];
    return (
        <section className='bg-white'>
            <div className='container-1200 px-5' data-aos="zoom-out-up">
                {/* Top Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                    <div>
                        <span className="inline-flex capitalize rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                            {t("process.badge")}
                        </span>

                        <h2 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] capitalize font-extrabold text-black leading-[1.15] lg:leading-18 pt-5 sm:pt-6 lg:pt-8 max-w-133.25">
                            {t("process.title")}
                        </h2>
                    </div>

                    <div>
                        <p className="mb-8 sm:mb-9 lg:mb-10 font-[350] text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-black">
                            {t("process.description")}
                        </p>
                        <Cta />
                    </div>
                </div>

                {/* Bottom */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 xl:gap-32 mt-10 sm:mt-12 md:mt-14 lg:mt-16">
                    {/* left */}
                    <div className="relative">
                        <Image
                            width={488}
                            height={440}
                            src="/images/how-work.png"
                            alt="Process"
                            className="w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] object-cover rounded-[20px]"
                        />

                        {/*box */}
                        <div className="absolute bottom-0 right-0 lg:-right-12 xl:-right-20 bg-[#0E0F22] text-white p-4 sm:p-6 lg:p-8 rounded-[16px] max-w-64 xl:max-w-93">
                            <Image
                                src={steps[activeStep].icon}
                                alt={steps[activeStep].cardTitle}
                                width={64}
                                height={64}
                                className='object-cover w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16'
                            />

                            <h4 className="text-[22px] sm:text-[24px] capitalize lg:text-[28px] text-white font-extrabold py-5 lg:py-7 xl:py-10">
                                {activeStep !== null ? steps[activeStep].cardTitle : ""}
                            </h4>

                            <p className="text-white text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 font-[350]">
                                {activeStep !== null ? steps[activeStep].cardDesc : ""}
                            </p>
                        </div>
                    </div>

                    {/* Step List */}
                    <div className="flex flex-col border-l border-[#D9DBDF]">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => {
                                    setActiveStep(index);
                                    setHoveredStep(index);
                                }}
                                // onMouseLeave={() => setHoveredStep(null)}
                                onMouseLeave={() => {
                                    setHoveredStep(null);
                                    setActiveStep(0);
                                }}
                                className={`relative transition-all duration-300 py-4 sm:py-5 lg:py-4 pl-4 sm:pl-5 lg:pl-6 ${index !== steps.length - 1 ? 'border-b border-[#D9DBDF]' : ''
                                    } ${hoveredStep === index
                                        ? 'bg-[#0E0F22] before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-[#ECD29A]'
                                        : 'bg-transparent'
                                    }`}
                            >
                                <span
                                    className={`block text-base sm:text-lg font-extrabold ${hoveredStep === index ? 'text-white' : 'text-black'
                                        }`}
                                >
                                    {step.id}
                                </span>

                                <h3
                                    className={`text-[22px] sm:text-[24px] lg:text-[28px] leading-[1.2] font-extrabold pt-4 sm:pt-5 lg:pt-6 ${hoveredStep === index ? 'text-white' : 'text-black'
                                        }`}
                                >
                                    {step.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;