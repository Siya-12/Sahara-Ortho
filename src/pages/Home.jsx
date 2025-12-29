import Hero from "../components/Hero";
import BrochureCTA from "../components/brochureCTA";


const Home = () => {
  return (
    <>
      <Hero />
       <BrochureCTA />
       <Hero/>
      {/* more home-only sections */}
    </>
  );
};

export default Home;
