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
            <section className='bg-white pb-30'>
                <div className='container-1200 px-5'>

                    <div className="flex gap-12">
                        {/* Left */}
                        <div className="w-[55%]">
                            <span className="inline-flex rounded-full  bg-[#F6F6F6] px-5 py-3 text-lg font-bold text-black">
                                About Banking
                            </span>
                            <h2 className="text-[56px] capitalize font-extrabold text-black leading-16 pt-8">
                                Banking Terms & Conditions
                            </h2>
                            <p className='text-black text-base font-[350] pt-12'>In general, banks follow similar ethical and compliance standards. As part of the onboarding process, the Risk & Compliance team may request,</p>
                            {/* steps */}
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        className={` ${index % 2 === 0
                                            ? "md:pr-6 p-5 md:border-r border-[#D9DBDF]"
                                            : "p-5"
                                            } ${index >= 2 ? "border-t border-[#D9DBDF]" : ""}`}
                                    >
                                        <span className="text-lg font-extrabold text-[#ABAEB2]">
                                            {item.number}
                                        </span>

                                        <h3 className="pt-6 text-[22px] font-extrabold capitalize text-black">
                                            {item.title}
                                        </h3>

                                        <p className="font-[350]  text-base leading-5 text-black">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                        {/* Right*/}

                        <div className="w-[45%] relative h-155.25  overflow-hidden">
                            <Image
                                src="/images/banking.png"
                                alt="Dubai Skyline"
                                fill
                                className="w-full h-full object-cover rounded-[20px]" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Banking