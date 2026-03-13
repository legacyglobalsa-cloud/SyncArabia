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
  Sparkles,
  Printer,
  Zap,
  Scissors,
  Shirt,
  Gift,
  Layout,
  Monitor,
  Brain,
  CheckCircle2,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function LegaCreativ({ open, onOpenChange }) {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-2xl w-[95vw] max-h-[90vh] bg-black/95 border-primary/20 text-white p-0 overflow-hidden backdrop-blur-xl">
        <DialogHeader className="px-6 pt-6 pb-4 bg-black/40 border-b border-white/5">
          <DialogTitle className="text-3xl font-bold text-gradient-gold">
            {t.subsidiary.legaCreativName}
          </DialogTitle>
          <DialogDescription className="text-white/40 text-base">
            {t.subsidiary.legaCreativDetails.tagline} – A Legacy Global Company
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-140px)] max-h-[calc(90vh-140px)] px-6 pb-6 bg-noise">
          <div className="space-y-6 pr-4 pt-6">
            <p className="text-white/50 leading-relaxed text-lg">
              {t.subsidiary.legaCreativDetails.desc}
            </p>

            <p className="text-primary font-semibold text-xl border-l-4 border-primary pl-4">
              {t.subsidiary.legaCreativDetails.subHeader}
            </p>

            <p className="text-white/50 leading-relaxed">
              {t.subsidiary.legaCreativDetails.longDesc}
            </p>

            <Tabs
              defaultValue="overview"
              className="w-full mt-8"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <TabsList className="grid w-full grid-cols-3 bg-black/40 border border-white/10 h-auto p-1">
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
                      {t.subsidiary.legaCreativDetails.coreServices}
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      {t.subsidiary.legaCreativDetails.coreServicesDesc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 border-l-4 border-l-primary">
                    <h4 className="font-semibold text-primary mb-2 text-lg">
                      {t.subsidiary.legaCreativDetails.techTitle}
                    </h4>
                    <p className="text-white/50 mb-2 italic">
                      "{t.subsidiary.legaCreativDetails.techQuote}"
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {t.subsidiary.legaCreativDetails.techDesc}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="services" className="space-y-6 mt-6">
                <div className="grid gap-4">
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Sparkles className="w-5 h-5" />
                      {t.subsidiary.legaCreativDetails.service1}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaCreativDetails.service1Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Printer className="w-5 h-5" />
                      {t.subsidiary.legaCreativDetails.service2}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaCreativDetails.service2Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Zap className="w-5 h-5" />
                      {t.subsidiary.legaCreativDetails.service3}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaCreativDetails.service3Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Shirt className="w-5 h-5" />
                      {t.subsidiary.legaCreativDetails.service4}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaCreativDetails.service4Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Gift className="w-5 h-5" />
                      {t.subsidiary.legaCreativDetails.service5}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaCreativDetails.service5Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Layout className="w-5 h-5" />
                      {t.subsidiary.legaCreativDetails.service6}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaCreativDetails.service6Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Monitor className="w-5 h-5" />
                      {t.subsidiary.legaCreativDetails.service7}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaCreativDetails.service7Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Brain className="w-5 h-5" />
                      {t.subsidiary.legaCreativDetails.service8}
                    </h3>
                    <ul className="text-white/50 space-y-2">
                      {t.subsidiary.legaCreativDetails.service8Items.map(
                        (item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="why-us" className="space-y-6 mt-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  {t.subsidiaryLayout.whyUs} LEGACREATIV
                </h3>
                <div className="space-y-4">
                  {t.subsidiary.legaCreativDetails.whyLegaCreativItems.map(
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

                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 mt-8">
                  <h4 className="font-bold text-primary mb-3 text-lg">
                    {t.subsidiary.legaCreativDetails.letCreate}
                  </h4>
                  <p className="text-white/50 mb-4">
                    {t.subsidiary.legaCreativDetails.letCreateDesc}
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
