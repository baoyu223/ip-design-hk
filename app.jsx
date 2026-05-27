// app.jsx — Ignition Brand Design — main app

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "#F5F1E8",
  "heroVariant": "sunburst",
  "displayFont": "manrope"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ["#F5F1E8", "#C9A961", "#D4D4D4", "#9CB4CC"];
const ACCENT_LABELS  = { "#F5F1E8":"冷米白", "#C9A961":"浅金", "#D4D4D4":"铂金", "#9CB4CC":"雾蓝" };
const FONT_OPTIONS = [
  { id:"manrope", label:"Manrope · 重粗几何", stack:"'Manrope', 'Noto Sans TC', 'PingFang TC', sans-serif" },
  { id:"sora",    label:"Sora · 现代克制",    stack:"'Sora', 'Noto Sans TC', sans-serif" },
  { id:"space",   label:"Space Grotesk · 科技", stack:"'Space Grotesk', 'Noto Sans TC', sans-serif" },
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState("home");
  const [infoPage, setInfoPage] = React.useState(null);
  const [selectedTier, setSelectedTier] = React.useState(null);
  const [cases, setCases] = React.useState([]);
  const [siteVideos, setSiteVideos] = React.useState([]);
  const [openCase, setOpenCase] = React.useState(null);
  const [videoFeed, setVideoFeed] = React.useState(null);

  const openCaseDetail = (item, updateHash = true) => {
    setOpenCase(item);
    if (updateHash && item?._id) {
      window.history.replaceState(null, "", `#case-${encodeURIComponent(item._id)}`);
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
    if (window.location.hash.startsWith("#case-")) {
      window.history.replaceState(null, "", "#cases");
    }
  };

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

  const allPlayableVideos = React.useMemo(() => {
    const fromCases = (cases || []).flatMap(item => (
      (item.videos || [])
        .filter(video => video && video.url)
        .map(video => ({
          ...video,
          caseTitle: item.title,
          caseDescription: item.description,
          category: item.category,
          displayOrder: Number.isFinite(Number(video.displayOrder)) ? Number(video.displayOrder) : 999,
        }))
    ));
    const fromSite = (siteVideos || [])
      .filter(video => video && video.url)
      .map(video => ({
        ...video,
        caseTitle: video.caseTitle,
        caseDescription: video.caseDescription,
        displayOrder: Number.isFinite(Number(video.displayOrder)) ? Number(video.displayOrder) : 999,
      }));
    const seen = new Map();
    [...fromSite, ...fromCases]
      .sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999))
      .forEach(video => {
        if (!seen.has(video.url)) seen.set(video.url, video);
      });
    return Array.from(seen.values());
  }, [cases, siteVideos]);

  const openVideoFeed = (video) => {
    if (!video?.url) return;
    const index = Math.max(0, allPlayableVideos.findIndex(item => item.url === video.url));
    setVideoFeed({ index });
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

  // 默认进入作品案例区；如果网址带有其他 #锚点，则尊重用户指定位置。
  React.useEffect(() => {
    if (window.location.hash) return;
    const timer = window.setTimeout(() => {
      const el = document.getElementById("cases");
      if (el) {
        el.scrollIntoView({ block: "start" });
        window.history.replaceState(null, "", "#cases");
      }
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (!cases.length) return;
    const openFromHash = () => {
      if (!window.location.hash.startsWith("#case-")) return;
      const id = decodeURIComponent(window.location.hash.replace("#case-", ""));
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
      "cases": *[_type == "case" && !(_id in path("drafts.**"))] | order(featured desc, year desc, _createdAt desc){
        _id, title, description, category, year,
        "image": image.asset->url,
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
        title,
        caption,
        showOnHome,
        showInTestimonials,
        displayOrder,
        "caseId": relatedCase->_id,
        "caseTitle": relatedCase->title,
        "caseDescription": relatedCase->description,
        "category": relatedCase->category,
        "url": file.asset->url,
        "filename": file.asset->originalFilename
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
        const videoList = Array.isArray(result.siteVideos) ? result.siteVideos.filter(video => video && video.url) : [];
        setSiteVideos(videoList);
        if (caseList.length > 0) {
          const casesWithVideos = caseList.map(item => ({
            ...item,
            videos: [
              ...(item.videos || []),
              ...videoList
                .filter(video => video.caseId === item._id)
                .map(video => ({ ...video, placement: video.showInTestimonials ? "testimonial" : "caseOnly" })),
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
    window.history.replaceState(null, "", `#${id}`);
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
      <Nav active={active} onNav={onNav} theme={t.theme} onThemeToggle={() => setTweak("theme", t.theme === "light" ? "dark" : "light")} />
      <main>
        <Hero variant={t.heroVariant} />
        <Marquee />
        <VideoSpotlight cases={cases} siteVideos={siteVideos} onOpenVideo={openVideoFeed} onOpenCase={openRelatedCase} />
        <About />
        <Testimonials cases={cases} siteVideos={siteVideos} onOpenVideo={openVideoFeed} onOpenCase={openRelatedCase} />
        {infoPage === "services" && <Services />}
        {infoPage === "method" && <Methodology />}
        <Cases cases={cases} onOpen={openCaseDetail} />
        <Clients />
        {openCase && (
          <CaseModal
            data={openCase}
            onClose={closeCaseDetail}
            onOpenVideo={openVideoFeed}
            onPrev={() => openCaseByOffset(-1)}
            onNext={() => openCaseByOffset(1)}
            canNavigate={cases.length > 1}
          />
        )}
        {videoFeed && <VideoReelOverlay videos={allPlayableVideos} initialIndex={videoFeed.index} onClose={() => setVideoFeed(null)} onOpenCase={openRelatedCase} />}
        <Pricing onPick={setSelectedTier} />
        <Contact selectedTier={selectedTier} onTierChange={setSelectedTier} />
      </main>
      <Footer />

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
          options={[{value:"sunburst",label:"放射光环 (默认)"},{value:"minimal",label:"极简留白"},{value:"grid",label:"网格"}]}
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
