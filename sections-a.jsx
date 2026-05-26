// sections.jsx — page sections for Ignition Brand Design

const NAV = [
  { id: "home",     label: "首頁",       en: "HOME" },
  { id: "about",    label: "關於我們",   en: "ABOUT" },
  { id: "services", label: "主營業務",   en: "SERVICES" },
  { id: "method",   label: "設計方法論", en: "METHOD" },
  { id: "clients",  label: "服務客戶",   en: "CLIENTS" },
  { id: "cases",    label: "服務案例",   en: "WORK" },
  { id: "pricing",  label: "服務階梯",   en: "PRICING" },
  { id: "contact",  label: "聯繫我們",   en: "CONTACT" },
];

// ─────────────────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────────────────
const Nav = ({ active, onNav, theme = "dark", onThemeToggle }) => (
  <header className="nav">
    <div className="nav-inner">
      <a className="nav-brand" href="#home" onClick={(e)=>{e.preventDefault();onNav("home")}}>
        <span className="nav-logo-wrap">
          <img className="nav-logo nav-logo-light" src="assets/brand-logo-white-alpha.png" alt="燃點" />
          <img className="nav-logo nav-logo-dark" src="assets/brand-logo-black-alpha.png" alt="燃點" />
        </span>
        <span>IBD</span>
        <span style={{ opacity:.55, marginLeft:6 }}>燃點品牌設計</span>
      </a>
      <nav className="nav-links">
        {NAV.slice(1, 8).map(n => (
          <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""}
             onClick={(e)=>{e.preventDefault(); onNav(n.id)}}>{n.label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label="切換黑白風格">
          <span>{theme === "light" ? "白" : "黑"}</span>
        </button>
        <a className="nav-cta" href="#contact" onClick={(e)=>{e.preventDefault();onNav("contact")}}>
          <span className="dot"></span>啟動項目
        </a>
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

const Hero = ({ variant = "sunburst" }) => (
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
        <div className="tech-field"></div>
        <HeroClientOrbit />
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
        <div className="hero-mark hero-mark-image">
          <img className="hero-wordmark hero-wordmark-black" src="assets/brand-wordmark-black-alpha.png" alt="燃點" />
          <img className="hero-wordmark hero-wordmark-white" src="assets/brand-wordmark-white-alpha.png" alt="燃點" />
          <Sparkle size={64} color="var(--accent)" className="sparkle" />
        </div>
        <div className="hero-sub-en">IGNITION&nbsp;&nbsp;BRAND&nbsp;&nbsp;DESIGN</div>
        <div className="hero-tag">以 A.I. 邏輯，點燃品牌生命</div>
      </div>
    </div>

    <div className="shell">
      <div className="hero-bottom">
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
const About = () => (
  <section id="about" data-screen-label="02 About">
    <div className="shell">
      <div className="sec-eyebrow">
        <span className="num">01 / 07</span>
        <span>關於我們  ·  ABOUT</span>
        <span className="line"/>
      </div>
      <h2 className="sec-title">設計即<span className="accent">資產</span>。<br/>不是裝飾，是火種。</h2>
      <div className="about-grid">
        <div className="about-manifesto">
          燃點是植根香港的高端視覺實驗室。我們不做廉價的「平面美化」——
          <span className="accent">十五年以上設計沉澱</span>，被我們重塑為一套可被商業驗證的方法：
          將品牌基因解碼成「超級 IP」，讓 IP 以潮玩規格進入產品線、進入聯名、進入盲盒、進入 Z 世代的私域。
          <br/><br/>
          一個沒有故事的形象，是空殼。一個沒有商業閉環的 IP，是擺設。
          我們交付的，是品牌可長期持有的<span className="accent">資產</span>。
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

const getCaseTitle = (c) => c.h || c.title || "Untitled Case";
const getCaseDescription = (c) => c.zh || c.description || "";
const getCaseCategory = (c) => c.tag || c.category || "WORK";
const getCaseImages = (c) => {
  const gallery = (c.gallery || []).filter(item => item && item.url);
  const cover = c.image ? [{ url: c.image, caption: "Cover" }] : [];
  const galleryUrls = new Set(gallery.map(item => item.url));
  return [...cover.filter(item => !galleryUrls.has(item.url)), ...gallery];
};
const renderPortableText = (blocks) => {
  if (!blocks || !blocks.length) return null;
  return blocks.map((block, i) => {
    const text = (block.children || []).map(child => child.text || "").join("");
    return text ? <p key={block._key || i}>{text}</p> : null;
  });
};
const getCaseShareUrl = (data) => {
  const base = window.location.origin + window.location.pathname;
  const id = data._id ? `case-${encodeURIComponent(data._id)}` : "cases";
  return `${base}#${id}`;
};
const shareCase = (data, channel) => {
  const title = getCaseTitle(data);
  const text = getCaseDescription(data);
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CaseModal = ({ data, onClose }) => {
  const images = getCaseImages(data);
  const videos = (data.videos || []).filter(video => video && video.url);
  const pdfs = (data.pdfs || []).filter(pdf => pdf && pdf.url);
  const hasDetails = data.client || data.services?.length || data.body?.length || data.link || data.body?.length || pdfs.length;

  return (
    <div className="case-modal" role="dialog" aria-modal="true" aria-label={getCaseTitle(data)} onClick={onClose}>
      <div className="case-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="case-modal-close" type="button" onClick={onClose} aria-label="關閉案例詳情">×</button>

        <div className="case-modal-head">
          <div>
            <div className="case-modal-kicker">
              <span>{getCaseCategory(data)}</span>
              {data.year && <span>{data.year}</span>}
            </div>
            <h3>{getCaseTitle(data)}</h3>
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
              {data.services?.length > 0 && (
                <div>
                  <b>SERVICES</b>
                  <span>{data.services.join(" · ")}</span>
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
            <h4>影片</h4>
            {videos.map((video, i) => (
              <figure key={`${video.url}-${i}`}>
                <video src={video.url} controls playsInline preload="metadata" />
                {(video.title || video.caption || video.filename) && (
                  <figcaption>
                    <strong>{video.title || video.filename}</strong>
                    {(video.caption || video.filename) && <span>{video.caption || video.filename}</span>}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

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
      </div>
    </div>
  );
};

Object.assign(window, { Nav, Hero, Marquee, About, Testimonials, Services, Methodology, Cases, CaseModal, NAV });
