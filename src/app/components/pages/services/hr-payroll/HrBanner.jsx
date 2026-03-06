import Image from "next/image";
import React from "react";

const HrBanner = () => {
    return (
        <section className="relative w-full overflow-hidden h-70 sm:h-90 md:h-110 lg:h-135 xl:h-155">
            <Image
                src="/images/service-banner.png"
                alt="Business Strategy Banner"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0">
                <div className="container-1200 h-full px-5">
                    <div className="flex h-full items-end justify-center pb-5 sm:pb-8 md:pb-10 lg:pb-12">
                        <button className="rounded-full bg-white/18 backdrop-blur-[17px] text-white font-extrabold capitalize px-5 py-3  text-lg lg:text-xl">
                            hr & payroll
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HrBanner;