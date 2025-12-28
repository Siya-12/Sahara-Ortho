import Topbar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      
      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
