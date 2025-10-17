import HeroSection from '@/components/HeroSection';
import ValuePropositionsSection from '@/components/ValuePropositionsSection';
import DestinationCards from '@/components/DestinationCards';
import EuropePackages from '@/components/EuropePackages';
import NorwayPackages from '@/components/NorwayPackages';
import NorthernLightsBanner from '@/components/NorthernLightsBanner';
import FinlandPackages from '@/components/FinlandPackages';
import IcelandPackages from '@/components/IcelandPackages';
import StatisticsSection from '@/components/StatisticsSection';
import BaliPackages from '@/components/BaliPackages';
import ThailandPackages from '@/components/ThailandPackages';
import HolidaysLiveSection from '@/components/HolidaysLiveSection';
import VietnamPackages from '@/components/VietnamPackages';
import JapanPackages from '@/components/JapanPackages';
import NewZealandPackages from '@/components/NewZealandPackages';
import WhyTripzSection from '@/components/WhyTripzSection';
import ContactForm from '@/components/ContactForm';
import AboutUsSection from '@/components/AboutUsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropositionsSection />
      <DestinationCards />
      <EuropePackages />
      <NorwayPackages />
      <NorthernLightsBanner />
      <FinlandPackages />
      <IcelandPackages />
      <StatisticsSection />
      <BaliPackages />
      <ThailandPackages />
      <HolidaysLiveSection />
      <VietnamPackages />
      <JapanPackages />
      <NewZealandPackages />
      <WhyTripzSection />
      <ContactForm />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
