export type ElectionLocale = "zh-TW" | "en";

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface VisualNode {
  zh: string;
  en: string;
  tone: "red" | "blue" | "green" | "yellow" | "neutral";
}

export interface ElectionVisualCard {
  articleSlug: string;
  diagram: "timeline" | "layers" | "flow" | "spectrum" | "parliament" | "archive" | "network" | "axis" | "table" | "puzzle" | "balance" | "bridge" | "issueGrid" | "threshold" | "majority" | "support";
  eyebrow: LocalizedText;
  title: LocalizedText;
  caption: LocalizedText;
  nodes: VisualNode[];
  sourceNote: LocalizedText;
}

export const electionVisualCards: ElectionVisualCard[] = [
  {
    articleSlug: "election-2026-overview",
    diagram: "timeline",
    eyebrow: { zh: "時間軸", en: "Timeline" },
    title: { zh: "大選不是一天，而是一段程序", en: "The election is a process, not only one day" },
    caption: {
      zh: "先理解登記、提前投票、投票日、初步結果與最終結果，瑞典大選才不會被誤讀成選舉夜的單一勝負。",
      en: "Registration, advance voting, election day, preliminary counts, and final results form one administrative sequence."
    },
    nodes: [
      { zh: "選前準備", en: "Preparation", tone: "neutral" },
      { zh: "提前投票", en: "Advance voting", tone: "blue" },
      { zh: "投票日", en: "Election day", tone: "red" },
      { zh: "最終結果", en: "Final result", tone: "green" }
    ],
    sourceNote: { zh: "選務時程以 Valmyndigheten 公告為準。", en: "Election timing follows the Swedish Election Authority." }
  },
  {
    articleSlug: "election-2026-overview",
    diagram: "layers",
    eyebrow: { zh: "三層選舉", en: "Three elections" },
    title: { zh: "同一天改選三個治理層級", en: "Three levels are elected on the same day" },
    caption: {
      zh: "國會決定政府基礎，區域與市鎮則直接影響醫療、交通、學校、照護與地方服務。",
      en: "The Riksdag shapes national government, while regions and municipalities shape services close to daily life."
    },
    nodes: [
      { zh: "國會", en: "Riksdag", tone: "blue" },
      { zh: "區域", en: "Regions", tone: "green" },
      { zh: "市鎮", en: "Municipalities", tone: "yellow" }
    ],
    sourceNote: { zh: "2026 年為國會、區域與市鎮同日選舉。", en: "2026 covers national, regional, and municipal elections." }
  },
  {
    articleSlug: "election-2026-overview",
    diagram: "flow",
    eyebrow: { zh: "從投票到組閣", en: "Vote to cabinet" },
    title: { zh: "選票先變席次，席次再變談判", en: "Votes become seats, then bargaining power" },
    caption: {
      zh: "瑞典選舉的關鍵不是誰先宣稱勝利，而是哪組政黨能在國會中容忍或支持一個政府。",
      en: "The key is not a victory claim, but which parties can tolerate or support a cabinet in parliament."
    },
    nodes: [
      { zh: "選票", en: "Votes", tone: "neutral" },
      { zh: "席次", en: "Seats", tone: "blue" },
      { zh: "談判", en: "Negotiation", tone: "yellow" },
      { zh: "政府", en: "Government", tone: "green" }
    ],
    sourceNote: { zh: "組閣規則參照 Riksdag 說明。", en: "Cabinet formation follows Riksdag rules." }
  },
  {
    articleSlug: "election-2026-party-system",
    diagram: "spectrum",
    eyebrow: { zh: "政黨光譜", en: "Party spectrum" },
    title: { zh: "八黨格局不是單純左右線", en: "Eight parties cannot be reduced to one line" },
    caption: {
      zh: "瑞典政黨競爭同時有左右、城鄉、移民、氣候、福利、治理能力等多條軸線。",
      en: "Party competition involves left-right politics, urban-rural tensions, migration, climate, welfare, and governing credibility."
    },
    nodes: [
      { zh: "左翼", en: "Left", tone: "red" },
      { zh: "中間", en: "Centre", tone: "green" },
      { zh: "自由保守", en: "Liberal-conservative", tone: "blue" },
      { zh: "民族保守", en: "National-conservative", tone: "yellow" }
    ],
    sourceNote: { zh: "政黨席次以 Riksdag 政黨頁為基準。", en: "Party-seat baseline uses the Riksdag party page." }
  },
  {
    articleSlug: "election-2026-party-system",
    diagram: "parliament",
    eyebrow: { zh: "席次角色", en: "Seat roles" },
    title: { zh: "席次大小與政治角色不完全相同", en: "Seat size and political role are not identical" },
    caption: {
      zh: "有些政黨靠席次量體定義陣營，有些政黨則靠過半邊界、協議位置或組閣必要性取得影響力。",
      en: "Influence can come from size, bloc arithmetic, agreement status, or being necessary for cabinet formation."
    },
    nodes: [
      { zh: "大黨", en: "Large parties", tone: "red" },
      { zh: "支撐黨", en: "Support parties", tone: "blue" },
      { zh: "門檻黨", en: "Threshold parties", tone: "yellow" },
      { zh: "議題黨", en: "Issue parties", tone: "green" }
    ],
    sourceNote: { zh: "以 2022 選後國會格局作為 2026 前一屆基準。", en: "Uses the post-2022 Riksdag as the pre-2026 baseline." }
  },
  {
    articleSlug: "election-2026-party-system",
    diagram: "archive",
    eyebrow: { zh: "政治家族", en: "Political families" },
    title: { zh: "政黨背後有社會記憶", en: "Parties carry social memory" },
    caption: {
      zh: "勞工運動、農村自由主義、保守國家觀、環境政治與福利國想像，都還留在今天的政黨語言裡。",
      en: "Labour, agrarian liberalism, conservatism, environmental politics, and welfare-state memory still shape party language."
    },
    nodes: [
      { zh: "勞工", en: "Labour", tone: "red" },
      { zh: "農村", en: "Rural", tone: "green" },
      { zh: "保守", en: "Conservative", tone: "blue" },
      { zh: "環境", en: "Green", tone: "yellow" }
    ],
    sourceNote: { zh: "用作政黨歷史脈絡示意，非政黨標誌。", en: "Contextual diagram, not party branding." }
  },
  {
    articleSlug: "election-2026-right-bloc",
    diagram: "network",
    eyebrow: { zh: "政府與支持", en: "Government and support" },
    title: { zh: "政府在內，支持黨在外，但政策一起談", en: "Cabinet inside, support party outside" },
    caption: {
      zh: "Tidö 協議讓右派政府不只看內閣組成，也要看在國會外部支持政府的政黨如何交換政策。",
      en: "The Tido Agreement makes support outside cabinet central to understanding the government's policy base."
    },
    nodes: [
      { zh: "內閣", en: "Cabinet", tone: "blue" },
      { zh: "支持協議", en: "Support deal", tone: "yellow" },
      { zh: "國會票數", en: "Parliamentary votes", tone: "green" },
      { zh: "政策交換", en: "Policy exchange", tone: "red" }
    ],
    sourceNote: { zh: "參照政府組成與 Tidö 協議脈絡。", en: "Based on the cabinet and Tido Agreement context." }
  },
  {
    articleSlug: "election-2026-right-bloc",
    diagram: "axis",
    eyebrow: { zh: "政策重心", en: "Policy gravity" },
    title: { zh: "移民與治安成為右派共同語言", en: "Migration and order became shared right-bloc language" },
    caption: {
      zh: "右派陣營的共同點不是每個議題都一致，而是移民、犯罪與執法能力成為最強的整合軸線。",
      en: "The bloc is not uniform on every issue, but migration, crime, and state capacity became a binding axis."
    },
    nodes: [
      { zh: "移民", en: "Migration", tone: "yellow" },
      { zh: "治安", en: "Public order", tone: "blue" },
      { zh: "司法", en: "Justice", tone: "neutral" },
      { zh: "福利資格", en: "Welfare access", tone: "green" }
    ],
    sourceNote: { zh: "政策描述應以政府與政黨文件定期校正。", en: "Policy claims should be refreshed against official documents." }
  },
  {
    articleSlug: "election-2026-right-bloc",
    diagram: "table",
    eyebrow: { zh: "內部張力", en: "Internal tension" },
    title: { zh: "右派多數也需要持續協調", en: "A right majority still needs coordination" },
    caption: {
      zh: "自由主義、基督教民主、保守與民族保守之間有共同利益，也有歐盟、氣候、市場與價值政治的差異。",
      en: "Liberal, Christian-democratic, conservative, and national-conservative priorities overlap but do not disappear."
    },
    nodes: [
      { zh: "自由", en: "Liberal", tone: "blue" },
      { zh: "保守", en: "Conservative", tone: "neutral" },
      { zh: "基民", en: "Christian democratic", tone: "yellow" },
      { zh: "民族保守", en: "National conservative", tone: "red" }
    ],
    sourceNote: { zh: "此卡示意陣營張力，不等同政黨正式分類。", en: "This visual is analytical, not an official party classification." }
  },
  {
    articleSlug: "election-2026-opposition-alternative",
    diagram: "puzzle",
    eyebrow: { zh: "反對陣營拼圖", en: "Opposition puzzle" },
    title: { zh: "反對不是自然等於替代政府", en: "Opposition does not automatically form an alternative" },
    caption: {
      zh: "社民、左翼、綠黨與中間派可能共同反對政府，但組成可執政替代方案還要處理政策距離。",
      en: "Shared opposition to the government still leaves policy distance to solve before a governing alternative exists."
    },
    nodes: [
      { zh: "社民", en: "Social democratic", tone: "red" },
      { zh: "左翼", en: "Left", tone: "red" },
      { zh: "綠黨", en: "Green", tone: "green" },
      { zh: "中間", en: "Centre", tone: "yellow" }
    ],
    sourceNote: { zh: "以可能組閣關係作為分析框架。", en: "Uses potential cabinet relations as the analytical frame." }
  },
  {
    articleSlug: "election-2026-opposition-alternative",
    diagram: "balance",
    eyebrow: { zh: "議題分工", en: "Issue division" },
    title: { zh: "福利、氣候與財政紀律互相牽動", en: "Welfare, climate, and fiscal discipline pull together" },
    caption: {
      zh: "替代政府若要成形，必須把福利承諾、氣候轉型、稅制與企業環境放在同一張桌上。",
      en: "Any alternative must fit welfare promises, climate transition, taxation, and business conditions into one package."
    },
    nodes: [
      { zh: "福利", en: "Welfare", tone: "red" },
      { zh: "氣候", en: "Climate", tone: "green" },
      { zh: "財政", en: "Fiscal rules", tone: "blue" },
      { zh: "企業", en: "Business", tone: "yellow" }
    ],
    sourceNote: { zh: "議題分類用於閱讀導引。", en: "Issue grouping is for reading guidance." }
  },
  {
    articleSlug: "election-2026-opposition-alternative",
    diagram: "bridge",
    eyebrow: { zh: "組閣難題", en: "Formation challenge" },
    title: { zh: "跨過橋以前，先要決定誰能同行", en: "Before crossing, parties must decide who can walk together" },
    caption: {
      zh: "選後談判不只看席次，也看政黨願不願意被同一份政府基礎文件綁在一起。",
      en: "Post-election bargaining depends on whether parties can accept the same governing basis."
    },
    nodes: [
      { zh: "席次", en: "Seats", tone: "neutral" },
      { zh: "政策", en: "Policy", tone: "green" },
      { zh: "信任", en: "Trust", tone: "blue" },
      { zh: "首相", en: "Prime minister", tone: "red" }
    ],
    sourceNote: { zh: "組閣程序參照 Riksdag 首相任命規則。", en: "Cabinet formation follows Riksdag PM rules." }
  },
  {
    articleSlug: "election-2026-issue-map",
    diagram: "issueGrid",
    eyebrow: { zh: "移民與治安", en: "Migration and safety" },
    title: { zh: "安全議題同時是社會政策議題", en: "Security is also social policy" },
    caption: {
      zh: "犯罪、住宅分化、學校、移民整合與警政能力在 2026 選戰中很難被分開討論。",
      en: "Crime, housing segregation, schools, integration, and policing are difficult to separate in the campaign."
    },
    nodes: [
      { zh: "治安", en: "Safety", tone: "blue" },
      { zh: "住宅", en: "Housing", tone: "yellow" },
      { zh: "學校", en: "Schools", tone: "green" },
      { zh: "整合", en: "Integration", tone: "red" }
    ],
    sourceNote: { zh: "議題互動需搭配政黨政綱與官方統計閱讀。", en: "Read issue links together with party platforms and statistics." }
  },
  {
    articleSlug: "election-2026-issue-map",
    diagram: "balance",
    eyebrow: { zh: "經濟與福利", en: "Economy and welfare" },
    title: { zh: "家庭成本壓力會回到福利國問題", en: "Household pressure returns to welfare politics" },
    caption: {
      zh: "物價、利率、地方服務與稅負會一起決定選民如何判斷福利國是否仍然可靠。",
      en: "Prices, interest rates, local services, and taxation shape how voters judge welfare-state reliability."
    },
    nodes: [
      { zh: "物價", en: "Prices", tone: "yellow" },
      { zh: "利率", en: "Rates", tone: "blue" },
      { zh: "地方服務", en: "Local services", tone: "green" },
      { zh: "稅負", en: "Tax", tone: "red" }
    ],
    sourceNote: { zh: "經濟資料應搭配 SCB 與政府預算文件更新。", en: "Economic context should be refreshed with SCB and budget documents." }
  },
  {
    articleSlug: "election-2026-issue-map",
    diagram: "layers",
    eyebrow: { zh: "能源、氣候與防衛", en: "Energy, climate, defence" },
    title: { zh: "安全不只在邊境，也在電網與韌性", en: "Security also lives in grids and resilience" },
    caption: {
      zh: "北約、總體防衛、能源供應與氣候轉型，正在把傳統左右議題拉進新的安全框架。",
      en: "NATO, total defence, energy supply, and climate transition pull old left-right debates into a security frame."
    },
    nodes: [
      { zh: "北約", en: "NATO", tone: "blue" },
      { zh: "電力", en: "Power", tone: "yellow" },
      { zh: "氣候", en: "Climate", tone: "green" },
      { zh: "韌性", en: "Resilience", tone: "neutral" }
    ],
    sourceNote: { zh: "安全與能源敘事需避免把政策選項寫成單一答案。", en: "Security and energy framing should avoid treating policy options as a single answer." }
  },
  {
    articleSlug: "election-2026-government-formation",
    diagram: "threshold",
    eyebrow: { zh: "4% 門檻", en: "4 percent threshold" },
    title: { zh: "小幅得票變化也可能改變整個組閣算術", en: "Small vote shifts can change cabinet arithmetic" },
    caption: {
      zh: "全國 4% 門檻讓接近門檻的政黨不只是小黨，而可能成為陣營能否過半的關鍵。",
      en: "The national threshold can make smaller parties decisive for whether a bloc can govern."
    },
    nodes: [
      { zh: "門檻前", en: "Before threshold", tone: "neutral" },
      { zh: "進入國會", en: "Representation", tone: "green" },
      { zh: "失去席次", en: "No seats", tone: "red" }
    ],
    sourceNote: { zh: "門檻規則參照 Riksdag 與 Valmyndigheten。", en: "Threshold rules follow Riksdag and the Election Authority." }
  },
  {
    articleSlug: "election-2026-government-formation",
    diagram: "majority",
    eyebrow: { zh: "多數線", en: "Majority line" },
    title: { zh: "349 席國會裡，175 席是政治分水嶺", en: "In a 349-seat Riksdag, 175 is the dividing line" },
    caption: {
      zh: "瑞典政府不一定自己掌握多數，但若有 175 席明確反對，首相就很難成立或維持政府。",
      en: "A cabinet need not control a majority, but 175 votes against it can block or remove it."
    },
    nodes: [
      { zh: "支持", en: "Support", tone: "green" },
      { zh: "容忍", en: "Tolerate", tone: "yellow" },
      { zh: "反對", en: "Oppose", tone: "red" }
    ],
    sourceNote: { zh: "負面議會主義邏輯參照 Riksdag 組閣說明。", en: "Negative parliamentarism follows Riksdag formation rules." }
  },
  {
    articleSlug: "election-2026-government-formation",
    diagram: "support",
    eyebrow: { zh: "支持協議", en: "Support agreement" },
    title: { zh: "少數政府靠可預期的支持活下去", en: "Minority cabinets survive through predictable support" },
    caption: {
      zh: "支持協議把沒有入閣的政黨放進政策交換，讓政府能通過預算與核心法案。",
      en: "Support agreements bring non-cabinet parties into policy exchange so budgets and core bills can pass."
    },
    nodes: [
      { zh: "少數內閣", en: "Minority cabinet", tone: "blue" },
      { zh: "外部支持", en: "External support", tone: "yellow" },
      { zh: "預算", en: "Budget", tone: "green" },
      { zh: "法案", en: "Bills", tone: "neutral" }
    ],
    sourceNote: { zh: "用於解釋議會支持安排，非特定協議全文摘要。", en: "Explains parliamentary support, not a full agreement summary." }
  }
];

export function localizeText(text: LocalizedText, locale: ElectionLocale) {
  return locale === "en" ? text.en : text.zh;
}

export function getElectionVisualCards(articleSlug: string) {
  return electionVisualCards.filter((card) => card.articleSlug === articleSlug);
}
