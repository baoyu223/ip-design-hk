// schemas/siteVideo.js — 獨立視頻管理
import { VideoFileInput } from "../components/VideoFileInput";

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
      description: "這條是此作品視頻的主視頻；建議 MP4，文件不要太大。",
      options: { accept: "video/mp4,video/quicktime,video/webm" },
      components: { input: VideoFileInput },
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
              components: { input: VideoFileInput },
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
                title: title || "系列視頻",
                subtitle: subtitle || "會接在主視頻後面播放",
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
      caseTitle: "relatedCase.title",
      media: "poster",
    },
    prepare({ title, subtitle, showOnHome, caseTitle, media }) {
      const places = [
        showOnHome ? "首頁主視頻" : null,
        caseTitle ? `案例：${caseTitle}` : null,
      ].filter(Boolean).join(" · ");
      return {
        title: title || "視頻",
        subtitle: `${places || "未指定展示位置"}${subtitle ? ` · ${subtitle}` : ""}`,
        media,
      };
    },
  },
};
