import React from "react";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Solutions from "./components/pages/about/Solutions";
import BusinessConsultationSlider from "@/common/BusinessConsultationSlider";
import HowWeWork from "./components/home/HowWeWork";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ServiceCountries from "./components/home/ServiceCountries";
import Connect from "./components/pages/contact/Connect";
import Testimonials from "./components/home/Testimonials";
import Focuses from "./components/home/Focuses";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Focuses />
      <div className="py-30">
        <BusinessConsultationSlider />
      </div>
      <HowWeWork />
      <WhyChooseUs />
      <ServiceCountries />
      <Testimonials />
      <Connect />
    </>
  );
}
