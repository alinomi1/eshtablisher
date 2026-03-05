import Image from 'next/image'
import React from 'react'

const AboutBanner = () => {
    return (
        <>
            <section className="relative w-full h-[620px] verflow-hidden">
                <Image
                    src="/images/about-banner.png"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />
                {/* Gradient overlay */}
                {/* <div className="absolute inset-0 bg-[linear-gradient(115.66deg,rgba(0,0,0,0.4)_45.67%,rgba(0,0,0,0)_100%)]">
                </div> */}
                {/* Content */}
                <div className="absolute  bottom-12 left-[43%]">
                    <div className="container-1200 h-full flex justify-center items-center">
                        <button className="rounded-full bg-white/18 text-white  backdrop-blur-[17px] px-6 py-2.5 text-xl font-extrabold capitalize">
                            About Establisher
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutBanner