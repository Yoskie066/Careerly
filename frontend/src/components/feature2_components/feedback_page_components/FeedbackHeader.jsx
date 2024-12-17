import { ArrowLeft, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeedbackHeader = () => {
  const navigate = useNavigate();
  const viewInterviewDashboard = () => navigate("/interview-dashboard");

  return (
    <header className="bg-[#000300] text-[#00df9a] p-4 font-staat">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center w-1/2">
          <button
            className="hover:text-white text-base sm:text-2xl font-normal flex items-center"
            onClick={viewInterviewDashboard}
          >
            <ArrowLeft />
            <span className="ml-2">Dashboard</span>
          </button>
        </div>

        <div className="w-1/2 flex justify-end items-center">
          <div className="flex items-center font-normal text-base sm:text-2xl">
            AI Interview Prep
            <span className="ml-2">
              <Bot />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FeedbackHeader;
