import Cta from '@/common/Cta';
import { useTranslations } from 'next-intl';
import React from 'react';


const HrGuidance = () => {
       const tc = useTranslations("common");
        const t = useTranslations("services")
    
        const features = [
        { id: '01', text: t('hr_payroll.cards.01.title') },
        { id: '02', text: t('hr_payroll.cards.02.title')},
        { id: '03', text: t('hr_payroll.cards.03.title') },
        { id: '04', text: t('hr_payroll.cards.04.title') },
        { id: '05', text: t('hr_payroll.cards.05.title') },
        { id: '06', text: t('hr_payroll.cards.06.title') },
    ];
    return (
        <>
            <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
                <div className="container-1200 px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                        <div data-aos="fade-up-left">
                            <span className="inline-flex rounded-full bg-[#F6F6F6] px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                                  {t("hr_payroll.badge")}
                            </span>

                            <h2 className="text-black font-extrabold  text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  lg:leading-16 pt-5 sm:pt-6 lg:pt-8">
                                  {t("hr_payroll.title")}
                            </h2>
                        </div>

                          <div data-aos="fade-up-right">
                            <p className="pb-8 sm:pb-9 lg:pb-10 font-[350] text-sm sm:text-base leading-6 sm:leading-7 text-black">
                                {t.rich("hr_payroll.description", {
                                    bold: (chunks) => <span className="font-extrabold text-black">{chunks}</span>
                                })}
                            </p>

                            <Cta text={tc('buttons.learn_more')} href='business-setup-uae' />
                        </div>
                    </div>

                    {/* advantages */}
                    <div className="grid w-full grid-cols-1 md:grid-cols-3 mt-10 sm:mt-12 md:mt-14 lg:mt-16" data-aos="fade-up">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className={`
                  p-3 lg:p-5 flex flex-col justify-start
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
                                <p className="text-black font-extrabold text-[18px] sm:text-[20px] lg:text-[22px] pt-4 sm:pt-5 lg:pt-6 leading-[1.35]">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HrGuidance;