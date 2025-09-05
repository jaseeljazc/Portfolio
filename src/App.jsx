import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  useEffect(() => {
    // Registerr scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Refresh scolltrigger when the page is fully loaded
    ScrollTrigger.refresh();

    //Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  },[]);
  return (
    <>
      <Header />
      <Hero />
      <CustomCursor />
      <About />
      <Project />
      <Contact/>
      <Footer/>
      <ProgressBar/>
    </>
  );
};

export default App;
