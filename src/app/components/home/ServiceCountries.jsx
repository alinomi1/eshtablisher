import Image from 'next/image'
import React from 'react'

const ServiceCountries = () => {
    return (
        <>
            <section className="bg-[#F2F2F2] py-12 sm:py-14 md:py-16">
                <div className="container-1200 px-4 sm:px-5 md:px-6 lg:px-5 flex flex-col items-center text-center">
                    {/* Header Content */}
                    <span className="inline-flex items-center rounded-full capitalize bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base lg:text-lg font-bold text-black shadow-sm">
                        Service Countries
                    </span>

                    <h2 className="capitalize font-extrabold text-black leading-[1.15] text-[30px] sm:text-[36px] md:text-[44px] lg:text-[56px] pt-5 sm:pt-6 lg:pt-8">
                        Our Global Service Coverage
                    </h2>

                    <div className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                        <Image
                            src="/images/global.png"
                            alt="Business Focuses Diagram"
                            width={1306}
                            height={723}
                            priority
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceCountries