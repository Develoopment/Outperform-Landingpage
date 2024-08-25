import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Youtube from "./components/Youtube"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-bgblack font-roboto text-white lg:px-20">
      <Navbar/>

      <div className="px-10">
        <Hero />
        <About />
        <Youtube />
        <Services />
        <Contact />

        <Footer />
      </div>

      
    </div>
  )
}

export default App
