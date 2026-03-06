import React from 'react'
import ContactBanner from '../components/pages/contact/ContactBanner'
import Connect from '../components/pages/contact/Connect'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'

const page = () => {
    return (
        <>
            <ContactBanner />
            <Connect />
            <div className='pb-30'>
                <BusinessConsultationSlider />
            </div>
        </>

    )
}

export default page