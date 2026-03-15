import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const quickLinks = [
    { to: "/", label: t.footer.home },
    { to: "/services", label: t.footer.services },
    { to: "/about", label: t.footer.about },
    { to: "/partnerships", label: t.footer.partnerships },
    { to: "/clients", label: t.nav?.clients || "Clients" },
    { to: "/contact", label: t.footer.contact },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.04] pt-20 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 grid gap-12 md:grid-cols-3 lg:gap-20">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/LOGO SYNCARABIA/LOGO WHITE.png" className="h-10 w-auto" alt="SyncArabia" />
            <span className="text-xl font-bold text-white">Sync<span className="text-primary">Arabia</span></span>
          </Link>
          <p className="text-white/40 leading-relaxed max-w-sm">
            {t.footer.tagline}
          </p>
          <div className="flex items-center gap-2 text-xs text-primary font-medium tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Capital — Opportunity — Execution — Impact
          </div>
        </div>

        {/* Contact Column */}
        <div className="space-y-6">
          <h4 className="font-bold text-white text-lg tracking-wide border-l-2 border-primary pl-3">{t.footer.contactUs}</h4>
          <div className="space-y-4">
            <a href="tel:+966503602359" className="flex items-center gap-3 text-white/40 hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Phone className="size-4 text-primary" />
              </div>
              <span>+966 50 360 2359</span>
            </a>
            <a href="mailto:info@syncarabia.com" className="flex items-center gap-3 text-white/40 hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Mail className="size-4 text-primary" />
              </div>
              <span>info@syncarabia.com</span>
            </a>
            <div className="flex items-start gap-3 text-white/40">
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center mt-1">
                <MapPin className="size-4 text-primary" />
              </div>
              <span>Riyadh, Kingdom of Saudi Arabia</span>
            </div>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="space-y-6">
          <h4 className="font-bold text-white text-lg tracking-wide border-l-2 border-primary pl-3">{t.footer.quickLinks}</h4>
          <nav className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="group flex items-center gap-2 text-white/40 hover:text-primary transition-all">
                <ArrowRight className="size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative z-10 mt-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
            <Link to="#" className="hover:text-white transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
