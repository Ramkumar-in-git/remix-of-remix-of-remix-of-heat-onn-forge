import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AboutSection, ApplicationsGrid, CTASection, FeaturedProducts, Hero, IndustrialBreak, ProcessSection, ProductCategories, TrustStrip, WhyHeatOnn } from "@/components/home-sections";

const title = "HeatOnn | Industrial Heater Manufacturer in Bengaluru";
const description = "HeatOnn manufactures cartridge, band, ceramic band, strip and customised electric heating elements for moulding, extrusion and process industries.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <AboutSection />
        <ProductCategories />
        <FeaturedProducts />
        <ApplicationsGrid />
        <WhyHeatOnn />
        <ProcessSection />
        <IndustrialBreak />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
