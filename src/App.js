
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from "./sections/Nav";
import Homepage from "./sections/Homepage";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Bookings from "./sections/Bookings";
import Takeaways from "./sections/Takeaways";
import FindUs from "./sections/FindUs";
import Footer from "./sections/Footer";


function App() {
  return (
    <Router>
      <main className="w-screen h-screen">
        <Nav/>
        <section id="home" className="">
          <Homepage/>
        </section>
        <section id="about" className=''>
          <About />
        </section>
        <section id="menu" className=''>
          <Menu />
        </section>
        <section id="bookings" className=''>
          <Bookings />
        </section>
        <section id="takeaways" className=''>
          <Takeaways />
        </section>
        <section id="findus" className=''>
          <FindUs />
        </section>
        <section id="footer" className='bg-gray-300'>
          <Footer />
        </section>
      </main>
    </Router>
  );
}

export default App;
