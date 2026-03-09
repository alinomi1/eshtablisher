"use client"
import React, { useState } from 'react';
import { DropdownIcon } from '../../../../../../public/icons/icons';
import { useTranslations } from 'next-intl';




const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(-1);
    const t = useTranslations("services")

    const faqData = [
        {
            id: "01",
            question: t("company_formation.faq.items.01.question"),
            answer: t("company_formation.faq.items.01.answer"),
        },
        {
            id: "02",
            question: t("company_formation.faq.items.02.question"),
            answer: t("company_formation.faq.items.02.answer"),
        },
        {
            id: "03",
            question: t("company_formation.faq.items.03.question"),
            answer: t("company_formation.faq.items.03.answer"),
        },
        {
            id: "04",
            question: t("company_formation.faq.items.04.question"),
            answer: t("company_formation.faq.items.04.answer"),
        },
        {
            id: "05",
            question: t("company_formation.faq.items.05.question"),
            answer: t("company_formation.faq.items.05.answer"),
        },
    ];

    return (
        <section className='pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-30'>
            <div className="container-1200 px-5">
                {/* Top Title */}
                <div className="text-center" data-aos="zoom-in-down">
                    <span className="inline-flex rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                        {t("company_formation.faq.badge")}
                    </span>
                    <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] lg:leading-16 font-extrabold text-black">
                        {t("company_formation.faq.title")}
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 " data-aos="fade-up">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b border-[#D9DBDF] py-4 sm:py-7">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-start text-left gap-4 sm:gap-6 group"
                            >
                                {/* Number Box */}
                                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F7F1E5] rounded-sm flex items-center justify-center font-extrabold text-black text-sm  md:text-base lg:text-[22px]">
                                    {faq.id}
                                </div>

                                {/* Question */}
                                <span className="grow pt-2.5 sm:pt-3 font-bold text-sm md:text-base lg:text-[22px] text-black leading-tight">
                                    {faq.question}
                                </span>

                                {/* Arrow */}
                                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F7F1E5] rounded-sm flex items-center justify-center transition-transform duration-300">
                                    <DropdownIcon
                                        className={`text-black transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </div>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <div className="pl-14 sm:pl-18 pr-14 mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <p className="text-sm  sm:text-base font-[350] text-black leading-relaxed max-w-3xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;