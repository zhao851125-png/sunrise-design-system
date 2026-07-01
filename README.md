# 🌅 Sunrise Design System

曦望设计系统 · 为 AI 推理 GPU 芯片打造的完整视觉规范系统

> **Sunrise** 是面向推理基础设施的设计系统，包含完整的 Token 定义、原子组件规范和开发规范，确保设计与开发高度一致。

---

## 📦 仓库内容一览

### 🎨 Token 系统（设计值定义）
**文件**：[`docs/tokens.md`](docs/tokens.md) | [`src/tokens.json`](src/tokens.json) | [`docs/style.css`](docs/style.css)

设计系统的基础层，包含所有可复用的设计决策：

| 类别 | 数量 | 包含内容 |
|------|------|---------|
| **颜色** | 40+ | 品牌色、深浅色模式、状态色、禁用态、链接色 |
| **字体** | 20+ | 字族、字号、字重、行高、字间距 |
| **间距** | 10 | 4px ~ 128px 完整间距系统 |
| **阴影** | 6 | 卡片、浮层、发光、深色专用阴影 |
| **动效** | 8 | UI 交互时长、Hero 环境动效 |
| **其他** | 50+ | 圆角、图标、Z-index、边框、布局、断点 |

**快速使用**：
```css
/* 方式 1：CSS 变量 */
@import 'docs/style.css';
button { background: var(--brand-primary); }

/* 方式 2：JSON 数据 */
import tokens from 'src/tokens.json';
const color = tokens.color.brand.primary; // #FF820A
```

**详细文档**：[查看完整 Token 规范](docs/tokens.md)

---

### 🧩 原子组件规范（UI 组件定义）
**文件**：[`docs/components.md`](docs/components.md)

25 个原子级别的组件规范，每个组件包含完整的：
- 所有状态定义（Normal、Hover、Active、Disabled 等）
- 相关 Token 依赖
- CSS 类名和代码示例
- 使用场景说明

**组件类别**：
- **基础展示** (7)：排版、图标、分割线、标签、链接、数据、图片
- **交互输入** (8)：按钮、输入框、下拉选择、Tab、开关、复选框、单选框
- **复合功能** (10)：卡片、表格、折叠面板、进度条、翻页、导航、弹窗、提示

**快速使用**：
```html
<!-- 按钮 -->
<button class="btn-primary">确定</button>

<!-- 输入框 -->
<input type="text" class="input-default" placeholder="请输入...">

<!-- 卡片 -->
<div class="card">
  <h3 class="card-title">标题</h3>
  <p class="card-desc">描述文案</p>
</div>
```

**详细文档**：[查看完整组件规范](docs/components.md)

---

## 🚀 快速开始

### 1. 复制 Token 值到项目
```bash
# 方式 A：直接复制 CSS 变量文件
cp docs/style.css your-project/

# 方式 B：导入 JSON 数据
import tokens from 'sunrise-design-system/src/tokens.json'
```

### 2. 在项目中使用
```css
/* 颜色 Token */
.button {
  background: var(--brand-primary);        /* #FF820A */
  border-radius: var(--radius-md);         /* 6px */
  box-shadow: var(--shadow-md);            /* 浮层阴影 */
  padding: var(--space-2) var(--space-3);  /* 16px 24px */
}

/* 字体 Token */
h1 {
  font-family: var(--font-zh);
  font-size: var(--font-size-heading);     /* 32px */
  font-weight: var(--font-weight-bold);    /* 700 */
  line-height: var(--line-height-heading); /* 1.2 */
}

/* 响应式断点 */
@media (max-width: 768px) {
  .card { padding: var(--space-2); }
}
```

### 3. 参考组件规范
按 [`docs/components.md`](docs/components.md) 中的标准实现组件，确保 UI 一致性。

---

## 📚 文档导航

| 文档 | 用途 | 访问 |
|------|------|------|
| **Token 系统** | 130+ 个设计定义、Token 参考、使用示例 | [docs/tokens.md](docs/tokens.md) |
| **组件规范** | 25 个组件、状态定义、代码示例 | [docs/components.md](docs/components.md) |
| **首页导航** | 仓库总体导航、快速链接 | [docs/index.md](docs/index.md) |
| **CSS 变量** | 开发者直接引用的 CSS 文件 | [docs/style.css](docs/style.css) |
| **Token JSON** | 程序化使用 Token 的数据源 | [src/tokens.json](src/tokens.json) |

---

## 📁 仓库结构

```
📦 sunrise-design-system/
│
├── 📄 README.md                    ← 你在这里（仓库总说明）
│
├── 📁 docs/
│   ├── index.md                    ← 首页导航
│   ├── tokens.md                   ← Token 系统详细文档
│   ├── components.md               ← 原子组件规范
│   └── style.css                   ← CSS 变量（可直接使用）
│
├── 📁 src/
│   └── tokens.json                 ← Token 数据（JSON 格式）
│
├── package.json                    ← 项目配置
└── .gitignore                      ← Git 忽略规则
```

