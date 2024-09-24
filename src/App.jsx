//import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import main css file
import "../src/Styles/Sass/App.min.css";
import Nav from "./Componetns/Nav";
import Hero from "./Componetns/Hero";
import Features from "./Componetns/Features-section";
import Download from "./Componetns/Download-section/Download-section";
import Questions from "./Componetns/Questions-section/Questions";
import Contact from "./Componetns/Contact";
import Footer from "./Componetns/Footer";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    const sections = [...document.querySelectorAll(".section")];
    sections.forEach((section) => {
      gsap.to(section, {
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "20% bottom",
        },
      });
    });
  }, []);
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <Download />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
