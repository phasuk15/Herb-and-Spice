import lightlogo from "../assets/images/herb&spiceLogoLight.png"
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineLocationOn } from "react-icons/md";
import { LiaMapSolid } from "react-icons/lia";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="bg-gold text-white pt-10 px-10">
      <div className="flex flex-wrap justify-between gap-12">
        {/* Logo Section */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs">
          <img
            src={lightlogo}
            alt="logo"
            width={150}
            height={150}
            className=""
          />
          <p className="font-greatVibes text-green-950 mt-3 text-2xl">
            Herb and Spice Royal Thai Cuisine
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col justify-center items-start gap-5 font-kaisei text-sm max-w-xs">
          <div>
            <p className="font-bold">Contact Us</p>
            <p className="flex items-center gap-2 mt-3">
              <FaPhoneAlt /> +44 1788 537735
            </p>
            <p className="flex items-center gap-2 mt-2">
              <TfiEmail /> uthaiuturn@gmail.com
            </p>
            <a
              href="https://www.facebook.com/thhands/?locale=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2">
              <FaFacebookF /> herbandspicerugby
            </a>
          </div>
        </div>

        {/* Find Us Section */}
        <div className="flex flex-col justify-center items-start gap-5 font-kaisei text-sm max-w-xs">
          <div>
            <p className="font-bold">Find Us</p>
            <p className="flex items-center gap-2 mt-3">
              <MdOutlineLocationOn /> 10 Henry Street, Rugby, United Kingdom
            </p>
            <a
              href="https://www.google.com/maps/place/Herb+%26+Spice/@52.373973,-1.2612516,17.66z/data=!4m6!3m5!1s0x487740b847b3b92b:0x680d577200f289d3!8m2!3d52.3739129!4d-1.2600938!16s%2Fg%2F1vtqvltw?entry=ttu&g_ep=EgoyMDI0MDkyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-3"
            >
              <LiaMapSolid /> Herb and Spice Thai Restaurant
            </a>
          </div>
        </div>

        {/* Open Times Section */}
        <div className="flex flex-col justify-center items-start gap-5 font-kaisei text-sm max-w-xs">
          <div>
            <p className="font-bold">Open Times</p>
            <p className="mt-3">
              Mon - Sat: 6:00 PM - 10:00 PM <br />
              Sunday closed.
            </p>
          </div>
        </div>

      </div>
      <hr className="border-t-1 border-gray-300 mt-8 pb-5" />
      <div className="flex flex-col justify-center items-center pb-5 gap-5 font-kaisei">
        <div className="text-xs flex flex-col items-center"> 
          <p className="flex items-center gap-2 mt-3">
            <AiOutlineCopyright /> 2024 All Rights Reserved by Herb and Spice.
          </p>
          <a
            href="https://syephasuk.dev/"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center text-center"
          >
            Made by Sye Phasuk.
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
