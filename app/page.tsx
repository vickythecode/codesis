// app/page.tsx
import dynamic from "next/dynamic";
import Navbar from "@/app/components/Navbar";

// Lazy-loaded sections (code-split)
const Banner = dynamic(() => import("./components/Banner"));          // SSR + code split
const AboutSection = dynamic(() => import("./components/AboutSection"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <AboutSection />
      <Footer />
    </main>
  );
}
