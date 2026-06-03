// sections.jsx — page sections for Ignition Brand Design

const NAV = [
  { id: "home",       zhHant: "首頁",       zhHans: "首页",       en: "HOME" },
  { id: "about",      zhHant: "關於我們",   zhHans: "关于我们",   en: "ABOUT" },
  { id: "brand-film", zhHant: "短視頻作品", zhHans: "短视频作品", en: "VIDEOS" },
  { id: "services",   zhHant: "主營業務",   zhHans: "主营业务",   en: "SERVICES" },
  { id: "method",     zhHant: "設計方法論", zhHans: "设计方法论", en: "METHOD" },
  { id: "cases",      zhHant: "服務案例",   zhHans: "服务案例",   en: "WORK" },
  { id: "pricing",    zhHant: "服務階梯",   zhHans: "服务阶梯",   en: "PRICING" },
  { id: "contact",    zhHant: "聯繫我們",   zhHans: "联系我们",   en: "CONTACT" },
];

const I18N_TEXT = {
  "zh-hant": {
    navBrand: "燃點品牌設計",
    navCta: "啟動項目",
    themeDark: "黑",
    themeLight: "白",
    heroScene: "超級IP品牌策劃設計",
    heroSceneSub: "IP Brand Strategy & Design",
    heroGreeting: "Hi，讓品牌被看見，也被記住。",
    heroTag: "以 A.I. 邏輯，點燃品牌生命",
    aboutEyebrow: "關於我們  ·  ABOUT",
    aboutTitleA: "角色IP ＋ 品牌化運營 ＝ 品牌",
    aboutTitleB: "資產",
    aboutTitleC: "",
    aboutBody: "燃點是植根香港的高端視覺實驗室。我們不做廉價的「平面美化」——十五年以上設計沉澱，被我們重塑為一套可被商業驗證的方法：將品牌基因解碼成「超級 IP」，讓 IP 以潮玩規格進入產品線、進入聯名、進入盲盒、進入 Z 世代的私域。",
    aboutBody2: "一個沒有故事的形象，是空殼。一個沒有商業閉環的 IP，是擺設。我們交付的，是品牌可長期持有的資產。",
    shareDockTitle: "把燃點轉給品牌負責人",
    shareOpen: "打開分享卡",
    shareSystem: "系統分享",
    shareConsult: "啟動諮詢",
    shareCard: "推薦轉發文案",
    shareWechat: "微信/朋友圈",
    copyLink: "複製鏈接",
    shareWechatGuide: "微信不能由普通網頁直接打開「發給好友 / 朋友圈」。在微信內打開時，請點右上角「…」分享；在其他瀏覽器中可先複製文案或掃二維碼。",
  },
  "zh-hans": {
    navBrand: "燃点品牌设计",
    navCta: "启动项目",
    themeDark: "黑",
    themeLight: "白",
    heroScene: "超级IP品牌策划设计",
    heroSceneSub: "IP Brand Strategy & Design",
    heroGreeting: "Hi，让品牌被看见，也被记住。",
    heroTag: "以 A.I. 逻辑，点燃品牌生命",
    aboutEyebrow: "关于我们  ·  ABOUT",
    aboutTitleA: "角色IP ＋ 品牌化运营 ＝ 品牌",
    aboutTitleB: "资产",
    aboutTitleC: "",
    aboutBody: "燃点是植根香港的高端视觉实验室。我们不做廉价的“平面美化”，而是把十五年以上设计沉淀，重塑为一套可被商业验证的方法：将品牌基因解码成“超级 IP”，让 IP 进入产品线、联名、盲盒与年轻消费场景。",
    aboutBody2: "一个没有故事的形象，是空壳。一个没有商业闭环的 IP，是摆设。我们交付的，是品牌可长期持有的资产。",
    shareDockTitle: "把燃点转给品牌负责人",
    shareOpen: "打开分享卡",
    shareSystem: "系统分享",
    shareConsult: "启动咨询",
    shareCard: "推荐转发文案",
    shareWechat: "微信/朋友圈",
    copyLink: "复制链接",
    shareWechatGuide: "微信不能由普通网页直接打开“发给好友 / 朋友圈”。在微信内打开时，请点右上角“…”分享；在其他浏览器中可先复制文案或扫二维码。",
  },
  en: {
    navBrand: "Ignition Brand Design",
    navCta: "Start Project",
    themeDark: "Dark",
    themeLight: "Light",
    heroScene: "Super IP Brand Strategy & Design",
    heroSceneSub: "Character IP · Brand System · Licensing",
    heroGreeting: "Hi, make your brand seen and remembered.",
    heroTag: "Igniting brand life with strategy, design and IP logic",
    aboutEyebrow: "ABOUT US",
    aboutTitleA: "Character IP + brand operations = ",
    aboutTitleB: "brand assets",
    aboutTitleC: "",
    aboutBody: "Ignition is a Hong Kong based visual lab. We turn brand DNA into character IP, visual systems, packaging worlds and commercial assets that can live across products, content, collaborations and licensing.",
    aboutBody2: "A character without story is empty. An IP without commercial structure is decoration. We build assets that brands can keep growing.",
    shareDockTitle: "Share IBD with your brand team",
    shareOpen: "Open Card",
    shareSystem: "Share",
    shareConsult: "Start Brief",
    shareCard: "Suggested sharing copy",
    shareWechat: "WeChat",
    copyLink: "Copy link",
    shareWechatGuide: "Regular web pages cannot directly open WeChat friend or Moments sharing. Open this page inside WeChat and use the top-right menu, or copy the text and QR code.",
  },
};

const getUiLang = (lang) => I18N_TEXT[lang] ? lang : "zh-hant";
const tt = (lang, key) => I18N_TEXT[getUiLang(lang)][key] || I18N_TEXT["zh-hant"][key] || key;
const navLabel = (item, lang) => lang === "en" ? item.en : (lang === "zh-hans" ? item.zhHans : item.zhHant);
window.IBD_I18N = { tt, navLabel };

