import Image from 'next/image';
import React from 'react';

const BusinessConsultationSlider = () => {
    return (
        <>
            <section className="overflow-hidden py-2">
                <div className="flex items-center gap-4 sm:gap-5 md:gap-7 lg:gap-9 animate-slideLR w-max">
                    <h2 className="text-[#0E0F22] pt-1 leading-none font-normal text-[42px] sm:text-[60px] md:text-[84px] lg:text-[110px] xl:text-[132px] uppercase whitespace-nowrap">
                        BUSINESS
                    </h2>

                    <Image
                        src="/images/logoo.png"
                        alt="logo"
                        width={205}
                        height={144}
                        className=" w-20 md:w-24 h-20 md:h-24 lg:w-32 lg:h-32 xl:w-52 xl:h-full object-cover shrink-0"
                    />

                    <h2 className="pt-1 text-[#0E0F22] leading-none font-normal text-[42px] sm:text-[60px] md:text-[84px] lg:text-[110px] xl:text-[132px] uppercase whitespace-nowrap">
                        CONSULTATION
                    </h2>

                    <Image
                        src="/images/logoo.png"
                        alt="logo"
                        width={205}
                        height={144}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-52 xl:h-full object-cover shrink-0"
                    />
                </div>
            </section>
        </>
    );
};

export default BusinessConsultationSlider;