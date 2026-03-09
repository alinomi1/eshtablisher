"use client";
import React, { useState } from 'react'

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { HamburgerIcon } from '../../../../public/icons/icons'
import Link from 'next/link';
import { useTranslations } from 'next-intl';


const Mobile = () => {
    const [openServices, setOpenServices] = useState(false)
    const t = useTranslations("common")

    const serviceLinks = [
        { name: t("services_nav.business_setup_uae"), href: "/business-setup-uae" },
        { name: t("services_nav.strategy"), href: "/business-strategy" },
        { name: t("services_nav.angel"), href: "/business-angel" },
        { name: t("services_nav.marketing"), href: "/digital-marketing" },
        { name: t("services_nav.formation"), href: "/company-formation" },
        { name: t("services_nav.hr_payroll"), href: "/hr-payroll" },
        { name: t("services_nav.finance"), href: "/finance" },
    ]

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <HamburgerIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="bg-white w-[300px] p-0">
                <SheetHeader className="sr-only">
                    <SheetTitle>Mobile Navigation Menu</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col p-4">
                    <SheetClose asChild>
                        <Link href="/" className="px-4 py-3 text-lg font-medium">
                            {t("pages.home")}
                        </Link>
                    </SheetClose>

                    <SheetClose asChild>
                        <Link href="/about" className="px-4 py-3 text-lg font-medium">
                            {t("pages.about")}
                        </Link>
                    </SheetClose>

                    {/* Services Section */}
                    <div className="flex flex-col">
                        <button
                            type="button"
                            onClick={() => setOpenServices((prev) => !prev)}
                            className="flex items-center justify-between px-4 py-3 text-left text-lg font-medium"
                        >
                            <span>{t("pages.services")}</span>
                            <ChevronDown
                                className={`h-5 w-5 transition-transform duration-300 ${openServices ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {openServices && (
                            <div className="flex flex-col pl-4">
                                {serviceLinks.map((link, index) => (
                                    <SheetClose asChild key={index}>
                                        <Link
                                            href={link.href}
                                            className="px-4 py-3 text-base font-normal"
                                        >
                                            {link.name}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </div>
                        )}
                    </div>

                    <SheetClose asChild>
                        <Link href="/contact" className="px-4 py-3 text-lg font-medium">
                            {t("pages.contact")}
                        </Link>
                    </SheetClose>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default Mobile