import FeaturesSection from "../components/homepage_components/FeaturesSection";
import OurTeamSection from "../components/homepage_components/OurTeamSection";
import Footer from "../components/homepage_components/Footer";
import HeroSection from "../components/homepage_components/HeroSection";
import Navbar from "../components/homepage_components/Navbar";
import OurTeamIntro from "../components/homepage_components/OurTeamIntro";

function HomePage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <OurTeamIntro />
      <OurTeamSection />
      <Footer />
    </div>
  );
}

export default HomePage;
