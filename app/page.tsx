//6 HOME PAGE ASSEMBLY
//app/page.tsx
import { Hero } from "@/components/home/Hero";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Brands }      from "@/components/home/Brands";
import { CTA }         from "@/components/home/CTA";
import { Footer }      from "@/components/layout/Footer";
import { SearchBar } from "@/components/home/SearchBar";
import Navbar from "@/components/layout/Navbar";

export default function Home()
{
  return(
    <>
    <Navbar />
    <Hero />
    <SearchBar/>
    <FeaturedVehicles/>
    <WhyChooseUs/>
    <Brands/>
    <CTA/>
    <Footer/>
    </>
  )
}
