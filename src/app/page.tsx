import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TaskComparison from '@/components/TaskComparison';
import DemoSection from '@/components/DemoSection';
import TimeValueSection from '@/components/TimeValueSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import PricingSection from '@/components/PricingSection';
import FounderStory from '@/components/FounderStory';
import TechSection from '@/components/TechSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Availability from '@/components/Availability';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <TimeValueSection />
      <IntegrationsSection />
      <TaskComparison />
      <FounderStory />
      <TechSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Availability />
      <Footer />
    </main>
  );
} 