import React from 'react'
import MarketingBanner from '../../components/pages/services/digital-marketing/MarketingBanner'
import MarketingGuidance from '../../components/pages/services/digital-marketing/MarketingGuidance'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Connect from '../../components/pages/contact/Connect'

const page = () => {
    return (
        <>
            <MarketingBanner />
            <MarketingGuidance />
            <BusinessConsultationSlider />
            <Connect />
        </>
    )
}

export default page