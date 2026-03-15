import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Clients() {
  const { language } = useLanguage();
  const t = translations[language];

  const clientImages = [
    "Al-Othman.png",
    "Boudl Hotel.png",
    "CrownPlaza.png",
    "JMSMedical.png",
    "LanternSystems.png",
    "PhilippineEmbassy.png",
    "PrimeWave.png",
    "Radisson.png",
    "Somerset.png",
    "SBM.png",
    "Schreder.png",
    "Alostool.png",
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#050505] via-[#050505] to-[#0A0A0A] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] opacity-5 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:py-28">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              {t.clients.title} <span className="text-gradient-gold">{t.clients.titleHighlight}</span>
            </h1>
            <p className="text-lg text-white/40 max-w-3xl mx-auto leading-relaxed">
              {t.clients.description}
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8 opacity-70" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clientImages.map((image, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="rounded-xl p-6 border bg-white border-white/[0.04] hover:border-primary/30 transition-all duration-300 flex items-center justify-center h-48 group">
                <img
                  src={`/Clients/${image}`}
                  alt={image.replace(".png", "")}
                  className="max-h-full max-w-full object-contain transition-all duration-500"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
