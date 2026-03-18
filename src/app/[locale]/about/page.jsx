import BusinessConsultationSlider from "@/common/BusinessConsultationSlider";
import AboutBanner from "../components/pages/about/AboutBanner";
import Commitment from "../components/pages/about/Commitment";
import Growth from "../components/pages/about/Growth";
import Partners from "../components/pages/about/Partners";
import Services from "../components/pages/about/Services";
import { setRequestLocale } from "next-intl/server";

export default async function AboutPage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <AboutBanner />
            <Growth />
            <Partners />
            <Services />
            <div className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
                <BusinessConsultationSlider />
            </div>
            <Commitment />
        </>
    )
}