const TRAD_PHRASES = [
  ["黑马", "黑馬"], ["视频", "視頻"], ["说明", "說明"], ["专门", "專門"], ["创意", "創意"],
  ["设计", "設計"], ["首页", "首頁"], ["主页", "主頁"], ["案例", "案例"], ["标题", "標題"],
  ["图", "圖"], ["图片", "圖片"], ["文件", "文件"], ["上传", "上傳"], ["选择", "選擇"],
  ["显示", "顯示"], ["发布", "發布"], ["已经", "已經"], ["客户", "客戶"], ["联系", "聯繫"],
  ["品牌策划", "品牌策劃"], ["形象", "形象"], ["文化", "文化"], ["香港", "香港"],
];
const TRAD_CHARS = {
  专:"專", 为:"為", 业:"業", 东:"東", 丝:"絲", 丢:"丟", 两:"兩", 严:"嚴", 丧:"喪", 个:"個",
  临:"臨", 丽:"麗", 举:"舉", 义:"義", 乌:"烏", 乐:"樂", 乔:"喬", 习:"習", 乡:"鄉", 书:"書",
  买:"買", 乱:"亂", 争:"爭", 于:"於", 亏:"虧", 云:"雲", 亘:"亙", 亚:"亞", 产:"產", 亩:"畝",
  亲:"親", 亿:"億", 仅:"僅", 从:"從", 仑:"侖", 仓:"倉", 仪:"儀", 们:"們", 优:"優", 会:"會",
  伟:"偉", 传:"傳", 伤:"傷", 伦:"倫", 伪:"偽", 体:"體", 余:"餘", 佣:"傭", 侠:"俠", 侣:"侶",
  侥:"僥", 侦:"偵", 侧:"側", 侨:"僑", 侩:"儈", 侪:"儕", 侬:"儂", 俣:"俁", 俦:"儔", 俨:"儼",
  俩:"倆", 俪:"儷", 俭:"儉", 债:"債", 倾:"傾", 偿:"償", 储:"儲", 儿:"兒", 兑:"兌", 党:"黨",
  兰:"蘭", 关:"關", 兴:"興", 养:"養", 兽:"獸", 冁:"囅", 内:"內", 册:"冊", 写:"寫", 军:"軍",
  农:"農", 冲:"衝", 决:"決", 况:"況", 冻:"凍", 净:"淨", 准:"準", 凉:"涼", 减:"減", 凑:"湊",
  凛:"凜", 凤:"鳳", 凭:"憑", 凯:"凱", 击:"擊", 凿:"鑿", 划:"劃", 刘:"劉", 则:"則", 刚:"剛",
  创:"創", 删:"刪", 别:"別", 刬:"剗", 刭:"剄", 刹:"剎", 刽:"劊", 刿:"劌", 剀:"剴", 剂:"劑",
  剐:"剮", 剑:"劍", 剥:"剝", 剧:"劇", 劝:"勸", 办:"辦", 务:"務", 动:"動", 励:"勵", 劲:"勁",
  劳:"勞", 势:"勢", 勋:"勳", 勚:"勩", 勤:"勤", 匀:"勻", 匦:"匭", 匮:"匱", 区:"區", 医:"醫",
  华:"華", 协:"協", 单:"單", 卖:"賣", 卢:"盧", 卤:"鹵", 卫:"衛", 却:"卻", 厂:"廠", 厅:"廳",
  历:"歷", 厉:"厲", 压:"壓", 厌:"厭", 厕:"廁", 厢:"廂", 厣:"厴", 厦:"廈", 厨:"廚", 厩:"廄",
  县:"縣", 叁:"參", 参:"參", 双:"雙", 发:"發", 变:"變", 叙:"敘", 叠:"疊", 叶:"葉", 号:"號",
  后:"後", 向:"向", 吗:"嗎", 吨:"噸", 听:"聽", 启:"啟", 吴:"吳", 呐:"吶", 呒:"嘸", 呓:"囈",
  呕:"嘔", 员:"員", 呛:"嗆", 呜:"嗚", 咏:"詠", 咙:"嚨", 咛:"嚀", 咝:"噝", 咤:"吒", 咸:"鹹",
  响:"響", 哑:"啞", 哒:"噠", 哓:"嘵", 哔:"嗶", 哕:"噦", 哗:"嘩", 哙:"噲", 哜:"嚌", 哝:"噥",
  哟:"喲", 唛:"嘜", 唤:"喚", 啧:"嘖", 啬:"嗇", 啭:"囀", 啮:"嚙", 啰:"囉", 啴:"嘽", 啸:"嘯",
  喷:"噴", 喽:"嘍", 嗫:"囁", 嗳:"噯", 嘘:"噓", 嘤:"嚶", 嘱:"囑", 噜:"嚕", 嚣:"囂", 团:"團",
  园:"園", 围:"圍", 国:"國", 图:"圖", 圆:"圓", 圣:"聖", 场:"場", 坏:"壞", 块:"塊", 坚:"堅",
  坛:"壇", 坝:"壩", 坞:"塢", 坟:"墳", 坠:"墜", 垄:"壟", 垅:"壟", 垆:"壚", 垒:"壘", 垦:"墾",
  垩:"堊", 垫:"墊", 垭:"埡", 垱:"壋", 垲:"塏", 垴:"堖", 埘:"塒", 埙:"塤", 埚:"堝", 堑:"塹",
  堕:"墮", 墙:"牆", 壮:"壯", 声:"聲", 壳:"殼", 壶:"壺", 处:"處", 备:"備", 复:"復", 够:"夠",
  头:"頭", 夹:"夾", 夺:"奪", 奁:"奩", 奂:"奐", 奋:"奮", 奖:"獎", 奥:"奧", 妆:"妝", 妇:"婦",
  妈:"媽", 妩:"嫵", 妪:"嫗", 妫:"媯", 姗:"姍", 姹:"奼", 娄:"婁", 娅:"婭", 娆:"嬈", 娇:"嬌",
  娈:"孌", 娱:"娛", 娲:"媧", 娴:"嫻", 婳:"嫿", 婴:"嬰", 婵:"嬋", 婶:"嬸", 媪:"媼", 嫒:"嬡",
  嫔:"嬪", 嫱:"嬙", 孙:"孫", 学:"學", 孪:"孿", 宁:"寧", 宝:"寶", 实:"實", 宠:"寵", 审:"審",
  宪:"憲", 宫:"宮", 宽:"寬", 宾:"賓", 寝:"寢", 对:"對", 寻:"尋", 导:"導", 寿:"壽", 将:"將",
  尔:"爾", 尘:"塵", 尝:"嘗", 尧:"堯", 尴:"尷", 尸:"屍", 尽:"盡", 层:"層", 屉:"屜", 届:"屆",
  属:"屬", 屡:"屢", 岁:"歲", 岂:"豈", 岖:"嶇", 岗:"崗", 岘:"峴", 岚:"嵐", 岛:"島", 岭:"嶺",
  岳:"嶽", 岽:"崬", 岿:"巋", 峄:"嶧", 峡:"峽", 峣:"嶢", 峤:"嶠", 峥:"崢", 峦:"巒", 崇:"崇",
  巅:"巔", 巩:"鞏", 巯:"巰", 币:"幣", 帅:"帥", 师:"師", 帐:"帳", 帘:"簾", 帜:"幟", 带:"帶",
  帧:"幀", 帮:"幫", 帱:"幬", 帻:"幘", 帼:"幗", 幂:"冪", 干:"幹", 并:"並", 广:"廣", 庄:"莊",
  庆:"慶", 庐:"廬", 庑:"廡", 库:"庫", 应:"應", 庙:"廟", 庞:"龐", 废:"廢", 廪:"廩", 开:"開",
  异:"異", 弃:"棄", 张:"張", 弥:"彌", 弯:"彎", 弹:"彈", 强:"強", 归:"歸", 当:"當", 录:"錄",
  彦:"彥", 彻:"徹", 径:"徑", 徕:"徠", 征:"徵", 御:"禦", 忆:"憶", 忏:"懺", 忧:"憂", 忾:"愾",
  怀:"懷", 态:"態", 怂:"慫", 怜:"憐", 总:"總", 怼:"懟", 恋:"戀", 恳:"懇", 恶:"惡", 恸:"慟",
  恹:"懨", 恺:"愷", 恻:"惻", 恼:"惱", 恽:"惲", 悦:"悅", 悮:"悞", 惊:"驚", 惧:"懼", 惨:"慘",
  惩:"懲", 惫:"憊", 惬:"愜", 惭:"慚", 惮:"憚", 惯:"慣", 愤:"憤", 愦:"憒", 愿:"願", 慑:"懾",
  懑:"懣", 懒:"懶", 戏:"戲", 户:"戶", 扑:"撲", 执:"執", 扩:"擴", 扪:"捫", 扫:"掃", 扬:"揚",
  扰:"擾", 抚:"撫", 抛:"拋", 抟:"摶", 抠:"摳", 抡:"掄", 抢:"搶", 护:"護", 报:"報", 担:"擔",
  拟:"擬", 拢:"攏", 拣:"揀", 拥:"擁", 拦:"攔", 拧:"擰", 拨:"撥", 择:"擇", 挂:"掛", 挚:"摯",
  挛:"攣", 挜:"掗", 挝:"撾", 挞:"撻", 挟:"挾", 挠:"撓", 挡:"擋", 挢:"撟", 挣:"掙", 挤:"擠",
  挥:"揮", 挦:"撏", 挽:"挽", 捞:"撈", 损:"損", 捡:"撿", 换:"換", 捣:"搗", 据:"據", 掳:"擄",
  掴:"摑", 掷:"擲", 掸:"撣", 掺:"摻", 掼:"摜", 揽:"攬", 揿:"撳", 搀:"攙", 搁:"擱", 搂:"摟",
  搅:"攪", 携:"攜", 摄:"攝", 摅:"攄", 摆:"擺", 摇:"搖", 摈:"擯", 摊:"攤", 撄:"攖", 撑:"撐",
  撵:"攆", 撷:"擷",撸:"擼", 撺:"攛", 擞:"擻", 攒:"攢", 敌:"敵", 敛:"斂", 数:"數", 斋:"齋",
  斓:"斕", 斗:"鬥", 斩:"斬", 断:"斷", 无:"無", 旧:"舊", 时:"時", 旷:"曠", 昙:"曇", 昼:"晝",
  显:"顯", 晋:"晉", 晒:"曬", 晓:"曉", 晔:"曄", 晕:"暈", 晖:"暉", 暂:"暫", 暧:"曖", 术:"術",
  朴:"樸", 机:"機", 杀:"殺", 杂:"雜", 权:"權", 条:"條", 来:"來", 杨:"楊", 杩:"榪", 杰:"傑",
  极:"極", 构:"構", 枞:"樅", 枢:"樞", 枣:"棗", 枥:"櫪", 枧:"梘", 枨:"棖", 枪:"槍", 枫:"楓",
  枭:"梟", 柜:"櫃", 柠:"檸", 柽:"檉", 栀:"梔", 栅:"柵", 标:"標", 栈:"棧", 栉:"櫛", 栊:"櫳",
  栋:"棟", 栌:"櫨", 栎:"櫟", 栏:"欄", 树:"樹", 栖:"棲", 栗:"栗", 样:"樣", 栾:"欒", 桠:"椏",
  桡:"橈", 桢:"楨", 档:"檔", 桤:"榿", 桥:"橋", 桦:"樺", 桧:"檜", 桨:"槳", 桩:"樁", 梦:"夢",
  梼:"檮", 梾:"棶", 检:"檢", 棂:"欞", 椁:"槨", 椟:"櫝", 椠:"槧", 椤:"欏", 椭:"橢", 楼:"樓",
  榄:"欖", 榅:"榲", 榇:"櫬", 榈:"櫚", 榉:"櫸", 槚:"檟", 槛:"檻", 槟:"檳", 横:"橫", 樯:"檣",
  樱:"櫻", 橥:"櫫", 橱:"櫥", 橹:"櫓", 橼:"櫞", 檩:"檁", 欢:"歡", 欤:"歟", 欧:"歐", 欲:"欲",
  歼:"殲", 殁:"歿", 残:"殘", 殒:"殞", 殓:"殮", 殚:"殫", 殡:"殯", 殴:"毆", 毁:"毀", 毕:"畢",
  毙:"斃", 毡:"氈", 毵:"毿", 气:"氣", 氢:"氫", 氩:"氬", 氲:"氳", 汇:"匯", 汉:"漢", 汤:"湯",
  汹:"洶", 沟:"溝", 没:"沒", 沣:"灃", 沤:"漚", 沥:"瀝", 沦:"淪", 沧:"滄", 沨:"渢", 沩:"潙",
  沪:"滬", 沵:"濔", 泞:"濘", 泪:"淚", 泶:"澩", 泷:"瀧", 泸:"瀘", 泺:"濼", 泻:"瀉", 泼:"潑",
  泽:"澤", 泾:"涇", 洁:"潔", 洒:"灑", 洼:"窪", 浃:"浹", 浅:"淺", 浆:"漿", 浇:"澆", 浈:"湞",
  浊:"濁", 测:"測", 浍:"澮", 济:"濟", 浏:"瀏", 浐:"滻", 浑:"渾", 浒:"滸", 浓:"濃", 浔:"潯",
  涛:"濤", 涝:"澇", 涞:"淶", 涟:"漣", 涠:"潿", 涡:"渦", 涣:"渙", 涤:"滌", 润:"潤", 涧:"澗",
  涨:"漲", 涩:"澀", 淀:"澱", 渊:"淵", 渌:"淥", 渍:"漬", 渎:"瀆", 渐:"漸", 渑:"澠", 渔:"漁",
  渖:"瀋", 渗:"滲", 温:"溫", 游:"遊", 湾:"灣", 湿:"濕", 溃:"潰", 溅:"濺", 溆:"漵", 溇:"漊",
  滚:"滾", 滞:"滯", 滟:"灩", 滠:"灄", 满:"滿", 滢:"瀅", 滤:"濾", 滥:"濫", 滦:"灤", 滨:"濱",
  滩:"灘", 滪:"澦", 漤:"灠", 潆:"瀠", 潇:"瀟", 潋:"瀲", 潍:"濰", 潜:"潛", 潴:"瀦", 澜:"瀾",
  濑:"瀨", 濒:"瀕", 灏:"灝", 灭:"滅", 灯:"燈", 灵:"靈", 灾:"災", 灿:"燦", 炀:"煬", 炉:"爐",
  炖:"燉", 炜:"煒", 炝:"熗", 点:"點", 炼:"煉", 炽:"熾", 烁:"爍", 烂:"爛", 烃:"烴", 烛:"燭",
  烟:"煙", 烦:"煩", 烧:"燒", 烨:"燁", 烩:"燴", 烫:"燙", 烬:"燼", 热:"熱", 焕:"煥", 焖:"燜",
  焘:"燾", 爱:"愛", 爷:"爺", 牵:"牽", 犁:"犁", 犊:"犢", 状:"狀", 犷:"獷", 犸:"獁", 犹:"猶",
  狈:"狽", 狞:"獰", 独:"獨", 狭:"狹", 狮:"獅", 狯:"獪", 狰:"猙", 狱:"獄", 狲:"猻", 猃:"獫",
  猕:"獼", 猡:"玀", 猪:"豬", 猫:"貓", 献:"獻", 獭:"獺", 玑:"璣", 玙:"璵", 玛:"瑪", 玮:"瑋",
  环:"環", 现:"現", 玱:"瑲", 玺:"璽", 珐:"琺", 珑:"瓏", 珰:"璫", 珲:"琿", 琏:"璉", 琐:"瑣",
  琼:"瓊", 瑶:"瑤", 瑷:"璦", 璎:"瓔", 瓒:"瓚", 瓮:"甕", 瓯:"甌", 电:"電", 画:"畫", 畅:"暢",
  畴:"疇", 疖:"癤", 疗:"療", 疟:"瘧", 疠:"癘", 疡:"瘍", 疬:"癧", 疮:"瘡", 疯:"瘋", 疱:"皰",
  疴:"痾", 痈:"癰", 痉:"痙", 痒:"癢", 痨:"癆", 痪:"瘓", 痫:"癇", 瘅:"癉", 瘗:"瘞", 瘘:"瘻",
  瘪:"癟", 瘫:"癱", 瘾:"癮", 瘿:"癭", 癞:"癩", 癣:"癬", 癫:"癲", 皑:"皚", 皱:"皺", 皲:"皸",
  盏:"盞", 盐:"鹽", 监:"監", 盖:"蓋", 盗:"盜", 盘:"盤", 眍:"瞘", 眦:"眥", 眬:"矓", 睁:"睜",
  睐:"睞", 睑:"瞼", 瞒:"瞞", 瞩:"矚", 矫:"矯", 矶:"磯", 矾:"礬", 矿:"礦", 砀:"碭", 码:"碼",
  砖:"磚", 砗:"硨", 砚:"硯", 砜:"碸", 砺:"礪", 砻:"礱", 砾:"礫", 础:"礎", 硕:"碩", 硖:"硤",
  硗:"磽", 硙:"磑", 硚:"礄", 确:"確", 硷:"鹼", 碍:"礙", 碛:"磧", 碜:"磣", 礼:"禮", 祎:"禕",
  祢:"禰", 祯:"禎", 祷:"禱", 祸:"禍", 禀:"稟", 禄:"祿", 禅:"禪", 离:"離", 秃:"禿", 秆:"稈",
  种:"種", 积:"積", 称:"稱", 税:"稅", 稣:"穌", 稳:"穩", 穷:"窮", 窃:"竊", 窍:"竅", 窑:"窯",
  窜:"竄", 窝:"窩", 窥:"窺", 窦:"竇", 竞:"競", 笃:"篤", 笋:"筍", 笔:"筆", 笕:"筧", 笺:"箋",
  笼:"籠", 筑:"築", 筚:"篳", 筛:"篩", 筜:"簹", 筝:"箏", 筹:"籌", 签:"簽", 简:"簡", 箓:"籙",
  箦:"簀", 箧:"篋", 箨:"籜", 箩:"籮", 箪:"簞", 箫:"簫", 篑:"簣", 篓:"簍", 篮:"籃", 篱:"籬",
  簖:"籪", 籁:"籟", 籴:"糴", 类:"類", 粜:"糶", 粝:"糲", 粤:"粵", 粪:"糞", 粮:"糧", 糁:"糝",
  糇:"餱", 紧:"緊", 累:"累", 絷:"縶", 纠:"糾", 纡:"紆", 红:"紅", 纣:"紂", 纤:"纖", 纥:"紇",
  约:"約", 级:"級", 纨:"紈", 纩:"纊", 纪:"紀", 纫:"紉", 纬:"緯", 纭:"紜", 纯:"純", 纰:"紕",
  纱:"紗", 纲:"綱", 纳:"納", 纵:"縱", 纶:"綸", 纷:"紛", 纸:"紙", 纹:"紋", 纺:"紡", 纽:"紐",
  纾:"紓", 线:"線", 绀:"紺", 绁:"紲", 练:"練", 组:"組", 绅:"紳", 细:"細", 织:"織", 终:"終",
  绉:"縐", 绊:"絆", 绋:"紼", 绌:"絀", 绍:"紹", 绎:"繹", 经:"經", 绐:"紿", 绑:"綁", 绒:"絨",
  结:"結", 绔:"絝", 绕:"繞", 绘:"繪", 给:"給", 绚:"絢", 绛:"絳", 络:"絡", 绝:"絕", 绞:"絞",
  统:"統", 绠:"綆", 绡:"綃", 绢:"絹", 绣:"繡", 绥:"綏", 绦:"絛", 继:"繼", 绨:"綈", 绩:"績",
  绪:"緒", 绫:"綾", 续:"續", 绮:"綺", 绯:"緋", 绰:"綽", 绱:"緔", 绲:"緄", 绳:"繩", 维:"維",
  绵:"綿", 绶:"綬", 绷:"繃", 绸:"綢", 绹:"綯", 绺:"綹", 绻:"綣", 综:"綜", 绽:"綻", 绾:"綰",
  绿:"綠", 缀:"綴", 缁:"緇", 缂:"緙", 缃:"緗", 缄:"緘", 缅:"緬", 缆:"纜", 缇:"緹", 缈:"緲",
  缉:"緝", 缊:"縕", 缋:"繢", 缌:"緦", 缍:"綞", 缎:"緞", 缏:"緶", 缐:"線", 缑:"緱", 缒:"縋",
  缓:"緩", 缔:"締", 缕:"縷", 编:"編", 缗:"緡", 缘:"緣", 缙:"縉", 缚:"縛", 缛:"縟", 缜:"縝",
  缝:"縫", 缞:"縗", 缟:"縞", 缠:"纏", 缡:"縭", 缢:"縊", 缣:"縑", 缤:"繽", 缥:"縹", 缦:"縵",
  缧:"縲", 缨:"纓", 缩:"縮", 缪:"繆", 缫:"繅", 缬:"纈", 缭:"繚", 缮:"繕", 缯:"繒", 缰:"韁",
  缱:"繾", 缲:"繰", 缳:"繯", 缴:"繳", 缵:"纘", 罂:"罌", 网:"網", 罗:"羅", 罚:"罰", 罢:"罷",
  罴:"羆", 羁:"羈", 羟:"羥", 翘:"翹", 耢:"耮", 耧:"耬", 耸:"聳", 耻:"恥", 聂:"聶", 聋:"聾",
  职:"職", 联:"聯", 聩:"聵", 聪:"聰", 肃:"肅", 肠:"腸", 肤:"膚", 肮:"骯", 肴:"餚", 肾:"腎",
  肿:"腫", 胀:"脹", 胁:"脅", 胆:"膽", 胜:"勝", 胧:"朧", 胨:"腖", 胪:"臚", 胫:"脛", 胶:"膠",
  脉:"脈", 脍:"膾", 脏:"髒", 脐:"臍", 脑:"腦", 脓:"膿", 脔:"臠", 脚:"腳", 脱:"脫", 脶:"腡",
  脸:"臉", 腊:"臘", 腌:"醃", 腘:"膕", 腭:"齶", 腻:"膩", 腼:"靦", 腽:"膃", 腾:"騰", 膑:"臏",
  臜:"臢", 舆:"輿", 舣:"艤", 舰:"艦", 舱:"艙", 舻:"艫", 艰:"艱", 艳:"艷", 艺:"藝", 节:"節",
  芈:"羋", 芗:"薌", 芜:"蕪", 芦:"蘆", 苁:"蓯", 苇:"葦", 苈:"藶", 苋:"莧", 苌:"萇", 苍:"蒼",
  苎:"苧", 苏:"蘇", 苹:"蘋", 范:"範", 茎:"莖", 茏:"蘢", 茑:"蔦", 茔:"塋", 茕:"煢", 茧:"繭",
  荆:"荊", 荐:"薦", 荙:"薘", 荚:"莢", 荛:"蕘", 荜:"蓽", 荞:"蕎", 荟:"薈", 荠:"薺", 荡:"蕩",
  荣:"榮", 荤:"葷", 荥:"滎", 荦:"犖", 荧:"熒", 荨:"蕁", 荩:"藎", 荪:"蓀", 荫:"蔭", 荬:"蕒",
  荭:"葒", 荮:"葤", 药:"藥", 莅:"蒞", 莱:"萊", 莲:"蓮", 莳:"蒔", 莴:"萵", 莶:"薟", 获:"獲",
  莸:"蕕", 莹:"瑩", 莺:"鶯", 莼:"蓴", 萚:"蘀", 萝:"蘿", 萤:"螢", 营:"營", 萦:"縈", 萧:"蕭",
  萨:"薩", 葱:"蔥", 蒇:"蕆", 蒉:"蕢", 蒋:"蔣", 蒌:"蔞", 蓝:"藍", 蓟:"薊", 蓠:"蘺", 蓣:"蕷",
  蓥:"鎣", 蓦:"驀", 蔷:"薔", 蔹:"蘞", 蔺:"藺", 蔼:"藹", 蕲:"蘄", 蕴:"蘊", 薮:"藪", 藓:"蘚",
  虏:"虜", 虑:"慮", 虚:"虛", 虫:"蟲", 虬:"虯", 虮:"蟣", 虽:"雖", 虾:"蝦", 虿:"蠆", 蚀:"蝕",
  蚁:"蟻", 蚂:"螞", 蚕:"蠶", 蚝:"蠔", 蛊:"蠱", 蛎:"蠣", 蛏:"蟶", 蛮:"蠻", 蛰:"蟄", 蛱:"蛺",
  蛲:"蟯", 蛳:"螄", 蛴:"蠐", 蜕:"蛻", 蜗:"蝸", 蜡:"蠟", 蝇:"蠅", 蝈:"蟈", 蝉:"蟬", 蝎:"蠍",
  蝼:"螻", 蝾:"蠑", 螀:"螿", 螨:"蟎", 蟏:"蠨", 衅:"釁", 衔:"銜", 补:"補", 表:"表", 袄:"襖",
  袅:"裊", 袜:"襪", 袭:"襲", 袯:"襏", 装:"裝", 裆:"襠", 裢:"褳", 裤:"褲", 裥:"襇", 褛:"褸",
  褴:"襤", 见:"見", 观:"觀", 规:"規", 觅:"覓", 视:"視", 览:"覽", 觉:"覺", 觊:"覬", 觋:"覡",
  觌:"覿", 觎:"覦", 觏:"覯", 觐:"覲", 觑:"覷", 觞:"觴", 触:"觸", 訚:"誾", 詟:"讋", 誉:"譽",
  誊:"謄", 讠:"訁", 计:"計", 订:"訂", 讣:"訃", 认:"認", 讥:"譏", 讦:"訐", 讧:"訌", 讨:"討",
  让:"讓", 讪:"訕", 讫:"訖", 训:"訓", 议:"議", 讯:"訊", 记:"記", 讲:"講", 讳:"諱", 讴:"謳",
  讵:"詎", 讶:"訝", 讷:"訥", 许:"許", 讹:"訛", 论:"論", 讼:"訟", 讽:"諷", 设:"設", 访:"訪",
  诀:"訣", 证:"證", 诂:"詁", 诃:"訶", 评:"評", 诅:"詛", 识:"識", 诈:"詐", 诉:"訴", 诊:"診",
  诋:"詆", 诌:"謅", 词:"詞", 诎:"詘", 诏:"詔", 译:"譯", 诒:"詒", 诓:"誆", 诔:"誄", 试:"試",
  诗:"詩", 诘:"詰", 诙:"詼", 诚:"誠", 诛:"誅", 诜:"詵", 话:"話", 诞:"誕", 诟:"詬", 诠:"詮",
  诡:"詭", 询:"詢", 诣:"詣", 诤:"諍", 该:"該", 详:"詳", 诧:"詫", 诨:"諢", 诩:"詡", 诫:"誡",
  诬:"誣", 语:"語", 诮:"誚", 误:"誤", 诰:"誥", 诱:"誘", 诲:"誨", 诳:"誑", 说:"說", 诵:"誦",
  诶:"誒", 请:"請", 诸:"諸", 诹:"諏", 诺:"諾", 读:"讀", 诼:"諑", 诽:"誹", 课:"課", 诿:"諉",
  谀:"諛", 谁:"誰", 谂:"諗", 调:"調", 谄:"諂", 谅:"諒", 谆:"諄", 谇:"誶", 谈:"談", 谊:"誼",
  谋:"謀", 谌:"諶", 谍:"諜", 谎:"謊", 谏:"諫", 谐:"諧", 谑:"謔", 谒:"謁", 谓:"謂", 谔:"諤",
  谕:"諭", 谖:"諼", 谗:"讒", 谘:"諮", 谙:"諳", 谚:"諺", 谛:"諦", 谜:"謎", 谝:"諞", 谞:"諝",
  谟:"謨", 谠:"讜", 谡:"謖", 谢:"謝", 谣:"謠", 谤:"謗", 谥:"謚", 谦:"謙", 谧:"謐", 谨:"謹",
  谩:"謾", 谪:"謫", 谫:"譾", 谬:"謬", 谭:"譚", 谮:"譖", 谯:"譙", 谰:"讕", 谱:"譜", 谲:"譎",
  谳:"讞", 谴:"譴", 谵:"譫", 谶:"讖", 谷:"谷", 豆:"豆", 象:"象", 豪:"豪", 貌:"貌", 贝:"貝",
  贞:"貞", 负:"負", 贡:"貢", 财:"財", 责:"責", 贤:"賢", 败:"敗", 账:"賬", 货:"貨", 质:"質",
  贩:"販", 贪:"貪", 贫:"貧", 贬:"貶", 购:"購", 贮:"貯", 贯:"貫", 贰:"貳", 贱:"賤", 贲:"賁",
  贳:"貰", 贴:"貼", 贵:"貴", 贶:"貺", 贷:"貸", 贸:"貿", 费:"費", 贺:"賀", 贻:"貽", 贼:"賊",
  贽:"贄", 贾:"賈", 贿:"賄", 赀:"貲", 赁:"賃", 赂:"賂", 赃:"贓", 资:"資", 赅:"賅", 赆:"贐",
  赇:"賕", 赈:"賑", 赉:"賚", 赊:"賒", 赋:"賦", 赌:"賭", 赍:"齎", 赎:"贖", 赏:"賞", 赐:"賜",
  赑:"贔", 赒:"賙", 赓:"賡", 赔:"賠", 赕:"賧", 赖:"賴", 赗:"賵", 赘:"贅", 赙:"賻", 赚:"賺",
  赛:"賽", 赜:"賾", 赝:"贗", 赞:"贊", 赠:"贈", 赡:"贍", 赢:"贏", 赣:"贛", 赵:"趙", 赶:"趕",
  趋:"趨", 趱:"趲", 跃:"躍", 跄:"蹌", 跖:"蹠", 跞:"躒", 践:"踐", 跷:"蹺", 跸:"蹕", 跹:"躚",
  跻:"躋", 踊:"踴", 踌:"躊", 踪:"蹤", 踬:"躓", 踯:"躑", 蹑:"躡", 蹒:"蹣", 蹰:"躕", 蹿:"躥",
  躏:"躪", 躯:"軀", 车:"車", 轧:"軋", 轨:"軌", 轩:"軒", 轪:"軑", 轫:"軔", 转:"轉", 轭:"軛",
  轮:"輪", 软:"軟", 轰:"轟", 轱:"軲", 轲:"軻", 轳:"轤", 轴:"軸", 轵:"軹", 轶:"軼", 轷:"軤",
  轸:"軫", 轹:"轢", 轺:"軺", 轻:"輕", 轼:"軾", 载:"載", 轾:"輊", 轿:"轎", 辀:"輈", 辁:"輇",
  辂:"輅", 较:"較", 辄:"輒", 辅:"輔", 辆:"輛", 辇:"輦", 辈:"輩", 辉:"輝", 辊:"輥", 辋:"輞",
  辍:"輟", 辎:"輜", 辏:"輳", 辐:"輻",辑:"輯", 输:"輸", 辔:"轡", 辕:"轅", 辖:"轄", 辗:"輾",
  辙:"轍", 辚:"轔", 辞:"辭", 辩:"辯", 辫:"辮", 边:"邊", 辽:"遼", 达:"達", 迁:"遷", 过:"過",
  迈:"邁", 运:"運", 还:"還", 这:"這", 进:"進", 远:"遠", 违:"違", 连:"連", 迟:"遲", 迩:"邇",
  迳:"逕", 迹:"跡", 适:"適", 选:"選", 逊:"遜", 递:"遞", 逦:"邐", 逻:"邏", 遗:"遺", 邓:"鄧",
  邮:"郵", 邻:"鄰", 郁:"鬱", 郄:"郤", 郑:"鄭", 郓:"鄆", 郦:"酈", 郧:"鄖", 郸:"鄲", 酝:"醞",
  酦:"醱", 酱:"醬", 酽:"釅", 酾:"釃", 酿:"釀", 释:"釋", 里:"裡", 鉴:"鑒", 钆:"釓", 钇:"釔",
  针:"針", 钉:"釘", 钊:"釗", 钋:"釙", 钌:"釕", 钍:"釷", 钎:"釺", 钏:"釧", 钐:"釤", 钒:"釩",
  钓:"釣", 钔:"鍆", 钕:"釹", 钗:"釵", 钙:"鈣", 钚:"鈈", 钛:"鈦", 钜:"鉅", 钝:"鈍", 钞:"鈔",
  钟:"鐘", 钠:"鈉", 钡:"鋇", 钢:"鋼", 钣:"鈑", 钤:"鈐", 钥:"鑰", 钦:"欽", 钧:"鈞", 钨:"鎢",
  钩:"鉤", 钪:"鈧", 钫:"鈁", 钬:"鈥", 钭:"鈄", 钮:"鈕", 钯:"鈀", 钰:"鈺", 钱:"錢", 钲:"鉦",
  钳:"鉗", 钴:"鈷", 钵:"缽", 钶:"鈳", 钷:"鉕", 钸:"鈽", 钹:"鈸", 钺:"鉞", 钻:"鑽", 钼:"鉬",
  钽:"鉭", 钾:"鉀", 钿:"鈿", 铀:"鈾", 铁:"鐵", 铂:"鉑", 铃:"鈴", 铄:"鑠", 铅:"鉛", 铆:"鉚",
  铈:"鈰", 铉:"鉉", 铊:"鉈", 铋:"鉍", 铌:"鈮", 铍:"鈹", 铎:"鐸", 铐:"銬", 铑:"銠", 铒:"鉺",
  铕:"銪", 铖:"鋮", 铗:"鋏", 铘:"鋣", 铙:"鐃", 铚:"銍", 铛:"鐺", 铜:"銅", 铝:"鋁", 铞:"銱",
  铟:"銦", 铠:"鎧", 铡:"鍘", 铢:"銖", 铣:"銑", 铤:"鋌", 铥:"銩", 铧:"鏵", 铨:"銓", 铩:"鎩",
  铪:"鉿", 铫:"銚", 铬:"鉻", 铭:"銘", 铮:"錚", 铯:"銫", 铰:"鉸", 铱:"銥", 铲:"鏟", 铳:"銃",
  铴:"鐋", 铵:"銨", 银:"銀", 铷:"銣", 铸:"鑄", 铹:"鐒", 铺:"鋪", 铼:"錸", 铽:"鋱", 链:"鏈",
  铿:"鏗", 销:"銷", 锁:"鎖", 锂:"鋰", 锃:"鋥", 锄:"鋤", 锅:"鍋", 锆:"鋯", 锇:"鋨", 锈:"鏽",
  锉:"銼", 锊:"鋝", 锋:"鋒", 锌:"鋅", 锍:"鋶", 锎:"鐦", 锏:"鐧", 锐:"銳", 锑:"銻", 锒:"鋃",
  锓:"鋟", 锔:"鋦", 锕:"錒", 锖:"錆", 锗:"鍺", 锘:"鍩", 错:"錯", 锚:"錨", 锛:"錛", 锜:"錡",
  锝:"鍀", 锞:"錁", 锟:"錕", 锡:"錫", 锢:"錮", 锣:"鑼", 锤:"錘", 锥:"錐", 锦:"錦", 锧:"鑕",
  锨:"杴", 锩:"錈", 锪:"鍃", 锫:"錇", 锬:"錟", 锭:"錠", 键:"鍵", 锯:"鋸", 锰:"錳", 锱:"錙",
  锲:"鍥", 锴:"鍇", 锵:"鏘", 锶:"鍶", 锷:"鍔", 锸:"鍤", 锹:"鍬", 锺:"鍾", 锻:"鍛", 锼:"鎪",
  锾:"鍰", 锿:"鎄", 镀:"鍍", 镁:"鎂", 镂:"鏤", 镃:"鎡", 镄:"鐨", 镅:"鎇", 镆:"鏌", 镇:"鎮",
  镈:"鎛", 镉:"鎘", 镊:"鑷", 镋:"钂", 镌:"鐫", 镍:"鎳", 镎:"鎿", 镏:"鎦", 镐:"鎬", 镑:"鎊",
  镒:"鎰", 镓:"鎵", 镔:"鑌", 镕:"鎔", 镖:"鏢", 镗:"鏜", 镘:"鏝", 镙:"鏍", 镚:"鏰", 镛:"鏞",
  镜:"鏡", 镝:"鏑", 镞:"鏃", 镟:"鏇", 镠:"鏐", 镡:"鐔", 镢:"钁", 镣:"鐐", 镤:"鏷", 镥:"鑥",
  镦:"鐓", 镧:"鑭", 镨:"鐠", 镩:"鑹", 镪:"鏹", 镫:"鐙", 镬:"鑊", 镭:"鐳", 镮:"鐶", 镯:"鐲",
  镰:"鐮", 镱:"鐿", 镲:"鑔", 镳:"鑣", 镴:"鑞", 长:"長", 门:"門", 闩:"閂", 闪:"閃", 闫:"閆",
  闭:"閉", 问:"問", 闯:"闖", 闰:"閏", 闱:"闈", 闲:"閒", 闳:"閎", 间:"間", 闵:"閔", 闶:"閌",
  闷:"悶", 闸:"閘", 闹:"鬧", 闺:"閨", 闻:"聞", 闼:"闥", 闽:"閩", 闾:"閭", 闿:"闓", 阀:"閥",
  阁:"閣", 阂:"閡", 阃:"閫", 阄:"鬮", 阅:"閱", 阆:"閬", 阇:"闍", 阈:"閾", 阉:"閹", 阊:"閶",
  阋:"鬩", 阌:"閿", 阍:"閽", 阎:"閻", 阏:"閼", 阐:"闡", 阑:"闌", 阒:"闃", 阔:"闊", 阕:"闋",
  阖:"闔", 阗:"闐", 阙:"闕", 阚:"闞", 队:"隊", 阳:"陽", 阴:"陰", 阵:"陣", 阶:"階", 际:"際",
  陆:"陸", 陈:"陳", 陉:"陘", 陕:"陝", 陧:"隉", 陨:"隕", 险:"險", 随:"隨", 隐:"隱", 隶:"隸",
  隽:"雋", 难:"難", 雏:"雛", 雳:"靂", 雾:"霧", 霁:"霽", 霉:"黴", 霭:"靄", 靓:"靚", 静:"靜",
  面:"面", 鞑:"韃", 鞒:"鞽", 鞯:"韉", 韦:"韋", 韧:"韌", 韩:"韓", 韪:"韙", 韫:"韞", 韬:"韜",
  韵:"韻", 页:"頁", 顶:"頂", 顷:"頃", 项:"項", 顺:"順", 须:"須", 顼:"頊", 顽:"頑", 顾:"顧",
  顿:"頓", 颀:"頎", 颁:"頒", 颂:"頌", 颃:"頏", 预:"預", 颅:"顱", 领:"領", 颇:"頗", 颈:"頸",
  颉:"頡", 颊:"頰", 颌:"頜", 颍:"潁", 颎:"熲", 颏:"頦", 颐:"頤", 频:"頻", 颓:"頹", 颔:"頷",
  颖:"穎", 颗:"顆", 题:"題", 额:"額", 颚:"顎", 颛:"顓", 颜:"顏", 额:"額", 颞:"顳", 颟:"顢",
  颠:"顛", 颡:"顙", 颢:"顥", 颤:"顫", 颥:"顬", 颦:"顰", 风:"風", 飐:"颭", 飑:"颮", 飒:"颯",
  飓:"颶", 飔:"颸", 飕:"颼", 飖:"颻", 飘:"飄", 飙:"飆", 飚:"飈", 飞:"飛", 饣:"飠", 饥:"飢",
  饧:"餳", 饨:"飩", 饩:"餼", 饪:"飪", 饫:"飫", 饬:"飭", 饭:"飯", 饮:"飲", 饯:"餞", 饰:"飾",
  饱:"飽", 饲:"飼", 饳:"飿", 饴:"飴", 饵:"餌", 饶:"饒", 饷:"餉", 饸:"餄", 饹:"餎", 饺:"餃",
  饻:"餏", 饼:"餅", 饽:"餑", 饿:"餓", 馁:"餒", 馂:"餕", 馃:"餜", 馄:"餛", 馅:"餡", 馆:"館",
  馇:"餷", 馈:"饋", 馉:"餶", 馊:"餿", 馋:"饞", 馌:"饁", 馍:"饃", 馎:"餺", 馏:"餾", 馐:"饈",
  馑:"饉", 馒:"饅", 馓:"饊", 馔:"饌", 馕:"饢", 马:"馬", 驭:"馭", 驮:"馱", 驯:"馴", 驰:"馳",
  驱:"驅", 驲:"馹", 驳:"駁", 驴:"驢", 驵:"駔", 驶:"駛", 驷:"駟", 驸:"駙", 驹:"駒", 驺:"騶",
  驻:"駐", 驼:"駝", 驽:"駑", 驾:"駕", 驿:"驛", 骀:"駘", 骁:"驍", 骂:"罵", 骄:"驕", 骅:"驊",
  骆:"駱", 骇:"駭", 骈:"駢", 骊:"驪", 骋:"騁", 验:"驗", 骏:"駿", 骐:"騏", 骑:"騎", 骒:"騍",
  骓:"騅", 骖:"驂", 骗:"騙", 骘:"騭", 骚:"騷", 骛:"騖", 骜:"驁", 骝:"騮", 骞:"騫", 骟:"騸",
  骠:"驃", 骡:"騾", 骢:"驄", 骣:"驏", 骤:"驟", 骥:"驥", 骧:"驤", 髅:"髏", 髋:"髖", 髌:"髕",
  鬓:"鬢", 魇:"魘", 魉:"魎", 鱼:"魚", 鱽:"魛", 鱾:"魢", 鲀:"魨", 鲁:"魯", 鲂:"魴", 鲃:"䰾",
  鲄:"魺", 鲅:"鮁", 鲆:"鮃", 鲇:"鯰", 鲈:"鱸", 鲉:"鮋", 鲊:"鮓", 鲋:"鮒", 鲌:"鮊", 鲍:"鮑",
  鲎:"鱟", 鲏:"鮍", 鲐:"鮐", 鲑:"鮭", 鲒:"鮚", 鲔:"鮪", 鲕:"鮞", 鲖:"鮦", 鲗:"鰂", 鲘:"鮜",
  鲙:"鱠", 鲚:"鱭", 鲛:"鮫", 鲜:"鮮", 鲝:"鮺", 鲞:"鯗", 鲟:"鱘", 鲠:"鯁", 鲡:"鱺", 鲢:"鰱",
  鲣:"鰹", 鲤:"鯉", 鲥:"鰣", 鲦:"鰷", 鲧:"鯀", 鲨:"鯊", 鲩:"鯇", 鲫:"鯽", 鲭:"鯖", 鲮:"鯪",
  鲯:"鯕", 鲰:"鯫", 鲱:"鯡", 鲲:"鯤", 鲳:"鯧", 鲴:"鯝", 鲵:"鯢", 鲶:"鯰", 鲷:"鯛", 鲸:"鯨",
  鲹:"鰺", 鲺:"鯴", 鲻:"鯔", 鲼:"鱝", 鲽:"鰈", 鳀:"鯷", 鳁:"鰮", 鳂:"鰃", 鳃:"鰓", 鳄:"鱷",
  鳅:"鰍", 鳆:"鰒", 鳇:"鰉", 鳈:"鰁", 鳉:"鱂", 鳊:"鯿", 鳋:"鰠", 鳌:"鰲", 鳍:"鰭", 鳎:"鰨",
  鳏:"鰥", 鳐:"鰩", 鳑:"鰟", 鳒:"鰜", 鳓:"鰳", 鳔:"鰾", 鳕:"鱈", 鳖:"鱉", 鳗:"鰻", 鳘:"鰵",
  鳙:"鱅", 鳛:"鰼", 鳜:"鱖", 鳝:"鱔", 鳞:"鱗", 鳟:"鱒", 鳠:"鱯", 鸟:"鳥", 鸠:"鳩", 鸡:"雞",
  鸢:"鳶", 鸣:"鳴", 鸥:"鷗", 鸦:"鴉", 鸨:"鴇", 鸩:"鴆", 鸪:"鴣", 鸫:"鶇", 鸬:"鸕", 鸭:"鴨",
  鸯:"鴦", 鸰:"鴒", 鸱:"鴟", 鸲:"鴝", 鸳:"鴛", 鸴:"鷽", 鸵:"鴕", 鸶:"鷥", 鸷:"鷙", 鸸:"鴯",
  鸹:"鴰", 鸺:"鵂", 鸻:"鴴", 鸼:"鵃", 鸽:"鴿", 鸾:"鸞", 鸿:"鴻", 鹁:"鵓", 鹂:"鸝", 鹃:"鵑",
  鹄:"鵠", 鹅:"鵝", 鹆:"鵒", 鹇:"鷳", 鹈:"鵜", 鹉:"鵡", 鹊:"鵲", 鹋:"鶓", 鹌:"鵪", 鹎:"鵯",
  鹏:"鵬", 鹑:"鶉", 鹕:"鶘", 鹖:"鶡", 鹗:"鶚", 鹘:"鶻", 鹚:"鷀", 鹛:"鶥", 鹜:"鶩", 鹞:"鷂",
  鹟:"鶲", 鹠:"鶹", 鹡:"鶺", 鹢:"鷁", 鹣:"鶼", 鹤:"鶴", 鹦:"鸚", 鹧:"鷓", 鹨:"鷚", 鹩:"鷯",
  鹪:"鷦", 鹫:"鷲", 鹬:"鷸", 鹭:"鷺", 鹰:"鷹", 鹱:"鸌", 鹳:"鸛", 鹾:"鹺", 麦:"麥", 黄:"黃",
  黉:"黌", 黩:"黷", 黪:"黲", 黾:"黽", 鼋:"黿", 鼍:"鼉", 鼹:"鼴", 齐:"齊", 齑:"齏", 齿:"齒",
  龀:"齔", 龁:"齕", 龂:"齗", 龃:"齟", 龄:"齡", 龅:"齙", 龆:"齠", 龇:"齜", 龈:"齦", 龉:"齬",
  龊:"齪", 龋:"齲", 龌:"齷", 龙:"龍", 龚:"龔", 龛:"龕"
};
const toTrad = (value) => {
  if (value == null) return value;
  let text = String(value);
  TRAD_PHRASES.forEach(([from, to]) => { text = text.split(from).join(to); });
  return Array.from(text).map(ch => TRAD_CHARS[ch] || ch).join("");
};

