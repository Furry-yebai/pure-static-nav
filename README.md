# Nav Astro

Astro + React + Tailwind CSS 做的个人导航页。背景是 Bing 每日壁纸，支持深色/浅色切换，有几个动画效果。

## 技术栈

- Astro 5 — 静态站点生成
- React 19 — UI 组件
- Tailwind CSS 3 — 样式
- Motion — 动画
- Cloudflare Pages — 部署

## 功能

翻页时钟显示本地时间。卡片有 3D 倾斜效果，鼠标移上去会跟着动。光标是自定义圆点，悬停在链接上会放大，用 `mix-blend-mode: difference` 做反色。

背景图来自 `https://uapis.cn/api/v1/image/bing-daily?random=false`，每次刷新换一张。

深色/浅色模式自动检测系统偏好，也能手动切。

页面左上角有个通知弹窗，用一言 API 随机显示一句话，8 秒后自动消失。

## 使用

```bash
npm install
npm run dev
```

访问 http://localhost:4321

构建：

```bash
npm run build
```

产物在 `dist/` 目录。

## 改链接

编辑 `src/data.json`：

```json
{
  "links": [
    {
      "id": 1,
      "name": "GitHub",
      "url": "https://github.com",
      "category": "开发",
      "icon": "https://cdn.simpleicons.org/github/181717"
    }
  ],
  "categories": ["AI", "媒体", "开发", "工具"]
}
```

图标用的 Simple Icons CDN（`https://cdn.simpleicons.org/{name}/{color}`）和 Lobe Icons（`https://unpkg.com/@lobehub/icons-static-png@latest/light/{name}-color.png`）。

## 部署

```bash
npm run build
npx wrangler pages deploy dist --project-name=你的项目名
```

其他平台也行，Vercel、Netlify、GitHub Pages 都可以，`dist/` 是纯静态文件。

## 目录结构

```
nav-astro/
├── public/favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── Notification.tsx
│   │   └── ThemeToggle.tsx
│   ├── layouts/Layout.astro
│   ├── pages/index.astro
│   ├── styles/global.css
│   └── data.json
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## License

MIT
