import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'


const Banking = () => {
    const t = useTranslations("services")

    const data = [
        { number: '01', title: t('business_setup_uae.banking_conditions.items.01') },
        { number: '02', title: t('business_setup_uae.banking_conditions.items.02') },
        { number: '03', title: t('business_setup_uae.banking_conditions.items.03') },
        { number: '04', title: t('business_setup_uae.banking_conditions.items.04') },
    ];

    const bankImages = [
        { id: 1, src: "/images/adib.png", alt: "ADIB" },
        { id: 2, src: "/images/adcb.png", alt: "Bank 2" },
        { id: 3, src: "/images/fab.png", alt: "Bank 3" },
        { id: 4, src: "/images/islamic.png", alt: "Bank 4" },
        { id: 5, src: "/images/nbd.png", alt: "Bank 5" },
        { id: 6, src: "/images/mashreq.png", alt: "Bank 6" },
        { id: 7, src: "/images/rakbank.png", alt: "Bank 7" },
        { id: 8, src: "/images/islamic-bank.png", alt: "Bank 8" },
        { id: 9, src: "/images/commercial-bank.png", alt: "Bank 9" },
    ];

    return (
        <>
            <section className='bg-white'>
                <div className='container-1200 px-5'>

                    <div className="flex flex-col-reverse lg:flex-row gap-12">
                        {/* Left */}
                        <div className="w-full lg:w-[55%]" data-aos="fade-up-right">
                            <span className="inline-flex rounded-full  bg-[#F6F6F6] px-5 py-3 text-sm md:text-base lg:text-lg font-bold text-black">
                                {t("business_setup_uae.banking_conditions.badge")}
                            </span>
                            <h2 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  capitalize font-extrabold text-black lg:leading-16 pt-4 md:pt-8">
                                {t("business_setup_uae.banking_conditions.title")}
                            </h2>
                            <p className='text-black text-base font-[350] pt-6 md:pt-8 lg:pt-12'>{t("business_setup_uae.banking_conditions.description")}</p>

                            {/* steps */}
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`p-5 border-[#D9DBDF] ${index % 2 === 0 ? "md:pr-6 md:border-r" : "md:pl-6"} ${index !== data.length - 1 ? "border-b" : ""} ${index >= data.length - 2 ? "md:border-b-0" : ""}`}
                                    >
                                        <span className="text-lg font-extrabold text-[#ABAEB2]">
                                            {item.number}
                                        </span>

                                        <h3 className="pt-6 text-[22px] font-extrabold capitalize text-black">
                                            {item.title}
                                        </h3>

                                        <p className="font-[350] text-base leading-5 text-black">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Right*/}
                        <div
                            className="w-full lg:w-[45%]"
                            data-aos="fade-up-left"
                        >
                            <div className='bg-[#EFE5D1]  rounded-[20px] grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-7 gap-y-4 md:gap-y-12 px-6 py-6 md:py-16 lg:py-20'>
                                {bankImages.map((bank) => (
                                    <div
                                        key={bank.id}
                                        className=" "
                                    >
                                        <Image
                                            src={bank.src}
                                            alt={bank.alt}
                                            width={155}
                                            height={122}
                                            className="object-cover w-full "
                                        />
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Banking