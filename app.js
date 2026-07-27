const gateLabels = {
  station: "工作站",
  material: "材料／工具",
  region: "區域／深度",
  boss: "Boss／事件",
  knowledge: "知識／藍圖",
  currency: "貨幣／交付",
  level: "等級／技能",
  time: "時間",
  key: "道具鑰匙",
  labor: "人力／生物"
};

const groupLabels = {
  survival: "生存／沙盒",
  factory: "工廠自動化對照",
  mmo: "MMO 手遊對照"
};

const modeLabels = {
  premium: "買斷制",
  f2p: "免費制"
};

const nodeColors = {
  material: "var(--acid)",
  station: "var(--cyan)",
  boss: "var(--orange)",
  knowledge: "var(--purple)",
  currency: "var(--red)",
  time: "var(--red)",
  region: "var(--cyan)",
  level: "var(--orange)",
  key: "var(--purple)",
  labor: "var(--cyan)"
};

const games = [
  {
    id: "minecraft",
    name: "Minecraft",
    group: "survival",
    mode: "premium",
    accent: "var(--acid)",
    tagline: "材料階梯的原型：上一把鎬，打開下一層世界",
    primary: "material",
    gates: ["material", "station", "region", "knowledge", "boss"],
    mainTitle: "材料／工具階梯",
    mainCopy: "上一階的鎬才能挖下一階的礦。因果鏈極短，玩家永遠知道要挖更多、挖更深。",
    supportTitle: "區域門＋知識門",
    supportCopy: "地獄與終界把材料階梯接到新 biome；獄髓模板再要求探索堡壘遺跡。",
    stuckTitle: "不太會卡死，卻容易漂流",
    stuckCopy: "挫折多半來自找礦 RNG；鐵裝之後的中期目標感薄弱，也是沙盒自由的另一面。",
    tiers: "工具 7 階；工作站約 4 層",
    hours: "鑽石 1–5 小時；初次終界龍約 10–30 小時",
    takeaway: "門檻寬鬆、主線可選；自由度極高，但目標導向遊戲照搬會缺推力。",
    route: [
      { title: "拳頭打木頭", note: "徒手取得第一批資源", type: "material" },
      { title: "工作台", note: "木板 ×4；第一層工作站", type: "station" },
      { title: "石鎬 → 鐵鎬", note: "逐層提升 mining level", type: "material" },
      { title: "熔爐", note: "圓石 ×8；把礦轉成金屬", type: "station" },
      { title: "鑽石鎬", note: "開始挖黑曜石與遠古遺骸", type: "material" },
      { title: "地獄", note: "新 biome、新材料與烈焰棒", type: "region" },
      { title: "鍛造台＋模板", note: "探索堡壘遺跡，升級獄髓裝", type: "knowledge" },
      { title: "終界", note: "終界之眼 ×12 → 終界龍", type: "boss" }
    ],
    sources: [
      ["minecraft.wiki", "https://minecraft.wiki/w/Tiers"],
      ["Switchblade", "https://www.switchbladegaming.com/minecraft/progression-guide/"]
    ]
  },
  {
    id: "valheim",
    name: "Valheim",
    group: "survival",
    mode: "premium",
    accent: "var(--orange)",
    tagline: "Boss 掉的不是獎盃，是下一個動詞",
    primary: "boss",
    gates: ["boss", "material", "station", "region", "key"],
    mainTitle: "Boss 掉落物＝能力鑰匙",
    mainCopy: "鹿角鎬、地穴鑰匙、許願骨、龍淚與 Wisplight，直接開啟挖礦、探測、製作或導航能力。",
    supportTitle: "材料門＋工作站",
    supportCopy: "每個 biome 有限定資源，新材料又必須配新工作站或升級件，持續把冒險拉回基地。",
    stuckTitle: "沼澤難度牆",
    stuckCopy: "整體 progression 備受好評，但沼澤的 difficulty spike 與金屬不能過傳送門，讓單人玩家承受大量摩擦。",
    tiers: "7 個 biome 階；鍛造台可升 7 級",
    hours: "全程約 100 小時級；後期兩王之間可達 40–50 小時",
    takeaway: "Boss gating 的教科書：打王的理由不是成就，而是「我需要那把鑰匙」。",
    route: [
      { title: "草原", note: "工作台與基礎生存", type: "station" },
      { title: "Eikthyr", note: "硬鹿角 → 鹿角鎬", type: "boss" },
      { title: "黑森林", note: "銅、錫、熔爐與鍛造台", type: "material" },
      { title: "The Elder", note: "沼澤地穴鑰匙", type: "key" },
      { title: "沼澤", note: "鐵礦；Bonemass 掉許願骨", type: "region" },
      { title: "高山", note: "銀礦；Moder 掉龍淚", type: "region" },
      { title: "平原", note: "工匠台、黑金屬與 Yagluth", type: "station" },
      { title: "迷霧／灰燼", note: "黑鍛造台、魔法與終局王", type: "boss" }
    ],
    sources: [
      ["Bamboo Gaming", "https://www.bamboogaming.net/valheim/progression"],
      ["PCGamer", "https://www.pcgamer.com/how-to-make-valheim-forge-level-upgrade-bellows/"]
    ]
  },
  {
    id: "rust",
    name: "Rust",
    group: "survival",
    mode: "premium",
    accent: "var(--red)",
    tagline: "所有道路都通往 scrap，也都像在還債",
    primary: "currency",
    gates: ["currency", "station", "knowledge", "time", "material"],
    mainTitle: "scrap 單一貨幣",
    mainCopy: "三階工作台與科技樹節點都用 scrap 買；進度可規劃、可交易、可分工，但也最像重複打工。",
    supportTitle: "工作站＋藍圖旁路",
    supportCopy: "工作台既是製作前提也是可被 raid 摧毀的資產；開箱藍圖能跳過科技樹前置。",
    stuckTitle: "Solo 的債務感",
    stuckCopy: "T3 工作台光 scrap 就要 1,250；小隊與單人取得速度差距巨大，wipe 又會定期把進度歸零。",
    tiers: "工作台 3 階；建材 5 階",
    hours: "小隊 1–3 天可到 T3；solo 常需數天",
    takeaway: "貨幣門在競技環境有公平與交易價值，但單獨當主幹時，卡關體感最像還債。",
    route: [
      { title: "石頭＋火把", note: "無需解鎖的開局", type: "material" },
      { title: "Workbench Lv1", note: "50 scrap；T1 科技樹", type: "station" },
      { title: "T1 節點", note: "每個 20–75 scrap", type: "currency" },
      { title: "Workbench Lv2", note: "500 scrap；進入 T2", type: "station" },
      { title: "T2 節點", note: "每個 75–125 scrap", type: "currency" },
      { title: "Workbench Lv3", note: "1,250 scrap；終階工作台", type: "station" },
      { title: "T3 火力", note: "AK、C4、火箭等高價節點", type: "currency" },
      { title: "Wipe", note: "週／月循環，整條路線再來一次", type: "time" }
    ],
    sources: [
      ["Rust Tech Tree", "https://xgamingserver.com/blog/rust-tech-tree-workbench-guide/"],
      ["Facepunch", "https://rust.facepunch.com/news/pivot-or-die"]
    ]
  },
  {
    id: "terraria",
    name: "Terraria",
    group: "survival",
    mode: "premium",
    accent: "var(--purple)",
    tagline: "一座鎬階梯不夠？Hardmode 再爬第二座",
    primary: "material",
    gates: ["material", "station", "boss", "region", "key", "labor"],
    mainTitle: "鎬力階梯",
    mainCopy: "pre-hardmode 與 hardmode 各有一輪礦物／鎬階梯，整體超過 12 階，卻因每階都是新玩具包而維持吸引力。",
    supportTitle: "世界狀態＋Boss 硬門",
    supportCopy: "Wall of Flesh 永久改變世界、生成新礦與敵人；NPC 住房又把蓋房子接回主線。",
    stuckTitle: "爽的難，伴隨 wiki 依賴",
    stuckCopy: "Hardmode 瞬間變難，但新目標同時清楚出現；真正的挫折是合成鏈深到不查資料很難理解。",
    tiers: "全遊戲 12+ 階",
    hours: "初次 Moon Lord 約 40–60 小時",
    takeaway: "最強的儀式硬門：不可逆、全域、還會威脅舊基地，跨門瞬間因此格外有記憶點。",
    route: [
      { title: "工作台／熔爐／鐵砧", note: "建立基礎工作站鏈", type: "station" },
      { title: "pre-Hardmode 礦階", note: "銅／錫一路到金／鉑", type: "material" },
      { title: "地獄與獄石", note: "獄石熔爐與獄石鎬", type: "region" },
      { title: "Wall of Flesh", note: "世界永久切換 Hardmode", type: "boss" },
      { title: "Hardmode 三礦", note: "鈷 → 秘銀 → 精金", type: "material" },
      { title: "機械三王", note: "神聖錠與三種靈魂", type: "boss" },
      { title: "世紀之花／Golem", note: "神殿鑰匙與後期區域", type: "key" },
      { title: "Moon Lord", note: "終局 Boss 與夜明素材", type: "boss" }
    ],
    sources: [
      ["Switchblade", "https://www.switchbladegaming.com/terraria/progression-guide-2026/"],
      ["Terraria Guide", "https://terraria.guide/guides/early-game/getting-started/"]
    ]
  },
  {
    id: "dont-starve",
    name: "Don't Starve",
    group: "survival",
    mode: "premium",
    accent: "var(--orange)",
    tagline: "科技樹很淺，真正的門是：你活得到冬天嗎？",
    primary: "time",
    gates: ["time", "station", "material", "knowledge", "region"],
    mainTitle: "季節與生存壓力",
    mainCopy: "科技階層刻意平坦，冬天、巨人、sanity 與食物腐敗才是真正擋住你的循環壓力。",
    supportTitle: "一次性原型製作",
    supportCopy: "在工作站旁做過一次就永久學會；工作站像老師，不像必須常駐的工廠。",
    stuckTitle: "穩定生存後的漂流",
    stuckCopy: "1–2 小時便可摸到大部分科技樹；基地穩定後容易缺少下一層目標，DST 後期內容正是在補這個洞。",
    tiers: "實質 4–5 階，清單中最淺",
    hours: "約 1–2 小時可摸到科技樹頂",
    takeaway: "環境壓力可以取代深科技樹；代價是壓力解除後，玩家也可能失去前進方向。",
    route: [
      { title: "徒手工具", note: "火堆、斧與鎬免工作站", type: "material" },
      { title: "科學機器", note: "T1 原型製作", type: "station" },
      { title: "煉金引擎", note: "T2；約解鎖 70% 配方", type: "station" },
      { title: "冬天／巨人", note: "生存節拍開始主導進程", type: "time" },
      { title: "靈子分解器", note: "夢魘燃料與活木材料線", type: "knowledge" },
      { title: "暗影操縱者", note: "魔法 T2", type: "station" },
      { title: "遺跡／月島", note: "DST 遠古與天體後期線", type: "region" }
    ],
    sources: [
      ["Don't Starve Wiki", "https://dontstarve.wiki.gg/wiki/Alchemy_Engine"],
      ["Game-Wisdom", "https://game-wisdom.com/analysis/dont-starve-reign-of-giants"]
    ]
  },
  {
    id: "ark",
    name: "ARK",
    group: "survival",
    mode: "premium",
    accent: "var(--red)",
    tagline: "點數逼你分工，Boss 才肯交出 Tek 科技",
    primary: "level",
    gates: ["level", "currency", "station", "boss", "time", "labor", "material"],
    mainTitle: "等級＋Engram Points",
    mainCopy: "配方同時有等級與 EP 門檻；全部 engram 需 7,107+ EP，但 155 級只有 4,441 EP，單人設計上學不完。",
    supportTitle: "工作站階梯＋Tek Boss",
    supportCopy: "Smithy → Fabricator → Tek Replicator；最高層 Tekgram 無法用點數購買，只能挑戰不同 Boss。",
    stuckTitle: "多人是分工，單人是懲罰",
    stuckCopy: "稀缺點數鼓勵部落分工，但 solo 玩家常直接調高 EP；馴一隻高級龍又可能耗費 1–8 小時。",
    tiers: "5 大層：石、金屬、電、工業、Tek",
    hours: "官圖打完三 Boss 為數百小時級",
    takeaway: "同一套稀缺點數，在多人裡是社交設計，在單人裡卻會翻成純懲罰。",
    route: [
      { title: "石器層 Lv1–20", note: "茅屋、石斧與研磨器", type: "level" },
      { title: "Smithy", note: "金屬工具與鞍具", type: "station" },
      { title: "Fabricator", note: "電力、槍械與電器", type: "station" },
      { title: "工業層", note: "工業熔爐與高階鞍具", type: "level" },
      { title: "Boss", note: "不同王掉不同 Tekgram", type: "boss" },
      { title: "Tek Replicator", note: "終局工作站", type: "station" },
      { title: "Tek 科技", note: "點數買不到的最高層能力", type: "boss" }
    ],
    sources: [
      ["ARK Engrams", "https://ark.fandom.com/wiki/Engrams"],
      ["Tekgrams", "https://ark.fandom.com/wiki/Table_of_Tekgrams"]
    ]
  },
  {
    id: "subnautica",
    name: "Subnautica",
    group: "survival",
    mode: "premium",
    accent: "var(--cyan)",
    tagline: "掃描 → 下潛 → 再掃描，深度就是科技樹",
    primary: "knowledge",
    gates: ["knowledge", "region", "material", "station", "key"],
    mainTitle: "掃描知識＋深度雙軸",
    mainCopy: "殘骸碎片解鎖藍圖，載具深度決定能掃到哪些碎片；兩條門檻互咬成「掃描 → 下潛 → 再掃描」螺旋。",
    supportTitle: "深層材料＋劇情平板",
    supportCopy: "鎳、藍晶石等礦綁定深層 biome；PDA 線索與外星平板則構成隱形任務系統。",
    stuckTitle: "發現感最高，也最可能迷航",
    stuckCopy: "沒有地圖與明確任務標記，自己拼出路線的爽感極強；線索不夠密時，就會變成大範圍瞎找。",
    tiers: "0–200／300／500／900／1300／1700m，共 6 階",
    hours: "主線約 30–50 小時",
    takeaway: "把知識藏在世界裡，能創造最強的「我自己發現的」；也必須用線索系統替迷航兜底。",
    route: [
      { title: "逃生艙", note: "內建 Fabricator", type: "station" },
      { title: "掃描器", note: "掃 N 片殘骸才解藍圖", type: "knowledge" },
      { title: "Habitat Builder", note: "基地與自建工作設施", type: "station" },
      { title: "Seamoth 200m", note: "深度模組推到 900m", type: "region" },
      { title: "PRAWN／Cyclops", note: "推進到 1300–1700m", type: "region" },
      { title: "深層材料", note: "鎳、藍晶石與硫磺", type: "material" },
      { title: "離子科技", note: "深海能力接到終局火箭", type: "knowledge" }
    ],
    sources: [
      ["Subnautica Wiki", "https://wiki.subnautica.com/sn/Seamoth"],
      ["Upgrade Modules", "https://subnautica.fandom.com/wiki/Upgrade_Modules"]
    ]
  },
  {
    id: "grounded",
    name: "Grounded",
    group: "survival",
    mode: "premium",
    accent: "var(--acid)",
    tagline: "蟲就是礦脈：打得過，才拿得到下一階材料",
    primary: "material",
    gates: ["material", "knowledge", "currency", "boss", "region", "station", "key"],
    mainTitle: "生物材料門",
    mainCopy: "昆蟲同時是敵人、礦脈與區域守門人；「打得過那隻蟲」就是拿到該階材料。",
    supportTitle: "分析器＋實驗室",
    supportCopy: "分析新素材開配方、Raw Science 買科技、Super Tech Chip 藏在劇情實驗室終點。",
    stuckTitle: "T2 → T3 危險度躍升",
    stuckCopy: "整體循環清楚，打不過就升裝；主要摩擦在 Haze／Upper Yard 的危險度與後期修裝 grind。",
    tiers: "裝備 3 階；建材草→莖→黏土→石灰岩",
    hours: "主線約 30–40 小時",
    takeaway: "材料、知識、貨幣與劇情門疊得平均，是黃金三角的「小而全」範本。",
    route: [
      { title: "草纖維起家", note: "小石子與基礎材料", type: "material" },
      { title: "分析器", note: "分析新素材 → 開新配方", type: "knowledge" },
      { title: "T1 Lawn", note: "三葉草、幼蟲與橡實", type: "material" },
      { title: "BURG.L 商店", note: "任務與 Raw Science 買配方", type: "currency" },
      { title: "T2 昆蟲", note: "打倒對應蟲才有材料", type: "material" },
      { title: "實驗室晶片", note: "地城終點的劇情硬門", type: "key" },
      { title: "T3 Upper Yard", note: "高危區與終局 Boss", type: "boss" }
    ],
    sources: [
      ["Grounded Wiki", "https://grounded.fandom.com/wiki/BURG.L"],
      ["Switchblade", "https://www.switchbladegaming.com/survival-games/tier-progression-guide/"]
    ]
  },
  {
    id: "enshrouded",
    name: "Enshrouded",
    group: "survival",
    mode: "premium",
    accent: "var(--cyan)",
    tagline: "一座 Flame Altar，把整個世界收斂成九階清單",
    primary: "station",
    gates: ["station", "region", "material", "boss", "labor", "time"],
    mainTitle: "火焰祭壇複合材料清單",
    mainCopy: "每級祭壇要求採集、打怪、挖礦與精英首級；升級介面本身就是本階內容導覽。",
    supportTitle: "Shroud＋工匠",
    supportCopy: "祭壇等級放行更深迷霧；工作站不是造出來，而是救出 NPC 工匠後帶回基地。",
    stuckTitle: "清楚到像 checklist",
    stuckCopy: "永遠知道下一步是最大優點；後期 ×40、×50、×60 的材料膨脹，則容易讓儀式變成採購清單。",
    tiers: "Flame 9 級",
    hours: "主線約 40–60 小時；每級約 4–8 小時",
    takeaway: "把所有門檻收斂在一座祭壇，換到極高的清晰度；代價是驚喜較少、成本膨脹更顯眼。",
    route: [
      { title: "Flame Altar", note: "基地範圍、復活與傳送樞紐", type: "station" },
      { title: "救出工匠", note: "5 位 NPC 帶來各自工作站鏈", type: "labor" },
      { title: "Flame Lv2–3", note: "多線材料＋精英首級", type: "material" },
      { title: "Revelwood", note: "需 Flame 3", type: "region" },
      { title: "Flame Lv4–5", note: "銅、錫與更大量材料", type: "material" },
      { title: "Nomad／Kindlewastes", note: "需 Flame 4／5", type: "region" },
      { title: "Flame Lv6–9", note: "×40～×60 材料與終局首級", type: "boss" }
    ],
    sources: [
      ["Flame Altar Wiki", "https://enshrouded.wiki.gg/wiki/Flame_Altar"],
      ["Shroud & Flame", "https://xgamingserver.com/blog/enshrouded-shroud-flame-progression/"]
    ]
  },
  {
    id: "palworld",
    name: "Palworld",
    group: "survival",
    mode: "premium",
    accent: "var(--orange)",
    tagline: "抓到什麼 Pal，決定你蓋的機器會不會動",
    primary: "level",
    gates: ["level", "currency", "labor", "station", "boss", "material"],
    mainTitle: "等級＋科技點",
    mainCopy: "玩家等級開科技層，每級給 6 科技點；遠古點數則只靠塔 Boss 與 Alpha Pal 首殺。",
    supportTitle: "Pal 勞動力門",
    supportCopy: "搬運、點火、發電、手作等工作適性決定工作站是否運轉，把抓寵進度直接接上基地產能。",
    stuckTitle: "15 級後量先跑、產能慢半拍",
    stuckCopy: "後期設施與球需要百級材料量；自動化補得不夠快時，玩家會把大量時間花在球與子彈上。",
    tiers: "50+ 科技級距；設施約 5 代",
    hours: "15 級約 5–10 小時；全塔高階科技約 60–100 小時",
    takeaway: "用「量」當門檻，只有在自動化同步成長時才成立；Pal 適性則是近年很有記憶點的人力變體。",
    route: [
      { title: "玩家升級", note: "每級 +6 Technology Points", type: "level" },
      { title: "原始工作站", note: "火堆、床與精靈球工作台", type: "station" },
      { title: "冶煉／武器", note: "石窯、爐與槍械階梯", type: "station" },
      { title: "塔 Boss", note: "首殺 +5 遠古點", type: "boss" },
      { title: "電力層", note: "需要具發電適性的 Pal", type: "labor" },
      { title: "生產線", note: "高階球與百級堆料", type: "material" },
      { title: "全塔／高階科技", note: "遠古分支與終局設施", type: "currency" }
    ],
    sources: [
      ["Palworld Technology", "https://palworld.fandom.com/wiki/Technology"],
      ["Game8", "https://game8.co/games/Palworld/archives/440197"]
    ]
  },
  {
    id: "7-days-to-die",
    name: "7 Days to Die",
    group: "survival",
    mode: "premium",
    accent: "var(--purple)",
    tagline: "每個書架都是抽卡，七天一次交作業",
    primary: "knowledge",
    gates: ["knowledge", "time", "material", "station", "level"],
    mainTitle: "RNG 雜誌知識門",
    mainCopy: "約 90% 配方靠散落世界的技能雜誌；技能點不直接解鎖，而是提高對應雜誌掉落權重。",
    supportTitle: "七日血月節拍器",
    supportCopy: "每七天一次的圍城倒數，強迫玩家替基地防禦設定明確短期目標。",
    stuckTitle: "能押注機率，不能指定結果",
    stuckCopy: "權重系統緩解但不消除 RNG 挫折；交換到的是每個書架都可能升級的持續期待。",
    tiers: "材料 4 階 × 品質 6 級",
    hours: "專注路線取得坩堝約 8–12 小時",
    takeaway: "控制「分布」而不是結果，讓撿垃圾變抽卡；但 RNG 知識門永遠需要保底與導向。",
    route: [
      { title: "徒手／石器", note: "開局配方免解鎖", type: "material" },
      { title: "技能雜誌", note: "散落 loot 與商人", type: "knowledge" },
      { title: "技能點押注", note: "提高對應系列掉落權重", type: "level" },
      { title: "熔爐／工作台", note: "讀到足量雜誌才開", type: "station" },
      { title: "品質 Q1→Q6", note: "繼續閱讀提升製作品質", type: "knowledge" },
      { title: "坩堝／鋼", note: "Forge Ahead 後段目標", type: "material" },
      { title: "第七日血月", note: "基地防禦的固定交卷日", type: "time" }
    ],
    sources: [
      ["7DTD Magazine Guide", "https://wiki.7d2d.net/guides/magazine-crafting-progression.html"],
      ["Steam 討論", "https://steamcommunity.com/app/251570/discussions/0/3810656323966094644/"]
    ]
  },
  {
    id: "sons-of-the-forest",
    name: "Sons of the Forest",
    group: "survival",
    mode: "premium",
    accent: "var(--red)",
    tagline: "房子隨你蓋；真正的主線鎖在一串鑰匙卡裡",
    primary: "key",
    gates: ["key", "region", "station"],
    mainTitle: "嚴格的道具鑰匙鏈",
    mainCopy: "繩槍、鏟子與三張 keycard 按固定順序開門；建造藍圖幾乎開局全給。",
    supportTitle: "洞穴地形門",
    supportCopy: "呼吸器、繩槍等關鍵裝備決定能否進入下一個洞穴或地堡；3D 印表機是固定點設施。",
    stuckTitle: "建造與進程脫鉤",
    stuckCopy: "基地自由度受好評，但蓋大房子不解鎖任何東西；中期留存只能靠恐怖氛圍與劇情支撐。",
    tiers: "繩槍／鏟子／3 張 keycard 的單線鏈",
    hours: "主線約 15–25 小時",
    takeaway: "反例的價值：拔掉建造樹後，蓋房子只剩表達；若劇情與氛圍撐不住，中期就會失去推力。",
    route: [
      { title: "建造書全開", note: "小屋到堡壘幾乎無進程門", type: "station" },
      { title: "繩槍", note: "洞穴 A 的第一把鑰匙", type: "key" },
      { title: "呼吸器＋鏟子", note: "進入特定洞穴後取得", type: "region" },
      { title: "Maintenance 卡", note: "挖開地堡入口", type: "key" },
      { title: "VIP 卡", note: "Food & Dining 地堡", type: "key" },
      { title: "Guest 卡", note: "3D 印表機地堡", type: "key" },
      { title: "金甲／終局洞穴", note: "關鍵裝備開最後區域", type: "region" }
    ],
    sources: [
      ["Gameranx", "https://gameranx.com/features/id/444673/article/sons-of-the-forest-where-to-find-all-keycards-progression-locations-guide/"],
      ["GameSpot", "https://www.gamespot.com/articles/sons-of-the-forest-3d-printer-craft-items-guide/1100-6511832/"]
    ]
  },
  {
    id: "factorio",
    name: "Factorio",
    group: "factory",
    mode: "premium",
    accent: "var(--orange)",
    tagline: "科學包不是門票，是一份逐章教你的課程表",
    primary: "material",
    gates: ["material", "station", "time"],
    mainTitle: "中間產物複雜度",
    mainCopy: "每階科學包引入新原料體系；藍科學逼你處理石油，研究本身則沒有 RNG 或探索門。",
    supportTitle: "產能即門檻",
    supportCopy: "紅綠包原料就是此階該學會自動化的零件，解鎖成本同時扮演教學。",
    stuckTitle: "不是找不到，是工廠接不起來",
    stuckCopy: "門檻來自產線、物流與拉線能力；成本大量成長時，玩家也同步獲得指數級產能。",
    tiers: "紅、綠、黑／藍、紫／黃、白科學階梯",
    hours: "研究素材未提供通關時數",
    takeaway: "gating 物可以同時是教材：配方材料本身就在告訴玩家，這一章該學會什麼。",
    route: [
      { title: "紅科學", note: "齒輪＋銅板；手搓可達", type: "material" },
      { title: "綠科學", note: "輸送帶＋機械臂，教物流", type: "material" },
      { title: "黑科學", note: "軍事分支", type: "material" },
      { title: "藍科學", note: "石油→塑膠，跨原料體系", type: "material" },
      { title: "紫／黃科學", note: "生產與公用終局線", type: "station" },
      { title: "白科學", note: "太空階段", type: "station" }
    ],
    sources: [
      ["Factorio FFF-275", "https://www.factorio.com/blog/post/fff-275"],
      ["Science Pack Wiki", "https://wiki.factorio.com/Science_pack"]
    ]
  },
  {
    id: "satisfactory",
    name: "Satisfactory",
    group: "factory",
    mode: "premium",
    accent: "var(--cyan)",
    tagline: "波內自由、波間強制：太空電梯替工廠分章",
    primary: "currency",
    gates: ["currency", "station", "material", "time"],
    mainTitle: "資源交付門",
    mainCopy: "里程碑要求把資源上繳而非持有；資源沉沒維持長期生產需求。",
    supportTitle: "太空電梯波次",
    supportCopy: "10 個 Tier 被 5 個 Phase 分層，層內可自由選順序、層間必須完成大型交付。",
    stuckTitle: "數千件不是問題，手搓才是",
    stuckCopy: "交付量暴力成長，目的就是逼玩家從手作轉向自動化；產能成長能跟上，巨大數字才不只剩 grind。",
    tiers: "10 個 Tier；5 個太空電梯波次",
    hours: "研究素材未提供通關時數",
    takeaway: "「波次開層」兼顧層內自由與層間節奏，也能用交付量逼出玩法轉型。",
    route: [
      { title: "Tier 0", note: "HUB 建立；順序強制", type: "station" },
      { title: "Tier 1–2", note: "層內里程碑自由選", type: "currency" },
      { title: "Phase 1", note: "太空電梯交付組裝件", type: "currency" },
      { title: "Tier 3–4", note: "新一波工業能力", type: "station" },
      { title: "Phase 2–3", note: "依序打開 Tier 5–8", type: "currency" },
      { title: "Phase 4", note: "大型自動化交付", type: "currency" },
      { title: "Tier 9", note: "第五波終局科技", type: "station" }
    ],
    sources: [
      ["Milestones Wiki", "https://satisfactory.wiki.gg/wiki/Milestones"],
      ["Space Elevator", "https://satisfactory.wiki.gg/wiki/Space_Elevator"]
    ]
  },
  {
    id: "mabinogi-mobile",
    name: "瑪奇 Mobile",
    group: "mmo",
    mode: "f2p",
    accent: "var(--red)",
    tagline: "材料還在加工；這道門不是叫你冒險，是叫你明天再來",
    primary: "time",
    gates: ["time", "level", "currency", "station", "knowledge", "material"],
    mainTitle: "加工計時＋限購",
    mainCopy: "加工時間隨物品等級從分鐘拉長到小時，特定材料又有日／週限購，把進程攤到日曆上。",
    supportTitle: "技能等級＋失敗率",
    supportCopy: "高階配方需要生活技能等級，高級品製作失敗率則回收材料並控制交易所供給。",
    stuckTitle: "解法是等、買或掛機",
    stuckCopy: "官方用最多 400 次自動製作／收集與 20 條生活技能並行，讓等待期間仍有別的線可走。",
    tiers: "20 種生活技能；採集→加工→製作",
    hours: "加工由分鐘增至小時級，另有日／週限購",
    takeaway: "F2P 的每一道門同時是經濟水龍頭；買斷遊戲若照抄等待牆，玩家幾乎不會買單。",
    route: [
      { title: "採集原料", note: "野外節點與副本掉落", type: "material" },
      { title: "指定設施加工", note: "半成品開始計時", type: "station" },
      { title: "技能升級", note: "高階配方綁製作等級", type: "level" },
      { title: "高級品製作", note: "失敗率回收材料", type: "knowledge" },
      { title: "每日／每週限購", note: "控制稀有材料量產速度", type: "time" },
      { title: "交易所", note: "生活與戰鬥玩家市場分工", type: "currency" }
    ],
    sources: [
      ["巴哈姆特攻略", "https://home.gamer.com.tw/artwork.php?sn=6369331"],
      ["LDPlayer", "https://www.ldplayer.tw/blog/mabinogi-mobile-life-skill-guide.html"]
    ]
  }
];

