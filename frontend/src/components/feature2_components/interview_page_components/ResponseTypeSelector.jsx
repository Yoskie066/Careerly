import { Mic, Type } from "lucide-react";

const ResponseTypeSelector = ({ onSelectMode }) => {
  return (
    <div className="font-poppins">
      <p className="text-center mb-4 text-[#000000]">
        Choose your response method:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          className="h-32 bg-[#019963] text-[white] hover:bg-transparent hover:text-[#019963] rounded-lg"
          onClick={() => onSelectMode("text")}
        >
          <div className="flex flex-col items-center">
            <Type className="h-8 w-8 mb-2" />
            <span className="text-lg">Type Response</span>
          </div>
        </button>
        <button
          className="h-32 bg-[#019963] text-[white] hover:bg-transparent hover:text-[#019963] rounded-lg"
          onClick={() => onSelectMode("voice")}
        >
          <div className="flex flex-col items-center">
            <Mic className="h-8 w-8 mb-2" />
            <span className=" text-lg">Voice Response</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ResponseTypeSelector;
