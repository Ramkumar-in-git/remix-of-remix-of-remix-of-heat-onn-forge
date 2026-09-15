import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { products } from "@/data/catalog";

const title = "Heater Products | Cartridge, Band, Ceramic, Strip | HeatOnn";
const description = "Explore the HeatOnn heater range: cartridge heaters, band heaters, ceramic band heaters, strip heaters and customized heating elements built to specification.";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Products"
          title="Heating elements, built to specification."
          description="Five heater categories manufactured in Peenya, Bengaluru — each made to the dimensions, wattage, voltage and termination your assembly requires."
          variant="light"
        />

        <nav aria-label="Heater categories" className="border-b border-border bg-secondary">
          <div className="section-shell flex gap-2 overflow-x-auto py-4">
            {products.map((product) => (
              <Link
                key={product.slug}
                to="/products/$slug"
                params={{ slug: product.slug }}
                className="shrink-0 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold uppercase transition-colors hover:border-heat hover:text-heat"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </nav>

        <section className="section-shell py-20 lg:py-28">
          <h2 className="sr-only">Heater categories</h2>
          <div className="space-y-20 lg:space-y-28">
            {products.map((product, index) => (
              <article key={product.slug} id={product.slug} className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div className={`overflow-hidden rounded-md bg-secondary ${index % 2 ? "lg:order-2" : ""}`}>
                  <img src={product.image} alt={product.imageAlt} width={1536} height={1024} loading="eager" decoding="async" className="aspect-[4/3] w-full object-cover" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-heat">{`0${index + 1}`} · {product.specification}</p>
                  <h3 className="mt-4 text-3xl font-extrabold uppercase leading-[1.1] sm:text-4xl">{product.name}</h3>
                  <p className="mt-5 leading-7 text-muted-foreground">{product.overview}</p>
                  <div className="mt-7">
                    <p className="text-[11px] font-bold uppercase text-muted-foreground">Application areas</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {product.applications.slice(0, 4).map((item) => (
                        <li key={item} className="rounded-full bg-secondary px-3 py-1.5 text-xs text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="heat" size="lg">
                      <Link to="/products/$slug" params={{ slug: product.slug }}>View details <ArrowRight /></Link>
                    </Button>
                    <Button asChild variant="industrial" size="lg"><Link to="/contact">Enquire</Link></Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
