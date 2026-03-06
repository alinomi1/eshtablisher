import Cta from '@/common/Cta';
import React from 'react';

const features = [
    { id: '01', text: 'Project readiness assessment' },
    { id: '02', text: 'Pitch deck refinement' },
    { id: '03', text: 'Investor introductions support' },
    { id: '04', text: 'Fundraising strategy planning' },
    { id: '05', text: 'Term sheet guidance' },
    { id: '06', text: 'Due diligence coordination' },
];

const AngelGuidance = () => {
    return (
        <>
            <section className="bg-white py-14 sm:py-18 md:py-22 lg:py-30">
                <div className="container-1200 px-4 sm:px-5 md:px-6 lg:px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                        <div>
                            <span className="inline-flex rounded-full bg-[#F6F6F6] px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                                Service No 2
                            </span>

                            <h2 className="text-black font-extrabold text-[32px] leading-[1.2] sm:text-[40px] md:text-[46px] lg:text-[56px] lg:leading-16 pt-5 sm:pt-6 lg:pt-8">
                                Business Angel Funding and Guidance
                            </h2>
                        </div>

                        <div>
                            <p className="pb-8 sm:pb-9 lg:pb-10 font-[350] text-sm sm:text-base leading-6 sm:leading-7 text-black">
                                <span className="font-extrabold">Establisher</span> connects promising founders with the right business angels and strategic investors, combining capital access with practical mentoring. We assess your project, refine your pitch, validate financials, and position your story for the audience that matters. Then we manage introductions, follow-ups, and fundraising steps so you can focus on traction and close commitments smoothly, fast, cleanly, from intro to term-sheet.
                            </p>

                            <Cta />
                        </div>
                    </div>

                    {/* advantages */}
                    <div className="grid w-full grid-cols-1 md:grid-cols-3 mt-10 sm:mt-12 md:mt-14 lg:mt-16">
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

export default AngelGuidance;