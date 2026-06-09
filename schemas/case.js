// schemas/case.js — 案例 / 作品集
import { BulkGalleryInput } from "../components/BulkGalleryInput";

const TRAD_MAP = {
  视频: "視頻", 说明: "說明", 标题: "標題", 首页: "首頁", 主页: "主頁", 专门: "專門",
  黑马: "黑馬", 创意: "創意", 设计: "設計", 文化: "文化", 已经: "已經", 客户: "客戶",
  发布: "發布", 显示: "顯示", 选择: "選擇", 上传: "上傳", 文件: "文件", 图片: "圖片",
  品牌策划: "品牌策劃", 文创: "文創", 文旅: "文旅", 形象: "形象", 香港: "香港",
};
const TRAD_CHAR_MAP = {
  这:"這", 为:"為", 专:"專", 业:"業", 马:"馬", 门:"門", 创:"創", 设:"設", 计:"計",
  频:"頻", 视:"視", 说:"說", 标:"標", 题:"題", 发:"發", 布:"布", 显:"顯", 示:"示",
  选:"選", 择:"擇", 联:"聯", 客:"客", 户:"戶", 传:"傳", 统:"統", 简:"簡", 体:"體",
  国:"國", 台:"臺", 湾:"灣", 点:"點", 关:"關", 于:"於", 们:"們", 个:"個", 会:"會",
  后:"後", 里:"裡", 与:"與", 对:"對", 应:"應", 开:"開", 启:"啟", 条:"條", 张:"張",
  类:"類", 产:"產", 权:"權", 动:"動", 画:"畫", 数:"數", 图:"圖", 片:"片", 頁:"頁",
};
const toTrad = (value) => {
  if (value == null) return value;
  let text = String(value);
  Object.entries(TRAD_MAP).forEach(([from, to]) => { text = text.split(from).join(to); });
  return Array.from(text).map((ch) => TRAD_CHAR_MAP[ch] || ch).join("");
};

const CASE_KEYWORD_OPTIONS = [
  "IPdesign",
  "IP品牌設計",
  "IP品牌策劃",
  "IP形象設計",
  "超級IP品牌策劃設計",
  "燃點品牌設計",
  "燃點品牌策劃設計",
  "Ignition Brand Design",
  "品牌設計",
  "品牌全案",
  "品牌策劃設計",
  "潮玩設計",
  "潮玩IP",
  "文創IP設計",
  "文旅IP",
  "兒童服裝IP",
  "文具IP設計",
  "玩具IP設計",
  "食品包裝IP",
  "飲品品牌IP",
  "城市IP",
  "展覽IP",
  "授權IP",
  "IP商業化",
  "IP周邊開發",
  "角色世界觀",
  "3D角色設計",
  "VI視覺設計",
  "包裝設計",
  "聯名策劃",
].map((item) => ({ title: item, value: item }));

