import { Play, Loader2 } from "lucide-react";

const InterviewCard = ({ questions, isStarting, onStartInterview }) => {
  return (
    <div className="rounded-lg bg-[white] shadow-sm border-2 border-gray-500 font-poppins">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-[#019963]">Start Interview</h2>
        <p className="text-black mt-2">
          Begin your mock interview session with AI-powered feedback.
          {questions.length > 5 && (
            <span className="block text-sm text-orange-500 mt-1">
              Note: Only the first 5 questions will be used in the interview.
            </span>
          )}
        </p>
      </div>
      <div className="p-4">
        <button
          className="w-full bg-[#019963] text-white py-2 rounded hover:text-[#019963] hover:bg-transparent 
                     disabled:opacity-50 flex items-center justify-center"
          onClick={onStartInterview}
          disabled={isStarting || questions.length === 0}
        >
          {isStarting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Play className="mr-2 h-4 w-4" />
          )}
          {isStarting ? "Starting Session..." : "Start New Session"}
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;
