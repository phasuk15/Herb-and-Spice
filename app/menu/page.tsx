"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ALaCarte from "./ALaCarte";
import Banquet from "./Banquet";

const Menu = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, searchParams]);

  return (
    <section className="max-w-4xl mx-auto scroll-py-12 py-24">
      <h2 className="text-4xl text-center font-bold mb-6">Our Menu</h2>
      <section id="banquet" className="scroll-mt-24">
        <Banquet />
      </section>
      <section id="alacarte" className="scroll-mt-24 py-24">
        <ALaCarte />
      </section>
    </section>
  );
}
export default Menu;
