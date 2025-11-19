// ErrorMessage.tsx

interface ErrorMessageProps {
    message?: string;
    onClose: () => void;
};

const ErrorMessage = ({ message = "Beklenmeyen bir hata oluştu.", onClose }: ErrorMessageProps) => {
    return (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-[#FFF0FF] border border-red-600 text-red-700 px-6 py-5 rounded-xl shadow-md max-w-sm w-full text-center flex flex-col items-center justify-center gap-10">
                <div>
                    <h2 className="font-semibold text-lg mb-1">Hata</h2>
                    <p className="text-sm">{message}</p>
                </div>

                <button aria-label="" className="bg-red-700 border border-red-600 text-white px-2 py-2 rounded-xl shadow-md w-1/5 text-center" onClick={onClose} >
                    <p className="text-sm">Tamam</p>
                </button>
            </div>
        </div>
    );
};

export default ErrorMessage;