// app.jsx — Ignition Brand Design — main app

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "#F5F1E8",
  "heroVariant": "sunburst",
  "displayFont": "manrope"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ["#111111", "#F5F1E8", "#C9A961", "#D4D4D4", "#9CB4CC"];
const ACCENT_LABELS  = { "#111111":"屏幕黑", "#F5F1E8":"冷米白", "#C9A961":"浅金", "#D4D4D4":"铂金", "#9CB4CC":"雾蓝" };
const FONT_OPTIONS = [
  { id:"manrope", label:"Manrope · 重粗几何", stack:"'Manrope', 'Noto Sans TC', 'PingFang TC', sans-serif" },
  { id:"sora",    label:"Sora · 现代克制",    stack:"'Sora', 'Noto Sans TC', sans-serif" },
  { id:"space",   label:"Space Grotesk · 科技", stack:"'Space Grotesk', 'Noto Sans TC', sans-serif" },
];

const LANG_OPTIONS = ["zh-hant", "zh-hans", "en"];
const LANG_META = {
  "zh-hant": {
    htmlLang: "zh-Hant-HK",
    locale: "zh_HK",
    title: "燃點品牌設計 IBD｜燃点・Ignition Brand Design｜IP設計・潮玩設計・品牌全案",
    description: "燃點品牌設計 IBD（燃点 / Ignition Brand Design）是香港 IP 品牌策劃設計工作室，提供 IPdesign、IP品牌設計、IP形象設計、文創IP設計、文旅IP、兒童服裝IP、文具IP設計、玩具IP設計、潮玩設計與品牌全案。",
    keywords: "燃点,燃點,燃点品牌设计,燃點品牌設計,燃点品牌策划设计,燃點品牌策劃設計,ignition,Ignition,ignition brand design,Ignition Brand Design,IBD,IPdesign,IP Design,IP品牌設計,IP品牌设计,ip形象設計,ip形象设计,文創IP設計,文创IP设计,文旅IP,兒童服裝IP,儿童服装IP,文具IP設計,文具IP设计,玩具IP設計,玩具IP设计,潮玩設計,潮玩设计,品牌設計,品牌设计,品牌全案,品牌策劃,香港品牌設計公司",
  },
  "zh-hans": {
    htmlLang: "zh-Hans-CN",
    locale: "zh_CN",
    title: "燃点品牌设计 IBD｜燃点・Ignition Brand Design｜IP设计・潮玩设计・品牌全案",
    description: "燃点品牌设计 IBD 是香港 IP 品牌策划设计工作室，提供 IPdesign、IP品牌设计、IP形象设计、文创IP设计、文旅IP、儿童服装IP、文具IP设计、玩具IP设计、潮玩设计与品牌全案。",
    keywords: "燃点,燃点品牌设计,燃点品牌策划设计,ignition,Ignition,ignition brand design,Ignition Brand Design,IBD,IPdesign,IP Design,IP品牌设计,ip形象设计,文创IP设计,文旅IP,儿童服装IP,文具IP设计,玩具IP设计,潮玩设计,品牌设计,品牌全案,品牌策划,香港品牌设计公司",
  },
  en: {
    htmlLang: "en",
    locale: "en_US",
    title: "Ignition Brand Design IBD｜IP Design, Character IP & Brand Strategy Hong Kong",
    description: "Ignition Brand Design IBD is a Hong Kong IP brand strategy and design studio for IP design, character IP, trend-toy design, cultural IP, packaging, visual identity and full brand systems.",
    keywords: "Ignition Brand Design,IBD,IP design,IP brand design,character IP design,brand strategy Hong Kong,trend toy design,cultural IP design,packaging design,visual identity,brand design studio Hong Kong",
  },
};

const getInitialLang = () => {
  const queryLang = new URLSearchParams(window.location.search).get("lang");
  if (LANG_OPTIONS.includes(queryLang)) return queryLang;
  const savedLang = window.localStorage && window.localStorage.getItem("ibd-lang");
  return LANG_OPTIONS.includes(savedLang) ? savedLang : "zh-hant";
};

