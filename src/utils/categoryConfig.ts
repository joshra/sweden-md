export interface CategoryConfig {
  slug: string;
  label: string;
  labelEn: string;
  emoji: string;
  description: string;
  descriptionEn: string;
  accent: string;
  accentSoft: string;
  staticRoute?: string;
}

export const categoryConfig: Record<string, CategoryConfig> = {
  about: {
    slug: "about",
    label: "關於",
    labelEn: "About",
    emoji: "ℹ️",
    description: "專案背景、編輯方向與方法。",
    descriptionEn: "Project framing, rationale, and editorial direction.",
    accent: "#6e5a47",
    accentSoft: "rgba(110, 90, 71, 0.14)",
    staticRoute: "/about"
  },
  art: {
    slug: "art",
    label: "藝術",
    labelEn: "Art",
    emoji: "🎨",
    description: "公共美學、電影、文學與北歐設計語言。",
    descriptionEn: "Public aesthetics, film, literature, and Nordic design language.",
    accent: "#91506e",
    accentSoft: "rgba(145, 80, 110, 0.14)"
  },
  culture: {
    slug: "culture",
    label: "文化",
    labelEn: "Culture",
    emoji: "☕",
    description: "從 fika、設計與季節儀式理解瑞典。",
    descriptionEn: "Design, fika, and the rhythms of everyday Swedish life.",
    accent: "#ac6238",
    accentSoft: "rgba(172, 98, 56, 0.14)"
  },
  cities: {
    slug: "cities",
    label: "城市",
    labelEn: "Cities",
    emoji: "🏙️",
    description: "從首都、港口、跨境都會到大學城，建立瑞典城市地圖。",
    descriptionEn: "Build a mental map of Sweden through its capital, port city, gateway metropolis, and university city.",
    accent: "#366b78",
    accentSoft: "rgba(54, 107, 120, 0.14)"
  },
  economy: {
    slug: "economy",
    label: "經濟",
    labelEn: "Economy",
    emoji: "📈",
    description: "出口導向工業、創新企業與勞資協商體制。",
    descriptionEn: "Export industry, innovation firms, and labor-capital bargaining.",
    accent: "#8f5c2d",
    accentSoft: "rgba(143, 92, 45, 0.14)"
  },
  food: {
    slug: "food",
    label: "美食",
    labelEn: "Food",
    emoji: "🍽️",
    description: "從家常料理到季節餐桌的瑞典飲食文化。",
    descriptionEn: "From home cooking to seasonal dining traditions.",
    accent: "#bf6d2d",
    accentSoft: "rgba(191, 109, 45, 0.14)"
  },
  geography: {
    slug: "geography",
    label: "地理",
    labelEn: "Geography",
    emoji: "🗺️",
    description: "從北極圈到南部農業帶的地理尺度。",
    descriptionEn: "Scale, latitude, and regional contrasts across Sweden.",
    accent: "#4d6c3d",
    accentSoft: "rgba(77, 108, 61, 0.14)"
  },
  history: {
    slug: "history",
    label: "歷史",
    labelEn: "History",
    emoji: "📜",
    description: "從維京敘事到福利國制度的長弧線。",
    descriptionEn: "A long institutional arc from early kingdoms to the welfare state.",
    accent: "#9e3d2d",
    accentSoft: "rgba(158, 61, 45, 0.14)"
  },
  lifestyle: {
    slug: "lifestyle",
    label: "生活",
    labelEn: "Lifestyle",
    emoji: "🕯️",
    description: "居住、育兒、工作節奏與季節性生活方式。",
    descriptionEn: "Housing, parenting, work rhythms, and seasonal living.",
    accent: "#708147",
    accentSoft: "rgba(112, 129, 71, 0.14)"
  },
  music: {
    slug: "music",
    label: "音樂",
    labelEn: "Music",
    emoji: "🎵",
    description: "流行音樂輸出、合唱傳統與聲音工業。",
    descriptionEn: "Pop exports, choir traditions, and the Swedish sound industry.",
    accent: "#4b688f",
    accentSoft: "rgba(75, 104, 143, 0.14)"
  },
  nature: {
    slug: "nature",
    label: "自然",
    labelEn: "Nature",
    emoji: "🌲",
    description: "森林、湖泊、群島與公共可近性。",
    descriptionEn: "Forests, lakes, archipelagos, and public access.",
    accent: "#3f7247",
    accentSoft: "rgba(63, 114, 71, 0.14)"
  },
  people: {
    slug: "people",
    label: "人物",
    labelEn: "People",
    emoji: "👤",
    description: "用代表人物打開瑞典的制度與文化面向。",
    descriptionEn: "Key figures who open windows into Swedish culture and institutions.",
    accent: "#8a6a40",
    accentSoft: "rgba(138, 106, 64, 0.14)"
  },
  resources: {
    slug: "resources",
    label: "資源",
    labelEn: "Resources",
    emoji: "📚",
    description: "官方網站與公共資料入口。",
    descriptionEn: "Official websites and public information entry points.",
    accent: "#70573d",
    accentSoft: "rgba(112, 87, 61, 0.14)",
    staticRoute: "/resources"
  },
  society: {
    slug: "society",
    label: "社會",
    labelEn: "Society",
    emoji: "🏛️",
    description: "福利制度、地方自治與高信任社會。",
    descriptionEn: "Welfare institutions, municipalities, and social trust.",
    accent: "#56688a",
    accentSoft: "rgba(86, 104, 138, 0.14)"
  },
  technology: {
    slug: "technology",
    label: "科技",
    labelEn: "Technology",
    emoji: "💻",
    description: "工業工程、創業與數位平台的連續性。",
    descriptionEn: "Industrial depth, startups, and digital platform influence.",
    accent: "#2f6682",
    accentSoft: "rgba(47, 102, 130, 0.14)"
  }
};

export function getCategoryConfig(slug: string) {
  return categoryConfig[slug];
}

export function isSpecialCategory(slug: string) {
  return Boolean(categoryConfig[slug]?.staticRoute);
}
