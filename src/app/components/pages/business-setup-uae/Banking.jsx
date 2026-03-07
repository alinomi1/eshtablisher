import Image from 'next/image'
import React from 'react'


const data = [
    { number: '01', title: 'A business plan outlining your activities' },
    { number: '02', title: 'An updated CV / resume.' },
    { number: '03', title: 'Last 6 account statements.' },
    { number: '04', title: 'Website link (we can help you build one)' },
];

const Banking = () => {
    return (
        <>
            <section className='bg-white'>
                <div className='container-1200 px-5'>

                    <div className="flex flex-col-reverse md:flex-row gap-12">
                        {/* Left */}
                        <div className="w-full md:w-[55%]" data-aos="fade-up-right">
                            <span className="inline-flex rounded-full  bg-[#F6F6F6] px-5 py-3 text-sm md:text-base lg:text-lg font-bold text-black">
                                About Banking
                            </span>
                            <h2 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  capitalize font-extrabold text-black lg:leading-16 pt-4 md:pt-8">
                                Banking Terms & Conditions
                            </h2>
                            <p className='text-black text-base font-[350] pt-6 md:pt-8 lg:pt-12'>In general, banks follow similar ethical and compliance standards. As part of the onboarding process, the Risk & Compliance team may request,</p>

                            {/* steps */}
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        className={` ${index % 2 === 0
                                            ? "md:pr-6 p-5 md:border-r border-[#D9DBDF]"
                                            : "p-5"
                                            } ${index >= 1 ? "border-t border-[#D9DBDF] md:border-t-0" : ""}
                              ${index >= 2 ? "md:border-t border-[#D9DBDF]" : ""}`}
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
                        <div className="w-full md:w-[45%] relative h-[320px] sm:h-[420px] md:h-155.25 overflow-hidden" data-aos="fade-up-left">
                            <Image
                                src="/images/banking.png"
                                alt="Dubai Skyline"
                                fill
                                className="w-full h-full object-cover rounded-[20px]"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Banking