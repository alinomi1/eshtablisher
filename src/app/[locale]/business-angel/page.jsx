import React from 'react'
import AngelBanner from '@/app/[locale]/components/pages/services/business-angel/AngelBanner'
import Guidance from '../components/pages/services/business-angel/AngelGuidance'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Connect from '../components/pages/contact/Connect'
import { setRequestLocale } from 'next-intl/server'

export default async function BusinessAngelPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <AngelBanner />
      <Guidance />
      <BusinessConsultationSlider />
      <Connect />
    </>
  )
}
