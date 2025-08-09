import { useEffect, useState } from "react";

export default function CalendlyLoader({ onLoad }: { onLoad?: () => void }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      if (onLoad) onLoad();
    };
    document.body.appendChild(script);
  }, []);

  return null;
}