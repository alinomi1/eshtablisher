import BusinessConsultationSlider from "@/common/BusinessConsultationSlider";
import React from "react";

const data = [
    {
        number: "01",
        title: "Our Mission",
        text: "Our mission is to become the trusted partner businesses rely on to confidently enter new markets, scale operations effectively, and create sustainable long-term value. Through strategic planning and seamless execution support, we deliver solutions that are practical, efficient, and carefully designed to evolve alongside your business growth.",
    },
    {
        number: "02",
        title: "Our Vision",
        text: "Our vision is to redefine excellence in global business consulting by combining international standards, strong regional expertise, and an unwavering commitment to client success. We aim not only to advise organizations but to equip them with the clarity, confidence, and strategic tools needed to lead in competitive markets.",
    },
    {
        number: "03",
        title: "Why Choose Us",
        text: "We combine global insight with strong local expertise to navigate complex markets with confidence. Our end-to-end support ensures seamless execution at every stage of your journey. With a client-focused approach and proven experience across industries, we deliver strategies that create measurable and sustainable results.",
    },
    {
        number: "04",
        title: "Our Commitment",
        text: "We are dedicated to helping your business not only grow but truly thrive across markets, industries, and jurisdictions worldwide. By maintaining the highest standards of professionalism and strategic excellence, we ensure your goals remain at the center of everything we do. Your sustained success will always remain our primary focus.",
    },
];

const Commitment = () => {
    return (
        <>
            <BusinessConsultationSlider />
            <section className="pb-30">
                <div className="container-1200 px-5">
                    {/* Top Title */}
                    <div className="text-center">
                        <span className="inline-flex rounded-full bg-[#F6F6F6] px-5 py-3 text-lg font-bold text-black">
                            Our Commitment
                        </span>

                        <h2 className="mt-8 text-[56px] leading-16 font-extrabold text-black">
                            Driven By Purpose And Excellence
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`py-10 ${index % 2 === 0
                                    ? "md:pr-12 md:border-r border-[#D9DBDF]"
                                    : "md:pl-12"
                                    } ${index >= 2 ? "border-t border-[#D9DBDF]" : ""}`}
                            >
                                <span className="text-lg font-extrabold text-black leading-5">
                                    {item.number}
                                </span>

                                <h3 className="py-6 text-[28px] font-extrabold capitalize text-black">
                                    {item.title}
                                </h3>

                                <p className="font-[350]  text-base leading-5 text-black">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Commitment;