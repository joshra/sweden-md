export interface CityPhoto {
  src: string;
  altZh: string;
  altEn: string;
  captionZh: string;
  captionEn: string;
  creditHref: string;
  creditLabel: string;
}

function commonsFile(name: string) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}`;
}

function commonsCredit(name: string) {
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(name)}`;
}

function photo(
  file: string,
  altZh: string,
  altEn: string,
  captionZh: string,
  captionEn: string,
  creditLabel = "Wikimedia Commons"
): CityPhoto {
  return {
    src: commonsFile(file),
    altZh,
    altEn,
    captionZh,
    captionEn,
    creditHref: commonsCredit(file),
    creditLabel
  };
}

const cityPhotoSets: Record<string, CityPhoto[]> = {
  stockholm: [
    photo(
      "Stockholm-City-Hall.jpg",
      "斯德哥爾摩市政廳",
      "Stockholm City Hall",
      "市政廳的磚塔是斯德哥爾摩最容易辨認的國家首都景象之一。",
      "The brick tower of City Hall is one of Stockholm's most recognizable capital images."
    ),
    photo(
      "Stockholm_Waterfront_Skyline_(16895152928).jpg",
      "斯德哥爾摩水岸天際線",
      "Stockholm waterfront skyline",
      "水岸與低中層街區交錯，正是斯德哥爾摩和其他首都最不一樣的地方。",
      "Waterfronts and mid-rise urban fabric are part of what makes Stockholm unlike many capitals."
    ),
    photo(
      "Stockholm_Gamla_stan.jpg",
      "斯德哥爾摩老城街景",
      "A street in Gamla stan",
      "老城不是孤立觀光區，而是首都歷史層次仍然可步行感受的地方。",
      "Gamla stan is not just a tourist quarter but a walkable layer of the capital's historical depth."
    )
  ],
  gothenburg: [
    photo(
      "Gothenburg_harbour_(20069994056).jpg",
      "哥德堡港景",
      "Gothenburg harbour",
      "港口與航道是哥德堡城市感的根部，不只是背景。",
      "Harbour infrastructure is part of Gothenburg's urban core, not just its backdrop."
    ),
    photo(
      "Kungsportsavenyn_in_Gothenburg.jpg",
      "哥德堡大街 Kungsportsavenyn",
      "Kungsportsavenyn in Gothenburg",
      "主街的尺度與人流，讓哥德堡帶有比首都更鬆動的西岸節奏。",
      "The scale of the main avenue helps explain Gothenburg's looser west-coast rhythm."
    ),
    photo(
      "GoteborgsOperan.jpg",
      "哥德堡歌劇院與水岸",
      "Gothenburg Opera House on the waterfront",
      "工業與文化並置，是哥德堡近年水岸轉型的重要視覺線索。",
      "The juxtaposition of industry and culture is central to Gothenburg's waterfront transition."
    )
  ],
  malmo: [
    photo(
      "Malmö_Turning_Torso_01.JPG",
      "馬爾默的 Turning Torso",
      "Turning Torso in Malmö",
      "Turning Torso 幾乎已成馬爾默後工業轉型的城市標誌。",
      "Turning Torso has become one of the clearest icons of Malmö's post-industrial transformation."
    ),
    photo(
      "Malmöhus_Castle.jpg",
      "馬爾默城堡",
      "Malmöhus Castle",
      "舊城堡提醒人們，這座城市的歷史深度遠比當代新開發區更早。",
      "Malmöhus reminds readers that the city long predates its newer redevelopment districts."
    ),
    photo(
      "Lilla_torg_Malmö.jpg",
      "馬爾默 Lilla torg",
      "Lilla torg in Malmö",
      "舊市中心的街景，和海邊更新區形成鮮明對照。",
      "The old square offers a strong contrast to Malmö's newer waterfront districts."
    )
  ],
  uppsala: [
    photo(
      "Uppsala_Cathedral.jpg",
      "烏普薩拉主教座堂",
      "Uppsala Cathedral",
      "主教座堂幾乎是整座城市歷史權威感的縮影。",
      "The cathedral condenses much of Uppsala's sense of historical authority."
    ),
    photo(
      "Uppsala_slott.jpg",
      "烏普薩拉城堡",
      "Uppsala Castle",
      "城堡和教堂一起，構成烏普薩拉比一般大學城更厚的歷史層次。",
      "Together with the cathedral, the castle gives Uppsala a historical weight beyond a typical university town."
    ),
    photo(
      "Fyrisån_i_Uppsala.jpg",
      "穿越烏普薩拉市區的 Fyris 河",
      "The Fyris River in central Uppsala",
      "沿著 Fyris 河行走，比任何抽象描述都更能理解這座城市的節奏。",
      "Walking along the Fyris River captures Uppsala's rhythm better than any abstract description."
    )
  ],
  helsingborg: [
    photo(
      "Helsingborg_town_hall.jpg",
      "赫爾辛堡市政廳",
      "Helsingborg Town Hall",
      "面向海峽的市政廳，直接呈現赫爾辛堡的邊境港城性格。",
      "The Town Hall facing the strait expresses Helsingborg's border-port character."
    ),
    photo(
      "Helsingborg-300px.jpg",
      "赫爾辛堡港區與市區",
      "Helsingborg harbour and urban core",
      "從高處看城市，更容易讀出港口、坡地與住宅區的緊密關係。",
      "A higher view makes the relationship between harbour, slopes, and neighbourhoods much easier to read."
    ),
    photo(
      "Kärnan_Helsingborg.jpg",
      "赫爾辛堡的 Kärnan 古塔",
      "Kärnan tower in Helsingborg",
      "Kärnan 讓赫爾辛堡的海峽城市感多了一層中世紀邊境記憶。",
      "Kärnan adds a medieval border-memory layer to Helsingborg's strait-facing identity."
    )
  ],
  linkoping: [
    photo(
      "Linköping_Cathedral.jpg",
      "林雪平主教座堂",
      "Linköping Cathedral",
      "老教堂提醒人們，林雪平不是突然出現的科技城，而是有長期城市歷史的地方。",
      "The cathedral reminds readers that Linköping is not a newly made tech city but a city with depth."
    ),
    photo(
      "Linkoping_University_Campus_Valla.jpg",
      "林雪平大學 Valla 校區",
      "Campus Valla at Linköping University",
      "校區尺度直接影響城市的人才流動與研發氣質。",
      "The university campus directly shapes Linköping's research atmosphere and talent flows."
    ),
    photo(
      "Saab_Aircraft_Linkoping.jpg",
      "林雪平的航空工業景象",
      "Aviation industry in Linköping",
      "航空工業讓這座城市的科技感更偏向工程與製造，而不只是新創敘事。",
      "The aviation sector gives Linköping an engineering-and-manufacturing tech identity rather than a startup-only image."
    )
  ],
  norrkoping: [
    photo(
      "Norrköping_industrial_landscape.jpg",
      "諾爾雪平的工業景觀",
      "Norrköping industrial landscape",
      "保留下來的工業景觀，是諾爾雪平最重要的城市記憶。",
      "The preserved industrial landscape remains one of Norrköping's defining urban memories."
    ),
    photo(
      "Norrköping_city_hall.jpg",
      "諾爾雪平市政廳",
      "Norrköping City Hall",
      "行政中心與舊工業區並置，是這座轉型城市的典型畫面。",
      "The coexistence of civic administration and old industrial districts is typical of the city."
    ),
    photo(
      "Campus_Norrköping.jpg",
      "諾爾雪平校區",
      "Campus Norrköping",
      "大學校區進入老城紋理，是諾爾雪平再定位的一條重要線索。",
      "The insertion of a university campus into the older urban fabric is central to Norrköping's repositioning."
    )
  ],
  jonkoping: [
    photo(
      "Jönköping_seen_from_the_west.jpg",
      "從高處看延雪平與湖岸",
      "Jönköping and its lakeside setting",
      "從高處看城市，最能理解延雪平為何是湖畔十字路口。",
      "A high view best explains why Jönköping functions as a lakeside crossroads."
    ),
    photo(
      "Jönköping_City_Hall.jpg",
      "延雪平市政廳",
      "Jönköping City Hall",
      "行政與商業功能撐起了這座中部交通城市的穩定感。",
      "Administrative and commercial functions underpin the city's steady regional role."
    ),
    photo(
      "Vättern_from_Jönköping.jpg",
      "從延雪平望向韋特恩湖",
      "Lake Vättern from Jönköping",
      "湖面讓這座交通城市不只剩下基礎設施，也有明確的生活場景。",
      "The lake keeps Jönköping from reading as infrastructure alone and gives it a strong lived landscape."
    )
  ],
  vasteras: [
    photo(
      "Västerås_cathedral.jpg",
      "韋斯特羅斯主教座堂",
      "Västerås Cathedral",
      "老教堂與湖區城市紋理，提醒人們韋斯特羅斯並不只是工業城。",
      "The cathedral and older urban fabric remind readers that Västerås is not only an industrial city."
    ),
    photo(
      "Vasteras_harbour.jpg",
      "韋斯特羅斯湖港",
      "Västerås harbour on Lake Mälaren",
      "靠近梅拉倫湖的港區，是城市工業與水路歷史的重要線索。",
      "The harbour on Lake Mälaren points to Västerås's industrial and water-route history."
    ),
    photo(
      "Kokpunkten_Västerås.jpg",
      "韋斯特羅斯舊工業塔樓改造",
      "Repurposed industrial tower in Västerås",
      "工業遺產如何被重新利用，是理解這座城市當代感的一個好入口。",
      "Adaptive reuse of industrial structures is a good entry point into Västerås's contemporary identity."
    )
  ],
  orebro: [
    photo(
      "Orebro_Castle.jpg",
      "厄勒布魯城堡",
      "Örebro Castle",
      "城堡讓這座內陸行政城市有很強的可辨識地標。",
      "The castle gives this inland administrative city a strong landmark presence."
    ),
    photo(
      "Örebro-Castle.jpg",
      "厄勒布魯城堡與河道",
      "Örebro Castle and surrounding waterways",
      "河道與城堡的關係，使厄勒布魯的中心區比想像中更有層次。",
      "The relationship between castle and waterways gives central Örebro more spatial depth than many readers expect."
    ),
    photo(
      "Svampen,_Örebro.jpg",
      "厄勒布魯的 Svampen 水塔",
      "The Svampen water tower in Örebro",
      "Svampen 這類日常地標，很能代表瑞典中型城市的辨識方式。",
      "Everyday landmarks like Svampen are part of how medium-sized Swedish cities become legible."
    )
  ],
  lund: [
    photo(
      "Lund_Cathedral.jpg",
      "隆德主教座堂",
      "Lund Cathedral",
      "主教座堂幾乎是整座隆德歷史重心的視覺縮影。",
      "The cathedral is almost a visual shorthand for Lund's historical gravity."
    ),
    photo(
      "Cathedral._Lund.jpg",
      "冬季的隆德主教座堂周邊",
      "Lund Cathedral in winter",
      "同一座教堂在不同季節裡，會讓人更直接感受到隆德的生活尺度。",
      "The same cathedral in another season conveys Lund's smaller, lived scale more directly."
    ),
    photo(
      "Lund_University_library.jpg",
      "隆德大學圖書館",
      "Lund University Library",
      "大學建築並不是配角，而是城市本身的核心風景。",
      "University buildings are not secondary scenery here; they are part of the city's core landscape."
    )
  ],
  umea: [
    photo(
      "Bildmuseet_Umeå.jpg",
      "于默奧的 Bildmuseet",
      "Bildmuseet in Umeå",
      "這座文化機構很能代表于默奧北方文化城市的一面。",
      "Bildmuseet captures Umeå's identity as a northern cultural city."
    ),
    photo(
      "Umeå_city_hall.jpg",
      "于默奧市政廳",
      "Umeå City Hall",
      "市政廳和河岸一起形塑了北方城市的中心場景。",
      "The City Hall and riverfront help define the centre of this northern city."
    ),
    photo(
      "Umeå_waterfront.jpg",
      "于默奧河岸",
      "The waterfront in Umeå",
      "河岸與公共空間的尺度，讓于默奧的北方日常變得可視。",
      "The waterfront makes Umeå's northern everyday life easier to picture."
    )
  ]
};

