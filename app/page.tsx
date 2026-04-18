import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationTimeline from "@/components/EducationTimeline";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <NavBar />
      <HeroSection />
      <ExperienceSection />
      <EducationTimeline />
      <SkillsSection />
      <Footer />
      <ChatBot />
    </main>
  );
}
