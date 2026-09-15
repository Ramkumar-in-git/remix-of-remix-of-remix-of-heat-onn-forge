import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="bg-surface-dark py-16 text-primary-foreground sm:py-24 lg:py-32">
      <div className="section-shell">
        <p className="text-[11px] font-bold uppercase text-heat">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-3xl font-extrabold uppercase leading-[1.1] sm:mt-7 sm:text-5xl lg:text-6xl xl:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/65 sm:mt-7 sm:text-base">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
