import NavBar from "./components/NavBar/NavBar";
import About from "./pages/Home/sections/About/About";
import Hero from "./pages/Home/sections/Hero/Hero";
import Projects from "./pages/Home/sections/Projects/Projects";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      {/* <Footer /> */}
    </>
  );
};

export default App;
