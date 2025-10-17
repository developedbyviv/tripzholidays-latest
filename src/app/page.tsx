import HeroSection from '@/components/HeroSection';
import DestinationCards from '@/components/DestinationCards';
import EuropePackages from '@/components/EuropePackages';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DestinationCards />
      <EuropePackages />
    </div>
  );
}
