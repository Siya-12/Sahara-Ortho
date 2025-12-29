import Topbar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

const MainLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      
      <main>
        {children}
      </main>

      <Footer />
      
       {/* WhatsApp Popup – Global */}
      <WhatsAppFloat />
    </>
  );
};

export default MainLayout;
