// sections-b.jsx — Pricing, Contact, Footer
const getBText = (lang, zhHant, zhHans, en) => {
  if (lang === "en") return en;
  if (lang === "zh-hans") return zhHans;
  return zhHant;
};

// ─────────────────────────────────────────────────────────────────────────────
// PRICING
// ─────────────────────────────────────────────────────────────────────────────
const TIERS = [
  {
    n: "TIER / 01",
    h: "品牌診斷",
    en: "Find the ignition point",
    price: "先釐清方向",
    when: "3–4 週",
    blurb: "適合正在起步、轉型或需要快速判斷 IP 方向的品牌。",
    feat: false,
    items: [
      "品牌基因解碼 + IP 世界觀設定",
      "IP 主形象設計（2D 三視圖）",
      "高級 3D 建模 + 材質渲染",
      "3–5 張主視覺海報",
      "基礎表情 / 動作延展（3 個）",
    ],
  },
  {
    n: "TIER / 02",
    h: "IP 資產化",
    en: "Turn identity into assets",
    price: "建立可生長系統",
    when: "6–8 週",
    blurb: "將品牌視覺、角色 IP、包裝與內容語言整合成可落地的資產系統。",
    feat: true,
    items: [
      "包含 TIER 01 所有 IP 孵化",
      "品牌 VI 系統重構",
      "專屬中／英文字體標識",
      "高端包裝設計提案",
      "辦公物料 / 社交視覺模板",
      "線下展陳概念圖",
    ],
  },
  {
    n: "TIER / 03",
    h: "長期共創",
    en: "Build the next brand chapter",
    price: "一起推進市場",
    when: "3 個月開發 + 年度顧問",
    blurb: "面向長線運營、聯名拓展、潮玩產品化與品牌內容持續生長。",
    feat: false,
    items: [
      "包含 TIER 02 所有設計交付",
      "潮玩產品化企劃（盲盒系列）",
      "工廠生產級圖紙標準",
      "跨界聯名策略 + 視覺方案",
      "年度視覺顧問陪跑",
      "或：基礎策劃費 + 銷售分成（%）",
    ],
  },
];

