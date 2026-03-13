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
  Users,
  Globe,
  FileCheck,
  CheckCircle2,
  Brain,
  Briefcase,
  Building2,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function LegaForce({ open, onOpenChange }) {
  const { language } = useLanguage();
  const t = translations[language];

  const industries = [
    t.subsidiary.legaForceDetails.industry1,
    t.subsidiary.legaForceDetails.industry2,
    t.subsidiary.legaForceDetails.industry3,
    t.subsidiary.legaForceDetails.industry4,
    t.subsidiary.legaForceDetails.industry5,
    t.subsidiary.legaForceDetails.industry6,
    t.subsidiary.legaForceDetails.industry7,
    t.subsidiary.legaForceDetails.industry8,
  ];

  const workflowSteps = [
    t.subsidiary.legaForceDetails.howStep1,
    t.subsidiary.legaForceDetails.howStep2,
    t.subsidiary.legaForceDetails.howStep3,
    t.subsidiary.legaForceDetails.howStep4,
    t.subsidiary.legaForceDetails.howStep5,
    t.subsidiary.legaForceDetails.howStep6,
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-2xl w-[95vw] max-h-[90vh] bg-black/95 border-primary/20 text-white p-0 overflow-hidden backdrop-blur-xl">
        <DialogHeader className="px-6 pt-6 pb-4 bg-black/40 border-b border-white/5">
          <DialogTitle className="text-3xl font-bold text-gradient-gold">
            {t.subsidiary.legaForceName}
          </DialogTitle>
          <div className="flex flex-col gap-1 mt-1">
            <p className="text-white/50 font-medium text-base">
              {t.subsidiary.legaForceDetails.tagline}
            </p>
            <DialogDescription className="text-gray-500 text-sm italic">
              {t.subsidiaryLayout.divisionOf}
            </DialogDescription>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(90vh-140px)] max-h-[calc(90vh-140px)] px-6 pb-6 bg-noise">
          <div className="space-y-6 pr-4 pt-6">
            <p className="text-white/50 leading-relaxed text-lg">
              {t.subsidiary.legaForceDetails.desc}
            </p>

            <p className="text-primary font-semibold text-xl border-l-4 border-primary pl-4">
              {t.subsidiary.legaForceDetails.subHeader}
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
                    <h3 className="text-xl font-semibold text-primary flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6" />
                      {t.subsidiary.legaForceDetails.expertiseTitle}
                    </h3>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                        <Brain className="w-5 h-5 text-primary" />
                        <span className="text-gray-200 font-medium">{t.subsidiary.legaForceDetails.service1}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                        <Globe className="w-5 h-5 text-primary" />
                        <span className="text-gray-200 font-medium">{t.subsidiary.legaForceDetails.service2}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                        <FileCheck className="w-5 h-5 text-primary" />
                        <span className="text-gray-200 font-medium">{t.subsidiary.legaForceDetails.service3}</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 border-l-4 border-l-primary">
                    <h4 className="font-semibold text-primary mb-2 text-lg">
                      {t.subsidiary.legaForceDetails.approachTitle}:
                    </h4>
                    <p className="text-white/50 italic leading-relaxed">
                      "{t.subsidiary.legaForceDetails.approachQuote}"
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="services" className="space-y-6 mt-6">
                <div className="grid gap-4">
                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Brain className="w-5 h-5" />
                      {t.subsidiary.legaForceDetails.service1}
                    </h3>
                    <ul className="text-white/50 space-y-2 mb-3">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service1Item1}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service1Item2}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service1Item3}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service1Item4}
                      </li>
                    </ul>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 mt-3">
                      <p className="text-sm font-semibold text-primary mb-2">
                        {t.subsidiary.legaForceDetails.service1PoweredBy}:
                      </p>
                      <ul className="text-white/50 text-sm space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                          {t.subsidiary.legaForceDetails.service1Power1}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                          {t.subsidiary.legaForceDetails.service1Power2}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                          {t.subsidiary.legaForceDetails.service1Power3}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <Globe className="w-5 h-5" />
                      {t.subsidiary.legaForceDetails.service2}
                    </h3>
                    <ul className="text-white/50 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service2Item1}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service2Item2}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service2Item3}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service2Item4}
                      </li>
                    </ul>
                  </div>

                  <div className="glass-dark p-6 rounded-xl border-white/5 hover:border-primary/30 transition-colors group">
                    <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3 group-hover:text-gradient-gold transition-all">
                      <FileCheck className="w-5 h-5" />
                      {t.subsidiary.legaForceDetails.service3}
                    </h3>
                    <ul className="text-white/50 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service3Item1}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service3Item2}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service3Item3}
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {t.subsidiary.legaForceDetails.service3Item4}
                      </li>
                    </ul>
                    <p className="text-white/40 mt-4 italic text-sm border-t border-white/5 pt-3">
                      {t.subsidiary.legaForceDetails.service3Footer}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="industries" className="space-y-6 mt-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  {t.subsidiaryLayout.industries}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 glass-dark p-4 rounded-lg border-white/5 hover:border-primary/30 transition-all"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-gray-200">{industry}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="why-us" className="space-y-6 mt-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  {t.subsidiary.legaForceDetails.whyLegaForce}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="glass-dark p-6 rounded-xl border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-1">
                            {t.subsidiary.legaForceDetails.whyFeature1Title}
                          </h4>
                          <p className="text-white/50 text-sm">
                            {t.subsidiary.legaForceDetails.whyFeature1Desc}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">
                            {t.subsidiary.legaForceDetails.whyFeature2Title}
                          </h4>
                          <p className="text-white/50 text-sm">
                            {t.subsidiary.legaForceDetails.whyFeature2Desc}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">
                            {t.subsidiary.legaForceDetails.whyFeature3Title}
                          </h4>
                          <p className="text-white/50 text-sm">
                            {t.subsidiary.legaForceDetails.whyFeature3Desc}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-1">
                            {t.subsidiary.legaForceDetails.whyFeature4Title}
                          </h4>
                          <p className="text-white/50 text-sm">
                            {t.subsidiary.legaForceDetails.whyFeature4Desc}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">
                            {t.subsidiary.legaForceDetails.whyFeature5Title}
                          </h4>
                          <p className="text-white/50 text-sm">
                            {t.subsidiary.legaForceDetails.whyFeature5Desc}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">
                            {t.subsidiary.legaForceDetails.whyFeature6Title}
                          </h4>
                          <p className="text-white/50 text-sm">
                            {t.subsidiary.legaForceDetails.whyFeature6Desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-dark p-6 rounded-xl border-white/5">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2 text-lg">
                    <Briefcase className="w-5 h-5" />
                    {t.subsidiary.legaForceDetails.howWorksTitle}
                  </h4>
                  <div className="space-y-3">
                    {workflowSteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 glass-dark p-3 rounded border-white/5"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-semibold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-200 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-primary font-semibold mt-4 italic text-center">
                    {t.subsidiary.legaForceDetails.howWorksFooter}
                  </p>
                </div>

                <div className="glass-dark p-6 rounded-xl border-white/5 mt-8">
                  <h4 className="font-semibold text-primary mb-3 text-lg">
                    {t.subsidiaryLayout.ourCommitment}
                  </h4>
                  <p className="text-white/50 leading-relaxed">
                    {t.subsidiary.legaForceDetails.commitmentDesc}
                  </p>
                </div>

                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 mt-8">
                  <h4 className="font-bold text-primary mb-3 text-lg">
                    {t.subsidiaryLayout.contactUs}
                  </h4>
                  <p className="text-white/50 mb-4">
                    {t.subsidiary.legaForceDetails.contactDesc}
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
