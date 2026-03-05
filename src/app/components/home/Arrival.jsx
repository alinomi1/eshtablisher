import Image from 'next/image';
import React from 'react';


const data = [
    { number: '01', title: 'Keep your phone active for coordination' },
    { number: '02', title: 'Share flight details 7 days before travel' },
    { number: '03', title: 'Dubai entry stamp copy after arrival.' },
    { number: '04', title: 'We apply for visa (6-8 working days)' },
    { number: '05', title: 'Medical & biometrics after e-Visa' },
    { number: '06', title: 'Status changed to Residence Visa' },
];

const Arrival = () => {

    return (
        <>
            <section className='bg-white py-30'>
                <div className='container-1200 px-5'>

                    <div className="flex gap-12 items-center">
                        {/* Left */}
                        <div className="w-[45%] relative h-175  overflow-hidden">
                            <Image
                                src="/images/arival-image.png"
                                alt="Dubai Skyline"
                                fill
                                className="w-full h-full object-cover rounded-[20px]" />
                        </div>
                        {/* Right*/}
                        <div className="w-[55%]">
                            <span className="inline-flex rounded-full  bg-[#F6F6F6] px-5 py-3 text-lg font-bold text-black">
                                Arrival Instructions
                            </span>
                            <h2 className="text-[56px] font-extrabold text-black leading-16 pt-8 max-w-133.25">
                                Upon Arrival in UAE
                            </h2>

                            {/* 2-Column Grid for Steps */}
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
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
                    </div>

                </div>
            </section>
        </>
    );
};

export default Arrival;