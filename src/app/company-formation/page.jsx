import React from 'react'
import Connect from '../components/pages/contact/Connect'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import FormationGuidance from '../components/pages/services/company-formation/FormationGuidance'
import FormationBanner from '../components/pages/services/company-formation/FormationBanner'

const page = () => {
    return (
        <>
            <FormationBanner />
            <FormationGuidance />
            <BusinessConsultationSlider />
            <Connect />
        </>
    )
}

export default page