// ─────────────────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────────────────
const Nav = ({ active, onNav, theme = "dark", onThemeToggle, lang = "zh-hant", onLangChange }) => (
  <header className="nav">
    <div className="nav-inner">
      <a className="nav-brand" href="#home" onClick={(e)=>{e.preventDefault();onNav("home")}}>
        <span className="nav-logo-wrap">
          <img className="nav-logo nav-logo-light" src="assets/brand-logo-white-alpha.png" alt="燃點" />
          <img className="nav-logo nav-logo-dark" src="assets/brand-logo-black-alpha.png" alt="燃點" />
        </span>
        <span>IBD</span>
        <span style={{ opacity:.55, marginLeft:6 }}>{tt(lang, "navBrand")}</span>
      </a>
      <nav className="nav-links">
        {NAV.slice(1, 8).map(n => (
          <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""}
             onClick={(e)=>{e.preventDefault(); onNav(n.id)}}>{navLabel(n, lang)}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <div className="lang-switch" aria-label="Language">
          <button type="button" className={lang === "zh-hant" ? "on" : ""} onClick={() => onLangChange && onLangChange("zh-hant")}>繁</button>
          <button type="button" className={lang === "zh-hans" ? "on" : ""} onClick={() => onLangChange && onLangChange("zh-hans")}>简</button>
          <button type="button" className={lang === "en" ? "on" : ""} onClick={() => onLangChange && onLangChange("en")}>EN</button>
        </div>
        <button
            type="button"
            className="nav-cta"
            onClick={(e) => { e.preventDefault(); onNav("contact"); }}
            aria-label="合作詢啓"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}} aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5.6a8.5 8.5 0 0 1-.9-3.9A8.38 8.38 0 0 1 12.5 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
            <span>合作</span>
          </button>
        <button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label="切換黑白風格">
          <span>{theme === "light" ? tt(lang, "themeLight") : tt(lang, "themeDark")}</span>
        </button>
      </div>
    </div>
  </header>
);

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
const HERO_CLIENTS = [
  "秦始皇博物館", "華強集團", "卓越教育", "百佳超市", "湘小伍", "曲江樂雅",
  "星際小螞蟻", "南方電網", "涉外教育", "老鄉雞", "TCL", "361°",
  "愛英寶寶", "愛卡屋", "蘇菲珠寶", "阿里巴巴", "大象體育", "精武門",
  "香港置地", "愛嬰島", "星火教育", "盼盼", "健力寶", "越勇體育",
  "美宴餐飲", "漁婆婆", "BAGBOX", "金多多", "新時代文具", "PENGO",
  "榮幸醫藥", "真彩文具", "POPO 麵包",
];

