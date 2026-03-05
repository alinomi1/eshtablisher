import React from 'react'
import { ForwardIcon } from '../../public/icons/icons'
import Link from 'next/link'

const Cta = () => {
    return (
        <>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-[#ECD29A] rounded-full py-2 pl-2 pr-5 cursor-pointer whitespace-nowrap">
                <div className="bg-black rounded-full w-9 h-9 flex items-center justify-center">
                    <ForwardIcon />
                </div>
                <span className="font-[350] text-black text-base">
                    Book A Consultation
                </span>
            </Link>
        </>
    )
}

export default Cta