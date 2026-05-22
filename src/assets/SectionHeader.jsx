
const SectionHeader = ({ title, subtitle , children }) => {
  return (
    <div className="section-header">
      <div className="pt-4">
        <div className="flex flex-col items-center mt-16 animate-bounce">
        {/* মাউস শেপ */}
        <div className="w-6 h-10 border-2 border-mint rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-mint rounded-full"></div>
        </div>
        {/* ড্যাশড লাইন */}
        <div className="h-16 w-0 border-l-2 border-dashed border-mint/60 mt-2"></div>
       

      </div>
       <div>
        <div className=" flex flex-col items-center  ">
          <h1 className=" text-3xl font-bold text-mint font-primary text-center" >{title}</h1>
          <div className="flex">
            <div className="h-[10px] w-[10px] bg-mint mt-[12px] rounded-4xl"></div>
            <div className="h-[3px] w-24 bg-mint mt-4"></div>
            <div className="h-[10px] w-[10px] bg-mint mt-[12px] rounded-4xl"></div>
          </div>
          <p className="text-mint/80 mt-4 font-secondary text-sm md:text-lg">{subtitle}</p>
        </div>
       </div>
      </div>

      {/* ২. মেইন রেস্পন্সিভ গ্রিড কন্টেইনার */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12  items-center"></div>
    
    <div/>
    <div>
      {children}
    </div>
    </div>
  );
};

export default SectionHeader;