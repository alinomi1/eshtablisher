import { useTranslations } from 'next-intl';
import React from 'react'


const Advantages = () => {
    const t = useTranslations("services")

    const features = [
        { id: '01', text: t('business_setup_uae.freezone_advantages.items.01') },
        { id: '02', text: t('business_setup_uae.freezone_advantages.items.02') },
        { id: '03', text: t('business_setup_uae.freezone_advantages.items.03') },
        { id: '04', text: t('business_setup_uae.freezone_advantages.items.04') },
        { id: '05', text: t('business_setup_uae.freezone_advantages.items.05') },
        { id: '06', text: t('business_setup_uae.freezone_advantages.items.06') },
        { id: '07', text: t('business_setup_uae.freezone_advantages.items.07') },
        { id: '08', text: t('business_setup_uae.freezone_advantages.items.08') },
        { id: '09', text: t('business_setup_uae.freezone_advantages.items.09') },
    ];

    return (
        <>
            <section className='bg-[#F6F6F6] py-12  md:py-14 lg:py-16' >
                <div className='container-1200 px-5' >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center'>
                        <div data-aos="fade-up-left">
                            <span className='text-black font-bold text-sm sm:text-base lg:text-lg capitalize'>
                                {t("business_setup_uae.freezone_advantages.badge")}
                            </span>

                            <h2 className='text-black font-extrabold  text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  pt-5 sm:pt-6 md:pt-8'>
                                {t("business_setup_uae.freezone_advantages.title")}
                            </h2>
                        </div>

                        <p className='font-[350] text-sm sm:text-base text-black leading-6 sm:leading-7' data-aos="fade-up-right">
                            {t("business_setup_uae.freezone_advantages.description")}
                        </p>
                    </div>

                    {/* advantages */}
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 sm:mt-12 md:mt-14 lg:mt-16" data-aos="zoom-in">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className={`
                        p-4 sm:p-5 flex flex-col justify-start
                        border-[#D9DBDF]

                        border-b last:border-b-0

                        md:border-b md:border-r
                        md:nth-[3n]:border-r-0
                        md:nth-last-[-n+3]:border-b-0
                    `}
                            >
                                <span className="text-[#ABAEB2] font-extrabold text-base sm:text-lg">
                                    {feature.id}
                                </span>

                                <p className="text-black font-extrabold text-[18px] sm:text-[20px] md:text-[22px] pt-4 sm:pt-5 md:pt-6 leading-snug">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advantages