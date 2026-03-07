import React from 'react'
import { ForwardIcon } from '../../public/icons/icons'
import Link from 'next/link'

const Cta = ({ text = "Book A Consultation", href = "/contact" }) => {
    return (
        <Link
            href={href}
            className="group relative inline-flex items-center gap-4 bg-[#ECD29A] rounded-full py-2 pl-2 pr-5 cursor-pointer whitespace-nowrap capitalize overflow-hidden"
        >
            {/* expanding black background */}
            <span className="absolute left-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-black transition-all duration-500 ease-in-out group-hover:w-[calc(100%-16px)]" />

            {/* icon */}
            <span className="relative z-10 flex items-center justify-center w-9 h-9 text-white transition-all duration-500 ease-in-out group-hover:translate-x-[calc(100%-28px)]">
                <ForwardIcon />
            </span>

            {/* text */}
            <span className="relative z-10 font-[350] text-black text-base transition-colors duration-300 group-hover:text-white">
                {text}
            </span>
        </Link>
    )
}

export default Cta