const HeroClientOrbit = () => (
  <div className="client-orbit" aria-hidden="true">
    {HERO_CLIENTS.map((name, i) => (
      <span
        key={name}
        className="client-star"
        style={{
          "--a": `${(i * 360 / HERO_CLIENTS.length) + ((i % 4) * 1.7)}deg`,
          "--r": `${34 + (i % 3) * 3}vmin`,
          "--d": `${-(i % 9) * 0.32}s`,
        }}
      >
        <i></i>
        <b>{name}</b>
      </span>
    ))}
  </div>
);

const HERO_IPS = [
  { src: "assets/ip-scene-fluffy.png", name: "角色世界觀" },
  { src: "assets/ip-scene-cloud.png", name: "情緒記憶點" },
  { src: "assets/ip-scene-dino.png", name: "品牌人格" },
  { src: "assets/ip-scene-robot.png", name: "互動內容" },
  { src: "assets/ip-scene-sprout.png", name: "產品延展" },
  { src: "assets/ip-scene-pink.png", name: "商業轉化" },
];

const HeroIPScene = ({ lang = "zh-hant" }) => (
  <div className="hero-ip-scene" aria-label="IP品牌策劃設計角色場景">
    <div className="ip-scene-title">
      <span>{tt(lang, "heroScene")}</span>
      <small>{tt(lang, "heroSceneSub")}</small>
    </div>
    <div className="ip-scene-deck">
    {HERO_IPS.map((ip, i) => (
      <figure className={`ip-avatar ip-avatar-${i + 1}`} key={ip.src}>
        <img src={ip.src} alt="" />
        <figcaption>{ip.name}</figcaption>
      </figure>
    ))}
    </div>
    <div className="ip-scene-greeting">
      <span>{tt(lang, "heroGreeting")}</span>
    </div>
  </div>
);

const getHeroOrbitCases = (cases = []) => (
  (cases || [])
    .filter(item => item && item.showInHeroOrbit && item.heroCharacter)
    .sort((a, b) => (Number(a.heroOrbitOrder) || 999) - (Number(b.heroOrbitOrder) || 999))
);

const buildHeroCharacters = (cases = [], heroIps = [], heroIpsReady = false) => {
  // Don't show anything until Sanity data has loaded — avoids flash of 42 static placeholders
  if (!heroIpsReady) return [];
  const fromHeroIps = (heroIps || [])
    .filter(item => item && item.src)
    .map((item) => ({
      src: item.src,
      label: item.label || "",
      caseItem: item.caseId ? (cases || []).find(c => c._id === item.caseId) || null : null,
      videoId: item.videoId || null,
      videoUrl: item.videoUrl || null,
      videoPoster: item.videoPoster || null,
      videoTitle: item.videoTitle || item.label || "",
    }));
  if (fromHeroIps.length) return fromHeroIps;
  // Only use case-linked IPs as fallback (no static placeholder images)
  const linked = getHeroOrbitCases(cases).map((item, i) => ({
    src: item.heroCharacter,
    label: item.heroOrbitLabel || item.title || `IP ${i + 1}`,
    caseItem: item,
    videoId: null, videoUrl: null, videoPoster: null, videoTitle: "",
  }));
  return linked.length ? linked : [];
};
const HeroCharacterOrbit = ({ cases = [], heroIps = [], heroIpsReady = false, onOpenCase, onOpenVideo }) => {
  const items = buildHeroCharacters(cases, heroIps, heroIpsReady).slice(0, 24);
  const [hoverIndex, setHoverIndex] = React.useState(null);
  const [autoIndex, setAutoIndex] = React.useState(0);

  // auto-play: cycle the centre spotlight through every IP while the ring keeps turning
  React.useEffect(() => {
    if (!items.length || hoverIndex != null) return;
    const id = setInterval(() => setAutoIndex(v => (v + 1) % items.length), 2600);
    return () => clearInterval(id);
  }, [hoverIndex, items.length]);

  // touch fallback: release a stuck hover so auto-play resumes on phones
  React.useEffect(() => {
    if (hoverIndex == null) return;
    if (window.matchMedia && window.matchMedia("(hover: hover)").matches) return;
    const id = setTimeout(() => setHoverIndex(null), 4000);
    return () => clearTimeout(id);
  }, [hoverIndex]);

  const isManual = hoverIndex != null;
  const activeIndex = isManual ? hoverIndex : (items.length ? autoIndex % items.length : null);
  const activeItem = activeIndex == null ? null : items[activeIndex];

  // shared open logic — used by both ring cards and the centre spotlight
  const openItem = (item) => {
    if (!item) return;
    if (item.videoId && item.videoUrl) {
      onOpenVideo && onOpenVideo(item.videoId, item.videoUrl, item.videoPoster, item.videoTitle);
    } else if (item.caseItem) {
      onOpenCase && onOpenCase(item.caseItem);
    }
  };
  const activeClickable = !!(activeItem && ((activeItem.videoId && activeItem.videoUrl) || activeItem.caseItem));

  return (
    <div className="hero-character-orbit" aria-label="首頁 IP 角色作品入口" onMouseLeave={() => setHoverIndex(null)}>
      <div className="hero-character-hint">
        <span>IP CHARACTER RING</span>
        <b>自動輪播 · 移到角色放大 · 點擊查看作品</b>
      </div>

      {activeItem && (
        activeClickable ? (
          <button
            type="button"
            className="hero-character-spotlight is-linked"
            key={`${activeIndex}-${activeItem.src}`}
            onClick={() => openItem(activeItem)}
            aria-label={(activeItem.videoId && activeItem.videoUrl)
              ? `播放 ${activeItem.videoTitle || activeItem.label || "IP 視頻"}`
              : `查看 ${getCaseTitle(activeItem.caseItem)} 案例`}
          >
            <img src={activeItem.src} alt="" />
            <span>{toTrad(activeItem.label || activeItem.caseItem?.title || "IP 角色")}</span>
          </button>
        ) : (
          <div className="hero-character-spotlight" aria-hidden="true" key={`${activeIndex}-${activeItem.src}`}>
            <img src={activeItem.src} alt="" />
            <span>{toTrad(activeItem.label || activeItem.caseItem?.title || "IP 角色")}</span>
          </div>
        )
      )}
      <div className={`hero-character-cards ${isManual ? "is-paused" : ""}`}>
      {items.map((item, i) => {
        const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 46;
        const y = 50 + Math.sin(angle) * 46;
        const hasVideo = !!(item.videoId && item.videoUrl);
        const isClickable = hasVideo || !!item.caseItem;
        const buttonProps = hasVideo
          ? {
              type: "button",
              onClick: () => { setHoverIndex(i); onOpenVideo && onOpenVideo(item.videoId, item.videoUrl, item.videoPoster, item.videoTitle); },
              "aria-label": `播放 ${item.videoTitle || item.label || "IP 視頻"}`,
            }
          : item.caseItem
          ? {
              type: "button",
              onClick: () => { setHoverIndex(i); onOpenCase && onOpenCase(item.caseItem); },
              "aria-label": `查看 ${getCaseTitle(item.caseItem)} 案例`,
            }
          : { type: "button", "aria-label": item.label };
        return (
          <button
            className={`hero-character-card ${isClickable ? "is-linked" : ""} ${hoverIndex === i ? "is-active" : ""} ${(!isManual && activeIndex === i) ? "is-auto" : ""}`}
            key={`${item.src}-${i}`}
            style={{ "--x": `${x}%`, "--y": `${y}%`, "--d": `${-(i % 8) * 0.22}s` }}
            onMouseEnter={() => setHoverIndex(i)}
            onFocus={() => setHoverIndex(i)}
            {...buttonProps}
          >
            <span className="hero-character-spin">
              <span className="hero-character-media">
                <img src={item.src} alt="" loading={i < 10 ? "eager" : "lazy"} />
              </span>
            </span>
            <em>{toTrad(item.label || item.caseItem?.title || "IP 角色")}</em>
          </button>
        );
      })}
      </div>
    </div>
  );
};

const HERO_BARRAGE = [
  "文旅項目想做城市 IP，就找燃點",
  "潮玩角色規劃與商業化，一起從策略開始",
  "把產品塑造成可被記住的品牌 IP",
  "文創產品 IP，不只可愛，更要能賣",
  "燃點 IP 品牌策劃設計，沉澱多年實戰經驗",
  "IP 形象、包裝、視頻、授權，一條龍打通",
  "我們不只設計 IP，也協助 IP 被銷售與授權",
  "從 IP 設計到商業轉化，燃點一起把路走通",
  "讓角色不只好看，也能被購買、被合作、被授權",
  "食品包裝想做角色化，先找到品牌性格",
  "兒童服裝、文具、玩具，都可以有自己的 IP 世界",
  "從角色設定到產品延展，讓品牌有長期資產",
  "想做聯名、授權、快閃，先把 IP 系統搭好",
  "不是做一個圖案，是建立一個能被喜歡的角色",
  "品牌需要記憶點，IP 是最有溫度的入口",
];

const HeroBarrage = () => {
  // deterministic pseudo-random (no Math.random — consistent across renders)
  const h = (n) => ((Math.sin(n * 127.1 + 311.7) * 43758.5453) % 1 + 1) % 1;
  const LANES = 8;
  // round-robin guarantees EVERY lane is filled (no empty top/gaps), shuffled order keeps it random
  const order = HERO_BARRAGE.map((text, i) => ({ text, i, k: h(i * 9.13) }))
    .sort((a, b) => a.k - b.k);
  const laneItems = Array.from({ length: LANES }, () => []);
  order.forEach((item, idx) => laneItems[idx % LANES].push(item));
  return (
    <div className="hero-barrage" aria-label="燃點IP品牌策劃能力">
      {laneItems.map((items, lane) => {
        const top = 5 + lane * (90 / (LANES - 1));
        // varied speed per lane: 26–46s
        const dur = 26 + lane * 2.6 + h(lane * 2.3) * 5;
        const o = 0.5 + h(lane * 1.7) * 0.4;
        return items.map(({ text, i }, pos) => {
          // guaranteed non-overlap: even slot per lane + small hash nudge (≤18% of slot)
          const slot = items.length > 0 ? dur / items.length : dur;
          const nudge = h(i * 5.3 + lane) * slot * 0.18;
          const delay = -(((pos * slot + nudge) % dur).toFixed(2));
          return (
            <span
              key={`${text}-${lane}-${pos}`}
              className="hero-danmaku"
              style={{ "--top": `${top.toFixed(1)}%`, "--dur": `${dur.toFixed(1)}s`, "--delay": `${delay}s`, "--o": o.toFixed(2) }}
            >
              {text}
            </span>
          );
        });
      })}
    </div>
  );
};

const ORBIT_IP_IMAGES = Array.from({ length: 42 }, (_, i) => ({
  src: `assets/orbit-ip/ip-${String(i + 1).padStart(2, "0")}.png`,
  label: ["Character", "Toy", "License", "Asset", "Culture", "Product"][i % 6],
}));

const ORBIT_LABELS = [
  { name: "IP Strategy", count: "20+", pos: "orbit-label-a" },
  { name: "Character", count: "40+", pos: "orbit-label-b" },
  { name: "Toy & Figure", count: "30+", pos: "orbit-label-c" },
  { name: "Culture IP", count: "18+", pos: "orbit-label-d" },
  { name: "Product System", count: "25+", pos: "orbit-label-e" },
  { name: "Licensing", count: "12+", pos: "orbit-label-f" },
];

const getOrbitStyle = (i, total) => {
  const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
  const depth = (Math.sin(angle) + 1) / 2;
  const x = Math.cos(angle);
  const y = Math.sin(angle);
  return {
    "--x": `${(x * 39).toFixed(2)}vw`,
    "--y": `${(y * 24).toFixed(2)}vh`,
    "--mx": `${(x * 48).toFixed(2)}vw`,
    "--my": `${(y * 18).toFixed(2)}vh`,
    "--s": (0.72 + depth * 0.34).toFixed(3),
    "--z": Math.round(10 + depth * 30),
    "--delay": `${-(i % 11) * 0.28}s`,
  };
};

