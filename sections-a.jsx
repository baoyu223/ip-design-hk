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
const Nav = ({ active, onNav }) => (
  <header className="nav">
    <div className="nav-inner">
      <a className="nav-brand" href="#home" onClick={(e)=>{e.preventDefault();onNav("home")}}>
        <span className="dot"></span>
        <span>IBD</span>
        <Sparkle size={11} color="var(--accent)" />
        <span style={{ opacity:.55, marginLeft:6 }}>燃點品牌設計</span>
      </a>
      <nav className="nav-links">
        {NAV.slice(1, 8).map(n => (
          <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""}
             onClick={(e)=>{e.preventDefault(); onNav(n.id)}}>{n.label}</a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact" onClick={(e)=>{e.preventDefault();onNav("contact")}}>
        <span className="dot"></span>啟動項目
      </a>
    </div>
  </header>
);

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
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
        <div className="hero-mark">
          <span className="ch">燃</span>
          <span className="ch">點</span>
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
          <div className="v">Hong Kong · 2005</div>
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
  const items = ["品牌基因解碼", "潮玩 3D 視覺重塑", "全場景視覺延展", "商業化變現引爆", "Z 世代對話", "盲盒級資產"];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((t,i) => (
          <React.Fragment key={i}>
            <span>{t}</span>
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
          <span className="accent">二十年頂尖設計沉澱</span>，被我們重塑為一套可被商業驗證的方法：
          將品牌基因解碼成「超級 IP」，讓 IP 以潮玩規格進入產品線、進入聯名、進入盲盒、進入 Z 世代的私域。
          <br/><br/>
          一個沒有故事的形象，是空殼。一個沒有商業閉環的 IP，是擺設。
          我們交付的，是品牌可長期持有的<span className="accent">資產</span>。
        </div>
        <div className="about-stats">
          <div className="stat">
            <div className="v">20<span className="pp">+</span></div>
            <div className="k">YEARS · 設計沉澱</div>
          </div>
          <div className="stat">
            <div className="v">140<span className="pp">+</span></div>
            <div className="k">BRANDS · 服務品牌</div>
          </div>
          <div className="stat">
            <div className="v">38</div>
            <div className="k">IP · 孵化角色</div>
          </div>
          <div className="stat">
            <div className="v">9<span className="pp">×</span></div>
            <div className="k">AWARDS · 國際獎項</div>
          </div>
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

  if (channel === "native" && navigator.share) {
    navigator.share({ title, text, url }).catch(() => {});
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
                  <button type="button" onClick={() => shareCase(data, "native")}>朋友圈</button>
                  <button type="button" onClick={() => shareCase(data, "facebook")}>Facebook</button>
                  <button type="button" onClick={() => shareCase(data, "instagram")}>Instagram</button>
                  <button type="button" onClick={() => shareCase(data, "x")}>X</button>
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

Object.assign(window, { Nav, Hero, Marquee, About, Services, Methodology, Cases, CaseModal, NAV });
