import { getAllArticles, getCategories } from "./content";
import { getCategoryConfig } from "./categoryConfig";

type Locale = "zh-TW" | "en";

export interface KnowledgeGraphNode {
  id: string;
  type: "category" | "article";
  label: string;
  searchLabel: string;
  href: string;
  color: string;
  x: number;
  y: number;
  categoryId?: string;
  categoryLabel?: string;
  description?: string;
  summary?: string;
  articleCount?: number;
}

export interface KnowledgeGraphEdge {
  id: string;
  source: string;
  target: string;
  type: "category" | "related";
  color: string;
  weight: number;
}

export interface KnowledgeGraphData {
  center: {
    x: number;
    y: number;
    label: string;
    sublabel: string;
  };
  nodes: KnowledgeGraphNode[];
  edges: KnowledgeGraphEdge[];
  stats: {
    categoryCount: number;
    articleCount: number;
    relatedEdgeCount: number;
  };
}

const CENTER_X = 620;
const CENTER_Y = 420;
const CATEGORY_RADIUS = 252;
const ARTICLE_BASE_DISTANCE = 106;
const ARTICLE_RING_GAP = 46;
const ARTICLE_ROW_WIDTH = 5;
const ARTICLE_ROW_SPACING = 40;

function getNodeColor(category: string) {
  return getCategoryConfig(category)?.accent || "#5f685f";
}

function getSearchLabel(parts: Array<string | undefined>) {
  return parts
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function buildKnowledgeGraph(locale: Locale): KnowledgeGraphData {
  const categories = getCategories(locale).filter((category) => !["about", "resources"].includes(category.slug));
  const articles = getAllArticles(locale).filter(
    (article) => !article.isHub && article.category !== "about" && article.category !== "resources"
  );

  const categoryNodes = categories.map((category, index) => {
    const angle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
    const color = getNodeColor(category.slug);

    return {
      id: `category:${category.slug}`,
      type: "category" as const,
      label: `${category.emoji} ${category.title}`,
      searchLabel: getSearchLabel([category.title, category.slug, category.description]),
      href: category.href,
      color,
      x: CENTER_X + Math.cos(angle) * CATEGORY_RADIUS,
      y: CENTER_Y + Math.sin(angle) * CATEGORY_RADIUS,
      categoryId: category.slug,
      categoryLabel: category.title,
      description: category.description,
      articleCount: category.articleCount
    };
  });

  const categoryNodeBySlug = new Map(categoryNodes.map((node) => [node.categoryId!, node]));

  const articleNodes = categoryNodes.flatMap((categoryNode) => {
    const articlesInCategory = articles
      .filter((article) => article.category === categoryNode.categoryId)
      .sort((a, b) => a.title.localeCompare(b.title));

    const radialX = (categoryNode.x - CENTER_X) / CATEGORY_RADIUS;
    const radialY = (categoryNode.y - CENTER_Y) / CATEGORY_RADIUS;
    const tangentX = -radialY;
    const tangentY = radialX;

    return articlesInCategory.map((article, index) => {
      const row = Math.floor(index / ARTICLE_ROW_WIDTH);
      const slot = index % ARTICLE_ROW_WIDTH;
      const slotOffset = (slot - (Math.min(ARTICLE_ROW_WIDTH, articlesInCategory.length - row * ARTICLE_ROW_WIDTH) - 1) / 2) * ARTICLE_ROW_SPACING;
      const radialDistance = ARTICLE_BASE_DISTANCE + row * ARTICLE_RING_GAP;

      return {
        id: `article:${article.category}/${article.slug}`,
        type: "article" as const,
        label: article.title,
        searchLabel: getSearchLabel([
          article.title,
          article.category,
          categoryNode.categoryLabel,
          article.summary,
          article.description,
          article.excerpt
        ]),
        href: article.href,
        color: categoryNode.color,
        x: categoryNode.x + radialX * radialDistance + tangentX * slotOffset,
        y: categoryNode.y + radialY * radialDistance + tangentY * slotOffset,
        categoryId: article.category,
        categoryLabel: categoryNode.categoryLabel,
        description: article.description || article.excerpt,
        summary: article.summary || article.excerpt
      };
    });
  });

  const articleNodeByHref = new Map(articleNodes.map((node) => [node.href, node]));
  const edges: KnowledgeGraphEdge[] = [];

  for (const node of articleNodes) {
    const category = categoryNodeBySlug.get(node.categoryId!);
    if (!category) {
      continue;
    }

    edges.push({
      id: `category:${category.id}->${node.id}`,
      source: category.id,
      target: node.id,
      type: "category",
      color: node.color,
      weight: 1
    });
  }

  const relatedWeights = new Map<string, KnowledgeGraphEdge>();

  for (const article of articles) {
    const source = articleNodeByHref.get(article.href);
    if (!source) {
      continue;
    }

    for (const link of article.relatedLinks) {
      const target = articleNodeByHref.get(link.href);
      if (!target || target.id === source.id) {
        continue;
      }

      const [from, to] = [source.id, target.id].sort();
      const key = `${from}<->${to}`;
      const existing = relatedWeights.get(key);

      if (existing) {
        existing.weight += 1;
        continue;
      }

      relatedWeights.set(key, {
        id: `related:${key}`,
        source: from,
        target: to,
        type: "related",
        color: source.color,
        weight: 1
      });
    }
  }

  edges.push(...relatedWeights.values());

  return {
    center: {
      x: CENTER_X,
      y: CENTER_Y,
      label: "Sweden",
      sublabel: locale === "en" ? "Knowledge" : "Knowledge"
    },
    nodes: [...categoryNodes, ...articleNodes],
    edges,
    stats: {
      categoryCount: categoryNodes.length,
      articleCount: articleNodes.length,
      relatedEdgeCount: relatedWeights.size
    }
  };
}
