import React from "react";

const items = [
    {
        no: "01",
        title: "Strategic Insight",
        desc: "We offer both visionary strategy and tactical execution.",
    },
    {
        no: "02",
        title: "Worldwide Network",
        desc: "Our partners and offices enable global reach with local sensitivity.",
    },
    {
        no: "03",
        title: "Proven Results",
        desc: "We have helped firms of all sizes compete and win internationally.",
    },
    {
        no: "04",
        title: "Dedicated Experts",
        desc: "Our team bring deep industry knowledge and tailored support.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-white pb-30">
            <div className="container-1200 px-5">
                <span className="block text-center text-lg font-bold capitalize text-black">
                    why choose us
                </span>
                <h2 className="mt-4 text-center capitalize text-[56px] font-extrabold leading-[1.1] text-black">
                    Your Strategic Growth Partner
                </h2>
                {/* cards */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {items.map((item) => (
                        <div
                            key={item.no}
                            className="group rounded-[12px] border border-[#D9DBDF] bg-white hover:bg-[#0E0F22] duration-500 ease-in-out transition-colors  px-6 py-4"
                        >
                            <span className="block text-lg font-extrabold text-black group-hover:text-[#ECD29A]">
                                {item.no}
                            </span>

                            <h3 className="py-6 text-[28px] font-extrabold text-black group-hover:text-white">
                                {item.title}
                            </h3>

                            <p className="text-base font-[350]  text-black group-hover:text-white">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;