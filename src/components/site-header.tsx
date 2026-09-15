import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigation } from "@/data/catalog";
import logoAsset from "@/assets/heatonn-logo.png.asset.json";

export function Wordmark({ inverse = false, className = "" }: { inverse?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex min-w-0 items-center gap-2 ${inverse ? "text-primary-foreground" : "text-foreground"} ${className}`}
      aria-label="HeatOnn home"
    >
      <img
        src={logoAsset.url}
        alt="HeatOnn logo"
        width={160}
        height={148}
        className={`h-9 w-auto shrink-0 sm:h-10 ${inverse ? "brightness-0 invert" : ""}`}
      />
      <span className="sr-only">HeatOnn</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="section-shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:h-20 sm:gap-4 lg:grid-cols-[auto_1fr_auto]">
        <Wordmark />
        <nav className="hidden items-center justify-center gap-6 lg:flex xl:gap-8" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative whitespace-nowrap py-2 text-xs font-bold uppercase text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-heat"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden justify-end lg:flex">
          <Button asChild variant="heat" size="lg"><Link to="/contact">Get a Quote</Link></Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open navigation"><Menu className="size-5" /></Button>
          </SheetTrigger>
          <SheetContent className="w-full border-border bg-background px-6 pt-6 sm:max-w-sm sm:px-7 sm:pt-8">
            <SheetTitle className="text-left"><Wordmark /></SheetTitle>
            <nav className="mt-10 flex flex-col" aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <SheetClose asChild key={item.to}>
                  <Link to={item.to} className="grid grid-cols-[2rem_1fr] items-center border-b border-border py-4 text-lg font-semibold sm:py-5 sm:text-xl">
                    <span className="text-[10px] text-heat">0{index + 1}</span>{item.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild><Button asChild variant="heat" size="lg" className="mt-8 w-full"><Link to="/contact">Request a Quote</Link></Button></SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
