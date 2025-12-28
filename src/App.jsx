// import Footer from "./components/Footer";
// import TopBar from "./components/TopBar"
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

// export default function App() {
//   return (
//     <div className="w-full">
//       <TopBar />
//       <Navbar />
//       <Hero />
//       <Footer />
//     </div>
//   )
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutUs />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

