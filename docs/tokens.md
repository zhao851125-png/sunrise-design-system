# 曦望 Sunrise 设计 Token 系统

## 📋 项目简介

**曦望 Sunrise** 是一套完整的设计 Token 系统，为 AI 推理 GPU 芯片及全栈解决方案提供商的官网建立统一的视觉规范。

**品牌定位**：AI 推理 GPU 芯片及全栈解决方案提供商

**视觉隐喻**：推理基础设施 · Intelligence Flow Network · 智能如水电般普惠稳定

**用户记忆目标**：曦望正在让 AI 像水电一样普惠、稳定和便捷

**品牌情感优先级**：
1. 普惠（优先级 1）
2. 稳定（优先级 2）
3. 便捷（优先级 3）
4. 强推理能力（优先级 4）
5. 工程可信度（优先级 4）

---

## 🎨 颜色 Token

### 品牌主色

官网所有交互元素的视觉锚点，主 CTA、高亮数字、Focus 状态均直接引用。

| Token | 色值 | 使用场景 |
|-------|------|---------|
| `--brand-primary` | `#FF820A` | 主 CTA 背景 · 关键数字高亮 · Focus 边框 · 唯一品牌主色（500） |
| `--brand-primary-light` | `#FFB060` | 浅色背景上的橙色标注 · Tag · Badge（300） |
| `--brand-primary-subtle` | `#FFF3E8` | 浅色背景上的橙色填充区块 · 选中态背景（50） |
| `--brand-primary-dark` | `#A85505` | 深色背景下的橙色文字 · 强调文字（700） |

### 通用色

| Token | 色值 | 使用场景 |
|-------|------|---------|
| `--brand-hover` | `#E0700A` | 主 CTA Hover 态（600） |
| `--text-on-primary` | `#111111` | 橙色按钮上的深色文字 |
| `--border-focus` | `#FF820A` | Input · 卡片选中态 Focus 边框 |

### 深色模式（Hero 区 / Product / Technology / Benchmark）

| Token | 色值 | 使用场景 |
|-------|------|---------|
| `--hero-bg` | `#1A1A1A` | Hero 区专属背景（深灰，工程感） |
| `--dark-bg-base` | `#111111` | 深色 Section 底色（Product / Benchmark 等） |
| `--dark-bg-surface` | `#181818` | 深色区卡片 · 子区块背景 |
| `--dark-bg-elevated` | `#222222` | 深色区 Tooltip · 浮层 · Node 静息主色 |
| `--dark-text-display` | `#FFFFFF` | Hero 主标题（Display 级别） |
| `--dark-text-primary` | `#EDE9E4` | 深色区正文 · 副标题（微暖白） |
| `--dark-text-secondary` | `#9B9B9B` | 深色区辅助说明 |
| `--dark-text-tertiary` | `#555555` | 深色区 Placeholder · 禁用态文字 |
| `--dark-border-default` | `#2D2D2D` | 深色区卡片边框 · Node 静息边界 |
| `--dark-border-subtle` | `#1C1C1C` | 深色区内部极淡分隔线 |
| `--node-texture` | `#181818` | Node 内部纹理色 · Platform 底面色 |
| `--hero-cta-border` | `#626670` | Hero 次级 CTA 描边（中性灰，深背景可见） |

### 浅色模式（首页内容区 / Company / Use Cases / Partners / Resources）

| Token | 色值 | 使用场景 |
|-------|------|---------|
| `--light-bg-base` | `#F7F5F2` | 页面主体底色 |
| `--light-bg-surface` | `#FFFFFF` | 卡片 · 内容区块背景 |
| `--light-bg-elevated` | `#F0EDE8` | 浮层 · Tooltip · 下拉菜单 |
| `--light-text-primary` | `#181818` | 浅色区标题 · 正文 |
| `--light-text-secondary` | `#505050` | 浅色区辅助说明 · 副标题 |
| `--light-text-tertiary` | `#9B9B9B` | Placeholder · 禁用态 |
| `--light-border-default` | `#E5E1DA` | 浅色区卡片边框 · 分隔线 |
| `--light-border-subtle` | `#EDE9E4` | 极淡内部分区线 |

### 状态色（功能色，非品牌色）

| Token | 色值 | 用途 |
|-------|------|------|
| `--status-success` | `#34C78A` | 成功状态 |
| `--status-warning` | `#F0A030` | 警告状态 |
| `--status-error` | `#E05555` | 错误状态 |
| `--status-info` | `#4A9EEF` | 信息提示（功能色，待评估） |

