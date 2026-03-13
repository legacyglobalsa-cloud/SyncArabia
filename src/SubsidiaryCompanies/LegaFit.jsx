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
  ShoppingBag,
  Store,
  Brain,
  Dumbbell,
  CheckCircle2,
  Heart,
  Scissors,
  Droplets,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function LegaFit({ open, onOpenChange }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-2xl w-[95vw] max-h-[90vh] bg-black/95 border-primary/20 text-white p-0 overflow-hidden backdrop-blur-xl">
        <DialogHeader className="px-6 pt-6 pb-4 bg-black/40 border-b border-white/5">
          <DialogTitle className="text-3xl font-bold text-gradient-gold">
            {t.subsidiary.legaFitName}
          </DialogTitle>
          <DialogDescription className="text-white/40 text-base">
            {t.subsidiary.legaFitDetails.tagline}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-140px)] max-h-[calc(90vh-140px)] px-6 pb-6 bg-noise">
          <div className="space-y-6 pr-4 pt-6">
            <p className="text-white/50 leading-relaxed text-lg">
              {t.subsidiary.legaFitDetails.desc}
            </p>
            <p className="text-primary font-semibold text-xl border-l-4 border-primary pl-4">
              {t.subsidiary.legaFitDetails.subHeader}
            </p>
            <p className="text-white/50 leading-relaxed">
              {t.subsidiary.legaFitDetails.longDesc}
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

              {/* OVERVIEW TAB */}
              <TabsContent value="overview" className="space-y-6 mt-6 pb-6">
                <div className="space-y-6">
                  <div className="glass-dark p-6 rounded-xl border-white/5">
                    <h3 className="text-xl font-semibold text-primary flex items-center gap-3 mb-3">
                      <Heart className="w-6 h-6" />
                      {t.subsidiary.legaFitDetails.coreServices}
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      {t.subsidiary.legaFitDetails.coreServicesDesc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 border-l-4 border-l-primary">
                    <h4 className="font-semibold text-primary mb-2 text-lg">
                      {t.subsidiary.legaFitDetails.vision}:
                    </h4>
                    <p className="text-white/50 italic leading-relaxed">
                      "{t.subsidiary.legaFitDetails.visionQuote}"
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 border-l-4 border-l-primary">
                    <h4 className="font-semibold text-primary mb-2 text-lg">
                      {t.subsidiary.legaFitDetails.mission}:
                    </h4>
                    <p className="text-white/50 leading-relaxed">
                      {t.subsidiary.legaFitDetails.missionQuote}
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* SERVICES TAB */}
              <TabsContent value="services" className="space-y-6 mt-6 pb-6">
                <div className="grid gap-4">
                  {/* Service 1 - Professional Beauty & Wellness Services */}
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Sparkles className="w-5 h-5" />
                      {t.subsidiary.legaFitDetails.service1}
                    </h3>
                    <p className="text-white/50 mb-4">
                      {t.subsidiary.legaFitDetails.service1Desc}
                    </p>
                    <div className="space-y-4">
                      {/* Hair Services */}
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <Scissors className="w-4 h-4" />
                          {t.subsidiary.legaFitDetails.hairServicesTitle}
                        </h4>
                        <ul className="text-white/50 text-sm space-y-1 pl-2 border-l-2 border-primary/30">
                          {t.subsidiary.legaFitDetails.hairServicesItems.map(
                            (item, index) => (
                              <li key={index}>• {item}</li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Nail Care */}
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <h4 className="font-semibold text-primary mb-2">
                          {t.subsidiary.legaFitDetails.nailCareTitle}
                        </h4>
                        <ul className="text-white/50 text-sm space-y-1 pl-2 border-l-2 border-primary/30">
                          {t.subsidiary.legaFitDetails.nailCareItems.map(
                            (item, index) => (
                              <li key={index}>• {item}</li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Skincare */}
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                          <Droplets className="w-4 h-4" />
                          {t.subsidiary.legaFitDetails.skincareTitle}
                        </h4>
                        <ul className="text-white/50 text-sm space-y-1 pl-2 border-l-2 border-primary/30">
                          {t.subsidiary.legaFitDetails.skincareItems.map(
                            (item, index) => (
                              <li key={index}>• {item}</li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Massage */}
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <h4 className="font-semibold text-primary mb-2">
                          {t.subsidiary.legaFitDetails.massageTitle}
                        </h4>
                        <ul className="text-white/50 text-sm space-y-1 pl-2 border-l-2 border-primary/30">
                          {t.subsidiary.legaFitDetails.massageItems.map(
                            (item, index) => (
                              <li key={index}>• {item}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                    <p className="text-white/40 mt-4 italic text-sm border-t border-white/5 pt-3">
                      {t.subsidiary.legaFitDetails.service1Footer}
                    </p>
                  </div>

                  {/* Service 2 - Importing & Distributing Premium Beauty Products */}
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <ShoppingBag className="w-5 h-5" />
                      {t.subsidiary.legaFitDetails.service2}
                    </h3>
                    <p className="text-white/50 mb-3">
                      {t.subsidiary.legaFitDetails.service2Desc}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {t.subsidiary.legaFitDetails.regionsList.map(
                        (region, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 glass-dark p-2 rounded border-white/5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-gray-200 text-sm">
                              {region}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        {t.subsidiary.legaFitDetails.productCategoriesTitle}
                      </h4>
                      <ul className="text-white/50 text-sm space-y-1">
                        {t.subsidiary.legaFitDetails.productCategoriesItems.map(
                          (item, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <p className="text-white/40 mt-4 italic text-sm border-t border-white/5 pt-3">
                      {t.subsidiary.legaFitDetails.service2Footer}
                    </p>
                  </div>

                  {/* Service 3 - LEGAFIT Beauty Shops */}
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Store className="w-5 h-5" />
                      {t.subsidiary.legaFitDetails.service3}
                    </h3>
                    <p className="text-white/50 mb-3">
                      {t.subsidiary.legaFitDetails.service3Desc}
                    </p>
                    <p className="text-white/50 mb-3">
                      {t.subsidiary.legaFitDetails.shopFeaturesTitle}
                    </p>
                    <ul className="text-white/50 space-y-2">
                      {t.subsidiary.legaFitDetails.shopFeaturesItems.map(
                        (item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                    <p className="text-white/40 mt-4 italic text-sm border-t border-white/5 pt-3">
                      {t.subsidiary.legaFitDetails.service3Footer}
                    </p>
                  </div>

                  {/* Service 4 - AI-Driven Beauty & Wellness Solutions */}
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Brain className="w-5 h-5" />
                      {t.subsidiary.legaFitDetails.service4}
                    </h3>
                    <p className="text-white/50 mb-3">
                      {t.subsidiary.legaFitDetails.service4Desc}
                    </p>
                    <div className="space-y-2">
                      {t.subsidiary.legaFitDetails.aiFeaturesItems.map(
                        (feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 glass-dark p-3 rounded border-white/5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-gray-200 text-sm">
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                    <p className="text-white/40 mt-4 italic text-sm border-t border-white/5 pt-3">
                      {t.subsidiary.legaFitDetails.service4Footer}
                    </p>
                  </div>
                  {/* Service 5 - Fitness, Wellness & Transformation Programs */}
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Dumbbell className="w-5 h-5" />
                      {t.subsidiary.legaFitDetails.service5}
                    </h3>
                    <p className="text-white/50 mb-3">
                      {t.subsidiary.legaFitDetails.service5Desc}
                    </p>
                    <ul className="text-white/50 space-y-2">
                      {t.subsidiary.legaFitDetails.fitnessProgramsItems.map(
                        (item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                    <p className="text-white/40 mt-4 italic text-sm border-t border-white/5 pt-3">
                      {t.subsidiary.legaFitDetails.service5Footer}
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* WHY US TAB */}
              <TabsContent value="why-us" className="space-y-6 mt-6 pb-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  {t.subsidiary.legaFitDetails.whyLegaFit}
                </h3>
                <div className="space-y-4">
                  {[
                    t.subsidiary.legaFitDetails.whyItem1,
                    t.subsidiary.legaFitDetails.whyItem2,
                    t.subsidiary.legaFitDetails.whyItem3,
                    t.subsidiary.legaFitDetails.whyItem4,
                    t.subsidiary.legaFitDetails.whyItem5,
                    t.subsidiary.legaFitDetails.whyItem6,
                    t.subsidiary.legaFitDetails.whyItem7,
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 glass-dark p-4 rounded-xl border-white/5 hover:border-primary/30 transition-all"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-gray-200 text-lg">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 mt-8">
                  <h4 className="font-bold text-primary mb-3 text-lg">
                    {t.subsidiary.legaFitDetails.expTitle}
                  </h4>
                  <p className="text-white/50 mb-4">
                    {t.subsidiary.legaFitDetails.expDesc}
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