const setMetaTag = (selector, attr, value) => {
  const node = document.head.querySelector(selector);
  if (node && value) node.setAttribute(attr, value);
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = React.useState(getInitialLang);
  const [active, setActive] = React.useState("home");
  const [infoPage, setInfoPage] = React.useState(null);
  const [selectedTier, setSelectedTier] = React.useState(null);
  const [cases, setCases] = React.useState([]);
  const [siteVideos, setSiteVideos] = React.useState([]);
  const [heroIps, setHeroIps] = React.useState([]);
  const [openCase, setOpenCase] = React.useState(null);
  const [videoFeed, setVideoFeed] = React.useState(null);

  const openCaseDetail = (item, updateHash = true) => {
    setOpenCase(item);
    if (updateHash && item?._id) {
      const params = new URLSearchParams(window.location.search);
      params.set("case", item._id);
      const qs = params.toString();
      window.history.replaceState(null, "", `${window.location.pathname}?${qs}#cases`);
    }
  };

  const openCaseByOffset = (offset) => {
    if (!openCase || !cases.length) return;
    const index = cases.findIndex(item => item._id === openCase._id);
    if (index < 0) return;
    const nextIndex = (index + offset + cases.length) % cases.length;
    openCaseDetail(cases[nextIndex]);
  };

  const closeCaseDetail = () => {
    setOpenCase(null);
    if (window.location.search.includes("case=") || window.location.hash.startsWith("#case-")) {
      const params = new URLSearchParams(window.location.search);
      params.delete("case");
      const qs = params.toString();
      window.history.replaceState(null, "", `${window.location.pathname}${qs ? `?${qs}` : ""}#cases`);
    }
  };

  const changeLang = (nextLang) => {
    if (!LANG_OPTIONS.includes(nextLang)) return;
    setLang(nextLang);
    window.localStorage && window.localStorage.setItem("ibd-lang", nextLang);
    const params = new URLSearchParams(window.location.search);
    if (nextLang === "zh-hant") params.delete("lang");
    else params.set("lang", nextLang);
    const qs = params.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash || ""}`);
  };

  React.useEffect(() => {
    const meta = LANG_META[lang] || LANG_META["zh-hant"];
    const url = `${window.location.origin}${window.location.pathname}${lang === "zh-hant" ? "" : `?lang=${lang}`}`;
    document.documentElement.lang = meta.htmlLang;
    document.body.dataset.lang = lang;
    document.title = meta.title;
    setMetaTag('meta[name="description"]', "content", meta.description);
    setMetaTag('meta[name="keywords"]', "content", meta.keywords);
    setMetaTag('meta[property="og:title"]', "content", meta.title);
    setMetaTag('meta[property="og:description"]', "content", meta.description);
    setMetaTag('meta[property="og:locale"]', "content", meta.locale);
    setMetaTag('meta[property="og:url"]', "content", url);
    setMetaTag('meta[name="twitter:title"]', "content", meta.title);
    setMetaTag('meta[name="twitter:description"]', "content", meta.description);
    setMetaTag('link[rel="canonical"]', "href", url);
  }, [lang]);

  React.useEffect(() => {
    document.body.style.overflow = openCase ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openCase]);

  React.useEffect(() => {
    document.body.style.overflow = videoFeed ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [videoFeed]);

  React.useEffect(() => {
    if (!openCase) return;
    const onKey = (e) => { if (e.key === "Escape") setOpenCase(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openCase]);

  const normalizeVideoGroup = (video = {}) => {
    if (!video) return null;
    const groupMeta = {
      groupUrl: video.groupUrl || video.url,
      groupPoster: video.groupPoster || video.poster,
      groupTitle: video.groupTitle || video.title,
      groupCaption: video.groupCaption || video.caption,
    };
    return { ...video, ...groupMeta, seriesTitle: video.seriesTitle || video.title, seriesIndex: 0 };
  };

  const allPlayableVideos = React.useMemo(() => {
    const fromCases = (cases || []).flatMap(item => (
      (item.videos || [])
        .filter(video => video && video.url)
        .map(video => normalizeVideoGroup({
          ...video,
          caseTitle: item.title,
          caseDescription: item.description,
          category: item.category,
          displayOrder: Number.isFinite(Number(video.displayOrder)) ? Number(video.displayOrder) : 999,
        }))
    ));
    const fromSite = (siteVideos || [])
      .filter(video => video && video.url)
      .map(video => normalizeVideoGroup({
        ...video,
        caseTitle: video.caseTitle,
        caseDescription: video.caseDescription,
        displayOrder: Number.isFinite(Number(video.displayOrder)) ? Number(video.displayOrder) : 999,
      }));
    const seen = new Map();
    [...fromSite, ...fromCases]
      .sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999))
      .forEach(video => {
        const key = video.groupUrl || video.url;
        if (!seen.has(key)) seen.set(key, video);
      });
    return Array.from(seen.values());
  }, [cases, siteVideos]);

  const openVideoById = (videoId, videoUrl, videoPoster, videoTitle) => {
    if (!videoUrl) return;
    // try to find in allPlayableVideos first, fall back to inline object
    const found = allPlayableVideos.find(v => v._id === videoId);
    openVideoFeed(found || { _id: videoId, url: videoUrl, poster: videoPoster, title: videoTitle, seriesTitle: videoTitle, seriesIndex: 0 });
  };

    if (!video?.url) return;
    const index = Math.max(0, allPlayableVideos.findIndex(item => (
      item.url === video.url
      || (Array.isArray(item.seriesVideos) && item.seriesVideos.some(seriesItem => seriesItem && seriesItem.url === video.url))
    )));
    const parent = allPlayableVideos[index];
    const seriesIndex = parent?.url === video.url
      ? 0
      : Math.max(0, (parent?.seriesVideos || []).findIndex(seriesItem => seriesItem && seriesItem.url === video.url) + 1);
    setVideoFeed({ index, seriesIndex });
  };

  const openRelatedCase = (video) => {
    const id = video?.caseId;
    if (!id) return;
    const matched = cases.find(item => item._id === id);
    if (matched) {
      setVideoFeed(null);
      openCaseDetail(matched);
    }
  };

  React.useEffect(() => {
    if (!cases.length) return;
    const openFromHash = () => {
      const queryId = new URLSearchParams(window.location.search).get("case");
      const hashId = window.location.hash.startsWith("#case-")
        ? window.location.hash.replace("#case-", "")
        : "";
      const rawId = queryId || hashId;
      if (!rawId) return;
      const id = decodeURIComponent(rawId);
      const matched = cases.find(item => item._id === id);
      if (matched) {
        setOpenCase(matched);
        window.setTimeout(() => {
          const el = document.getElementById("cases");
          if (el) el.scrollIntoView({ block: "start" });
        }, 80);
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [cases]);

  React.useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (id === "services" || id === "method") {
      setInfoPage(id);
      setActive(id);
      window.requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ block: "start" });
      });
    }
  }, []);

  // 从 Sanity 后台拉取作品案例数据
  // Project ID: 6fxw2dmo · Dataset: production
  React.useEffect(() => {
    const projectId = "6fxw2dmo";
    const dataset = "production";
    const query = `{
      "heroIps": *[_type == "heroIp" && !(_id in path("drafts.**")) && active != false] | order(displayOrder asc, _createdAt asc){
        _id,
        label,
        displayOrder,
        "src": image.asset->url,
        "caseId": relatedCase->_id,
        "videoId": relatedVideo->_id,
        "videoUrl": relatedVideo->file.asset->url,
        "videoPoster": relatedVideo->poster.asset->url,
        "videoTitle": relatedVideo->title
      },
      "cases": *[_type == "case" && !(_id in path("drafts.**"))] | order(featured desc, year desc, _createdAt desc){
        _id, _createdAt, title, description, category, year,
        "image": image.asset->url,
        showInHeroOrbit,
        heroOrbitLabel,
        heroOrbitOrder,
        "heroCharacter": heroCharacter.asset->url,
        size, featured,
        client, services, tags, body, link,
        "gallery": gallery[]{
          "url": asset->url,
          caption
        },
        "videos": videos[]{
          title,
          caption,
          placement,
          displayOrder,
          "url": file.asset->url,
          "poster": poster.asset->url,
          "filename": file.asset->originalFilename
        },
        "pdfs": pdfs[]{
          title,
          description,
          "url": file.asset->url,
          "filename": file.asset->originalFilename
        }
      },
      "siteVideos": *[_type == "siteVideo" && !(_id in path("drafts.**"))] | order(displayOrder asc, _createdAt desc){
        _id,
        _createdAt,
        title,
        caption,
        showOnHome,
        displayOrder,
        "caseId": relatedCase->_id,
        "caseTitle": relatedCase->title,
        "caseDescription": relatedCase->description,
        "category": relatedCase->category,
        "url": file.asset->url,
        "poster": poster.asset->url,
        "filename": file.asset->originalFilename,
        "seriesVideos": seriesVideos[]{
          title,
          caption,
          "url": file.asset->url,
          "poster": poster.asset->url,
          "filename": file.asset->originalFilename
        }
      }
    }`;
    const encodedQuery = encodeURIComponent(query);
    const urls = [
      `https://${projectId}.apicdn.sanity.io/v2024-01-01/data/query/${dataset}?query=${encodedQuery}&_ts=${Date.now()}`,
      `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${encodedQuery}`,
    ];
    const loadCases = async () => {
      let lastError = null;
      for (const url of urls) {
        try {
          const response = await fetch(url, { cache: "no-store" });
          if (!response.ok) throw new Error(`Sanity responded ${response.status}`);
          const data = await response.json();
          if (data && data.result) return data;
        } catch (error) {
          lastError = error;
        }
      }
      throw lastError || new Error("No Sanity case data");
    };
    loadCases()
      .then(data => {
        const result = data?.result || {};
        const caseList = Array.isArray(result.cases) ? result.cases : [];
        const heroIpList = Array.isArray(result.heroIps) ? result.heroIps.filter(item => item && item.src) : [];
        setHeroIps(heroIpList);
        const rawVideos = Array.isArray(result.siteVideos) ? result.siteVideos : [];
        const videoList = rawVideos
          .filter(video => video && video.url)
          .map(video => ({ ...video, seriesTitle: video.title, seriesIndex: 0 }));
        setSiteVideos(videoList);
        if (caseList.length > 0) {
          const casesWithVideos = caseList.map(item => ({
            ...item,
            videos: [
              ...(item.videos || []),
              ...videoList
                .filter(video => video.caseId === item._id)
                .map(video => ({ ...video, placement: "caseOnly" })),
            ],
          }));
          setCases(casesWithVideos);
        }
      })
      .catch(err => console.warn("Sanity 后台未连接或无内容，显示占位案例：", err));
  }, []);

  // theme + accent + font as live CSS vars
  React.useEffect(() => {
    document.body.classList.toggle("light", t.theme === "light");
    document.documentElement.style.setProperty("--accent", t.accent);
    const font = FONT_OPTIONS.find(f => f.id === t.displayFont) || FONT_OPTIONS[0];
    document.documentElement.style.setProperty("--font-display", font.stack);
  }, [t.theme, t.accent, t.displayFont]);

  // smooth scroll on nav click
  const onNav = (id) => {
    if (id !== "cases" && openCase) setOpenCase(null);
    setInfoPage(id === "services" || id === "method" ? id : null);
    setActive(id);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search || ""}#${id}`);
    window.requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior:"smooth", block:"start" });
    });
  };

  // scroll-spy
  React.useEffect(() => {
    const ids = ["home","about","services","method","clients","cases","pricing","contact"];
    const handler = () => {
      const y = window.scrollY + 120;
      let cur = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    handler();
    window.addEventListener("scroll", handler, { passive:true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // fade-up on intersect
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in") });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <ShapeDefs />
      <Nav active={active} onNav={onNav} theme={t.theme} onThemeToggle={() => setTweak("theme", t.theme === "light" ? "dark" : "light")} lang={lang} onLangChange={changeLang} />
      <main>
        <Hero variant={t.heroVariant} lang={lang} cases={cases} heroIps={heroIps} onOpenCase={openCaseDetail} onOpenVideo={openVideoById} />
        <Marquee lang={lang} />
        <VideoSpotlight cases={cases} siteVideos={siteVideos} onOpenVideo={openVideoFeed} onOpenCase={openRelatedCase} lang={lang} />
        <About lang={lang} />
        <Testimonials cases={cases} siteVideos={siteVideos} onOpenVideo={openVideoFeed} onOpenCase={openRelatedCase} lang={lang} />
        {infoPage === "services" && <Services lang={lang} />}
        {infoPage === "method" && <Methodology lang={lang} />}
        <Cases cases={cases} onOpen={openCaseDetail} lang={lang} />
        <Clients lang={lang} />
        {openCase && (
          <CaseModal
            data={openCase}
            onClose={closeCaseDetail}
            onOpenVideo={openVideoFeed}
            onPrev={() => openCaseByOffset(-1)}
            onNext={() => openCaseByOffset(1)}
            canNavigate={cases.length > 1}
            lang={lang}
          />
        )}
        {videoFeed && <VideoReelOverlay videos={allPlayableVideos} initialIndex={videoFeed.index} initialSeriesIndex={videoFeed.seriesIndex || 0} onClose={() => setVideoFeed(null)} onOpenCase={openRelatedCase} onNav={onNav} lang={lang} />}
        <Pricing onPick={setSelectedTier} lang={lang} />
        <Contact selectedTier={selectedTier} onTierChange={setSelectedTier} lang={lang} />
      </main>
      <Footer lang={lang} />
      <ShareDock onNav={onNav} lang={lang} />

      <TweaksPanel title="Tweaks · 燃點">
        <TweakSection label="主题模式" />
        <TweakRadio label="背景" value={t.theme} options={["dark","light"]}
          onChange={(v)=>setTweak("theme", v)} />

        <TweakSection label="点缀色" />
        <TweakColor label="Accent" value={t.accent} options={ACCENT_OPTIONS}
          onChange={(v)=>setTweak("accent", v)} />
        <div style={{ fontSize:10.5, color:"rgba(41,38,27,.55)", marginTop:-4 }}>
          当前 · {ACCENT_LABELS[t.accent] || t.accent}
        </div>

        <TweakSection label="Hero 版式" />
        <TweakSelect label="Hero variant" value={t.heroVariant}
          options={[{value:"sunburst",label:"黑底放射 IP 圆环 (默认)"},{value:"orbit",label:"IP椭圆矩阵"},{value:"minimal",label:"极简留白"},{value:"grid",label:"网格"}]}
          onChange={(v)=>setTweak("heroVariant", v)} />

        <TweakSection label="标题字体气质" />
        <TweakSelect label="Display font" value={t.displayFont}
          options={FONT_OPTIONS.map(f => ({ value:f.id, label:f.label }))}
          onChange={(v)=>setTweak("displayFont", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
