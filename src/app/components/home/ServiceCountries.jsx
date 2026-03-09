import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const ServiceCountries = () => {
    const t = useTranslations("home")
    return (
        <>
            <section className="bg-[#F2F2F2] py-12 md:py-14 lg:py-16">
                <div className="container-1200 px-5 flex flex-col items-center text-center">
                    {/* Header Content */}
                    <div data-aos="zoom-in-down">
                        <span className="inline-flex items-center rounded-full capitalize bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base lg:text-lg font-bold text-black shadow-sm">
                            {t("countries.badge")}
                        </span>

                        <h2 className="capitalize font-extrabold text-black lg:leading-[1.15] text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  pt-5 sm:pt-6 lg:pt-8">
                            {t("countries.title")}
                        </h2>

                    </div>
                    <div className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-16" data-aos="fade-up">
                        <Image
                            src="/images/global.png"
                            alt="Business Focuses Diagram"
                            width={1306}
                            height={723}
                            priority
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceCountries