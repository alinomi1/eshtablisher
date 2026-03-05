import Image from "next/image";
import React from "react";

const Growth = () => {
    return (
        <section className="bg-white py-20">
            <div className="container-1200 px-5 grid items-center gap-12 lg:grid-cols-2">
                {/* Left */}
                <div>
                    <span className="inline-flex items-center rounded-full bg-[#F6F6F6] px-5 py-3 text-lg font-bold text-black">
                        About Us
                    </span>

                    <h2 className="mt-8 text-[56px] leading-16 font-extrabold text-black max-w-[533px]">
                        Your Global  Growth Architects
                    </h2>

                    <p className="mt-16 text-base font-[350] leading-5 text-[#50565D] max-w-xl">
                        At <span className="font-extrabold text-black">Establisher</span>, we are more than a consultancy — we are your strategic
                        partners in turning ambitious business visions into measurable global
                        success. Founded in <span className="font-extrabold text-black">Dubai in 2025</span> by experienced international
                        entrepreneurs, our firm has grown into a trusted provider of
                        comprehensive <span className="font-extrabold text-black">business solutions worldwide.</span>
                    </p>

                    <p className="mt-12 text-base font-[350] leading-5 text-[#50565D] max-w-xl">
                        With a worldwide network and deep market expertise, we have supported
                        thousands of clients across industries, empowering startups, SMEs,
                        mid-sized enterprises and multinational corporations to expand and
                        thrive across borders.
                    </p>
                </div>

                {/* Right */}
                <div className="relative w-full max-w-xl aspect-576/624 overflow-hidden">
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