import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Portfolio from "./components/Portfolio/portfolio";



function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
