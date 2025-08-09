
const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-black">
          Herb and Spice
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Royal Thai Cuisine
        </p>
        <a
          href="/booking"
          className="mt-8 inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Book a Table
        </a>
      </div>
    </div>
  );
}

export default Hero;