import Cta from '@/common/Cta';
import React from 'react';

const features = [
    { id: '01', text: 'Market and competitor analysis' },
    { id: '02', text: 'Clear positioning and messaging' },
    { id: '03', text: 'Growth roadmap and milestones' },
    { id: '04', text: 'Revenue model and forecasting' },
    { id: '05', text: 'Pricing strategy and packaging' },
    { id: '06', text: 'Investor-ready business plan' },
];

const StrategyGuidance = () => {
    return (
        <>
            <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
                <div className="container-1200 px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                        <div data-aos="fade-up-left">
                            <span className="inline-flex rounded-full bg-[#F6F6F6] px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                                Service No 1
                            </span>

                            <h2 className="text-black font-extrabold text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  lg:leading-16 pt-5 sm:pt-6 lg:pt-8">
                                Smart, Scalable Business Strategy
                            </h2>
                        </div>

                        <div data-aos="fade-up-right">
                            <p className="pb-8 sm:pb-9 lg:pb-10 font-[350] text-sm sm:text-base leading-6 sm:leading-7 text-black">
                                <span className="font-extrabold">Establisher</span> helps founders and growing companies make confident decisions with a clear strategy built on real market insight. We assess your current position, define your target segments, sharpen your value proposition, and design an actionable roadmap for growth. From pricing and positioning to revenue forecasting and execution priorities, we create a practical plan your team can follow—and investors can trust—so you move faster, reduce risk, and scale sustainably.
                            </p>

                            <Cta text='learn more' href='business-setup-uae' />
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

export default StrategyGuidance;