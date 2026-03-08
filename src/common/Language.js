"use client";
import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const Language = () => {
    const [isOpen, setIsOpen] = useState(false);

    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const selected = locale === "fr" ? "FR" : "EN";

    const handleChange = (nextLocale) => {
        setIsOpen(false);

        if (nextLocale === locale) return;

        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <div className="relative inline-block">
            {/* Topbar Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-[22px] leading-6 transition-colors cursor-pointer"
            >
                <span className={selected === "EN" ? "text-[#D4BB8D]" : "text-white"}>EN</span>
                <span className="text-white">/</span>
                <span className={selected === "FR" ? "text-[#D4BB8D]" : "text-white"}>FR</span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full mt-4 left-0 w-60 h-28 rounded-xl bg-white/22 backdrop-blur-md z-20">
                    {/* English */}
                    <div
                        className="flex items-center justify-between border-b border-white/30 px-6 py-4 cursor-pointer hover:bg-white/5"
                        onClick={() => handleChange("en")}
                    >
                        <span className={selected === "EN" ? "text-[#ECD29A] capitalize" : "text-black"}>
                            English (EN)
                        </span>
                        {selected === "EN" && (
                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" className="text-[#ECD29A]">
                                <path d="M1 7.5L7 13.5L19 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </div>

                    {/* French */}
                    <div
                        className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-white/5"
                        onClick={() => handleChange("fr")}
                    >
                        <span className={selected === "FR" ? "text-[#ECD29A] capitalize" : "text-black"}>
                            French (FR)
                        </span>
                        {selected === "FR" && (
                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" className="text-[#ECD29A]">
                                <path d="M1 7.5L7 13.5L19 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Language;