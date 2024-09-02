
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from "./sections/Nav";
import About from "./sections/About";
import Homepage from "./sections/Homepage";
import Footer from "./sections/Footer";


function App() {
  return (
    <Router>
      <main className="w-screen h-screen">
        <Nav/>
        <section id="home" className="">
          <Homepage/>
        </section>
        <section id="about" className='bg-wave-blue padding'>
          <About />
        </section>
        <section id="footer" className='bg-black'>
          <Footer />
        </section>
      </main>
    </Router>
  );
}

export default App;
