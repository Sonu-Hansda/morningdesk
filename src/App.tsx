import { createContext, useRef } from "react"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Features from "./sections/Features"
import About from "./sections/About"
// import Work from "./sections/Work"
import Hero from "./sections/Hero"
import backgroundImage from "./assets/background.png";
import Blog from "./sections/Blog"

export type scrollContextType = {
  scrollToContact: () => void;
  scrollToAbout: () => void;
  scrollToFeature: () => void;
};

export const scrollContext = createContext<scrollContextType | undefined>(undefined);

export default function App() {
  const contactSection = useRef<HTMLDivElement>(null);
  const aboutSelection = useRef<HTMLDivElement>(null);
  const featureSection = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactSection.current) {
      contactSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToAbout = () => {
    if (aboutSelection.current) {
      aboutSelection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToFeature = () => {
    if (featureSection.current) {
      featureSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <scrollContext.Provider value={{ scrollToContact, scrollToAbout, scrollToFeature }}>
      {/* snap-y snap-mandatory */}
      <main className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 max-w-full overflow-hidden" >
        <div className="relative snap-always snap-center" id="page1">
          <img src={backgroundImage} className="absolute left-0 top-0 w-full h-full bg-no-repeat bg-center object-cover bg- bg-cover blur-sm" />
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60"/>
          <Header />
          <Hero />
        </div>
        {/* <div ref={null} className="snap-always snap-center" id="page3">
          <Work />
        </div> */}
        <div ref={featureSection} className="snap-always snap-center" id="page2">
          <Features />
        </div>
        <div ref={featureSection} className="snap-always snap-center" id="page6">
          <Blog />
        </div>
        <div ref={aboutSelection} className="snap-always snap-center" id="page4">
          <About />
        </div>
        <div ref={contactSection} className="snap-always snap-center" id="page5">
          <Contact />
        </div>
        <div className="snap-always snap-center" id="page6">
          <Footer />
        </div>
      </main>
    </scrollContext.Provider>
  )
}


