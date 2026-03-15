import { useState } from "react";
import {
  ArrowRight,
  Users,
  Music,
  Flame,
  Building2,
  Lightbulb,
  Wrench,
  Truck,
  ShoppingCart,
  ArrowLeftRight,
  Home,
  Plane,
  Heart,
  GraduationCap,
} from "lucide-react";
import Reveal from "../components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Subsidiaries() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];
  const sub = t.subsidiary;
  const cards = sub.subsidiaryCards;

  // Build subsidiaries data from translation keys
  const subsidiaries = [
    {
      id: "syncManpower",
      nameKey: "legaForceName",
      descKey: "legaForce",
      icon: Users,
      sector: cards?.syncManpower?.sector || "Recruitment & Manpower",
      details: cards?.syncManpower?.details || [
        "AI-enhanced talent sourcing and screening",
        "Local and overseas manpower deployment",
        "Workforce planning and candidate matching",
        "Pre-deployment guidance and support",
      ],
    },
    {
      id: "syncEntertainment",
      nameKey: "legaFabName",
      descKey: "legaFab",
      icon: Music,
      sector: cards?.syncEntertainment?.sector || "Entertainment, F&B & Events",
      details: cards?.syncEntertainment?.details || [
        "Event planning and management",
        "Food & beverage operations",
        "Entertainment production",
        "Venue sourcing and coordination",
      ],
    },
    {
      id: "syncFuels",
      nameKey: "legaVenturesName",
      descKey: "legaVentures",
      icon: Flame,
      sector: cards?.syncFuels?.sector || "Oil & Gas",
      details: cards?.syncFuels?.details || [
        "Crude oil and refined products facilitation",
        "Supplier and buyer matching",
        "Transaction structuring and coordination",
        "Documentation and compliance support",
      ],
    },
    {
      id: "syncBuild",
      nameKey: "legaBuildName",
      descKey: "legaBuild",
      icon: Building2,
      sector: cards?.syncBuild?.sector || "Construction Conceptualization",
      details: cards?.syncBuild?.details || [
        "General contracting and turnkey projects",
        "Smart home and building systems",
        "Space-saving solutions and custom design",
        "Advanced construction concepts",
      ],
    },
    {
      id: "syncInnovate",
      nameKey: "legaTechName",
      descKey: "legaTech",
      icon: Lightbulb,
      sector: cards?.syncInnovate?.sector || "Innovation & Technology",
      details: cards?.syncInnovate?.details || [
        "AI solutions and automation",
        "App and web development",
        "Smart home and IoT systems",
        "AR/VR technologies and consulting",
      ],
    },
    {
      id: "syncFacility",
      nameKey: "legaServName",
      descKey: "legaServ",
      icon: Wrench,
      sector: cards?.syncFacility?.sector || "Facility Management",
      details: cards?.syncFacility?.details || [
        "Cleaning and janitorial solutions",
        "Smart maintenance and monitoring",
        "Preventive and corrective maintenance",
        "Hygiene programs and eco-smart solutions",
      ],
    },
    {
      id: "syncLogistics",
      nameKey: "legaXpressName",
      descKey: "legaXpress",
      icon: Truck,
      sector: cards?.syncLogistics?.sector || "Logistics & Supply Chain",
      details: cards?.syncLogistics?.details || [
        "Express delivery and freight solutions",
        "Warehousing and inventory management",
        "AI-powered route optimization",
        "E-commerce fulfillment services",
      ],
    },
    {
      id: "syncShop",
      nameKey: "legaShopName",
      descKey: "legaShop",
      icon: ShoppingCart,
      sector: cards?.syncShop?.sector || "E-Commerce Platform Management",
      details: cards?.syncShop?.details || [
        "Online store management",
        "Dynamic pricing and promotions",
        "Inventory optimization with AI",
        "Digital shopping experience",
      ],
    },
    {
      id: "syncDeal",
      nameKey: "legaDealName",
      descKey: "legaDeal",
      icon: ArrowLeftRight,
      sector: cards?.syncDeal?.sector || "Trade Import & Export",
      details: cards?.syncDeal?.details || [
        "Global sourcing and trading",
        "Import and export management",
        "Saudi product registration and compliance",
        "Intermediary and facilitation services",
      ],
    },
    {
      id: "syncLand",
      nameKey: "legaLandName",
      descKey: "legaLand",
      icon: Home,
      sector: cards?.syncLand?.sector || "Real Estate Management",
      details: cards?.syncLand?.details || [
        "Global real estate connectivity",
        "Investment advisory services",
        "AI-powered property matching",
        "Transaction support and facilitation",
      ],
    },
    {
      id: "syncLink",
      nameKey: "legaLinkName",
      descKey: "legaLink",
      icon: Plane,
      sector: cards?.syncLink?.sector || "Travel & Leisure",
      details: cards?.syncLink?.details || [
        "Transportation and accommodation management",
        "Travel itinerary planning",
        "Airline reservations and coordination",
        "24/7 travel support and assistance",
      ],
    },
    {
      id: "syncFit",
      nameKey: "legaFitName",
      descKey: "legaFit",
      icon: Heart,
      sector: cards?.syncFit?.sector || "Health and Wellness",
      details: cards?.syncFit?.details || [
        "Professional beauty and wellness services",
        "Premium product distribution",
        "Fitness and transformation programs",
        "AI-driven personalized solutions",
      ],
    },
    {
      id: "syncTraining",
      nameKey: "legaWorkxName",
      descKey: "legaWorkx",
      icon: GraduationCap,
      sector: cards?.syncTraining?.sector || "Training & Development Centers",
      details: cards?.syncTraining?.details || [
        "Disaster preparedness and rescue training",
        "Professional development programs",
        "Specialized skill-building courses",
        "School of Rock music education",
      ],
    },
  ].map(item => ({
    ...item,
    name: cards?.[item.id]?.name || item.id,
    description: cards?.[item.id]?.description || "",
    sector: cards?.[item.id]?.sector || item.sector,
    details: cards?.[item.id]?.details || item.details,
  }));

  const keyServicesLabel = cards?.keyServicesLabel || "Key Services & Capabilities";
  const divisionText = cards?.divisionText || "is a division of Sync Arabia Holdings, delivering specialized solutions in the";
  const sectorSuffix = cards?.sectorSuffix || "sector.";

  return (
    <div className="bg-[#050505] text-white bg-noise overflow-x-hidden min-h-screen">
      {/* SUBSIDIARY COMPANIES SECTION */}
      <section className="relative pt-20 pb-24 md:pt-24 md:pb-32 border-y border-white/[0.03]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[180px] opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] opacity-30 transform translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-50 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {sub.title}{" "}
                <span className="text-gradient-gold">{sub.titleHighlight}</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
              <p className="mt-4 text-white/40 max-w-2xl mx-auto text-lg">
                {sub.description}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {subsidiaries.map((subsidiary, i) => {
              const Icon = subsidiary.icon;
              return (
                <Reveal delay={i * 0.05} key={subsidiary.id}>
                  <div
                    className="group relative h-full bg-white/[0.02] rounded-xl p-6 flex flex-col items-start cursor-pointer transition-all duration-500 border border-white/[0.04] hover:border-primary/30 hover:bg-white/[0.04]"
                    onClick={() => setSelectedCompany(subsidiary)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                    <div className="flex items-center justify-center mb-4 w-full h-20">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/10 group-hover:border-primary/25 group-hover:bg-primary/15 transition-all duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors w-full text-center">
                      {subsidiary.name}
                    </h3>

                    <p className="text-xs text-primary/60 font-medium uppercase tracking-wider mb-3 w-full text-center">
                      {subsidiary.sector}
                    </p>

                    <p className="text-sm text-white/40 mb-4 flex-grow text-center">
                      {subsidiary.description}
                    </p>

                    <span className="text-primary flex items-center text-sm font-semibold mt-auto">
                      {sub.learnMore}
                      <ArrowRight className="ml-2 h-4 w-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detail Dialog */}
      <Dialog
        open={!!selectedCompany}
        onOpenChange={(open) => !open && setSelectedCompany(null)}
      >
        {selectedCompany && (
          <DialogContent className="!max-w-2xl w-[95vw] max-h-[90vh] bg-black/95 border-primary/20 text-white p-0 overflow-hidden backdrop-blur-xl">
            <DialogHeader className="px-6 pt-6 pb-4 bg-black/40 border-b border-white/5">
              <DialogTitle className="text-3xl font-bold text-gradient-gold">
                {selectedCompany.name}
              </DialogTitle>
              <DialogDescription className="text-white/40 text-base">
                {selectedCompany.sector} — A Sync Arabia Company
              </DialogDescription>
            </DialogHeader>

            <ScrollArea className="h-[calc(90vh-140px)] max-h-[calc(90vh-140px)] px-6 pb-6 bg-noise">
              <div className="space-y-6 pr-4 pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/10">
                    <selectedCompany.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedCompany.name}
                    </h3>
                    <p className="text-sm text-primary/60">
                      {selectedCompany.sector}
                    </p>
                  </div>
                </div>

                <p className="text-white/50 leading-relaxed text-lg">
                  {selectedCompany.description}
                </p>

                <div className="glass-dark p-6 rounded-xl border border-white/5">
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    {keyServicesLabel}
                  </h4>
                  <ul className="space-y-3">
                    {selectedCompany.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-white/50">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-dark p-6 rounded-xl border border-white/5 border-l-4 border-l-primary">
                  <p className="text-white/40 text-sm">
                    <span className="text-primary font-semibold">
                      {selectedCompany.name}
                    </span>{" "}
                    {divisionText} {selectedCompany.sector.toLowerCase()}{" "}
                    {sectorSuffix}
                  </p>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
