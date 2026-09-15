import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, DraftingCompass, Gauge, Headphones, Layers3, Settings2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { applications, categories, images, qualityProcess } from "@/data/catalog";

const SectionLabel = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className={`mb-6 flex items-center gap-3 text-[11px] font-bold uppercase ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
    <span className="heat-line" />
    {children}
  </div>
);

export function Hero() {
  return (
    <section className="bg-surface-dark text-primary-foreground" id="top">
      <div className="grid min-h-[calc(100svh-5rem)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="section-shell flex flex-col justify-center py-16 lg:max-w-none lg:pl-[max(5rem,calc((100vw-90rem)/2+5rem))] lg:pr-12">
          <div className="reveal-up max-w-3xl">
            <SectionLabel light>Heating Elements · Manufactured in Bengaluru</SectionLabel>
            <h1 className="text-4xl font-extrabold uppercase leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Precision heaters.<br />
              <span className="text-heat">Built</span> to your process.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-primary-foreground/65 lg:text-lg">
              HeatOnn manufactures cartridge, band, ceramic band, strip and fully customised electric heating elements for moulding, extrusion, packaging and process industries.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="heat" size="lg"><Link to="/products">View heater range <ArrowRight /></Link></Button>
              <Button asChild variant="darkOutline" size="lg"><Link to="/contact">Request a quote</Link></Button>
            </div>
          </div>
        </div>
        <div className="relative min-h-[48vh] overflow-hidden lg:min-h-full">
          <img src={images.hero} alt="Glowing stainless steel cartridge heating element on a workshop bench" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-transparent to-transparent opacity-50" />
          <div className="absolute bottom-7 right-7 hidden items-center gap-3 text-[10px] font-bold uppercase text-primary-foreground/65 sm:flex">
            <span>Scroll to discover</span>
            <ArrowDown className="size-4 text-heat" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const items = [
    ["Manufactured In", "Peenya, Bengaluru"],
    ["Heater Types", "Five core categories"],
    ["Built To", "Drawing or sample"],
    ["Every Element", "Electrically tested"],
  ];
  return (
    <section className="border-b border-border bg-background">
      <div className="section-shell grid grid-cols-2 lg:grid-cols-4">
        {items.map(([label, value], i) => (
          <div key={label} className={`py-7 ${i % 2 ? "pl-5" : "pr-5"} ${i < 3 ? "lg:border-r" : ""} border-border lg:px-8 first:lg:pl-0 last:lg:pr-0`}>
            <p className="text-[10px] font-bold uppercase text-muted-foreground">{label}</p>
            <p className="mt-2 text-sm font-semibold sm:text-base">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section-shell py-24 lg:py-36">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative overflow-hidden rounded-md">
          <img src={images.workshop} alt="Technician winding resistance wire for heating elements in the HeatOnn workshop" width={1536} height={1024} loading="eager" decoding="async" className="aspect-[4/3] w-full object-cover" />
          <div className="absolute bottom-0 left-0 bg-surface-dark p-5 text-primary-foreground">
            <p className="text-[10px] font-bold uppercase text-heat">Wound, formed, tested</p>
            <p className="mt-1 text-sm">Heaters made in-house.</p>
          </div>
        </div>
        <div>
          <SectionLabel>About HeatOnn</SectionLabel>
          <h2 className="text-4xl font-extrabold uppercase leading-[1.08] sm:text-5xl">A heater is<br />a specification.</h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-muted-foreground">
            <p>Resistance wire, insulation, sheath and termination are chosen for one operating condition. Change the temperature, the medium or the duty cycle and the correct element changes with it.</p>
            <p>We manufacture each heater against an agreed specification, sample non-standard builds before batch production, and electrically test every element before it leaves the workshop.</p>
          </div>
          <Button asChild variant="industrial" size="lg" className="mt-8"><Link to="/about">About HeatOnn <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
  );
}

export function ProductCategories() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Heater Range</SectionLabel>
            <h2 className="text-4xl font-extrabold uppercase sm:text-5xl">Our heaters</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">
            Five core categories, each built to the dimensions, wattage and termination your assembly requires.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => (
            <Link
              key={item.slug}
              to="/products/$slug"
              params={{ slug: item.slug }}
              className={`group overflow-hidden rounded-md border border-border bg-card shadow-industrial transition duration-500 hover:-translate-y-1 hover:border-heat ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="overflow-hidden">
                <img src={item.image} alt={item.imageAlt} width={1536} height={1024} loading="eager" decoding="async" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-heat">{item.number}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:text-heat" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                <span className="mt-6 inline-block text-xs font-bold uppercase">View heater</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProducts() {
  return (
    <section className="section-shell py-24 lg:py-32">
      <SectionLabel>Manufacturing Capability</SectionLabel>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-4xl font-extrabold uppercase sm:text-5xl">Made in-house</h2>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Winding, forming, insulation, assembly and electrical testing all happen under one roof, which keeps lead times short on both standard builds and replacements.</p>
        </div>
        <Button asChild variant="industrial" size="lg"><Link to="/products">All heaters <ArrowRight /></Link></Button>
      </div>
      <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Settings2, title: "Element winding", text: "Nickel-chrome wire wound and tensioned to the calculated wattage for each build." },
          { icon: Layers3, title: "Insulation & compaction", text: "Magnesium oxide and mica insulation compacted for dielectric strength and heat transfer." },
          { icon: DraftingCompass, title: "Forming to drawing", text: "Sheath drawing, swaging and bending to the dimensions the assembly needs." },
          { icon: Gauge, title: "Electrical testing", text: "Resistance, insulation resistance and continuity checked on every element." },
          { icon: ShieldCheck, title: "Sample approval", text: "Non-standard heaters sampled and agreed before a batch is released." },
          { icon: Headphones, title: "Replacement builds", text: "Obsolete or unmarked elements reverse-engineered from a physical sample." },
        ].map((item) => (
          <div key={item.title} className="bg-card p-8">
            <item.icon className="size-6 text-heat" />
            <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ApplicationsGrid() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <div className="overflow-hidden rounded-md">
            <img src={images.applications} alt="Extruder barrel fitted with band heaters on a factory floor" width={1536} height={1024} loading="eager" decoding="async" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <SectionLabel>Where our heaters work</SectionLabel>
            <h2 className="text-4xl font-extrabold uppercase sm:text-5xl">Applications</h2>
            <div className="mt-10 divide-y divide-border border-y border-border">
              {applications.map((item) => (
                <div key={item.name} className="py-5">
                  <h3 className="text-base font-bold">{item.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyHeatOnn() {
  return (
    <section className="section-shell py-24 lg:py-32">
      <SectionLabel>Engineering Support</SectionLabel>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <h2 className="text-4xl font-extrabold uppercase leading-[1.08] sm:text-5xl">Help before<br />the order.</h2>
        <div className="space-y-8">
          {[
            { title: "Specification review", text: "Send the operating temperature, medium, dimensions and supply voltage and we will confirm a workable construction — or tell you where the requirement needs rethinking." },
            { title: "Working from a sample", text: "An unmarked or obsolete element can be measured, tested and reproduced. A photograph with dimensions is often enough to begin." },
            { title: "Failure investigation", text: "Repeated element failures usually point to bore fit, contamination, controller behaviour or watt density. We will look at the returned part with you." },
          ].map((item) => (
            <div key={item.title} className="border-b border-border pb-8 last:border-0 last:pb-0">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="section-shell">
        <SectionLabel>How an order runs</SectionLabel>
        <h2 className="text-4xl font-extrabold uppercase sm:text-5xl">From enquiry to dispatch</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {qualityProcess.map((item) => (
            <div key={item.step} className="border-t-2 border-heat bg-card p-7 shadow-industrial">
              <span className="text-[10px] font-bold text-heat">{item.step}</span>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustrialBreak() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-24 text-primary-foreground lg:py-32">
      <img src={images.workshop} alt="" aria-hidden="true" width={1536} height={1024} loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="section-shell relative">
        <p className="max-w-4xl text-2xl font-bold leading-[1.35] sm:text-4xl">
          &ldquo;Tell us the temperature, the medium and the space available. The heater follows from there.&rdquo;
        </p>
        <p className="mt-7 text-[11px] font-bold uppercase text-heat">HeatOnn engineering workshop, Peenya</p>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="section-shell py-24 lg:py-32">
      <div className="rounded-md border border-border bg-card p-9 shadow-industrial sm:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold uppercase leading-[1.1] sm:text-4xl">Need a heater quoted?</h2>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Send dimensions, wattage, voltage and the application. If a drawing or sample photograph exists, that is quicker still.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-self-end">
            <Button asChild variant="heat" size="lg"><Link to="/contact">Request a quote <ArrowRight /></Link></Button>
            <Button asChild variant="industrial" size="lg"><Link to="/products">Browse heaters</Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