### 禁用态与叠加层

| Token | 色值 | 使用场景 |
|-------|------|---------|
| `--light-text-disabled` | `#BBBBBB` | 浅色区禁用态文字 |
| `--light-bg-disabled` | `#F0EDE8` | 浅色区禁用态背景 |
| `--dark-text-disabled` | `#444444` | 深色区禁用态文字 |
| `--dark-bg-disabled` | `#1E1E1E` | 深色区禁用态背景 |
| `--overlay-bg` | `rgba(0, 0, 0, 0.52)` | 遮罩层 |

### 状态色微妙背景与深色应用

| Token | 色值 | 使用场景 |
|-------|------|---------|
| `--status-success-subtle` | `#E6F7F0` | 浅色区成功提示背景 |
| `--status-warning-subtle` | `#FEF3E2` | 浅色区警告提示背景 |
| `--status-error-subtle` | `#FDECEC` | 浅色区错误提示背景 |
| `--status-info-subtle` | `#E8F1FD` | 浅色区信息提示背景 |
| `--status-success-dark` | `#1A4A35` | 深色区成功提示背景 |
| `--status-warning-dark` | `#4A3010` | 深色区警告提示背景 |
| `--status-error-dark` | `#4A1515` | 深色区错误提示背景 |
| `--status-info-dark` | `#0F2C48` | 深色区信息提示背景 |

### 链接与焦点

| Token | 色值 | 使用场景 |
|-------|------|---------|
| `--link-default` | `#FF820A` | 默认链接色 |
| `--link-hover` | `#E0700A` | 链接 Hover 态 |
| `--link-visited` | `#A85505` | 已访问链接 |
| `--dark-border-focus` | `#FF820A` | 深色区 Focus 边框 |
| `--light-border-error` | `#E05555` | 浅色区错误边框 |

---

## 🔤 字体 Token

### 字体家族

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--font-zh` | `'AlibabaPuHuiTi', 'PingFang SC', sans-serif` | 所有中文内容 |
| `--font-en` | `'Inter', -apple-system, sans-serif` | 英文 / 数字 / 代码 |

### 字号层级

| Token | 桌面端 | 移动端 | 使用场景 |
|-------|--------|--------|---------|
| `--font-size-display` | `56px` | `36px` | Hero 主标题 |
| `--font-size-heading` | `32px` | `24px` | 模块标题 / Section Title |
| `--font-size-body` | `16px` | `16px` | 正文段落 |
| `--font-size-desc` | `14px` | `14px` | 描述文案 · 副文本 |
| `--font-size-label` | `12px` | `12px` | 表单 Label · Tag 文字 · Button-sm |
| `--font-size-caption` | `12px` | `12px` | 辅助说明 / 图注 / 标签 |

### 字重

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--font-weight-bold` | `700` | 主标题 · Display · 主 CTA |
| `--font-weight-medium` | `500` | 副标题 · 模块标题 · 数据标注 |
| `--font-weight-regular` | `400` | 正文 · 辅助说明 |

### 行高

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--line-height-display` | `1.1` | Display / Hero 标题（紧凑） |
| `--line-height-heading` | `1.2` | 模块标题 |
| `--line-height-body-zh` | `1.75` | 中文正文（舒适阅读） |
| `--line-height-body-en` | `1.6` | 英文正文 |
| `--line-height-caption` | `1.5` | Caption 辅助说明文字 |

### 字间距（Letter Spacing）

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--tracking-tight` | `−0.02em` | Display 大字号收紧视觉重心 |
| `--tracking-normal` | `0em` | 正文默认，不设 letter-spacing |
| `--tracking-zh-heading` | `+0.02em` | 中文标题，适度松弛提升识别 |
| `--tracking-wide` | `+0.06em` | Caption · 标签 · 全大写英文 |

---

## 📏 间距 Token

