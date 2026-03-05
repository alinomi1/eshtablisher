import Image from 'next/image'
import React from 'react'

const TimeLine = () => {
    return (
        <>
            <section className="bg-[#F6F6F6] py-16">
                <div className="container-1200 px-5 flex flex-col items-center text-center">
                    {/* Header Content */}
                    <span className="capitalize text-lg font-bold text-black">
                        Timeline
                    </span>
                    <h2 className="capitalize font-extrabold text-black leading-tight text-[40px] md:text-[56px] pt-8">
                        Timeline to Establish Your Business
                    </h2>
                    <div className="relative w-full max-w-226 mx-auto mt-16">
                        <Image
                            src="/images/timeline-image.png"
                            alt="Business Focuses Diagram"
                            width={904}
                            height={673}
                            priority
                            className="w-full h-auto object-cover"
                            sizes="(max-width: 768px) 100vw, 904px"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default TimeLine