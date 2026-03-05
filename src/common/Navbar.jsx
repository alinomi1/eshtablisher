import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Language from './Language'
import { ChevronDown } from 'lucide-react'
import { DropdownIcon } from '../../public/icons/icons'

const Navbar = () => {
  const serviceLinks = [
    { name: 'Business Strategy', href: '/services/business-strategy' },
    { name: 'Business Angel', href: '/services/business-angel' },
    { name: 'Digital Marketing 360', href: '/services/digital-marketing' },
    { name: 'Company Formation', href: '/services/company-formation' },
    { name: 'HR & Payroll', href: '/services/hr-payroll' },
    { name: 'Finance', href: '/services/finance' },
  ]

  return (
    <>
      {/* Changed 'absolute' to 'fixed' to keep it at the top during scroll */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className='container-1200 px-5 mt-6'>
          <div className='bg-[#0E0F22] rounded-xl py-2.5 px-30'>
            <div className='flex items-center justify-between'>
              {/* logo */}
              <Link href="/">
                <Image
                  src="/images/logoo.png"
                  alt="Establisher"
                  width={105}
                  height={74}
                  priority
                  className="h-18.5 w-26.25 object-cover"
                />
              </Link>

              {/* Links */}
              <nav className="hidden lg:flex items-center gap-6 font-normal capitalize text-white text-base leading-[160%]">
                <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link>

                {/* Our Services Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-2.5  cursor-pointer">
                    Our Services
                    <DropdownIcon className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full hidden group-hover:block w-60 pt-5 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-white/22 backdrop-blur-md rounded-2xl  overflow-hidden">
                      {serviceLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className={`block px-5 py-4 text-base text-black capitalize font-normal hover:bg-white/10 transition-colors border-[#0000001F] ${index !== serviceLinks.length - 1 ? 'border-b' : ''
                            }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
              </nav>

              {/* Language */}
              <Language />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar