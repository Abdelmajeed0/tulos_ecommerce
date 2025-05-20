import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";

import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Container className="py-10">
        <HomeBanner />
        <ProductGrid />
      </Container>
    </div>
  );
}
