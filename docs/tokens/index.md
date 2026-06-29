# Token 文档

欢迎来到 Sunrise Design System 的 Token 文档。这里汇集了所有的设计 Token，包括颜色、字体、间距、阴影等。

## 📚 快速导航

### [🎨 颜色 Token](/tokens/colors)
包含品牌色、深浅色模式、状态色等完整的颜色系统。
- 品牌色：主色 `#FF820A`、次色 `#3B82C4`
- 深色模式：适用于 Hero 区和深色 Section
- 浅色模式：页面主体和内容区
- 状态色：成功、警告、错误、信息

### [✍️ 字体 Token](/tokens/typography)
字体家族、字号、字重和行高的完整规范。
- 字体家族：中英文分离
- 字号：Display、Heading、Body、Caption
- 字重：Bold、Medium、Regular
- 行高：根据语言和用途优化

### [📏 间距 Token](/tokens/spacing)
从 4px 到 128px 的完整间距系统。
- 基础间距：8px 倍数
- 应用场景：内边距、外边距、元素间距

### [✨ 其他 Token](/tokens/others)
阴影、图标、布局、动效等补充 Token。
- 阴影系统：三个层级（SM、MD、LG）
- 图标系统：四个尺寸（SM、MD、LG）
- 布局系统：12 列栅格
- 动效系统：三个时长和缓动函数

---

## 🚀 快速开始

### 开发者使用

在你的项目中引入 CSS 变量：

\`\`\`html
<link rel="stylesheet" href="path/to/tokens.css">
\`\`\`

然后直接使用：

\`\`\`css
.button {
  background-color: var(--color-brand-primary);
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-size-body);
  border-radius: 6px;
  transition: background-color var(--motion-duration-fast);
}

.button:hover {
  background-color: var(--color-brand-primary-hover);
}
\`\`\`

### 产品设计师使用

在 Figma 或设计工具中：

1. 参考对应的 Token 名称（如 `--color-brand-primary`）
2. 查看颜色值和使用场景
3. 确保设计与规范保持一致

---

## 📋 文档信息

| 项目 | 值 |
|---|---|
| 版本 | v1.0 |
| 更新日期 | 2026.06.26 |
| 用途 | 底层设计系统，直接对接前端变量 |
| 维护者 | Sunrise Design Team |

---

## 💡 设计原则

### 8px 基础
所有间距都基于 8px，确保视觉节奏的一致性。

### 色彩对比度
所有文字色与背景色的组合都符合 WCAG AA 级以上的对比度要求。

### 动效约束
使用受限的动效时长和缓动函数，避免过度动画。

### 语言感知
中英文使用不同的字体和行高，提升可读性。

---

## 🔄 如何更新

如果你需要：
- **添加新的 Token** — 在对应的 Token 页面添加
- **修改现有 Token** — 直接编辑对应的值
- **查看使用示例** — 参考各章节的代码示例

所有更改都会自动体现在这个网站上。

---

## 📞 反馈与建议

如果你在使用过程中有任何问题或建议，欢迎通过以下方式反馈：

- 📧 发送邮件给设计团队
- 💬 在团队内部讨论
- 📝 提交 Issue 或 Pull Request

---

*最后更新：2026.06.26 | Sunrise Design System v1.0*
