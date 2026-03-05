"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ForwardIcon } from "../../../../public/icons/icons";
import Link from "next/link";
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
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative z-10 min-h-svh">
        <div className="container-1200 px-5  pt-28 lg:pt-48 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12  items-center">
            {/* Left */}
            <div className="pointer-events-auto max-w-155">
              <div className="relative  w-88.5 h-62">
                <Image
                  src="/images/logoo.png"
                  alt="Establisher"
                  fill
                  sizes="400px"
                  className="object-contain"
                />
              </div>

              <h1 className="text-white font-extrabold leading-[1.05] md:my-12 text-[40px] sm:text-[52px] lg:text-[60px] max-w-[520px]">
                Global Business <br className="hidden sm:block" /> Consultancy
              </h1>

              <div >
                <Cta />
              </div>
            </div>

            {/* Right */}
            <div className="pointer-events-auto justify-self-start lg:justify-self-end mt-52 ">
              {/* Applied the new global class and removed old shape classes */}
              <div className="custom-glass-card bg-white/22 backdrop-blur-[80px] w-[260px] sm:w-[300px] lg:w-[340px] min-h-[300px]">
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-white font-medium text-[16px] sm:text-[18px]">
                    Guiding you to <br /> success with
                  </p>

                  <div className="mt-2 sm:mt-4 text-white font-extrabold leading-none text-[72px] sm:text-[90px] lg:text-[110px] tracking-tighter">
                    100+
                  </div>

                  <p className="mt-2 text-white font-bold text-[18px] sm:text-[22px] tracking-wide">
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