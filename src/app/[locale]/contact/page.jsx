import React from 'react'
import ContactBanner from '../components/pages/contact/ContactBanner'
import Connect from '../components/pages/contact/Connect'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import { setRequestLocale } from 'next-intl/server'

export default async function ContactPage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <ContactBanner />
            <Connect />
            <div className='pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-30'>
                <BusinessConsultationSlider />
            </div>
        </>
    )
}
