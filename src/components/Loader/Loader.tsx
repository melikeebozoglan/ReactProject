//Loader.tsx

const Loader = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-300/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-[#FFF0FF] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;