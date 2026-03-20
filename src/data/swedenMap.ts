export interface MapMarker {
  title: string;
  region: "north" | "central" | "south" | "far-north" | "coast";
  category: string;
  x: number;
  y: number;
  href: string;
  description: string;
}

export const mapMarkersZh: MapMarker[] = [
  {
    title: "斯德哥爾摩群島",
    region: "coast",
    category: "geography",
    x: 415,
    y: 185,
    href: "/geography/群島與湖泊景觀",
    description: "理解群島地景、夏屋文化與首都周邊空間想像的入口。"
  },
  {
    title: "Fika 城市日常",
    region: "north",
    category: "culture",
    x: 392,
    y: 205,
    href: "/culture/Fika與日常生活",
    description: "都市公共生活與工作節奏如何被咖啡館文化支撐。"
  },
  {
    title: "地方自治與市政政治",
    region: "north",
    category: "society",
    x: 380,
    y: 240,
    href: "/society/地方自治與市政政治",
    description: "瑞典的地方政府不是行政附屬，而是福利與公共服務的第一線。"
  },
  {
    title: "森林與公共可近性",
    region: "central",
    category: "nature",
    x: 350,
    y: 360,
    href: "/nature/森林與公共可近性",
    description: "Allemansrätten 讓自然接近性成為國民生活的一部分。"
  },
  {
    title: "出口工業與全球品牌",
    region: "central",
    category: "economy",
    x: 368,
    y: 410,
    href: "/economy/出口工業與全球品牌",
    description: "中型國家如何透過工業與外向市場維持國際能見度。"
  },
  {
    title: "中夏節與季節儀式",
    region: "central",
    category: "culture",
    x: 340,
    y: 445,
    href: "/culture/中夏節與季節儀式",
    description: "長冬長夏的節奏如何塑造集體時間感。"
  },
  {
    title: "瑞典科技生態",
    region: "south",
    category: "technology",
    x: 335,
    y: 585,
    href: "/technology/瑞典科技生態",
    description: "從工程傳統到數位平台，南部城市群也是創新網絡的一部分。"
  },
  {
    title: "設計文化與家居想像",
    region: "south",
    category: "art",
    x: 320,
    y: 625,
    href: "/culture/設計文化與家居想像",
    description: "家居、公共空間與設計語言如何共同塑造瑞典風格。"
  },
  {
    title: "北極圈與薩米地景",
    region: "far-north",
    category: "nature",
    x: 420,
    y: 105,
    href: "/nature/北極圈與薩米地景",
    description: "最北部地景揭示了國族邊界、原住民與資源治理的張力。"
  },
  {
    title: "從維京到福利國",
    region: "north",
    category: "history",
    x: 365,
    y: 275,
    href: "/history/從維京到福利國",
    description: "整張地圖背後的歷史長弧線。"
  }
];

export const mapMarkersEn: MapMarker[] = [
  {
    title: "Stockholm Archipelago",
    region: "coast",
    category: "geography",
    x: 415,
    y: 185,
    href: "/en/geography/Archipelagos-and-Lake-Landscapes",
    description: "An entry point into archipelago space, summer houses, and coastal imagination."
  },
  {
    title: "Fika in Urban Life",
    region: "north",
    category: "culture",
    x: 392,
    y: 205,
    href: "/en/culture/Fika-and-Everyday-Life",
    description: "How cafés and pauses shape everyday rhythm in Swedish cities."
  },
  {
    title: "Municipal Politics",
    region: "north",
    category: "society",
    x: 380,
    y: 240,
    href: "/en/society/Local-Government-and-Municipal-Politics",
    description: "Local government is where much of Swedish public life actually operates."
  },
  {
    title: "Forests and Public Access",
    region: "central",
    category: "nature",
    x: 350,
    y: 360,
    href: "/en/nature/Forests-and-Public-Access",
    description: "Public access rights make landscape part of social life."
  },
  {
    title: "Export Industry",
    region: "central",
    category: "economy",
    x: 368,
    y: 410,
    href: "/en/economy/Export-Industry-and-Global-Brands",
    description: "A medium-sized country sustaining visibility through outward industry."
  },
  {
    title: "Midsummer",
    region: "central",
    category: "culture",
    x: 340,
    y: 445,
    href: "/en/culture/Midsummer-and-Seasonal-Rituals",
    description: "Seasonal ritual as a shared social clock."
  },
  {
    title: "Tech Ecosystem",
    region: "south",
    category: "technology",
    x: 335,
    y: 585,
    href: "/en/technology/Sweden's-Technology-Ecosystem",
    description: "Industrial continuity and digital entrepreneurship in the south."
  },
  {
    title: "Design Culture",
    region: "south",
    category: "art",
    x: 320,
    y: 625,
    href: "/en/culture/Design-Culture-and-Domestic-Space",
    description: "Domestic design as a public cultural language."
  },
  {
    title: "Arctic Circle and Sami Landscapes",
    region: "far-north",
    category: "nature",
    x: 420,
    y: 105,
    href: "/en/nature/The-Arctic-Circle-and-Sami-Landscapes",
    description: "Northern landscape, indigenous space, and resource tension."
  },
  {
    title: "From Vikings to the Welfare State",
    region: "north",
    category: "history",
    x: 365,
    y: 275,
    href: "/en/history/From-Vikings-to-the-Welfare-State",
    description: "The historical arc behind the whole map."
  }
];
