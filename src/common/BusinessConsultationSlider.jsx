import Image from 'next/image'
import React from 'react'

const BusinessConsultationSlider = () => {
    return (
        <>
            <section className='overflow-hidden py-30'>
                <div className='flex items-center gap-9 animate-slideLR'>
                    <h2 className='text-[#0E0F22] leading-5 font-normal text-[132px] uppercase whitespace-nowrap'>
                        BUSINESS
                    </h2>

                    <Image
                        src="/images/sparkler.png"
                        alt='sparkler'
                        width={168}
                        height={168}
                        className='w-42 h-42'
                    />

                    <h2 className='text-[#0E0F22] leading-5 font-normal text-[132px] uppercase whitespace-nowrap'>
                        CONSULTATION
                    </h2>

                    <Image
                        src="/images/sparkler.png"
                        alt='sparkler'
                        width={168}
                        height={168}
                        className='w-42 h-42'
                    />
                </div>
            </section>
        </>
    )
}

export default BusinessConsultationSlider