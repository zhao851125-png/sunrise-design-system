# 📝 推送到 GitHub 指南

我已经为你搭建好了完整的项目。现在只需要按照以下步骤推送到你的 GitHub 仓库！

## ✅ 第 1 步：初始化 Git 仓库

打开终端，进入项目目录：

```bash
cd /tmp/sunrise-design-system
git init
git add .
git commit -m "Initial commit: Sunrise Design System with tokens"
```

## ✅ 第 2 步：添加远程仓库

使用你的 GitHub 用户名和仓库名：

```bash
git remote add origin https://github.com/zhao851125-png/sunrise-design-system.git
```

## ✅ 第 3 步：推送到 GitHub

```bash
git branch -M main
git push -u origin main
```

> 📌 **首次推送可能需要输入 GitHub 凭证**  
> 你可以使用：
> - Personal Access Token（推荐）
> - SSH 密钥
> - GitHub CLI 认证

## ✅ 第 4 步：启用 GitHub Pages

1. 去你的 GitHub 仓库：https://github.com/zhao851125-png/sunrise-design-system
2. 点击 **Settings** → **Pages**
3. 在 "Source" 下选择 **Deploy from a branch**
4. 选择分支：**main** 和目录 **/(root)**
5. 点击 **Save**

## ✅ 第 5 步：等待自动部署

GitHub Actions 会自动：
- 安装依赖 (`npm install`)
- 构建网站 (`npm run docs:build`)
- 部署到 GitHub Pages

**大约 1-2 分钟后**，你的网站就会在这里上线：

🌐 **https://zhao851125-png.github.io/sunrise-design-system**

## 🎉 大功告成！

现在你可以：
1. **分享链接** — 把 URL 发给产品和开发同学
2. **更新文档** — 改 `docs/tokens/` 下的 Markdown 文件
3. **自动部署** — 每次 push 都自动更新网站

---

## 📂 现在项目包含了什么

✅ **完整的 VitePress 网站框架**  
✅ **美观的 Token 展示页面**（带颜色预览）  
✅ **所有的 Token 定义**（CSS 变量 + JSON）  
✅ **自动部署配置**（GitHub Actions）  
✅ **响应式设计**（可在各种设备上查看）  

---

## 🔄 后续维护流程

当你想更新 Token 时：

```bash
# 1. 编辑文件（比如更改某个颜色）
# 编辑 docs/tokens/colors.md

# 2. 提交更改
git add .
git commit -m "Update: 修改品牌色值"

# 3. 推送到 GitHub
git push

# 4. 完成！网站自动更新
# 等待 1-2 分钟，刷新网站就能看到新内容
```

---

## 💡 小贴士

### 在我的机器上本地预览

如果你想在推送前预览网站效果：

```bash
# 进入项目目录
cd /tmp/sunrise-design-system

# 安装依赖（只需第一次）
npm install

# 启动本地开发服务器
npm run docs:dev

# 打开浏览器访问 http://localhost:5173
```

### 查看 Token JSON 文件

我已经为开发者生成了 JSON 格式的 Token，位置：
- `/src/tokens.json` — 可以直接导入到设计工具或前端项目

---

## ❓ 常见问题

**Q: 网站显示 404?**  
A: 等待 GitHub Pages 部署完成（通常 1-3 分钟），或检查 Actions 标签看构建是否成功。

**Q: 我改了文件，为什么网站没有更新?**  
A: 你需要：
1. `git add .`
2. `git commit -m "your message"`
3. `git push`

三个步骤都要做，GitHub Actions 才会自动部署。

**Q: 我可以自己修改网站样式吗?**  
A: 可以！编辑 `docs/.vitepress/theme/style.css` 中的 CSS，或修改 `docs/.vitepress/config.js` 中的 VitePress 配置。

---

现在你已经准备好了！去推送吧！🚀

有任何问题随时问我！
