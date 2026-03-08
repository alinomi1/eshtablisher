"use client"
import React, { useState } from 'react';
import { DropdownIcon } from '../../../../../../public/icons/icons';


const faqData = [
    {
        id: "01",
        question: " Which government Authority is responsible for the issuance of Mainland License?",
        answer: "The issuance of the License is from DED (DEPARTMENT OF ECONOMIC DEPARTMENT)."
    },
    {
        id: "02",
        question: " Are whats the Visa options?",
        answer: "Options include the Investor/Partner Visa (2 years), the Golden Visa (10 years for major investors), the Green Visa (5 years for skilled professionals), and standard Employment Visas for your staff."
    },
    {
        id: "03",
        question: " What is the partner or investor Visa?",
        answer: "This is a residency permit granted to foreign nationals who invest in or establish a company on the UAE mainland. It allows you to live, work, and sponsor your family members for residency."
    },
    {
        id: "04",
        question: "How do I obtain an employment Visa?",
        answer: "Your employer must first apply for a work permit and entry permit. Once you enter the UAE, you must pass a medical fitness test, complete Emirates ID biometrics, and sign an official MoHRE labor contract."
    },
    {
        id: "05",
        question: "What steps should I take after receiving my e-visa?",
        answer: "After receiving your e-visa (Entry Permit), you must enter the UAE or perform a 'status change' if already inside. Then, complete your medical screening and biometrics within 60 days to finalize your residency."
    },
];


const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className='pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-30"'>
            <div className="container-1200 px-5">
                {/* Top Title */}
                <div className="text-center" data-aos="zoom-in-down">
                    <span className="inline-flex rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                        FAQS
                    </span>
                    <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] lg:leading-16 font-extrabold text-black">
                        UAE Tax Consultancy FAQs
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 " data-aos="fade-up">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b border-[#D9DBDF] py-4 sm:py-7">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-start text-left gap-4 sm:gap-6 group"
                            >
                                {/* Number Box */}
                                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F7F1E5] rounded-sm flex items-center justify-center font-extrabold text-black text-sm  md:text-base lg:text-[22px]">
                                    {faq.id}
                                </div>

                                {/* Question */}
                                <span className="grow pt-2.5 sm:pt-3 font-bold text-sm md:text-base lg:text-[22px] text-black leading-tight">
                                    {faq.question}
                                </span>

                                {/* Arrow */}
                                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F7F1E5] rounded-sm flex items-center justify-center transition-transform duration-300">
                                    <DropdownIcon
                                        className={`text-black transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </div>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <div className="pl-14 sm:pl-18 pr-14 mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <p className="text-sm  sm:text-base font-[350] text-black leading-relaxed max-w-3xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;