import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Partners = () => {
    const t = useTranslations("about")
    return (
        <section className="bg-white pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-30">
            <div className="container-1200 px-5 grid  gap-10 sm:gap-12 lg:grid-cols-2">
                {/* Left */}
                <div className="relative w-full lg:max-w-xl aspect-576/624 overflow-hidden order-2 lg:order-1">
                    <Image
                        src="/images/about-partners.webp"
                        alt="Team meeting"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        data-aos="zoom-in-up"
                    />
                </div>

                {/* Right */}
                <div className='w-full order-1 lg:order-2 ' data-aos="zoom-in-down">
                    <span className="inline-flex items-center capitalize rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                        {t("who_we_are.badge")}
                    </span>

                    <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  lg:leading-16 font-extrabold text-black ">
                        {t("who_we_are.title")}
                    </h2>

                    <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                        {t("who_we_are.description")}
                    </p>

                    {/* border */}
                    <div className='border-b border-[#E5E7EB] mt-8 sm:mt-10 lg:mt-12'></div>

                    <p className='text-black text-base sm:text-lg font-normal leading-6 sm:leading-7 lg:leading-5 w-full py-4 sm:py-5'>
                        {t("who_we_are.points.founded")}
                    </p>

                    <div className='border-b border-[#E5E7EB]'></div>

                    <p className='text-black text-base sm:text-lg font-normal leading-6 sm:leading-7 lg:leading-5 w-full py-4 sm:py-5'>
                        {t("who_we_are.points.trusted")}
                    </p>

                    <div className='border-b border-[#E5E7EB]'></div>

                    <p className='text-black text-base sm:text-lg font-normal leading-6 sm:leading-7 lg:leading-5 w-full pt-4 sm:pt-5'>
                        {t("who_we_are.points.expertise")}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Partners