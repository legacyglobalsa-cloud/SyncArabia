import * as FM from "framer-motion";
import {
  Check,
  Compass,
  Handshake,
  Globe,
  Shield,
  Star,
  ShieldCheck,
  BarChart3,
  Users,
  Rocket,
  Truck,
  Play,
} from "lucide-react";
import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Reveal = ({ children, delay = 0, once = true }) => {
  return (
    <FM.motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.17, 0.67, 0.83, 0.67],
      }}
      viewport={{ once: once, amount: 0.1 }}
    >
      {children}
    </FM.motion.div>
  );
};

export default function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const coreValues = [
    { title: t.about.coreValues?.integrityTitle || "Trust", desc: t.about.coreValues?.integrityDesc || "We prioritize trust above all — building relationships where every stakeholder can operate with confidence.", icon: Shield },
    { title: t.about.coreValues?.serviceTitle || "Service Excellence", desc: t.about.coreValues?.serviceDesc || "We operate with discipline under the principle of under-promise and over-deliver in everything we do.", icon: Star },
    { title: t.about.coreValues?.unityTitle || "Partnership", desc: t.about.coreValues?.unityDesc || "We believe in long-term partnerships over short-term gains, creating mutual value that lasts.", icon: Handshake },
    { title: t.about.coreValues?.stewardshipTitle || "Problem-Solving", desc: t.about.coreValues?.stewardshipDesc || "We identify real market problems and solve them through structured, scalable business solutions.", icon: Check },
    { title: t.about.coreValues?.excellenceTitle || "Impact", desc: t.about.coreValues?.excellenceDesc || "We create measurable economic value and long-term impact in the Saudi business community.", icon: Globe },
    { title: t.about.coreValues?.faithTitle || "Unity", desc: t.about.coreValues?.faithDesc || "We connect businesses, manpower, capital, and opportunities into one integrated ecosystem.", icon: Compass },
  ];

  const advantages = [
    { icon: ShieldCheck, title: t.about.whyChooseItems?.item1Title || "Due Diligence & Verification", desc: t.about.whyChooseItems?.item1Desc || "Rigorous screening and verification of all parties — minimizing risk and building trust." },
    { icon: Handshake, title: t.about.whyChooseItems?.item2Title || "Deal Origination Hub", desc: t.about.whyChooseItems?.item2Desc || "Structured project access and facilitation connecting contractors, investors, and opportunities." },
    { icon: BarChart3, title: t.about.whyChooseItems?.item3Title || "Investment Gateway", desc: t.about.whyChooseItems?.item3Desc || "Inbound and outbound investment facilitation with feasibility assessment and structuring." },
    { icon: Users, title: t.about.whyChooseItems?.item4Title || "Corporate Expansion Engine", desc: t.about.whyChooseItems?.item4Desc || "Market entry advisory, partnership development, and operational restructuring for growth." },
    { icon: Rocket, title: t.about.whyChooseItems?.item5Title || "Digital Platform", desc: t.about.whyChooseItems?.item5Desc || "Proprietary platform with dashboards, KYC workflows, project tracking, and opportunity intelligence." },
    { icon: Truck, title: t.about.whyChooseItems?.item6Title || "End-to-End Execution", desc: t.about.whyChooseItems?.item6Desc || "From identification to stakeholder matching to structured execution — we handle the full lifecycle." },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[200px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[180px] opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-20 md:pt-32 space-y-20 md:space-y-32">
        
        {/* HERO */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">{t.about.pageTitle}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                  {t.about.whyChooseTitle}<br/>
                  <span className="text-gradient-gold">{t.about.pageTitleHighlight}</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-lg">
                  {t.about.intro}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex gap-8">
                  <div>
                    <p className="text-3xl font-extrabold text-primary">13+</p>
                    <p className="text-sm text-white/40 mt-1">Industry Platforms</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div>
                    <p className="text-3xl font-extrabold text-accent">3</p>
                    <p className="text-sm text-white/40 mt-1">Market Tiers</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div>
                    <p className="text-3xl font-extrabold text-primary">6</p>
                    <p className="text-sm text-white/40 mt-1">Core Services</p>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl rounded-full opacity-30" />
                  <img
                    src="/LOGO SYNCARABIA/LOGO BLUE.png"
                    alt="SyncArabia"
                    className="relative w-72 md:w-96 h-auto object-contain"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section>
          <Reveal>
            <div className="mb-10">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Watch</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                See <span className="text-gradient-gold">SyncArabia</span> In Action
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-black aspect-video">
              <video
                ref={videoRef}
                src="/LOGO SYNCARABIA/SyncArabiaVid.mp4"
                className="w-full h-full object-cover"
                controls={isPlaying}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                preload="metadata"
              />
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group" onClick={handlePlayVideo}>
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-primary/30">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <Reveal>
            <div className="mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">{t.about.whyChooseTitle}</p>
              <h2 className="text-3xl md:text-5xl font-bold">
                {t.about.whyChooseTitle} <span className="text-gradient-gold">{t.about.whyChooseTitleHighlight}</span>?
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((item, i) => (
              <Reveal delay={i * 0.08} key={i}>
                <FM.motion.div
                  whileHover={{ y: -4 }}
                  className="group relative h-full p-7 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-primary/20 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/10 group-hover:border-primary/25 group-hover:bg-primary/15 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                    {item.desc}
                  </p>
                </FM.motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* VISION & MISSION */}
        <section>
          <Reveal>
            <div className="mb-12">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">{t.about.visionMissionTitle}</p>
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-gradient-gold">{t.about.visionMissionTitle}</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            <Reveal delay={0.05}>
              <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent border border-primary/15 h-full">
                <div className="w-3 h-12 rounded-full bg-primary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{t.about.visionLabel}</h3>
                <p className="text-white/50 leading-relaxed text-lg">
                  {t.about.visionText}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-transparent border border-accent/15 h-full">
                <div className="w-3 h-12 rounded-full bg-accent mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{t.about.missionLabel}</h3>
                <p className="text-white/50 leading-relaxed text-lg">
                  {t.about.missionText}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CORE VALUES */}
        <section>
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">{t.about.coreValuesTitle}</p>
              <h2 className="text-3xl md:text-5xl font-bold">
                {t.about.coreValuesTitle} <span className="text-gradient-gold">{t.about.coreValuesTitleHighlight}</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal delay={i * 0.06} key={v.title}>
                  <FM.motion.div
                    whileHover={{ y: -4 }}
                    className="group relative h-full p-7 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-primary/20 transition-all duration-500 overflow-hidden"
                  >
                    <span className="absolute top-4 right-6 text-6xl font-extrabold text-white/[0.03] group-hover:text-primary/[0.06] transition-colors select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative z-10">
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
                      <p className="text-[15px] text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{v.desc}</p>
                    </div>
                  </FM.motion.div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* COMPETITIVE EDGE */}
        <section>
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.04] bg-gradient-to-r from-primary/10 via-transparent to-accent/5 p-8 md:p-14">
              <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-extrabold text-3xl md:text-4xl text-white mb-3">
                  {t.about.competitiveEdgeTitle} <span className="text-gradient-gold">Edge</span>
                </h3>
                <p className="text-lg text-white/50 mb-8 max-w-2xl">
                  {t.about.whyChooseSubtitle}
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Structured project access and facilitation — connecting companies to real opportunities and decision-makers.",
                    "Due diligence, deal structuring, and a trusted platform — giving investors confidence and verified opportunities.",
                    "Investor matching, project structuring, and capital alignment — unlocking funding for viable projects.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                      <Check className="size-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
