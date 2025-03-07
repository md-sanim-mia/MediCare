const NMBanner = ({ title, path }: { title: string; path: string }) => {
  return (
    <div className="h-[280px] max-w-screen-xl mx-auto bg-[#c6e6ea] mt-3 rounded-lg flex items-center justify-center text-center px-6">
      <div>
        <h2 className="text-3xl font-bold text-[#055160]">{title}</h2>
        <p className="text-lg text-[#0a6466] mt-3">{path}</p>
      </div>
    </div>
  );
};

export default NMBanner;
