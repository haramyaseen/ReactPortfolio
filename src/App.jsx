import { useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import "./index.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import CreativeWork from "./creativework";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Loader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <CreativeWork />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;