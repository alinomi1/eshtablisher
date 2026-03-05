import Image from 'next/image'
import React from 'react'

const Focuses = () => {
    return (
        <>
            <section className="bg-[#F7F1E5] py-16">
                <div className="container-1200 px-5 flex flex-col items-center text-center">
                    {/* Header Content */}
                    <span className="inline-flex items-center rounded-full capitalize bg-white px-5 py-2 text-lg font-bold text-black shadow-sm">
                        our focuses
                    </span>
                    <h2 className="capitalize font-extrabold text-black leading-tight text-[40px] md:text-[56px] pt-8">
                        Our Main Focuses
                    </h2>

                    <div className="relative w-full max-w-200.5 mx-auto mt-16">
                        <Image
                            src="/images/focuses-image.png"
                            alt="Business Focuses Diagram"
                            width={802}
                            height={484}
                            priority
                            className="w-full h-auto object-cover"
                            sizes="(max-width: 768px) 100vw, 802px"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Focuses