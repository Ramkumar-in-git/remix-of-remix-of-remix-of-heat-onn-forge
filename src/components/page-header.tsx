import { ReactNode } from "react";

type PageHeaderVariant = "dark" | "light" | "heat" | "centered";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  variant?: PageHeaderVariant;
  children?: ReactNode;
}

const shells: Record<PageHeaderVariant, string> = {
  dark: "bg-surface-dark text-primary-foreground",
  light: "border-b border-border bg-secondary text-foreground",
  heat: "bg-surface-dark text-primary-foreground",
  centered: "border-b border-border bg-background text-foreground",
};

export function PageHeader({ eyebrow, title, description, variant = "dark", children }: PageHeaderProps) {
  const centered = variant === "centered";

  return (
    <section className={`relative overflow-hidden py-16 sm:py-24 lg:py-32 ${shells[variant]}`}>
      {variant === "heat" && (
        <>
          <span className="absolute -right-24 top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-heat/25 blur-3xl lg:block" />
          <span className="absolute inset-y-0 left-0 w-1.5 bg-heat" />
        </>
      )}
      {variant === "light" && <span className="absolute inset-x-0 top-0 h-1 bg-heat" />}

      <div className={`section-shell relative ${centered ? "text-center" : ""}`}>
        <div className={`reveal-up ${centered ? "mx-auto max-w-3xl" : ""}`}>
          <p
            className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-heat ${
              centered ? "justify-center" : ""
            }`}
          >
            {!centered && <span className="heat-line" />}
            {eyebrow}
          </p>
          <h1
            className={`mt-5 text-3xl font-extrabold uppercase leading-[1.1] sm:mt-7 sm:text-5xl lg:text-6xl ${
              centered ? "mx-auto max-w-3xl xl:text-6xl" : "max-w-4xl xl:text-7xl"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-5 text-sm leading-7 sm:mt-7 sm:text-base ${
              variant === "light" || centered ? "text-muted-foreground" : "text-primary-foreground/65"
            } ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
