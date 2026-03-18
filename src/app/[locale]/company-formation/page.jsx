import React from 'react'
import Connect from '@/app/[locale]/components/pages/contact/Connect'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import FormationGuidance from '@/app/[locale]/components/pages/services/company-formation/FormationGuidance'
import FormationBanner from '@/app/[locale]/components/pages/services/company-formation/FormationBanner'
import Faqs from '@/app/[locale]/components/pages/services/company-formation/Faqs'
import { setRequestLocale } from 'next-intl/server'

export default async function CompanyFormationPage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);
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
