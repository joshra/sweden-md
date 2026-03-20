import type { APIRoute } from "astro";
import { getAllArticles } from "../utils/content";

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = () => {
  const site = "https://sweden.com.tw";
  const latest = getAllArticles("zh-TW")
    .filter((article) => !article.isHub)
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
    .slice(0, 25);

  const items = latest
    .map(
      (article) => `
  <item>
    <title>${xmlEscape(article.title)}</title>
    <link>${site}${article.href}</link>
    <guid>${site}${article.href}</guid>
    <description>${xmlEscape(article.description || article.excerpt)}</description>
    <pubDate>${article.updatedAt.toUTCString()}</pubDate>
  </item>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Sweden.md</title>
  <link>${site}</link>
  <description>Curated knowledge about Sweden in Markdown-first editorial form.</description>
  <language>zh-TW</language>
  ${items}
</channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
