import React from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {
  const navigate = useNavigate();
  const viewLogin = () => navigate("/login");

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div
      className="text-white z-10 relative"
      id="home"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
      data-aos-delay="400"
    >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4">
        <p className="text-[#00df9a] font-bold p-2">
          EMPOWERING JOB SEEKERS FOR SUCCESS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Shape your career,
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            with tools for
          </p>
          <TypeAnimation
            sequence={[
              "Resume Building",
              3000,
              "Interview Prep",
              3000,
              "Job Matches",
              3000,
            ]}
            wrapper="span"
            speed={10}
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]"
            repeat={Infinity}
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Build your resume effortlessly, practice interviews with AI feedback,
          and find job matches just for you—all in one place.
        </p>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={viewLogin}
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black hover:bg-transparent hover:text-[#00df9a]"
          >
            Get Started
          </button>
          <button className="bg-[white] w-[200px] rounded-md font-medium my-6 py-3 text-black hover:bg-transparent hover:text-[white]">
            <HashLink smooth to="/#features">
              Learn More
            </HashLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
