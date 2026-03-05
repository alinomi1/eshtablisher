import React from "react";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Focuses from "./components/home/Focuses";
import TimeLine from "./components/home/TimeLine";
import Advantages from "./components/home/Advantages";
import Arrival from "./components/home/Arrival";
import Banking from "./components/home/Banking";
import Solutions from "./components/pages/about/Solutions";
import Process from "./components/home/Process";
import BusinessConsultationSlider from "@/common/BusinessConsultationSlider";
import HowWeWork from "./components/home/HowWeWork";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ServiceCountries from "./components/home/ServiceCountries";
import Connect from "./components/pages/contact/Connect";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Focuses />
      <TimeLine />
      <Process />
      <Advantages />
      <Arrival />
      <Banking />
      <Solutions />
      <BusinessConsultationSlider />
      <HowWeWork />
      <WhyChooseUs />
      <ServiceCountries />
      <Testimonials />
      <Connect />
    </>
  );
}
