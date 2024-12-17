import Resume from "../../assets/resume-hero.png";
import Interview from "../../assets/interview-hero.png";
import Job from "../../assets/job-hero.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full bg-white" id="features">
      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 px-4"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        <img
          className="w-[500px] mx-auto my-4"
          src={Resume}
          alt="Resume Builder"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#019963] font-bold">RESUME BUILDER</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Build, Preview, and Download Your Resume
          </h1>
          <p>
            Effortlessly create a professional resume using our simple and
            classic template. Input your data, see live changes, and download
            your resume as a PDF in just a few clicks.
          </p>
        </div>
      </div>

      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 px-4"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        <img
          className="w-[500px] mx-auto my-4 md:order-2"
          src={Interview}
          alt="AI-Powered Interview Prep"
        />
        <div className="flex flex-col justify-center md:order-1">
          <p className="text-[#019963] font-bold">AI-POWERED INTERVIEW PREP</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Improve Your Interview Skills with AI
          </h1>
          <p>
            Create interview questions, and start mock interviews with type or
            voice input. Receive instant feedback and ratings powered by Gemini
            AI to help you prepare for real-world interviews.
          </p>
        </div>
      </div>

      <div
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 px-4"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        <img
          className="w-[500px] mx-auto my-4"
          src={Job}
          alt="Tailored Job Finder"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#019963] font-bold">TAILORED JOB FINDER</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Find Your Ideal Job Matches
          </h1>
          <p>
            Input your profile information, including preferred job title,
            skills, experience level and salary range. Get personalized job
            recommendations based on your unique qualifications and career
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
