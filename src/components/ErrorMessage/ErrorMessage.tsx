interface ErrorMessageProps {
  message?: string;
  onClose?: () => void;
};

function ErrorMessage({
  message = "Beklenmeyen bir hata oluştu.",
  onClose,
}: ErrorMessageProps) {
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center p-4 z-9999">
      <div className="bg-[#FFF0FF] border border-red-600 text-red-700 px-3 py-2 md:px-6 md:py-5 rounded-xl shadow-md max-w-sm w-full xl:w-1/2 text-center flex flex-col items-center justify-center gap-10">
        <div>
          <h2 className="font-semibold text-sm md:text-lg xl:text-xl mb-1">
            Hata
          </h2>
          <p className="text-sm md:text-lg xl:text-2xl">{message}</p>
        </div>

        <button
          aria-label=""
          className="bg-red-600 hover:bg-red-700 border border-red-600 text-white px-2 py-2 rounded-xl shadow-md w-1/4 md:w-1/4 xl:w-1/3 text-center transition"
          onClick={onClose}
        >
          <p className="text-sm md:text-lg xl:text-2xl">Tamam</p>
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;