const Pricing = ({ onPick, lang = "zh-hant" }) => (
  <section id="pricing" data-screen-label="06 Pricing">
    <div className="shell">
      <div className="sec-eyebrow">
        <span className="num">06 / 07</span><span>{getBText(lang, "服務階梯  ·  PRICING TIERS", "服务阶梯  ·  PRICING TIERS", "PROJECT PATHS")}</span><span className="line"/>
      </div>
      <h2 className="sec-title">{getBText(lang, "不是買一張圖。", "不是买一张图。", "Not just a picture.")}<br/>{getBText(lang, "是啟動一套", "是启动一套", "It starts a ")}<span className="accent">{getBText(lang, "生長系統", "生长系统", "growth system")}</span>{lang === "en" ? "." : "。"}</h2>
      <p className="sec-sub">{getBText(lang, "從品牌診斷、IP 資產化到長期共創，讓每一次設計投入都能沉澱為可展示、可延展、可轉化的品牌資產。", "从品牌诊断、IP资产化到长期共创，让每一次设计投入沉淀为可展示、可延展、可转化的品牌资产。", "From brand diagnosis to IP systems and long-term collaboration, we turn design investment into assets that can be shown, extended and commercialized.")}</p>

      <div className="price-grid">
        {TIERS.map((t,i) => (
          <div key={i} className={`tier ${t.feat?"feat":""}`}>
            <div className="tier-num">{t.n} {t.feat && "·  RECOMMENDED"}</div>
            <h3 className="tier-h">{t.h}</h3>
            <div className="tier-en">{t.en}</div>
            <div className="tier-price">
              <span className="cur">HK$</span>
              <span className="num">{t.price}</span>
              <span className="per">{t.when}</span>
            </div>
            <div className="tier-when" style={{ color:"var(--mute)", fontSize:13, lineHeight:1.5 }}>{t.blurb}</div>
            <ul>{t.items.map(it => <li key={it}>{it}</li>)}</ul>
            <div className="tier-cta">
              <a href="#contact" className="tier-btn" onClick={(e)=>{e.preventDefault(); onPick && onPick(t.h); document.getElementById("contact").scrollIntoView({behavior:"smooth", block:"start"})}}>
                {getBText(lang, "開始討論", "开始讨论", "Start discussion")} <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────────
const Contact = ({ selectedTier, onTierChange, lang = "zh-hant" }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitState, setSubmitState] = React.useState("idle");
  const tiers = ["輕量啟動", "全案資產", "戰略陪跑", "待議"];
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = `品牌 IP 初步諮詢｜${data.get("brand") || ""}`;
    const payload = {
      _subject: subject,
      _cc: "hello@ip-design.hk",
      _template: "table",
      _captcha: "false",
      name: data.get("name") || "",
      brand: data.get("brand") || "",
      contact: data.get("contact") || "",
      tier: selectedTier || "未選擇",
      brief: data.get("brief") || "",
    };

    setSubmitState("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/baoguangwen7708@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("submit failed");
      setSubmitted(true);
      form.reset();
      setSubmitState("idle");
    } catch (error) {
      setSubmitState("error");
    }
  };
  return (
    <section id="contact" data-screen-label="07 Contact">
      <div className="shell">
        <div className="sec-eyebrow">
          <span className="num">07 / 07</span><span>{getBText(lang, "聯繫我們  ·  GET IN TOUCH", "联系我们  ·  GET IN TOUCH", "GET IN TOUCH")}</span><span className="line"/>
        </div>
        <div className="contact-grid">
          <div>
            <h2 className="contact-big">{getBText(lang, "點燃對話，", "点燃对话，", "Start the conversation,")}<br/>{getBText(lang, "從一杯咖啡", "从一杯咖啡", "over a cup")}<br/>{getBText(lang, "開始。", "开始。", "of coffee.")}<Sparkle size={42} color="var(--accent)" style={{verticalAlign:"middle", marginLeft:8}}/></h2>
            <p style={{ color:"var(--mute)", fontSize:15, lineHeight:1.65, maxWidth:"42ch", marginTop:24 }}>
              {getBText(lang, "告訴我們你的品牌、痛點、預期。我們會在 48 小時內回覆一份初步診斷，並判斷是否進入正式立項。", "告诉我们你的品牌、痛点和预期。我们会在 48 小时内回复一份初步诊断，并判断是否进入正式立项。", "Tell us about your brand, challenge and ambition. We will reply within 48 hours with an initial diagnosis and next-step suggestion.")}
            </p>
            <div className="contact-meta">
              <div className="row">
                <div className="k">Studio</div>
                <div className="v">
                  香港九龍新蒲崗三祝街 12-14 號榮森工業第二大廈 14 樓 1403 室
                  <br/><span style={{color:"var(--mute)", fontSize:11.5, lineHeight:1.55, display:"block", marginTop:4}}>
                    Room 1403, 14/F, Wing Sum Industrial Building (Phase 2),<br/>
                    Nos. 12-14 Sam Chuk Street, San Po Kong, Kowloon, Hong Kong
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="k">Whatsapp</div>
                <div className="v">+852 6948 6199</div>
              </div>
              <div className="row">
                <div className="k">Wechat</div>
                <div className="v">188 1981 7708</div>
              </div>
              <div className="row">
                <div className="k">Website</div>
                <div className="v">ip-design.hk</div>
              </div>
              <div className="row">
                <div className="k">Email</div>
                <div className="v">hello@ip-design.hk</div>
              </div>
              <div className="row">
                <div className="k">Hours</div>
                <div className="v">Mon – Fri · 10:00 – 19:00 HKT</div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div style={{ padding:"40px 0" }}>
                <RingMark size={120} color="var(--accent)" rays={48} />
                <h3 style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:28, margin:"24px 0 8px" }}>已收到。</h3>
                <p style={{ color:"var(--mute)", fontSize:14, lineHeight:1.6 }}>
                  我們會在 48 小時內回覆。期間可瀏覽<a href="#cases" style={{color:"var(--accent)", borderBottom:"1px solid"}}>我們的案例</a>。
                </p>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <div className="field">
                  <label>1 · 你的稱呼 / NAME</label>
                  <input name="name" placeholder="例如：林先生 / Ms. Chan" required />
                </div>
                <div className="field">
                  <label>2 · 品牌 / BRAND</label>
                  <input name="brand" placeholder="你的品牌名稱、行業或產品方向" required />
                </div>
                <div className="field">
                  <label>3 · 聯絡方式 / CONTACT</label>
                  <input name="contact" placeholder="Email / WeChat / WhatsApp" required />
                </div>
                <div className="field">
                  <label>4 · 意向階梯 / TIER</label>
                  <div className="tier-pick">
                    {tiers.map(t => (
                      <button type="button" key={t} className={selectedTier===t?"on":""} onClick={()=>onTierChange(t)}>{t}</button>
                    ))}
                  </div>
                </div>
                <div className="field">
                  <label>5 · 項目簡述 / BRIEF</label>
                  <textarea name="brief" placeholder="簡單說說你的品牌背景、想解決的問題、希望達成的效果" rows={3} required />
                </div>
                <button type="submit" className="submit" disabled={submitState === "sending"}>
                  {submitState === "sending" ? getBText(lang, "正在提交...", "正在提交...", "Sending...") : getBText(lang, "馬上開啟你的品牌 IP", "马上开启你的品牌 IP", "Ignite your brand IP")} <span className="arr">→</span>
                </button>
                {submitState === "error" && (
                  <p className="form-error">提交暫時未成功，請稍後再試，或直接 WhatsApp 我們：+852 6948 6199。</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
const Footer = ({ lang = "zh-hant" }) => (
  <footer>
    <div className="shell footer-inner">
      <div className="footer-main">
        <div className="f-brand">IBD<span className="star"> ✦ </span>{getBText(lang, "燃點品牌設計", "燃点品牌设计", "Ignition Brand Design")}</div>
        <div className="f-copy">© 2026 Ignition Brand Design Ltd. All rights reserved.</div>
      </div>
      <div className="f-soc">
        <a href="#">INSTAGRAM</a>
        <a href="#">XIAOHONGSHU</a>
        <a href="#">BEHANCE</a>
        <a href="#">WECHAT</a>
      </div>
      <div className="f-locations">HONG KONG</div>
    </div>
  </footer>
);

// ─────────────────────────────────────────────────────────────────────────────
// CLIENTS
// ─────────────────────────────────────────────────────────────────────────────
const CLIENTS = [
  { n:"西安秦始皇博物館",    en:"Xi'an Emperor Qin Museum",   cat:"FILE / CULTURE" },
  { n:"華強集團",            en:"Hua Qiang Group",            cat:"FILE / GROUP"   },
  { n:"卓越教育集團",        en:"Excellence Edu Group",       cat:"FILE / EDU"     },
  { n:"百佳超市",            en:"ParknShop",                  cat:"FILE / RETAIL"  },
  { n:"湘小伍",              en:"Xiang Xiao Wu",              cat:"FILE / F&B"     },
  { n:"西安曲江樂雅",        en:"Qujiang Le Ya",              cat:"FILE / LIFESTYLE" },
  { n:"星際小螞蟻",          en:"Star Ant",                   cat:"FILE / IP"      },
  { n:"南方電網 · 惠州",     en:"China Southern Power Grid",  cat:"FILE / INFRA"   },
  { n:"中國涉外教育集團",    en:"China Intl. Education",      cat:"FILE / EDU"     },
  { n:"安徽老鄉雞",          en:"Lao Xiang Ji",               cat:"FILE / F&B"     },
  { n:"TCL",                 en:"TCL",                        cat:"FILE / TECH"    },
  { n:"361°",                en:"361 Degrees",                cat:"FILE / SPORT"   },
  { n:"廣州愛英寶寶",        en:"Aiying Baby Edu",            cat:"FILE / EDU"     },
  { n:"佛山愛卡屋",          en:"Aikawu Kids Furniture",      cat:"FILE / HOME"    },
  { n:"蘇菲珠寶",            en:"Sophie Jewelry",             cat:"FILE / LUXURY"  },
  { n:"阿里巴巴",            en:"Alibaba",                    cat:"FILE / TECH"    },
  { n:"大象體育",             en:"Elephant Sports",            cat:"FILE / SPORT"   },
  { n:"精武門",              en:"Jing Wu Men",                cat:"FILE / SPORT"   },
  { n:"香港置地 · 約克郡",   en:"Hongkong Land · Yorkshire",  cat:"FILE / RETAIL"  },
  { n:"愛嬰島集團",          en:"Love Baby Island",           cat:"FILE / RETAIL"  },
  { n:"星火教育集團",        en:"Spark Education",            cat:"FILE / EDU"     },
  { n:"盼盼晾衣架",          en:"Panpan",                     cat:"FILE / HOME"    },
  { n:"健力寶",              en:"Jianlibao",                  cat:"FILE / F&B"     },
  { n:"越勇體育",            en:"Yueyong Sports",             cat:"FILE / SPORT"   },
  { n:"美宴餐飲",            en:"Meiyan F&B Group",           cat:"FILE / F&B"     },
  { n:"杭州漁婆婆",          en:"Yu Po Po Seafood",           cat:"FILE / F&B"     },
  { n:"BAGBOX 柏西",         en:"Bagbox",                     cat:"FILE / LUXURY"  },
  { n:"金多多兒童食品",      en:"Jin Duo Duo",                cat:"FILE / F&B"     },
  { n:"溫州新時代文具",      en:"New Era Stationery",         cat:"FILE / OFFICE"  },
  { n:"PENGO 童裝",          en:"Pengo Kids",                 cat:"FILE / FASHION" },
  { n:"廣州榮幸醫藥",        en:"Rongxing Pharma",            cat:"FILE / HEALTH"  },
  { n:"真彩文具 · 樂美",     en:"Truecolor Stationery",       cat:"FILE / OFFICE"  },
  { n:"POPO 麵包",           en:"POPO Bakery",                cat:"FILE / F&B"     },
];

const Clients = ({ lang = "zh-hant" }) => (
  <section id="clients" data-screen-label="05 Clients">
    <div className="shell">
      <div className="sec-eyebrow">
        <span className="num">04 / 07</span><span>{getBText(lang, "服務客戶  ·  TRUSTED BY", "服务客户  ·  TRUSTED BY", "TRUSTED BY")}</span><span className="line"/>
      </div>
      <h2 className="sec-title">{getBText(lang, "三十餘家品牌，", "三十余家品牌，", "30+ brands,")}<br/>{getBText(lang, "共同的", "共同的", "one shared ")}<span className="accent">{getBText(lang, "起爆點", "起爆点", "ignition point")}</span>{lang === "en" ? "." : "。"}</h2>
      <p className="sec-sub">{getBText(lang, "從博物館、央企、上市集團，到新銳消費品牌與兒童 IP — 我們的客戶橫跨體育、教育、零售、餐飲、文化與科技。", "从博物馆、央企、上市集团，到新锐消费品牌与儿童 IP，我们的客户横跨体育、教育、零售、餐饮、文化与科技。", "From museums and listed groups to consumer brands and children’s IP, our clients span sport, education, retail, F&B, culture and technology.")}</p>

      <div className="client-wall">
        {CLIENTS.map((c,i) => (
          <div className="client-cell" key={i}>
            <div className="cc-num">{String(i+1).padStart(2,"0")}</div>
            <div className="cc-cat">{c.cat}</div>
            <div className="cc-n">{c.n}</div>
            <div className="cc-en">{c.en}</div>
          </div>
        ))}
        <div className="client-cell client-more">
          <Sparkle size={28} color="var(--accent)" />
          <div className="cc-n" style={{marginTop:12}}>+ 100<span style={{color:"var(--accent)"}}>多</span></div>
          <div className="cc-en">UNDER NDA</div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Pricing, Contact, Footer, Clients });
