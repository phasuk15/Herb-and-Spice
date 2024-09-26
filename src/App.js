
import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Nav from "./sections/Nav";
import Homepage from "./sections/Homepage";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Bookings from "./sections/Bookings";
import Takeaways from "./sections/Takeaways";
import FindUs from "./sections/FindUs";
import Footer from "./sections/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path="/" element ={
          <main className="w-screen h-screen">
            <Nav/>
            <section id="home"><Homepage/></section>
            <section id="about" ><About /></section>
            <section id="menu" ><Menu /></section>
            <section id="bookings" ><Bookings /></section>
            <section id="takeaways" ><Takeaways /></section>
            <section id="findus" ><FindUs /> </section>
            <section id="footer"><Footer /></section>
          </main>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
