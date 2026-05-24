// schemas/case.js — 案例 / 作品集
// 燃點品牌設計後台 — 你能在後台新增、編輯、刪除案例

export default {
  name: "case",
  title: "案例 · 作品集",
  type: "document",
  fields: [
    {
      name: "title",
      title: "案例標題",
      description: "例如：AURORA · 極光獸",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(80),
    },
    {
      name: "description",
      title: "案例描述",
      description: "一行簡述：例如「新茶飲品牌 · 全 IP 體系與盲盒首發」",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    },
    {
      name: "category",
      title: "分類標籤",
      description: "顯示在案例卡片右上角的標籤",
      type: "string",
      options: {
        list: [
          { title: "IP / 潮玩",  value: "IP / 潮玩" },
          { title: "IP / 3D",   value: "IP / 3D" },
          { title: "VI 重塑",    value: "VI 重塑" },
          { title: "VI / 數碼", value: "VI / 數碼" },
          { title: "包裝",       value: "包裝" },
          { title: "聯名",       value: "聯名" },
          { title: "戰略",       value: "戰略" },
          { title: "其他",       value: "其他" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "year",
      title: "年份",
      description: "案例完成年份，例如 2025",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(2000).max(2099),
    },
    {
      name: "image",
      title: "案例封面圖",
      description: "建議尺寸 1200×1400 px，方形或竖向皆可。Sanity 會自動壓縮。",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "size",
      title: "卡片尺寸",
      description: "小卡（默認）/ 寬卡（橫向 2 倍）/ 大卡（佔 3 列）— 大卡適合放重點案例",
      type: "string",
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
    {
      name: "featured",
      title: "置頂顯示",
      description: "勾選後此案例將排在最前",
      type: "boolean",
      initialValue: false,
    },
  ],

  // 後台列表頁的預覽方式
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
      year: "year",
      featured: "featured",
    },
    prepare({ title, subtitle, media, year, featured }) {
      return {
        title: `${featured ? "★ " : ""}${title}`,
        subtitle: `${year || ""} · ${subtitle || ""}`,
        media,
      };
    },
  },

  // 默認排序：先按置頂，再按年份倒序
  orderings: [
    {
      title: "年份（新→舊）",
      name: "yearDesc",
      by: [
        { field: "featured", direction: "desc" },
        { field: "year", direction: "desc" },
      ],
    },
    {
      title: "標題 A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
};
