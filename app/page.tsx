"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Booking from "./sections/Booking";
import Contact from "./sections/Contact";

const Home = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (pathname === "/" && hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, searchParams]);

  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="menu" className="py-20">
        <Menu />
      </section>
      <section id="booking" className="py-20 bg-gray-50">
        <Booking />
      </section>
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </main>
  );
}
export default Home;