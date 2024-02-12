import ChannelSection from "@/components/ChannelSection";
import Hero from "@/components/Hero";
import StatisticCollection from "@/components/StatisticCollection";
import Testimonials from "@/components/Testimonials";
import AppWrapper from "@/components/Utility/AppWrapper";

export default function Home() {
  return (
    <AppWrapper>
      <Hero />
      <StatisticCollection />
      <ChannelSection />
      <Testimonials />
    </AppWrapper>
  );
}
