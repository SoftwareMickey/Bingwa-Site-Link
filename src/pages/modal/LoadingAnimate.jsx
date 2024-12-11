const LoadingDots = () => {
  return (
    <div className="flex items-center justify-center space-x-1 mt-[2px]">
      <div className="w-2 h-2 bg-[#425E91] rounded-full animate-loading-dot delay-0"></div>
      <div className="w-2 h-2 bg-[#425E91] rounded-full animate-loading-dot delay-200"></div>
      <div className="w-2 h-2 bg-[#425E91] rounded-full animate-loading-dot delay-400"></div>
    </div>
  );
};

export default LoadingDots;
