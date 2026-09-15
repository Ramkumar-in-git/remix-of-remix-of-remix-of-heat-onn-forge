import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to="/products/$slug" params={{ slug: product.slug }} className="group block">
      <div className="overflow-hidden rounded-md bg-secondary">
        <img
          src={product.image}
          alt={product.imageAlt}
          width={1536}
          height={1024}
          loading="eager"
                  decoding="async"
          className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
        />
      </div>
      <div className="border-b border-border py-5">
        <p className="text-[10px] font-bold uppercase text-heat">{product.category}</p>
        <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{product.specification}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase">
          View details <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
