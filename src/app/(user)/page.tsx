import Testimonials from "@/ui/HomeUI/HomeSecFour";
import HeroSection from "@/ui/HomeUI/HomeSecOne";
import FlagshipProducts from "@/ui/HomeUI/HomeSecThree";
import WhyChooseUs from "@/ui/HomeUI/HomeSecTwo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <WhyChooseUs/>
      <FlagshipProducts/>
      <Testimonials/>
    </div>
  );
}
