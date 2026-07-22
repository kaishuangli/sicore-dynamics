export type KnowledgeFigure = {
  src: string;
  alt: string;
  caption?: string;
};

export type KnowledgeArticleSection = {
  heading?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  figure?: KnowledgeFigure;
};

export type KnowledgeArticle = {
  slug: string;
  categoryId: string;
  title: string;
  summary: string;
  readTime: string;
  sections: readonly KnowledgeArticleSection[];
  /** Optional lead image shown under the article title (wiki-style). */
  heroFigure?: KnowledgeFigure;
};
