import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function PlaceholderPage({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: React.ReactNode }) {
  return <><SiteHeader /><main><section className="bg-surface-dark py-24 text-primary-foreground lg:py-36"><div className="section-shell"><p className="text-[11px] font-bold uppercase text-heat">{eyebrow}</p><h1 className="mt-7 max-w-4xl text-5xl font-extrabold uppercase leading-[1.05] sm:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/65">{description}</p></div></section><section className="section-shell py-20"><div className="max-w-3xl">{children ?? <><h2 className="text-3xl font-bold uppercase">Detailed information is being prepared.</h2><p className="mt-5 leading-7 text-muted-foreground">This page is ready for verified company content, photography and technical documentation.</p></>}<div className="mt-10 flex flex-col gap-3 sm:flex-row"><Button asChild variant="industrial" size="lg"><Link to="/"><ArrowLeft /> Back home</Link></Button><Button asChild variant="heat" size="lg"><Link to="/contact">Request a quote <ArrowRight /></Link></Button></div></div></section></main><SiteFooter /></>;
}