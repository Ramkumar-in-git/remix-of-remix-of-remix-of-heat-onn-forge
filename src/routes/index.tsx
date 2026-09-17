import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AboutSection, ApplicationsGrid, CTASection, Hero, IndustrialBreak, ProductCategories, TrustStrip } from "@/components/home-sections";

const title = "HEAT-ONN | Industrial Heating Solutions";
const description = "HEAT-ONN provides precision thermal engineering, industrial heating elements and temperature sensors for OEM and process applications.";

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
        <ApplicationsGrid />
        <IndustrialBreak />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
