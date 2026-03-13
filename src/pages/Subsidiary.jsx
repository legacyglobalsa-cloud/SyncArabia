import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// Import Subsidiary Company Dialog Components
import LegaBuild from "../SubsidiaryCompanies/LegaBuild";
import LegaForce from "../SubsidiaryCompanies/LegaForce";
import LegaServ from "../SubsidiaryCompanies/LegaServ";
import LegaFit from "../SubsidiaryCompanies/LegaFit";
import LegaFab from "../SubsidiaryCompanies/LegaFab";
import LegaDeal from "../SubsidiaryCompanies/LegaDeal";
import LegaCreativ from "../SubsidiaryCompanies/LegaCreativ";
import LegaXpress from "../SubsidiaryCompanies/LegaXpress";
import LegaWorkx from "../SubsidiaryCompanies/LegaWorkx";
import LegaVentures from "../SubsidiaryCompanies/LegaVentures";
import LegaTech from "../SubsidiaryCompanies/LegaTech";
import LegaShop from "../SubsidiaryCompanies/LegaShop";
import LegaLink from "../SubsidiaryCompanies/LegaLink";
import LegaLand from "../SubsidiaryCompanies/LegaLand";
import LegaHub from "../SubsidiaryCompanies/LegaHub";

// Define Subsidiary Company Data
const subsidiaryData = [
  { name: "LegaBuild", logoIndex: 16, openStateSetter: "isLegaBuildOpen" },
  { name: "LegaCreativ", logoIndex: 17, openStateSetter: "isLegaCreativOpen" },
  { name: "LegaDeal", logoIndex: 18, openStateSetter: "isLegaDealOpen" },
  { name: "LegaFab", logoIndex: 19, openStateSetter: "isLegaFabOpen" },
  { name: "LegaFit", logoIndex: 20, openStateSetter: "isLegaFitOpen" },
  { name: "LegaForce", logoIndex: 21, openStateSetter: "isLegaForceOpen" },
  { name: "LegaHub", logoIndex: 22, openStateSetter: "isLegaHubOpen" },
  { name: "LegaLand", logoIndex: 23, openStateSetter: "isLegaLandOpen" },
  { name: "LegaLink", logoIndex: 24, openStateSetter: "isLegaLinkOpen" },
  { name: "LegaServ", logoIndex: 25, openStateSetter: "isLegaServOpen" },
  { name: "LegaShop", logoIndex: 26, openStateSetter: "isLegaShopOpen" },
  { name: "LegaTech", logoIndex: 27, openStateSetter: "isLegaTechOpen" },
  {
    name: "LegaVentures",
    logoIndex: 31,
    openStateSetter: "isLegaVenturesOpen",
  },
  { name: "LegaWorkx", logoIndex: 29, openStateSetter: "isLegaWorkxOpen" },
  { name: "LegaXpress", logoIndex: 30, openStateSetter: "isLegaXpressOpen" },
];

