import Image from 'next/image'
import React from 'react'

const Partners = () => {
    return (
        <section className="bg-white pb-30">
            <div className="container-1200 px-5 grid items-center gap-12 lg:grid-cols-2">
                {/* Left */}
                <div className="relative w-full max-w-xl aspect-576/624 overflow-hidden">
                    <Image
                        src="/images/about-partners.png"
                        alt="Team meeting"
                        fill
                        className="object-cover w-full"

                    />
                </div>
                {/* Right */}
                <div>
                    <span className="inline-flex items-center capitalize rounded-full bg-[#F6F6F6] px-5 py-3 text-lg font-bold text-black">
                        who we are
                    </span>

                    <h2 className="mt-8 text-[56px] leading-16 font-extrabold text-black max-w-133.25">
                        Your Partners In Business Growth
                    </h2>

                    <p className="mt-16 text-base font-[350] leading-5 text-[#50565D] max-w-xl">
                        We are a 360° business solutions provider dedicated to helping companies navigate complex global landscapes. Since our inception, we have built a reputation for combining strategic insight with practical execution — supporting companies in achieving growth, operational excellence, and sustainable success.
                    </p>
                    {/* border */}
                    <div className='border-b border-[#E5E7EB] mt-12'></div>
                    <p className='text-black text-lg font-normal leading-5 w-full py-5 whitespace-nowrap'>Founded in Dubai (2025 by seasoned international entrepreneurs.</p>
                    <div className='border-b border-[#E5E7EB]'></div>
                    <p className='text-black text-lg font-normal leading-5 w-full py-5'>Trusted by 500+ clients worldwide across multiple sectors.</p>
                    <div className='border-b border-[#E5E7EB] '></div>
                    <p className='text-black text-lg font-normal leading-5 w-full pt-5'>Deep expertise across markets including the UAE.</p>
                </div>
            </div>
        </section>
    )
}

export default Partners