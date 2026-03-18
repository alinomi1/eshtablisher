import React from 'react'
import MarketingBanner from '../components/pages/services/digital-marketing/MarketingBanner'
import MarketingGuidance from '../components/pages/services/digital-marketing/MarketingGuidance'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Connect from '../components/pages/contact/Connect'
import { setRequestLocale } from 'next-intl/server'

export default async function DigitalMarketingPage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <MarketingBanner />
            <MarketingGuidance />
            <BusinessConsultationSlider />
            <Connect />
        </>
    )
}
