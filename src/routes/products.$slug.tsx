import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Mail, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { contact, products } from "@/data/catalog";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Heater not found | HeatOnn" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} | HeatOnn`;
    const description = `${product.name} from HeatOnn — ${product.specification}. ${product.overview.slice(0, 110)}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${product.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/products/${product.slug}` }],
    };
  },
  notFoundComponent: HeaterNotFound,
  component: ProductDetail,
});

function HeaterNotFound() {
  return (
    <>
      <SiteHeader />
      <main className="section-shell py-28">
        <h1 className="text-4xl font-extrabold uppercase">Heater not found</h1>
        <p className="mt-5 max-w-xl leading-7 text-muted-foreground">This heater page is not available. Browse the full range instead.</p>
        <Button asChild variant="heat" size="lg" className="mt-8"><Link to="/products">All heaters <ArrowRight /></Link></Button>
      </main>
      <SiteFooter />
    </>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry: ${product.name}`)}&body=${encodeURIComponent(
    `Product: ${product.name}\n\nApplication:\nDimensions:\nWattage:\nVoltage:\nQuantity:\n\nAdditional details:\n`,
  )}`;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-surface-dark py-16 text-primary-foreground lg:py-24">
          <div className="section-shell">
            <Link to="/products" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase text-primary-foreground/60 hover:text-heat">
              <ArrowLeft className="size-3" /> All heaters
            </Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="overflow-hidden rounded-md">
                <img src={product.image} alt={product.imageAlt} width={1536} height={1024} className="aspect-[4/3] w-full object-cover" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase text-heat">{product.category}</p>
                <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[1.05] sm:text-6xl">{product.name}</h1>
                <p className="mt-6 leading-7 text-primary-foreground/65">{product.specification}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="heat" size="lg"><a href={mailto}>Enquire about this heater <ArrowRight /></a></Button>
                  <Button asChild variant="darkOutline" size="lg"><a href={`tel:${contact.phone.replaceAll(" ", "")}`}>Call {contact.phone}</a></Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold uppercase">Overview</h2>
              <p className="mt-5 leading-7 text-muted-foreground">{product.overview}</p>
              <p className="mt-5 leading-7 text-muted-foreground">{product.construction}</p>

              <h2 className="mt-14 text-2xl font-extrabold uppercase">Features</h2>
              <ul className="mt-6 space-y-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-heat" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 text-2xl font-extrabold uppercase">Applications</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.applications.map((item) => (
                  <li key={item} className="rounded-md border border-border bg-card px-4 py-3 text-sm">{item}</li>
                ))}
              </ul>
            </div>

            <aside className="min-w-0">
              <div className="rounded-md border border-border bg-card shadow-industrial">
                <h2 className="border-b border-border px-6 py-5 text-sm font-bold uppercase">Specification</h2>
                <dl className="divide-y divide-border">
                  {product.technicalSpecs.map((spec) => (
                    <div key={spec.label} className="grid gap-1 px-6 py-4 sm:grid-cols-2 sm:gap-4">
                      <dt className="text-[11px] font-bold uppercase text-muted-foreground">{spec.label}</dt>
                      <dd className="text-sm font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6 rounded-md bg-surface-dark p-6 text-primary-foreground">
                <h2 className="text-sm font-bold uppercase">Request a quotation</h2>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/65">Send dimensions, wattage, voltage and quantity — or a photograph of the element you are replacing.</p>
                <div className="mt-6 space-y-3">
                  <a href={mailto} className="flex items-center gap-3 text-sm hover:text-heat"><Mail className="size-4 shrink-0" /> {contact.email}</a>
                  <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="flex items-center gap-3 text-sm hover:text-heat"><Phone className="size-4 shrink-0" /> {contact.phone}</a>
                </div>
                <Button asChild variant="heat" size="lg" className="mt-6 w-full"><Link to="/contact">Open quote form</Link></Button>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-secondary py-20 lg:py-24">
          <div className="section-shell">
            <h2 className="text-2xl font-extrabold uppercase">Related heaters</h2>
            <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => <ProductCard key={item.slug} product={item} />)}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
