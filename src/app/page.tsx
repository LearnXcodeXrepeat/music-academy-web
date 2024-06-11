import { Card } from "@/components/Card";
import HeroSection from "@/components/HeroSection";
import MusicTestimonialCard from "@/components/MusicTestimonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Card />
      <WhyChooseUs />
      <MusicTestimonialCard />
    </main>
  );
}
