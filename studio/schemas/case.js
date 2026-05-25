// schemas/case.js — 案例 / 作品集
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
    { name: "body", title: "詳細描述", type: "array", of: [{ type: "block" }] },
    {
      name: "gallery", title: "細節圖（多張）", type: "array",
      description: "可一次選擇或拖入多張圖片；圖片會按這裡的順序顯示在案例詳情。",
      of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "caption", title: "圖片說明", type: "string" }] }],
    },
    {
      name: "videos", title: "影片（可多個）", type: "array",
      description: "可上傳 MP4 / MOV / WebM，用於展示案例動畫、品牌片或過程視頻。",
      of: [
        {
          type: "object",
          title: "影片",
          fields: [
            { name: "title", title: "影片標題", type: "string", validation: (R) => R.max(80) },
            { name: "caption", title: "影片說明", type: "string", validation: (R) => R.max(120) },
            {
              name: "file",
              title: "上傳影片",
              type: "file",
              options: { accept: "video/mp4,video/quicktime,video/webm" },
              validation: (R) => R.required(),
            },
          ],
          preview: {
            select: { title: "title", subtitle: "caption" },
            prepare({ title, subtitle }) {
              return { title: title || "影片", subtitle: subtitle || "點擊編輯影片" };
            },
          },
        },
      ],
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
              return { title: title || "PDF 文件", subtitle: subtitle || "點擊編輯文件" };
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
      return { title: `${featured ? "★ " : ""}${title}`, subtitle: `${year || ""} · ${subtitle || ""}`, media };
    },
  },
};
