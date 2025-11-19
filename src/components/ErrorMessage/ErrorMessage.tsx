// ErrorMessage.tsx

interface ErrorMessageProps {
    message?: string;
};

const ErrorMessage = ({ message = "Beklenmeyen bir hata oluştu." }: ErrorMessageProps) => {
    return (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-[#FFF0FF] border border-red-600 text-red-700 px-6 py-4 rounded-xl shadow-md max-w-sm w-full text-center">
                <h2 className="font-semibold text-lg mb-1">Hata</h2>
                <p className="text-sm">{message}</p>
            </div>
        </div>
    );
};

export default ErrorMessage;