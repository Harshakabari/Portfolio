import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Zap, Minus, Maximize2, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const playClick = () => {
  try {
    const AudioContextClass = (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
    const audioContext = new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
    gain.gain.setValueAtTime(0.05, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.04);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.04);
  } catch (e) {
    console.debug("Audio context suppressed", e);
  }
};

export const FreelancePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMinimize = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsMinimized(!isMinimized);
    playClick();
  };

  const transition = { 
    type: "spring", 
    stiffness: 300, 
    damping: 30,
    mass: 1 
  } as const;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          layout
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.8, y: 100, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100, rotate: -5 }}
          transition={transition}
          style={{ originX: 1, originY: 1, cursor: "grab" }}
          className="fixed bottom-6 right-6 z-[200] font-mono select-none"
        >
          <motion.div 
            layout
            transition={transition}
            className={`border-[4px] border-black dark:border-neutral-100 bg-[#D1D5D2] dark:bg-neutral-900 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.15)] overflow-hidden ${isMinimized ? 'w-[180px]' : 'w-[280px] md:w-[320px]'}`}
          >
            
            {/* Header */}
            <motion.div 
              layout
              transition={transition}
              className="bg-black dark:bg-neutral-100 text-white dark:text-black px-4 py-2.5 flex justify-between items-center"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <Zap size={14} className="text-yellow-400 dark:text-yellow-600 animate-pulse shrink-0" /> 
                <span className="text-[10px] font-black uppercase whitespace-nowrap tracking-widest">
                   {isMinimized ? "STATUS_OK" : "UPLINK_V4.2"}
                </span>
              </div>
              <button 
                onClick={toggleMinimize}
                className="hover:opacity-60 transition-opacity p-0.5 active:scale-95 shrink-0"
              >
                {isMinimized ? <Maximize2 size={12} /> : <Minus size={12} />}
              </button>
            </motion.div>

            {/* Content Body - Unified Morphing */}
            <motion.div layout transition={transition} className="relative">
              {isMinimized ? (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={transition}
                  onClick={toggleMinimize}
                  className="px-4 py-3 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-3"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-tight text-black dark:text-neutral-100">AVAILABILITY_OPEN</span>
                </motion.div>
              ) : (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={transition}
                  className="p-6 flex flex-col gap-5 text-black dark:text-neutral-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-black/5 dark:bg-white/10 border-2 border-black dark:border-neutral-100 p-2.5 shrink-0">
                      <Briefcase size={22} className="text-black dark:text-neutral-100" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black opacity-50 dark:opacity-70 uppercase tracking-tighter mb-1 italic">Availability_Status</h4>
                      <p className="text-sm md:text-base font-black uppercase leading-none tracking-tight italic">OPEN_FOR_ORDERS</p>
                    </div>
                  </div>
                  
                  <p className="text-[10px] font-black uppercase leading-relaxed opacity-80 dark:opacity-90">
                    Currently accepting freelance projects & collaborative B2B requests.
                  </p>

                  <button 
                    onClick={() => {
                      window.location.href = "mailto:harshakabari7@gmail.com";
                      playClick();
                    }}
                    className="w-full bg-black dark:bg-neutral-100 text-white dark:text-black py-3 text-[11px] font-black border-2 border-black dark:border-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 group active:translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
                  >
                    <MessageSquare size={16} className="group-hover:translate-x-1 transition-transform" />
                    INITIATE_UPLINK
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Bottom Accent */}
            <motion.div 
              layout
              transition={transition}
              className="h-1.5 w-full bg-yellow-400 dark:bg-yellow-600 opacity-90" 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
