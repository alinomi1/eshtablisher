import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Financebanner = () => {
    const t = useTranslations("services")
    return (
        <>
            <section className="relative w-full overflow-hidden h-70 sm:h-90 md:h-110 lg:h-135 xl:h-155">
                  <div className="pointer-events-none absolute inset-0 z-2 hidden  md:block">
          <span className="absolute top-0 bottom-0 left-[12%] lg:left-[22%] w-[0.5px] bg-white/12" />
          <span className="absolute top-0 bottom-0 left-[35%] lg:left-[41%] w-[0.5px] bg-white/12" />
          <span className="absolute top-0 bottom-0 right-[42%] w-[0.5px] bg-white/12" />
          <span className="absolute top-0 bottom-0 right-[20%] lg:right-[23%] w-[0.5px] bg-white/12" />
        </div>
                <Image
                    src="/images/service-banner.png"
                    alt="Business Strategy Banner"
                    fill
                    priority
                    className="object-cover"
                //    data-aos="fade-right"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute inset-0">
                    <div className="container-1200 h-full px-5">
                        <div className="flex h-full items-end justify-center pb-5 sm:pb-8 md:pb-10 lg:pb-12" data-aos="zoom-in-down">
                            <button className="rounded-full bg-white/18 backdrop-blur-[17px] text-white font-extrabold capitalize px-5 py-3  text-lg lg:text-xl">
                                {t("finance.top_banner")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Financebanner