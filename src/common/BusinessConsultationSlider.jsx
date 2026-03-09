import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const SliderContent = ({ t }) => (
    <div className="flex items-center gap-4 sm:gap-5 md:gap-7 lg:gap-9 pr-4 sm:pr-5 md:pr-7 lg:pr-9">
        <h2 className="text-[#0E0F22] pt-1 leading-none font-normal text-[42px] sm:text-[60px] md:text-[84px] lg:text-[110px] xl:text-[132px] uppercase whitespace-nowrap">
            {t("slider.business")}
        </h2>

        <Image
            src="/images/logoo.png"
            alt="logo"
            width={205}
            height={144}
            className="w-20 md:w-24 h-20 md:h-24 lg:w-32 lg:h-32 xl:w-52 xl:h-full object-cover shrink-0"
        />

        <h2 className="pt-1 text-[#0E0F22] leading-none font-normal text-[42px] sm:text-[60px] md:text-[84px] lg:text-[110px] xl:text-[132px] uppercase whitespace-nowrap">
            {t("slider.consultation")}
        </h2>

        <Image
            src="/images/logoo.png"
            alt="logo"
            width={205}
            height={144}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-52 xl:h-full object-cover shrink-0"
        />
    </div>
);

const BusinessConsultationSlider = () => {
    const t = useTranslations("common");

    return (
        <section className="overflow-hidden w-full bg-white">
            <div className="animate-marquee-right flex w-max">
                <SliderContent t={t} />
                <SliderContent t={t} />
                <SliderContent t={t} />
                <SliderContent t={t} />
            </div>
        </section>
    );
};

export default BusinessConsultationSlider;