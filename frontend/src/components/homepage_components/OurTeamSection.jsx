import { FaLinkedinIn } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Coding from "../../assets/coding.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurTeamSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="w-full py-[10rem] px-4 bg-[white]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          className="w-full bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-gray-500"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Coding}
            alt="Team Member 1"
          />
          <h2 className="text-2xl font-bold text-center py-4">
            Einon Cris Alcantara
          </h2>
          <p className="text-center text-lg font-medium text-black border-b mx-8">
            Frontend Developer
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/einon-cris-alcantara-6623b52bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedinIn className="text-[#00df9a] w-6 h-6" />
            </a>
            <a
              href="mailto:aeinoncris@gmail.com"
              className="transition-transform duration-300 hover:scale-125"
            >
              <MdMail className="text-[#00df9a] w-6 h-6" />
            </a>
          </div>
        </div>

        <div
          className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-gray-500"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Coding}
            alt="Team Member 2"
          />
          <h2 className="text-2xl font-bold text-center py-4">
            Patrick Dilen Reyes
          </h2>
          <p className="text-center text-lg font-medium text-black border-b mx-8">
            Backend Developer
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="mailto:dilenr80@gmail.com"
              className="transition-transform duration-300 hover:scale-125"
            >
              <MdMail className="text-[#00df9a] w-6 h-6" />
            </a>
          </div>
        </div>

        <div
          className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-gray-500"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Coding}
            alt="Team Member 3"
          />
          <h2 className="text-2xl font-bold text-center py-4">
            Ivan Patrick Prejoles
          </h2>
          <p className="text-center text-lg font-medium text-black border-b mx-8">
            Full Stack Developer
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/ivan-patrick-prejoles/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedinIn className="text-[#00df9a] w-6 h-6" />
            </a>
            <a
              href="mailto:alicejohnson@example.com"
              className="transition-transform duration-300 hover:scale-125"
            >
              <MdMail className="text-[#00df9a] w-6 h-6" />
            </a>
          </div>
        </div>

        <div
          className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-gray-500"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-delay="900"
        >
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Coding}
            alt="Team Member 4"
          />
          <h2 className="text-2xl font-bold text-center py-4">
            Sean Dustin Verano
          </h2>
          <p className="text-center text-lg font-medium text-black border-b mx-8">
            Full Stack Developer
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/sdverano/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedinIn className="text-[#00df9a] w-6 h-6" />
            </a>
            <a
              href="mailto:verano.seandustin@gmail.com"
              className="transition-transform duration-300 hover:scale-125"
            >
              <MdMail className="text-[#00df9a] w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
