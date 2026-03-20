export interface ResourceSite {
  name: string;
  url: string;
  domain: string;
}

export interface ResourceCluster {
  id: string;
  label: string;
  color: string;
  sites: ResourceSite[];
}

export const resourceClustersZh: ResourceCluster[] = [
  {
    id: "government",
    label: "🏛️ 國家治理",
    color: "#2e5741",
    sites: [
      { name: "Government Offices of Sweden", url: "https://www.government.se/", domain: "government.se" },
      { name: "The Riksdag", url: "https://www.riksdagen.se/", domain: "riksdagen.se" },
      { name: "Swedish Public Employment Service", url: "https://arbetsformedlingen.se/", domain: "arbetsformedlingen.se" },
      { name: "Swedish Migration Agency", url: "https://www.migrationsverket.se/", domain: "migrationsverket.se" }
    ]
  },
  {
    id: "statistics",
    label: "📊 統計與研究",
    color: "#c1631d",
    sites: [
      { name: "Statistics Sweden", url: "https://www.scb.se/en/", domain: "scb.se" },
      { name: "Swedish National Heritage Board", url: "https://www.raa.se/in-english/", domain: "raa.se" },
      { name: "Swedish Institute", url: "https://si.se/en/", domain: "si.se" },
      { name: "Vinnova", url: "https://www.vinnova.se/en/", domain: "vinnova.se" }
    ]
  },
  {
    id: "culture",
    label: "🎭 文化與公共機構",
    color: "#7a5a9b",
    sites: [
      { name: "Sweden.se", url: "https://sweden.se/", domain: "sweden.se" },
      { name: "Nationalmuseum", url: "https://www.nationalmuseum.se/en", domain: "nationalmuseum.se" },
      { name: "Moderna Museet", url: "https://www.modernamuseet.se/stockholm/en/", domain: "modernamuseet.se" },
      { name: "Nordic Museum", url: "https://www.nordiskamuseet.se/en", domain: "nordiskamuseet.se" }
    ]
  },
  {
    id: "society",
    label: "🌍 社會與公共生活",
    color: "#436b91",
    sites: [
      { name: "Försäkringskassan", url: "https://www.forsakringskassan.se/english", domain: "forsakringskassan.se" },
      { name: "Swedish Association of Local Authorities and Regions", url: "https://skr.se/skr/englishpages.411.html", domain: "skr.se" },
      { name: "The Public Health Agency of Sweden", url: "https://www.folkhalsomyndigheten.se/the-public-health-agency-of-sweden/", domain: "folkhalsomyndigheten.se" },
      { name: "Swedish Gender Equality Agency", url: "https://jamstalldhetsmyndigheten.se/en/", domain: "jamstalldhetsmyndigheten.se" }
    ]
  },
  {
    id: "education",
    label: "🎓 教育與知識系統",
    color: "#8a6b2d",
    sites: [
      { name: "Stockholm University", url: "https://www.su.se/english/", domain: "su.se" },
      { name: "Uppsala University", url: "https://www.uu.se/en", domain: "uu.se" },
      { name: "Lund University", url: "https://www.lunduniversity.lu.se/", domain: "lu.se" },
      { name: "KTH Royal Institute of Technology", url: "https://www.kth.se/en", domain: "kth.se" }
    ]
  },
  {
    id: "nature",
    label: "🌲 自然與地景",
    color: "#3f7a54",
    sites: [
      { name: "Swedish Environmental Protection Agency", url: "https://www.naturvardsverket.se/en/", domain: "naturvardsverket.se" },
      { name: "Swedish Meteorological and Hydrological Institute", url: "https://www.smhi.se/en", domain: "smhi.se" },
      { name: "Visit Sweden", url: "https://visitsweden.com/", domain: "visitsweden.com" },
      { name: "Swedish Forest Agency", url: "https://www.skogsstyrelsen.se/en/", domain: "skogsstyrelsen.se" }
    ]
  }
];

export const resourceClustersEn = resourceClustersZh.map((cluster) => ({
  ...cluster,
  label:
    {
      government: "🏛️ Governance",
      statistics: "📊 Data and Research",
      culture: "🎭 Culture and Public Institutions",
      society: "🌍 Society and Public Life",
      education: "🎓 Education",
      nature: "🌲 Nature and Landscape"
    }[cluster.id] || cluster.label
}));
