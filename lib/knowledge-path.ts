import type { KnowledgeCategoryId } from "@/lib/knowledge";
import { knowledgeCategories } from "@/lib/knowledge";

const categoryIds = new Set(knowledgeCategories.map((category) => category.id));

export function isKnowledgeCategoryId(value: string | null | undefined): value is KnowledgeCategoryId {
  return Boolean(value && categoryIds.has(value as KnowledgeCategoryId));
}

/** Canonical URL to open a Knowledge Center collection wiki page. */
export function knowledgeCollectionPath(categoryId: string): string {
  return `/knowledge?collection=${encodeURIComponent(categoryId)}`;
}