const state = {
  gate: "all",
  mode: "all",
  group: "all",
  query: "",
  compared: [],
  routeIndex: 0
};

const els = {
  grid: document.querySelector("#game-grid"),
  count: document.querySelector("#result-count"),
  empty: document.querySelector("#empty-state"),
  search: document.querySelector("#game-search"),
  tray: document.querySelector("#compare-tray"),
  compareCount: document.querySelector("#compare-count"),
  compareNames: document.querySelector("#compare-names"),
  compareOpen: document.querySelector("#compare-open"),
  compareDialog: document.querySelector("#compare-dialog"),
  compareContent: document.querySelector("#compare-content"),
  routeSelect: document.querySelector("#route-select"),
  routeLine: document.querySelector("#route-line")
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizedSearchText(game) {
  return [
    game.name,
    game.tagline,
    game.mainTitle,
    game.mainCopy,
    game.supportTitle,
    game.supportCopy,
    game.stuckCopy,
    ...game.gates.map((gate) => gateLabels[gate])
  ].join(" ").toLocaleLowerCase("zh-Hant");
}

function filteredGames() {
  const query = state.query.trim().toLocaleLowerCase("zh-Hant");
  return games.filter((game) => {
    const gateMatch = state.gate === "all" || game.gates.includes(state.gate);
    const modeMatch = state.mode === "all" || game.mode === state.mode;
    const groupMatch = state.group === "all" || game.group === state.group;
    const searchMatch = !query || normalizedSearchText(game).includes(query);
    return gateMatch && modeMatch && groupMatch && searchMatch;
  });
}

function gameCardTemplate(game, visibleIndex) {
  const compared = state.compared.includes(game.id);
  const comparisonFull = state.compared.length >= 2 && !compared;
  const tags = game.gates.slice(0, 4).map((gate, index) => (
    `<span class="gate-tag${index === 0 ? " primary" : ""}">${escapeHtml(gateLabels[gate])}</span>`
  )).join("");

  return `
    <article class="game-card${compared ? " is-compared" : ""}" style="--game-accent:${game.accent}" data-game-id="${game.id}">
      <div class="game-topline">
        <span class="game-number">${String(visibleIndex + 1).padStart(2, "0")} · ${escapeHtml(groupLabels[game.group])}</span>
        <span class="game-mode">${escapeHtml(modeLabels[game.mode])}</span>
      </div>
      <h3>${escapeHtml(game.name)}</h3>
      <p class="game-tagline">${escapeHtml(game.tagline)}</p>
      <div class="gate-tags" aria-label="門檻機制">${tags}</div>
      <dl class="card-fact">
        <dt>主門檻</dt>
        <dd>${escapeHtml(game.mainTitle)}</dd>
      </dl>
      <dl class="card-fact">
        <dt>卡住時</dt>
        <dd>${escapeHtml(game.stuckTitle)}</dd>
      </dl>
      <dl class="card-fact">
        <dt>進程量級</dt>
        <dd>${escapeHtml(game.tiers)}</dd>
      </dl>
      <div class="game-actions">
        <button class="route-button" type="button" data-route="${game.id}">看完整解鎖路線 →</button>
        <button class="compare-button" type="button" data-compare="${game.id}" aria-label="${compared ? "從比較移除" : "加入比較"} ${escapeHtml(game.name)}" aria-pressed="${compared}" ${comparisonFull ? "disabled" : ""}>${compared ? "✓" : "+"}</button>
      </div>
    </article>
  `;
}

function renderGames() {
  const visible = filteredGames();
  els.grid.innerHTML = visible.map(gameCardTemplate).join("");
  els.count.textContent = String(visible.length);
  els.empty.hidden = visible.length > 0;
  els.grid.hidden = visible.length === 0;
  updateCompareTray();
}

function setSingleChoice(containerSelector, dataKey, value) {
  document.querySelectorAll(`${containerSelector} button`).forEach((button) => {
    const isActive = button.dataset[dataKey] === value;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function resetFilters() {
  state.gate = "all";
  state.mode = "all";
  state.group = "all";
  state.query = "";
  els.search.value = "";
  setSingleChoice("#gate-filters", "gate", "all");
  setSingleChoice("#mode-filters", "mode", "all");
  setSingleChoice("#group-filters", "group", "all");
  renderGames();
}

function updateCompareTray() {
  const selected = state.compared.map((id) => games.find((game) => game.id === id));
  els.tray.hidden = selected.length === 0;
  els.compareCount.textContent = `${selected.length} / 2`;
  els.compareNames.textContent = selected.length ? selected.map((game) => game.name).join(" × ") : "選兩款遊戲";
  els.compareOpen.disabled = selected.length !== 2;
}

function toggleCompare(gameId) {
  if (state.compared.includes(gameId)) {
    state.compared = state.compared.filter((id) => id !== gameId);
  } else if (state.compared.length < 2) {
    state.compared.push(gameId);
  }
  renderGames();
}

function compareRows(left, right) {
  const rows = [
    ["定位", `${groupLabels[left.group]} · ${modeLabels[left.mode]}`, `${groupLabels[right.group]} · ${modeLabels[right.mode]}`],
    ["主要門檻", `<b>${escapeHtml(left.mainTitle)}</b><p>${escapeHtml(left.mainCopy)}</p>`, `<b>${escapeHtml(right.mainTitle)}</b><p>${escapeHtml(right.mainCopy)}</p>`],
    ["輔助門檻", `<b>${escapeHtml(left.supportTitle)}</b><p>${escapeHtml(left.supportCopy)}</p>`, `<b>${escapeHtml(right.supportTitle)}</b><p>${escapeHtml(right.supportCopy)}</p>`],
    ["進程規模", `<b>${escapeHtml(left.tiers)}</b><p>${escapeHtml(left.hours)}</p>`, `<b>${escapeHtml(right.tiers)}</b><p>${escapeHtml(right.hours)}</p>`],
    ["卡住體感", `<b>${escapeHtml(left.stuckTitle)}</b><p>${escapeHtml(left.stuckCopy)}</p>`, `<b>${escapeHtml(right.stuckTitle)}</b><p>${escapeHtml(right.stuckCopy)}</p>`],
    ["一句帶走", `<p class="compare-takeaway">${escapeHtml(left.takeaway)}</p>`, `<p class="compare-takeaway">${escapeHtml(right.takeaway)}</p>`]
  ];

  return rows.map(([label, leftContent, rightContent]) => `
    <div class="compare-cell compare-label">${escapeHtml(label)}</div>
    <div class="compare-cell">${leftContent}</div>
    <div class="compare-cell">${rightContent}</div>
  `).join("");
}

function openCompare() {
  if (state.compared.length !== 2) return;
  const [left, right] = state.compared.map((id) => games.find((game) => game.id === id));
  els.compareContent.innerHTML = `
    <div class="compare-cell compare-label">遊戲</div>
    <div class="compare-cell compare-game-head"><h3>${escapeHtml(left.name)}</h3><p>${escapeHtml(left.tagline)}</p></div>
    <div class="compare-cell compare-game-head"><h3>${escapeHtml(right.name)}</h3><p>${escapeHtml(right.tagline)}</p></div>
    ${compareRows(left, right)}
  `;
  els.compareDialog.showModal();
}

function renderRoute(index, shouldScroll = false) {
  state.routeIndex = (index + games.length) % games.length;
  const game = games[state.routeIndex];
  els.routeSelect.value = game.id;

  document.querySelector("#route-position").textContent = `${String(state.routeIndex + 1).padStart(2, "0")} / ${games.length}`;
  document.querySelector("#route-class").textContent = `${groupLabels[game.group]} · ${modeLabels[game.mode]}`;
  document.querySelector("#route-name").textContent = game.name;
  document.querySelector("#route-hook").textContent = game.tagline;
  document.querySelector("#route-main-title").textContent = game.mainTitle;
  document.querySelector("#route-main-copy").textContent = game.mainCopy;
  document.querySelector("#route-support-title").textContent = game.supportTitle;
  document.querySelector("#route-support-copy").textContent = game.supportCopy;
  document.querySelector("#route-stuck-title").textContent = game.stuckTitle;
  document.querySelector("#route-stuck-copy").textContent = game.stuckCopy;
  document.querySelector("#route-tiers").textContent = game.tiers;
  document.querySelector("#route-hours").textContent = game.hours;

  els.routeLine.innerHTML = game.route.map((node, nodeIndex) => `
    <div class="route-node" style="--node-color:${nodeColors[node.type] || "var(--acid)"}">
      <span>STEP ${String(nodeIndex + 1).padStart(2, "0")} · ${escapeHtml(gateLabels[node.type] || "進程")}</span>
      <b>${escapeHtml(node.title)}</b>
      <small>${escapeHtml(node.note)}</small>
    </div>
    ${nodeIndex < game.route.length - 1 ? '<div class="route-connector" aria-hidden="true"></div>' : ""}
  `).join("");
  els.routeLine.setAttribute("aria-label", `${game.name} 解鎖進程：${game.route.map((node) => node.title).join("，接著")}`);

  document.querySelector("#route-sources").innerHTML = `
    <span>資料來源</span>
    ${game.sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ↗</a>`).join("")}
  `;

  const routeViewport = document.querySelector(".route-viewport");
  routeViewport.scrollLeft = 0;
  if (shouldScroll) {
    document.querySelector("#routes").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setupRouteSelector() {
  els.routeSelect.innerHTML = games.map((game) => `<option value="${game.id}">${escapeHtml(game.name)}</option>`).join("");
  els.routeSelect.addEventListener("change", () => {
    renderRoute(games.findIndex((game) => game.id === els.routeSelect.value));
  });
  document.querySelector("#route-prev").addEventListener("click", () => renderRoute(state.routeIndex - 1));
  document.querySelector("#route-next").addEventListener("click", () => renderRoute(state.routeIndex + 1));
  renderRoute(0);
}

const clarityMessages = {
  "111": ["✦", "期待感成立", "玩家知道自己為何出發，也知道努力會換來什麼。", "例：Valheim、Terraria、Enshrouded"],
  "011": ["?", "缺少櫥窗：不知道為何前進", "有門、有路，卻看不到門後的新玩具；中期容易失去急迫感。", "對照：Don't Starve 的中期漂流"],
  "101": ["~", "缺少真正的門：變成沙盒漂流", "目標與路線都在，但沒有需要跨越的阻力，進程會失去節奏標點。", "對照：Minecraft 鐵裝後的自由漂流"],
  "110": ["!", "缺少地圖：努力變成迷航", "看得到也拿不到，卻不知道下一步；期待很快會翻成瞎找或 RNG 挫折。", "對照：Subnautica 低谷、7DTD 抱怨"],
  "100": ["×", "只有櫥窗：看得到，卻沒有玩法", "玩家知道好東西存在，但沒有清楚的門與路線可供挑戰。", "結果：渴望變成無力感"],
  "010": ["×", "只有一道牆：純粹被擋住", "沒有目標吸引，也沒有解法線索；這不是門檻，只是拒絕。", "結果：最接近硬性挫折"],
  "001": ["…", "只有地圖：像照著清單跑腿", "知道要去哪，卻沒有值得渴望的獎勵或需要跨越的挑戰。", "結果：流程正確，體感平淡"],
  "000": ["○", "進程消失", "沒有目標、門檻與路線，剩下完全自由的表達空間。", "適合純沙盒，不適合目標導向"]
};

function updateClarityResult() {
  const toggles = [...document.querySelectorAll(".clarity-toggle")];
  const key = toggles.map((button) => button.classList.contains("is-on") ? "1" : "0").join("");
  const [icon, title, copy, example] = clarityMessages[key];
  const result = document.querySelector("#clarity-result");
  result.classList.toggle("is-good", key === "111");
  result.classList.toggle("is-warning", key !== "111");
  result.innerHTML = `
    <span class="result-icon" aria-hidden="true">${icon}</span>
    <div><b>${escapeHtml(title)}</b><p>${escapeHtml(copy)}</p></div>
    <span class="result-example">${escapeHtml(example)}</span>
  `;
}

document.querySelector("#gate-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-gate]");
  if (!button) return;
  state.gate = button.dataset.gate;
  setSingleChoice("#gate-filters", "gate", state.gate);
  renderGames();
});

document.querySelector("#mode-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  state.mode = button.dataset.mode;
  setSingleChoice("#mode-filters", "mode", state.mode);
  renderGames();
});

document.querySelector("#group-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-group]");
  if (!button) return;
  state.group = button.dataset.group;
  setSingleChoice("#group-filters", "group", state.group);
  renderGames();
});

els.search.addEventListener("input", () => {
  state.query = els.search.value;
  renderGames();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== els.search) {
    event.preventDefault();
    els.search.focus();
  }
});

els.grid.addEventListener("click", (event) => {
  const compareButton = event.target.closest("[data-compare]");
  if (compareButton) {
    toggleCompare(compareButton.dataset.compare);
    return;
  }
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    const index = games.findIndex((game) => game.id === routeButton.dataset.route);
    renderRoute(index, true);
  }
});

document.querySelector("#reset-filters").addEventListener("click", resetFilters);
document.querySelector("#empty-reset").addEventListener("click", resetFilters);
document.querySelector("#compare-clear").addEventListener("click", () => {
  state.compared = [];
  renderGames();
});
els.compareOpen.addEventListener("click", openCompare);
document.querySelector("#compare-close").addEventListener("click", () => els.compareDialog.close());
els.compareDialog.addEventListener("click", (event) => {
  if (event.target === els.compareDialog) els.compareDialog.close();
});

document.querySelector("#clarity-controls").addEventListener("click", (event) => {
  const button = event.target.closest(".clarity-toggle");
  if (!button) return;
  const nextState = !button.classList.contains("is-on");
  button.classList.toggle("is-on", nextState);
  button.setAttribute("aria-pressed", String(nextState));
  button.querySelector(".toggle-mark").textContent = nextState ? "✓" : "×";
  updateClarityResult();
});

setupRouteSelector();
renderGames();
