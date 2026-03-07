import React from 'react';
import { DropdownIcon } from '../../../../../public/icons/icons';
import Image from 'next/image';
import Cta from '@/common/Cta';

const Connect = () => {
    return (
        <>
            <section className='bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30'>
                <div className="container-1200 px-5">
                    {/* Top Info */}
                    <div className="bg-[#F7F1E5] rounded-xl p-4 sm:p-5 md:p-6 flex flex-col md:flex-row md:flex-wrap justify-between items-stretch md:items-center" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <div className="flex flex-col items-center justify-center flex-1 py-4 sm:py-5 md:py-0 border-b md:border-b-0 md:border-r border-[#E5C999]/50 last:border-0">
                            <span className="text-base sm:text-lg md:text-xl text-black font-extrabold capitalize">Email</span>
                            <a href="mailto:julie@gmail.com" className="font-[350] text-sm text-black pt-2 sm:pt-3 break-all text-center">julie@gmail.com</a>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-1 py-4 sm:py-5 md:py-0 border-b md:border-b-0 md:border-r border-[#ECD29A] last:border-0">
                            <span className="text-base sm:text-lg md:text-xl text-black font-extrabold capitalize">Contact</span>
                            <a href="tel:+971585934816" className="font-[350] text-sm text-black pt-2 sm:pt-3 text-center">+971 58 593 4816</a>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-1 py-4 sm:py-5 md:py-0">
                            <span className="text-base sm:text-lg md:text-xl text-black font-extrabold capitalize">Location</span>
                            <p className="font-[350] text-sm text-black pt-2 sm:pt-3 text-center">Jvc Dubai UAE</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-12 items-start mt-10 sm:mt-12 md:mt-14 lg:mt-16">
                        {/* Left */}
                        <div data-aos="fade-up-right">
                            <span className="inline-block rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black capitalize">
                                Contact Us
                            </span>

                            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] lg:leading-18 max-w-xl font-extrabold text-black pt-5 sm:pt-6 lg:pt-8">
                                Let&apos;s Connect! Reach Out Anytime!
                            </h1>

                            <div className="space-y-6 sm:space-y-8 md:space-y-10 pt-8 sm:pt-10 md:pt-12 lg:pt-16">
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F7F1E5] rounded-[3px] flex items-center justify-center shrink-0">
                                        <Image
                                            src="/images/customer-support.png"
                                            width={36}
                                            height={36}
                                            alt="customer support"
                                            className="object-cover w-7 h-7 sm:w-9 sm:h-9"
                                        />
                                    </div>
                                    <span className="text-base sm:text-lg font-bold text-black leading-5 capitalize">
                                        24/7 Customer Support
                                    </span>
                                </div>

                                <div className="max-w-69 h-px bg-[#D9DBDF]"></div>

                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F7F1E5] rounded-[3px] flex items-center justify-center shrink-0">
                                        <Image
                                            src="/images/emergency-service.png"
                                            width={36}
                                            height={36}
                                            alt="emergency service."
                                            className="object-cover w-7 h-7 sm:w-9 sm:h-9"
                                        />
                                    </div>
                                    <span className="text-base sm:text-lg font-bold text-black leading-5 capitalize">
                                        Emergency Services
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div data-aos="fade-up-left">
                            <h3 className="text-[20px] sm:text-[22px] leading-[1.2] font-extrabold text-black capitalize">
                                Schedule A Consultation Now
                            </h3>

                            <p className="text-black text-sm font-[350] max-w-md pt-3 sm:pt-4 leading-6">
                                Whether you have a question about our brews or just want to share your story, we&apos;re here to listen.
                            </p>

                            <form className="pt-8 sm:pt-10 md:pt-12 flex flex-col gap-4 sm:gap-5">
                                <div className="border-b border-gray-200 py-2">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full outline-none text-base sm:text-lg text-black placeholder:text-[#7A7C81] bg-transparent"
                                    />
                                </div>

                                <div className="border-b border-gray-200 py-2">
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full outline-none text-base sm:text-lg text-black placeholder:text-[#7A7C81] bg-transparent"
                                    />
                                </div>

                                <div className="flex items-center justify-between relative border-b border-gray-200 py-2">
                                    <select
                                        defaultValue=""
                                        className="w-full outline-none text-base sm:text-lg text-[#7A7C81] bg-transparent appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Service</option>
                                        <option value="strategy">Business Strategy</option>
                                        <option value="angel">Business Angel</option>
                                        <option value="marketing">Digital Marketing 360</option>
                                        <option value="formation">Company Formation</option>
                                        <option value="hr">HR & Payroll</option>
                                        <option value="finance">Finance</option>
                                    </select>
                                    <DropdownIcon className="text-black cursor-pointer shrink-0" />
                                </div>

                                <div className="border-b border-gray-200 py-2">
                                    <textarea
                                        placeholder="Message"
                                        rows={1}
                                        className="w-full outline-none text-base sm:text-lg text-black placeholder:text-[#7A7C81] bg-transparent resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-8 sm:pt-10 md:pt-12">
                                    <Cta />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Connect;