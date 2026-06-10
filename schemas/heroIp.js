// schemas/heroIp.js — IP 形象（可單獨上傳、排序、點擊跳轉案例）

const TRAD_MAP = {
  设计: "設計", 文化: "文化", 形象: "形象", 系列: "系列", 品牌: "品牌",
  案例: "案例", 角色: "角色", 圆环: "圓環", 首页: "首頁", 显示: "顯示",
  跳转: "跳轉", 排序: "排序", 隐藏: "隱藏", 香港: "香港", 潮玩: "潮玩",
};
const TRAD_CHAR_MAP = {
  这:"這", 为:"為", 专:"專", 业:"業", 马:"馬", 创:"創", 设:"設", 计:"計",
  图:"圖", 片:"片", 文:"文", 化:"化", 显:"顯", 示:"示", 点:"點", 击:"擊",
  转:"轉", 圆:"圓", 环:"環", 页:"頁", 首:"首", 关:"關", 联:"聯", 个:"個",
  应:"應", 对:"對", 这:"這", 隐:"隱", 藏:"藏", 顺:"順", 后:"後", 产:"產",
};
const toTrad = (value) => {
  if (value == null) return value;
  let text = String(value);
  Object.entries(TRAD_MAP).forEach(([from, to]) => { text = text.split(from).join(to); });
  return Array.from(text).map((ch) => TRAD_CHAR_MAP[ch] || ch).join("");
};

export default {
  name: "heroIp",
  title: "IP形象",
  type: "document",
  orderings: [
    {
      title: "圓環排序（小→大）",
      name: "displayOrderAsc",
      by: [
        { field: "displayOrder", direction: "asc" },
        { field: "_createdAt", direction: "asc" },
      ],
    },
    {
      title: "最新建立",
      name: "createdDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  fields: [
    {
      name: "image",
      title: "IP 透明圖（PNG）",
      type: "image",
      description: "建議上傳去背的透明 PNG。前台會保持原比例顯示在首頁圓環與圓心放大，不會拉伸變形。",
      options: { hotspot: false },
      validation: (R) => R.required(),
    },
    {
      name: "label",
      title: "角色文字",
      type: "string",
      description: "鼠標移到角色、或圓心自動輪播時，顯示在中間的名字。例如：黑馬文化IP、小胖系列。留空會用所選案例的標題。",
      validation: (R) => R.max(40),
    },
    {
      name: "relatedCase",
      title: "點擊跳轉到哪個作品案例",
      type: "reference",
      description: "選案例後，訪客在首頁點這個 IP，會打開對應的作品案例詳情。「案例」和「視頻」二選一，同時填以視頻優先。",
      to: [{ type: "case" }],
    },
    {
      name: "relatedVideo",
      title: "點擊播放哪條視頻",
      type: "reference",
      description: "選視頻後，訪客在首頁點這個 IP，會直接彈出播放這條視頻。「視頻」優先於「案例」；不選則用案例跳轉。",
      to: [{ type: "siteVideo" }],
    },
    {
      name: "displayOrder",
      title: "圓環排序",
      type: "number",
      description: "數字越小越靠前。請給每個 IP 設不同的數字（例如 1、2、3…），不要全部留 10，否則後台列表順序會不穩定、看起來像縮圖與名字對不上。",
      initialValue: () => Math.floor(Date.now() / 1000) % 100000,
    },
    {
      name: "active",
      title: "在首頁圓環顯示",
      type: "boolean",
      description: "關閉後，這個 IP 不會出現在首頁圓環（資料仍保留，可隨時再打開）。",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "label",
      media: "image",
      caseTitle: "relatedCase.title",
      videoTitle: "relatedVideo.title",
      active: "active",
      order: "displayOrder",
    },
    prepare({ title, media, caseTitle, videoTitle, active, order }) {
      const link = videoTitle
        ? `播放視頻：${toTrad(videoTitle)}`
        : caseTitle ? `跳轉案例：${toTrad(caseTitle)}` : "未設點擊跳轉";
      const bits = [
        active === false ? "（已隱藏）" : null,
        link,
        Number.isFinite(order) ? `排序 ${order}` : null,
      ].filter(Boolean).join(" · ");
      return {
        title: toTrad(title || videoTitle || caseTitle || "圓環 IP"),
        subtitle: bits,
        media,
      };
    },
  },
};
