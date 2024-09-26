import lightlogo from "../assets/images/herb&spiceLogoLight.png"

const Footer = () => {
  return (
    <section className="bg-gold text-white">
      <div className="flex flex-col justify-center items-center pt-10">
        <img 
          src={lightlogo} 
          alt="logo" 
          width={150}
          height={150}
          className=""
        />
        <p className="font-greatVibes mt-3 text-2xl">
          Herb and Spice Royal Thai Cuisine
        </p>
      </div>

    </section>
  )
}

export default Footer