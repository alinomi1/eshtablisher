import React from 'react'
import HrBanner from '../components/pages/services/hr-payroll/HrBanner'
import HrGuidance from '../components/pages/services/hr-payroll/HrGuidance'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Connect from '../components/pages/contact/Connect'

const page = () => {
    return (
        <>
            <HrBanner />
            <HrGuidance />
            <BusinessConsultationSlider />
            <Connect />
        </>
    )
}

export default page