const HeroOrbit = ({ lang = "zh-hant" }) => {
  const headline = lang === "en" ? "Super IP Brand Strategy" : lang === "zh-hans" ? "超级IP品牌策划设计" : "超級IP品牌策劃設計";
  const copy = lang === "en"
    ? "Characters, stories, products and licensing paths turn a brand into a living IP asset."
    : lang === "zh-hans"
      ? "角色不是装饰，是品牌可被看见、被传播、被授权、被销售的资产。"
      : "角色不是裝飾，是品牌可被看見、被傳播、被授權、被銷售的資產。";

  return (
    <section id="home" className="hero hero-orbit" data-screen-label="01 Hero">
      <div className="orbit-stage" aria-hidden="true">
        <div className="orbit-ring">
          {ORBIT_IP_IMAGES.map((item, i) => (
            <figure
              className="orbit-ip"
              key={item.src}
              style={getOrbitStyle(i, ORBIT_IP_IMAGES.length)}
            >
              <img src={item.src} alt="" loading={i < 12 ? "eager" : "lazy"} />
            </figure>
          ))}
        </div>
        <div className="orbit-ring orbit-ring-ghost">
          {ORBIT_IP_IMAGES.slice(0, 24).map((item, i) => (
            <span
              className="orbit-slice"
              key={`${item.src}-ghost`}
              style={{ "--angle": `${(i * 360) / 24 + 5}deg` }}
            ></span>
          ))}
        </div>
      </div>

      {ORBIT_LABELS.map((item) => (
        <a className={`orbit-label ${item.pos}`} href="#cases" key={item.name}>
          <span>{item.name}</span>
          <sup>({item.count})</sup>
        </a>
      ))}

      <div className="orbit-center">
        <p className="orbit-kicker">IBD · IGNITION BRAND DESIGN</p>
        <h1>
          <span>We build</span>
          <span>living IP.</span>
        </h1>
        <p className="orbit-cn">{headline}</p>
        <p className="orbit-copy">{copy}</p>
      </div>

      <div className="orbit-bottom">
        <a href="#cases">Projects</a>
        <a href="#about">Info</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
    </section>
  );
};

const LegacyHero = ({ variant = "sunburst", lang = "zh-hant", cases = [], heroIps = [], heroIpsReady = false, onOpenCase, onOpenVideo }) => (
  <section id="home" className="hero" data-screen-label="01 Hero">
    {/* corner service tags echoing poster */}
    <div className="hero-tags">
      <div><b>潮玩IP品牌設計</b> · 圖案設計</div>
      <div><b>品牌視覺 VI</b> · 門店形象設計</div>
      <div><b>包裝策劃</b> · 系列視覺設計</div>
    </div>
    

    {variant === "sunburst" && (
      <div className="hero-bg">
        <Sunburst className="sun" color="var(--paper)" />
        <HeroBarrage />
        <HeroCharacterOrbit cases={cases} heroIps={heroIps} heroIpsReady={heroIpsReady} onOpenCase={onOpenCase} onOpenVideo={onOpenVideo} />
      </div>
    )}
    {variant === "minimal" && (
      <div className="hero-bg" style={{ alignItems: "flex-start", paddingTop: "18vh" }}>
        <Sparkle size={120} color="var(--accent)" style={{ opacity:.4 }}/>
      </div>
    )}
    {variant === "grid" && (
      <div className="hero-bg" style={{ opacity:.08 }}>
        <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none">
          {[...Array(12)].map((_,i)=>(<line key={`v${i}`} x1={i*100/12} y1="0" x2={i*100/12} y2="100" stroke="currentColor" strokeWidth=".05"/>))}
          {[...Array(8)].map((_,i)=>(<line key={`h${i}`} x1="0" y1={i*100/8} x2="100" y2={i*100/8} stroke="currentColor" strokeWidth=".05"/>))}
        </svg>
      </div>
    )}

    <div className="shell" style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:"0 56px" }}>
      <div className="hero-content">
        <div className="hero-super">{tt(lang, "heroScene")}</div>
        <div className="hero-mark hero-mark-image">
          <img className="hero-wordmark hero-wordmark-black" src="assets/brand-wordmark-black-alpha.png" alt="燃點" />
          <img className="hero-wordmark hero-wordmark-white" src="assets/brand-wordmark-white-alpha.png" alt="燃點" />
          <Sparkle size={64} color="var(--accent)" className="sparkle" style={{display:"none"}} />
        </div>
        <div className="hero-sub-en">IGNITION&nbsp;&nbsp;BRAND&nbsp;&nbsp;DESIGN</div>
        <div className="hero-tag">{tt(lang, "heroTag")}</div>
      </div>
    </div>

    <div className="shell">
      <div className="hero-bottom" style={{display:"none"}}>
        <div>
          <div className="lbl">EST.</div>
          <div className="v">Hong Kong · 2010</div>
        </div>
        <div>
          <div className="lbl">DISCIPLINE</div>
          <div className="v">Brand × IP × Trend-Toy</div>
        </div>
        <div>
          <div className="lbl">DOCTRINE</div>
          <div className="v">Value-based, asset-grade</div>
        </div>
      </div>
    </div>

    <div className="scroll-cue">
      <span>SCROLL</span>
      <span className="bar"/>
    </div>
  </section>
);

const Hero = ({ variant = "sunburst", lang = "zh-hant", cases = [], heroIps = [], heroIpsReady = false, onOpenCase, onOpenVideo }) => (
  variant === "orbit" ? <HeroOrbit lang={lang} /> : <LegacyHero variant={variant} lang={lang} cases={cases} heroIps={heroIps} heroIpsReady={heroIpsReady} onOpenCase={onOpenCase} onOpenVideo={onOpenVideo} />
);

