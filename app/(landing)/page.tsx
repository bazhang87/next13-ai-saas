import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

const LandingPage = () => {
  return ( 
    <div className="h-full bg-gradient-to-r from-black to-purple-800">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
   );
}
 
export default LandingPage;
