import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const TimeLine = () => {
    const t = useTranslations("services")
    return (
        <>
            <section className="bg-[#F6F6F6] py-12  md:py-14 lg:py-16">
                <div className="container-1200 px-5 flex flex-col items-center text-center">
                    {/* Header Content */}
                    <span className="inline-flex rounded-full bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                        {t("business_setup_uae.timeline.badge")}
                    </span>

                    <h2 className="capitalize font-extrabold text-black leading-tight text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  pt-6 sm:pt-8 max-w-full">
                        {t("business_setup_uae.timeline.title")}
                    </h2>

                    <div className="relative w-full max-w-226 h-168.25 mx-auto mt-10 sm:mt-12 md:mt-16" data-aos="zoom-in">
                        <Image
                            src="/images/timeline-pic.svg"
                            alt="Business Focuses Diagram"
                            width={904}
                            height={673}
                            priority
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, 904px"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default TimeLine