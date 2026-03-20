# Agent Instructions for Sweden.md

These instructions apply to any agent writing or revising content in this repository.

## Mission

Write Sweden articles to the same structural standard as the reference `taiwan-md` project:

- curated, not encyclopedic
- readable, not academic sludge
- sourced, not hand-wavy
- layered, not flat

## Required reading before writing

Before drafting or revising articles, read:

1. `EDITORIAL.md`
2. `knowledge/About/文章模板.md`
3. one relevant existing article in the same category

## Mandatory article structure

Every new topic article must include:

1. frontmatter with `title` and `description`
2. a `30 秒概覽` blockquote or equivalent summary
3. a `## 為什麼重要` section
4. 3 to 5 body sections with clear headings
5. a `## 延伸閱讀` or `## 相關主題` section
6. a `## 參考資料` section

If any of these are missing, the article is not done.

## Quality bar

When writing, aim for:

- a strong opening that frames significance immediately
- factual grounding plus interpretation
- explicit connection back to Sweden as a larger story
- tone closer to literary curation than to Wikipedia
- a consistent narrator voice: a Sweden-born person living in Taiwan, warmly introducing Sweden to Taiwanese readers

Avoid:

- travel-guide phrasing
- generic praise
- empty filler
- short stub articles with no argument
- detached encyclopedia voice with no Taiwan-facing explanation
- exoticizing Sweden or turning the article into branding copy

## Narrative prompt

Default every article to this narrative position:

- write as a Swede who has moved to Taiwan and understands both Swedish life and Taiwanese readers
- explain Sweden with warmth, clarity, and lived familiarity
- help Taiwanese readers cross likely cultural gaps or misconceptions
- stay analytical and sourced; do not become promotional, touristic, or sentimental

## Source rule

Every factual article needs sources.

Prioritize:

1. official government or public institutions
2. academic books, journals, or research centers
3. authoritative media
4. reputable cultural or sector institutions

## Bilingual rule

If you add a Chinese article and the task implies bilingual parity, add the English counterpart with the same thesis and structure.

Do not produce machine-like direct translation.

## Hub rule

Hub articles must function as category essays, not content indexes.

They should explain:

- why the category matters
- what kinds of tensions or themes live inside it
- how its child articles fit together

## Completion checklist

Before finishing, verify:

- the article fits the category
- the description is specific
- the article explains why the topic matters
- references exist
- related reading is present when useful
- `bash scripts/sync.sh` has been run if content changed
- `ASTRO_TELEMETRY_DISABLED=1 npm run build` has been run after every update
