import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigation } from "@/data/catalog";
import logoAsset from "@/assets/heatonn-mark.png.asset.json";

export function Wordmark({ inverse = false, className = "" }: { inverse?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex min-w-0 items-center gap-2.5 transition-opacity duration-300 hover:opacity-85 ${inverse ? "text-primary-foreground" : "text-foreground"} ${className}`}
      aria-label="HeatOnn home"
    >
      <img
        src={logoAsset.url}
        alt="HeatOnn logo"
        width={424}
        height={283}
        decoding="async"
        className={`h-8 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-9 ${inverse ? "rounded-sm bg-primary-foreground p-1" : ""}`}
      />
      <span className="text-lg font-extrabold uppercase tracking-tight sm:text-xl">
        Heat<span className="text-heat">Onn</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 16) {
        setVisible(true);
      } else if (Math.abs(currentScrollY - lastScrollY.current) > 6) {
        setVisible(currentScrollY < lastScrollY.current);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b border-border/40 bg-background/55 shadow-[0_1px_24px_-16px_oklch(0.1_0_0_/_0.5)] backdrop-blur-2xl backdrop-saturate-150 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="section-shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:h-20 sm:gap-4 lg:grid-cols-[auto_1fr_auto]">
        <Wordmark />
        <nav className="hidden items-center justify-center gap-6 lg:flex xl:gap-8" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative whitespace-nowrap py-2 text-xs font-bold uppercase text-muted-foreground transition-all duration-300 ease-out after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-heat after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100 data-[status=active]:text-heat data-[status=active]:after:scale-x-100"
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
          <SheetContent className="w-full border-border/40 bg-background/80 px-6 pt-6 backdrop-blur-2xl sm:max-w-sm sm:px-7 sm:pt-8">
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
