import React from 'react'
import AngelBanner from '@/app/components/pages/services/business-angel/AngelBanner'
import Guidance from '../components/pages/services/business-angel/AngelGuidance'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Connect from '../components/pages/contact/Connect'

const page = () => {
  return (
    <>
      <AngelBanner />
      <Guidance />
      <BusinessConsultationSlider />
      <Connect />
    </>
  )
}

export default page