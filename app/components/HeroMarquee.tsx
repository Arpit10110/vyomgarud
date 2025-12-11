import Marquee from "react-fast-marquee";

const HeroMarquee = () => {
  return (
    <div className="w-full py-[0.7rem] bg-gray-900/50 ">
      <Marquee className="py-4" speed={40} gradient={false} pauseOnHover>
        <div className="flex items-center gap-16 px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-400 flex items-center gap-3">Precision <span className="text-blue-500">🔧</span></h3>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-400 flex items-center gap-3">Autonomy <span className="text-blue-500">🤖</span></h3>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-400 flex items-center gap-3">Security <span className="text-blue-500">🔒</span></h3>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-400 flex items-center gap-3">Endurance <span className="text-blue-500">🔋</span></h3>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-400 flex items-center gap-3">Accuracy <span className="text-blue-500">🎯</span></h3>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-400 flex items-center gap-3">Performance <span className="text-blue-500">🚀</span></h3>
        </div>
      </Marquee>
    </div>
  );
};

export default HeroMarquee;
