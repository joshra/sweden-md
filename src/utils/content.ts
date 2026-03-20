import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { categoryConfig, getCategoryConfig, isSpecialCategory } from "./categoryConfig";

const CONTENT_ROOT = path.join(process.cwd(), "src/content");

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface RelatedLink {
  title: string;
  href: string;
}

export interface Article {
  slug: string;
  category: string;
  locale: "zh-TW" | "en";
  title: string;
  description: string;
  body: string;
  html: string;
  path: string;
  isHub: boolean;
  summary: string;
  excerpt: string;
  headings: Heading[];
  relatedLinks: RelatedLink[];
  readingMinutes: number;
  href: string;
  updatedAt: Date;
}

export interface CategorySummary {
  slug: string;
  title: string;
  description: string;
  articleCount: number;
  href: string;
  emoji: string;
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir, { withFileTypes: true });
}

function filenameToSlug(filename: string) {
  return filename.replace(/\.md$/i, "").replace(/\s+/g, "-");
}

function slugifyHeading(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

function stripMarkdown(text: string) {
  return text
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_>#-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getArticleHref(locale: "zh-TW" | "en", category: string, slug: string) {
  return locale === "en" ? `/en/${category}/${slug}` : `/${category}/${slug}`;
}

function getCategoryHref(locale: "zh-TW" | "en", category: string) {
  const config = getCategoryConfig(category);
  if (config?.staticRoute) {
    return locale === "en" ? `/en/${category}` : config.staticRoute;
  }

  return locale === "en" ? `/en/${category}` : `/${category}`;
}

function getTitleLookup(locale: "zh-TW" | "en") {
  const localeRoot = path.join(CONTENT_ROOT, locale);
  const lookup = new Map<string, RelatedLink>();

  for (const categoryEntry of ensureDir(localeRoot).filter((entry) => entry.isDirectory())) {
    for (const fileEntry of ensureDir(path.join(localeRoot, categoryEntry.name)).filter(
      (entry) => entry.isFile() && entry.name.endsWith(".md")
    )) {
      const filePath = path.join(localeRoot, categoryEntry.name, fileEntry.name);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      const title = String(data.title || path.basename(filePath, ".md"));
      const slug = filenameToSlug(fileEntry.name);

      lookup.set(title, {
        title,
        href: fileEntry.name.startsWith("_")
          ? getCategoryHref(locale, categoryEntry.name)
          : getArticleHref(locale, categoryEntry.name, slug)
      });
    }
  }

  return lookup;
}

function extractSummary(content: string) {
  const match = content.match(
    />\s*(?:\*\*)?(?:30\s*秒概覽|30-second overview)[:：]?(?:\*\*)?\s*(.+)/i
  );
  return match ? stripMarkdown(match[1]) : "";
}

function extractHeadings(content: string) {
  return content
    .split("\n")
    .map((line) => line.match(/^(##|###)\s+(.+)$/))
    .filter(Boolean)
    .map((match) => {
      const level = match![1].length;
      const text = match![2].trim();

      return {
        level,
        text,
        id: slugifyHeading(text)
      };
    });
}

function replaceWikiLinks(content: string, titleLookup: Map<string, RelatedLink>) {
  const relatedLinks: RelatedLink[] = [];
  const seen = new Set<string>();

  const rendered = content.replace(/\[\[([^[\]]+)\]\]/g, (_, rawTitle: string) => {
    const title = rawTitle.trim();
    const target = titleLookup.get(title);

    if (target) {
      if (!seen.has(target.href)) {
        relatedLinks.push(target);
        seen.add(target.href);
      }

      return `[${title}](${target.href})`;
    }

    return title;
  });

  return { rendered, relatedLinks };
}

function injectHeadingAnchors(content: string) {
  return content.replace(/^(##|###)\s+(.+)$/gm, (_, hashes: string, rawText: string) => {
    const text = rawText.trim();
    const id = slugifyHeading(stripMarkdown(text));
    const level = hashes.length;

    return `<h${level} id="${id}">${text}</h${level}>`;
  });
}

function withoutSummaryBlock(content: string) {
  return content.replace(
    /^>\s*(?:\*\*)?(?:30\s*秒概覽|30-second overview)[:：]?.*(?:\n>.*)*\n*/i,
    ""
  );
}

function withoutTitleHeading(content: string, title: string) {
  const normalized = content.replace(/^\s+/, "");
  const headingPattern = new RegExp(`^#\\s+${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\n+`);
  return normalized.replace(headingPattern, "");
}

function getExcerpt(content: string, summary: string) {
  if (summary) {
    return summary;
  }

  const paragraphs = content
    .split("\n\n")
    .map((block) => stripMarkdown(block))
    .filter((block) => block && !block.startsWith("30 秒概覽") && !block.startsWith("##"));

  return paragraphs[0] || "";
}

function estimateReadingMinutes(content: string) {
  const wordCount = stripMarkdown(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / 180));
}

function parseArticle(
  filePath: string,
  locale: "zh-TW" | "en",
  category: string,
  titleLookup: Map<string, RelatedLink>
): Article {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const title = String(data.title || path.basename(filePath, ".md"));
  const description = String(data.description || "").trim();
  const body = withoutTitleHeading(content, title);
  const contentForHtml = withoutSummaryBlock(body);
  const summary = extractSummary(body);
  const excerpt = getExcerpt(body, summary);
  const headings = extractHeadings(body);
  const { rendered, relatedLinks } = replaceWikiLinks(contentForHtml, titleLookup);
  const anchored = injectHeadingAnchors(rendered);
  const slug = filenameToSlug(path.basename(filePath));
  const isHub = path.basename(filePath).startsWith("_");

  return {
    slug,
    category,
    locale,
    title,
    description,
    body,
    html: marked.parse(anchored) as string,
    path: filePath,
    isHub,
    summary,
    excerpt,
    headings,
    relatedLinks,
    readingMinutes: estimateReadingMinutes(body),
    href: isHub ? getCategoryHref(locale, category) : getArticleHref(locale, category, slug),
    updatedAt: fs.statSync(filePath).mtime
  };
}

export function getCategories(locale: "zh-TW" | "en"): CategorySummary[] {
  const localeRoot = path.join(CONTENT_ROOT, locale);
  const titleLookup = getTitleLookup(locale);

  return ensureDir(localeRoot)
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const category = entry.name;
      const articles = getArticlesByCategory(locale, category, titleLookup);
      const hub = articles.find((article) => article.isHub);
      const config = getCategoryConfig(category);

      return {
        slug: category,
        title: locale === "en" ? config?.labelEn || hub?.title || category : config?.label || hub?.title || category,
        description:
          locale === "en"
            ? config?.descriptionEn || hub?.description || `Articles in ${category}.`
            : config?.description || hub?.description || `${category} 文章列表。`,
        articleCount: articles.filter((article) => !article.isHub).length,
        href: getCategoryHref(locale, category),
        emoji: config?.emoji || "•"
      };
    })
    .sort(
      (a, b) =>
        Object.keys(categoryConfig).indexOf(a.slug) - Object.keys(categoryConfig).indexOf(b.slug)
    );
}

export function getDynamicCategories(locale: "zh-TW" | "en") {
  return getCategories(locale).filter((category) => !isSpecialCategory(category.slug));
}

export function getArticlesByCategory(
  locale: "zh-TW" | "en",
  category: string,
  titleLookup = getTitleLookup(locale)
): Article[] {
  const categoryRoot = path.join(CONTENT_ROOT, locale, category);

  return ensureDir(categoryRoot)
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => parseArticle(path.join(categoryRoot, entry.name), locale, category, titleLookup))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getArticle(locale: "zh-TW" | "en", category: string, slug: string) {
  return getArticlesByCategory(locale, category).find((article) => article.slug === slug);
}

export function getAllArticles(locale: "zh-TW" | "en") {
  return getCategories(locale).flatMap((category) => getArticlesByCategory(locale, category.slug));
}

export function getHomeArticle(locale: "zh-TW" | "en") {
  const homePath =
    locale === "zh-TW"
      ? path.join(CONTENT_ROOT, "zh-TW", "_Home.md")
      : path.join(CONTENT_ROOT, "en", "_Home.md");

  if (!fs.existsSync(homePath)) {
    return null;
  }

  return parseArticle(homePath, locale, "home", getTitleLookup(locale));
}

export function getSiteMetrics(locale: "zh-TW" | "en") {
  const categories = getCategories(locale);
  const articleCount = categories.reduce((sum, category) => sum + category.articleCount, 0);

  return {
    articleCount,
    categoryCount: categories.filter((category) => !isSpecialCategory(category.slug)).length,
    specialCount: categories.filter((category) => isSpecialCategory(category.slug)).length
  };
}

export function getFeaturedArticles(locale: "zh-TW" | "en") {
  const picks =
    locale === "en"
      ? [
          ["history", "From Vikings to the Welfare State"],
          ["society", "Welfare and Social Trust"],
          ["technology", "Sweden's Technology Ecosystem"],
          ["nature", "Forests and Public Access"],
          ["culture", "Fika and Everyday Life"]
        ]
      : [
          ["history", "從維京到福利國"],
          ["society", "福利國與高信任社會"],
          ["technology", "瑞典科技生態"],
          ["nature", "森林與公共可近性"],
          ["culture", "Fika與日常生活"]
        ];

  return picks
    .map(([category, title]) =>
      getArticlesByCategory(locale, category).find((article) => article.title === title)
    )
    .filter(Boolean) as Article[];
}
