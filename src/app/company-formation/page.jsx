import React from 'react'
import Connect from '@/app/components/pages/contact/Connect'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import FormationGuidance from '@/app/components/pages/services/company-formation/FormationGuidance'
import FormationBanner from '@/app/components/pages/services/company-formation/FormationBanner'
import Faqs from '@/app/components/pages/services/company-formation/Faqs'

const page = () => {
    return (
        <>
            <FormationBanner />
            <FormationGuidance />
            <BusinessConsultationSlider />
            <Faqs />
            <Connect />
        </>
    )
}

export default page