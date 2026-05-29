export type ElectionLocale = "zh-TW" | "en";

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface ElectionParty {
  shortName: string;
  name: LocalizedText;
  family: LocalizedText;
  role: LocalizedText;
  seats2022: number;
  tone: "red" | "blue" | "green" | "yellow" | "neutral";
}

export interface ElectionArticleLink {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const electionDate = "2026-09-13";

export const electionParties: ElectionParty[] = [
  {
    shortName: "S",
    name: { zh: "社會民主黨", en: "Social Democrats" },
    family: { zh: "社會民主／勞工運動", en: "Social-democratic labour movement" },
    role: { zh: "最大在野黨，也是任何中左替代政府的核心。", en: "Largest opposition party and core of any centre-left alternative." },
    seats2022: 107,
    tone: "red"
  },
  {
    shortName: "SD",
    name: { zh: "瑞典民主黨", en: "Sweden Democrats" },
    family: { zh: "民族保守／移民與治安議題", en: "National-conservative migration and order politics" },
    role: { zh: "右派最大支持黨，不入閣但深度影響政府政策基礎。", en: "Largest right-bloc support party, outside cabinet but central to policy." },
    seats2022: 73,
    tone: "yellow"
  },
  {
    shortName: "M",
    name: { zh: "溫和黨", en: "Moderate Party" },
    family: { zh: "自由保守／財政與治安治理", en: "Liberal-conservative fiscal and security governance" },
    role: { zh: "現任首相政黨，右派內閣的主導者。", en: "Prime minister's party and leader of the right-of-centre cabinet." },
    seats2022: 68,
    tone: "blue"
  },
  {
    shortName: "V",
    name: { zh: "左翼黨", en: "Left Party" },
    family: { zh: "民主社會主義／福利與平等", en: "Democratic-socialist welfare and equality politics" },
    role: { zh: "推動福利、勞動與分配議題，但也讓中左組閣更需要協調。", en: "Pushes welfare and distribution, while complicating centre-left bargaining." },
    seats2022: 24,
    tone: "red"
  },
  {
    shortName: "C",
    name: { zh: "中間黨", en: "Centre Party" },
    family: { zh: "農村自由主義／地方與企業", en: "Agrarian-liberal local and business politics" },
    role: { zh: "拒絕極端化政治，但在中左與中右之間承擔高張力位置。", en: "Rejects polarisation but sits in a high-tension position between blocs." },
    seats2022: 24,
    tone: "green"
  },
  {
    shortName: "KD",
    name: { zh: "基督教民主黨", en: "Christian Democrats" },
    family: { zh: "基督教民主／家庭、照護與價值政治", en: "Christian-democratic family, care, and value politics" },
    role: { zh: "右派內閣成員，常把照護、家庭與價值議題帶進政府敘事。", en: "Cabinet party connecting care, family, and value politics to the right bloc." },
    seats2022: 19,
    tone: "yellow"
  },
  {
    shortName: "MP",
    name: { zh: "綠黨", en: "Green Party" },
    family: { zh: "環境政治／氣候與城市進步派", en: "Environmental politics, climate, and urban progressivism" },
    role: { zh: "氣候與環境議題的核心政黨，也常受門檻壓力牽動。", en: "Core climate and environment party, often shaped by threshold pressure." },
    seats2022: 18,
    tone: "green"
  },
  {
    shortName: "L",
    name: { zh: "自由黨", en: "Liberals" },
    family: { zh: "自由主義／學校、歐盟與個人自由", en: "Liberal school, EU, and individual-freedom politics" },
    role: { zh: "右派內閣中最自由主義的政黨，也是右派合作的張力點之一。", en: "Most liberal cabinet party and one of the right bloc's tension points." },
    seats2022: 16,
    tone: "blue"
  }
];

export const electionIssues = [
  {
    title: { zh: "移民、整合與治安", en: "Migration, integration, and public safety" },
    text: {
      zh: "這不是單一治安議題，而是住宅、學校、地方服務、司法與福利資格一起被政治化。",
      en: "This is not only a policing issue; housing, schools, local services, justice, and welfare access are tied together."
    }
  },
  {
    title: { zh: "經濟、家庭成本與福利國", en: "Economy, household costs, and the welfare state" },
    text: {
      zh: "通膨、利率、地方財政與公共服務品質，會一起測試瑞典人對福利國的信任。",
      en: "Inflation, rates, local finances, and service quality together test confidence in the welfare state."
    }
  },
  {
    title: { zh: "能源、氣候與產業轉型", en: "Energy, climate, and industrial transition" },
    text: {
      zh: "核能、風電、電網與北部工業投資，讓氣候政治變成國家競爭力問題。",
      en: "Nuclear power, wind, grids, and northern industrial investment turn climate politics into a competitiveness question."
    }
  },
  {
    title: { zh: "北約、總體防衛與韌性", en: "NATO, total defence, and resilience" },
    text: {
      zh: "加入北約後，安全政策不再只是外交議題，也進入預算、基礎設施與公民準備。",
      en: "After NATO accession, security policy reaches budgets, infrastructure, and civil preparedness."
    }
  }
];

export const electionArticleLinks: ElectionArticleLink[] = [
  {
    slug: "election-2026-overview",
    title: { zh: "瑞典 2026 大選總覽", en: "Sweden 2026 Election Overview" },
    description: {
      zh: "先讀投票日、三層選舉與選後組閣節奏。",
      en: "Start with election day, the three election levels, and post-election formation."
    }
  },
  {
    slug: "election-2026-party-system",
    title: { zh: "瑞典八大國會政黨總覽", en: "Sweden's Eight Riksdag Parties" },
    description: {
      zh: "用政黨家族、席次角色與陣營關係讀懂八黨格局。",
      en: "Read the eight-party system through party families, seat roles, and bloc relations."
    }
  },
  {
    slug: "election-2026-right-bloc",
    title: { zh: "Tidö 協議之後的右派陣營", en: "The Right Bloc After the Tido Agreement" },
    description: {
      zh: "理解現任政府、支持黨與右派政策重心。",
      en: "Understand the current cabinet, support party, and right-bloc policy gravity."
    }
  },
  {
    slug: "election-2026-opposition-alternative",
    title: { zh: "社民黨、左翼、綠黨與中間派的替代政府問題", en: "The Alternative Government Problem" },
    description: {
      zh: "反對政府不等於自動組成政府，關鍵在政策距離。",
      en: "Opposition does not automatically become a governing alternative."
    }
  },
  {
    slug: "election-2026-issue-map",
    title: { zh: "2026 大選議題地圖", en: "2026 Election Issue Map" },
    description: {
      zh: "看治安、福利、能源、氣候與防衛如何交纏。",
      en: "Map how security, welfare, energy, climate, and defence interact."
    }
  },
  {
    slug: "election-2026-government-formation",
    title: { zh: "選後如何組政府", en: "How Sweden Forms a Government" },
    description: {
      zh: "用 4% 門檻、175 席多數線與支持協議理解選後政治。",
      en: "Use the threshold, majority line, and support deals to understand formation."
    }
  }
];

export const electionSources = [
  {
    label: "Valmyndigheten: Val 2026",
    href: "https://www.val.se/kommande-val/val-2026---riksdag-region-och-kommun"
  },
  {
    label: "Sveriges riksdag: Valet 2026",
    href: "https://www.riksdagen.se/sv/aktuellt/valet-2026/"
  },
  {
    label: "Sveriges riksdag: The parties in the Riksdag",
    href: "https://www.riksdagen.se/en/members-and-parties/the-parties-in-the-riksdag/"
  },
  {
    label: "SCB: Party Preference Survey (PSU)",
    href: "https://www.scb.se/en/finding-statistics/statistics-by-subject-area/democracy/political-party-preferences/party-preference-survey-psu/"
  },
  {
    label: "Swedish National Election Studies Program",
    href: "https://www.gu.se/en/swedish-national-election-studies"
  }
];

export function t(text: LocalizedText, locale: ElectionLocale) {
  return locale === "en" ? text.en : text.zh;
}
