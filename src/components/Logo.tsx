
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-sm"></div>
        <img
          src="/lovable-uploads/28bd9d67-77ab-4ca8-a950-5a23d2a3bc6b.png"
          alt="Dadi Clark Logo"
          className="h-12 relative"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-lg text-gray-800">Dadi Clark</span>
        <span className="text-xs text-gray-500">AI Platform</span>
      </div>
    </div>
  );
};

export default Logo;
