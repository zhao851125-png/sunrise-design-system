# 🌅 Sunrise Design System

曦望设计系统 - 完整的 Token 文档和设计规范

## 📖 文档网站

**在线查看**: https://zhao851125-png.github.io/sunrise-design-system

## ✨ 包含内容

- **🎨 颜色 Token** — 品牌色、深浅色模式、状态色
- **✍️ 字体 Token** — 字体家族、字号、字重、行高
- **📏 间距 Token** — 完整的间距系统（8px 基础）
- **✨ 其他 Token** — 阴影、图标、布局、动效

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态网站
npm run docs:build
```

然后访问 http://localhost:5173 查看网站。

### 在项目中使用

#### CSS 变量方式

```html
<link rel="stylesheet" href="path/to/docs/.vitepress/theme/style.css">
```

```css
.button {
  background-color: var(--color-brand-primary);
  padding: var(--space-2) var(--space-3);
  color: var(--color-text-on-primary);
}
```

#### 复制粘贴

访问网站，直接从文档中复制你需要的 Token 值。

## 📝 如何编辑

### 编辑现有 Token

1. 打开对应的 Markdown 文件：
   - `docs/tokens/colors.md` — 颜色 Token
   - `docs/tokens/typography.md` — 字体 Token
   - `docs/tokens/spacing.md` — 间距 Token
   - `docs/tokens/others.md` — 其他 Token

2. 修改内容（表格、代码、预览等）

3. 提交到 GitHub，网站自动更新

### 添加新的 Token

1. 在对应的 Markdown 文件中添加新行
2. 更新 `docs/.vitepress/theme/style.css` 中的 CSS 变量
3. 提交更新

## 🔄 自动部署

每次向 `main` 分支推送代码，GitHub Actions 会自动：

1. 安装依赖
2. 构建静态网站
3. 部署到 GitHub Pages

无需手动操作，网站自动更新！

## 📂 项目结构

```
sunrise-design-system/
├── docs/                          # 文档源代码
│   ├── .vitepress/
│   │   ├── config.js             # VitePress 配置
│   │   ├── theme/
│   │   │   ├── index.js          # 主题入口
│   │   │   └── style.css         # CSS Token（全局变量）
│   │   └── dist/                 # 构建输出
│   ├── index.md                  # 首页
│   └── tokens/
│       ├── index.md              # Token 概览
│       ├── colors.md             # 颜色 Token
│       ├── typography.md         # 字体 Token
│       ├── spacing.md            # 间距 Token
│       └── others.md             # 其他 Token
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions 部署配置
├── package.json
├── .gitignore
└── README.md
```

## 🎯 核心特性

✅ **即时更新** — 改 Markdown 后自动部署到网站  
✅ **可视化展示** — 彩色预览、实时代码示例  
✅ **共享链接** — 一个固定链接，永远最新  
✅ **无需部署** — GitHub Pages 免费托管  
✅ **开发友好** — CSS 变量、JSON 导出支持  

## 📞 维护与反馈

- 🔄 定期更新设计规范
- 💬 欢迎团队反馈和建议
- 📧 联系设计团队了解更多

## 📄 许可

MIT License

---

**最后更新**: 2026.06.26  
**版本**: v1.0
