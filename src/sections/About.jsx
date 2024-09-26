
import restaurantpic from "../assets/images/restaurantPic.jpg"

const About = () => {
  return (
    <section className="relative left-0 font-kaisei">
      <div className="absolute top-0 left-0 z-10">
        <img
          src={restaurantpic}
          alt=""
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      <div className="relative bg-secondary-green h-screen w-3/5 ml-auto padding-x z-0">
        <h2 className="flex font-bold text-3xl py-10 justify-center items-center text-white font-kaisei">
          About Us
        </h2>
        <p className="text-white text-pretty text-xl font-kaisei text-info pr-40">
          Herb and Spice is a family-owned Thai restaurant that has been delighting taste buds since 2001. Located in the heart of the community, we are dedicated to bringing the authentic flavors of Thailand to our guests. Our journey began with a passion for sharing traditional Thai cuisine, made from the freshest ingredients and time-honored recipes passed down through generations. Whether you're here for a quick lunch, a cozy dinner, or a special celebration, Herb and Spice is committed to providing a memorable dining experience that transports you to the streets of Bangkok with every bite.
        </p>
      </div>
      <div className="py-8 px-8 border border-gold flex flex-col">
        <p className="text-gold text-3xl">
          Opening Times
        </p>
        <p>
          Monday-Saturday
        </p>
        <p>
          6-10pm
        </p>
        <p>
          Sunday closed.
        </p>
      </div>
    </section>
  )
}

export default About

