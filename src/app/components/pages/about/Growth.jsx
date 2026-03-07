import Image from "next/image";
import React from "react";

const Growth = () => {
    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
            <div className="container-1200 px-5 grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
                {/* Left */}
                <div className="w-full"  data-aos="fade-up-right">
                    <span className="inline-flex items-center rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                        About Us
                    </span>

                    <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  lg:leading-16 font-extrabold text-black max-w-[533px]">
                        Your Global Growth Architects
                    </h2>

                    <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                        At <span className="font-extrabold text-black">Establisher</span>, we are more than a consultancy — we are your strategic
                        partners in turning ambitious business visions into measurable global
                        success. Founded in <span className="font-extrabold text-black">Dubai in 2025</span> by experienced international
                        entrepreneurs, our firm has grown into a trusted provider of
                        comprehensive <span className="font-extrabold text-black">business solutions worldwide.</span>
                    </p>

                    <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-sm sm:text-base font-[350] leading-6 sm:leading-7 lg:leading-5 text-[#50565D] max-w-xl">
                        With a worldwide network and deep market expertise, we have supported
                        thousands of clients across industries, empowering startups, SMEs,
                        mid-sized enterprises and multinational corporations to expand and
                        thrive across borders.
                    </p>
                </div>

                {/* Right */}
                <div className="relative w-full lg:max-w-xl aspect-576/624 overflow-hidden"data-aos="fade-up-left">
                    <Image
                        src="/images/about-growth.png"
                        alt="Team meeting"
                        fill
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Growth;