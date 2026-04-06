const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto py-12 px-6 md:px-8 mt-12 border-t-[4px] border-black dark:border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end bg-transparent gap-10 font-mono">
      <div className="flex flex-col items-start px-2">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40 mb-2 italic">:: AUTHOR_METADATA</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <p className="text-sm font-black uppercase tracking-widest italic tracking-[0.1em]">
            HARSH AKABARI
          </p>
          <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em]">
            // 2026 // INDIA_EST_ST_P4
          </p>
        </div>
      </div>
      
      <div className="flex flex-col hidden md:block items-center md:items-end w-full md:w-auto">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-3 italic">:: BUILD_STACK_V4.2</p>
        <p className="text-[10px] font-bold opacity-60 uppercase mb-6 tracking-widest">
          REACT + VITE + TAILWIND + FRAMER_MOTION
        </p>
        <div className="flex flex-wrap gap-6 md:gap-8 border-t-2 border-black/10 dark:border-white/10 pt-4 w-full md:w-auto justify-center md:justify-end">
           <a href="https://github.com/harshakabari" target="_blank" className="text-xs font-black uppercase hover:underline underline-offset-4 decoration-2 transition-all">GITHUB</a>
           <a href="https://linkedin.com/in/harshakabari" target="_blank" className="text-xs font-black uppercase hover:underline underline-offset-4 decoration-2 transition-all">LINKEDIN</a>
           <a href="https://x.com/hars_o5" target="_blank" className="text-xs font-black uppercase hover:underline underline-offset-4 decoration-2 transition-all">X // TWITTER</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
