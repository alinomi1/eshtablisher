"use client";

import Image from "next/image";
import React from "react";
import Language from "./Language";
import { DropdownIcon } from "../../public/icons/icons";

import Mobile from "@/app/components/home/Mobile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "use-intl";

const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations("common");

  const serviceLinks = [
    { name: t("services_nav.business_setup_uae"), href: "/business-setup-uae" },
    { name: t("services_nav.strategy"), href: "/business-strategy" },
    { name: t("services_nav.angel"), href: "/business-angel" },
    { name: t("services_nav.marketing"), href: "/digital-marketing" },
    { name: t("services_nav.formation"), href: "/company-formation" },
    { name: t("services_nav.hr_payroll"), href: "/hr-payroll" },
    { name: t("services_nav.finance"), href: "/finance" },
  ];

  const isServicesActive = serviceLinks.some((link) => usePathname === link.href);

  const activeLine =
    "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-18.5px] after:h-[5px] after:w-[125px] after:rounded-t-[20px] after:bg-[#ECD29A]";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* <div className="absolute top-0 left-0 w-full h-14 bg-white/30 backdrop-blur-lg -z-10"
        style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }} /> */}
      <div className="container-1200 px-5 mt-3 md:mt-6">
        <div className="lg:bg-[#0E0F22] lg:rounded-xl lg:py-2.5 lg:px-16 xl:px-30">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image
                  src="/images/logoo.png"
                  alt="Establisher"
                  width={105}
                  height={74}
                  priority
                  className="h-14 md:h-18.5 w-20 md:w-26.25 object-cover"
                />
              </Link>
              <Mobile />
            </div>
            {/* Links */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10 font-normal capitalize text-white text-base leading-[160%]">
              <div className={`relative flex h-full items-center justify-center ${pathname === "/" ? activeLine : ""}`}>
                <Link href="/" className="hover:text-gray-300 transition-colors px-2 py-4">
                  {t("pages.home")}
                </Link>
              </div>

              <div className={`relative flex h-full items-center justify-center ${pathname === "/about" ? activeLine : ""}`}>
                <Link href="/about" className="hover:text-gray-300 transition-colors px-2 py-4">
                  {t("pages.about")}
                </Link>
              </div>

              <div className={`relative group flex h-full items-center justify-center ${isServicesActive ? activeLine : ""}`}>
                <button className="flex items-center gap-2.5 cursor-pointer px-2 py-4 hover:text-gray-300 transition-colors">
                  {t("pages.services")}
                  <span className="inline-flex transition-transform duration-300 group-hover:rotate-180">
                    <DropdownIcon />
                  </span>
                </button>

                {/* Dropdown */}
                <div className="absolute left-1/2 top-full hidden -translate-x-1/2 w-60 pt-5 group-hover:block animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-white/22 backdrop-blur-md rounded-2xl overflow-hidden">
                    {serviceLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className={`block p-4 text-base text-black capitalize font-normal hover:bg-white/10 transition-colors border-[#0000001F] ${index !== serviceLinks.length - 1 ? "border-b" : ""
                          }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`relative flex h-full items-center justify-center ${pathname === "/contact" ? activeLine : ""}`}>
                <Link href="/contact" className="hover:text-gray-300 transition-colors px-2 py-4">
                  {t("pages.contact")}
                </Link>
              </div>
            </nav>

            {/* Language */}
            <Language />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;