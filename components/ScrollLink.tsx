"use client";

import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { MouseEvent } from "react";

interface ScrollLinkProps {
  href: string; // String to the page
  children: React.ReactNode;
  className?: string;
}

const ScrollLink = ({ href, children, className }: ScrollLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [targetPath, hash] = href.split("#");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === targetPath || (!targetPath && pathname === "/")) {
      // Already on target page, scroll directly
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to target page, then scroll after mount
      sessionStorage.setItem("scrollTo", hash);
      router.push(targetPath || "/");
    }
  };

  // On mount, check if there's a scroll target
  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        // Delay to allow DOM to mount fully
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      sessionStorage.removeItem("scrollTo");
    }
  }, [pathname]);

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default ScrollLink;