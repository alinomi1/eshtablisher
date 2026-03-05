import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <>
            <section className="bg-white py-20">
                <div className="container-1200 px-5 grid items-center gap-12 lg:grid-cols-2">
                    {/* Left */}
                    <div className="relative w-full max-w-xl aspect-576/624 overflow-hidden">
                        <Image
                            src="/images/hero-about.png"
                            alt="Team meeting"
                            fill
                            className="object-cover w-full h-full"

                        />
                    </div>
                    {/* Right */}
                    <div>
                        <span className="inline-flex items-center rounded-full bg-[#F6F6F6] px-5 py-3 text-lg font-bold text-black">
                            About Us
                        </span>

                        <h2 className="mt-8 text-[56px] leading-16 font-extrabold text-black max-w-[533px]">
                            Who We Are
                        </h2>

                        <p className="mt-16 text-base font-[350] leading-5 text-[#50565D] max-w-xl">
                            At  <span className="font-extrabold text-black">Establisher</span>, is a UAE Based Global Business Consultancy simplifying Global business setup. From company formation and banking advisory to tax consultancy, marketing services, and Golden & Freelance Visas, we provide complete, reliable solutions. Our expert team ensures smooth processes, regulatory compliance, and strategic guidance to help entrepreneurs confidently launch and grow their ventures.
                        </p>

                        <div className="border-b border-[#E5E7EB] mt-12"></div>
                        <h3 className='pt-5 capitalize font-extrabold text-xl leading-5 text-black'>Our Vision</h3>
                        <p className="pt-3 text-base font-[350] leading-5 text-[#50565D] max-w-xl">
                            To become the leading UAE Global Business consultancy empowering entrepreneurs with seamless, reliable solutions.
                        </p>

                        <div className="border-b border-[#E5E7EB] mt-5"></div>
                        <h3 className='pt-5 capitalize font-extrabold text-xl leading-5 text-black'>Our Mission</h3>
                        <p className="pt-3 text-base font-[350] leading-5 text-[#50565D] max-w-xl">
                            To simplify Global Business setup, compliance, and growth through trusted expert advisory services.
                        </p>

                        <div className="border-b border-[#E5E7EB] mt-5"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About