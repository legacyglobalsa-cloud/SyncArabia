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
  Package,
  Warehouse,
  BarChart3,
  Brain,
  CheckCircle2,
  Target,
  Truck,
  Boxes,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function LegaHub({ open, onOpenChange }) {
  const { language } = useLanguage();
  const t = translations[language];

  const whyChoosePoints = [
    t.subsidiary.legaHubDetails.whyItem1,
    t.subsidiary.legaHubDetails.whyItem2,
    t.subsidiary.legaHubDetails.whyItem3,
    t.subsidiary.legaHubDetails.whyItem4,
    t.subsidiary.legaHubDetails.whyItem5,
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-2xl w-[95vw] max-h-[90vh] bg-black/95 border-primary/20 text-white p-0 overflow-hidden backdrop-blur-xl">
        <DialogHeader className="px-6 pt-6 pb-4 bg-black/40 border-b border-white/5">
          <DialogTitle className="text-3xl font-bold text-gradient-gold">
            {t.subsidiary.legaHubName}
          </DialogTitle>
          <div className="flex flex-col gap-1 mt-1">
            <p className="text-white/50 font-medium text-base">
              {t.subsidiary.legaHubDetails.tagline}
            </p>
            <DialogDescription className="text-gray-500 text-sm italic">
              {t.subsidiaryLayout.divisionOf}
            </DialogDescription>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-140px)] max-h-[calc(90vh-140px)] px-6 pb-6 bg-noise">
          <div className="space-y-6 pr-4 pt-6">
            <p className="text-white/50 leading-relaxed text-lg">
              {t.subsidiary.legaHubDetails.desc}
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
                      <Target className="w-6 h-6" />
                      {t.subsidiary.legaHubDetails.visionBox}
                    </h3>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 border-l-4 border-l-primary">
                    <h4 className="font-semibold text-primary mb-2 text-lg">
                      {t.subsidiary.legaHubDetails.visionTitle}:
                    </h4>
                    <p className="text-white/50 italic leading-relaxed">
                      "{t.subsidiary.legaHubDetails.visionQuote}"
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 border-l-4 border-l-primary">
                    <h4 className="font-semibold text-primary mb-2 text-lg">
                      {t.subsidiary.legaHubDetails.missionTitle}:
                    </h4>
                    <ul className="text-white/50 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaHubDetails.missionItem1}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaHubDetails.missionItem2}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaHubDetails.missionItem3}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaHubDetails.missionItem4}
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="services" className="space-y-6 mt-6">
                <div className="grid gap-4">
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Truck className="w-5 h-5" />
                      {t.subsidiary.legaHubDetails.service1}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaHubDetails.service1Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Boxes className="w-5 h-5" />
                      {t.subsidiary.legaHubDetails.service2}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaHubDetails.service2Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Warehouse className="w-5 h-5" />
                      {t.subsidiary.legaHubDetails.service3}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaHubDetails.service3Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <BarChart3 className="w-5 h-5" />
                      {t.subsidiary.legaHubDetails.service4}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaHubDetails.service4Desc}
                    </p>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Brain className="w-5 h-5" />
                      {t.subsidiary.legaHubDetails.service5}
                    </h3>
                    <p className="text-white/50">
                      {t.subsidiary.legaHubDetails.service5Desc}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="why-us" className="space-y-6 mt-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  {t.subsidiary.legaHubDetails.whyLegaHub}
                </h3>
                <div className="space-y-4">
                  {whyChoosePoints.map((point, index) => (
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
                    {t.subsidiary.legaHubDetails.callToActionTitle}
                  </h4>
                  <p className="text-white/50 mb-4">
                    {t.subsidiary.legaHubDetails.callToActionDesc}
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
