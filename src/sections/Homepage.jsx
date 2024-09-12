
import coverPic from "../assets/images/coverPic.jpg"



const Homepage = () => {
  return (
    <section className="flex items-center">
         <img
          src={coverPic}
          alt=""
          className="rounded-r-full h-screen"
        />
        <div className="mr-11 text-right padding-x">
          <h1 className="font-greatVibes text-8xl text-gold ">
            Herb <span className="text-green-text">&</span> Spice
          </h1>
          <p className="font-kaisei font-bold text-3xl">
            <span className="text-green-text ">Royal </span>
            Thai Cuisine
          </p>
          <p className="font-kaisei text-xl">Food fit for a king</p>
        </div>
    </section>
  )
}

export default Homepage