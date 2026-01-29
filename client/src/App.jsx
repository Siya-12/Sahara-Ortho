import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Certificates from "./pages/Certificates";
import ContactUs from "./pages/ContactUs";
import ProductCategory from "./pages/ProductCategory";
import ScrollToTop from "./components/ScrollToTop";
// import RoutesComponent from "./RoutesComponent"; // or your Routes


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
     <div className="sticky top-0 z-50">
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
          {/* <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        /> */}

        <Route element={<MainLayout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
        </Route>

        <Route
          path="/certifications"
          element={
            <MainLayout>
              <Certificates />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactUs />
            </MainLayout>
          }
        />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

