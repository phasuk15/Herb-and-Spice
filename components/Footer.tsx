import { Phone, Mail, Facebook, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-6 font-kaisei">
      {/* Restaurant Name */}
      <p className="font-greatVibes text-2xl py-8">
        Herb and Spice Royal Thai Cuisine
      </p>

      {/* Contact */}
      <div className="space-y-2 text-sm">
        <p className="flex items-center justify-center gap-2">
          <Phone size={16} /> 01788 537735
        </p>
        <p className="flex items-center justify-center gap-2">
          <Mail size={16} /> uthaiuturn@gmail.com
        </p>
        <a
          href="https://www.facebook.com/thhands/?locale=en_GB"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 hover:underline"
        >
          <Facebook size={16} /> herbandspicerugby
        </a>
      </div>

      {/* Address */}
      <div className="mt-4 text-sm max-w-xs mx-auto space-y-1">
        <p className="flex items-center justify-center gap-2">
          <MapPin size={16} /> 10 Henry Street, Rugby, United Kingdom
        </p>
        <a
          href="https://www.google.com/maps/place/Herb+%26+Spice/@52.373973,-1.2612516,17.66z/data=!4m6!3m5!1s0x487740b847b3b92b:0x680d577200f289d3!8m2!3d52.3739129!4d-1.2600938!16s%2Fg%2F1vtqvltw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View on Google Maps
        </a>
      </div>

      {/* Open Times */}
      <div className="mt-4 text-sm space-y-1">
        <p className="flex items-center justify-center gap-2">
          <Clock size={16} /> Monday – Saturday: 6:00 PM – 10:00 PM
        </p>
        <p className="flex items-center justify-center gap-2">
          <Clock size={16} /> Sunday: Closed
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-700 my-4 mt-8" />

      {/* Footer Bottom */}
      <div className="text-xs space-y-1">
        <p>© 2024 Herb and Spice. All Rights Reserved.</p>
        <a
          href="https://syephasuk.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Made by Sye Phasuk
        </a>
      </div>
    </footer>
  );
};

export default Footer;