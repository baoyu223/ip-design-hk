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

export default {
  async fetch(request, env) {
    const requestUrl = new URL(request.url);
    const caseId = requestUrl.searchParams.get("case");
    const lang = requestUrl.searchParams.get("lang") || "zh-hant";
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
