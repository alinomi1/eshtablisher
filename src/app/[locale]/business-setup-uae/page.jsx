import React from 'react'
import BusinessSetupBanner from '@/app/[locale]/components/pages/business-setup-uae/BusinessSetupBanner'
import Process from '@/app/[locale]/components/pages/business-setup-uae/Process'
import Focuses from '@/app/[locale]/components/home/Focuses'
import TimeLine from '@/app/[locale]/components/pages/business-setup-uae/TimeLine'
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider'
import Advantages from '@/app/[locale]/components/pages/business-setup-uae/Advantages'
import Arrival from '@/app/[locale]/components/pages/business-setup-uae/Arrival'
import Banking from '@/app/[locale]/components/pages/business-setup-uae/Banking'
import Connect from '@/app/[locale]/components/pages/contact/Connect'
import { setRequestLocale } from 'next-intl/server'

export default async function BusinessSetupUaePage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <BusinessSetupBanner />
            <Process />
            <Focuses />
            <TimeLine />
            <div className='py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30'>
                <BusinessConsultationSlider />
            </div>
            <Advantages />
            <Arrival />
            <Banking />
            <Connect />
        </>
    )
}
