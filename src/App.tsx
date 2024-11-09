import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { ThemeProvider } from "./context/ThemeContext"
import { useTheme } from "./context/ThemeContext"

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
        </Routes>
      </section>
      <Footer />
    </main>
  )
}

export default App