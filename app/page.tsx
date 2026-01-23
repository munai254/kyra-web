//6 HOME PAGE ASSEMBLY
//app/page.tsx
import { Hero } from "@/components/home/Hero";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
//import { Brands }      from "@/components/home/Brands";
import { CTA }         from "@/components/home/CTA";
import { SearchBar } from "@/components/home/SearchBar";

export default function Home()
{
  return(
    <>
    <Hero />
    {/* <SearchBar/> */}
    <FeaturedVehicles/>
    <CTA/>
    </>
  )
}
