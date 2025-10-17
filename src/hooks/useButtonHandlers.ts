// Enhanced click handlers for buttons
import { useRouter } from 'next/navigation';

export const useButtonHandlers = () => {
  const router = useRouter();

  const handleViewItinerary = (packageId: number, country: string) => {
    // Navigate to itinerary page or open modal
    console.log(`View itinerary for package ${packageId} in ${country}`);
    // router.push(`/itinerary/${packageId}`);
    
    // For now, show an alert
    alert(`View itinerary for ${country} package ${packageId}`);
  };

  const handleBookNow = (packageId: number, country: string) => {
    // Navigate to booking page
    console.log(`Book now for package ${packageId} in ${country}`);
    // router.push(`/booking/${packageId}`);
    
    // For now, show an alert
    alert(`Book now for ${country} package ${packageId}`);
  };

  const handleCall = (packageId: number, country: string) => {
    // Open phone dialer or contact form
    console.log(`Call for package ${packageId} in ${country}`);
    
    // For now, show contact info
    alert(`Call us for ${country} package ${packageId}\nPhone: +91-9876543210`);
  };

  const handleViewAll = (country: string) => {
    // Navigate to country-specific page
    console.log(`View all ${country} packages`);
    // router.push(`/packages/${country.toLowerCase()}`);
    
    // For now, show an alert
    alert(`View all ${country} packages`);
  };

  const handlePlanTrip = (destination: any) => {
    // Navigate to trip planning page or open contact form
    console.log(`Plan trip for ${destination.name}`);
    // router.push(`/plan-trip?destination=${destination.name}`);
    
    // For now, show an alert
    alert(`Plan your trip to ${destination.name}!\nStarting from ₹${destination.price}`);
  };

  const handleWhatsApp = () => {
    // Open WhatsApp with pre-filled message
    const message = encodeURIComponent("Hi! I'm interested in planning a trip with Tripz Holidays.");
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleBookNowHero = () => {
    // Navigate to booking page or contact form
    console.log('Book now from hero section');
    // router.push('/contact');
    
    // For now, show an alert
    alert('Book your dream vacation now!\nContact us: +91-9876543210');
  };

  return {
    handleViewItinerary,
    handleBookNow,
    handleCall,
    handleViewAll,
    handlePlanTrip,
    handleWhatsApp,
    handleBookNowHero,
  };
};
