import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PackStatsSection from "@/components/PackStatsSection";
import AboutSection from "@/components/AboutSection";
import WolfPhilosophySection from "@/components/WolfPhilosophySection";
import TrainingsSection from "@/components/TrainingsSection";
import PackLevelsSection from "@/components/PackLevelsSection";
import TransformationSection from "@/components/TransformationSection";
import DailyChallengeSection from "@/components/DailyChallengeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScheduleSection from "@/components/ScheduleSection";
import ConveniosSection from "@/components/ConveniosSection";
import WolfCTASection from "@/components/WolfCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PackStatsSection />
      <AboutSection />
      <WolfPhilosophySection />
      <TrainingsSection />
      <PackLevelsSection />
      <TransformationSection />
      <DailyChallengeSection />
      <TestimonialsSection />
      <ScheduleSection />
      <ConveniosSection />
      <WolfCTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
