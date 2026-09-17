import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { categories, contact, navigation } from "@/data/catalog";
import { Wordmark } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="bg-surface-dark text-primary-foreground">
      <div className="section-shell grid gap-10 py-14 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.4fr_0.7fr_1fr_1.2fr] lg:py-20">
        <div>
          <Wordmark inverse />
          <p className="mt-5 max-w-xs text-sm leading-7 text-primary-foreground/60">
            Industrial heating elements and temperature sensors engineered across four specialized units in Bengaluru.
          </p>
        </div>
        <div>
          <FooterHeading>Company</FooterHeading>
          <div className="flex flex-col gap-3">
            {navigation.slice(1).map((item) => (
              <Link key={item.to} to={item.to} className="text-sm text-primary-foreground/60 transition-colors hover:text-heat">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <FooterHeading>Heaters</FooterHeading>
          <div className="flex flex-col gap-3">
            {categories.map((item) => (
              <Link
                key={item.slug}
                to="/products/$slug"
                params={{ slug: item.slug }}
                className="text-sm text-primary-foreground/60 transition-colors hover:text-heat"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <FooterHeading>Contact</FooterHeading>
          <div className="space-y-4 text-sm text-primary-foreground/60">
            <p className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0" />{contact.phone}</p>
            <a href={`mailto:${contact.salesEmails[0]}`} className="flex gap-3 break-all hover:text-heat"><Mail className="mt-0.5 size-4 shrink-0" />{contact.salesEmails[0]}</a>
            <p className="flex gap-3 leading-6"><MapPin className="mt-0.5 size-4 shrink-0" />{contact.address}</p>
          </div>
        </div>
      </div>
      <div className="section-shell flex flex-col gap-4 border-t border-primary-foreground/10 py-6 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 HEAT-ONN. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <Link to="/privacy" className="hover:text-heat">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-heat">Terms</Link>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-heat">Back to top <ArrowUpRight className="size-3" /></a>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 text-xs font-bold uppercase text-primary-foreground">{children}</h2>;
}
