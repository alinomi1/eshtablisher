import React from 'react'
import Financebanner from '../../components/pages/services/finance/FinanceBanner'
import FinanceGuidance from '../../components/pages/services/finance/FinanceGuidance'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Connect from '../../components/pages/contact/Connect'

const page = () => {
  return (
   <>
   <Financebanner/>
   <FinanceGuidance/>
   <BusinessConsultationSlider/>
   <Connect/>
   </>
  )
}

export default page