import Image from 'next/image'
import React from 'react'

const ContactBanner = () => {
    return (
        <>
            <section className="relative w-full h-155 verflow-hidden">
                <Image
                    src="/images/contact.png"
                    alt=""
                    fill
                    priority
                    className="object-cover h-full"
                />
                {/* Gradient overlay */}
                {/* <div className="absolute inset-0 bg-[linear-gradient(115.66deg,rgba(0,0,0,0.4)_45.67%,rgba(0,0,0,0)_100%)]">
                </div> */}
                {/* Content */}
                <div className="absolute  bottom-12 left-[45%]">
                    <div className="container-1200 h-full flex justify-center items-center">
                        <button className="rounded-full bg-[#FFFFFF2E] text-white  backdrop-blur-[17px] px-6 py-2.5 text-xl font-extrabold capitalize">
                            contact
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactBanner