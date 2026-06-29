# 🌅 Sunrise Design System

曦望设计系统 - 完整的设计 Token 规范文档

---

## 📖 查看文档

**直接在本仓库查看完整的 Token 文档**，无需额外部署。

在仓库首页向下滚动即可看到所有 Token 的详细定义、使用场景和代码示例。

---

## 🎨 包含内容

- 🎨 **颜色 Token** — 品牌色、深浅色模式、状态色
- ✍️ **字体 Token** — 字体家族、字号、字重、行高  
- 📏 **间距 Token** — 完整的间距系统（8px 基础）
- ✨ **其他 Token** — 阴影、图标、布局、动效

---

## 💻 开发者使用

所有 Token 都可以直接在项目中引用：

```css
.button {
  background-color: var(--color-brand-primary);
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
}
```

---

## 🤝 协作方式

1. **提出需求** — 新增或修改 Token
2. **沟通确认** — 讨论具体的值和使用场景
3. **文档更新** — 将确认后的 Token 更新到文档
4. **发布生效** — 开发和设计同学即时看到最新规范

---

## 📝 更新历史

- **v1.0** (2026.06.30) - 初始版本，完整的 Token 定义

---

## 🎨 完整 Token 定义

### 颜色 Token

#### 品牌色

| Token | 值 | 使用场景 |
|---|---|---|
| `--color-brand-primary` | `#FF820A` | 主 CTA 按钮背景、关键数字高亮、Focus Ring、边框强调 |
| `--color-brand-primary-hover` | `#E0700A` | 主 CTA 按钮 Hover 态 |
| `--color-brand-secondary` | `#3B82C4` | 次级 CTA 描边、链接文字、技术说明标注 |

#### 深色模式

| Token | 值 | 使用场景 |
|---|---|---|
| `--color-dark-bg-base` | `#0D1018` | Hero 区底色、深色 Section 背景 |
| `--color-dark-bg-surface` | `#141923` | 深色区块内的卡片、子区块背景 |
| `--color-dark-bg-elevated` | `#1C2333` | 深色区块内的 Tooltip、浮层 |
| `--color-dark-text-display` | `#FFFFFF` | Hero 主标题 |
| `--color-dark-text-primary` | `#EDE9E4` | 深色区域正文、副标题 |
| `--color-dark-text-secondary` | `#9CA3AF` | 深色区域辅助说明 |
| `--color-dark-border-default` | `#252D3D` | 深色区域卡片边框、分隔线 |
| `--color-dark-border-subtle` | `#1A2030` | 深色区域内部极淡分区线 |

#### 浅色模式

| Token | 值 | 使用场景 |
|---|---|---|
| `--color-light-bg-base` | `#F7F5F2` | 页面主体底色 |
| `--color-light-bg-surface` | `#FFFFFF` | 卡片、内容区块背景 |
| `--color-light-bg-elevated` | `#F0EDE8` | 浮层、Tooltip、下拉菜单背景 |
| `--color-light-text-primary` | `#161A22` | 浅色区域标题、正文 |
| `--color-light-text-secondary` | `#4B5563` | 浅色区域辅助说明、副标题 |
| `--color-light-text-tertiary` | `#9CA3AF` | Placeholder、禁用态 |
| `--color-light-border-default` | `#E5E1DA` | 浅色区域卡片边框、分隔线 |
| `--color-light-border-subtle` | `#EDE9E4` | 浅色区域内部极淡分区线 |

#### 状态色

| Token | 值 | 使用场景 |
|---|---|---|
| `--color-status-success` | `#34C78A` | 部署成功、SLA 稳定、芯片状态正常 |
| `--color-status-warning` | `#F0A030` | 性能告警、容量预警 |
| `--color-status-error` | `#E05555` | 错误状态 |
| `--color-status-info` | `#4A9EEF` | 提示说明、文档链接 |

---

### 字体 Token

#### 字体家族

| Token | 值 |
|---|---|
| `--font-sans-zh` | 'Source Han Sans SC', 'PingFang SC', sans-serif |
| `--font-sans-en` | 'Inter', -apple-system, sans-serif |

#### 字号

| Token | 值 | 使用场景 |
|---|---|---|
| `--font-size-display` | 56px | Hero 主标题 |
| `--font-size-heading` | 32px | 模块标题 |
| `--font-size-body` | 17px | 正文 |
| `--font-size-caption` | 13px | 辅助说明、图注 |

#### 字重

| Token | 值 |
|---|---|
| `--font-weight-bold` | 700 |
| `--font-weight-medium` | 500 |
| `--font-weight-regular` | 400 |

---

### 间距 Token

| Token | 值 | 使用场景 |
|---|---|---|
| `--space-0-5` | 4px | 图标内边距、Tag 内上下边距 |
| `--space-1` | 8px | 行内元素间距、Badge 水平间距 |
| `--space-2` | 16px | 按钮内边距、卡片内边距（紧凑） |
| `--space-3` | 24px | 卡片内边距（标准）、表单控件间距 |
| `--space-4` | 32px | 模块内部区块间距 |
| `--space-6` | 48px | 模块内各组之间间距 |
| `--space-8` | 64px | 页面内 Section 分隔 |
| `--space-12` | 96px | Hero 区上下内边距 |
| `--space-16` | 128px | 大 Section 之间的间距 |

---

### 其他 Token

#### 阴影

| Token | 使用场景 |
|---|---|
| `--shadow-sm` | 卡片默认态 |
| `--shadow-md` | 卡片 Hover、浮层 |
| `--shadow-lg` | 下拉菜单、Modal |

#### 图标

| Token | 值 | 使用场景 |
|---|---|---|
| `--icon-stroke-width` | 1.5px | Outline 图标描边粗细 |
| `--icon-size-sm` | 16px | 小图标（行内、标签） |
| `--icon-size-md` | 20px | 中图标（列表、导航） |
| `--icon-size-lg` | 24px | 大图标（功能区块） |

#### 布局

| Token | 值 |
|---|---|
| `--layout-max-width` | 1200px |
| `--layout-gutter` | 24px |
| `--layout-margin-desktop` | 64px |

#### 动效

| Token | 值 | 使用场景 |
|---|---|---|
| `--motion-duration-fast` | 150ms | 按钮 Hover、颜色过渡 |
| `--motion-duration-base` | 300ms | 淡入、展开 |
| `--motion-duration-slow` | 500ms | 页面区块进入、Slide Up |

---

*最后更新：2026.06.30 | Sunrise Design System v1.0*
