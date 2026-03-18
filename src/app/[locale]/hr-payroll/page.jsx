import React from 'react'
import HrBanner from '../components/pages/services/hr-payroll/HrBanner'
import HrGuidance from '../components/pages/services/hr-payroll/HrGuidance'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Connect from '../components/pages/contact/Connect'
import { setRequestLocale } from 'next-intl/server'

export default async function HrPayrollPage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <HrBanner />
            <HrGuidance />
            <BusinessConsultationSlider />
            <Connect />
        </>
    )
}
