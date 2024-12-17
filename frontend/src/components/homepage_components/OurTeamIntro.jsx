import Team from "../../assets/dev-team.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurTeamIntro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="w-full py-16 text-white px-4"
      id="our-team"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="500"
      data-aos-offset="0"
    >
      <div className="items-center max-w-[1240px] mx-auto grid lg:grid-cols-[70%,30%] gap-4">
        <div className="my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Our Team, Empowered by Shared Goals
          </h1>
          <p>
            As fellow job seekers and entry-level developers, we're passionate
            about helping you take the next step in your career with the right
            tools and personalized support. Meet the team behind our mission,
            and connect with us through our LinkedIn profiles and email.
          </p>
        </div>
        <div className="my-4">
          <img src={Team} alt="Our Team" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default OurTeamIntro;
