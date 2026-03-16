import Reveal from "../components/Reveal";
import {
  Briefcase,
  Users,
  BarChart3,
  Handshake,
  Building2,
  CheckCircle2,
  Shield,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Store,
  GitMerge,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import * as FM from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Handshake,
      title: t.services.buyerRepTitle,
      desc: t.services.buyerRepDesc,
      highlights: t.services.buyerRepHighlights,
    },
    {
      icon: BarChart3,
      title: t.services.sellerRepTitle,
      desc: t.services.sellerRepDesc,
      highlights: t.services.sellerRepHighlights,
    },
    {
      icon: Users,
      title: t.services.marketAnalysisTitle,
      desc: t.services.marketAnalysisDesc,
      highlights: t.services.marketAnalysisHighlights,
    },
    {
      icon: Briefcase,
      title: t.services.transactionTitle,
      desc: t.services.transactionDesc,
      highlights: t.services.transactionHighlights,
    },
    {
      icon: GitMerge,
      title: t.services.businessPlanTitle,
      desc: t.services.businessPlanDesc,
      highlights: t.services.businessPlanHighlights,
    },
    {
      icon: Shield,
      title: t.services.riskManagementTitle,
      desc: t.services.riskManagementDesc,
      highlights: t.services.riskManagementHighlights,
    },
    {
      icon: Store,
      title: t.services.officeSetupTitle,
      desc: t.services.officeSetupDesc,
      highlights: t.services.officeSetupHighlights,
    },
    {
      icon: Globe,
      title: t.services.websiteDevelopmentTitle,
      desc: t.services.websiteDevelopmentDesc,
      highlights: t.services.websiteDevelopmentHighlights,
    },
  ];

  const stats = [
    { value: "13+", label: t.services.statsIndustryPlatforms, icon: Target },
    { value: "6", label: t.services.statsCoreServiceLines, icon: Zap },
    { value: "3", label: t.services.statsMarketTiers, icon: Globe },
    { value: "1", label: t.services.statsIntegratedEcosystem, icon: TrendingUp },
  ];

  const sectors = t.services.sectorsList;

  const steps = [
    { step: "01", title: t.services.step1Title, desc: t.services.step1Desc },
    { step: "02", title: t.services.step2Title, desc: t.services.step2Desc },
    { step: "03", title: t.services.step3Title, desc: t.services.step3Desc },
    { step: "04", title: t.services.step4Title, desc: t.services.step4Desc },
    { step: "05", title: t.services.step5Title, desc: t.services.step5Desc },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#050505] via-[#050505] to-[#0A0A0A] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px] opacity-15 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-20 md:pt-32 md:pb-28">
        {/* HEADER */}
        <section className="mb-24 md:mb-32">
          <FM.motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.04] bg-gradient-to-br from-primary/10 via-transparent to-accent/5 p-10 md:p-16"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
                {t.services.divisionLabel}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
                {t.services.titlePart1} &<br />
                <span className="text-gradient-gold">
                  {t.services.titlePart2}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl">
                {t.services.subtitle}{" "}
                <span className="text-primary font-medium">
                  {t.services.subtitleHighlight}
                </span>{" "}
                {t.services.subtitleEnd}
              </p>
            </div>
          </FM.motion.div>
        </section>

        {/* STATS BAR */}
        <section className="mb-24 md:mb-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Reveal delay={i * 0.1} key={stat.label}>
                  <div className="text-center p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-primary/15 transition-all duration-500 group">
                    <Icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-white/40 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="mb-24 md:mb-32 space-y-6">
          <Reveal>
            <div className="mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                {t.services.coreServicesTitle}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold">
                {t.services.coreServicesHighlight && (
                  <>
                    <span className="text-gradient-gold">
                      {t.services.coreServicesHighlight}
                    </span>
                  </>
                )}
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal delay={i * 0.08} key={svc.title}>
                  <FM.motion.div
                    whileHover={{ y: -4 }}
                    className="group relative h-full rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.04] hover:border-primary/20 transition-all duration-500 p-7 md:p-8"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/10 group-hover:border-primary/25 group-hover:bg-primary/15 transition-all duration-300">
                        <Icon className="size-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                          {svc.title}
                        </h3>
                        <p className="text-[15px] text-white/40 leading-relaxed mb-4">
                          {svc.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {svc.highlights.map((h) => (
                            <span
                              key={h}
                              className="text-xs px-3 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/10 font-medium"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FM.motion.div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-16" />

        {/* SECTORS */}
        <section className="mb-24 md:mb-32">
          <Reveal>
            <div className="mb-12">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
                {t.services.sectorsTitle}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-gradient-gold">
                  {t.services.sectorsHighlight}
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sectors.map((item, i) => (
              <Reveal delay={i * 0.03} key={item}>
                <FM.motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.015] hover:bg-white/[0.04] transition-all duration-300 border border-transparent hover:border-primary/10 group cursor-default"
                >
                  <CheckCircle2 className="text-primary shrink-0 size-5 group-hover:text-accent transition-colors" />
                  <p className="text-sm text-white/60 font-medium group-hover:text-white/80 transition-colors">
                    {item}
                  </p>
                </FM.motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="relative">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                {t.services.clientFlowTitle}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-gradient-gold">
                  {t.services.clientFlowHighlight}
                </span>
              </h2>
            </div>
          </Reveal>

          {/* Vertical timeline */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            <div className="space-y-8">
              {steps.map((s, i) => (
                <Reveal delay={i * 0.12} key={s.step}>
                  <div className="relative flex items-start gap-6 md:gap-8 pl-2">
                    <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm md:text-base font-extrabold shrink-0 shadow-lg shadow-primary/20 ring-4 ring-[#050505]">
                      {s.step}
                    </div>
                    <div className="pt-1 md:pt-2">
                      <h4 className="font-bold text-lg md:text-xl mb-1 text-white">
                        {s.title}
                      </h4>
                      <p className="text-sm md:text-base text-white/40">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <FM.motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link to="/about">
              <Button
                size="lg"
                className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 shadow-xl shadow-primary/10 transition-all duration-500 font-bold"
              >
                {t.services.learnMoreButton}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FM.motion.div>
        </section>
      </div>
    </div>
  );
}
