import React from 'react';
import { DropdownIcon, ForwardIcon } from '../../../../../public/icons/icons';
import Image from 'next/image';
import BusinessConsultationSlider from '@/common/BusinessConsultationSlider';
import Cta from '@/common/Cta';

const Connect = () => {
    return (
        <>
            <section className='bg-white pt-30'>
                <div className="container-1200 px-5">
                    {/* Top Info */}
                    <div className="bg-[#F7F1E5] rounded-xl p-6 flex flex-wrap justify-between items-center">
                        <div className="flex flex-col items-center flex-1 border-r border-[#E5C999]/50 last:border-0">
                            <span className="text-xl text-black font-extrabold capitalize">Email</span>
                            <a href="mailto:julie@gmail.com" className="font-[350] text-sm text-black pt-3">julie@gmail.com</a>
                        </div>
                        <div className="flex flex-col items-center flex-1 border-r border-[#ECD29A] last:border-0">
                            <span className="text-xl text-black font-extrabold capitalize">Contact</span>
                            <a href="tel:+971585934816" className="font-[350] text-sm text-black pt-3">+971 58 593 4816</a>
                        </div>
                        <div className="flex flex-col items-center flex-1 border-r border-[#E5C999]/50 last:border-0">
                            <span className="text-xl text-black font-extrabold capitalize">Location</span>
                            <p className="font-[350] text-sm text-black pt-3">Jvc Dubai UAE</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">
                        {/* Left */}
                        <div>
                            <span className="inline-block rounded-full bg-[#F6F6F6] px-5 py-3 text-lg font-bold text-black capitalize">
                                Contact Us
                            </span>
                            <h1 className="text-[56px] leading-18 max-w-xl font-extrabold text-black pt-8">
                                Let&apos;s Connect! Reach Out Anytime!
                            </h1>

                            <div className="space-y-10 pt-16">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-14 h-14 bg-[#F7F1E5] rounded-[3px] flex items-center justify-center">
                                        <Image src="/images/customer-support.png" width={36} height={36} alt='customer support' className='object-cover' />
                                    </div>
                                    <span className="text-lg font-bold text-black leading-5 capitalize">24/7 Customer Support</span>
                                </div>

                                <div className="max-w-69 h-px bg-[#D9DBDF]"></div>

                                <div className="flex items-center gap-2.5">
                                    <div className="w-14 h-14 bg-[#F7F1E5] rounded-[3px] flex items-center justify-center">
                                        <Image src="/images/emergency-service.png" width={36} height={36} alt='emergency service.' className='object-cover' />
                                    </div>
                                    <span className="text-lg font-bold text-black leading-5 capitalize">Emergency Services</span>
                                </div>
                            </div>
                        </div>
                        {/* Right */}
                        <div>
                            <h3 className="text-[22px] leading-5 font-extrabold text-black capitalize">Schedule A Consultation Now</h3>
                            <p className="text-black text-sm font-[350] max-w-md pt-4">
                                Whether you have a question about our brews or just want to share your story, we&apos;re here to listen.
                            </p>

                            <form className="pt-12 flex flex-col gap-5">
                                <div className="border-b border-gray-200 py-2">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full outline-none text-lg text-black placeholder:text-[#7A7C81] bg-transparent"
                                    />
                                </div>

                                <div className="border-b border-gray-200 py-2">
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full outline-none text-lg text-black placeholder:text-[#7A7C81] bg-transparent"
                                    />
                                </div>

                                <div className="flex items-center justify-between relative border-b border-gray-200 py-2">
                                    <select className="w-full outline-none text-lg text-[#7A7C81] bg-transparent appearance-none cursor-pointer">
                                        <option value="" disabled selected>Service</option>
                                        <option value="strategy">Business Strategy</option>
                                        <option value="angel">Business Angel</option>
                                        <option value="marketing">Digital Marketing 360</option>
                                        <option value="formation">Company Formation</option>
                                        <option value="hr">HR & Payroll</option>
                                        <option value="finance">Finance</option>
                                    </select>
                                    <DropdownIcon className="text-black cursor-pointer" />
                                </div>

                                <div className="border-b border-gray-200 py-2">
                                    <textarea
                                        placeholder="Message"
                                        rows={1}
                                        className="w-full outline-none text-lg text-black placeholder:text-[#7A7C81] bg-transparent resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-12">
                                  <Cta/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <BusinessConsultationSlider />
        </>
    );
}

export default Connect;