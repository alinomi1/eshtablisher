"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Cta from "@/common/Cta";
import { useTranslations } from "next-intl";
import { getWhatsAppLink } from "@/lib/whatsapp";


const Hero = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const t = useTranslations("home");
  const tc = useTranslations("common");

  const heroImages = ["/images/hero1.png", "/images/hero2.png"];

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    const id = setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => {
      api.off("select", onSelect);
      clearInterval(id);
    };
  }, [api]);


  return (
    <section className="relative w-full overflow-hidden h-svh">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="absolute inset-0 w-full h-full"
      >
        <CarouselContent className="h-full ml-0 ">
          {heroImages.map((src, index) => (
            <CarouselItem key={src} className="h-svh w-full pl-0 ">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={src}
                  alt={`Hero Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={`
          object-cover 
          object-[72%_center] 
          sm:object-[70%_center] 
          md:object-[78%_center] 
          lg:object-cover
          ${current === index ? "animate-zoom-out" : ""} 
        `}
                />
                <div className="absolute inset-0 bg-black/45" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative z-10 h-full flex items-center">
        <div className="pointer-events-none absolute inset-0 z-2 hidden  md:block">
          <span className="absolute top-0 bottom-0 left-[12%] lg:left-[22%] w-[0.5px] bg-white/12" />
          <span className="absolute top-0 bottom-0 left-[35%] lg:left-[41%] w-[0.5px] bg-white/12" />
          <span className="absolute top-0 bottom-0 right-[42%] w-[0.5px] bg-white/12" />
          <span className="absolute top-0 bottom-0 right-[20%] lg:right-[23%] w-[0.5px] bg-white/12" />
        </div>
        <div className="container-1200 px-5 flex w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] pt-18  md:pt-30 lg:pt-40 items-center gap-8 sm:gap-10 lg:gap-12">
            {/* Left */}
            <div className="pointer-events-auto w-full md:max-w-155">
              <div className="relative w-42 md:w-70 xl:w-88.5 h-30 md:h-50 xl:h-62" data-aos="fade-down">
                <Image
                  src="/images/logoo.png"
                  alt="Establisher"
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 1024px) 176px, 400px"
                  className="object-cover"
                />
              </div>

              <h1 className="text-white font-extrabold leading-[1.05] my-8 xl:my-12 text-[36px] md:text-[52px] xl:text-[60px]" data-aos="zoom-in-right">
                {t("hero.title")}
              </h1>

              <div data-aos="fade-up">
                <Cta
                  text={tc("buttons.book_consultation")}
                  href={getWhatsAppLink("Hello, I want to book a consultation.")} />
              </div>
            </div>

            {/* Right */}
            <div className="self-center md:self-end glass-cutout-mask backdrop-blur-lg bg-white/15 p-3 lg:p-6 overflow-hidden w-54 md:w-64 lg:w-82 h-50 md:h-64 lg:h-82 flex flex-col justify-between"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor">

              <p className="font-normal text-white text-sm md:text-base lg:text-[21px] overflow-hidden">
                {t("hero.subtitle_line1")} <br /> {t("hero.subtitle_line2")}
              </p>

              <div className="font-extrabold text-[60px] md:text-[70px] lg:text-[90px] xl:text-[100px] text-white leading-none">
                {t("hero.stat_value")}
              </div>

              <p className="font-normal text-lg md:text-xl lg:text-2xl text-white">{t("hero.stat_label")}</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;