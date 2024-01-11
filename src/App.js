import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