export default {
  name: "case",
  title: "案例 · 作品集",
  type: "document",
  fields: [
    { name: "title", title: "案例標題", type: "string", validation: (R) => R.required().min(2).max(80) },
    { name: "description", title: "案例描述", type: "string", validation: (R) => R.required().max(120) },
    {
      name: "category", title: "分類標籤", type: "string",
      options: {
        list: [
          { title: "IP / 潮玩", value: "IP / 潮玩" },
          { title: "IP / 3D", value: "IP / 3D" },
          { title: "VI 重塑", value: "VI 重塑" },
          { title: "VI / 數碼", value: "VI / 數碼" },
          { title: "包裝", value: "包裝" },
          { title: "聯名", value: "聯名" },
          { title: "戰略", value: "戰略" },
          { title: "其他", value: "其他" },
        ],
        layout: "radio",
      },
      validation: (R) => R.required(),
    },
    { name: "year", title: "年份", type: "number", validation: (R) => R.required().integer().min(2000).max(2099) },
    { name: "image", title: "案例封面圖", type: "image", options: { hotspot: true } },
    {
      name: "showInHeroOrbit",
      title: "放到首頁 IP 角色圓環",
      type: "boolean",
      description: "打開後，這個案例的角色會出現在首頁黑色動畫圓環；訪客點擊角色會進入此作品詳情。",
      initialValue: false,
    },
    {
      name: "heroCharacter",
      title: "首頁圓環角色透明圖",
      type: "image",
      description: "建議上傳透明 PNG。前台會保持原比例，不拉伸變形。",
      options: { hotspot: false },
      hidden: ({ document }) => !document?.showInHeroOrbit,
    },
    {
      name: "heroOrbitLabel",
      title: "首頁圓環角色文字",
      type: "string",
      description: "例如：黑馬文化IP、黃一山IP形象、小胖系列。留空會使用案例標題。",
      validation: (R) => R.max(40),
      hidden: ({ document }) => !document?.showInHeroOrbit,
    },
    {
      name: "heroOrbitOrder",
      title: "首頁圓環排序",
      type: "number",
      description: "數字越小越靠前；只影響首頁 IP 角色圓環。",
      initialValue: 10,
      hidden: ({ document }) => !document?.showInHeroOrbit,
    },
    {
      name: "size", title: "卡片尺寸", type: "string",
      options: {
        list: [
          { title: "小卡（默認）", value: "regular" },
          { title: "寬卡（2 倍寬）", value: "wide" },
          { title: "大卡（3 倍寬，重點）", value: "big" },
        ],
        layout: "radio",
      },
      initialValue: "regular",
    },
    { name: "featured", title: "置頂顯示", type: "boolean", initialValue: false },

    // ===== 詳情頁字段 =====
    { name: "client", title: "客戶名稱", type: "string" },
    {
      name: "services", title: "服務內容", type: "array",
      of: [{ type: "string" }], options: { layout: "tags" },
    },
    {
      name: "tags", title: "案例關鍵詞標籤", type: "array",
      description: "可多選；用於前台案例標籤與 SEO 語義。需要更多關鍵詞時，也可在下方自行輸入新增。",
      of: [{ type: "string" }],
      options: {
        list: CASE_KEYWORD_OPTIONS,
        layout: "grid",
      },
    },
    { name: "body", title: "詳細描述", type: "array", of: [{ type: "block" }] },
    {
      name: "videos", title: "影片 / 視頻（可指定前台位置）", type: "array",
      description: "舊版案例內視頻字段，現在請改用左側「視頻管理」單獨上傳與指定展示位置。",
      hidden: true,
      of: [
        {
          type: "object",
          title: "影片",
          fields: [
            { name: "title", title: "影片標題", type: "string", validation: (R) => R.max(80) },
            { name: "caption", title: "影片說明", type: "string", validation: (R) => R.max(120) },
            {
              name: "placement",
              title: "這條影片放到哪裡？",
              type: "string",
              description: "如果選首頁，會出現在「關於我們」上方的視頻板塊；如果選客戶評價，會出現在客戶評價下方。",
              options: {
                list: [
                  { title: "首頁視頻板塊", value: "home" },
                  { title: "客戶評價下方作品視頻", value: "testimonial" },
                  { title: "只在案例詳情顯示", value: "caseOnly" },
                ],
                layout: "radio",
              },
              initialValue: "caseOnly",
            },
            {
              name: "displayOrder",
              title: "顯示排序",
              type: "number",
              description: "數字越小越靠前；首頁視頻板塊會優先顯示排序最前的一條。",
              initialValue: 10,
            },
            {
              name: "file",
              title: "上傳影片",
              type: "file",
              options: { accept: "video/mp4,video/quicktime,video/webm" },
              validation: (R) => R.required(),
            },
          ],
          preview: {
            select: { title: "title", subtitle: "caption", placement: "placement" },
            prepare({ title, subtitle, placement }) {
              const labels = { home: "首頁視頻板塊", testimonial: "客戶評價作品視頻", caseOnly: "案例詳情" };
              return { title: toTrad(title || "影片"), subtitle: toTrad(`${labels[placement] || "案例詳情"} · ${subtitle || "點擊編輯影片"}`) };
            },
          },
        },
      ],
    },
    {
      name: "gallery", title: "細節圖（多張）", type: "array",
      description: "可一次選擇或拖入多張圖片；圖片會按這裡的順序顯示在案例詳情。",
      components: { input: BulkGalleryInput },
      of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "caption", title: "圖片說明", type: "string" }] }],
    },
    {
      name: "pdfs", title: "PDF 文件（可多個）", type: "array",
      description: "可上傳作品集、品牌手冊、案例簡報等 PDF；前台會顯示為查看/下載按鈕。",
      of: [
        {
          type: "object",
          title: "PDF 文件",
          fields: [
            { name: "title", title: "文件標題", type: "string", validation: (R) => R.required().max(80) },
            { name: "description", title: "文件說明", type: "string", validation: (R) => R.max(120) },
            {
              name: "file",
              title: "上傳 PDF",
              type: "file",
              options: { accept: ".pdf,application/pdf" },
              validation: (R) => R.required(),
            },
          ],
          preview: {
            select: { title: "title", subtitle: "description", media: "file" },
            prepare({ title, subtitle }) {
              return { title: toTrad(title || "PDF 文件"), subtitle: toTrad(subtitle || "點擊編輯文件") };
            },
          },
        },
      ],
    },
    { name: "link", title: "外部鏈接", type: "url" },
  ],
  preview: {
    select: { title: "title", subtitle: "description", media: "image", year: "year", featured: "featured" },
    prepare({ title, subtitle, media, year, featured }) {
      return { title: toTrad(`${featured ? "★ " : ""}${title || "案例"}`), subtitle: toTrad(`${year || ""} · ${subtitle || ""}`), media };
    },
  },
};
