# Vue 3 + Vite 模板

这个模板可以帮助你开始使用 Vue 3 和 Vite 进行开发。该模板使用了 Vue 3 的 `<script setup>` 单文件组件(SFC)，查看 [script setup 文档](https://cn.vuejs.org/api/sfc-script-setup "https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup") 了解更多信息。

 Vite 支持许多流行的 JS 框架。[查看所有支持的框架](https://cn.vite.dev/guide/#scaffolding-your-first-vite-project "https://vitejs.dev/guide/#scaffolding-your-first-vite-project")。

[Vite 配置参考](https://cn.vite.dev/config/)

## 本地开发

### 项目依赖安装

```sh
npm install
```

### 开发环境编译与热重载

```sh
npm run dev
# 在浏览器打开 http://localhost:5173
```

### 生产环境打包

```sh
npm run build
# 构建产物将存储在 dist/ 目录中
```

## 部署

使用Edgeone pages部署你自己的Vite项目

[![使用 EdgeOne Pages 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?template=vite-vue3)

更多模板: [从模板开始](https://console.cloud.tencent.com/edgeone/pages/create/template)

## Sitemap

执行 `npm run build` 会在 `dist/` 生成 `sitemap.xml` 与 `robots.txt`，`npm run dev` 时也可直接访问。默认使用正式域名 `https://live-production.corbinlin.cn`，预览或其他环境可在 `.env` 中通过 `VITE_SITE_URL` 覆盖（可参考 `.env.example`）：

```sh
VITE_SITE_URL=https://your-preview-domain.com npm run build
```
