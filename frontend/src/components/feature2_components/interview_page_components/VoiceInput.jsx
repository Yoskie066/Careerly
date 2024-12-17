import { Mic, MicOff, Send } from "lucide-react";

const VoiceInput = ({
  isRecording,
  onStartRecording,
  onStopRecording,
  transcribedText,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <div className="bg-[white] rounded-lg shadow-md font-poppins border-2 border-gray-500">
      <div className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <button
            className={`rounded-full p-8 text-white ${
              isRecording
                ? "bg-red-500 hover:bg-red-600"
                : "bg-[#019963] hover:bg-transparent hover:text-[#019963]"
            }`}
            onClick={isRecording ? onStopRecording : onStartRecording}
          >
            {isRecording ? (
              <MicOff className="h-8 w-8" />
            ) : (
              <Mic className="h-8 w-8" />
            )}
          </button>
          <p className="text-center">
            {isRecording
              ? "Recording in progress... Click to stop"
              : "Click to start recording"}
          </p>
          {transcribedText && (
            <div className="w-full space-y-4">
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold mb-2">Transcribed Text:</h3>
                <p>{transcribedText}</p>
              </div>
              <button
                className="w-full bg-[#019963] text-white py-2 rounded hover:bg-[#019963] disabled:opacity-50 flex items-center justify-center"
                onClick={onSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white mr-2" />
                    Processing...
                  </div>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" /> Submit Answer
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceInput;
