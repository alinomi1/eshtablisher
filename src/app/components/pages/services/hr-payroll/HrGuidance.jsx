import Cta from '@/common/Cta';
import React from 'react';

const features = [
    { id: '01', text: 'Payroll setup and processing' },
    { id: '02', text: 'Time attendance and leaves' },
    { id: '03', text: 'Payslips tax reports preparation' },
    { id: '04', text: 'HR administration & compliance' },
    { id: '05', text: 'Recruitment screening interviews' },
    { id: '06', text: 'Visas permits onboarding support' },
];

const HrGuidance = () => {
    return (
        <>
            <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">
                <div className="container-1200 px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                        <div data-aos="fade-up-left">
                            <span className="inline-flex rounded-full bg-[#F6F6F6] px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                                Service No 5
                            </span>

                            <h2 className="text-black font-extrabold  text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  lg:leading-16 pt-5 sm:pt-6 lg:pt-8">
                                Reliable HR and Payroll Support
                            </h2>
                        </div>

                        <div data-aos="fade-up-right">
                            <p className="pb-8 sm:pb-9 lg:pb-10 font-[350] text-sm sm:text-base leading-6 sm:leading-7 text-black">
                                <span className="font-extrabold">Establisher</span> streamlines your people operations with accurate payroll, compliant HR administration, and fast hiring support. We set up payroll workflows, manage time and attendance, generate payslips, and coordinate deductions and reporting so you stay audit-ready. Need cross-border staffing? We handle employee onboarding formalities, visas and work permits, and ongoing support—so you save time, reduce risk, and focus on growth today.</p>

                            <Cta text='learn more' href='business-setup-uae' />
                        </div>
                    </div>

                    {/* advantages */}
                    <div className="grid w-full grid-cols-1 md:grid-cols-3 mt-10 sm:mt-12 md:mt-14 lg:mt-16" data-aos="fade-up">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className={`
                  p-3 lg:p-5 flex flex-col justify-start
                  border-[#D9DBDF]
                  border-b last:border-b-0
                  md:border-b md:border-r
                  md:nth-[3n]:border-r-0
                  md:nth-last-[-n+3]:border-b-0
                `}
                            >
                                <span className="text-[#ABAEB2] font-extrabold text-base sm:text-lg">
                                    {feature.id}
                                </span>
                                <p className="text-black font-extrabold text-[18px] sm:text-[20px] lg:text-[22px] pt-4 sm:pt-5 lg:pt-6 leading-[1.35]">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HrGuidance;