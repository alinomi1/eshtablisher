import Cta from '@/common/Cta';
import Image from 'next/image';
import React from 'react';

const HowWeWork = () => {
    const steps = [
        { id: "Step 1:", title: "Evaluate" },
        { id: "Step 2:", title: "Plan" },
        { id: "Step 3:", title: "Develop" },
        { id: "Step 4:", title: "Deploy" },
    ];

    return (
        <section className='bg-white pb-14 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-30'>
            <div className='container-1200 px-4 sm:px-5 md:px-6 lg:px-5'>
                {/* Top Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                    <div>
                        <span className="inline-flex capitalize rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                            our process
                        </span>

                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] capitalize font-extrabold text-black leading-[1.15] lg:leading-18 pt-5 sm:pt-6 lg:pt-8 max-w-133.25">
                            How We Work – Simple, Clear, Effective
                        </h2>
                    </div>

                    <div>
                        <p className="mb-8 sm:mb-9 lg:mb-10 font-[350] text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-black">
                            From concept to launch, we guide investors and entrepreneurs from
                            around the world in bringing their visions to life crafting bold, future-ready
                            businesses in the ever evolving Global business landscape of the United Arab Emirates.
                        </p>
                        <Cta />
                    </div>
                </div>

                {/* Bottom */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 xl:gap-32 mt-10 sm:mt-12 md:mt-14 lg:mt-16">
                    {/* left */}
                    <div className="relative">
                        <Image
                            width={488}
                            height={440}
                            src="/images/how-work.png"
                            alt="Process"
                            className="w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] object-cover rounded-[20px]"
                        />

                        {/*box */}
                        <div className="absolute bottom-0 right-0 lg:-right-12 xl:-right-20 bg-[#0E0F22] text-white p-4 sm:p-6 lg:p-8 rounded-[16px] max-w-64 xl:max-w-93">
                            <Image
                                src="/images/evaluate-icon.png"
                                alt='evaluate'
                                width={64}
                                height={64}
                                className='object-cover w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16'
                            />

                            <h4 className="text-[22px] sm:text-[24px] lg:text-[28px] text-white font-extrabold py-5 lg:py-7 xl:py-10">
                                Evaluate
                            </h4>

                            <p className="text-white text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 font-[350]">
                                At first, our team assesses the needs of the company and its fundamentals
                            </p>
                        </div>
                    </div>

                    {/* Step List */}
                    <div className="flex flex-col border-l border-[#D9DBDF]">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`py-4 sm:py-5 lg:py-4 pl-4 sm:pl-5 lg:pl-6 ${index !== steps.length - 1 ? 'border-b border-[#D9DBDF]' : ''}`}
                            >
                                <span className="block text-base sm:text-lg font-extrabold text-black">
                                    {step.id}
                                </span>

                                <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] leading-[1.2] font-extrabold text-black pt-4 sm:pt-5 lg:pt-6">
                                    {step.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;