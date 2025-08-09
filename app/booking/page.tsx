"use client";

import CalendlyLoader from "@/components/CalendlyLoader";
import { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  // Update form values
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/phasukdianas15/herb-and-spice-booking",
        prefill: {
          name: formData.name,
          email: formData.email,
          customAnswers: {
            a1: formData.phone,
            a2: `${formData.date} at ${formData.time}`,
            a3: `${formData.guests} guests`,
          },
        },
      });
    }
  };

  return (
    <>
      {/* Render CalendlyLoader here */}
      <CalendlyLoader />

      <section className="max-w-lg mx-auto py-24">
        <h2 className="text-3xl font-bold mb-6 text-center">Book a Table</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
          >
            Reserve
          </button>
        </form>
      </section>
    </>
  );
};

export default Booking;