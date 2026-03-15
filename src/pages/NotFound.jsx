import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Home, Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function NotFound() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#050505] via-[#050505] to-[#0A0A0A] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[200px] opacity-15 pointer-events-none" />

      <div className="relative z-10 text-center px-4">
        <div className="relative inline-block mb-8">
          <h1 className="text-[10rem] md:text-[14rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/LOGO COLORED/LogoColored.png"
              alt="SyncArabia"
              className="h-20 md:h-28 w-auto object-contain opacity-60"
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          {t.notFound?.title || "Page"} <span className="text-gradient-gold">{t.notFound?.titleHighlight || "Not Found"}</span>
        </h2>
        <p className="text-white/40 max-w-md mx-auto mb-10 leading-relaxed">
          {t.notFound?.description || "The page you're looking for doesn't exist or has been moved."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/20">
              <Home className="mr-2 h-4 w-4" /> {t.notFound?.goHome || t.nav.home}
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              <Briefcase className="mr-2 h-4 w-4" /> {t.home.exploreServices}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
