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
      title: "上傳視頻文件",
      type: "file",
      description: "建議 MP4，文件不要太大；首頁與案例詳情都會按原視頻比例顯示。",
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
      description: "建議上傳 1:1 正方形封面；首頁、客戶評價與案例詳情會統一以正方形封面展示。",
      options: { hotspot: true },
    },
    {
      name: "showOnHome",
      title: "放到首頁視頻板塊",
      type: "boolean",
      description: "只想指定一條首頁主視頻時，把那條打開即可。",
      initialValue: false,
    },
    {
      name: "showInTestimonials",
      title: "放到客戶評價下方作品視頻",
      type: "boolean",
      description: "可以打開多條，前台會橫向展示多個作品視頻。",
      initialValue: false,
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
      showInTestimonials: "showInTestimonials",
      caseTitle: "relatedCase.title",
      media: "poster",
    },
    prepare({ title, subtitle, showOnHome, showInTestimonials, caseTitle, media }) {
      const places = [
        showOnHome ? "首頁" : null,
        showInTestimonials ? "客戶評價" : null,
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
