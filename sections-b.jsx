// sections-b.jsx — Pricing, Contact, Footer

// ─────────────────────────────────────────────────────────────────────────────
// PRICING
// ─────────────────────────────────────────────────────────────────────────────
const TIERS = [
  {
    n: "TIER / 01",
    h: "輕量啟動",
    en: "IP Visual Incubation",
    price: "38–68K",
    when: "3–4 週",
    blurb: "預算有限、初創期，或需要高質感 IP 試水市場。",
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
    h: "全案資產",
    en: "Brand × IP Super Symbol",
    price: "120–250K+",
    when: "6–8 週",
    blurb: "傳統大廠年輕化升級、內地品牌出海或高端轉型。",
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
    h: "戰略陪跑",
    en: "Commercial Design & Retainer",
    price: "350K+",
    when: "3 個月開發 + 年度顧問",
    blurb: "進軍潮玩、跨界聯名、長期品牌運營頭部客戶。",
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

const ADDONS = [
  { h: "企業專屬定制字體", en: "Custom Typeface · CN/EN", p: "HK$ 80K 起" },
  { h: "授權展 / 展位概念設計", en: "Exhibition Space Concept", p: "HK$ 50K 起" },
  { h: "高階 3D 渲染 / 微動畫", en: "3D Render & Motion Sec.", p: "HK$ 15K / 秒" },
];

const Pricing = ({ onPick }) => (
  <section id="pricing" data-screen-label="06 Pricing">
    <div className="shell">
      <div className="sec-eyebrow">
        <span className="num">06 / 07</span><span>服務階梯  ·  PRICING TIERS</span><span className="line"/>
      </div>
      <h2 className="sec-title">不按工時計費。<br/>按<span className="accent">資產價值</span>定價。</h2>
      <p className="sec-sub">三個階梯，對應品牌不同生命週期。報價以港幣計，依實際體量浮動。</p>

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
                選擇此階梯 <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="addons">
        {ADDONS.map((a,i) => (
          <div key={i} className="addon">
            <div>
              <h5>{a.h}</h5>
              <div className="a-en">{a.en}</div>
            </div>
            <div className="a-p">{a.p}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────────
const Contact = ({ selectedTier, onTierChange }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const tiers = ["輕量啟動", "全案資產", "戰略陪跑", "待議"];
  return (
    <section id="contact" data-screen-label="07 Contact">
      <div className="shell">
        <div className="sec-eyebrow">
          <span className="num">07 / 07</span><span>聯繫我們  ·  GET IN TOUCH</span><span className="line"/>
        </div>
        <div className="contact-grid">
          <div>
            <h2 className="contact-big">點燃對話，<br/>從一杯咖啡<br/>開始。<Sparkle size={42} color="var(--accent)" style={{verticalAlign:"middle", marginLeft:8}}/></h2>
            <p style={{ color:"var(--mute)", fontSize:15, lineHeight:1.65, maxWidth:"42ch", marginTop:24 }}>
              告訴我們你的品牌、痛點、預期。我們會在 48 小時內回覆一份初步診斷，並判斷是否進入正式立項。
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
                <div className="v">baoguangwen7708@gmail.com</div>
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
              <form className="form" onSubmit={(e)=>{e.preventDefault(); setSubmitted(true)}}>
                <div className="field">
                  <label>1 · 你的稱呼 / NAME</label>
                  <input placeholder="Lin Hai-Ming · 林先生" required />
                </div>
                <div className="field">
                  <label>2 · 品牌 / BRAND</label>
                  <input placeholder="品牌名稱 · 行業" required />
                </div>
                <div className="field">
                  <label>3 · 聯絡方式 / CONTACT</label>
                  <input placeholder="email · wechat · phone" required />
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
                  <textarea placeholder="背景 · 目標 · 期望時間 · 預算範圍" rows={3} required />
                </div>
                <button type="submit" className="submit">
                  發送初步診斷請求 <span className="arr">→</span>
                </button>
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
const Footer = () => (
  <footer>
    <div className="shell footer-inner">
      <div className="footer-main">
        <div className="f-brand">IBD<span className="star"> ✦ </span>燃點品牌設計</div>
        <div className="f-copy">© 2026 Ignition Brand Design Ltd. All rights reserved.</div>
      </div>
      <div className="f-soc">
        <a href="#">INSTAGRAM</a>
        <a href="#">XIAOHONGSHU</a>
        <a href="#">BEHANCE</a>
        <a href="#">WECHAT</a>
      </div>
      <div className="f-locations">HONG KONG · SHENZHEN · TOKYO</div>
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

const Clients = () => (
  <section id="clients" data-screen-label="05 Clients">
    <div className="shell">
      <div className="sec-eyebrow">
        <span className="num">04 / 07</span><span>服務客戶  ·  TRUSTED BY</span><span className="line"/>
      </div>
      <h2 className="sec-title">三十餘家品牌，<br/>共同的<span className="accent">起爆點</span>。</h2>
      <p className="sec-sub">從博物館、央企、上市集團，到新銳消費品牌與兒童 IP — 我們的客戶橫跨體育、教育、零售、餐飲、文化與科技。</p>

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
