import HeroSection from '@/components/HeroSection';
import DestinationCards from '@/components/DestinationCards';
import EuropePackages from '@/components/EuropePackages';
import NorwayPackages from '@/components/NorwayPackages';
import JapanPackages from '@/components/JapanPackages';
import ThailandPackages from '@/components/ThailandPackages';
import BaliPackages from '@/components/BaliPackages';
import VietnamPackages from '@/components/VietnamPackages';
import FinlandPackages from '@/components/FinlandPackages';
import IcelandPackages from '@/components/IcelandPackages';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DestinationCards />
      <EuropePackages />
      <NorwayPackages />
      <JapanPackages />
      <ThailandPackages />
      <BaliPackages />
      <VietnamPackages />
      <FinlandPackages />
      <IcelandPackages />
    </div>
  );
}