export default function Subsidiaries() {
  const { language } = useLanguage();
  const t = translations[language];

  const [dialogStates, setDialogStates] = useState({
    isLegaBuildOpen: false,
    isLegaForceOpen: false,
    isLegaServOpen: false,
    isLegaFitOpen: false,
    isLegaFabOpen: false,
    isLegaDealOpen: false,
    isLegaCreativOpen: false,
    isLegaXpressOpen: false,
    isLegaWorkxOpen: false,
    isLegaVenturesOpen: false,
    isLegaTechOpen: false,
    isLegaShopOpen: false,
    isLegaLinkOpen: false,
    isLegaLandOpen: false,
    isLegaHubOpen: false,
  });

  const openDialog = (setterName) => {
    setDialogStates((prev) => ({ ...prev, [setterName]: true }));
  };

  const setDialogState = (setterName, value) => {
    setDialogStates((prev) => ({ ...prev, [setterName]: value }));
  };

  return (
    <div className="bg-[#050505] text-white bg-noise overflow-x-hidden min-h-screen ">
      {/* SUBSIDIARY COMPANIES SECTION */}
      <section className="relative pt-20 pb-24 md:pt-24 md:pb-32 border-y border-white/[0.03]">
        {/* ENHANCED Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[180px] opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] opacity-30 transform translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-50 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {t.subsidiary.title}{" "}
                <span className="text-gradient-gold">
                  {t.subsidiary.titleHighlight}
                </span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
              <p className="mt-4 text-white/40 max-w-2xl mx-auto text-lg">
                {t.subsidiary.description}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {subsidiaryData.map((subsidiary, i) => (
              <Reveal delay={i * 0.05} key={i}>
                <div
                  className="group relative h-full bg-white/[0.02] rounded-xl p-6 flex flex-col items-start cursor-pointer transition-all duration-500 border border-white/[0.04] hover:border-primary/30 hover:bg-white/[0.04]"
                  onClick={() => openDialog(subsidiary.openStateSetter)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                  <div className="flex items-center justify-center mb-4 w-full h-20">
                    <img
                      src={`/LOGO%20COLORED/LG%20GROUP%20OF%20COMPANIES-${subsidiary.logoIndex}.png`}
                      alt={subsidiary.name}
                      className="h-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-sm text-white/40 mb-4 flex-grow text-center">
                    {subsidiary.name.includes("Build") &&
                      t.subsidiary.legaBuild}
                    {subsidiary.name.includes("Creativ") &&
                      t.subsidiary.legaCreativ}
                    {subsidiary.name.includes("Deal") && t.subsidiary.legaDeal}
                    {subsidiary.name.includes("Fab") && t.subsidiary.legaFab}
                    {subsidiary.name.includes("Fit") && t.subsidiary.legaFit}
                    {subsidiary.name.includes("Force") &&
                      t.subsidiary.legaForce}
                    {subsidiary.name.includes("Hub") && t.subsidiary.legaHub}
                    {subsidiary.name.includes("Land") && t.subsidiary.legaLand}
                    {subsidiary.name.includes("Link") && t.subsidiary.legaLink}
                    {subsidiary.name.includes("Serv") && t.subsidiary.legaServ}
                    {subsidiary.name.includes("Shop") && t.subsidiary.legaShop}
                    {subsidiary.name.includes("Tech") && t.subsidiary.legaTech}
                    {subsidiary.name.includes("Ventures") &&
                      t.subsidiary.legaVentures}
                    {subsidiary.name.includes("Workx") &&
                      t.subsidiary.legaWorkx}
                    {subsidiary.name.includes("Xpress") &&
                      t.subsidiary.legaXpress}
                  </p>

                  <span className="text-primary flex items-center text-sm font-semibold mt-auto">
                    {t.subsidiary.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dialog Components */}
      <LegaBuild
        open={dialogStates.isLegaBuildOpen}
        onOpenChange={(val) => setDialogState("isLegaBuildOpen", val)}
      />
      <LegaForce
        open={dialogStates.isLegaForceOpen}
        onOpenChange={(val) => setDialogState("isLegaForceOpen", val)}
      />
      <LegaServ
        open={dialogStates.isLegaServOpen}
        onOpenChange={(val) => setDialogState("isLegaServOpen", val)}
      />
      <LegaFit
        open={dialogStates.isLegaFitOpen}
        onOpenChange={(val) => setDialogState("isLegaFitOpen", val)}
      />
      <LegaFab
        open={dialogStates.isLegaFabOpen}
        onOpenChange={(val) => setDialogState("isLegaFabOpen", val)}
      />
      <LegaDeal
        open={dialogStates.isLegaDealOpen}
        onOpenChange={(val) => setDialogState("isLegaDealOpen", val)}
      />
      <LegaCreativ
        open={dialogStates.isLegaCreativOpen}
        onOpenChange={(val) => setDialogState("isLegaCreativOpen", val)}
      />
      <LegaXpress
        open={dialogStates.isLegaXpressOpen}
        onOpenChange={(val) => setDialogState("isLegaXpressOpen", val)}
      />
      <LegaWorkx
        open={dialogStates.isLegaWorkxOpen}
        onOpenChange={(val) => setDialogState("isLegaWorkxOpen", val)}
      />
      <LegaVentures
        open={dialogStates.isLegaVenturesOpen}
        onOpenChange={(val) => setDialogState("isLegaVenturesOpen", val)}
      />
      <LegaTech
        open={dialogStates.isLegaTechOpen}
        onOpenChange={(val) => setDialogState("isLegaTechOpen", val)}
      />
      <LegaShop
        open={dialogStates.isLegaShopOpen}
        onOpenChange={(val) => setDialogState("isLegaShopOpen", val)}
      />
      <LegaLink
        open={dialogStates.isLegaLinkOpen}
        onOpenChange={(val) => setDialogState("isLegaLinkOpen", val)}
      />
      <LegaLand
        open={dialogStates.isLegaLandOpen}
        onOpenChange={(val) => setDialogState("isLegaLandOpen", val)}
      />
      <LegaHub
        open={dialogStates.isLegaHubOpen}
        onOpenChange={(val) => setDialogState("isLegaHubOpen", val)}
      />
    </div>
  );
}
