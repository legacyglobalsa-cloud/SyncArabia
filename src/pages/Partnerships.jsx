import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import Reveal from "../components/Reveal";
import * as FM from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Partnerships() {
  const { language } = useLanguage();
  const t = translations[language];

  const partners = [
    {
      name: t.partnerships.gimonaTitle,
      tagline: t.partnerships.gimonaTagline,
      description: t.partnerships.gimonaDesc1,
      detail: t.partnerships.gimonaDesc2,
      logo: "/Partnership/ImonaLogo.png",
      url: "https://gimona.vn",
      color: "#009456",
      subtitle: "Kinglands Trading Production Services",
    },
    {
      name: t.partnerships.oasisTitle,
      tagline: t.partnerships.oasisTagline,
      description: t.partnerships.oasisDesc1,
      detail: t.partnerships.oasisDesc2,
      logo: "/Partnership/Oasis360 logo.png",
      url: "https://wahatalfaten.com",
      color: "#008EC2",
      subtitle: "Wahat Al-Faten Group",
    },
    {
      name: t.partnerships.sesksaTitle || "Spectrum Engineering Solutions",
      tagline: t.partnerships.sesksaTagline,
      description: t.partnerships.sesksaDesc1,
      detail: t.partnerships.sesksaDesc2,
      logo: "/Partnership/sesksa.png",
      url: "https://sesksa.com",
      color: "#3b82f6",
      subtitle: t.partnerships.sesksaSubtitle || "Spectrum Group",
    },
    {
      name: t.partnerships.abklawTitle,
      tagline: t.partnerships.abklawTagline,
      description: t.partnerships.abklawDesc1,
      detail: t.partnerships.abklawDesc2,
      logo: "/Partnership/abklaw.png",
      url: "https://abklaw.net/en/",
      color: "#c4b5fd",
      subtitle: t.partnerships.abklawSubtitle || "Legal Advisory & Consulting",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#050505] via-[#050505] to-[#0A0A0A] pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px] opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-20 md:pt-32 md:pb-28">
        
        {/* HEADER */}
        <section className="mb-20 md:mb-28">
          <FM.motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.04] bg-gradient-to-br from-primary/10 via-transparent to-accent/5 p-10 md:p-16"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">{t.partnerships.title}</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
                {t.partnerships.title}<br/>
                <span className="text-gradient-gold">{t.partnerships.titleHighlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl">
                {t.partnerships.description}
              </p>
            </div>
          </FM.motion.div>
        </section>

        {/* PARTNER CARDS */}
        <div className="space-y-10">
          {partners.map((partner, i) => (
            <Reveal delay={i * 0.1} key={partner.name}>
              <FM.motion.div
                whileHover={{ y: -3 }}
                className="group rounded-2xl border border-white/[0.04] hover:border-white/[0.08] bg-white/[0.015] transition-all duration-500 overflow-hidden"
                style={{ "--partner-color": partner.color }}
              >
                <div className="grid md:grid-cols-12 gap-0">
                  {/* Logo side */}
                  <div className={`md:col-span-4 p-8 md:p-10 flex flex-col items-center justify-center bg-white/[0.02] border-b md:border-b-0 ${i % 2 === 0 ? "md:border-r" : "md:border-l md:order-last"} border-white/[0.04]`}>
                    <a 
                      href={partner.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-28 md:h-36 w-auto object-contain"
                      />
                    </a>
                    <p className="mt-4 text-xs text-center font-medium tracking-wider uppercase" style={{ color: partner.color }}>
                      {partner.subtitle}
                    </p>
                  </div>

                  {/* Content side */}
                  <div className={`md:col-span-8 p-8 md:p-10 flex flex-col justify-center`}>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-2 h-8 rounded-full" style={{ background: partner.color }} />
                      <h3 className="text-2xl md:text-3xl font-bold text-white transition-colors duration-300">
                        {partner.name}
                      </h3>
                    </div>
                    <p className="text-base italic font-medium mb-5 ml-5" style={{ color: partner.color }}>
                      "{partner.tagline}"
                    </p>
                    <div className="space-y-3 text-white/50 leading-relaxed mb-6 ml-5">
                      <p>{partner.description}</p>
                      <p>{partner.detail}</p>
                    </div>
                    <div className="ml-5">
                      <a href={partner.url} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <Button 
                          size="lg" 
                          className="font-bold shadow-lg transition-all duration-300 text-white border"
                          style={{ 
                            background: partner.color, 
                            borderColor: partner.color,
                            boxShadow: `0 0 20px ${partner.color}33`,
                          }}
                        >
                          {t.partnerships.visitWebsite} <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </FM.motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-20 text-center">
            <div className="rounded-2xl border border-white/[0.04] bg-white/[0.02] p-10 md:p-14 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Become a <span className="text-gradient-gold">Partner</span>
              </h3>
              <p className="text-white/40 mb-6 max-w-lg mx-auto">
                {t.partnerships.description}
              </p>
              <a href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/20">
                  {t.contact?.send || "Get In Touch"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
