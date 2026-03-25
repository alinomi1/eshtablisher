"use client";
import { DropdownIcon } from '../../../../../../public/icons/icons';
import Image from 'next/image';
import Cta from '@/common/Cta';
import { useTranslations } from 'next-intl';
import React, { Suspense, useState } from 'react';
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useSearchParams } from 'next/navigation';

const ConnectInner = () => {
    const searchParams = useSearchParams();
    const t = useTranslations("contact");
    const tCommon = useTranslations("common");
    const [isServiceOpen, setIsServiceOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const serviceLinks = [
        { name: tCommon("services_nav.business_setup_uae"), value: "business-setup-uae" },
        { name: tCommon("services_nav.strategy"), value: "strategy" },
        { name: tCommon("services_nav.angel"), value: "angel" },
        { name: tCommon("services_nav.marketing"), value: "marketing" },
        { name: tCommon("services_nav.formation"), value: "formation" },
        { name: tCommon("services_nav.hr_payroll"), value: "hr-payroll" },
        { name: tCommon("services_nav.finance"), value: "finance" },
    ];

    const serviceFromUrl = searchParams.get("service");

    const matchedService = serviceLinks.find(
        (service) => service.value === serviceFromUrl
    );

    const currentService = selectedService || matchedService?.name || "";

    return (
        <>
            <section className='bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30'>
                <div className="container-1200 px-5">
                    {/* Top Info */}
                    <div className="bg-[#F7F1E5] rounded-xl p-4 sm:p-5 md:p-6 flex flex-col md:flex-row md:flex-wrap justify-between items-stretch md:items-center" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <div className="flex flex-col items-center justify-center flex-1 py-4 sm:py-5 md:py-0 border-b md:border-b-0 md:border-r border-[#E5C999]/50 last:border-0">
                            <span className="text-base sm:text-lg md:text-xl text-black font-extrabold capitalize">{t("contact_page.email")}</span>
                            <a href="mailto:julie@gmail.com" className="font-[350] text-sm text-black pt-2 sm:pt-3 break-all text-center">finance@establisherai.com</a>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-1 py-4 sm:py-5 md:py-0 border-b md:border-b-0 md:border-r border-[#ECD29A] last:border-0">
                            <span className="text-base sm:text-lg md:text-xl text-black font-extrabold capitalize">{t("contact_page.contact")}</span>
                            <a href="tel:+971585934816" className="font-[350] text-sm text-black pt-2 sm:pt-3 text-center">+971 585934816</a>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-1 py-4 sm:py-5 md:py-0">
                            <span className="text-base sm:text-lg md:text-xl text-black font-extrabold capitalize">{t("contact_page.location")}</span>
                            <p className="font-[350] text-sm text-black pt-2 sm:pt-3 text-center">{t("contact_page.place")}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-12 items-start mt-10 sm:mt-12 md:mt-14 lg:mt-16" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        {/* Left */}
                        <div>
                            <span className="inline-block rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black capitalize">
                                {t("contact_page.badge")}
                            </span>

                            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] lg:leading-18 max-w-xl font-extrabold text-black pt-5 sm:pt-6 lg:pt-8">
                                {t("contact_page.title")}
                            </h1>

                            <div className="space-y-6 sm:space-y-8 md:space-y-10 pt-8 sm:pt-10 md:pt-12 lg:pt-16">
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F7F1E5] rounded-[3px] flex items-center justify-center shrink-0">
                                        <Image
                                            src="/images/customer-support.png"
                                            width={36}
                                            height={36}
                                            alt="customer support"
                                            className="object-cover w-7 h-7 sm:w-9 sm:h-9"
                                        />
                                    </div>
                                    <span className="text-base sm:text-lg font-bold text-black leading-5 capitalize">
                                        {t("contact_page.features.support")}
                                    </span>
                                </div>

                                <div className="max-w-69 h-px bg-[#D9DBDF]"></div>

                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F7F1E5] rounded-[3px] flex items-center justify-center shrink-0">
                                        <Image
                                            src="/images/emergency-service.png"
                                            width={36}
                                            height={36}
                                            alt="emergency service."
                                            className="object-cover w-7 h-7 sm:w-9 sm:h-9"
                                        />
                                    </div>
                                    <span className="text-base sm:text-lg font-bold text-black leading-5 capitalize">
                                        {t("contact_page.features.emergency")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div>
                            <h3 className="text-[20px] sm:text-[22px] leading-[1.2] font-extrabold text-black capitalize">
                                {t("contact_page.form_title")}
                            </h3>

                            <p className="text-black text-sm font-[350] max-w-md pt-3 sm:pt-4 leading-6">
                                {t("contact_page.form_subtitle")}
                            </p>

                            <form className="pt-8 sm:pt-10 md:pt-12 flex flex-col gap-4 sm:gap-5">
                                <div className="border-b border-[#D9DBDF] py-2">
                                    <input
                                        type="text"
                                        placeholder={t("contact_page.name")}
                                        className="w-full outline-none text-base sm:text-lg text-black placeholder:text-[#7A7C81] bg-transparent"
                                    />
                                </div>

                                <div className="border-b border-[#D9DBDF] py-2">
                                    <input
                                        type="tel"
                                        placeholder={t("contact_page.mobile")}
                                        className="w-full outline-none text-base sm:text-lg text-black placeholder:text-[#7A7C81] bg-transparent"
                                    />
                                </div>
                                <div
                                    className="relative border-b border-[#D9DBDF] py-2"
                                    onMouseEnter={() => setIsServiceOpen(true)}
                                    onMouseLeave={() => setIsServiceOpen(false)}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setIsServiceOpen((prev) => !prev)}
                                        className="w-full flex items-center justify-between text-base sm:text-lg bg-transparent cursor-pointer"
                                    >
                                        <span className={currentService ? "text-black" : "text-[#7A7C81]"}>
                                            {currentService || t("contact_page.service")}
                                        </span>
                                        <DropdownIcon
                                            className={`text-black shrink-0 transition-transform duration-300 ${isServiceOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    {isServiceOpen && (
                                        <div className="absolute left-0 top-full z-20 w-full pt-4">
                                            <div className="bg-[#FFFFFF38] backdrop-blur-[80px] rounded-2xl overflow-hidden">
                                                {serviceLinks.map((service, index) => (
                                                    <button
                                                        type="button"
                                                        key={index}
                                                        onClick={() => {
                                                            setSelectedService(service.name);
                                                            setIsServiceOpen(false);
                                                        }}
                                                        className={`block w-full text-left p-4 text-base text-black capitalize font-normal hover:bg-white/10 transition-colors border-[#0000001F] ${index !== serviceLinks.length - 1 ? "border-b" : ""}`}
                                                    >
                                                        {service.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <input type="hidden" name="service" value={currentService} />
                                <div className="border-b border-[#D9DBDF] py-2">
                                    <textarea
                                        placeholder={t("contact_page.message")}
                                        rows={1}
                                        className="w-full outline-none text-base sm:text-lg text-black placeholder:text-[#7A7C81] bg-transparent resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-8 sm:pt-10 md:pt-12">
                                    <Cta
                                        text={tCommon("buttons.book_consultation")}
                                        href={getWhatsAppLink("Hello, I want to book a consultation.")} />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const Connect = () => {
    return (
        <Suspense>
            <ConnectInner />
        </Suspense>
    );
};

export default Connect;