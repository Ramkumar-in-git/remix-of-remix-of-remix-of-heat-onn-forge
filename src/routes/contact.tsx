import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { categories, contact } from "@/data/catalog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const title = "Contact & Quote Request | HeatOnn Bengaluru";
const description =
  "Request a quote for cartridge, band, ceramic band, strip or custom heating elements. Call, email or send your requirement to HeatOnn in Peenya, Bengaluru.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const fieldLabel = "text-xs font-bold uppercase tracking-wider";

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const heater = String(data.get("heater") ?? "").trim();
    const quantity = String(data.get("quantity") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please add your name, email and requirement details.");
      return;
    }

    setSubmitting(true);
    const body = [
      `Name: ${name}`,
      `Company: ${company || "-"}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Heater type: ${heater || "-"}`,
      `Quantity: ${quantity || "-"}`,
      "",
      "Requirement:",
      message,
    ].join("\n");

    const subject = `Quote request${heater ? ` — ${heater}` : ""} — ${name}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Your email app is opening with the request filled in. Send it and we'll reply within one working day.");
    form.reset();
    setSubmitting(false);
  }

  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Tell us your requirement."
          description="Share the operating temperature, dimensions, wattage or a sample photo, and we will come back with a construction and a price."
        />

        <section className="section-shell py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="min-w-0">
              <h2 className="text-xl font-bold uppercase sm:text-2xl">Request a quote</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                Fill in what you know — we will ask about anything missing. Replies go out within one working day.
              </p>

              <form className="mt-8 space-y-6 sm:mt-10" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className={fieldLabel}>Full name *</label>
                    <Input id="name" name="name" autoComplete="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className={fieldLabel}>Company</label>
                    <Input id="company" name="company" autoComplete="organization" placeholder="Company name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className={fieldLabel}>Email *</label>
                    <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className={fieldLabel}>Phone</label>
                    <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 ..." />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="heater" className={fieldLabel}>Heater type</label>
                    <select
                      id="heater"
                      name="heater"
                      defaultValue=""
                      className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a heater</option>
                      {categories.map((item) => (
                        <option key={item.slug} value={item.name}>{item.name}</option>
                      ))}
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quantity" className={fieldLabel}>Quantity</label>
                    <Input id="quantity" name="quantity" placeholder="e.g. 20 pieces" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className={fieldLabel}>Requirement details *</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Operating temperature, dimensions, wattage and voltage, sheath material, termination — or describe the machine and the element you are replacing."
                    className="min-h-[160px]"
                  />
                </div>
                <Button type="submit" variant="heat" size="lg" disabled={submitting} className="w-full sm:w-auto">
                  Send request <Send className="ml-2 size-4" />
                </Button>
                <p className="text-xs leading-6 text-muted-foreground">
                  Prefer email? Write to <a href={`mailto:${contact.email}`} className="font-semibold text-heat">{contact.email}</a> with your drawing or a photo of the existing element.
                </p>
              </form>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-bold uppercase sm:text-2xl">Direct contact</h2>
                <div className="mt-8 space-y-7">
                  <ContactRow icon={<Phone className="size-5" />} label="Call us" href={`tel:${contact.phone.replaceAll(" ", "")}`} value={contact.phone} />
                  <ContactRow icon={<Mail className="size-5" />} label="Email us" href={`mailto:${contact.email}`} value={contact.email} />
                  <ContactRow icon={<MapPin className="size-5" />} label="Visit us" value={contact.address} />
                  <ContactRow icon={<Clock className="size-5" />} label="Working hours" value="Monday to Saturday, 9:30 am – 6:30 pm IST" />
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  title="HeatOnn location map, Peenya, Bengaluru"
                  src="https://www.google.com/maps?q=Peenya%202nd%20Stage%2C%20Bengaluru%20560058&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0 sm:h-72"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <>
      <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-secondary transition-colors group-hover:bg-heat group-hover:text-primary-foreground">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 break-words text-base font-semibold leading-7 sm:text-lg">{value}</p>
      </div>
    </>
  );

  if (href) {
    return <a href={href} className="group flex items-start gap-4 sm:gap-5">{content}</a>;
  }
  return <div className="flex items-start gap-4 sm:gap-5">{content}</div>;
}
