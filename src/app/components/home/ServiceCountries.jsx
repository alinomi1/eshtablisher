import Image from 'next/image'
import React from 'react'

const ServiceCountries = () => {
    return (
        <>
            <section className="bg-[#F2F2F2] py-16">
                <div className="container-1200 px-5 flex flex-col items-center text-center">
                    {/* Header Content */}
                    <span className="inline-flex items-center rounded-full capitalize bg-white px-5 py-2 text-lg font-bold text-black shadow-sm">
                        Service Countries
                    </span>
                    <h2 className="capitalize font-extrabold text-black leading-tight text-[40px] md:text-[56px] pt-8">
                        Our Global Service Coverage
                    </h2>

                    <div className="relative w-full mt-16">
                        <Image
                            src="/images/global.png"
                            alt="Business Focuses Diagram"
                            width={1306}
                            height={723}
                            priority
                            className="w-full h-auto object-cover"
                        // sizes="(max-width: 768px) 100vw, 1306px"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceCountries