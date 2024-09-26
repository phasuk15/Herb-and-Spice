
import fullcover from "../assets/images/fullCover.jpg"

const Takeaways = () => {
  return (
    <section className="padding-y font-kaisei flex">
      <img
        src={fullcover}
        alt=""
        className="object-cover opacity-50 z-0"
      />
      <div className="bg-secondary-green z-10">
        <h7 className="text-3xl text-white">
          Takeaways
        </h7>
      </div>

    </section>
  )
}

export default Takeaways