// ─────────────────────────────────────────────────────────────────────────────
// MARQUEE
// ─────────────────────────────────────────────────────────────────────────────
const Marquee = () => {
  const items = [
    ["品牌基因解碼", "Brand genome decoding"],
    ["潮玩 3D 視覺重塑", "Trend-toy visual sculpting"],
    ["全場景視覺延展", "Full-scene visual extension"],
    ["商業化變現引爆", "Commercial ignition"],
    ["Z 世代對話", "Gen Z conversation"],
    ["盲盒級資產", "Collectible-grade assets"],
  ];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((t,i) => (
          <React.Fragment key={i}>
            <span><b>{t[0]}</b><em>{t[1]}</em></span>
            <span className="sp">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────────────────
const About = ({ lang = "zh-hant" }) => (
  <section id="about" data-screen-label="02 About">
    <div className="shell">
      <div className="sec-eyebrow">
        <span className="num">01 / 07</span>
        <span>{tt(lang, "aboutEyebrow")}</span>
        <span className="line"/>
      </div>
      <h2 className="sec-title">{tt(lang, "aboutTitleA")}<span className="accent">{tt(lang, "aboutTitleB")}</span>{tt(lang, "aboutTitleC") && tt(lang, "aboutTitleC") !== "aboutTitleC" ? <><br/>{tt(lang, "aboutTitleC")}</> : null}</h2>
      <div className="about-grid">
        <div className="about-manifesto">
          {tt(lang, "aboutBody")}
          <br/><br/>
          {tt(lang, "aboutBody2")}
          <p className="about-en">
            Ignition is a Hong Kong based visual lab turning brand DNA into lasting commercial assets. We build identities, IP systems and packaging worlds that can live across products, collaborations, content and culture.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <div className="v">15<span className="pp">+</span></div>
            <div className="k">YEARS · 設計沉澱</div>
          </div>
          <div className="stat">
            <div className="v">100<span className="pp">+</span></div>
            <div className="k">BRANDS · 服務品牌</div>
          </div>
          <div className="stat">
            <div className="v">38</div>
            <div className="k">IP · 孵化角色</div>
          </div>
          <div className="stat">
            <div className="v">9<span className="pp">×</span></div>
            <div className="k">AWARDS · 獎項</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const collectCaseVideos = (cases = []) => cases.flatMap((item) => (
  (item.videos || [])
    .filter(video => video && video.url)
    .map(video => ({
      ...video,
      displayOrder: Number.isFinite(Number(video.displayOrder)) ? Number(video.displayOrder) : 999,
      _createdAt: video._createdAt || item._createdAt,
      caseTitle: getCaseTitle(item),
      caseDescription: getCaseDescription(item),
      category: getCaseCategory(item),
    }))
)).sort((a, b) => a.displayOrder - b.displayOrder);

const getVideosByPlacement = (cases = [], placement) => (
  collectCaseVideos(cases).filter(video => video.placement === placement)
);

const getVideoPreviewSrc = (url) => {
  if (!url) return "";
  if (url.includes("#")) return url;
  return `${url}#t=0.1`;
};

const getVideoHeat = (video = {}) => {
  const key = `${video._id || ""}${video.url || ""}${video.title || video.caseTitle || ""}`;
  const seed = Array.from(key).reduce((total, char) => total + char.charCodeAt(0), 0);
  const startedAt = new Date(video._createdAt || "2026-05-25T00:00:00+08:00").getTime();
  const hours = Math.max(0, (Date.now() - startedAt) / 3600000);
  const baseViews = 680 + (seed % 420);
  const baseLikes = 80 + (seed % 90);
  const views = Math.round(baseViews * Math.pow(1 + (10 / baseViews), hours));
  const likes = Math.round(baseLikes * Math.pow(1 + (3 / baseLikes), hours));
  const short = (value) => value >= 10000 ? `${(value / 10000).toFixed(value >= 100000 ? 0 : 1)}w` : value.toLocaleString("zh-HK");
  return { views: short(views), likes: short(likes) };
};

const VideoHeat = ({ video }) => {
  const heat = getVideoHeat(video);
  return (
    <span className="video-heat" aria-label={`觀看熱度 ${heat.views}，喜歡熱度 ${heat.likes}`}>
      <span><i className="heat-eye"></i>{heat.views}</span>
      <span><i className="heat-like"></i>{heat.likes}</span>
    </span>
  );
};

const getVideoBarrage = (video = {}) => {
  const title = toTrad(video.caseTitle || video.title || "這個 IP");
  const category = video.category || "IP";
  const key = `${video._id || ""}${video.url || ""}${title}`;
  const seed = Array.from(key).reduce((total, char) => total + char.charCodeAt(0), 0);
  const industries = ["食品包裝", "飲品包裝", "文具禮盒", "潮玩公仔", "兒童服裝", "文旅伴手禮", "玩具系列", "校園用品", "咖啡品牌", "快閃展覽", "美妝個護", "餐飲聯名", "戶外用品", "企業禮品", "數碼配件"];
  const designNotes = [
    `${category}的角色辨識度很清楚`,
    "這個表情有被記住的可能",
    "角色性格比單張視覺更完整",
    "畫面很適合剪成短視頻物料",
    "如果做成包裝系列會很有貨架感",
    "這種動態很適合招商簡報",
    "IP 的情緒點很容易被轉發",
    "這個角色可以繼續做表情包",
    "視覺很乾淨，但記憶點還在",
    "品牌感和可愛感平衡得不錯",
    "這條片能讓人快速理解角色",
    "感覺可以延展出一整套周邊",
    "故事感比普通形象設計更強",
    "這個 IP 有線下打卡的潛力",
    "角色如果出現在門店會很吸睛",
  ];
  const marketNotes = [
    "這個方向比較容易做社交傳播",
    "年輕客群應該會願意停留多看",
    "放到小紅書首圖也有點擊慾",
    "如果配合節日檔期會更好賣",
    "這種畫面適合做品牌發布節奏",
    "比單純 logo 視覺更有內容感",
    "適合做新品上市的第一波記憶",
    "可以用來做會員禮和聯名款",
    "看起來有機會做成長期資產",
    "如果配合門店陳列會更完整",
  ];
  const needs = industries.flatMap((industry) => [
    `我們想開發${industry}IP，可以約聊嗎？`,
    `${industry}想做一套角色視覺，大概怎麼開始？`,
    `這個風格能不能延展到${industry}？`,
    `如果做${industry}授權，合作方式怎麼算？`,
    `想找你們做${industry}的品牌 IP 形象`,
  ]);
  const licensing = [
    `想了解「${title}」產品授權合作`,
    `「${title}」可以授權做周邊嗎？`,
    "有沒有非獨家品類授權方案？",
    "如果獨家買斷一個品類，需要怎麼談？",
    "想拿 IP 做食品包裝聯名，可以先評估嗎？",
    "授權合作會包含角色素材和使用規範嗎？",
    "可以先做一個產品樣品授權測試嗎？",
    "文具/公仔/禮盒這類授權適合嗎？",
  ];
  const pool = [...designNotes, ...marketNotes, ...needs];
  const pick = (list, index) => list[(seed + index * 17 + index * index * 7) % list.length];
  const selected = [
    pick(pool, 1),
    pick(pool, 2),
    pick(licensing, 3),
    pick(pool, 4),
    pick(licensing, 5),
    pick(pool, 6),
    pick(pool, 7),
  ];
  return Array.from(new Set(selected)).slice(0, 6);
};

const VideoBarrage = ({ video, compact = false }) => (
  <span className={compact ? "video-barrage compact" : "video-barrage"} aria-hidden="true">
    {getVideoBarrage(video).map((text, index) => (
      <em key={`${text}-${index}`} style={{ "--i": index }}>{text}</em>
    ))}
  </span>
);

const VideoThumb = ({ video, label = "播放視頻" }) => {
  const hasSeries = Array.isArray(video?.seriesVideos) && video.seriesVideos.some(item => item && item.url);
  return (
    <div className="video-thumb" aria-label={label}>
      {video.poster ? (
        <img src={video.poster} alt={toTrad(video.title || video.caseTitle || label)} loading="lazy" />
      ) : (
        <video src={getVideoPreviewSrc(video.url)} muted playsInline preload="metadata" />
      )}
      <VideoBarrage video={video} compact />
      <span className="video-guide">
        <b>{hasSeries ? "系列視頻" : "主視頻"}</b>
        <em>{hasSeries ? "點開連續觀看" : "點開觀看"}</em>
      </span>
      <span className="video-thumb-license">
        <b>IP 授權</b>
        <em>可聯名 · 可開發周邊 · 可品類授權</em>
      </span>
      <VideoHeat video={video} />
      <span className="video-play" aria-hidden="true"></span>
    </div>
  );
};

const buildVideoSeriesItems = (video = {}) => {
  const series = Array.isArray(video?.seriesVideos) ? video.seriesVideos.filter(item => item && (item.url || item.poster)) : [];
  const groupUrl = video.groupUrl || video.url;
  const groupMeta = {
    groupUrl,
    groupPoster: video.groupPoster || video.poster,
    groupTitle: video.groupTitle || video.seriesTitle || video.title,
    groupCaption: video.groupCaption || video.caption,
  };
  return [
    {
      ...video,
      ...groupMeta,
      url: groupUrl,
      poster: groupMeta.groupPoster,
      title: groupMeta.groupTitle,
      caption: groupMeta.groupCaption,
      seriesIndex: 0,
    },
    ...series.map((item, index) => ({
      ...video,
      ...groupMeta,
      ...item,
      _id: `${video._id || video.url || "video"}-series-preview-${index + 1}`,
      title: item.title || video.title,
      caption: item.caption || video.caption,
      seriesTitle: video.title,
      seriesIndex: index + 1,
    })),
  ].filter(item => item && item.url);
};

const VideoSeriesPreview = ({ video, onOpenVideo }) => {
  const items = buildVideoSeriesItems(video);
  const series = items.slice(1);
  if (!series.length) return null;
  const previews = series.slice(0, 3);
  return (
    <div className="video-series-preview" aria-label={`這條視頻包含 ${series.length + 1} 條系列內容`}>
      <div className="video-series-copy">
        <b>系列內容</b>
        <span>主片 + {series.length} 集，點開連續觀看</span>
      </div>
      <div className="video-series-thumbs">
        {previews.map((item, index) => (
          <button className="video-series-thumb" type="button" key={`${item.url || item.poster}-${index}`} onClick={(event) => { event.stopPropagation(); onOpenVideo && onOpenVideo(item); }}>
            {item.poster ? (
              <img src={item.poster} alt={item.title || `系列視頻 ${index + 1}`} loading="lazy" />
            ) : (
              <video src={getVideoPreviewSrc(item.url)} muted playsInline preload="metadata" />
            )}
            <em>{String(index + 1).padStart(2, "0")}</em>
          </button>
        ))}
        {series.length > previews.length && (
          <span className="video-series-more">+{series.length - previews.length}</span>
        )}
      </div>
    </div>
  );
};

const VideoSpotlight = ({ cases = [], siteVideos = [], onOpenVideo, onOpenCase }) => {
  const allVideos = collectCaseVideos(cases);
  const pickedVideos = [
    ...(siteVideos || []).filter(video => video && video.url && video.showOnHome),
    ...getVideosByPlacement(cases, "home"),
  ].sort((a, b) => (Number(a.displayOrder) || 999) - (Number(b.displayOrder) || 999));
  const seen = new Map();
  (pickedVideos.length ? pickedVideos : allVideos.slice(0, 6)).forEach(video => {
    if (video?.url && !seen.has(video.url)) seen.set(video.url, video);
  });
  const videos = Array.from(seen.values()).slice(0, 8);
  const lead = videos[0];
  if (!lead) return null;
  return (
    <section id="brand-film" className="video-spotlight" data-screen-label="02A Brand Film">
      <div className="shell">
        <div className="sec-eyebrow">
          <span className="num">FILM</span>
          <span>IP 動態展示  ·  MOTION SHOWCASE</span>
          <span className="line"/>
        </div>
        <div className="video-hero-card">
          <div className="video-copy">
            <span className="case-tag static">{lead.category || "IP MOTION"}</span>
            <h2>讓 IP 先動起來，<br/>品牌才會被記住。</h2>
            <p>{toTrad(lead.caption || lead.caseDescription || "用視頻展示角色性格、品牌情緒與可被傳播的內容片段。")}</p>
          </div>
          <div className="video-stack" aria-label="首頁視頻作品列表">
            {videos.map((video, i) => (
              <figure className="video-openable" key={`${video.url}-${i}`} onClick={() => onOpenVideo && onOpenVideo(video)}>
                <VideoThumb video={video} label={`首頁視頻 ${i + 1}`} />
                <figcaption>
                  <strong>{toTrad(video.title || video.caseTitle || `IP 動態作品 ${i + 1}`)}</strong>
                  <span>{toTrad(video.caption || video.filename || "作品視頻")}</span>
                </figcaption>
                <VideoSeriesPreview video={video} onOpenVideo={onOpenVideo} />
                {(video.caseTitle || video.caseId) && (
                  <div className="video-case-link" onClick={(event) => { event.stopPropagation(); onOpenCase && onOpenCase(video); }}>
                    <span>對應作品案例</span>
                    <strong>{toTrad(video.caseTitle || "查看案例詳情")}</strong>
                    <em>查看完整圖片、策略與延展 →</em>
                  </div>
                )}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TESTIMONIALS = [
  { avatar:"陳", name:"陳小姐", role:"品牌市場總監", brand:"零售集團", text:"第一次溝通就很快抓到我們想年輕化、但又不能太浮誇的那個點。最後不是單純變好看，而是整套視覺真的更容易被客人記住。" },
  { avatar:"L", name:"Leo Wong", role:"項目策劃負責人", brand:"文化項目", text:"燃點對故事線很敏感，會追問很多細節。過程有點被逼著想清楚，但結果是好的，形象不空，有內容可以一直延展。" },
  { avatar:"黃", name:"黃先生", role:"聯合創辦人", brand:"餐飲品牌", text:"包裝、門店、社交圖放在一起是順的。以前我們每個觸點都像不同人做的，現在終於像同一個品牌了。" },
  { avatar:"S", name:"Sarah Lee", role:"品牌經理", brand:"教育集團", text:"提案邏輯很清楚，能把很散的需求收斂成一個方向。中間修改節奏如果再快一點會更好，但最終成品質感是超預期的。" },
  { avatar:"林", name:"林先生", role:"產品負責人", brand:"科技品牌", text:"他們不是只談美感，會一直問用戶看到後的第一反應是什麼。這點讓我們覺得很安心，因為設計最後是要面對市場的。" },
  { avatar:"M", name:"Maggie Chan", role:"營運總監", brand:"珠寶品牌", text:"高級感拿捏得很克制，沒有把東西做得很滿。細節變乾淨後，品牌反而更有價值感。" },
  { avatar:"許", name:"許小姐", role:"IP 商務負責人", brand:"潮玩 IP", text:"角色設定、三視圖、表情延展都很完整，後面和產品、聯名、內容團隊對接時省了很多溝通成本。" },
  { avatar:"K", name:"Ken Lau", role:"市場部主管", brand:"運動品牌", text:"視覺很有力量，尤其是主畫面的節奏感。不是那種套模板的酷，而是真的有品牌精神在裡面。" },
  { avatar:"周", name:"周小姐", role:"電商負責人", brand:"食品品牌", text:"燃點很懂貨架和電商縮圖的競爭。方案漂亮是一回事，更重要是放到真實售賣場景裡也站得住。" },
  { avatar:"T", name:"Tony Ng", role:"招商展示負責人", brand:"地產項目", text:"他們把項目的語氣做得更穩，展示材料也更有信任感。客戶看完之後，理解速度明顯快了。" },
  { avatar:"梁", name:"梁小姐", role:"品牌主理人", brand:"兒童品牌", text:"童趣和質感很難平衡，燃點沒有把它做幼稚，這點我很喜歡。小朋友喜歡，大人也覺得舒服。" },
  { avatar:"A", name:"Alice Ho", role:"聯名項目經理", brand:"跨界聯名", text:"他們會先找兩個品牌之間真正能成立的理由，再做視覺。這讓聯名不是硬拼在一起，而是有記憶點。" },
];

const Testimonials = () => (
  <section id="testimonials" className="testimonials" data-screen-label="02B Testimonials">
    <div className="shell">
      <div className="sec-eyebrow">
        <span className="num">VOICE</span>
        <span>客戶評價  ·  CLIENT VOICES</span>
        <span className="line"/>
      </div>
      <div className="quote-rotator" aria-label="客戶評價輪播">
        <div className="quote-track">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((q, i) => (
            <article className="quote-card" key={`${q.name}-${i}`}>
              <div className="quote-head">
                <div className="q-avatar">{q.avatar}</div>
                <div>
                  <div className="q-name">{q.name}</div>
                  <div className="q-role">{q.role} · {q.brand}</div>
                </div>
              </div>
              <p>{q.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    n: "S/01",
    h: "Brand Identity",
    zh: "品牌識別系統",
    desc: "從基因到落地的視覺秩序：標識、字體、規範、應用。",
    tags: ["LOGO", "TYPE", "VI"],
    ic: () => <IPEye size={96} />,
  },
  {
    n: "S/02",
    h: "Trend-Toy IP",
    zh: "潮玩超級 IP 形象",
    desc: "可實體化、可盲盒化的 3D 級 IP 形象設計與世界觀構建。",
    tags: ["IP", "3D", "TOY"],
    ic: () => <IPSparky size={96} />,
  },
  {
    n: "S/03",
    h: "Packaging",
    zh: "包裝策略與設計",
    desc: "從結構到視覺：高端產品包裝、系列規範、製作對接。",
    tags: ["PKG", "STRATEGY"],
    ic: () => <IPBlock size={96} />,
  },
  {
    n: "S/04",
    h: "Digital Creative",
    zh: "數碼創意諮詢",
    desc: "UI/UX、社交視覺、AR 互動、AI 工作流落地。",
    tags: ["UI/UX", "AI", "MOTION"],
    ic: () => <IPCube size={96} />,
  },
];

const Services = () => (
  <section id="services" data-screen-label="03 Services">
    <div className="shell">
      <div className="sec-eyebrow">
        <span className="num">02 / 07</span><span>主營業務  ·  SERVICES</span><span className="line"/>
      </div>
      <h2 className="sec-title">四條交付線，<br/>一個<span className="accent">資產</span>邏輯。</h2>
      <p className="sec-sub">我們不接「比稿」——我們接「立項」。每一條服務線都以「為品牌長出商業資產」為終局思考。</p>
    </div>
    <div className="shell" style={{ padding:0, maxWidth:"100%" }}>
      <div className="svc-grid">
        {SERVICES.map((s,i) => (
          <article className="svc" key={i}>
            <div>
              <div className="svc-num">{s.n}</div>
              <div className="svc-ic">{s.ic()}</div>
              <h3 className="svc-h">{s.h}</h3>
              <div className="svc-zh">{s.zh}</div>
              <p style={{ fontSize:13.5, lineHeight:1.6, color:"var(--mute)", margin:"0 0 24px" }}>{s.desc}</p>
            </div>
            <div className="svc-tags">{s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}</div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// METHODOLOGY
// ─────────────────────────────────────────────────────────────────────────────
const METHOD = [
  {
    n: "01", en: "BRAND GENOME DECODING", h: "品牌基因解碼",
    desc: "我們不憑空捏造。深挖品牌歷史、核心價值、目標受眾的痛點與爽點。",
    actions: ["市場調研", "競品分析", "關鍵詞萃取"],
    out: ["《IP 概念與世界觀設定書》", "性格 / 背景 / 行為邏輯", "品牌關鍵詞地圖"],
    Vis: IPEye,
  },
  {
    n: "02", en: "TREND-TOY VISUAL SCULPTING", h: "潮玩化視覺重塑",
    desc: "摒棄「二維吉祥物」思維，一開始就以「可實體化、可盲盒化」的 3D 潮玩標準設計。",
    actions: ["草圖探索", "3D 建模", "材質渲染"],
    out: ["IP 三視圖", "高精度 3D 主視覺海報", "色彩規範系統 Palette"],
    Vis: IPSculpt,
  },
  {
    n: "03", en: "VISUAL EXTENSION & APPLICATION", h: "視覺延展與應用",
    desc: "讓 IP 活在品牌的每一個觸點。情緒、姿態、場景、跨界視覺。",
    actions: ["表情動作擴充", "聯名場景", "UI/UX 植入"],
    out: ["聯名視覺圖", "盲盒包裝 / 周邊 / 桌布", "全場景應用規範"],
    Vis: IPExtend,
  },
  {
    n: "04", en: "COMMERCIALIZATION STRATEGY", h: "商業化引爆策略",
    desc: "設計完成只是開始。如何讓 IP 從「營銷支出」變成品牌「新盈利中心」？",
    actions: ["宣發事件", "盲盒發售玩法", "聯名落地"],
    out: ["《IP 上線與營銷企劃案》", "曝光 → 沉澱 → 變現閉環", "年度運營節奏"],
    Vis: IPCommerce,
  },
];

const Methodology = () => (
  <section id="method" data-screen-label="04 Methodology">
    <div className="shell">
      <div className="sec-eyebrow">
        <span className="num">03 / 07</span><span>設計方法論  ·  METHODOLOGY</span><span className="line"/>
      </div>
      <h2 className="sec-title">我們如何打造<br/>一個<span className="accent">超級 IP</span>？</h2>
      <p className="sec-sub">四個科學步驟，把「靈感」拆成可被驗證的工序。這是燃點向客戶交付的「專業度」內核。</p>

      <div className="method-list">
        {METHOD.map((m,i) => (
          <div className="method-row" key={i}>
            <div className="m-num">{m.n}</div>
            <div className="m-head">
              <div className="en">PHASE {m.n} · {m.en}</div>
              <h3>{m.h}</h3>
              <p>{m.desc}</p>
              <div style={{ marginTop:14, display:"flex", flexWrap:"wrap", gap:6 }}>
                {m.actions.map(a => <span className="svc-tag" key={a}>{a}</span>)}
              </div>
            </div>
            <div className="m-out">
              <b>產出 · DELIVERABLES</b>
              <ul>{m.out.map(o => <li key={o}>{o}</li>)}</ul>
            </div>
            <div className="m-vis"><m.Vis size={140} /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// CASES
// ─────────────────────────────────────────────────────────────────────────────
// Fallback placeholder cases — used when Sanity 后台还没有内容时显示
const CASES_FALLBACK = [
  { tag:"IP / 潮玩",  h:"AURORA · 極光獸",     zh:"新茶飲品牌 · 全 IP 體系與盲盒首發", Vis: "IPSparky",   big:true },
  { tag:"VI 重塑",    h:"MERIDIAN 子午",       zh:"腕表品牌年輕化升級",            Vis: "IPCube",     wide:true },
  { tag:"包裝",       h:"鹽之初 · SHIO",       zh:"高端調味品系列包裝",            Vis: "IPBlock"    },
  { tag:"IP / 3D",   h:"小燃 · LIL FLAME",    zh:"自有 IP · 盲盒系列",            Vis: "IPMatch"    },
  { tag:"VI / 數碼", h:"OCEAN LAB",            zh:"科技品牌全鏈路視覺",            Vis: "IPEye"      },
  { tag:"聯名",      h:"BMW × LIL FLAME",     zh:"汽車跨界限量周邊提案",          Vis: "IPCommerce", wide:true },
  { tag:"包裝",      h:"墨田 · BOKUDEN",      zh:"清酒品牌系列重塑",              Vis: "IPExtend"   },
  { tag:"IP / 3D",   h:"SPARK GUARD",         zh:"金融科技品牌守護者 IP",         Vis: "IPSculpt",   big:true },
];

// Helper: map placeholder IP component name (for fallback) to actual component
const IP_COMPONENTS = {
  IPSparky: () => <IPSparky />, IPCube: () => <IPCube />, IPBlock: () => <IPBlock />,
  IPMatch: () => <IPMatch />, IPEye: () => <IPEye />, IPCommerce: () => <IPCommerce />,
  IPExtend: () => <IPExtend />, IPSculpt: () => <IPSculpt />,
};

const getCaseTitle = (c) => toTrad(c.h || c.title || "Untitled Case");
const getCaseDescription = (c) => toTrad(c.zh || c.description || "");
const getCaseCategory = (c) => {
  const cats = Array.isArray(c.category) ? c.category : (c.tag || c.category ? [c.tag || c.category] : []);
  return cats.length ? toTrad(cats[0]) : "WORK";
};
const getCaseCategories = (c) => {
  const cats = Array.isArray(c.category) ? c.category : (c.tag || c.category ? [c.tag || c.category] : []);
  return cats.map(toTrad);
};
const getCaseTags = (c) => {
  const cats = Array.isArray(c.category) ? c.category : (c.category ? [c.category] : []);
  const tags = [...cats, ...(c.tags || []), ...(c.services || [])].filter(Boolean);
  return [...new Set(tags)].slice(0, 12).map(toTrad);
};
const getCaseImages = (c) => {
  const gallery = (c.gallery || []).filter(item => item && item.url);
  const cover = c.image ? [{ url: c.image, caption: "Cover" }] : [];
  const galleryUrls = new Set(gallery.map(item => item.url));
  return [...cover.filter(item => !galleryUrls.has(item.url)), ...gallery];
};
const renderPortableText = (blocks) => {
  if (!blocks || !blocks.length) return null;
  return blocks.map((block, i) => {
    const text = toTrad((block.children || []).map(child => child.text || "").join(""));
    return text ? <p key={block._key || i}>{text}</p> : null;
  });
};
const getCaseShareUrl = (data) => {
  const base = window.location.origin + window.location.pathname;
  if (!data._id) return `${base}#cases`;
  return `${base}?case=${encodeURIComponent(data._id)}`;
};
const getSiteShareUrl = () => `${window.location.origin}${window.location.pathname}`;
const SITE_SHARE_TITLE = "燃點品牌設計 IBD｜IP品牌策劃設計";
const SITE_SHARE_TEXT = "香港 IP 品牌策劃設計工作室：IP設計、IP形象設計、潮玩設計、品牌全案與 IP 授權轉化。";
const SITE_SHARE_BY_LANG = {
  "zh-hant": {
    title: SITE_SHARE_TITLE,
    text: SITE_SHARE_TEXT,
  },
  "zh-hans": {
    title: "燃点品牌设计 IBD｜IP品牌策划设计",
    text: "香港 IP 品牌策划设计工作室：IP设计、IP形象设计、潮玩设计、品牌全案与 IP 授权转化。",
  },
  en: {
    title: "Ignition Brand Design IBD｜IP Brand Strategy & Character Design",
    text: "Hong Kong IP brand strategy and design studio for character IP, trend-toy design, brand systems, packaging and licensing.",
  },
};
const copyText = (value, doneText = "鏈接已複製。") => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(value).then(() => window.alert(doneText)).catch(() => window.prompt("複製以下內容：", value));
  } else {
    window.prompt("複製以下內容：", value);
  }
};
const shareSite = (channel, lang = "zh-hant") => {
  const copy = SITE_SHARE_BY_LANG[getUiLang(lang)] || SITE_SHARE_BY_LANG["zh-hant"];
  const title = copy.title;
  const text = copy.text;
  const url = getSiteShareUrl();

  if (channel === "wechat" || channel === "copy") {
    copyText(url, channel === "wechat" ? "網站鏈接已複製，可粘貼到微信或朋友圈。" : "網站鏈接已複製。");
    return;
  }

  if (channel === "whatsapp") {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${title}\n${text}\n${url}`)}`, "_blank", "noopener,noreferrer");
    return;
  }

  if (channel === "facebook") {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
    return;
  }

  if (channel === "x") {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, "_blank", "noopener,noreferrer");
    return;
  }

  if (navigator.share) {
    navigator.share({ title, text, url }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => window.alert("網站鏈接已複製。"));
  }
};
const shareCase = (data, channel) => {
  const title = getCaseTitle(data);
  const text = `${getCaseDescription(data) || "燃點品牌設計作品案例"}｜查看完整圖片、視頻、策略延展與 IP 授權合作可能。`;
  const url = getCaseShareUrl(data);

  if (channel === "wechat") {
    const done = () => window.alert("案例链接已复制，可粘贴到微信聊天或朋友圈。");
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(done).catch(() => window.prompt("复制这个案例链接到微信：", url));
    } else {
      window.prompt("复制这个案例链接到微信：", url);
    }
    return;
  }

  if (channel === "native") {
    if (navigator.share) {
      navigator.share({ title, text, url }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => window.alert("案例链接已复制。"));
    }
    return;
  }

  if (channel === "facebook") {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
    return;
  }

  if (channel === "x") {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, "_blank", "noopener,noreferrer");
    return;
  }

  if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
  if (channel === "instagram") window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
};
const SHARE_OPTIONS = [
  { id: "wechat", label: "微信 / 朋友圈", icon: "微" },
  { id: "native", label: "系统分享", icon: "↗" },
  { id: "facebook", label: "Facebook", icon: "f" },
  { id: "instagram", label: "Instagram", icon: "ig" },
  { id: "x", label: "X", icon: "x" },
];

const ShareDock = ({ onNav, lang = "zh-hant" }) => {
  const [open, setOpen] = React.useState(false);
  const copy = SITE_SHARE_BY_LANG[getUiLang(lang)] || SITE_SHARE_BY_LANG["zh-hant"];
  const url = getSiteShareUrl();
  const payload = `${copy.title}\n${copy.text}\n${url}`;
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=10&data=${encodeURIComponent(url)}`;
  return (
    <>
      <aside className="share-dock" aria-label="H5 傳播快捷操作">
        <div>
          <span>H5 SHARE</span>
          <b>{tt(lang, "shareDockTitle")}</b>
        </div>
        <button type="button" onClick={() => setOpen(true)}>{tt(lang, "shareOpen")}</button>
        <button type="button" onClick={() => shareSite("native", lang)}>{tt(lang, "shareSystem")}</button>
        <button type="button" className="hot" onClick={() => onNav && onNav("contact")}>{tt(lang, "shareConsult")}</button>
      </aside>
      {open && (
        <div className="share-sheet" role="dialog" aria-modal="true" aria-label="分享燃點品牌設計" onClick={() => setOpen(false)}>
          <div className="share-sheet-panel" onClick={(event) => event.stopPropagation()}>
            <button className="share-sheet-close" type="button" onClick={() => setOpen(false)} aria-label="關閉分享面板">×</button>
            <div className="share-preview-card">
              <img src="assets/share-cover.jpg" alt="燃點品牌設計 IBD 分享封面" />
              <div>
                <span>H5 SHARE CARD</span>
                <h3>{copy.title}</h3>
                <p>{copy.text}</p>
              </div>
            </div>
            <div className="share-copybox">
              <b>{tt(lang, "shareCard")}</b>
              <p>{copy.text}</p>
              <em>{url}</em>
            </div>
            <div className="share-actions">
              <button type="button" onClick={() => shareSite("native", lang)}>{tt(lang, "shareSystem")}</button>
              <button type="button" onClick={() => shareSite("whatsapp", lang)}>WhatsApp</button>
              <button type="button" onClick={() => shareSite("facebook", lang)}>Facebook</button>
              <button type="button" onClick={() => shareSite("x", lang)}>X</button>
              <button type="button" onClick={() => copyText(payload, "轉發文案與鏈接已複製，可粘貼到微信好友或朋友圈。")}>{tt(lang, "shareWechat")}</button>
              <button type="button" onClick={() => copyText(url, "網站鏈接已複製。")}>{tt(lang, "copyLink")}</button>
            </div>
            <div className="share-wechat-guide">
              <img src={qr} alt="ip-design.hk 二維碼" />
              <p>{tt(lang, "shareWechatGuide")}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const LICENSE_CATEGORIES = [
  "潮玩 / 盲盒", "玩具 / 公仔", "文具 / 校園用品", "兒童服裝 / 配飾",
  "食品 / 飲品包裝", "家居 / 生活用品", "美妝 / 個護", "數碼配件",
  "文旅 / 展覽 / 快閃", "餐飲聯名", "運動 / 戶外", "禮品 / 企業贈品",
];

const LicenseInquiry = ({ data }) => {
  const [state, setState] = React.useState("idle");
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", `IP 授權諮詢｜${getCaseTitle(data)}`);
    formData.append("_cc", "hello@ip-design.hk,baoguangwen7708@gmail.com");
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append("案例名稱", getCaseTitle(data));
    formData.append("案例連結", getCaseShareUrl(data));

    setState("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/baoguangwen7708@gmail.com", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      });
      if (!response.ok) throw new Error("submit failed");
      form.reset();
      setState("sent");
    } catch (error) {
      setState("error");
    }
  };

  return (
    <section className="license-panel" aria-label="IP 授權合作諮詢">
      <div className="license-intro">
        <span>IP Licensing</span>
        <h4>喜歡這個 IP？<br/>可以直接發起授權合作諮詢。</h4>
        <p>適合想開發周邊、聯名產品、文旅活動、包裝應用或品類授權的客戶。填完後我們會先判斷授權方式、產品風險與落地可能性。</p>
      </div>

      <div className="license-guide">
        <b>可授權方向參考</b>
        <div>
          {LICENSE_CATEGORIES.map(item => <span key={item}>{item}</span>)}
        </div>
      </div>

      <form className="license-form" onSubmit={onSubmit}>
        <label>
          <span>公司名稱</span>
          <input name="公司名稱" placeholder="例如：某某文化 / 某某玩具有限公司" required />
        </label>
        <label>
          <span>聯絡方式</span>
          <input name="聯絡方式" placeholder="Email / WhatsApp / WeChat" required />
        </label>
        <label>
          <span>產品類別</span>
          <input name="產品類別" placeholder="例如：搪膠公仔、文具套裝、兒童服裝、文旅伴手禮" required />
        </label>
        <label>
          <span>是否有授權合作經驗</span>
          <select name="是否有授權合作經驗" defaultValue="未選擇">
            <option value="未選擇">請選擇</option>
            <option value="有，已有品牌/IP 授權經驗">有，已有品牌/IP 授權經驗</option>
            <option value="沒有，第一次了解授權合作">沒有，第一次了解授權合作</option>
            <option value="有產品能力，但需要授權流程建議">有產品能力，但需要授權流程建議</option>
          </select>
        </label>
        <label>
          <span>想拿授權的產品名稱</span>
          <input name="產品名稱" placeholder="例如：馬逢國系列搪膠擺件 / IP 文具禮盒" />
        </label>
        <label>
          <span>產品規格：材質 + 尺寸</span>
          <input name="產品規格" placeholder="例如：PVC 搪膠，高 12cm；帆布袋 35×40cm" />
        </label>
        <label>
          <span>產品樣品 / 參考圖片</span>
          <input name="產品樣品圖片" type="file" accept="image/*,.pdf" multiple />
        </label>
        <label>
          <span>授權合作方式</span>
          <select name="授權合作方式" defaultValue="非獨家按年品類，保底+分成">
            <option value="獨家按年買斷品類+保底分成">獨家按年買斷品類 + 保底分成</option>
            <option value="非獨家按年品類，保底+分成">非獨家按年品類，保底 + 分成</option>
            <option value="先做小批量聯名測試">先做小批量聯名測試</option>
            <option value="需要先評估合作模式">需要先評估合作模式</option>
          </select>
        </label>
        <label className="license-wide">
          <span>備註 / 其他需求</span>
          <textarea name="其他需求" rows={4} placeholder="例如：預計上市時間、銷售渠道、首批數量、目標客群、希望授權區域等" />
        </label>
        <button type="submit" disabled={state === "sending"}>
          {state === "sending" ? "正在提交..." : "提交 IP 授權初步諮詢"} <em>→</em>
        </button>
        {state === "sent" && <p className="license-success">已收到，我們會根據產品類別與合作方式先做初步判斷。</p>}
        {state === "error" && <p className="license-error">提交暫時未成功，請稍後再試，或直接發送至 hello@ip-design.hk。</p>}
      </form>
    </section>
  );
};

const Cases = ({ cases, onOpen }) => {
  // 来自 Sanity 后台的数据优先；空时使用 fallback 占位
  const fromSanity = cases && cases.length > 0;
  const list = fromSanity ? cases : CASES_FALLBACK;

  return (
    <section id="cases" data-screen-label="05 Cases">
      <div className="shell">
        <div className="sec-eyebrow">
          <span className="num">05 / 07</span><span>服務案例  ·  SELECTED WORK</span><span className="line"/>
        </div>
        <h2 className="sec-title">交付，<br/>並讓它<span className="accent">繼續生長</span>。</h2>
        <p className="sec-sub">部分公開案例。涉及保密協議的客戶不在此列。</p>

        <div className="case-grid">
          {list.map((c, i) => {
            const isBig = c.big || c.size === "big";
            const isWide = c.wide || c.size === "wide";
            const hasImage = !!c.image;
            const PlaceholderIP = IP_COMPONENTS[c.Vis] || IP_COMPONENTS.IPSparky;
            return (
              <article
                key={c._id || i}
                id={c._id ? `case-${c._id}` : undefined}
                className={`case ${isBig?"big":""} ${isWide?"wide":""} ${hasImage?"has-image":""} ${fromSanity?"is-clickable":""}`}
                role={fromSanity ? "button" : undefined}
                tabIndex={fromSanity ? 0 : undefined}
                onClick={() => fromSanity && onOpen && onOpen(c)}
                onKeyDown={(e) => {
                  if (fromSanity && onOpen && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    onOpen(c);
                  }
                }}
              >
                {hasImage ? (
                  <div className="case-image" style={{ backgroundImage:`url(${c.image})` }}>
                    <div className="case-image-veil"/>
                  </div>
                ) : (
                  <div className="case-vis">
                    <PlaceholderIP />
                  </div>
                )}
                <span className="case-tag">{getCaseCategory(c)}</span>
                <div className="case-meta">
                  <span>{String(i+1).padStart(2,"0")}</span>
                  <span>{c.year ? `HK · ${c.year}` : "HK · 2024-26"}</span>
                </div>
                <div className="case-foot">
                  <h4>{getCaseTitle(c)}</h4>
                  <p>{getCaseDescription(c)}</p>
                  {getCaseTags(c).length > 0 && (
                    <div className="case-keywords">
                      {getCaseTags(c).slice(0, 4).map(tag => <em key={tag}>{tag}</em>)}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CaseModal = ({ data, onClose, onOpenVideo, onPrev, onNext, canNavigate, allCases = [], onOpenCase }) => {
  const images = getCaseImages(data);
  const videos = (data.videos || []).filter(video => video && video.url);
  const pdfs = (data.pdfs || []).filter(pdf => pdf && pdf.url);
  const hasDetails = data.client || data.services?.length || data.tags?.length || data.body?.length || data.link || pdfs.length;
  const touchRef = React.useRef(null);

  const jumpFromDetail = (id) => {
    onClose && onClose();
    window.setTimeout(() => {
      window.history.replaceState(null, "", `#${id}`);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  const onTouchStart = (event) => {
    const touch = event.touches && event.touches[0];
    if (!touch) return;
    touchRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event) => {
    if (!touchRef.current || !canNavigate) return;
    const touch = event.changedTouches && event.changedTouches[0];
    if (!touch) return;
    const dx = touch.clientX - touchRef.current.x;
    const dy = touch.clientY - touchRef.current.y;
    touchRef.current = null;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      if (dx < 0) onNext && onNext();
      if (dx > 0) onPrev && onPrev();
    }
  };

  return (
    <div className="case-modal" role="dialog" aria-modal="true" aria-label={getCaseTitle(data)} onClick={onClose}>
      <div className="case-modal-panel" onClick={(e) => e.stopPropagation()} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="case-detail-topnav">
          <button className="case-detail-brand" type="button" onClick={() => jumpFromDetail("home")} aria-label="返回首頁">
            <span>IBD</span>
            <em>燃點品牌設計</em>
          </button>
          <div className="case-detail-navlinks">
            <button type="button" onClick={() => jumpFromDetail("cases")}>案例列表</button>
            <button type="button" onClick={() => jumpFromDetail("contact")}>聯繫我們</button>
            <button type="button" onClick={() => shareCase(data, "native")}>分享</button>
          </div>
          <button className="case-detail-close-mini" type="button" onClick={onClose} aria-label="關閉案例詳情">×</button>
        </div>
        <button className="case-modal-close" type="button" onClick={onClose} aria-label="關閉案例詳情">×</button>
        {canNavigate && (
          <div className="case-modal-nav" aria-label="切換案例">
            <button type="button" onClick={onPrev} aria-label="上一個案例">‹</button>
            <button type="button" onClick={onNext} aria-label="下一個案例">›</button>
          </div>
        )}

        <div className="case-modal-head">
          <div>
            <div className="case-modal-kicker">
              <span>{getCaseCategory(data)}</span>
              {data.year && <span>{data.year}</span>}
            </div>
            <h3>{getCaseTitle(data)}</h3>
            <div className="case-author">
              <span className="case-author-avatar">ibd</span>
              <span>
                <strong>燃點品牌設計</strong>
                <em>Ignition Brand Design</em>
              </span>
            </div>
            {getCaseDescription(data) && <p>{getCaseDescription(data)}</p>}
          </div>
          {data.link && (
            <a className="case-link" href={data.link} target="_blank" rel="noreferrer">外部連結</a>
          )}
        </div>

        {hasDetails && (
          <div className="case-detail-grid">
            <div className="case-detail-meta">
              {data.client && (
                <div>
                  <b>CLIENT</b>
                  <span>{data.client}</span>
                </div>
              )}
              {getCaseCategories(data).length > 0 && (
                <div>
                  <b>分類</b>
                  <div className="case-chip-row">{getCaseCategories(data).map(t => <span key={t} className="case-chip cat">{t}</span>)}</div>
                </div>
              )}
              {data.services?.length > 0 && (
                <div>
                  <b>服務</b>
                  <div className="case-chip-row">{data.services.map(s => <span key={s} className="case-chip svc">{toTrad(s)}</span>)}</div>
                </div>
              )}
              <div>
                <b>SHARE</b>
                <div className="case-share">
                  {SHARE_OPTIONS.map(item => (
                    <button key={item.id} type="button" onClick={() => shareCase(data, item.id)} aria-label={`分享至 ${item.label}`} title={item.label}>
                      {item.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="case-detail-body">
              {renderPortableText(data.body)}
            </div>
          </div>
        )}

        {images.length > 0 && (
          <div className="case-gallery">
            {images.map((img, i) => (
              <figure key={`${img.url}-${i}`} className={i === 0 ? "lead" : ""}>
                <img src={img.url} alt={img.caption || getCaseTitle(data)} loading={i === 0 ? "eager" : "lazy"} />
                {img.caption && img.caption !== "Cover" && <figcaption>{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        {videos.length > 0 && (
          <div className="case-videos">
            <div className="case-videos-head">
              <h4>影片</h4>
              <p>這個作品包含系列動態內容，點開任一視頻即可全屏連續觀看，向上滑動切換下一條。</p>
            </div>
            {videos.map((video, i) => (
              <figure key={`${video.url}-${i}`} className="video-openable" onClick={() => onOpenVideo && onOpenVideo(video)}>
                <VideoThumb video={video} label={`案例視頻 ${i + 1}`} />
                {(video.title || video.caption || video.filename) && (
                  <figcaption>
                    <strong>{toTrad(video.title || video.filename)}</strong>
                    {(video.caption || video.filename) && <span>{toTrad(video.caption || video.filename)}</span>}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {/* ── 版權聲明 ── */}
        <div className="case-copyright">
          <span className="case-copyright-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><path d="M10 1.667A8.333 8.333 0 1 0 18.333 10 8.342 8.342 0 0 0 10 1.667zm0 15A6.667 6.667 0 1 1 16.667 10 6.674 6.674 0 0 1 10 16.667zm.833-10.834h-1.666v5h1.666v-5zm0 6.667h-1.666v1.667h1.666V12.5z"/></svg>
          </span>
          <span>
            <strong>© 燃點品牌設計 · 原創 IP 版權聲明</strong>
            <em>本作品所有 IP 形象、車標設計及表達內容均為原創版權，已在香港及內地依法登記。未經授權任意複製、模仿、轉載或商業使用，將依法追責。如需授權合作，歡迎聯絡我們。</em>
          </span>
        </div>
        <LicenseInquiry data={data} />

        {pdfs.length > 0 && (
          <div className="case-pdfs">
            <h4>PDF 文件</h4>
            {pdfs.map((pdf, i) => (
              <a key={`${pdf.url}-${i}`} href={pdf.url} target="_blank" rel="noreferrer" className="pdf-card">
                <span className="pdf-mark">PDF</span>
                <span>
                  <strong>{pdf.title || pdf.filename || `PDF ${i + 1}`}</strong>
                  {(pdf.description || pdf.filename) && <em>{pdf.description || pdf.filename}</em>}
                </span>
              </a>
            ))}
          </div>
        )}

        {(() => {
          const others = (allCases || []).filter(c => c && c._id !== data._id);
          if (others.length < 1 || !onOpenCase) return null;
          return (
            <div className="case-more">
              <div className="case-more-head">
                <h4>其他案例</h4>
                <button type="button" onClick={() => jumpFromDetail("cases")}>查看全部 →</button>
              </div>
              <div className="case-more-strip">
                {others.slice(0, 12).map((c) => {
                  const cover = getCaseImages(c)[0];
                  return (
                    <button type="button" className="case-more-card" key={c._id} onClick={() => onOpenCase(c)} aria-label={`查看 ${getCaseTitle(c)}`}>
                      <span className="case-more-thumb">
                        {cover ? <img src={cover.url} alt="" loading="lazy" /> : <span className="case-more-ph">{getCaseTitle(c).slice(0, 2)}</span>}
                      </span>
                      <strong>{getCaseTitle(c)}</strong>
                      <em>{getCaseCategory(c)}</em>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })()}

        {(() => {
          const kws = (data.tags || []).map(toTrad).filter(Boolean);
          if (!kws.length) return null;
          return (
            <div className="case-keywords">
              <span className="case-keywords-label">關鍵詞</span>
              <div className="case-keywords-chips">
                {kws.map(k => <span key={k} className="case-chip kw">{k}</span>)}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

const VideoConsultPanel = ({ video, lang = "zh-hant", onClose }) => {
  const [state, setState] = React.useState("idle");
  const [intent, setIntent] = React.useState("授權 IP");
  const title = video ? toTrad(video.title || video.caseTitle || video.seriesTitle || "作品視頻") : "";
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", `IP 合作諮詢｜${intent}｜${title}`);
    formData.append("_cc", "hello@ip-design.hk,baoguangwen7708@gmail.com");
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append("合作意向", intent);
    formData.append("來源視頻", title);
    setState("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/baoguangwen7708@gmail.com", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData,
      });
      if (!response.ok) throw new Error("submit failed");
      form.reset();
      setState("sent");
    } catch (error) {
      setState("error");
    }
  };
  return (
    <div className="video-consult" role="dialog" aria-modal="false" aria-label="授權合作諮詢">
      <div className="video-consult-card">
        <button className="video-consult-close" type="button" onClick={onClose} aria-label="返回繼續觀看">×</button>
        <div className="video-consult-head">
          <span>IP 合作 · LICENSING & CUSTOM</span>
          <h4>喜歡這個 IP？<br/>留個聯繫方式，我們和你聊合作。</h4>
          {title && <em>來源：{title}</em>}
        </div>
        <div className="video-consult-intent" role="group" aria-label="合作方式">
          {["授權 IP", "定制 IP"].map(opt => (
            <button
              key={opt}
              type="button"
              className={intent === opt ? "on" : ""}
              onClick={() => setIntent(opt)}
            >{opt}</button>
          ))}
        </div>
        <form className="video-consult-form" onSubmit={onSubmit}>
          <label>
            <span>稱呼 / 公司</span>
            <input name="稱呼" placeholder="例如：某某文化 / 陳小姐" required />
          </label>
          <label>
            <span>聯繫方式</span>
            <input name="聯絡方式" placeholder="Email / WhatsApp / WeChat" required />
          </label>
          <label>
            <span>想做什麼（選填）</span>
            <textarea name="需求" rows={2} placeholder={intent === "定制 IP" ? "例如：想為品牌定制一個吉祥物角色，用於包裝與門店" : "例如：想授權這個 IP 開發潮玩 / 文具 / 聯名款"} />
          </label>
          <button type="submit" className="video-consult-submit" disabled={state === "sending"}>
            {state === "sending" ? "正在提交..." : "提交合作諮詢"} <em>→</em>
          </button>
          {state === "sent" && <p className="video-consult-ok">已收到！我們會盡快與你聯繫。可繼續觀看視頻。</p>}
          {state === "error" && <p className="video-consult-err">提交未成功，請稍後再試，或郵件至 hello@ip-design.hk。</p>}
        </form>
      </div>
    </div>
  );
};

const VideoReelOverlay = ({ videos = [], initialIndex = 0, initialSeriesIndex = 0, onClose, onOpenCase, onNav, lang = "zh-hant" }) => {
  const reelRef = React.useRef(null);
  const touchRef = React.useRef(null);
  const list = videos.filter(video => video && video.url);
  const [seriesActive, setSeriesActive] = React.useState({});
  const [seriesFading, setSeriesFading] = React.useState({});
  const [consultOpen, setConsultOpen] = React.useState(false);
  const [consultVideo, setConsultVideo] = React.useState(null);

  // pause video while consult form is open, so audio doesn't compete
  React.useEffect(() => {
    const root = reelRef.current;
    if (!root) return;
    if (consultOpen) {
      root.querySelectorAll("video").forEach(v => v.pause());
    }
  }, [consultOpen]);

  const openConsult = () => {
    const root = reelRef.current;
    let current = list[initialIndex];
    if (root) {
      const slides = Array.from(root.querySelectorAll(".video-reel-slide"));
      const rootTop = root.getBoundingClientRect().top;
      const slide = slides.slice().sort((a, b) => Math.abs(a.getBoundingClientRect().top - rootTop) - Math.abs(b.getBoundingClientRect().top - rootTop))[0];
      const idx = slides.indexOf(slide);
      if (idx >= 0) {
        const seriesItems = buildVideoSeriesItems(list[idx]);
        current = seriesItems[seriesActive[idx] || 0] || list[idx];
      }
    }
    setConsultVideo(current);
    setConsultOpen(true);
  };
  const switchSeriesItem = React.useCallback((slideIndex, targetIndex) => {
    // pause ALL videos in this slide before switching so old audio stops
    const root = reelRef.current;
    if (root) {
      const slide = root.querySelector(`[data-video-index="${slideIndex}"]`);
      if (slide) slide.querySelectorAll("video").forEach(v => { v.pause(); v.currentTime = 0; });
    }
    setSeriesFading(prev => ({ ...prev, [slideIndex]: true }));
    window.setTimeout(() => {
      setSeriesActive(prev => ({ ...prev, [slideIndex]: targetIndex }));
      window.setTimeout(() => setSeriesFading(prev => ({ ...prev, [slideIndex]: false })), 140);
    }, 140);
  }, []);

  React.useEffect(() => {
    const el = reelRef.current;
    if (!el || !list.length) return;
    setSeriesActive(prev => ({ ...prev, [initialIndex]: initialSeriesIndex || 0 }));
    const slide = el.querySelector(`[data-video-index="${initialIndex}"]`);
    if (slide) slide.scrollIntoView({ block: "start" });
  }, [initialIndex, initialSeriesIndex, list.length]);

  React.useEffect(() => {
    const root = reelRef.current;
    if (!root || !list.length) return;
    const moveToNextSlide = (currentSlide, delay = 0) => {
      const slides = Array.from(root.querySelectorAll(".video-reel-slide"));
      const currentIndex = slides.indexOf(currentSlide);
      if (currentIndex < 0 || !slides.length) return;
      const nextSlide = slides[(currentIndex + 1) % slides.length];
      if (!nextSlide || nextSlide === currentSlide) return;
      window.setTimeout(() => {
        nextSlide.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(() => playSlide(nextSlide), 260);
      }, delay);
    };
    const playSlide = (slide) => {
      root.querySelectorAll("video").forEach((video) => {
        if (!slide || !slide.contains(video)) {
          video.pause();
          video.currentTime = 0;
        }
      });
      const activeVideo = slide && slide.querySelector("video");
      if (activeVideo) {
        activeVideo.muted = false;
        activeVideo.volume = 1;
        activeVideo.play().catch(() => {});
      }
    };
    const slides = Array.from(root.querySelectorAll(".video-reel-slide"));
    const observer = new IntersectionObserver((entries) => {
      const active = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (active && active.intersectionRatio > 0.62) playSlide(active.target);
    }, { root, threshold: [0.62, 0.78, 0.9] });
    slides.forEach(slide => observer.observe(slide));
    const onEnded = (event) => {
      const currentSlide = event.currentTarget.closest(".video-reel-slide");
      const currentIndex = slides.indexOf(currentSlide);
      if (currentIndex < 0) return;
      const seriesItems = buildVideoSeriesItems(list[currentIndex]);
      const activeSeriesIndex = seriesActive[currentIndex] || 0;
      if (seriesItems.length > 1 && activeSeriesIndex < seriesItems.length - 1) {
        switchSeriesItem(currentIndex, activeSeriesIndex + 1);
        return;
      }
      moveToNextSlide(currentSlide, 220);
    };
    root.querySelectorAll("video").forEach(video => {
      video.addEventListener("ended", onEnded);
    });
    const firstSlide = root.querySelector(`[data-video-index="${initialIndex}"]`) || slides[0];
    window.setTimeout(() => playSlide(firstSlide), 180);
    return () => {
      observer.disconnect();
      root.querySelectorAll("video").forEach((video) => {
        video.removeEventListener("ended", onEnded);
        video.pause();
      });
    };
  }, [initialIndex, list.length, seriesActive, switchSeriesItem]);

  React.useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose && onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // hard-stop ALL reel videos on unmount — kills residual audio when returning to homepage
  React.useEffect(() => {
    return () => {
      document.querySelectorAll(".video-reel video").forEach((v) => {
        try {
          v.pause();
          v.muted = true;
          v.removeAttribute("src");
          v.load();
        } catch (e) {}
      });
    };
  }, []);

  if (!list.length) return null;

  const onTouchStart = (event) => {
    const touch = event.touches && event.touches[0];
    if (!touch) return;
    touchRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event) => {
    if (!touchRef.current) return;
    const touch = event.changedTouches && event.changedTouches[0];
    if (!touch) return;
    const dx = touch.clientX - touchRef.current.x;
    const dy = touch.clientY - touchRef.current.y;
    touchRef.current = null;
    if (Math.abs(dx) > 82 && Math.abs(dx) > Math.abs(dy) * 1.35) {
      const root = reelRef.current;
      if (!root) {
        if (dx > 0) onClose && onClose();
        return;
      }
      const slides = Array.from(root.querySelectorAll(".video-reel-slide"));
      if (!slides.length) return;
      const rootTop = root.getBoundingClientRect().top;
      const currentSlide = slides
        .slice()
        .sort((a, b) => Math.abs(a.getBoundingClientRect().top - rootTop) - Math.abs(b.getBoundingClientRect().top - rootTop))[0];
      const currentIndex = slides.indexOf(currentSlide);
      const currentVideo = list[currentIndex];
      const seriesItems = buildVideoSeriesItems(currentVideo);
      const activeSeriesIndex = seriesActive[currentIndex] || 0;
      if (seriesItems.length > 1) {
        const nextSeriesIndex = dx < 0
          ? Math.min(activeSeriesIndex + 1, seriesItems.length - 1)
          : Math.max(activeSeriesIndex - 1, 0);
        if (nextSeriesIndex !== activeSeriesIndex) {
          switchSeriesItem(currentIndex, nextSeriesIndex);
          return;
        }
        if (dx > 0 && activeSeriesIndex <= 0) onClose && onClose();
        return;
      }
      if (dx > 0) {
        onClose && onClose();
        return;
      }
    }
  };

  const jumpToVideo = (target) => {
    const root = reelRef.current;
    if (!root || !target?.url) return;
    const parentIndex = list.findIndex(item => buildVideoSeriesItems(item).some(seriesItem => seriesItem.url === target.url));
    if (parentIndex < 0) return;
    const seriesIndex = buildVideoSeriesItems(list[parentIndex]).findIndex(seriesItem => seriesItem.url === target.url);
    if (seriesIndex > 0) setSeriesActive(prev => ({ ...prev, [parentIndex]: seriesIndex }));
    const slide = root.querySelector(`[data-video-index="${parentIndex}"]`);
    if (slide) root.scrollTo({ top: slide.offsetTop, behavior: "smooth" });
  };

  const jumpFromVideo = (id) => {
    onClose && onClose();
    window.setTimeout(() => {
      if (onNav) {
        onNav(id);
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <div className="video-reel" role="dialog" aria-modal="true" aria-label="作品視頻合集" onTouchStartCapture={onTouchStart} onTouchEndCapture={onTouchEnd}>
      <div className="video-reel-topnav">
        <button className="video-reel-brand" type="button" onClick={() => jumpFromVideo("home")} aria-label="返回首頁">
          <span>IBD</span>
          <em>{tt(lang, "navBrand")}</em>
        </button>
        <div className="video-reel-navlinks">
          <button type="button" onClick={() => jumpFromVideo("cases")}>{lang === "en" ? "Work" : lang === "zh-hans" ? "案例列表" : "案例列表"}</button>
          <button type="button" onClick={() => jumpFromVideo("contact")}>{lang === "en" ? "Contact" : lang === "zh-hans" ? "联系我们" : "聯繫我們"}</button>
          <button type="button" onClick={() => shareSite("native", lang)}>{lang === "en" ? "Share" : "分享"}</button>
        </div>
        <div className="video-reel-topright">
          <button className="video-reel-consult" type="button" onClick={openConsult} aria-label="授權合作諮詢">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5.6a8.5 8.5 0 0 1-.9-3.9A8.38 8.38 0 0 1 12.5 3a8.38 8.38 0 0 1 8.5 8.5z"/>
            </svg>
            <em>合作</em>
          </button>
          <button className="video-reel-close" type="button" onClick={onClose} aria-label="關閉視頻">×</button>
        </div>
      </div>
      {consultOpen && <VideoConsultPanel video={consultVideo} lang={lang} onClose={() => setConsultOpen(false)} />}
      <div className="video-reel-track" ref={reelRef}>
        {list.map((video, index) => (
          <section className="video-reel-slide" key={`${video.url}-${index}`} data-video-index={index}>
            {(() => {
              const seriesItems = buildVideoSeriesItems(video);
              const activeItem = seriesItems[seriesActive[index] || 0] || video;
              return (
                <>
                  <video key={`video-${index}-${seriesActive[index] || 0}`} className={seriesFading[index] ? "is-switching" : ""} src={getVideoPreviewSrc(activeItem.url)} poster={activeItem.poster || ""} controls playsInline preload={Math.abs(index - initialIndex) <= 1 ? "metadata" : "none"} />
                  <VideoBarrage video={activeItem} />
                </>
              );
            })()}
            <div className="video-reel-caption">
              <div className="video-reel-meta">
                <span>{String(index + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}</span>
                <VideoHeat video={video} />
              </div>
              {(() => {
                const activeItem = buildVideoSeriesItems(video)[seriesActive[index] || 0] || video;
                return (
                  <>
                    <h3>{toTrad(activeItem.title || activeItem.caseTitle || "作品視頻")}</h3>
                    {(activeItem.caption || activeItem.caseDescription || activeItem.category) && (
                      <p>{toTrad(activeItem.caption || activeItem.caseDescription || activeItem.category)}</p>
                    )}
                  </>
                );
              })()}
              {buildVideoSeriesItems(video).length > 1 && (
                <div className="video-reel-series" aria-label="系列視頻集數">
                  <span>系列集數</span>
                  <div>
                    {buildVideoSeriesItems(video).slice(0, 6).map((item, itemIndex) => (
                      <button
                        type="button"
                        className={(seriesActive[index] || 0) === itemIndex ? "active" : ""}
                        key={`${item.url}-${itemIndex}`}
                        onClick={() => switchSeriesItem(index, itemIndex)}
                      >
                        {item.poster ? (
                          <img src={item.poster} alt={toTrad(item.title || `系列視頻 ${itemIndex + 1}`)} />
                        ) : (
                          <video src={getVideoPreviewSrc(item.url)} muted playsInline preload="metadata" />
                        )}
                        <em>{String(itemIndex + 1).padStart(2, "0")}</em>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="video-license-hint" aria-label="IP 授權合作提示">
                <span>IP 授權</span>
                <em>可聯名 · 可開發周邊 · 可品類授權</em>
              </div>
              {(video.caseTitle || video.caseId) && (
                <button type="button" onClick={() => onOpenCase && onOpenCase(video)}>
                  查看案例與授權諮詢 · {toTrad(video.caseTitle || "作品詳情")}
                </button>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { Nav, Hero, Marquee, VideoSpotlight, About, Testimonials, Services, Methodology, Cases, CaseModal, VideoReelOverlay, ShareDock, NAV });
