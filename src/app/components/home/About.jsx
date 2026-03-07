import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <>
            <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
                <div className="container-1200 px-5 grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
                    {/* Left */}
                    <div className="relative w-full lg:max-w-xl aspect-576/624 overflow-hidden order-2 lg:order-1" data-aos="fade-up-right">
                        <Image
                            src="/images/hero-about.png"
                            alt="Team meeting"
                            fill
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Right */}
                    <div className='order-1 lg:order-2' data-aos="fade-up-left">
                        <span className="inline-flex items-center rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                            About Us
                        </span>

                        <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] lg:leading-[1.2] lg:leading-16 font-extrabold text-black max-w-[533px]">
                            Who We Are
                        </h2>

                        <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                            At <span className="font-extrabold text-black">Establisher</span>, is a UAE Based Global Business Consultancy simplifying Global business setup. From company formation and banking advisory to tax consultancy, marketing services, and Golden & Freelance Visas, we provide complete, reliable solutions. Our expert team ensures smooth processes, regulatory compliance, and strategic guidance to help entrepreneurs confidently launch and grow their ventures.
                        </p>

                        <div className="border-b border-[#E5E7EB] mt-8 sm:mt-10 lg:mt-12"></div>

                        <h3 className='pt-4 sm:pt-5 capitalize font-extrabold text-lg sm:text-xl leading-5 text-black'>
                            Our Vision
                        </h3>

                        <p className="pt-3 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                            To become the leading UAE Global Business consultancy empowering entrepreneurs with seamless, reliable solutions.
                        </p>

                        <div className="border-b border-[#E5E7EB] mt-4 sm:mt-5"></div>

                        <h3 className='pt-4 sm:pt-5 capitalize font-extrabold text-lg sm:text-xl leading-5 text-black'>
                            Our Mission
                        </h3>

                        <p className="pt-3 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                            To simplify Global Business setup, compliance, and growth through trusted expert advisory services.
                        </p>

                        <div className="border-b border-[#E5E7EB] mt-4 sm:mt-5"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About