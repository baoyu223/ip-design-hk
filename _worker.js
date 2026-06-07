const PROJECT_ID = "6fxw2dmo";
const DATASET = "production";
const DEFAULT_IMAGE = "https://ip-design.hk/assets/share-cover.jpg";
const META_BY_LANG = {
  "zh-hant": {
    title: "燃點品牌設計 IBD｜燃点・Ignition Brand Design",
    description: "香港 IP 品牌策劃設計工作室，專注 IP品牌設計、IP形象設計、文創IP、文旅IP、潮玩設計與品牌全案。",
    locale: "zh_HK",
  },
  "zh-hans": {
    title: "燃点品牌设计 IBD｜燃点・Ignition Brand Design",
    description: "香港 IP 品牌策划设计工作室，专注 IP品牌设计、IP形象设计、文创IP、文旅IP、潮玩设计与品牌全案。",
    locale: "zh_CN",
  },
  en: {
    title: "Ignition Brand Design IBD｜IP Design & Brand Strategy Hong Kong",
    description: "Hong Kong IP brand strategy and design studio for IP design, character IP, trend-toy design, cultural IP, packaging, visual identity and brand systems.",
    locale: "en_US",
  },
};
const getLangMeta = (lang) => META_BY_LANG[lang] || META_BY_LANG["zh-hant"];

const escapeHtml = (value = "") => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

const replaceTag = (html, pattern, replacement) => (
  pattern.test(html) ? html.replace(pattern, replacement) : html.replace("</head>", `${replacement}\n</head>`)
);

const patchMeta = (html, meta) => {
  const base = getLangMeta(meta.lang);
  const title = escapeHtml(meta.title || base.title);
  const description = escapeHtml(meta.description || base.description);
  const url = escapeHtml(meta.url || "https://ip-design.hk/");
  const image = escapeHtml(meta.image || DEFAULT_IMAGE);
  const imageAlt = escapeHtml(meta.imageAlt || title);
  let next = html;
  next = next.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  next = replaceTag(next, /<meta name="description" content="[^"]*" \/>/i, `<meta name="description" content="${description}" />`);
  next = replaceTag(next, /<link rel="canonical" href="[^"]*" \/>/i, `<link rel="canonical" href="${url}" />`);
  next = replaceTag(next, /<meta property="og:title" content="[^"]*" \/>/i, `<meta property="og:title" content="${title}" />`);
  next = replaceTag(next, /<meta property="og:description" content="[^"]*" \/>/i, `<meta property="og:description" content="${description}" />`);
  next = replaceTag(next, /<meta property="og:url" content="[^"]*" \/>/i, `<meta property="og:url" content="${url}" />`);
  next = replaceTag(next, /<meta property="og:type" content="[^"]*" \/>/i, `<meta property="og:type" content="${meta.type || "website"}" />`);
  next = replaceTag(next, /<meta property="og:locale" content="[^"]*" \/>/i, `<meta property="og:locale" content="${meta.locale || base.locale}" />`);
  next = replaceTag(next, /<meta property="og:image" content="[^"]*" \/>/i, `<meta property="og:image" content="${image}" />`);
  next = replaceTag(next, /<meta property="og:image:secure_url" content="[^"]*" \/>/i, `<meta property="og:image:secure_url" content="${image}" />`);
  next = replaceTag(next, /<meta property="og:image:type" content="[^"]*" \/>/i, `<meta property="og:image:type" content="image/jpeg" />`);
  next = replaceTag(next, /<meta property="og:image:alt" content="[^"]*" \/>/i, `<meta property="og:image:alt" content="${imageAlt}" />`);
  next = replaceTag(next, /<meta property="og:image:width" content="[^"]*" \/>/i, `<meta property="og:image:width" content="1200" />`);
  next = replaceTag(next, /<meta property="og:image:height" content="[^"]*" \/>/i, `<meta property="og:image:height" content="630" />`);
  next = replaceTag(next, /<meta name="twitter:title" content="[^"]*" \/>/i, `<meta name="twitter:title" content="${title}" />`);
  next = replaceTag(next, /<meta name="twitter:description" content="[^"]*" \/>/i, `<meta name="twitter:description" content="${description}" />`);
  next = replaceTag(next, /<meta name="twitter:image" content="[^"]*" \/>/i, `<meta name="twitter:image" content="${image}" />`);
  return next;
};

const fetchCase = async (caseId) => {
  const query = `*[_type == "case" && _id == $id][0]{
    _id,
    title,
    description,
    category,
    year,
    "cover": coalesce(image.asset->url, gallery[0].asset->url)
  }`;
  const url = `https://${PROJECT_ID}.apicdn.sanity.io/v2024-01-01/data/query/${DATASET}?query=${encodeURIComponent(query)}&$id=${encodeURIComponent(JSON.stringify(caseId))}`;
  const response = await fetch(url, { cf: { cacheTtl: 300, cacheEverything: true } });
  if (!response.ok) return null;
  const data = await response.json();
  return data && data.result ? data.result : null;
};

// ── Analytics helpers ──────────────────────────────────────────────────────
const today = () => new Date().toISOString().slice(0, 10);
const safeJson = (v, fallback) => { try { return JSON.parse(v); } catch { return fallback; } };

