"use client";

import BookingWidget from "@/components/BookingWidget";
import { useState } from "react";

const Booking = () => {
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  return (
    <>
      <section className="max-w-lg mx-auto py-24">
        <h2 className="text-3xl font-bold mb-6 text-center">Book a Table</h2>
        <BookingWidget />
        {/* <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            name="guests"
            placeholder="Guests"
            min={1}
            value={formData.guests}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            disabled={!isCalendlyReady}
            className={`w-full py-2 rounded text-white ${
              isCalendlyReady
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-amber-500 cursor-not-allowed"
            }`}
          >
            Reserve
          </button>
        </form> */}
      </section>
    </>
  );
};

export default Booking;