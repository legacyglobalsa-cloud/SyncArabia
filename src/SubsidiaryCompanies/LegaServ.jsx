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
  Droplets,
  Wrench,
  CheckCircle2,
  Building2,
  Shield,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function LegaServ({ open, onOpenChange }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-2xl w-[95vw] max-h-[90vh] bg-black/95 border-primary/20 text-white p-0 overflow-hidden backdrop-blur-xl">
        <DialogHeader className="px-6 pt-6 pb-4 bg-black/40 border-b border-white/5">
          <DialogTitle className="text-3xl font-bold text-gradient-gold">
            {t.subsidiary.legaServName}
          </DialogTitle>
          <div className="flex flex-col gap-1 mt-1">
            <p className="text-white/50 font-medium text-base">
              {t.subsidiary.legaServDetails.tagline}
            </p>
            <DialogDescription className="text-gray-500 text-sm italic">
              {t.subsidiaryLayout.divisionOf}
            </DialogDescription>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-140px)] max-h-[calc(90vh-140px)] px-6 pb-6 bg-noise">
          <div className="space-y-6 pr-4 pt-6">
            <p className="text-white/50 leading-relaxed text-lg">
              {t.subsidiary.legaServDetails.desc}
            </p>

            <p className="text-primary font-semibold text-xl border-l-4 border-primary pl-4">
              "{t.subsidiary.legaServDetails.quote}"
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
                  <h3 className="text-xl font-semibold text-primary flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5" />
                    {t.subsidiary.legaServDetails.whatWeDoTitle}
                  </h3>
                  <p className="text-white/50">
                    {t.subsidiary.legaServDetails.whatWeDoDesc}
                  </p>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h4 className="font-semibold text-primary mb-2">
                      {t.subsidiary.legaServDetails.approachTitle}:
                    </h4>
                    <p className="text-white/50">
                      {t.subsidiary.legaServDetails.approachDesc}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="services" className="space-y-6 mt-6">
                <div className="grid gap-4">
                  {/* Service 1 */}
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      {t.subsidiary.legaServDetails.service1}
                    </h3>
                    <ul className="text-white/50 space-y-2 mb-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                          {t.subsidiary.legaServDetails[`service1Item${i}`]}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 mt-3">
                      <p className="text-sm font-semibold text-primary mb-2">
                        {t.subsidiaryLayout.poweredBy}:
                      </p>
                      <ul className="text-white/50 text-sm space-y-1">
                        {t.subsidiary.legaServDetails.service1PoweredBy
                          .split(", ")
                          .map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span>✅</span> {item}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  {/* Service 2 */}
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      {t.subsidiary.legaServDetails.service2}
                    </h3>
                    <ul className="text-white/50 space-y-2 mb-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                          {t.subsidiary.legaServDetails[`service2Item${i}`]}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 mt-3">
                      <p className="text-sm font-semibold text-primary mb-2">
                        {t.subsidiaryLayout.poweredBy}:
                      </p>
                      <ul className="text-white/50 text-sm space-y-1">
                        {t.subsidiary.legaServDetails.service2PoweredBy
                          .split(", ")
                          .map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span>✅</span> {item}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  {/* Service 3 */}
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      {t.subsidiary.legaServDetails.service3}
                    </h3>
                    <ul className="text-white/50 space-y-2 mb-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                          {t.subsidiary.legaServDetails[`service3Item${i}`]}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 mt-3">
                      <p className="text-sm font-semibold text-primary mb-2">
                        {t.subsidiaryLayout.poweredBy}:
                      </p>
                      <ul className="text-white/50 text-sm space-y-1">
                        {t.subsidiary.legaServDetails.service3PoweredBy
                          .split(", ")
                          .map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span>✅</span> {item}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  {/* Service 4 */}
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      {t.subsidiary.legaServDetails.service4}
                    </h3>
                    <ul className="text-white/50 space-y-2 mb-3">
                      {[1, 2, 3, 4].map((i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                          {t.subsidiary.legaServDetails[`service4Item${i}`]}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 mt-3">
                      <p className="text-sm font-semibold text-primary mb-2">
                        {t.subsidiaryLayout.poweredBy}:
                      </p>
                      <ul className="text-white/50 text-sm space-y-1">
                        {t.subsidiary.legaServDetails.service4PoweredBy
                          .split(", ")
                          .map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span>✅</span> {item}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="industries" className="space-y-6 mt-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  {t.subsidiary.legaServDetails.industriesTitle}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 glass-dark p-4 rounded-lg border-white/5 hover:border-primary/30 transition-all"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-gray-200">
                        {t.subsidiary.legaServDetails[`industry${i}`]}
                      </span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="why-us" className="space-y-6 mt-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  {t.subsidiary.legaServDetails.whyLegaServ}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i}>
                            <h4 className="font-semibold text-primary mb-1">
                              {t.subsidiary.legaServDetails[`whyItem${i}Title`]}
                            </h4>
                            <p className="text-white/50 text-sm">
                              {t.subsidiary.legaServDetails[`whyItem${i}Desc`]}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        {[4, 5, 6].map((i) => (
                          <div key={i}>
                            <h4 className="font-semibold text-primary mb-1">
                              {t.subsidiary.legaServDetails[`whyItem${i}Title`]}
                            </h4>
                            <p className="text-white/50 text-sm">
                              {t.subsidiary.legaServDetails[`whyItem${i}Desc`]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 mt-6">
                  <h4 className="font-semibold text-primary mb-2">
                    {t.subsidiary.legaServDetails.commitmentTitle}
                  </h4>
                  <p className="text-white/50">
                    {t.subsidiary.legaServDetails.commitmentDesc}
                  </p>
                  <p className="text-primary font-semibold mt-3">
                    {t.subsidiary.legaServDetails.commitmentTagline}
                  </p>
                </div>

                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 mt-8">
                  <h4 className="font-bold text-primary mb-3 text-lg">
                    {t.subsidiary.legaServDetails.contactTitle}
                  </h4>
                  <p className="text-white/50 mb-4">
                    {t.subsidiary.legaServDetails.contactDesc}
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
