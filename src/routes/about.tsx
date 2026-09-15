import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { aboutContent, capabilities, images, qualityProcess, values } from "@/data/catalog";

const title = "About HeatOnn | Heating Element Manufacturer, Bengaluru";
const description =
  "HeatOnn manufactures cartridge, band, ceramic band, strip and custom heating elements in Peenya, Bengaluru — specified around the process, tested before dispatch.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Company"
          title="Heating elements built around the process."
          description="HeatOnn manufactures electric heating elements for moulding, extrusion, packaging and process plant — specified in conversation with the people running the machine."
        />

        <section className="section-shell py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">Our story</h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground sm:mt-8 sm:space-y-6">
                <p>{aboutContent.story}</p>
                <p>{aboutContent.approach}</p>
              </div>
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-heat">Our mission</p>
                <p className="mt-4 text-lg font-semibold leading-8">{aboutContent.mission}</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[4/5]">
                <img
                  src={images.workshop}
                  alt="HeatOnn workshop where heating elements are wound, formed and assembled"
                  width={1536}
                  height={1024}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 bg-heat p-6 text-primary-foreground sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-widest sm:text-sm">Peenya, Bengaluru</p>
                <p className="mt-2 text-xl font-extrabold sm:text-2xl">Made & tested in-house</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 lg:py-24">
          <div className="section-shell">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">What we do in-house</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {capabilities.map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-background p-6">
                  <h3 className="text-base font-bold uppercase">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-16 lg:py-24">
          <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">From enquiry to dispatch</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {qualityProcess.map((step) => (
              <div key={step.step} className="border-t-2 border-heat pt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-heat">{step.step}</p>
                <h3 className="mt-3 text-lg font-bold uppercase leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-dark py-16 text-primary-foreground lg:py-24">
          <div className="section-shell">
            <h2 className="text-center text-2xl font-extrabold uppercase sm:text-3xl">How we work</h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-6 h-px w-12 bg-heat" />
                  <h3 className="text-lg font-bold uppercase">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-primary-foreground/60">{value.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="heat" size="lg"><Link to="/products">View heater range <ArrowRight /></Link></Button>
              <Button asChild variant="darkOutline" size="lg"><Link to="/contact">Request a quote</Link></Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
