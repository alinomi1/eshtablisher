"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Cta from "@/common/Cta";

const Hero = () => {
  const [api, setApi] = useState(null);

  const heroImages = ["/images/hero1.png", "/images/hero2.png"];

  useEffect(() => {
    if (!api) return;

    const id = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="relative w-full overflow-hidden min-h-[100svh]">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="absolute inset-0 w-full h-full"
      >
        <CarouselContent className="h-full ml-0 pb-10">
          {heroImages.map((src, index) => (
            <CarouselItem key={src} className="h-svh w-full pl-0">
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`Hero Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-[72%_center] sm:object-[70%_center] md:object-[78%_center] lg:object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative z-10 min-h-svh">
        <div className="container-1200 px-5 pt-30 md:pt-40 lg:pt-44  min-h-svh flex items-start lg:items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
            {/* Left */}
            <div className="pointer-events-auto max-w-155">
              <div className="relative w-28 h-20 sm:w-44 sm:h-31 lg:w-88.5 lg:h-62">
                <Image
                  src="/images/logoo.png"
                  alt="Establisher"
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 1024px) 176px, 400px"
                  className="object-contain"
                />
              </div>

              <h1 className="text-white font-extrabold leading-[1.05] my-8 lg:my-12 text-[36px] md:text-[52px] lg:text-[60px] max-w-[520px]">
                Global Business <br className="hidden sm:block" /> Consultancy
              </h1>

              <div>
                <Cta />
              </div>
            </div>

            {/* Right */}
            <div className="pointer-events-auto justify-self-start md:justify-self-end lg:justify-self-end  md:mt-44 lg:mt-52">
              <div className="custom-glass-card bg-white/22 backdrop-blur-[80px] w-[160px] sm:w-[220px] md:w-[240px] lg:w-[340px] min-h-[160px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[300px]">
                <div className="p-4 sm:p-6 lg:p-10">
                  <p className="text-white font-medium text-[12px] sm:text-[15px] lg:text-[18px] leading-[1.35]">
                    Guiding you to <br /> success with
                  </p>

                  <div className="mt-2 sm:mt-3 lg:mt-4 text-white font-extrabold leading-none text-[42px] sm:text-[64px] md:text-[68px] lg:text-[110px] tracking-tighter">
                    100+
                  </div>

                  <p className="mt-2 text-white font-bold text-[12px] sm:text-[16px] lg:text-[22px] tracking-wide">
                    Investors Served
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;