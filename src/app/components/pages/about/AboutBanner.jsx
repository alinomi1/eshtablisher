import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const AboutBanner = () => {
    const t = useTranslations("about")
    return (
        <>
            <section className="relative w-full overflow-hidden h-70 sm:h-90 md:h-110 lg:h-135 xl:h-155">
                <Image
                    src="/images/about-banner.png"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                    // data-aos="fade-right"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-black/10" />
                {/* Content */}
                <div className="absolute inset-0">
                    <div className="container-1200 h-full px-5">
                        <div className="flex h-full items-end justify-center pb-5 sm:pb-8 md:pb-10 lg:pb-12" data-aos="zoom-in-down">
                            <button className="rounded-full bg-white/18 backdrop-blur-[17px] text-white font-extrabold capitalize px-5 py-3  text-lg lg:text-xl">
                              {t("about_page.banner_badge")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutBanner