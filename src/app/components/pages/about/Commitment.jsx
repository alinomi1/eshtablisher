import { useTranslations } from "next-intl";
import React from "react";


const Commitment = () => {
    const t = useTranslations("about")


    const data = [
        {
            number: "01",
            title: t("our_commitment.cards.01.title"),
            text: t("our_commitment.cards.01.desc")
        },
        {
            number: "02",
            title: t("our_commitment.cards.02.title"),
            text: t("our_commitment.cards.02.desc")
        },
        {
            number: "03",
            title: t("our_commitment.cards.03.title"),
            text: t("our_commitment.cards.03.desc")
        },
        {
            number: "04",
            title: t("our_commitment.cards.04.title"),
            text: t("our_commitment.cards.04.desc")
        },
    ];
    return (
        <>
            <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-30">
                <div className="container-1200 px-5">
                    {/* Top Title */}
                    <div className="text-center" data-aos="zoom-in-down">
                        <span className="inline-flex rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
                            {t("our_commitment.badge")}
                        </span>

                        <h2 className="mt-5 sm:mt-6 lg:mt-8 text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] lg:leading-16 font-extrabold text-black">
                            {t("our_commitment.title")}
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2" data-aos="fade-up">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`py-8 sm:py-9 lg:py-10 ${index % 2 === 0
                                    ? "md:pr-8 lg:pr-12 md:border-r border-[#D9DBDF]"
                                    : "md:pl-8 lg:pl-12"
                                    } ${index >= 2 ? "border-t border-[#D9DBDF]" : ""}`}
                            >
                                <span className="text-base sm:text-lg font-extrabold text-black leading-5">
                                    {item.number}
                                </span>

                                <h3 className="py-4 sm:py-5 lg:py-6 text-[22px] sm:text-[24px] lg:text-[28px] leading-[1.2] font-extrabold capitalize text-black">
                                    {item.title}
                                </h3>

                                <p className="font-[350] text-sm sm:text-base leading-6 sm:leading-7 lg:leading-5 text-black">
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