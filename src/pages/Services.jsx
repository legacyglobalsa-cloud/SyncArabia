import Reveal from "../components/Reveal";
import { Briefcase, Users, BarChart3, Handshake, Building2, CheckCircle2, Shield, ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import * as FM from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Buyer Representation",
      desc: "End-to-end support for organizations looking to source products and services from trusted regional suppliers.",
      highlights: ["Supplier vetting", "Price negotiation", "Quality assurance"],
    },
    {
      icon: Users,
      title: "Seller Representation",
      desc: "Strategic market access and buyer matching for companies seeking to expand their reach in the Arabian market.",
      highlights: ["Market entry", "Buyer matching", "Brand positioning"],
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      desc: "In-depth market research and competitive analysis to help you make informed investment and expansion decisions.",
      highlights: ["Competitive intel", "Trend analysis", "Feasibility studies"],
    },
    {
      icon: Handshake,
      title: "Transaction Management",
      desc: "Secure, transparent handling of commercial transactions from negotiation through completion.",
      highlights: ["Due diligence", "Contract management", "Escrow services"],
    },
    {
      icon: Building2,
      title: "Business Planning",
      desc: "Comprehensive business planning and feasibility studies tailored to the Arabian market.",
      highlights: ["Strategy design", "Financial modeling", "Go-to-market"],
    },
    {
      icon: Shield,
      title: "Risk Management",
      desc: "Proactive risk assessment and mitigation strategies to protect your business interests.",
      highlights: ["Risk profiling", "Compliance", "Contingency planning"],
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed", icon: Target },
    { value: "12+", label: "Sectors Covered", icon: Zap },
    { value: "50+", label: "Active Partners", icon: Handshake },
    { value: "98%", label: "Client Satisfaction", icon: TrendingUp },
  ];
  
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#050505] via-[#050505] to-[#0A0A0A] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px] opacity-15 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-20 md:pt-32 md:pb-28">
        
        {/* HEADER — Full width hero style */}
        <section className="mb-24 md:mb-32">
          <FM.motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.04] bg-gradient-to-br from-primary/10 via-transparent to-accent/5 p-10 md:p-16"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">What We Do</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
                Services Built<br/>
                <span className="text-gradient-gold">For Growth</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl">
                Comprehensive business solutions designed to help you connect, grow, and succeed in the Arabian market.
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
                    <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* CORE SERVICES — Alternating layout */}
        <section className="mb-24 md:mb-32 space-y-6">
          <Reveal>
            <div className="mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Core Expertise</p>
              <h2 className="text-3xl md:text-5xl font-bold">
                Our <span className="text-gradient-gold">Services</span>
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
                        <p className="text-[15px] text-white/40 leading-relaxed mb-4">{svc.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {svc.highlights.map((h) => (
                            <span key={h} className="text-xs px-3 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/10 font-medium">
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

        {/* SECTORS — Horizontal scroll style */}
        <section className="mb-24 md:mb-32">
          <Reveal>
            <div className="mb-12">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Industries</p>
              <h2 className="text-3xl md:text-5xl font-bold">
                Sectors We <span className="text-gradient-gold">Serve</span>
              </h2>
            </div>
          </Reveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Oil and Gas Trading (International)",
              "Various Commodities Trading (Import & Export)",
              "Manpower Supply (Local & International)",
              "Real Estate Industry (Local & International)",
              "Construction Industry (Local & International)",
              "Technology & Innovation (Local & International)",
              "Investments and Business Development",
              "Entertainment / Logistics / Warehousing",
              "Business Acquisition & Partnership",
              "Facility Management",
              "Manufacturing, Maintenance & Fabrication",
              "Other sectors and emerging markets",
            ].map((item, i) => (
              <Reveal delay={i * 0.03} key={item}>
                <FM.motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.015] hover:bg-white/[0.04] transition-all duration-300 border border-transparent hover:border-primary/10 group cursor-default"
                >
                  <CheckCircle2 className="text-primary shrink-0 size-5 group-hover:text-accent transition-colors" />
                  <p className="text-sm text-white/60 font-medium group-hover:text-white/80 transition-colors">{item}</p>
                </FM.motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* HOW WE WORK — Timeline style */}
        <section className="relative">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Process</p>
              <h2 className="text-3xl md:text-5xl font-bold">
                How We <span className="text-gradient-gold">Work</span>
              </h2>
            </div>
          </Reveal>
          
          {/* Vertical timeline for all screens */}
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
            
            <div className="space-y-8">
              {[
                { step: "01", title: "Initial Inquiry", desc: "Share your business needs and goals with our team." },
                { step: "02", title: "Matching", desc: "We identify the best-fit partners and opportunities." },
                { step: "03", title: "Negotiation", desc: "We facilitate transparent discussions and terms." },
                { step: "04", title: "Execution", desc: "Secure transaction management and quality delivery." },
                { step: "05", title: "Follow-Up", desc: "Ongoing support and relationship management." },
              ].map((s, i) => (
                <Reveal delay={i * 0.12} key={s.step}>
                  <div className="relative flex items-start gap-6 md:gap-8 pl-2">
                    <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm md:text-base font-extrabold shrink-0 shadow-lg shadow-primary/20 ring-4 ring-[#050505]">
                      {s.step}
                    </div>
                    <div className="pt-1 md:pt-2">
                      <h4 className="font-bold text-lg md:text-xl mb-1 text-white">{s.title}</h4>
                      <p className="text-sm md:text-base text-white/40">{s.desc}</p>
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
              <Button size="lg" className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 shadow-xl shadow-primary/10 transition-all duration-500 font-bold">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FM.motion.div>
        </section>
      </div>
    </div>
  );
}
