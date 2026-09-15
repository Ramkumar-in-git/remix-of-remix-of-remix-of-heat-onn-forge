import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { blogPosts, contact } from "@/data/catalog";

const title = "Blogs | Heating Element Notes | HeatOnn";
const description = "Short engineering notes from the HeatOnn workshop on selecting, fitting and maintaining industrial heating elements.";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blogs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: Blogs,
});

function Blogs() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Blogs"
          title="Notes from the workshop."
          description="Short, practical writing on heater selection, fitting and failure — published as topics come up in day-to-day enquiries."
          variant="centered"
        />
        <section className="section-shell py-20 lg:py-28">
          <h2 className="text-2xl font-extrabold uppercase">Upcoming topics</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {blogPosts.map((post) => (
              <article key={post.slug} className="grid gap-3 py-8 lg:grid-cols-[10rem_1fr] lg:gap-10">
                <p className="text-[11px] font-bold uppercase text-heat">{post.topic}</p>
                <div>
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{post.excerpt}</p>
                  <p className="mt-4 text-[11px] font-bold uppercase text-muted-foreground">Article in preparation</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-md border border-border bg-card p-8 shadow-industrial">
            <h2 className="text-xl font-bold uppercase">Have a question before we publish?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Write to {contact.email} with the application and we will answer it directly.
            </p>
            <Button asChild variant="heat" size="lg" className="mt-7"><Link to="/contact">Ask our engineers <ArrowRight /></Link></Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
