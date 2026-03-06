"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Language from "./Language";
import { DropdownIcon } from "../../public/icons/icons";
import { usePathname } from "next/navigation";
import Mobile from "@/app/components/home/Mobile";

const Navbar = () => {
  const pathname = usePathname();

  const serviceLinks = [
    { name: "Business Strategy", href: "/business-strategy" },
    { name: "Business Angel", href: "/business-angel" },
    { name: "Digital Marketing 360", href: "/digital-marketing" },
    { name: "Company Formation", href: "/company-formation" },
    { name: "HR & Payroll", href: "/hr-payroll" },
    { name: "Finance", href: "/finance" },
  ];

  const isServicesActive = serviceLinks.some((link) => pathname === link.href);

  const activeLine =
    "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-18.5px] after:h-[5px] after:w-[125px] after:rounded-t-[20px] after:bg-[#ECD29A]";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
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
                  className="h-15 md:h-18.5 w-15 md:w-26.25 object-cover"
                />
              </Link>
              <Mobile />
            </div>
            {/* Links */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10 font-normal capitalize text-white text-base leading-[160%]">
              <div className={`relative flex h-full items-center justify-center ${pathname === "/" ? activeLine : ""}`}>
                <Link href="/" className="hover:text-gray-300 transition-colors px-2 py-4">
                  Home
                </Link>
              </div>

              <div className={`relative flex h-full items-center justify-center ${pathname === "/about" ? activeLine : ""}`}>
                <Link href="/about" className="hover:text-gray-300 transition-colors px-2 py-4">
                  About Us
                </Link>
              </div>

              <div className={`relative group flex h-full items-center justify-center ${isServicesActive ? activeLine : ""}`}>
                <button className="flex items-center gap-2.5 cursor-pointer px-2 py-4 hover:text-gray-300 transition-colors">
                  Our Services
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
                        className={`block px-5 py-4 text-base text-black capitalize font-normal hover:bg-white/10 transition-colors border-[#0000001F] ${index !== serviceLinks.length - 1 ? "border-b" : ""
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
                  Contact Us
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