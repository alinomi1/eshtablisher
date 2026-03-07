import Image from 'next/image'
import React from 'react'

const Partners = () => {
    return (
        <section className="bg-white pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-30">
            <div className="container-1200 px-5 grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
                {/* Left */}
                <div className="relative w-full lg:max-w-xl aspect-576/624 overflow-hidden order-2 lg:order-1">
                    <Image
                        src="/images/about-partners.png"
                        alt="Team meeting"
                        fill
                        className="object-cover w-full"
                        data-aos="fade-up-left"
                    />
                </div>

                {/* Right */}
                <div className='w-full order-1 lg:order-2 ' data-aos="fade-up-right">
                    <span className="inline-flex items-center capitalize rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                        who we are
                    </span>

                    <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  lg:leading-16 font-extrabold text-black max-w-133.25">
                        Your Partners In Business Growth
                    </h2>

                    <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                        We are a 360° business solutions provider dedicated to helping companies navigate complex global landscapes. Since our inception, we have built a reputation for combining strategic insight with practical execution — supporting companies in achieving growth, operational excellence, and sustainable success.
                    </p>

                    {/* border */}
                    <div className='border-b border-[#E5E7EB] mt-8 sm:mt-10 lg:mt-12'></div>

                    <p className='text-black text-base sm:text-lg font-normal leading-6 sm:leading-7 lg:leading-5 w-full py-4 sm:py-5'>
                        Founded in Dubai (2025 by seasoned international entrepreneurs.
                    </p>

                    <div className='border-b border-[#E5E7EB]'></div>

                    <p className='text-black text-base sm:text-lg font-normal leading-6 sm:leading-7 lg:leading-5 w-full py-4 sm:py-5'>
                        Trusted by 500+ clients worldwide across multiple sectors.
                    </p>

                    <div className='border-b border-[#E5E7EB]'></div>

                    <p className='text-black text-base sm:text-lg font-normal leading-6 sm:leading-7 lg:leading-5 w-full pt-4 sm:pt-5'>
                        Deep expertise across markets including the UAE.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Partners