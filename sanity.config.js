// sanity.config.js — 燃點品牌設計後台主配置
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "ip-design-studio",
  title: "燃點品牌設計 · 後台",

  projectId: "6fxw2dmo",
  dataset: "production",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
