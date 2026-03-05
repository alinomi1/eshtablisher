import Cta from '@/common/Cta';
import Image from 'next/image';
import React from 'react';
// import { FaArrowRight } from 'react-icons/fa'; // Assuming you use react-icons

const HowWeWork = () => {
    const steps = [
        { id: "Step 1:", title: "Evaluate" },
        { id: "Step 2:", title: "Plan" },
        { id: "Step 3:", title: "Develop" },
        { id: "Step 4:", title: "Deploy" },
    ];

    return (
        <section className='bg-white pb-30'>
            <div className='container-1200 px-5'>
                {/* Top Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-flex capitalize rounded-full bg-[#F6F6F6] px-5 py-3 text-lg font-bold text-black">
                            our process
                        </span>
                        <h2 className="text-[56px] capitalize font-extrabold text-black leading-18 pt-8 max-w-133.25">
                            How We Work – Simple, Clear, Effective
                        </h2>
                    </div>
                    <div >
                        <p className="mb-10 font-[350] text-lg text-black">
                            From concept to launch, we guide investors and entrepreneurs from
                            around the world in bringing their visions to life crafting bold, future-ready
                            businesses in the ever evolving Global business landscape of the United Arab Emirates.
                        </p>
                        <Cta />
                    </div>
                </div>

                {/* Bottom */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mt-16">
                    {/* left */}
                    <div className="relative">
                        <Image
                            width={488}
                            height={440}
                            src="/images/how-work.png"
                            alt="Process"
                            className="w-full h-[440px] object-cover rounded-[20px]"
                        />
                        {/*box */}
                        <div className="absolute bottom-0 -right-20 bg-[#0E0F22] text-white p-8 rounded-[16px] max-w-93">
                            <Image src="/images/evaluate-icon.png" alt='evaluate ' width={64} height={64} className='object-cover' />
                            <h4 className="text-[28px] text-white font-extrabold py-10">Evaluate</h4>
                            <p className="text-white text-lg font-[350]">
                                At first, our team assesses the needs of the company and its fundamentals
                            </p>
                        </div>
                    </div>

                    {/* Step List */}
                    <div className="flex flex-col border-l border-[#D9DBDF]">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`py-4 pl-6 ${index !== steps.length - 1 ? 'border-b border-[#D9DBDF]' : ''}`}
                            >
                                <span className="block text-lg font-extrabold text-black">
                                    {step.id}
                                </span>
                                <h3 className="text-[28px] font-extrabold text-black pt-6">
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