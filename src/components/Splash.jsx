import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const ANIMATION_DURATION = 0.8;
const DISPLAY_TIME = 5000;
const PROGRESS_LABEL = "LOADING TO GREATNESS";
const ENGLISH_TAGLINE = [
  "Connecting",
  "Businesses",
  "Across",
  "the",
  "world",
  "to",
  "the",
  "Arabian",
  "Region",
];
const HIGHLIGHTED_INDICES = new Set([4, 7, 8]);
const ARABIC_TAGLINE = "نربط الأعمال من جميع أنحاء العالم بالمنطقة العربية";

const ProgressBar = ({ progress, label }) => (
  <div className="w-full max-w-[300px] mt-6 relative z-20">
    <div className="flex justify-between items-end mb-2">
      <span className="text-[10px] text-neutral-400 font-bold tracking-[0.2em] uppercase">{label}</span>
      <span className="text-[10px] font-mono text-sky-400">{progress}%</span>
    </div>
    <div className="h-[3px] w-full bg-neutral-800/50 relative overflow-hidden rounded-full backdrop-blur-sm">
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-600 via-sky-400 to-cyan-200"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ ease: "linear", duration: 0.1 }}
      />
      <motion.div
        className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-20deg]"
        animate={{ x: [-100, 350] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </div>
);

export default function Splash({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, DISPLAY_TIME);

    return () => {
      clearTimeout(exitTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(15px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-white overflow-hidden font-sans"
        >
          <AnimatedBackground
            particleCount={300}
            particleSpread={15}
            speed={0.2}
            particleColors={["#008EC2", "#C9D250", "#ffffff"]}
            moveParticlesOnHover={true}
            alphaParticles={true}
            particleBaseSize={120}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4"
          >
            {/* Logo */}
            <div className="relative mb-6 group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#008EC2]/20 rounded-full blur-[50px] opacity-60 group-hover:opacity-80 transition-opacity duration-1000" />
                
                <motion.img
                  src="/LOGO SYNCARABIA/LOGO WHITE.png"
                  alt="SyncArabia Logo"
                  className="relative w-32 md:w-40 h-auto object-contain drop-shadow-[0_0_15px_rgba(0,142,194,0.3)]"
                  initial={{ rotate: -5, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
                />
            </div>

            {/* Typography */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-2 max-w-3xl mx-auto"
            >
              <h1 
                className="text-xl md:text-2xl font-light tracking-wide leading-relaxed text-neutral-100"
                dir="ltr"
              >
                {ENGLISH_TAGLINE.map((word, index) => {
                  const isHighlight = HIGHLIGHTED_INDICES.has(index);
                  return (
                    <motion.span
                      key={index}
                      variants={wordVariants}
                      className={`inline-block mr-2 ${
                        isHighlight 
                          ? "text-transparent bg-clip-text bg-gradient-to-br from-sky-200 to-sky-500 font-semibold drop-shadow-sm"
                          : ""
                      }`}
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </h1>
              <motion.p
                variants={wordVariants}
                className="mt-3 text-sm md:text-base text-neutral-300/80 leading-relaxed"
                dir="rtl"
              >
                {ARABIC_TAGLINE}
              </motion.p>
            </motion.div>

            <ProgressBar progress={progress} label={PROGRESS_LABEL} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