---

## 🔧 技术栈

### 数据格式
- **CSS 变量** — 前端开发直接使用
- **JSON** — 程序化访问，支持跨平台
- **Markdown** — 文档和规范说明

### 使用场景
- **Web 开发**：CSS 变量 + JSON 导入
- **设计工具**：Token JSON 可导入 Figma、Adobe 等
- **文档参考**：Markdown 可在 GitHub 或本地查看

### 支持范围
- ✅ 所有现代浏览器（CSS 变量支持）
- ✅ Node.js ≥ 18（JSON 导入）
- ✅ 主流前端框架（React、Vue、Angular 等）

---

## 💡 使用建议

### 设计师
1. 📖 查看 [`docs/tokens.md`](docs/tokens.md) 了解所有设计规范
2. 📖 查看 [`docs/components.md`](docs/components.md) 参考标准组件
3. 🎨 在设计稿中标注 Token 名称（如 `--brand-primary`）

### 前端开发者
1. 📖 查看 [`docs/tokens.md`](docs/tokens.md) 理解 Token 含义
2. 💾 复制 [`docs/style.css`](docs/style.css) 或导入 [`src/tokens.json`](src/tokens.json)
3. 📖 按 [`docs/components.md`](docs/components.md) 实现组件
4. ✅ 确保使用 Token 而非硬编码值

### 产品/其他角色
1. 📖 浏览 [`docs/index.md`](docs/index.md) 快速了解
2. 📖 查看 [`docs/components.md`](docs/components.md) 了解可用交互模式

---

## 📊 规范覆盖范围

| 维度 | 定义数 | 覆盖 |
|------|--------|------|
| 颜色系统 | 40+ | 品牌、深浅色、状态、禁用、特殊场景 |
| 字体系统 | 20+ | 中英文、字号、字重、行高、字间距 |
| 间距系统 | 10 | 组件内、组件间、区块间、页面级 |
| 视觉效果 | 20+ | 阴影、圆角、Z-index、透明度 |
| 动效规范 | 8 | UI 交互、Hero 环境 |
| 组件规范 | 25 | 原子级，覆盖所有基础场景 |

**总计**：130+ 设计定义，确保全站视觉一致性

---

## 🎯 核心特点

✅ **完整性** — 从色值到组件，涵盖视觉设计全链路  
✅ **一致性** — 统一的 Token 体系，避免样式散乱  
✅ **可用性** — CSS 变量 + JSON，开箱即用  
✅ **可维护性** — 中央化管理，一处更新全局生效  
✅ **可扩展性** — Token 结构清晰，易于添加新规范  

---

## 📞 相关链接

- 🏠 [GitHub 仓库](https://github.com/zhao851125-png/sunrise-design-system)
- 📖 [Token 系统详细文档](docs/tokens.md)
- 📖 [原子组件规范](docs/components.md)
- 📖 [首页导航](docs/index.md)

---

## 📅 版本信息

- **当前版本**：v1.0
- **最后更新**：2026.07.01
- **Token 数量**：130+
- **组件数量**：25
- **维护状态**：持续更新中

---

*曦望 Sunrise Design System · 为 AI 推理芯片铸就统一的视觉语言 · Built with 🎨 for precision & consistency*
---

## 📝 版本更新记录

### v1.0 (2026.07.01) — 初始发布版本

**Token 系统**
- ✅ 130+ 个完整 Token 定义
- ✅ 包含：颜色(40+) · 字体(20+) · 间距(10) · 阴影(6) · 动效(8) · 其他(50+)
- ✅ 支持格式：CSS 变量 + JSON 数据
- ✅ 覆盖：深浅色模式、响应式断点、Hero 专属规范

**原子组件规范**
- ✅ 25 个原子组件完整定义
- ✅ 包含：基础展示(7) · 交互输入(8) · 复合功能(10)
- ✅ 每个组件包含：状态定义 · Token 依赖 · CSS 类名 · 代码示例

**文档结构**
- ✅ README.md — 仓库总说明 + 快速开始
- ✅ docs/tokens.md — Token 详细规范
- ✅ docs/components.md — 组件完整规范
- ✅ docs/style.css — CSS 变量文件
- ✅ src/tokens.json — Token JSON 数据

**开发工具**
- ✅ CSS 变量支持
- ✅ JSON 导入支持
- ✅ 完整的使用示例和指南

---

### v1.1 计划中

- 🔜 Figma Token 同步
- 🔜 暗色主题完整规范
- 🔜 响应式组件规范
- 🔜 交互动效示例库