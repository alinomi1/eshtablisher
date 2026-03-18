import React from 'react'
import Financebanner from '../components/pages/services/finance/FinanceBanner'
import FinanceGuidance from '../components/pages/services/finance/FinanceGuidance'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Connect from '../components/pages/contact/Connect'
import { setRequestLocale } from 'next-intl/server'

export default async function FinancePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
   <>
   <Financebanner/>
   <FinanceGuidance/>
   <BusinessConsultationSlider/>
   <Connect/>
   </>
  )
}
