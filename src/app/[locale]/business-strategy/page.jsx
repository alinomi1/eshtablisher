import React from 'react'
import BusinessBanner from '../components/pages/services/business-strategy/BusinessBanner'
import StrategyGuidance from '../components/pages/services/business-strategy/StrategyGuidance'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Connect from '../components/pages/contact/Connect'
import { setRequestLocale } from 'next-intl/server'

export default async function BusinessStrategyPage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <BusinessBanner />
            <StrategyGuidance />
            <BusinessConsultationSlider />
            <Connect />
        </>
    )
}
