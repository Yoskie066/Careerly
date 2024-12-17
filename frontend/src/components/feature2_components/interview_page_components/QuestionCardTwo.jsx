const QuestionCardTwo = ({ question, currentIndex, totalQuestions }) => {
  return (
    <div className="mb-6 bg-[white] rounded-lg shadow-md border-2 border-gray-500 font-poppins">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-[#019963]">
          {question?.text || "Loading question..."}
        </h2>
        <p className="text-sm text-black">
          Question {currentIndex + 1} of {totalQuestions}
        </p>
      </div>
    </div>
  );
};

export default QuestionCardTwo;