基础单位：8px，所有数值天然对齐像素网格。

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--space-0-5` | `4px` | 图标与文字间距 · Badge 内上下边距 |
| `--space-1` | `8px` | Badge 水平内边距 · 行内元素间距 |
| `--space-2` | `16px` | 按钮内边距 · 卡片内边距（紧凑） |
| `--space-3` | `24px` （移动端 20px） | 卡片内边距（标准）· 表单控件间距 |
| `--space-4` | `32px` （移动端 24px） | 模块内区块间距 · 卡片内容分组 |
| `--space-5` ⭐ | `40px` （移动端 28px） | 卡片之间间距 · Section 内子分组 |
| `--space-6` | `48px` （移动端 32px） | 模块内各组间距 |
| `--space-8` | `64px` （移动端 40px） | 页面内 Section 分隔 |
| `--space-12` | `96px` （移动端 48px） | Hero 区上下内边距 |
| `--space-16` | `128px` （移动端 64px） | 大 Section 之间页面级留白 |

---

## 🎭 阴影 Token

### 标准阴影

| Token | 定义 | 使用场景 |
|-------|------|---------|
| `--shadow-sm` | `0 1px 3px rgba(17,17,17,.08), 0 1px 2px rgba(17,17,17,.04)` | 卡片默认态 |
| `--shadow-md` | `0 4px 12px rgba(17,17,17,.08), 0 2px 4px rgba(17,17,17,.04)` | 卡片 Hover · 浮层 |
| `--shadow-lg` | `0 12px 32px rgba(17,17,17,.10), 0 4px 8px rgba(17,17,17,.06)` | 下拉菜单 · Modal |

### 品牌色发光阴影

| Token | 定义 | 使用场景 |
|-------|------|---------|
| `--shadow-brand` | `0 0 0 3px rgba(255,130,10,0.20), 0 0 12px rgba(255,130,10,0.12)` | 卡片 selected 态 · Input focus 外发光 |

### 深色背景专用阴影

| Token | 定义 | 使用场景 |
|-------|------|---------|
| `--shadow-dark-sm` | `0 1px 4px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.04)` | 深色区卡片默认态 · 内容块层级 |
| `--shadow-dark-md` | `0 4px 16px rgba(0,0,0,0.50), 0 0 0 1px rgba(255,255,255,0.06)` | 深色区卡片 Hover · 浮层 · Benchmark 数据卡 |

---

## 🔘 圆角 Token

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--radius-sm` | `4px` | Tag · Badge · 小型标签 |
| `--radius-md` | `6px` | 按钮 · Input · 行内元素 |
| `--radius-lg` | `10px` | 卡片 · 浮层 · 弹框 |
| `--radius-xl` | `16px` | 大卡片 · Modal · 全屏面板 |
| `--radius-full` | `9999px` | 圆形图标 · Pill 标签 · 开关 |

---

## 🎨 图标 Token

### 图标尺寸

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--icon-stroke-width` | `1.5px` | 所有 Outline 图标描边粗细 |
| `--icon-size-sm` | `16px` | 小图标（行内、标签） |
| `--icon-size-md` | `20px` | 中图标（列表、导航） |
| `--icon-size-lg` | `24px` | 大图标（功能区块） |

### 图标颜色使用规范

| 使用场景 | 引用 Token | 色值 |
|---------|----------|------|
| 默认状态 | `--light-text-secondary` | `#505050` |
| 品牌强调状态 | `--brand-primary` | `#FF820A` |
| 深色区块内 | `--dark-text-secondary` | `#9B9B9B` |

---

## ⏱️ 动效 Token

### UI 交互时长（短周期）

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--motion-duration-fast` | `150ms` | 按钮 Hover · 颜色过渡 |
| `--motion-duration-base` | `300ms` | 淡入 · 展开 · Node 激活 |
| `--motion-duration-slow` | `500ms` | 页面区块进入 · Slide Up · Node 激活上限 |
| `--motion-easing-out` | `cubic-bezier(0,0,0.2,1)` | 元素进入（先快后慢） |
| `--motion-easing-in` | `cubic-bezier(0.4,0,1,1)` | 元素退出（先慢后快） |
| `--motion-easing-default` | `ease` | 通用过渡 |

### Hero 环境动效（长周期）

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--motion-duration-flow` | `25s` | Flow 循环（20–30s 取中） |
| `--motion-duration-platform` | `10s` | Platform 呼吸周期（8–12s 取中） |
| `--motion-scale-platform` | `scale(1.01)` | Platform 极微缩放幅度 |

---

