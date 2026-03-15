import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Reveal from "../components/Reveal";
import { Button } from "../components/ui/button";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { language } = useLanguage();
  const t = translations[language];

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Website Inquiry from " + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:info@syncarabia.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#050505] via-[#050505] to-[#0A0A0A] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] opacity-5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:py-28">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              {t.contact.title}{" "}
              <span className="text-gradient-gold">{t.contact.titleHighlight}</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8 opacity-70" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/[0.04]">
                <h3 className="text-2xl font-bold text-white mb-6">{t.contact.contactInfo}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/10 group-hover:bg-primary/15 transition-colors">
                      <Phone className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 mb-1">{t.contact.phone}</p>
                      <p className="text-lg font-medium text-white">+966 50 360 2359</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/10 group-hover:bg-primary/15 transition-colors">
                      <Mail className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 mb-1">{t.contact.email}</p>
                      <p className="text-lg font-medium text-white">info@syncarabia.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/10 group-hover:bg-primary/15 transition-colors">
                      <MapPin className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 mb-1">{t.contact.address}</p>
                      <p className="text-lg font-medium text-white">Riyadh, Kingdom of Saudi Arabia</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-white/[0.04] h-[320px] relative group">
                <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <iframe
                  title="SyncArabia Riyadh Map"
                  src="https://www.google.com/maps?q=Riyadh,+Saudi+Arabia&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{
                    border: 0,
                    filter: "grayscale(100%) invert(90%) contrast(85%)",
                  }}
                  className="w-full h-full"
                />
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal delay={0.3}>
            <div className="bg-white/[0.02] p-8 md:p-10 rounded-2xl border border-white/[0.04]">
              <h3 className="text-2xl font-bold text-white mb-2">{t.contact.sendMessage}</h3>
              <p className="text-white/40 mb-8">{t.contact.formSubtitle}</p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 ml-1">{t.contact.name}</label>
                  <input
                    className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all text-white placeholder:text-white/20"
                    placeholder={t.contact.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 ml-1">{t.contact.email}</label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all text-white placeholder:text-white/20"
                    placeholder={t.contact.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 ml-1">{t.contact.message}</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all text-white placeholder:text-white/20 resize-none"
                    placeholder={t.contact.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 py-6 text-lg"
                >
                  {t.contact.send} <Send className="ml-2 size-5" />
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
