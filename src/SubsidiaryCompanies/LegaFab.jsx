import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Wrench,
  Building2,
  DoorOpen,
  Palette,
  Printer,
  Brain,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function LegaFab({ open, onOpenChange }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-2xl w-[95vw] max-h-[90vh] bg-black/95 border-primary/20 text-white p-0 overflow-hidden backdrop-blur-xl">
        <DialogHeader className="px-6 pt-6 pb-4 bg-black/40 border-b border-white/5">
          <DialogTitle className="text-3xl font-bold text-gradient-gold">
            {t.subsidiary.legaFabName}
          </DialogTitle>
          <DialogDescription className="text-white/40 text-base">
            {t.subsidiary.legaFabDetails.tagline}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-140px)] max-h-[calc(90vh-140px)] px-6 pb-6 bg-noise">
          <div className="space-y-6 pr-4 pt-6">
            <p className="text-white/50 leading-relaxed text-lg">
              {t.subsidiary.legaFabDetails.desc}
            </p>

            <p className="text-primary font-semibold text-xl border-l-4 border-primary pl-4">
              {t.subsidiary.legaFabDetails.subHeader}
            </p>

            <p className="text-white/50 leading-relaxed">
              {t.subsidiary.legaFabDetails.longDesc}
            </p>

            <Tabs
              defaultValue="overview"
              className="w-full mt-8"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <TabsList className="grid w-full grid-cols-4 bg-black/40 border border-white/10 h-auto p-1">
                <TabsTrigger
                  value="overview"
                  className="py-2 data-[state=active]:bg-primary data-[state=active]:text-black font-medium transition-all"
                >
                  {t.subsidiaryLayout.overview}
                </TabsTrigger>
                <TabsTrigger
                  value="services"
                  className="py-2 data-[state=active]:bg-primary data-[state=active]:text-black font-medium transition-all"
                >
                  {t.subsidiaryLayout.services}
                </TabsTrigger>
                <TabsTrigger
                  value="industries"
                  className="py-2 data-[state=active]:bg-primary data-[state=active]:text-black font-medium transition-all"
                >
                  {t.subsidiaryLayout.industries}
                </TabsTrigger>
                <TabsTrigger
                  value="why-us"
                  className="py-2 data-[state=active]:bg-primary data-[state=active]:text-black font-medium transition-all"
                >
                  {t.subsidiaryLayout.whyUs}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="space-y-6">
                  <div className="glass-dark p-6 rounded-xl border-white/5">
                    <h3 className="text-xl font-semibold text-primary flex items-center gap-3 mb-3">
                      <Sparkles className="w-6 h-6" />
                      {t.subsidiary.legaFabDetails.coreExpertise}
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      {t.subsidiary.legaFabDetails.coreExpertiseDesc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 border-l-4 border-l-primary">
                    <h4 className="font-semibold text-primary mb-2 text-lg">
                      {t.subsidiary.legaFabDetails.vision}:
                    </h4>
                    <p className="text-white/50 italic leading-relaxed">
                      "{t.subsidiary.legaFabDetails.visionQuote}"
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 border-l-4 border-l-primary">
                    <h4 className="font-semibold text-primary mb-2 text-lg">
                      {t.subsidiary.legaFabDetails.mission}:
                    </h4>
                    <p className="text-white/50 leading-relaxed">
                      {t.subsidiary.legaFabDetails.missionQuote}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="services" className="space-y-6 mt-6">
                <div className="grid gap-4">
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Wrench className="w-5 h-5" />
                      {t.subsidiary.legaFabDetails.service1}
                    </h3>
                    <p className="text-white/50 mb-3">
                      {t.subsidiary.legaFabDetails.service1Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Building2 className="w-5 h-5" />
                      {t.subsidiary.legaFabDetails.service2}
                    </h3>
                    <p className="text-white/50 mb-3">
                      {t.subsidiary.legaFabDetails.service2Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <DoorOpen className="w-5 h-5" />
                      {t.subsidiary.legaFabDetails.service3}
                    </h3>
                    <p className="text-white/50 mb-3">
                      {t.subsidiary.legaFabDetails.service3Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Palette className="w-5 h-5" />
                      {t.subsidiary.legaFabDetails.service4}
                    </h3>
                    <p className="text-white/50 mb-3">
                      {t.subsidiary.legaFabDetails.service4Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Printer className="w-5 h-5" />
                      {t.subsidiary.legaFabDetails.service5}
                    </h3>
                    <p className="text-white/50 mb-3">
                      {t.subsidiary.legaFabDetails.service5Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Brain className="w-5 h-5" />
                      {t.subsidiary.legaFabDetails.service6}
                    </h3>
                    <p className="text-white/50 mb-3">
                      {t.subsidiary.legaFabDetails.service6Desc}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="industries" className="space-y-6 mt-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  {t.subsidiaryLayout.industries}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.subsidiary.legaFabDetails.industriesList.map(
                    (industry, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 glass-dark p-4 rounded-lg border-white/5 hover:border-primary/30 transition-all"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-gray-200">{industry}</span>
                      </div>
                    )
                  )}
                </div>
              </TabsContent>

              <TabsContent value="why-us" className="space-y-6 mt-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  {t.subsidiary.legaFabDetails.whyLegaFab}
                </h3>
                <div className="space-y-4">
                  {t.subsidiary.legaFabDetails.whyLegaFabItems.map(
                    (point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 glass-dark p-4 rounded-xl border-white/5 hover:border-primary/30 transition-all"
                      >
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-gray-200 text-lg">{point}</p>
                      </div>
                    )
                  )}
                </div>

                <div className="glass-dark p-6 rounded-xl border-white/5 mt-8">
                  <h4 className="font-semibold text-primary mb-3 text-lg">
                    {t.subsidiary.legaFabDetails.conceptTitle}
                  </h4>
                  <p className="text-white/50 leading-relaxed">
                    {t.subsidiary.legaFabDetails.conceptDesc}
                  </p>
                </div>

                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 mt-8">
                  <h4 className="font-bold text-primary mb-3 text-lg">
                    {t.subsidiary.legaFabDetails.connectTitle}
                  </h4>
                  <p className="text-primary font-semibold mb-2">LEGAFAB</p>
                  <p className="text-white/50 text-sm mb-4 italic">
                    {t.subsidiary.legaFabDetails.tagline}
                  </p>
                  <div className="text-white/50 space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="text-xl">📱</span>{" "}
                      {t.subsidiaryLayout.mobile}:{" "}
                      <span className="text-white font-semibold hover:text-primary transition-colors cursor-pointer">
                        +966 50 360 2359
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-xl">📧</span>{" "}
                      {t.subsidiaryLayout.email}:{" "}
                      <span className="text-white font-semibold hover:text-primary transition-colors cursor-pointer">
                        info@legacyglobalsa.com
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-xl">🌐</span>{" "}
                      {t.subsidiaryLayout.website}:{" "}
                      <span className="text-white font-semibold hover:text-primary transition-colors cursor-pointer">
                        www.legacyglobalsa.com
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-xl">📍</span>{" "}
                      {t.subsidiaryLayout.office}:Near Al Mutlaq Hotel King Abdulaziz Rd
                      Kingdom of Saudi Arabia
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