## 📐 布局 Token

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--layout-max-width` | `1200px` | 内容最大宽度 |
| `--layout-margin-desktop` | `64px` | 桌面端（≥1024px）页面左右边距 |
| `--layout-margin-tablet` | `32px` | 平板端（768px–1023px）页面左右边距 |
| `--layout-margin-mobile` | `16px` | 移动端（<768px）页面左右边距 |
| `--hero-text-width` | `40%` | Hero 左侧文案区宽度 |
| `--hero-visual-width` | `60%` | Hero 右侧纯视觉区宽度 |
| `--flow-width-min` | `8px` | Flow 线条最小粗细 |
| `--flow-width-max` | `16px` | Flow 线条最大粗细 |

---

## 📊 栅格 Token

### 12 列栅格（桌面端）

| Token | 值 | 
|-------|-----|
| `--layout-columns` | `12` |
| `--layout-gutter` | `24px` |
| `--layout-margin` | `64px` |

### 8 列栅格（平板端）

| Token | 值 |
|-------|-----|
| `--layout-columns-tablet` | `8` |
| `--layout-gutter-tablet` | `20px` |
| `--layout-margin-tablet` | `32px` |

### 4 列栅格（H5 移动端）

| Token | 值 |
|-------|-----|
| `--grid-columns-mobile` | `4` |
| `--grid-gutter-mobile` | `16px` |
| `--layout-margin-mobile` | `16px` |

---

## 📱 断点 Token

| Token | 值 | 设备 |
|-------|-----|------|
| `--bp-sm` | `375px` | 手机 |
| `--bp-md` | `768px` | 平板 |
| `--bp-lg` | `1024px` | 桌面小屏 |
| `--bp-xl` | `1440px` | 主设计基准 ★ |
| `--bp-2xl` | `1920px` | 超宽屏 |

---

## 🔲 Z-index 层叠体系

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--z-base` | `0` | 普通内容 |
| `--z-raised` | `10` | 卡片 Hover |
| `--z-dropdown` | `100` | 导航下拉 |
| `--z-sticky` | `200` | Navbar · 吸顶元素 |
| `--z-overlay` | `300` | Modal 遮罩层 |
| `--z-modal` | `400` | Modal 内容 |
| `--z-toast` | `500` | Toast |
| `--z-tooltip` | `600` | Tooltip |

---

## 🎯 边框 · 透明度 Token

### 边框粗细

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--border-width-default` | `1px` | 卡片边框 · Input 边框 |
| `--border-width-thick` | `2px` | Focus Ring · 选中态边框 |

### 透明度

| Token | 值 | 使用场景 |
|-------|-----|---------|
| `--opacity-disabled` | `0.4` | 禁用态整体透明度 |
| `--opacity-hover` | `0.08` | Hover 叠加层透明度 |
| `--opacity-pressed` | `0.12` | Active 按下态叠加层透明度 |

---

## 📄 页面颜色分配

| 页面 | 模式 | 背景 Token | 设计意图 |
|------|------|----------|---------|
| 首页 Hero 区 | 深色 ✅ | `--hero-bg #1A1A1A` | 品牌一致性 |
| 首页内容区 | 浅色 | `--light-bg-base #F7F5F2` | 可读性 |
| Company / Use Cases | 浅色 | `--light-bg-base #F7F5F2` | 开放感 |
| Product / Technology | 深色 | `--dark-bg-base #111111` | 工程感 |

---

## 🌟 Hero 专项 Token

### Intelligence Flow 渐变

- 起点：`#FF820A` · 品牌橙
- 中点：`#FF9A3C` · 亮暖橙
- 终点：`#EDE9E4` · 微暖白

### Node 状态

| 状态 | 背景 | 边框 | 点缀 |
|------|------|------|------|
| 静息 | `#222222` | `#2D2D2D` | `#2D2D2D` |
| 激活 A（70%） | `#222222` | `#FF820A` | `#FF820A` |
| 激活 B（30%） | `#222222` | `rgba(255,255,255,0.6)` | `#FFFFFF` |

---

## 💻 开发者使用示例

```css
/* 颜色使用 */
.button-primary {
  background: var(--brand-primary);
  color: var(--text-on-primary);
}

/* 字体和间距 */
h1 {
  font-family: var(--font-zh);
  font-size: var(--font-size-heading);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-heading);
}

/* 卡片样式 */
.card {
  background: var(--light-bg-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--space-3);
}

/* 响应式 */
@media (max-width: 768px) {
  .card {
    padding: var(--space-2);
  }
}
```

---

## 📝 更新历史

| 版本 | 日期 | 更新内容 |
|------|------|---------|
| v2.0 | 2026.06.30 | 完整重构，新增 14+ 个 Token 类别，130+ 个定义 |

**最后更新**：2026年6月30日

---

*曦望 Sunrise · Design Token System · 为 AI 推理芯片铸就统一的视觉语言*