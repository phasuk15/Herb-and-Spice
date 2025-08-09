
const Booking = () => {
    return (  
      <div className="max-w-lg mx-auto p-8 rounded-lg flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Book a Table
        </h2>
        <a
          href="/booking"
          className="mt-8 inline-block bg-gray-800 text-white text-center px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Book a Table
        </a>
      </div>
    );
}
 

export default Booking;