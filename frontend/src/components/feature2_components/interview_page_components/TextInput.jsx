import { Send } from "lucide-react";

const TextInput = ({ value, onChange, onSubmit, isSubmitting }) => {
  return (
    <div className="bg-[white] rounded-lg shadow-md font-poppins border-2 border-gray-500">
      <div className="p-6">
        <div className="space-y-4">
          <textarea
            className="w-full h-32 p-3 rounded-md focus:ring-gray-500"
            placeholder="Type your answer here..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <div className="flex justify-end">
            <button
              className="bg-[#019963] text-white px-4 py-2 rounded hover:bg-[#019963] disabled:opacity-50 flex items-center"
              onClick={onSubmit}
              disabled={!value.trim() || isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white mr-2" />
                  Submitting...
                </div>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" /> Submit Answer
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
