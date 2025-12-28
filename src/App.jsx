import Footer from "./components/Footer";
import TopBar from "./components/TopBar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

export default function App() {
  return (
    <div className="w-full">
      <TopBar />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

