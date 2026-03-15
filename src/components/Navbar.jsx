import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const links = [
    { to: "/", label: t.nav.home, end: true },
    { to: "/subsidiary", label: t.nav.subsidiary },
    { to: "/services", label: t.nav.services },
    { to: "/clients", label: t.nav.clients },
    { to: "/about", label: t.nav.about },
    { to: "/partnerships", label: t.nav.partnerships },
    { to: "/contact", label: t.nav.contact },
  ];

  const langFlags = { en: "EN", ar: "AR", vi: "VI" };
  const langLabels = { en: t.common.english, ar: t.common.arabic, vi: t.common.vietnamese };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`mx-auto max-w-7xl px-4 flex items-center gap-8 transition-all duration-500 ${
          scrolled ? "pt-2" : "pt-5"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="shrink-0 relative group">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src="/LOGO SYNCARABIA/LOGO WHITE.png"
            alt="SyncArabia"
            className="relative h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Pill Nav */}
        <nav
          className={`hidden lg:flex items-center gap-0.5 mx-auto rounded-full px-1.5 py-1.5 transition-all duration-500 ${
            scrolled
              ? "bg-black/80 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/60"
              : "bg-black/50 backdrop-blur-xl border border-white/[0.04] shadow-xl shadow-black/30"
          }`}
        >
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              {({ isActive }) => (
                <span
                  className={`relative flex items-center gap-2 px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                    isActive ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pill-bg"
                      className="absolute inset-0 rounded-full bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="relative w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Language Switcher (Desktop) */}
        <div className="hidden lg:flex relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.08] transition-all duration-300 text-[13px] font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {langFlags[language]}
          </button>
          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full right-0 mt-2 w-40 rounded-xl bg-black/90 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/60 overflow-hidden z-50"
              >
                {Object.entries(langLabels).map(([code, label]) => (
                  <button
                    key={code}
                    onClick={() => { setLanguage(code); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      language === code
                        ? "bg-primary/15 text-primary font-semibold"
                        : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-xs mr-2 opacity-50">{langFlags[code]}</span>
                    {label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Portal button */}
        <a
          href="https://legacyglobalsa.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-[13px] font-bold hover:bg-primary/90 transition-all duration-300 shrink-0 shadow-lg shadow-primary/20"
        >
          Portal
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Open Menu"
          className="lg:hidden ml-auto inline-flex size-11 items-center justify-center rounded-full bg-black/50 backdrop-blur-xl border border-white/[0.06] text-white hover:bg-white/10 transition-colors"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="size-5"
          >
            <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0A0A0A] border-l border-white/[0.06] shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="px-6 py-5 flex items-center justify-between border-b border-white/[0.06]">
                <img src="/LOGO SYNCARABIA/LOGO WHITE.png" alt="SyncArabia" className="h-8" />
                <button
                  aria-label="Close Menu"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-5"
                  >
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3.5 rounded-xl transition-all duration-300 text-[15px] font-medium ${
                        isActive
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "text-white/50 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
                <a
                  href="https://legacyglobalsa.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl transition-all duration-300 text-[15px] font-medium bg-primary/10 text-primary border border-primary/20 text-center mt-2"
                >
                  Portal
                </a>

                {/* Language Switcher (Mobile) */}
                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-3 px-1">{t.common.language}</p>
                  <div className="flex gap-2">
                    {Object.entries(langLabels).map(([code, label]) => (
                      <button
                        key={code}
                        onClick={() => { setLanguage(code); setOpen(false); }}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                          language === code
                            ? "bg-primary/15 text-primary border border-primary/20"
                            : "text-white/40 bg-white/[0.03] border border-white/[0.06] hover:text-white"
                        }`}
                      >
                        {langFlags[code]}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
