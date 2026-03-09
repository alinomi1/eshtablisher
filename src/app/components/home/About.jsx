import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const About = () => {
    const t = useTranslations("home")
    return (
        <>
            <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
                <div className="container-1200 px-5 grid  gap-10 sm:gap-12 lg:grid-cols-2">
                    {/* Left */}
                    <div className="relative w-full lg:max-w-xl aspect-576/729 overflow-hidden order-2 lg:order-1" data-aos="fade-up-right">
                        <Image
                            src="/images/hero-about.png"
                            alt="Team meeting"
                            fill
                            className="object-cover w-full h-full rounded-[20px]"
                        />
                    </div>

                    {/* Right */}
                    <div className='order-1 lg:order-2' data-aos="fade-up-left">
                        <span className="inline-flex items-center rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                            {t("about.badge")}
                        </span>

                        <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  font-extrabold text-black max-w-[533px]">
                            {t("about.title")}
                        </h2>

                        <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                            {t.rich("about.description", {
                                bold: (chunks) => <span className="font-extrabold text-black">{chunks}</span>
                            })}
                        </p>

                        <div className="border-b border-[#E5E7EB] mt-8 sm:mt-10 lg:mt-12"></div>

                        <h3 className='pt-4 sm:pt-5 capitalize font-extrabold text-lg sm:text-xl leading-5 text-black'>
                            {t("about.mission_title")}
                        </h3>

                        <p className="pt-3 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                            {t("about.mission_desc")}
                        </p>

                        <div className="border-b border-[#E5E7EB] mt-4 sm:mt-5"></div>

                        <h3 className='pt-4 sm:pt-5 capitalize font-extrabold text-lg sm:text-xl leading-5 text-black'>
                            {t("about.vision_title")}
                        </h3>

                        <p className="pt-3 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                            {t("about.vision_desc")}
                        </p>

                        <div className="border-b border-[#E5E7EB] mt-4 sm:mt-5"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About