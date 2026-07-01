# 🌅 Sunrise Design System

曦望设计系统 · 完整的设计规范与原子组件库

---

## 📚 文档导航

### 🎨 [Token 系统规范](../README.md)
**14+ 个 Token 类别 · 130+ 个设计定义**

包含：
- 颜色 Token（品牌色、深浅色模式、状态色）
- 字体 Token（字族、字号、字重、行高）
- 间距 Token（4px ~ 128px 完整系统）
- 阴影、圆角、图标、动效、布局、Z-index 等

👉 [查看完整 Token 文档](../README.md)

---

### 🧩 [原子组件规范](./components.md)
**25 个原子组件 · 完整的使用指南**

包含：
- **基础展示**：排版、图标、分割线、标签、链接、数据、图片
- **交互输入**：按钮、输入框、下拉选择、Tab、开关、复选框、单选框
- **复合功能**：卡片、表格、折叠面板、进度条、翻页、导航、弹窗、提示

每个组件都包含：状态定义、Token 依赖、代码示例、使用场景

👉 [查看完整组件规范](./components.md)

---

## 💻 开发者快速开始

### CSS 变量使用
```css
/* 方式 1：引入 CSS 变量文件 */
@import 'path/to/docs/style.css';

/* 方式 2：使用 Token */
.button {
  background: var(--brand-primary);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  color: var(--text-on-primary);
}
```

### JSON Token 导入
```javascript
// 方式 1：直接导入 JSON
import tokens from './src/tokens.json';

// 方式 2：访问 Token 值
const primaryColor = tokens.color.brand.primary; // #FF820A
const spacing = tokens.spacing['3']; // 24px
const shadowMd = tokens.shadow.md; // 完整阴影值
```

---

## 📋 文件结构

```
📦 sunrise-design-system/
├── 📄 README.md              ← Token 系统完整文档
├── 📁 docs/
│   ├── components.md         ← 原子组件规范
│   ├── style.css            ← CSS 变量定义文件
│   └── index.md             ← 你在这里
├── 📁 src/
│   └── tokens.json          ← Token JSON 数据文件
└── package.json
```

---

## 🎯 使用场景

### 设计师
- 📖 查看 [Token 系统](../README.md)：了解所有设计规范
- 📖 查看 [组件规范](./components.md)：参考标准组件定义
- 🎨 使用 Token 值进行设计稿标注

### 开发者
- 📖 查看 [CSS 变量](./style.css)：直接在项目中使用
- 📖 查看 [Token JSON](../src/tokens.json)：程序化使用 Token
- 📖 查看 [组件规范](./components.md)：按规范实现组件

### 产品经理
- 📖 查看 [Token 系统](../README.md)：理解设计一致性
- 📖 查看 [组件规范](./components.md)：了解可用的交互模式

---

## ✨ 特点

✅ **完整的设计规范** — 130+ Token 定义，覆盖颜色、字体、间距、动效等全方位  
✅ **标准化组件** — 25 个原子组件，每个都有完整的状态定义和使用示例  
✅ **多种格式** — Markdown 文档 + JSON 数据 + CSS 变量，满足不同使用需求  
✅ **即插即用** — Token 可直接在代码中引用，无需额外配置  

---

## 📅 版本信息

- **当前版本**：v1.0
- **最后更新**：2026.07.01
- **组件数量**：25 个原子组件
- **Token 数量**：130+ 个设计定义

---

## 🔗 相关链接

- 📖 [完整 Token 文档](../README.md)
- 📖 [原子组件规范](./components.md)
- 💾 [CSS 变量文件](./style.css)
- 💾 [Token JSON 数据](../src/tokens.json)
- 🏠 [GitHub 仓库](https://github.com/zhao851125-png/sunrise-design-system)

---

*曦望 Sunrise Design System · 为 AI 推理芯片铸就统一的视觉语言*