const titleToCityKey: Record<string, keyof typeof cityPhotoSets> = {
  "斯德哥爾摩：群島首都與國家中樞": "stockholm",
  "Stockholm: The Archipelago Capital and National Core": "stockholm",
  "哥德堡：港口工業與西海岸城市性格": "gothenburg",
  "Gothenburg: Port Industry and the West Coast Urban Temperament": "gothenburg",
  "馬爾默：跨海門戶與多元城市轉型": "malmo",
  "Malmö: Cross-Border Gateway and Urban Transformation": "malmo",
  "烏普薩拉：大學城、通勤圈與知識傳統": "uppsala",
  "Uppsala: University City, Commuter Region, and Knowledge Tradition": "uppsala",
  "赫爾辛堡：海峽渡口、丘陵港城與區域節點": "helsingborg",
  "Helsingborg: Strait Crossing, Hillside Port, and Regional Node": "helsingborg",
  "林雪平：科技城、航空工業與大學聯盟": "linkoping",
  "Linköping: Technology City, Aviation Industry, and University Alliance": "linkoping",
  "諾爾雪平：工業遺產、港口更新與東岸再定位": "norrkoping",
  "Norrköping: Industrial Heritage, Port Renewal, and an East Coast Repositioning": "norrkoping",
  "延雪平：湖畔十字路口與物流中樞": "jonkoping",
  "Jönköping: Lakeside Crossroads and Logistics Hub": "jonkoping",
  "韋斯特羅斯：梅拉倫湖工業城與能源技術傳統": "vasteras",
  "Västerås: Lake Mälaren Industry and Energy Technology Traditions": "vasteras",
  "厄勒布魯：內陸行政中心與交通樞紐": "orebro",
  "Örebro: Inland Administrative Center and Transport Junction": "orebro",
  "隆德：中世紀大學城與南瑞典知識重心": "lund",
  "Lund: Medieval University City and Southern Knowledge Hub": "lund",
  "于默奧：北方文化之都與青年城市": "umea",
  "Umeå: Northern Cultural Capital and Young University City": "umea"
};

export function getCityPhotos(title: string) {
  const key = titleToCityKey[title];
  return key ? cityPhotoSets[key] : [];
}
