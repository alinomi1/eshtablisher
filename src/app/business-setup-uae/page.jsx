import React from 'react'
import BusinessSetupBanner from '../components/pages/business-setup-uae/BusinessSetupBanner'
import Process from '../components/pages/business-setup-uae/Process'
import Focuses from '../components/home/Focuses'
import TimeLine from '../components/pages/business-setup-uae/TimeLine'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Advantages from '../components/pages/business-setup-uae/Advantages'
import Arrival from '../components/pages/business-setup-uae/Arrival'
import Banking from '../components/pages/business-setup-uae/Banking'
import Connect from '../components/pages/contact/Connect'

const page = () => {
    return (
        <>
            <BusinessSetupBanner />
            <Process />
            <Focuses />
            <TimeLine />
            <div className='py-30'>
                <BusinessConsultationSlider />
            </div>
            <Advantages />
            <Arrival />
            <Banking />
            <Connect />
        </>
    )
}

export default page