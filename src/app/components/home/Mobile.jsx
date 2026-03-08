"use client";
import React, { useState } from 'react'
import {Link} from '@/i18n/navigation'
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

const serviceLinks = [
    { name: "An Example Of Setting Up A Business in UAE", href: "/business-setup-uae" },
    { name: "Business Strategy", href: "/business-strategy" },
    { name: "Business Angel", href: "/business-angel" },
    { name: "Digital Marketing 360", href: "/digital-marketing" },
    { name: "Company Formation", href: "/company-formation" },
    { name: "HR & Payroll", href: "/hr-payroll" },
    { name: "Finance", href: "/finance" },
]

const Mobile = () => {
    const [openServices, setOpenServices] = useState(false)

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
                            Home
                        </Link>
                    </SheetClose>

                    <SheetClose asChild>
                        <Link href="/about" className="px-4 py-3 text-lg font-medium">
                            About Us
                        </Link>
                    </SheetClose>

                    {/* Services Section */}
                    <div className="flex flex-col">
                        <button
                            type="button"
                            onClick={() => setOpenServices((prev) => !prev)}
                            className="flex items-center justify-between px-4 py-3 text-left text-lg font-medium"
                        >
                            <span>Our Services</span>
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
                            Contact Us
                        </Link>
                    </SheetClose>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default Mobile