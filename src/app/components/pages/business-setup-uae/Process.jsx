import React from "react";
import { StepsCircleIcon } from "../../../../../public/icons/icons";

const requiredDocs = [
  { no: "01", text: "Company name &\ntwo variations" },
  { no: "02", text: "Passport + latest\nUAE entry stamp" },
  { no: "03", text: "Proof of residence\ndocument" },
  { no: "04", text: "White background\npassport photo" },
  { no: "05", text: "Same documents\nfor all shareholders" },
];

const incorporationSteps = [
  { no: "06", text: "Pay (bank transfer or card)\nto Establisher" },
  { no: "07", text: "Receive documents → sign & email\nback" },
  { no: "08", text: "We will proceed with the\nregistration your company" },
];

const Process = () => {
  const circleSize = 20;
  const gapPx = 40;

  const renderStepList = (data, gridCols) => (
    <ol className={`relative mt-12 grid ${gridCols} gap-10 max-md:grid-cols-1`}>
      {data.map((item, index) => (
        <li key={item.no} className="relative flex flex-col">
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
          <span className="block text-[80px] font-bold leading-none text-[#F2E8D4] hover:text-[#ECD29A] transition-colors duration-300 ease-in-out ">
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
    <section className="bg-white py-24">
      <div className="container-1200 px-5 mx-auto">
        <span className="block text-center text-lg font-bold capitalize text-black">
          Our Process
        </span>
        <h2 className="mt-4 text-center capitalize text-[56px] font-extrabold leading-[1.1] text-black">
          The Process Of Business Setup
        </h2>

        <div className="mt-16">
          <h3 className="text-[32px] leading-16 font-extrabold text-black">
            Required Documents
          </h3>
          {renderStepList(requiredDocs, "grid-cols-5")}
        </div>

        <div className="mt-16">
          <h3 className="text-[32px] font-extrabold leading-16  text-black">
            Incorporation Steps
          </h3>
          {renderStepList(incorporationSteps, "grid-cols-3")}
        </div>
      </div>
    </section>
  );
};

export default Process;