"use client";

import BookingWidget from "@/components/BookingWidget";

const Booking = () => {
  return (
    <>
      <section className="max-w-lg mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold py-8 text-center">Book a Table</h2>
        <div className="pb-4">
          <p className="mb-6 text-center text-gray-700">
            If you have any special requests or dietary requirements, please mention them in the booking form’s notes section.
          </p>

          <p className="mb-8 text-center text-gray-700 italic">
            Note: For group bookings of 8 or more, please contact us directly at <a href="tel:01788 537735" className="text-blue-600 underline">+1 234 567 890</a>.
          </p>
        </div>

        <BookingWidget />
      </section>
    </>
  );
};

export default Booking;