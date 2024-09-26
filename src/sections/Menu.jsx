
import greencurry from "../assets/images/greencurry.jpg"
import dancingfish from "../assets/images/dancingfish.jpg"
import sweetchilli from "../assets/images/sweetchilliscallop.jpg"
import MenuCard from "../components/MenuCard"

const Menu = () => {
  return (
    <section className="padding flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h4 className="font-kaisei text-gold text-3xl border-gold border px-20">
          Menu
        </h4>
        <p className="text-text-grey text-xl mt-3">
          Take a look at our most famous dishes...
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-10 mt-7">
        <MenuCard
          img={greencurry}
          header="Thai Green Curry"
          text="Green curry paste cooked with coconut milk, fresh Thai herbs"
        />
        <MenuCard
          img={dancingfish}
          header="Thai Green Curry"
          text="Green curry paste cooked with coconut milk, fresh Thai herbs"
        />
        <MenuCard
          img={sweetchilli}
          header="Thai Green Curry"
          text="Green curry paste cooked with coconut milk, fresh Thai herbs"
        />
      </div>
      <p className="mt-5 text-text-grey underline">
        Full menu here 
      </p>
    </section>
  )
}

export default Menu