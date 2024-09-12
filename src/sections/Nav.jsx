
import { Link as ScrollLink} from 'react-scroll';


const Nav = () => {
  return (
    <section className="fixed top-0 padding-x py-4 z-50 left-0 w-full bg-primary-green border-boxShadow">
        <nav className='flex justify-between items-center max-container z-50'>
            <ScrollLink to="home" smooth={true} duration={500} className="hover:text-white cursor-pointer">
                bhjioacs
            </ScrollLink>
            <ul className='flex-1 flex justify-end items-center gap-16 text-white max-md:hidden'>
                <ScrollLink to="about" smooth={true} duration={500} className="hover:text-white cursor-pointer">About us</ScrollLink>
                <ScrollLink to="menu" smooth={true} duration={500} className="hover:text-white cursor-pointer">Menu</ScrollLink>
                <ScrollLink to="bookings" smooth={true} duration={500} className="hover:text-white cursor-pointer">Bookings</ScrollLink>
                <ScrollLink to="takeaways" smooth={true} duration={500} className="hover:text-white cursor-pointer">Takeaways</ScrollLink>
                <ScrollLink to="findus" smooth={true} duration={500} className="hover:text-white cursor-pointer">Find us</ScrollLink>
            </ul>
        </nav> 
    </section>
  )
}

export default Nav