import { ArrowRight, ShieldCheck, BarChart3, Users, Handshake, Rocket, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import Aurora from "../components/Aurora";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#050505] text-white bg-noise overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Aurora Background */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#008EC2", "#00B4F0", "#C9D250"]}
            blend={0.6}
            amplitude={1.2}
            speed={0.8}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] z-[1]" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 h-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-8 md:gap-10"
          >
            {/* Logo */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center"
            >
              <img
                src="/LOGO SYNCARABIA/LOGO WHITE.png"
                alt="SyncArabia"
                className="w-[280px] sm:w-[360px] md:w-[460px] lg:w-[540px] h-auto object-contain"
              />
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="max-w-3xl">
              <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-light leading-relaxed tracking-wide">
                {t.home.tagline}{" "}
                <span className="text-primary font-medium">{t.home.buyers}</span>,{" "}
                <span className="text-primary font-medium">{t.home.clients}</span>,{" "}
                {t.home.and}{" "}
                <span className="text-accent font-medium">{t.home.serviceProviders}</span>{" "}
                {t.home.withTrust}{" "}
                <span className="text-primary font-medium">{t.home.trust}</span>,{" "}
                <span className="text-primary font-medium">{t.home.transparency}</span>,{" "}
                {t.home.and}{" "}
                <span className="text-primary font-medium">{t.home.dueDiligence}</span>.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full mt-2 sm:w-auto"
            >
              <Link to="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 shadow-[0_0_30px_rgba(0,142,194,0.3)] hover:shadow-[0_0_40px_rgba(0,142,194,0.5)] transition-all duration-300 group"
                >
                  {t.home.exploreServices}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/10 hover:border-primary/50 hover:bg-white/5 text-foreground backdrop-blur-sm transition-all duration-300"
                >
                  {t.home.contactUs}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
