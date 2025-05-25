import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { ThemeProvider } from "./context/ThemeContext"
import { useTheme } from "./context/ThemeContext"
import Contact from "./pages/Contact"
import About from "./pages/About"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import PrivacyPolicy from "./pages/Privacy"
import CookieConsent from "./components/CookieConsent"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  )
}

function AppContent() {
  const { isDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main

      className={`w-full min-h-screen transition-colors duration-300 ${isDarkMode
        ? 'bg-gray-900 text-gray-100'
        : 'bg-white text-gray-900'
        }`}
    >
      <Navbar />
      <section
        className={`w-full transition-colors duration-300 ${isDarkMode
          ? 'bg-gray-900'
          : 'bg-white'
          }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </section>
      <Footer />
      <CookieConsent/>
    </main>
  )
}

export default App