# 纯静态版个人导航页

一个基于 Astro 框架的个人导航网站，支持 Bing 每日壁纸、深色/浅色模式切换、自定义光标和丰富的动画效果。可直接部署在 Cloudflare Pages、Vercel 等支持静态页面的 Serverless 平台上。

## 功能特性

- **设计风格** — 磨砂玻璃卡片、圆角设计、柔和阴影
- **每日壁纸** — 自动获取每日 Bing 壁纸作为背景
- **深色/浅色模式** — 自动检测系统偏好，支持手动切换
- **自定义光标** — 圆点光标，悬停放大，反色混合模式
- **翻页时钟** — 实时显示本地时间的翻页动画时钟
- **一言通知** — 每次访问随机显示一言句子
- **响应式布局** — 适配桌面端和移动端
- **分类管理** — 支持自定义分类和链接

## 技术栈

- [Astro](https://astro.build/) — 现代静态站点生成器
- [React](https://react.dev/) — UI 组件
- [Tailwind CSS](https://tailwindcss.com/) — 原子化 CSS 框架
- [Motion](https://motion.dev/) — 动画库

## 快速开始

### 安装

```bash
# 克隆项目
git clone https://github.com/Furry-yebai/pure-static-nav.git

# 进入项目目录
cd pure-static-nav

# 安装依赖
npm install
```

### 开发

```bash
npm run dev
```

访问 http://localhost:4321 查看开发服务器。

### 构建

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

### 预览

```bash
npm run preview
```

## 自定义

### 修改链接

编辑 `src/data.json` 文件来自定义你的导航链接：

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

### 图标来源

- **Simple Icons**: `https://cdn.simpleicons.org/{name}/{color}`
- **Lobe Icons**: `https://unpkg.com/@lobehub/icons-static-png@latest/light/{name}-color.png`
- **自定义图标**: 直接使用图片 URL

### 壁纸 API

默认使用 `https://uapis.cn/api/v1/image/bing-daily?random=false`

## 部署

[![Deploy to Vercel](https://img.shields.io/badge/Deploy_to_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/new/clone?repository-url=https://github.com/Furry-yebai/pure-static-nav)

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy_to_Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://dash.cloudflare.com/?to=/:account/pages/new&url=https://github.com/Furry-yebai/pure-static-nav)

### 手动部署

**Cloudflare Pages:**

```bash
npm run build
npx wrangler pages deploy dist --project-name=你的项目名
```

**其他平台:**

项目构建为静态文件，可部署到 Netlify、GitHub Pages、AWS S3 等任何静态托管服务。

## 项目结构

```
pure-static-nav/
├── public/
│   └── favicon.svg          # 网站图标
├── src/
│   ├── components/
│   │   ├── ui/              # UI 组件
│   │   ├── Notification.tsx # 通知组件
│   │   └── ThemeToggle.tsx  # 主题切换
│   ├── layouts/
│   │   └── Layout.astro     # 主布局
│   ├── pages/
│   │   └── index.astro      # 首页
│   ├── styles/
│   │   └── global.css       # 全局样式
│   └── data.json            # 导航数据
├── astro.config.mjs         # Astro 配置
├── tailwind.config.mjs      # Tailwind 配置
├── LICENSE                  # GPL 3.0 许可证
└── package.json
```

## 动画效果

- **交错揭示** — 卡片依次从下方浮入
- **3D 倾斜** — 鼠标悬停时卡片跟随角度倾斜
- **磁性图标** — 图标轻微跟随鼠标移动
- **文字解码** — 副标题从模糊到清晰的动画
- **自定义光标** — 圆点光标，悬停放大，反色显示
- **噪点纹理** — 全局叠加胶片颗粒感纹理
- **通知动画** — 滑入/滑出的弹窗动画

## 许可证

[GPL 3.0](LICENSE)
