"use client";

import menuData from "./alacarte.json";
import { useRef } from "react";

type SectionRefs = {
  [key: string]: HTMLDivElement | null;
};


const ALaCarte = () => {
    const sectionRefs = useRef<SectionRefs>({});

    const handleScrollTo = (category: string) => {
    sectionRefs.current[category]?.scrollIntoView({ behavior: "smooth" });
    };

    return (  
        <div>
            <h1 className="text-2xl font-bold py-8 sticky top-20">A La Carte Menu</h1>
            <div className="flex gap-8 p-6">
                {/* Left Sidebar */}
                <div className="w-1/4 sticky top-48 h-fit">
                    <ul className="space-y-4">
                    {menuData.map((section) => (
                        <li key={section.category}>
                        <button
                            onClick={() => handleScrollTo(section.category)}
                            className="text-left w-full p-2 rounded hover:bg-gray-200"
                        >
                            {section.category}
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Right Menu */}
                <div className="w-3/4 space-y-12">
                    {menuData.map((section) => (
                    <div
                        key={section.category}
                        ref={(el) => {sectionRefs.current[section.category] = el; }}
                    >
                        <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
                        <div className="space-y-6">
                        {section.items.map((item, idx) => (
                            <div key={idx} className="border-b pb-4">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-600">{item.description}</p>
                            <p className="font-medium">£{item.price.toFixed(2)}</p>

                            {/* Optional Add-ons */}
                            {item.options && (
                                <ul className="mt-2 pl-4 list-disc">
                                {item.options.map((opt, i) => (
                                    <li key={i}>
                                    {opt.name} — £{opt.price.toFixed(2)}
                                    </li>
                                ))}
                                </ul>
                            )}
                            </div>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
        </div>
    );
}
 
export default ALaCarte;