import React from "react";
import { StepsCircleIcon } from "../../../../../public/icons/icons";
import { useTranslations } from "next-intl";



const Process = () => {
  const circleSize = 20;
  const gapPx = 40;
  const t = useTranslations("services")

  const requiredDocs = [
    { no: "01", text: t("business_setup_uae.process.required_docs.items.01") },
    { no: "02", text: t("business_setup_uae.process.required_docs.items.02") },
    { no: "03", text: t("business_setup_uae.process.required_docs.items.03") },
    { no: "04", text: t("business_setup_uae.process.required_docs.items.04") },
    { no: "05", text: t("business_setup_uae.process.required_docs.items.05") },
  ];

  const incorporationSteps = [
    { no: "06", text: t("business_setup_uae.process.incorporation.items.06") },
    { no: "07", text: t("business_setup_uae.process.incorporation.items.07") },
    { no: "08", text: t("business_setup_uae.process.incorporation.items.08") },
  ];

  const renderStepList = (data, gridCols) => (
    <ol className={`relative mt-12 grid ${gridCols} gap-10 max-md:grid-cols-1`}>
      {data.map((item, index) => (
        <li key={item.no} className="relative flex flex-col ">
          <div className="relative flex items-center h-5 mb-8">
            <div className="relative z-20 bg-white">
              <StepsCircleIcon />
            </div>
            <div
              className="absolute h-[1px] bg-[#D9DBDF] z-10 hidden md:block"
              style={{
                left: `${circleSize}px`,
                right: index < data.length - 1 ? `-${gapPx}px` : "0px",
              }}
            />
          </div>
          <span className="block text-[80px] font-bold leading-none text-[#F2E8D4] hover:text-[#D2B079] transition-colors duration-300 ease-in-out ">
            {item.no}
          </span>

          <p className="mt-6 whitespace-pre-line text-[21px] font-bold  text-black">
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30 overflow-hidden">
      <div className="container-1200 px-5 ">
        <div className="text-center" data-aos="zoom-in-down">
          <span className="inline-flex capitalize rounded-full bg-[#F6F6F6] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-black">
            {t("business_setup_uae.process.badge")}
          </span>
          <h2 className="mt-4 text-center capitalize text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px]  font-extrabold leading-[1.1] text-black">
            {t("business_setup_uae.process.required_docs.title")}
          </h2>
        </div>

        <div className="mt-16" data-aos="fade-up-right">
          <h3 className="text-[32px] leading-16 font-extrabold capitalizes text-black">
            {t("business_setup_uae.process.badge")}
          </h3>
          {renderStepList(requiredDocs, "grid-cols-5")}
        </div>

        <div className="mt-16" data-aos="fade-up-left">
          <h3 className="text-[32px] font-extrabold leading-16 capitalize text-black">
            {t("business_setup_uae.process.incorporation.title")}
          </h3>
          {renderStepList(incorporationSteps, "grid-cols-3")}
        </div>
      </div>
    </section>
  );
};

export default Process;