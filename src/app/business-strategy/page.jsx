import React from 'react'
import BusinessBanner from '../components/pages/services/business-strategy/BusinessBanner'
import StrategyGuidance from '../components/pages/services/business-strategy/StrategyGuidance'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Connect from '../components/pages/contact/Connect'

const page = () => {
    return (
        <>
            <BusinessBanner />
            <StrategyGuidance />
            <BusinessConsultationSlider />
            <Connect />
        </>
    )
}

export default page