const trackEvent = async (kv, body) => {
  const { event, id = "", title = "", country = "??" } = body;
  const d = today();
  // Daily summary
  const dayKey = `day:${d}`;
  const day = safeJson(await kv.get(dayKey), { visits: 0, caseViews: 0, videoPlays: 0 });
  if (event === "page_view") day.visits = (day.visits || 0) + 1;
  if (event === "case_view") day.caseViews = (day.caseViews || 0) + 1;
  if (event === "video_play") day.videoPlays = (day.videoPlays || 0) + 1;
  await kv.put(dayKey, JSON.stringify(day), { expirationTtl: 60 * 60 * 24 * 60 }); // 60 days
  // Per-item totals
  if (id && (event === "case_view" || event === "video_play")) {
    const itemKey = `${event === "case_view" ? "case" : "video"}:${id}`;
    const item = safeJson(await kv.get(itemKey), { title: "", views: 0, plays: 0, lastSeen: d });
    item.title = title || item.title;
    item.lastSeen = d;
    if (event === "case_view") item.views = (item.views || 0) + 1;
    if (event === "video_play") item.plays = (item.plays || 0) + 1;
    await kv.put(itemKey, JSON.stringify(item));
  }
  // Recent events (last 80)
  const recent = safeJson(await kv.get("recent"), []);
  recent.unshift({ event, id, title, country, ts: Date.now() });
  await kv.put("recent", JSON.stringify(recent.slice(0, 80)));
};

const getAnalytics = async (kv) => {
  // Last 14 days summary
  const days = [];
  const now = new Date();
  let todayVisits = 0, weekVisits = 0, totalCaseViews = 0, totalVideoPlays = 0;
  for (let i = 0; i < 14; i++) {
    const d = new Date(now); d.setDate(d.getDate() - i);
    const key = `day:${d.toISOString().slice(0, 10)}`;
    const val = safeJson(await kv.get(key), { visits: 0, caseViews: 0, videoPlays: 0 });
    days.push({ date: d.toISOString().slice(0, 10), ...val });
    if (i === 0) todayVisits = val.visits || 0;
    if (i < 7) weekVisits += val.visits || 0;
    totalCaseViews += val.caseViews || 0;
    totalVideoPlays += val.videoPlays || 0;
  }
  // Top cases & videos (scan known keys from recent)
  const recent = safeJson(await kv.get("recent"), []);
  const caseIds = [...new Set(recent.filter(e => e.event === "case_view").map(e => e.id))].slice(0, 20);
  const videoIds = [...new Set(recent.filter(e => e.event === "video_play").map(e => e.id))].slice(0, 10);
  const topCases = (await Promise.all(caseIds.map(async id => {
    const v = safeJson(await kv.get(`case:${id}`), null);
    return v ? { id, ...v } : null;
  }))).filter(Boolean).sort((a, b) => (b.views || 0) - (a.views || 0));
  const topVideos = (await Promise.all(videoIds.map(async id => {
    const v = safeJson(await kv.get(`video:${id}`), null);
    return v ? { id, ...v } : null;
  }))).filter(Boolean).sort((a, b) => (b.plays || 0) - (a.plays || 0));
  return { todayVisits, weekVisits, totalCaseViews, totalVideoPlays, days: days.reverse(), topCases, topVideos, recent: recent.slice(0, 30) };
};

export default {
  async fetch(request, env) {
    const requestUrl = new URL(request.url);
    const caseId = requestUrl.searchParams.get("case");
    const lang = requestUrl.searchParams.get("lang") || "zh-hant";
    // ── Track endpoint ──────────────────────────────────────────────────────
    if (requestUrl.pathname === "/api/track" && request.method === "POST") {
      if (env.ANALYTICS_KV) {
        try {
          const body = await request.json();
          const country = request.cf?.country || "??";
          await trackEvent(env.ANALYTICS_KV, { ...body, country });
        } catch (e) {}
      }
      return new Response("ok", { status: 200, headers: { "access-control-allow-origin": "*" } });
    }
    if (requestUrl.pathname === "/api/track" && request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: { "access-control-allow-origin": "*", "access-control-allow-methods": "POST,OPTIONS", "access-control-allow-headers": "content-type" } });
    }
    // ── Analytics read endpoint ─────────────────────────────────────────────
    if (requestUrl.pathname === "/api/analytics" && request.method === "GET") {
      const secret = requestUrl.searchParams.get("secret") || "";
      const expected = env.ANALYTICS_SECRET || "ibd2024";
      if (secret !== expected) return new Response("Unauthorized", { status: 401 });
      if (!env.ANALYTICS_KV) return new Response(JSON.stringify({ error: "KV not bound" }), { status: 503, headers: { "content-type": "application/json" } });
      const data = await getAnalytics(env.ANALYTICS_KV);
      return new Response(JSON.stringify(data), { headers: { "content-type": "application/json", "cache-control": "no-store" } });
    }
    const wantsHtml = request.method === "GET" && (requestUrl.pathname === "/" || requestUrl.pathname === "/index.html");
    if (!wantsHtml) {
      return env.ASSETS.fetch(request);
    }

    const assetResponse = await env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
    let html = await assetResponse.text();
    const langMeta = getLangMeta(lang);
    const langParam = lang === "zh-hant" ? "" : `?lang=${encodeURIComponent(lang)}`;
    const item = caseId ? await fetchCase(caseId).catch(() => null) : null;
    if (item) {
      const title = `${item.title || "作品案例"}｜燃點品牌設計 IBD`;
      const description = item.description || `${item.category || "IP品牌設計"}案例，查看完整圖片、策略與延展。`;
      const params = new URLSearchParams();
      params.set("case", caseId);
      if (lang !== "zh-hant") params.set("lang", lang);
      const url = `https://ip-design.hk/?${params.toString()}`;
      html = patchMeta(html, {
        title,
        description,
        url,
        image: item.cover || DEFAULT_IMAGE,
        imageAlt: item.title || "燃點品牌設計作品案例",
        type: "article",
        lang,
      });
    } else {
      html = patchMeta(html, {
        title: langMeta.title,
        description: langMeta.description,
        url: `https://ip-design.hk/${langParam}`,
        image: DEFAULT_IMAGE,
        lang,
      });
    }

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cache-control": "public, max-age=300",
      },
    });
  },
};
