const ProgressBar = ({ currentIndex, totalQuestions }) => {
  return (
    <div className="mt-6 bg-transparent rounded-full h-2">
      <div
        className="bg-[#019963] h-full rounded-full transition-all duration-300"
        style={{
          width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
