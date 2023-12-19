import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import { LandingHero2 } from "@/components/landing-hero-2";

const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingHero2 />
      <LandingContent />
    </div>
   );
}
 
export default LandingPage;
