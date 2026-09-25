import type { ReactNode } from "react";
import ProductBreadcrumbsBar from "@/sections/products/ProductBreadcrumbsBar";

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ProductBreadcrumbsBar />
      {children}
    </>
  );
}
