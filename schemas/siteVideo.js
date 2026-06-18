// schemas/siteVideo.js — 獨立視頻管理

const TRAD_MAP = {
  视频: "視頻", 说明: "說明", 标题: "標題", 首页: "首頁", 主页: "主頁", 专门: "專門",
  黑马: "黑馬", 创意: "創意", 设计: "設計", 文化: "文化", 已经: "已經", 客户: "客戶",
  发布: "發布", 显示: "顯示", 选择: "選擇", 上传: "上傳", 文件: "文件", 图片: "圖片",
  案例: "案例", 系列: "系列", 品牌: "品牌", 形象: "形象", 香港: "香港",
};
const TRAD_CHAR_MAP = {
  这:"這", 为:"為", 专:"專", 业:"業", 马:"馬", 门:"門", 创:"創", 设:"設", 计:"計",
  频:"頻", 视:"視", 说:"說", 明:"明", 首:"首", 页:"頁", 主:"主", 图:"圖", 片:"片",
  文:"文", 化:"化", 标:"標", 题:"題", 发:"發", 布:"布", 显:"顯", 示:"示", 选:"選",
  择:"擇", 联:"聯", 系:"系", 客:"客", 户:"戶", 传:"傳", 统:"統", 简:"簡", 体:"體",
  国:"國", 台:"臺", 湾:"灣", 点:"點", 关:"關", 于:"於", 们:"們", 个:"個", 会:"會",
  后:"後", 里:"裡", 与:"與", 对:"對", 应:"應", 开:"開", 启:"啟", 条:"條", 张:"張",
  类:"類", 产:"產", 品:"品", 权:"權", 授:"授", 变:"變", 动:"動", 画:"畫", 数:"數",
};
const toTrad = (value) => {
  if (value == null) return value;
  let text = String(value);
  Object.entries(TRAD_MAP).forEach(([from, to]) => { text = text.split(from).join(to); });
  return Array.from(text).map((ch) => TRAD_CHAR_MAP[ch] || ch).join("");
};

export default {
  name: "siteVideo",
  title: "視頻管理",
  type: "document",
  fields: [
    { name: "title", title: "視頻標題", type: "string", validation: (R) => R.required().max(80) },
    { name: "caption", title: "視頻說明", type: "string", validation: (R) => R.max(140) },
    {
      name: "file",
      title: "主視頻文件",
      type: "file",
      description: "這條是此作品視頻的主視頻；建議 MP4，文件不要太大。若視頻很大，請先壓縮後再上傳。",
      options: { accept: "video/mp4,video/quicktime,video/webm" },
      validation: (R) => R.custom((value) => (
        value?.asset?._ref ? true : "建議上傳視頻文件；沒有視頻文件時，前台不會展示這條視頻。"
      )).warning(),
    },
    {
      name: "poster",
      title: "視頻封面圖",
      type: "image",
      description: "建議上傳 1:1 正方形封面；首頁與案例詳情會統一以正方形封面展示。",
      options: { hotspot: true },
    },
    {
      name: "titleTone",
      title: "視頻標題顏色",
      type: "string",
      description: "控制前台視頻卡片的標題顏色。封面偏暗選白色，封面偏淺選黑色。",
      options: {
        list: [
          { title: "白色標題（適合深色 / 彩色封面）", value: "light" },
          { title: "黑色標題（適合淺色封面）", value: "dark" },
        ],
        layout: "radio",
      },
      initialValue: "light",
    },
    {
      name: "seriesVideos",
      title: "系列視頻（加在同一個作品名稱下面）",
      type: "array",
      description: "同一個作品有多條視頻時，在這裡繼續添加；前台會按這裡的順序連續播放。",
      of: [
        {
          type: "object",
          title: "系列視頻",
          fields: [
            { name: "title", title: "系列視頻標題", type: "string", validation: (R) => R.max(80) },
            { name: "caption", title: "系列視頻說明", type: "string", validation: (R) => R.max(140) },
            {
              name: "file",
              title: "上傳系列視頻",
              type: "file",
              description: "建議 MP4；前台會和主視頻一起連續播放。",
              options: { accept: "video/mp4,video/quicktime,video/webm" },
            },
            {
              name: "poster",
              title: "系列視頻封面圖",
              type: "image",
              description: "建議 1:1 正方形封面。",
              options: { hotspot: true },
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "caption",
              media: "poster",
            },
            prepare({ title, subtitle, media }) {
              return {
                title: toTrad(title || "系列視頻"),
                subtitle: toTrad(subtitle || "會接在主視頻後面播放"),
                media,
              };
            },
          },
        },
      ],
    },
    {
      name: "showOnHome",
      title: "在首頁展示這條主視頻",
      type: "boolean",
      description: "打開後，首頁只展示這條主視頻卡片；系列視頻會在點開後連續播放，不會全部攤在首頁。",
      initialValue: false,
    },
    {
      name: "showInTestimonials",
      title: "舊欄位：客戶評價視頻",
      type: "boolean",
      description: "已停用。保留只是為了避免舊資料出現 Unknown field。",
      initialValue: false,
      hidden: true,
    },
    {
      name: "relatedCase",
      title: "插入到哪個作品案例詳情",
      type: "reference",
      description: "選擇後，這條視頻會出現在該案例詳情頁；不選則不插入案例詳情。",
      to: [{ type: "case" }],
    },
    {
      name: "displayOrder",
      title: "顯示排序",
      type: "number",
      description: "數字越小越靠前；首頁主視頻會優先取排序最前的一條。",
      initialValue: 10,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "caption",
      showOnHome: "showOnHome",
      titleTone: "titleTone",
      caseTitle: "relatedCase.title",
      media: "poster",
    },
    prepare({ title, subtitle, showOnHome, titleTone, caseTitle, media }) {
      const places = [
        showOnHome ? "首頁主視頻" : null,
        titleTone === "dark" ? "黑色標題" : "白色標題",
        caseTitle ? `案例：${toTrad(caseTitle)}` : null,
      ].filter(Boolean).join(" · ");
      return {
        title: toTrad(title || "視頻"),
        subtitle: toTrad(`${places || "未指定展示位置"}${subtitle ? ` · ${subtitle}` : ""}`),
        media,
      };
    },
  },
};
