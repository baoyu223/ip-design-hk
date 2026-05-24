# 燃點品牌設計 · 後台 (Sanity Studio)

这是 `ip-design.hk` 的可视化后台管理系统。

## 在本机开发（一般不需要）

```bash
npm install
npm run dev
# 打开 http://localhost:3333
```

## 部署到 Cloudflare Pages（推荐方式）

1. 把本文件夹推到 GitHub（或整个项目一起推）
2. Cloudflare Pages → Create application → Connect to Git
3. 选这个仓库
4. **构建设置：**
   - Root directory: `studio`
   - Build command: `npm install && npm run build`
   - Build output directory: `dist`
5. 部署成功后，在该项目 → Custom domains 添加 `admin.ip-design.hk`

## 配置 Sanity 允许 admin.ip-design.hk 访问

部署后必须做这步：

1. 打开 https://www.sanity.io/manage/personal/project/6fxw2dmo/api
2. 在 **CORS Origins** 添加：
   - `https://admin.ip-design.hk`（允许凭据：✓ Allow credentials）
   - `https://ip-design.hk`（允许凭据：✗）
   - `https://www.ip-design.hk`（允许凭据：✗）

## 项目信息

- Project ID: `6fxw2dmo`
- Dataset: `production`
- Org ID: `oovy2crbh`
