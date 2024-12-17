import Feature from "../assets/feature-3.png";
import FeatureTwo from "../assets/feature-2.png";
import FeatureThree from "../assets/feature-1.png";
import { useNavigate } from "react-router-dom";
import { Compass, LogOut } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MainMenuPage() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const navigate = useNavigate();
  const viewInterviewDashboard = () => navigate("/interview-dashboard");
  const viewBuildResume = () => navigate("/resume-builder");
  const viewJobFinder = () => navigate("/job-finder");

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");

      await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F0F0F0]">
      <header className="bg-[#000300] text-[#00df9a] p-4 font-staat">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center w-1/2">
            <button
              className="hover:text-white text-base sm:text-2xl font-normal flex items-center"
              onClick={handleLogout}
            >
              <LogOut className="transform rotate-180" />
              <span className="ml-2">Log Out</span>
            </button>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="flex items-center font-normal text-base sm:text-2xl">
              Main Menu
              <span className="ml-2">
                <Compass />
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-10 px-4 font-poppins">
        <div
          className="rounded-lg bg-white shadow-sm border-2 border-gray-500 font-poppins"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-[#019963]">Resume Builder</h2>
            <p className="text-black mt-2">
              Input your resume data, preview live changes, and download your
              professional resume as a PDF.
            </p>
          </div>
          <div className="flex justify-center p-6">
            <img
              className="w-[100%] h-[100%] object-cover rounded-lg hover:scale-105 duration-300"
              src={FeatureTwo}
              alt="Feature 1"
            />
          </div>
          <div className="p-4">
            <button
              onClick={viewBuildResume}
              className="w-full bg-[#019963] text-white py-2 rounded 
                         hover:text-[#019963] hover:bg-transparent 
                         flex items-center justify-center"
            >
              Get Started
            </button>
          </div>
        </div>

        <div
          className="rounded-lg bg-white shadow-sm border-2 border-gray-500 font-poppins"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-[#019963]">
              AI Interview Prep{" "}
            </h2>
            <p className="text-black mt-2">
              Create interview questions, conduct mock interviews with responses
              in text or voice, and get AI-powered feedback.
            </p>
          </div>
          <div className="flex justify-center p-6">
            <img
              className="w-[100%] h-[100%] object-cover rounded-lg hover:scale-105 duration-300"
              src={Feature}
              alt="Feature 2"
            />
          </div>
          <div className="p-4">
            <button
              onClick={viewInterviewDashboard}
              className="w-full bg-[#019963] text-white py-2 rounded 
                         hover:text-[#019963] hover:bg-transparent 
                         flex items-center justify-center"
            >
              Get Started
            </button>
          </div>
        </div>

        <div
          className="rounded-lg bg-white shadow-sm border-2 border-gray-500 font-poppins"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-[#019963]">
              Tailored Job Finder
            </h2>
            <p className="text-black mt-2">
              Input your profile details, like experience level and skills, to
              receive personalized job matches tailored to your preferences.
            </p>
          </div>
          <div className="flex justify-center p-6">
            <img
              className="w-[100%] h-[100%] object-cover rounded-lg hover:scale-105 duration-300"
              src={FeatureThree}
              alt="Feature 3"
            />
          </div>
          <div className="p-4">
            <button
              onClick={viewJobFinder}
              className="w-full bg-[#019963] text-white py-2 rounded 
                         hover:text-[#019963] hover:bg-transparent 
                         flex items-center justify-center"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenuPage;
