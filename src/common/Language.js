"use client";
import React, { useState, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

const Language = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const locale = useLocale();
    const t = useTranslations('common');
    const router = useRouter();
    const pathname = usePathname();

    const selected = locale === "fr" ? "FR" : "EN";

    const handleChange = (nextLocale) => {
        if (nextLocale === locale) return;

        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
            setIsOpen(false);
        });
    };

    return (
        <div
            className="relative inline-block pb-6 -mb-6"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                type="button"
                className="text-[22px] leading-6 transition-colors cursor-pointer"
                disabled={isPending}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className={selected === "EN" ? "text-[#D4BB8D]" : "text-white"}>EN</span>
                <span className="text-white">/</span>
                <span className={selected === "FR" ? "text-[#D4BB8D]" : "text-white"}>FR</span>
            </button>

            {isOpen && (
                <div className="absolute lg:top-full top-8 lg-top-0 -left-18 md:-left-30 xl:left-0 z-20">
                    <div className="w-36 md:w-44 lg:w-60 h-28 rounded-xl bg-white/22 backdrop-blur-[80px] overflow-hidden">
                        <div
                            className="flex items-center justify-between border-b border-[#0000001F] px-6 py-4 cursor-pointer hover:bg-white/5"
                            onClick={() => handleChange("en")}
                        >
                            <span className={selected === "EN" ? "text-[#ECD29A] " : "text-black capitalize"}>
                                {t("languages.english")}
                            </span>
                            {selected === "EN" && (
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" className="text-[#ECD29A]">
                                    <path d="M1 7.5L7 13.5L19 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>

                        <div
                            className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-white/5"
                            onClick={() => handleChange("fr")}
                        >
                            <span className={selected === "FR" ? "text-[#ECD29A] " : "text-black capitalize"}>
                                {t("languages.french")}
                            </span>
                            {selected === "FR" && (
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" className="text-[#ECD29A]">
                                    <path d="M1 7.5L7 13.5L19 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Language;