"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInit() {
  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;

    AOS.init({
      disable: checkMobile(),
      duration: 800,
      easing: 'ease-out-quad',
      once: true,
      offset: 50, 
    });
  }, []);

  return null;
}