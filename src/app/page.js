import Image from "next/image";
import Banner from "./banner/page";
import SpecialOffer from "./specialOffer/page";
import About from "./about/page";
import Categories from "./categories/page";

export default function Home() {
  return (
    <main className="lg:px-0 px-3 ">
        <Banner/>
        <SpecialOffer/>
        <About/>
        <Categories/>
    </main>
  );
}
