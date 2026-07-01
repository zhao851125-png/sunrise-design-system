# 曦望设计系统 · 原子组件规范 v1

> Sunrise Design System · Atomic Components  
> v1 · 2026/07/01

---

## 目录

- [01 排版 Typography](#01-排版-typography)
- [02 图标 Icon](#02-图标-icon)
- [03 分割线 Divider](#03-分割线-divider)
- [04 标签 Tag / Badge](#04-标签--badge)
- [05 链接 Link](#05-链接-link)
- [06 数据展示 Stat](#06-数据展示-stat)
- [07 图片 Image](#07-图片-image)
- [08 按钮 Button](#08-按钮-button)
- [08b 按钮组 Button Group](#08b-按钮组-button-group)
- [09 输入框 Input](#09-输入框-input)
- [10 下拉选择 Select](#10-下拉选择-select)
- [11 Tab 切换 Tab](#11-tab-切换-tab)
- [12 开关 Switch](#12-开关-switch)
- [13 复选框 Checkbox](#13-复选框-checkbox)
- [14 单选框 Radio](#14-单选框-radio)
- [15 卡片 Card](#15-卡片-card)
- [16 表格 Table](#16-表格-table)
- [17 折叠面板 Accordion](#17-折叠面板-accordion)
- [18 进度条 Progress Bar](#18-进度条-progress-bar)
- [19 翻页器 Pagination](#19-翻页器-pagination)
- [20 面包屑 Breadcrumb](#20-面包屑-breadcrumb)
- [21 弹窗 Modal](#21-弹窗-modal)
- [22 Toast / Snackbar](#22-toast--snackbar)
- [23 气泡提示 Tooltip](#23-气泡提示-tooltip)
- [24 导航栏 Navigation](#24-导航栏-navigation)

---

## 01 排版 Typography

### 用途

排版是视觉系统中复用频率最高的基础规范。官网每一个页面的所有文字都必须从这套字阶中取值，统一字号、字重、行高与使用场景后，开发与设计不再各自定义，整站文字层级一眼清晰。

### 中文字阶 · AlibabaPuHuiTi

| Token | 字号 | 字重 | 行高 | 字间距 | 使用场景 |
|-------|------|------|------|--------|----------|
| --font-size-display | 56px | 700 | 1.1 | -0.02em | Hero 主标题 |
| --font-size-heading | 32px | 700 | 1.2 | 0.02em | 各区块大标题 · H1 |
| H2 (24px) | 24px | 500 | 1.2 | 0.02em | 副标题 · H2 · 卡片标题 |
| --font-size-body | 16px | 400 | 1.75 | 0 | 正文段落 |
| --font-size-desc | 14px | 400 | 1.75 | 0 | 描述文案 · 卡片说明 |
| --font-size-caption | 12px | 400 | 1.5 | 0 | 辅助说明 · 图注 · 时间戳 |
| --font-size-label | 12px | 500 | 1.5 | 0 | 表单 Label · Tag · Button-sm |

### 英文 / 数字字阶 · Inter

| Token | 字号 | 字重 | 行高 | 字间距 | 使用场景 |
|-------|------|------|------|--------|----------|
| --font-size-display | 56px | 700 | 1.1 | -0.02em | Hero 英文主标题 |
| --font-size-body | 16px | 400 | 1.6 | 0 | 英文正文段落 |
| --tracking-wide | 12px | 700 | - | 0.06em | 大写英文标签 · Section 标识 |

### 响应式字阶对照（H5 移动端）

| PC 端 | H5 移动端 |
|-------|----------|
| Display · 56px | display-mobile · 36px |
| Heading · 32px | heading-mobile · 24px |
| Body · 16px | body · 16px（不变） |
| Desc / Caption / Label | 不变 |

### CSS Token 参考

```css
:root {
  --font-zh: 'Source Han Sans SC', 'PingFang SC', sans-serif;
  --font-en: 'Inter', -apple-system, sans-serif;
  --font-size-display: 56px;
  --font-size-heading: 32px;
  --font-size-body: 16px;
  --font-size-desc: 14px;
  --font-size-caption: 12px;
  --font-size-label: 12px;
  --font-weight-bold: 700;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
  --line-height-display: 1.1;
  --line-height-heading: 1.2;
  --line-height-body-zh: 1.75;
  --line-height-body-en: 1.6;
  --line-height-caption: 1.5;
  --tracking-tight: -0.02em;
  --tracking-normal: 0em;
  --tracking-zh-heading: 0.02em;
  --tracking-wide: 0.06em;
}
```

---

## 02 图标 Icon

### 用途

图标贯穿导航、按钮、状态提示、功能入口等全部交互场景。颜色与尺寸不统一会直接破坏视觉一致性，通过 Token 约定三档尺寸和三种颜色状态，确保所有图标用法有据可依。

### 三档尺寸规范

| 尺寸 | 推荐用途 | 说明 |
|------|----------|------|
| **16px** | 行内 · Label 内 | 文字行内图标，最小尺寸 |
| **20px ★** | 按钮 · 导航 · 列表 | 主用尺寸，官网标准配置 |
| **24px** | 强调 · 空状态 · 大入口 | 特性卡片，功能强调 |

### 图标风格规范

- **风格**：线性图标（Stroke 风格）
- **Stroke Width**：1.5px
- **限制**：不使用填充图标，保持与品牌「工程感 · 克制」调性一致

### 浅色区图标颜色状态

| 状态 | Token | 值 | 说明 |
|------|--------|--------|------|
| Default | --light-text-secondary | #505050 | 未激活状态 |
| Brand | --brand-primary | #FF820A | 品牌强调色 |
| Primary | --light-text-primary | #181818 | 主文本色 |
| Disabled | --light-text-disabled | #BBBBBB | 禁用态 |

### 深色区图标颜色状态

| 状态 | Token | 值 | 说明 |
|------|--------|--------|------|
| Default | --dark-text-secondary | #9B9B9B | 未激活状态 |
| Brand | --brand-primary | #FF820A | 品牌强调色 |
| Primary | --dark-text-primary | #EDE9E4 | 主文本色 |
| Disabled | --dark-text-disabled | #444444 | 禁用态 |

### 图文间距规范

| 场景 | 间距 | 图标尺寸 | 使用场景 |
|------|------|----------|----------|
| 行内图文 | gap: 4px | 16px | 按钮内、标签内、时间戳 |
| 菜单 / 列表 | gap: 8px | 20px | 导航、菜单项、列表行 |
| 特性卡片 | gap: 16px | 24px | 卡片内图文、空状态 |

### 基础图标库分类

#### 方向导航
- chevron-up / chevron-down / chevron-left / chevron-right
- arrow-up / arrow-down / arrow-left / arrow-right
- arrow-left-lg / arrow-right-lg
- external-link

#### 操作
- plus · close · check · search · edit · copy · download · upload · trash · filter · menu

#### 状态反馈
- check-circle · x-circle · warning · info-circle
- trend-up · trend-down · loading · dot-status

#### 场景功能
- home · user · users · bell · shield · lightning

---

## 03 分割线 Divider

### 用途

分割线用于视觉上区分不同内容区块，分为水平线、竖线两种，支持实线、虚线、带文本三种变体。

### 水平分割线

```html
<!-- 标准分割线 -->
<div class="divider-h"></div>

<!-- 淡化版本 -->
<div class="divider-h subtle"></div>

<!-- 品牌色分割线 -->
<div class="divider-h brand"></div>

<!-- 虚线分割线 -->
<div class="divider-h dashed"></div>

<!-- 分割线 + 文本 -->
<div class="divider-with-text">
  <span>更多内容</span>
</div>
```

### CSS Token

| Token | 值 | 用途 |
|-------|--------|------|
| --light-border-default | #E5E1DA | 标准分割线 |
| --light-border-subtle | #EDE9E4 | 淡化分割线 |
| --brand-primary | #FF820A | 品牌色分割线（30% 透明） |

---

## 04 标签 / Badge

### 用途

标签用于分类展示、状态标记、筛选条件等场景。Badge 用于数字徽章、未读消息数等小型数值提示。

### Tag 组件

#### 变体

| 变体 | 背景 | 文字色 | 边框 | 使用场景 |
|------|------|--------|------|----------|
| Default | --light-bg-elevated | --light-text-secondary | --light-border-default | 普通标签 |
| Brand | --brand-primary-subtle | --brand-primary | brand 半透 | 推荐、品牌标记 |
| Success | --status-success-subtle | --status-success | success 半透 | 成功状态 |
| Warning | --status-warning-subtle | #C0820A | warning 半透 | 警告状态 |
| Error | --status-error-subtle | --status-error | error 半透 | 错误状态 |
| Info | --status-info-subtle | #2A7EC0 | info 半透 | 信息提示 |

#### 尺寸

| 尺寸 | 字号 | Padding | 应用 |
|------|------|---------|------|
| Default | 12px | 3px 10px | 标准标签 |
| Small · sm | 10px | 2px 7px | 卡片标签、列表标签 |

#### CSS 类名

```html
<span class="tag tag-default">Default</span>
<span class="tag tag-brand">Brand</span>
<span class="tag tag-success">Success</span>
<span class="tag tag-warning">Warning</span>
<span class="tag tag-error">Error</span>
<span class="tag tag-info">Info</span>

<!-- 深色区 -->
<span class="tag tag-dark-default">Default Dark</span>
<span class="tag tag-dark-brand">Brand Dark</span>

<!-- 小号 -->
<span class="tag tag-sm">Small Tag</span>

<!-- 可关闭标签 -->
<span class="tag tag-brand">
  标签名
  <i class="tag-close">×</i>
</span>
```

### Badge 组件

#### 变体

| 变体 | 背景 | 用途 |
|------|------|------|
| Brand Badge | --brand-primary | 主要徽章 |
| Error Badge | --status-error | 错误提示 |
| Dot Badge | - | 状态圆点 |

#### CSS 类名

```html
<!-- 数字徽章 -->
<div class="badge badge-brand">5</div>
<div class="badge badge-error">!</div>

<!-- 圆点徽章 -->
<div class="badge badge-dot badge-brand"></div>
```

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --brand-primary-subtle | #FFF3E8 | Brand Tag 背景 |
| --status-success-subtle | #E6F7F0 | Success Tag 背景 |
| --status-warning-subtle | #FEF3E2 | Warning Tag 背景 |
| --status-error-subtle | #FDECEC | Error Tag 背景 |
| --status-info-subtle | #E8F1FD | Info Tag 背景 |
| --radius-sm | 4px | Tag 圆角 |
| --radius-full | 9999px | Badge 圆角 |

---

## 05 链接 Link

### 用途

链接用于页面导航、外链跳转、相关内容引导等交互场景。支持文字链、图标链、禁用链四种变体。

### 链接状态

| 状态 | 颜色 | Token | 说明 |
|------|------|--------|------|
| Default | #FF820A | --link-default | 默认链接色 |
| Hover | #E0700A | --link-hover | 悬停加深 |
| Visited | #A85505 | --link-visited | 已访问链接 |
| Disabled | #BBBBBB | --light-text-disabled | 禁用链接 |

### CSS 类名与示例

```html
<!-- 标准文字链 -->
<a class="link">查看详情</a>

<!-- 无下划线 -->
<a class="link link-no-underline">了解更多</a>

<!-- 带箭头 -->
<a class="link link-with-arrow">继续阅读</a>

<!-- 已访问 -->
<a class="link link-visited">已访问的链接</a>

<!-- 禁用链接 -->
<a class="link link-disabled">暂不可用</a>

<!-- 深色区链接 -->
<a class="link link-dark">深色背景链接</a>
```

### CSS Token

| Token | 值 | 用途 |
|-------|--------|------|
| --link-default | #FF820A | 链接默认色 |
| --link-hover | #E0700A | 链接悬停色 |
| --link-visited | #A85505 | 已访问链接色 |
| --motion-duration-fast | 150ms | 过渡动画时长 |

---

## 06 数据展示 Stat

### 用途

数据展示组件用于关键数据、统计指标、性能对比等信息的突出呈现，常见于产品页面的「技术指标」「基准测试」等区块。

### 数据卡片变体

| 变体 | 背景 | 边框 | 用途 |
|------|------|------|------|
| Light | --light-bg-surface | --light-border-default | 浅色区标准卡片 |
| Dark | --dark-bg-elevated | --dark-border-default | 深色区标准卡片 |

### 数据卡片结构

```html
<div class="stat-card stat-card-light">
  <div class="stat-label">峰值算力</div>
  <div class="stat-number">
    <span class="stat-brand-number">320</span>
    <span class="stat-unit stat-unit-brand">TFLOPS</span>
  </div>
  <div class="stat-desc">相比上代提升 38%</div>
  <div class="stat-trend stat-trend-up">↑ 3.2× vs 业界均值</div>
</div>
```

### CSS Token

| Token | 值 | 用途 |
|-------|--------|------|
| --stat-label-color | --light-text-secondary | 标签文字色 |
| --stat-number-color | --light-text-primary | 数字主色 |
| --stat-brand-color | --brand-primary | 强调数字色 |
| --status-success | #34C78A | 上升趋势色 |
| --status-error | #E05555 | 下降趋势色 |

---

## 07 图片 Image

### 用途

图片组件提供响应式图像容器、占位符、加载动画、不同宽高比支持等功能，用于产品展示、技术演示、新闻配图等内容承载。

### 宽高比规范

| 比例 | 说明 | 应用场景 |
|------|------|----------|
| 16:9 | 标准宽屏 | 产品演示视频、Hero 区背景 |
| 4:3 | 标准方形 | 产品配图、功能说明图 |
| 1:1 | 正方形 | 头像、logo、小图标容器 |
| 3:2 | 3:2 比例 | 新闻配图、卡片图片 |
| 21:9 | 超宽屏 | 全屏 banner 背景 |

### CSS 类名与示例

```html
<!-- 16:9 比例容器 -->
<div class="img-container img-ratio-16-9">
  <img src="demo.jpg" alt="产品演示" />
</div>

<!-- 占位符状态 -->
<div class="img-container img-skeleton">
  <div class="img-placeholder">
    <svg><!-- 骨架屏加载动画 --></svg>
  </div>
</div>
```

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --radius-xl | 16px | 图片圆角 |
| --light-bg-elevated | #F0EDE8 | 占位符背景 |
| --motion-easing-out | cubic-bezier(0.2,0,0,1) | 缩放动画 |

---

## 08 按钮 Button

### 用途

按钮是官网最高频的交互触发元素，从 Hero CTA 到表单提交贯穿所有页面。四种变体（Primary / Secondary / Ghost / Danger）分别对应不同优先级的操作，统一圆角、字重与过渡时长确保整站交互反馈一致。

### 变体

| 变体 | 背景 | 文字色 | 边框 | 使用场景 |
|------|------|--------|------|----------|
| Primary | --brand-primary | --text-on-primary | 无 | 主要操作 · CTA |
| Secondary | transparent | --light-text-primary | --light-border-default | 次要操作 |
| Ghost | transparent | --brand-primary | brand 半透 | 强调链接 · 展开 |
| Danger | transparent | --status-error | error 半透 | 删除、警告操作 |
| Disabled | --light-bg-disabled | --light-text-disabled | --light-border-default | 禁用状态 |

### 尺寸

| 尺寸 | 字号 | Padding | 应用 |
|------|------|---------|------|
| Small · sm | 12px | 6px 16px | 小号按钮 |
| Medium · md | 14px | 10px 24px | **标准大小（推荐）** |
| Large · lg | 16px | 14px 32px | 大号强调按钮 |

### 状态

| 状态 | 描述 | CSS 类 |
|------|------|--------|
| Default | 初始状态 | `.btn` |
| Hover | 悬停时加亮 | `.btn:hover` |
| Active | 点击时缩小 | `.btn:active` |
| Focus | 获得焦点 | `.btn:focus-visible` |
| Disabled | 禁用不可点击 | `disabled` |

### 特殊类型

#### 图标按钮

```html
<!-- 图标 + 文字 -->
<button class="btn btn-primary">
  <svg><!-- icon --></svg>
  申请 Demo
</button>

<!-- 纯图标按钮 -->
<button class="btn btn-secondary" style="padding: 9px;">
  <svg><!-- icon --></svg>
</button>

<!-- Loading 状态 -->
<button class="btn btn-primary" disabled>
  <svg style="animation: spin 1s linear infinite;"><!-- loading --></svg>
  提交中
</button>
```

### CSS 类名

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-danger">Danger</button>

<!-- 深色区 -->
<button class="btn btn-dark-secondary">Dark Secondary</button>
<button class="btn btn-dark-ghost">Dark Ghost</button>
```

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --brand-primary | #FF820A | Primary 按钮背景 |
| --brand-hover | #E0700A | Primary 按钮 Hover 状态 |
| --brand-active | #C05E08 | Primary 按钮 Active 状态 |
| --text-on-primary | #111111 | Primary 按钮文字 |
| --radius-md | 6px | 按钮圆角 |
| --font-weight-bold | 700 | Primary 字重 |
| --font-weight-medium | 500 | Secondary/Ghost 字重 |
| --motion-duration-fast | 150ms | 过渡动画 |
| --shadow-brand | 品牌光晕 | Focus 状态光晕 |

---

## 08b 按钮组 Button Group

### 用途

按钮组用于 Hero 区主 CTA 与次 CTA 并排的场景。通过组合规则约束间距、对齐与响应式换行行为，保证视觉层级清晰：主按钮承担转化，次按钮提供低摩擦探索路径。

### 推荐组合（深色背景 · Hero 区）

#### 组合 A：Primary + Ghost（推荐）

```html
<div style="display: flex; gap: 12px; align-items: center;">
  <button class="btn btn-primary">立即申请 Demo</button>
  <button class="btn" style="border: 1.5px solid rgba(255,255,255,0.2); background: transparent;">
    了解产品
  </button>
</div>
```

**规格**：
- 间距：gap 12px
- 主按钮 padding：13px 28px（视觉高度 46px）
- 次按钮 padding：12px 28px（视觉等高，边框补偿）

#### 组合 B：Primary + Text Link

```html
<div style="display: flex; gap: 16px; align-items: center;">
  <button class="btn btn-primary">立即申请 Demo</button>
  <a style="display: flex; align-items: center; gap: 6px;">
    查看案例
    <svg><!-- arrow --></svg>
  </a>
</div>
```

**规格**：
- 间距：gap 16px（视觉更宽松）
- 文字链无 padding，与主按钮视觉中线对齐

#### 组合 C：双 Solid（慎用）

仅在无明确主次关系时使用，易导致层级不清晰。

### 浅色背景组合（内容页 CTA）

```html
<!-- 变体 A：Primary + Outline -->
<div style="display: flex; gap: 12px;">
  <button class="btn btn-primary">立即申请 Demo</button>
  <button class="btn btn-secondary">了解产品</button>
</div>

<!-- 变体 B：Primary + Text Link -->
<div style="display: flex; gap: 16px;">
  <button class="btn btn-primary">立即申请 Demo</button>
  <a>查看案例 →</a>
</div>
```

### 等宽规则

按钮组中的**实体按钮**（有背景或边框）需等宽平分容器，提高移动端可点击区域。文字链因无背景，不参与等宽。

#### 场景一：Hero CTA

```html
<!-- 桌面端（≥768px）：横排等宽 -->
<div style="display: flex; gap: 12px;">
  <button class="btn btn-primary" style="flex: 1;">立即申请 Demo</button>
  <button class="btn" style="border: 1.5px solid rgba(255,255,255,0.2); background: transparent; flex: 1;">
    了解产品
  </button>
</div>

<!-- 移动端（<768px）：竖排全宽 -->
<div style="display: flex; flex-direction: column; gap: 12px;">
  <button class="btn btn-primary" style="width: 100%;">立即申请 Demo</button>
  <button class="btn" style="border: 1.5px solid rgba(255,255,255,0.2); background: transparent; width: 100%;">
    了解产品
  </button>
</div>
```

#### 场景二：Section CTA（带文字链例外）

```html
<!-- 桌面端：实体按钮等宽，文字链不参与 -->
<div style="display: flex; gap: 12px; align-items: center;">
  <button class="btn btn-primary" style="flex: 1;">立即申请 Demo</button>
  <button class="btn btn-secondary" style="flex: 1;">了解产品</button>
  <a>查看案例 →</a>
  <!-- 注：文字链无背景无边框，不加 flex: 1 -->
</div>

<!-- 移动端：竖排时实体按钮全宽，文字链保持原宽 -->
<div style="display: flex; flex-direction: column; gap: 10px;">
  <button class="btn btn-primary" style="width: 100%;">立即申请 Demo</button>
  <button class="btn btn-secondary" style="width: 100%;">了解产品</button>
  <a>查看案例 →</a>
</div>
```

#### 场景三：Modal 底部按钮组

```html
<!-- 桌面端：两个按钮等宽平分 -->
<div style="display: flex; gap: 12px;">
  <button class="btn" style="flex: 1;">取消</button>
  <button class="btn btn-primary" style="flex: 1;">确认</button>
</div>

<!-- 移动端：竖排全宽 -->
<div style="display: flex; flex-direction: column; gap: 10px;">
  <button class="btn" style="width: 100%;">取消</button>
  <button class="btn btn-primary" style="width: 100%;">确认</button>
</div>
```

#### CSS 类名规范

```css
/* 按钮组容器 */
.button-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

/* 按钮组中的实体按钮（桌面等宽） */
.button-group > .btn:not([class*="text-link"]),
.button-group > button {
  flex: 1;
}

/* 移动端响应式 */
@media (max-width: 768px) {
  .button-group {
    flex-direction: column;
    gap: 10px;
  }
  
  .button-group > .btn:not([class*="text-link"]),
  .button-group > button {
    flex: none;
    width: 100%;
  }
  
  /* 文字链保持默认宽度 */
  .button-group > a {
    width: auto;
  }
}
```

#### 规则总结

| 场景 | 桌面端 | 移动端 |
|------|--------|--------|
| **实体按钮** | `flex: 1`（等宽） | `width: 100%`（全宽） |
| **文字链** | 不加 flex（原宽） | 不加 width（原宽） |
| **容器** | `flex-direction: row`、`gap: 12px` | `flex-direction: column`、`gap: 10px` |

### 响应式换行规则

| 断点 | 布局 | 规格 |
|------|------|------|
| **≥ 768px**（桌面） | 横排等宽 | flex-direction: row · gap: 12px · 实体按钮 flex: 1 |
| **< 768px**（移动） | 竖排全宽 | flex-direction: column · width: 100% · gap: 10px |

---

## 09 输入框 Input

### 用途

输入框出现在联系我们、申请 Demo、搜索等所有需要用户填写信息的场景。四种状态（默认 / Focus / 错误 / 禁用）需要视觉可区分，Focus 态使用品牌橙色边框强化交互反馈，与整体设计语言保持一致。

### 输入框状态

| 状态 | 边框 | 背景 | 说明 |
|------|------|------|------|
| Default | --light-border-default | --light-bg-surface | 未交互状态 |
| Focus | --brand-primary · 2px | --light-bg-surface | 聚焦时边框加粗 + 品牌色 + 光晕 |
| Error | --status-error | --status-error-subtle | 校验失败 |
| Disabled | --light-border-default | --light-bg-disabled | 禁用不可编辑 |

### CSS 类名与示例

```html
<!-- 标准输入框 -->
<input type="text" 
  placeholder="请输入公司名称" 
  class="real-input"
  style="border: 1px solid var(--light-border-default); padding: 10px 14px;" />

<!-- Focus 状态（自动触发） -->
<input class="real-input" />
<!-- 自动生成：border: 2px solid var(--brand-primary) + shadow-brand -->

<!-- 错误状态 -->
<input class="real-input" 
  style="border: 1px solid var(--status-error); background: var(--status-error-subtle);" />
<div style="color: var(--status-error); font-size: 12px;">
  <svg><!-- error icon --></svg>
  手机号格式不正确，请重新输入
</div>

<!-- 禁用状态 -->
<input disabled class="real-input" 
  style="background: var(--light-bg-disabled); opacity: 0.4;" />

<!-- Textarea -->
<textarea class="real-textarea" 
  placeholder="请描述您的需求…" 
  rows="3"></textarea>
```

### 带图标输入框

```html
<!-- 左图标（搜索） -->
<div style="position: relative;">
  <svg style="position: absolute; left: 12px; top: 50%;"><!-- search icon --></svg>
  <input type="text" placeholder="搜索…" style="padding-left: 36px;" />
</div>

<!-- 右图标（清除） -->
<div style="position: relative;">
  <input type="text" value="搜索内容" style="padding-right: 36px;" />
  <svg style="position: absolute; right: 12px; top: 50%;"><!-- close icon --></svg>
</div>
```

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --light-border-default | #E5E1DA | 边框颜色 |
| --brand-primary | #FF820A | Focus 边框色 |
| --border-width-thick | 2px | Focus 边框宽度 |
| --shadow-brand | 品牌光晕 | Focus 外发光 |
| --status-error | #E05555 | 错误边框 |
| --status-error-subtle | #FDECEC | 错误背景 |
| --light-bg-disabled | #F0EDE8 | 禁用背景 |
| --radius-md | 6px | 圆角 |
| --motion-duration-fast | 150ms | 过渡动画 |

---

## 10 下拉选择 Select

### 用途

下拉选择用于从固定选项集合中做单项选取。官网申请表单、筛选器、地区选择等场景均需要，展开态浮层层级须用 --z-dropdown 管理，避免与导航栏的 --z-sticky 产生遮挡冲突。

### 状态

| 状态 | 描述 |
|------|------|
| Default · Placeholder | 未选中，显示提示文字 |
| Selected | 已选中一个值 |
| Open | 浮层展开状态 |
| Disabled | 禁用不可交互 |

### CSS 类名与示例

```html
<!-- 触发器 -->
<div class="select-trigger" style="border: 1px solid var(--light-border-default);">
  <span>请选择使用场景</span>
  <svg class="select-arrow"><!-- chevron-down --></svg>
</div>

<!-- 展开态浮层 -->
<div class="select-dropdown open">
  <div style="padding: 4px 0;">
    <div class="select-option selected">
      <svg><!-- check --></svg>
      大模型训练
    </div>
    <div class="select-option">高性能推理</div>
    <div class="select-option">边缘计算部署</div>
    <div class="select-option disabled">科研实验（暂不支持）</div>
  </div>
</div>
```

**Open 状态**：
- 触发器：border 2px solid var(--brand-primary) + shadow-brand
- 箭头：transform rotate(180deg) + color: var(--brand-primary)

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --z-dropdown | 100 | 浮层层级（在导航栏 --z-sticky 之下） |
| --radius-lg | 10px | 浮层圆角 |
| --brand-primary | #FF820A | Open 边框 + 选中项背景 |
| --brand-primary-subtle | #FFF3E8 | 选中项高亮背景 |
| --light-bg-elevated | #F0EDE8 | Hover 选项背景 |

---

## 11 Tab 切换 Tab

### 用途

Tab 用于在同一区域内切换不同视图或内容类别。官网产品对比、技术规格分类、Benchmark 筛选等场景均有使用。线型 Tab 用于内容切换，填充型 Tab 用于强调操作分组。

### 两种 Tab 风格

#### 线型 Tab · Line（推荐）

用于内容切换场景，选中项下方显示品牌色下划线。

```html
<div style="border-bottom: 1px solid var(--light-border-default); display: flex;">
  <div class="tab-line-item active">训练</div>
  <div class="tab-line-item">推理</div>
  <div class="tab-line-item">边缘部署</div>
  <div class="tab-line-item disabled">科研（即将开放）</div>
</div>
```

**样式规范**：
- 选中项：font-weight 600 · color --brand-primary · border-bottom 2px solid --brand-primary
- 未选中：color --light-text-secondary
- 禁用项：color --light-text-disabled · opacity 0.5 · pointer-events none

#### 填充型 Tab · Fill（强调分组）

用于操作分组、精度选择等场景，选中项有实色背景。

```html
<div style="background: var(--light-bg-elevated); border-radius: var(--radius-lg); padding: 4px; display: inline-flex;">
  <div class="tab-fill-item active">FP16</div>
  <div class="tab-fill-item">INT8</div>
  <div class="tab-fill-item">INT4</div>
</div>
```

**样式规范**：
- 容器：background --light-bg-elevated · padding 4px · gap 2px
- 选中项：background --light-bg-surface · font-weight 600 · box-shadow 0 1px 4px rgba(0,0,0,0.08)

### 深色区 Tab

```html
<div class="tab-dark-item active">产品参数</div>
<div class="tab-dark-item">对比竞品</div>
<div class="tab-dark-item">适用场景</div>
```

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --brand-primary | #FF820A | 选中下划线 + 文字色 |
| --light-text-secondary | #505050 | 未选中文字色 |
| --light-bg-elevated | #F0EDE8 | 填充型容器背景 |
| --light-bg-surface | #FFFFFF | 填充型选中项背景 |
| --motion-duration-fast | 150ms | 切换过渡 |

---

## 12 开关 Switch

### 用途

Switch 适合非即时生效的开关型操作。比 Checkbox 更直观地传达「开 / 关」的二态含义，官网技术参数对比页、功能开启关闭等场景使用。宽度固定避免文字撑宽影响布局。

### 状态

| 状态 | 轨道背景 | 滑块位置 | 说明 |
|------|----------|----------|------|
| On · 开启 | --brand-primary | 右侧（calc(100% - 21px)） | 功能已启用 |
| Off · 关闭 | --light-border-default | 左侧（3px） | 功能已禁用 |
| Disabled On | --brand-primary · 0.4 opacity | 右侧 | 禁用但开启状态 |
| Disabled Off | --light-bg-disabled · 0.4 opacity | 左侧 | 禁用且关闭状态 |

### CSS 类名与示例

```html
<!-- On 状态 -->
<div class="switch-track on">
  <div class="switch-thumb"></div>
</div>

<!-- Off 状态 -->
<div class="switch-track off">
  <div class="switch-thumb"></div>
</div>

<!-- Disabled 状态 -->
<div class="switch-track disabled off">
  <div class="switch-thumb"></div>
</div>
```

### Switch 尺寸规范

| 属性 | 值 | 说明 |
|------|--------|------|
| 轨道宽度 | 44px | 固定宽度，包含两个端点位置 |
| 轨道高度 | 24px | 标准高度，保证滑块视觉中心对齐 |
| 滑块尺寸 | 18px | 圆形，有 3px 内边距 |
| 圆角 | --radius-full | 完全圆形 |

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --brand-primary | #FF820A | On 状态轨道色 |
| --light-border-default | #E5E1DA | Off 状态轨道色 |
| --radius-full | 9999px | 轨道 + 滑块圆角 |
| --motion-duration-base | 300ms | 滑块位移 + 色变过渡 |
| --opacity-disabled | 0.4 | 禁用态透明度 |

---

## 13 复选框 Checkbox

### 用途

Checkbox 用于多项独立选择。官网的兴趣偏好选择、服务条款同意、批量操作等场景均需要。半选态（Indeterminate）专用于父子层级的全选/部分选中逻辑，需要单独规范避免遗漏。

### 状态

| 状态 | 外框 | 背景 | 内容 | 说明 |
|------|------|------|------|------|
| Unchecked | --light-border-default | --light-bg-surface | 空 | 未选中 |
| Checked | --brand-primary | --brand-primary | 白色勾 | 已选中 |
| Indeterminate | --brand-primary | --brand-primary | 白色横线 | 半选态（父级部分选中） |
| Disabled Unchecked | --light-border-default · 0.4 | --light-bg-disabled | 空 | 禁用未选 |
| Disabled Checked | --light-border-default · 0.4 | --light-bg-disabled | 浅色勾 | 禁用已选 |

### CSS 类名与示例

```html
<!-- Unchecked -->
<div class="cb-box"></div>

<!-- Checked -->
<div class="cb-box checked">
  <svg><!-- checkmark --></svg>
</div>

<!-- Indeterminate（半选） -->
<div class="cb-box indeterminate">
  <div style="width: 10px; height: 2px; background: white;"></div>
</div>

<!-- 完整的 checkbox 行 -->
<label class="cb-row">
  <div class="cb-box checked">
    <svg><!-- check --></svg>
  </div>
  <span>大模型训练</span>
</label>

<!-- 禁用 -->
<label class="cb-row disabled" style="opacity: 0.4;">
  <div class="cb-box disabled"></div>
  <span>暂不支持</span>
</label>
```

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --brand-primary | #FF820A | Checked + Indeterminate 背景 |
| --light-border-default | #E5E1DA | Unchecked 边框 |
| --light-bg-surface | #FFFFFF | Unchecked 背景 |
| --light-bg-disabled | #F0EDE8 | Disabled 背景 |
| --radius-sm | 4px | 方形圆角 |
| --opacity-disabled | 0.4 | 禁用态 |

---

## 14 单选框 Radio

### 用途

Radio 用于一组互斥选项中选取单一值。官网申请表单的套餐选择、模式切换等场景使用。全圆形态与 Checkbox 的方形形成视觉区分，让用户直觉判断「单选 vs 多选」。

### 状态

| 状态 | 外圆 | 内点 | 说明 |
|------|------|------|------|
| Unchecked | --light-border-default | 无 | 未选中 |
| Checked | --brand-primary | --brand-primary · 9px | 已选中（中心实心圆） |
| Disabled | --light-border-default · 0.4 | 无 | 禁用状态 |

### 两种 Radio 组件

#### 标准 Radio（单行）

```html
<label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
  <div class="radio-circle checked" data-radio="group1">
    <div class="radio-inner"></div>
  </div>
  <span>专业版 · 适合大模型训练</span>
</label>

<label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
  <div class="radio-circle" data-radio="group1">
    <div class="radio-inner"></div>
  </div>
  <span>旗舰版 · 全场景覆盖</span>
</label>
```

#### 卡片式 Radio（多列网格）

```html
<div class="radio-card checked" data-radio="group2">
  <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
    <span style="font-weight: 600;">专业版</span>
    <div class="radio-circle checked">
      <div class="radio-inner"></div>
    </div>
  </div>
  <div style="font-size: 11px; color: var(--brand-primary);">训练 · 全精度</div>
</div>
```

**卡片式样式**：
- 选中：border 2px solid var(--brand-primary) · background var(--brand-primary-subtle)
- 未选中：border 1px solid var(--light-border-default)
- Padding：13px 15px（视觉等高）

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --radius-full | 9999px | 圆形圆角 |
| --light-border-default | #E5E1DA | 未选中边框 |
| --brand-primary | #FF820A | 选中边框 + 内点 |
| --brand-primary-subtle | #FFF3E8 | 卡片选中背景 |
| --border-width-thick | 2px | 卡片选中边框宽度 |

---

## 15 卡片 Card

### 用途

Card 是信息聚合的基本容器，覆盖产品展示、文章列表、数据面板等几乎所有内容区块。它定义了圆角、阴影、间距与交互态的统一规范，是频率最高的复合组件之一。

### 卡片变体

#### 浅色区

| 变体 | 背景 | 边框 | 阴影 | Hover 效果 | 用途 |
|------|------|------|------|-----------|------|
| Default | --light-bg-surface | --light-border-default | 无 | translateY(-3px) + shadow-md | 标准信息卡片 |
| Elevated | --light-bg-surface | 无 | --shadow-md | 阴影加深 | 强调卡片、CTA |
| Brand | --brand-primary | 无 | 无 | 阴影 + translateY | 核心功能卡 |

#### 深色区

| 变体 | 背景 | 边框 | 阴影 | Hover 效果 | 用途 |
|------|------|------|------|-----------|------|
| Default | --dark-bg-card (#252525) | --dark-border-default | 无 | box-shadow + translateY(-2px) | 标准卡片 |
| Elevated | --dark-bg-card | 无 | 0 4px 24px rgba(0,0,0,0.4) | 阴影加深到 0 12px 40px | 浮起卡片 |
| Brand Accent | 品牌渐变 | brand 半透 | 无 | border-color 加深 | 数据亮点 |

### CSS 类名与示例

```html
<!-- 浅色 · Default 卡片 -->
<div class="card-hover" style="
  background: var(--light-bg-surface);
  border: 1px solid var(--light-border-default);
  border-radius: var(--radius-xl);
  padding: 20px;
  transition: box-shadow var(--motion-duration-fast), transform var(--motion-duration-fast);
">
  <div style="width: 36px; height: 36px; background: var(--brand-primary-subtle); border-radius: var(--radius-md); margin-bottom: 12px;">
    <!-- icon -->
  </div>
  <h3 style="font-size: var(--font-size-body); font-weight: 600; margin-bottom: 6px;">Default Card</h3>
  <p style="font-size: var(--font-size-desc); color: var(--light-text-secondary);">描述文案</p>
</div>

<!-- 深色 · Elevated 卡片 -->
<div style="
  background: var(--dark-bg-card);
  border-radius: var(--radius-xl);
  padding: 20px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
  cursor: pointer;
  transition: box-shadow var(--motion-duration-fast), transform var(--motion-duration-fast);
" onmouseover="this.style.boxShadow='0 12px 40px rgba(0,0,0,0.6)'; this.style.transform='translateY(-2px)'"
   onmouseout="this.style.boxShadow='0 4px 24px rgba(0,0,0,0.4)'; this.style.transform=''">
  <!-- content -->
</div>

<!-- 深色 · Brand Accent 卡片 -->
<div style="
  background: linear-gradient(135deg, rgba(255,130,10,0.14) 0%, rgba(255,130,10,0.04) 100%);
  border: 1px solid rgba(255,130,10,0.28);
  border-radius: var(--radius-xl);
  padding: 20px;
">
  <!-- content -->
</div>
```

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --light-bg-surface | #FFFFFF | 浅色卡片背景 |
| --dark-bg-card | #252525 | 深色卡片背景 |
| --radius-xl | 16px | 卡片圆角 |
| --shadow-md | 0 4px 16px rgba(0,0,0,0.08) | 浮起阴影 |
| --light-border-default | #E5E1DA | 浅色卡片边框 |
| --dark-border-default | #2D2D2D | 深色卡片边框 |
| --brand-primary | #FF820A | 品牌卡片背景 |

---

## 16 表格 Table

### 用途

Table 是技术规格、性能对比、数据列表的核心载体。曦望产品页大量使用参数对比表，规范对齐方式、行高、斑马纹与表头样式，保证数据可读性与品牌一致性。

### 表格结构规范

```html
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background: var(--light-bg-elevated); border-bottom: 2px solid var(--light-border-default);">
      <th style="padding: 12px 16px; text-align: left; font-weight: 600; color: var(--light-text-primary);">规格参数</th>
      <th style="padding: 12px 16px; text-align: center; font-weight: 600; color: var(--brand-primary);">曦望 X1</th>
      <th style="padding: 12px 16px; text-align: center; font-weight: 600; color: var(--light-text-secondary);">竞品 A</th>
      <th style="padding: 12px 16px; text-align: center; font-weight: 600; color: var(--light-text-secondary);">竞品 B</th>
    </tr>
  </thead>
  <tbody>
    <!-- 标准行 -->
    <tr style="border-bottom: 1px solid var(--light-border-default);">
      <td style="padding: 11px 16px; color: var(--light-text-secondary);">算力 (TFLOPS)</td>
      <td style="padding: 11px 16px; text-align: center; font-weight: 700; color: var(--brand-primary);">320</td>
      <td style="padding: 11px 16px; text-align: center;">280</td>
      <td style="padding: 11px 16px; text-align: center;">256</td>
    </tr>
    <!-- 斑马纹行 -->
    <tr style="background: var(--light-bg-elevated); border-bottom: 1px solid var(--light-border-default);">
      <td style="padding: 11px 16px;">显存带宽 (GB/s)</td>
      <td style="padding: 11px 16px; text-align: center; font-weight: 700; color: var(--brand-primary);">1200</td>
      <td style="padding: 11px 16px; text-align: center;">900</td>
      <td style="padding: 11px 16px; text-align: center;">820</td>
    </tr>
  </tbody>
</table>
```

### 表格样式规范

| 元素 | 样式 | 说明 |
|------|------|------|
| 表头背景 | --light-bg-elevated #F0EDE8 | 表头行背景色 |
| 表头边框 | --light-border-default · 2px | 表头下分隔线 |
| 主力产品列 | --brand-primary（文字色） | 曦望产品列数据高亮 |
| 行分隔线 | --light-border-default · 1px | 行与行之间 |
| 斑马纹 | --light-bg-elevated（奇行背景） | 奇数行背景色 |
| 数字列字体 | --font-en (Inter) | 英文数字使用等宽字体对齐 |
| 单元格 Padding | 12px 16px（表头）/ 11px 16px（行） | 内边距规范 |

---

## 17 折叠面板 Accordion

### 用途

Accordion 将大量 FAQ、技术文档或配置项收纳在可折叠区块中，减少页面纵向高度，提升信息密度。点击标题行展开/收起内容，同时同组内其他项自动折叠（手风琴模式）。

### 折叠面板结构

```html
<div id="accordion-group" style="border: 1px solid var(--light-border-default); border-radius: var(--radius-xl); overflow: hidden;">
  
  <!-- 面板项 1 -->
  <div class="acc-item">
    <!-- 触发器 / 标题行 -->
    <div class="acc-trigger" style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      cursor: pointer;
      background: var(--light-bg-surface);
      transition: background var(--motion-duration-fast);
    ">
      <span style="font-size: var(--font-size-body); font-weight: 600;">曦望 X1 支持哪些精度格式？</span>
      <svg class="acc-arrow" style="transition: transform var(--motion-duration-fast) var(--motion-easing-out);">
        <!-- chevron-down -->
      </svg>
    </div>
    
    <!-- 内容区（收起时 max-height: 0） -->
    <div class="acc-content" style="
      max-height: 0;
      overflow: hidden;
      transition: max-height var(--motion-duration-base) var(--motion-easing-out);
    ">
      <div style="padding: 0 20px 16px; font-size: var(--font-size-desc); color: var(--light-text-secondary);">
        X1 支持 FP32、BF16、FP16、INT8、INT4 全精度格式，并通过硬件指令集原生加速…
      </div>
    </div>
  </div>
  
  <div style="height: 1px; background: var(--light-border-default);"></div>
  
  <!-- 面板项 2... -->
  
</div>
```

### 展开状态样式

**触发器激活态**（.acc-item.open）：
- 背景：var(--brand-primary-subtle) #FFF4EB
- 文字色：var(--brand-primary) #FF820A
- 箭头：transform rotate(180deg) + color: var(--brand-primary)

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --radius-xl | 16px | 面板容器圆角 |
| --light-border-default | #E5E1DA | 容器 & 行分隔线 |
| --light-bg-surface | #FFFFFF | 触发器背景 |
| --motion-duration-base | 300ms | 展开/收起动画 |
| --motion-duration-fast | 150ms | 背景色变动画 |
| --motion-easing-out | cubic-bezier(0,0,0.2,1) | 展开缓动 |
| --brand-primary-subtle | #FFF3E8 | 激活行背景 |

---

## 18 进度条 Progress Bar

### 用途

Progress Bar 用于表达任务进度、资源使用率或性能基准对比。在 AI 芯片场景中高频出现于「算力利用率」「训练进度」等数据可视化模块。规范轨道高度、颜色语义与文字标注位置。

### 进度条变体

| 类型 | 轨道高度 | 填充色 | 用途 |
|------|----------|--------|------|
| 标准进度 | 8px | --brand-primary | 算力利用率、模型进度 |
| 成功进度 | 8px | --status-success | 训练完成进度 |
| 警告进度 | 8px | --status-warning | 显存占用、资源告急 |
| 细线进度 | 4px | --brand-primary | 页面标题栏进度、轻量展示 |

### CSS 类名与示例

```html
<!-- 进度条容器 -->
<div style="
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
">
  <span style="font-size: var(--font-size-desc); color: var(--light-text-secondary);">算力利用率</span>
  <span style="font-size: var(--font-size-desc); font-weight: 700; color: var(--brand-primary);">75%</span>
</div>

<!-- 轨道 -->
<div style="
  height: 8px;
  background: var(--light-bg-elevated);
  border-radius: var(--radius-full);
  overflow: hidden;
">
  <!-- 填充条（动画） -->
  <div style="
    height: 100%;
    background: var(--brand-primary);
    border-radius: var(--radius-full);
    width: 75%;
    transition: width 0.9s var(--motion-easing-out);
  "></div>
</div>
```

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --light-bg-elevated | #F0EDE8 | 进度轨道背景 |
| --brand-primary | #FF820A | 默认进度填充色 |
| --status-success | #34C78A | 成功进度色 |
| --status-warning | #F0A030 | 警告进度色 |
| --status-error | #E05555 | 错误进度色 |
| --radius-full | 9999px | 轨道 & 填充圆角 |
| --motion-easing-out | cubic-bezier(0,0,0.2,1) | 进度动画缓动 |

---

## 19 翻页器 Pagination

### 用途

Pagination 出现在文档列表、搜索结果、数据表格底部，提供页码导航与前后翻页能力。规范按钮尺寸、激活态颜色与省略号展示逻辑，与 Button、Icon 组件复用相同基础 Token。

### 翻页器结构

```html
<div style="display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
  <!-- 上一页按钮 -->
  <button class="page-btn" style="
    width: 34px;
    height: 34px;
    border: 1px solid var(--light-border-default);
    border-radius: var(--radius-md);
    background: var(--light-bg-surface);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    <svg><!-- arrow-left --></svg>
  </button>
  
  <!-- 页码按钮 -->
  <button class="page-num" style="width: 34px; height: 34px; border: 1px solid var(--light-border-default); border-radius: var(--radius-md);">1</button>
  <button class="page-num" style="width: 34px; height: 34px;">2</button>
  
  <!-- 活跃页码 -->
  <button class="page-num active" style="
    background: var(--brand-primary);
    border-color: var(--brand-primary);
    color: #fff;
    font-weight: 700;
  ">3</button>
  
  <button class="page-num" style="width: 34px; height: 34px;">4</button>
  
  <!-- 省略号 -->
  <span style="width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; color: var(--light-text-tertiary);">···</span>
  
  <!-- 下一页按钮 -->
  <button class="page-btn" style="width: 34px; height: 34px;">
    <svg><!-- arrow-right --></svg>
  </button>
</div>
```

### 页码按钮样式

| 状态 | 背景 | 边框 | 文字色 | 字重 |
|------|------|------|--------|------|
| Default | --light-bg-surface | --light-border-default | --light-text-primary | 400 |
| Hover | --light-bg-elevated | --brand-primary | --brand-primary | - |
| Active | --brand-primary | --brand-primary | #fff | 700 |
| Disabled | --light-bg-disabled | --light-border-default | --light-text-disabled | - |

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --radius-md | 6px | 页码按钮圆角 |
| --light-border-default | #E5E1DA | 边框颜色 |
| --brand-primary | #FF820A | 活跃页码背景 + Hover 文字色 |
| --motion-duration-fast | 150ms | 过渡动画 |

---

## 20 面包屑 Breadcrumb

> 此组件在 HTML 中有定义，具体样式继承自全局导航规范。

---

## 21 弹窗 Modal

### 用途

Modal 用于关键信息确认、登录表单、配置面板等场景。提供完全黑色半透明遮罩，模态对话框置于屏幕中央，支持关闭、确认等操作。

### 弹窗结构

```html
<!-- Overlay 遮罩 -->
<div style="
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.52);
  z-index: var(--z-modal);
" id="modal-overlay"></div>

<!-- Modal 对话框 -->
<div style="
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: calc(var(--z-modal) + 1);
  background: var(--light-bg-surface);
  border-radius: var(--radius-xl);
  box-shadow: 0 20px 64px rgba(0,0,0,0.16);
  max-width: 520px;
  width: 90%;
  animation: modal-in 0.3s var(--motion-easing-out);
" id="modal">
  <!-- 标题 -->
  <div style="padding: 24px 28px 16px; border-bottom: 1px solid var(--light-border-default);">
    <h2 style="font-size: var(--font-size-body); font-weight: 600; color: var(--light-text-primary);">确认删除</h2>
  </div>
  
  <!-- 内容 -->
  <div style="padding: 20px 28px; font-size: var(--font-size-desc); color: var(--light-text-secondary);">
    此操作不可恢复，是否继续删除？
  </div>
  
  <!-- 操作区 -->
  <div style="padding: 16px 28px 20px; display: flex; gap: 12px; justify-content: flex-end;">
    <button class="btn btn-secondary" onclick="closeModal()">取消</button>
    <button class="btn btn-danger">确认删除</button>
  </div>
</div>

<style>
  @keyframes modal-in {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.97) translateY(12px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1) translateY(0);
    }
  }
</style>
```

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --z-modal | 400 | Modal 层级 |
| --overlay-bg | rgba(0,0,0,0.52) | 遮罩背景色 |
| --light-bg-surface | #FFFFFF | Modal 背景 |
| --radius-xl | 16px | Modal 圆角 |
| --shadow-dark-md | 0 20px 64px rgba(0,0,0,0.16) | Modal 阴影 |
| --motion-duration-fast | 150ms | 动画时长 |

---

## 22 Toast / Snackbar

### 用途

Toast 用于操作反馈（成功、失败、提示），以非模态浮窗形式出现在屏幕右下角或底部，自动消失或用户可手动关闭。

### Toast 消息类型

| 类型 | 背景 | 文字色 | 图标 | 用途 |
|------|------|--------|------|------|
| Success | --status-success-subtle | --status-success | ✓ | 操作成功 |
| Error | --status-error-subtle | --status-error | ✕ | 操作失败 |
| Warning | --status-warning-subtle | --status-warning | ! | 警告信息 |
| Info | --status-info-subtle | --status-info | ℹ | 普通提示 |

### CSS 类名与示例

```html
<!-- Toast 元素 -->
<div class="toast-item" style="
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  font-size: 13px;
  min-width: 240px;
  max-width: 360px;
  animation: toast-in var(--motion-duration-fast) var(--motion-easing-out);
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: var(--z-toast);
">
  <!-- Success 示例 -->
  <svg width="18" height="18" style="color: var(--status-success);"><!-- check-circle --></svg>
  <span style="color: var(--status-success);">操作成功，应用已保存</span>
</div>

<style>
  @keyframes toast-in {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes toast-out {
    to {
      opacity: 0;
      transform: translateX(20px);
      max-height: 0;
      margin: 0;
      padding: 0;
    }
  }
</style>
```

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --z-toast | 500 | Toast 层级（在 Modal 之上） |
| --radius-lg | 10px | Toast 圆角 |
| --shadow-md | 0 4px 16px rgba(0,0,0,0.12) | Toast 阴影 |
| --motion-duration-fast | 150ms | 动画时长 |
| --status-success / error / warning / info | - | 状态色 |

---

## 23 气泡提示 Tooltip

### 用途

Tooltip 用于鼠标悬停时展示额外信息、快捷键提示、字段说明等。出现在目标元素周围，通常向上或向下指向目标元素。

### Tooltip 结构

```html
<!-- Tooltip 包装 -->
<div class="tt-wrap">
  <!-- 触发元素 -->
  <svg class="tt-trigger" width="16" height="16"><!-- info-circle --></svg>
  
  <!-- Tooltip 气泡 -->
  <div class="tt-box" style="
    position: absolute;
    background: var(--dark-bg-surface);
    color: var(--dark-text-primary);
    padding: 8px 12px;
    border-radius: var(--radius-md);
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    z-index: var(--z-tooltip);
    transition: opacity var(--motion-duration-fast);
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(-8px);
  ">
    快捷键：Ctrl + S
  </div>
</div>
```

### Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --z-tooltip | 600 | Tooltip 层级（最高） |
| --dark-bg-surface | #181818 | Tooltip 背景 |
| --dark-text-primary | #EDE9E4 | Tooltip 文字色 |
| --radius-md | 6px | Tooltip 圆角 |
| --motion-duration-fast | 150ms | 显隐动画 |

---

## 24 导航栏 Navigation

### 用途

导航栏是整个官网的主导航，包含 Logo、主菜单、CTA 按钮等关键元素。支持深色 Hero 区导航和浅色内容区导航两种风格。

### 导航栏结构（深色版本）

```html
<nav class="mega-nav-bar" style="
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 60px;
  background: var(--dark-bg-base);
  border-bottom: 1px solid var(--dark-border-default);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
">
  <!-- Logo -->
  <div class="mega-nav-logo" style="
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: 17px;
    font-weight: 700;
    color: var(--dark-text-primary);
  ">
    <svg><!-- logo --></svg>
    曦望 Sunrise
  </div>
  
  <!-- 主菜单 -->
  <div class="mega-nav-links" style="
    display: flex;
    align-items: center;
    gap: 2px;
  ">
    <button class="mega-nav-link" style="
      padding: 6px 14px;
      font-size: 13px;
      color: var(--dark-text-secondary);
      background: transparent;
      border: none;
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: all var(--motion-duration-fast);
      white-space: nowrap;
    ">产品</button>
    
    <button class="mega-nav-link has-dropdown" style="display: flex; align-items: center; gap: 4px;">
      解决方案
      <svg class="nav-chevron" width="14" height="14" style="transition: transform var(--motion-duration-fast);"><!-- chevron-down --></svg>
    </button>
    
    <button class="mega-nav-link">文档</button>
    <button class="mega-nav-link">博客</button>
  </div>
  
  <!-- CTA 按钮 -->
  <button class="mega-nav-cta" style="
    background: var(--brand-primary);
    color: #fff;
    border: none;
    font-size: 13px;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: filter var(--motion-duration-fast);
    white-space: nowrap;
  ">申请 Demo</button>
</nav>

<!-- Mega Dropdown 下拉菜单 -->
<div class="mega-dropdown" style="
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: rgba(22,22,22,0.97);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--dark-border-default);
  padding: 28px 32px 32px;
  display: none;
  z-index: var(--z-dropdown);
  animation: mega-in 0.18s var(--motion-easing-out);
">
  <!-- 多列内容 -->
</div>

<style>
  @keyframes mega-in {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
```

### 导航栏 Token 依赖

| Token | 值 | 用途 |
|-------|--------|------|
| --dark-bg-base | #111111 | 导航栏背景 |
| --dark-border-default | #2D2D2D | 导航栏下边框 |
| --dark-text-primary | #EDE9E4 | Logo 文字色 |
| --dark-text-secondary | #9B9B9B | 菜单项默认色 |
| --brand-primary | #FF820A | CTA 按钮 + 活跃菜单色 |
| --z-sticky | 200 | 导航栏层级 |
| --z-dropdown | 100 | 下拉菜单层级 |
| --radius-md | 6px | 菜单项圆角 |

---

## 全局 Design Token 总览

### 色彩系统

#### 品牌色

| Token | 值 | 说明 |
|-------|--------|------|
| --brand-primary | #FF820A | 主品牌色（橙色） |
| --brand-hover | #E0700A | 悬停加深 |
| --brand-active | #C05E08 | 点击按压 |
| --brand-primary-light | #FFB060 | 浅色变体 |
| --brand-primary-subtle | #FFF3E8 | 极淡背景 |
| --brand-primary-dark | #A85505 | 深色变体 |

#### 浅色主题

| Token | 值 | 说明 |
|-------|--------|------|
| --light-bg-base | #F7F5F2 | 页面底色 |
| --light-bg-surface | #FFFFFF | 卡片 / 组件背景 |
| --light-bg-elevated | #F0EDE8 | 次级背景（表头、强调） |
| --light-text-primary | #181818 | 主文本 |
| --light-text-secondary | #505050 | 次文本 |
| --light-text-tertiary | #9B9B9B | 辅助文本 |
| --light-text-disabled | #BBBBBB | 禁用文本 |
| --light-border-default | #E5E1DA | 标准边框 |
| --light-border-subtle | #EDE9E4 | 淡化边框 |
| --light-bg-disabled | #F0EDE8 | 禁用背景 |

#### 深色主题

| Token | 值 | 说明 |
|-------|--------|------|
| --dark-bg-base | #111111 | 页面底色（导航区） |
| --dark-bg-surface | #181818 | 主要背景 |
| --dark-bg-elevated | #222222 | 次级背景 |
| --dark-bg-card | #252525 | 卡片背景 |
| --dark-text-display | #FFFFFF | 主标题 |
| --dark-text-primary | #EDE9E4 | 主文本 |
| --dark-text-secondary | #9B9B9B | 次文本 |
| --dark-text-tertiary | #555555 | 辅助文本 |
| --dark-text-disabled | #444444 | 禁用文本 |
| --dark-border-default | #2D2D2D | 标准边框 |
| --dark-border-subtle | #1C1C1C | 淡化边框 |
| --dark-bg-disabled | #1E1E1E | 禁用背景 |

#### 状态色

| Token | 值 | 说明 |
|-------|--------|------|
| --status-success | #34C78A | 成功 |
| --status-warning | #F0A030 | 警告 |
| --status-error | #E05555 | 错误 |
| --status-info | #4A9EEF | 信息 |
| --status-success-subtle | #E6F7F0 | 成功淡色背景 |
| --status-warning-subtle | #FEF3E2 | 警告淡色背景 |
| --status-error-subtle | #FDECEC | 错误淡色背景 |
| --status-info-subtle | #E8F1FD | 信息淡色背景 |

#### 链接色

| Token | 值 | 说明 |
|-------|--------|------|
| --link-default | #FF820A | 链接默认色 |
| --link-hover | #E0700A | 链接悬停色 |
| --link-visited | #A85505 | 已访问链接 |

### 圆角规范

| Token | 值 | 说明 |
|-------|--------|------|
| --radius-sm | 4px | 小组件（输入框边框、表格行） |
| --radius-md | 6px | 标准圆角（按钮、标签、卡片） |
| --radius-lg | 10px | 大组件（浮层、容器） |
| --radius-xl | 16px | 超大圆角（卡片、模态框） |
| --radius-2xl | 24px | 极大圆角 |
| --radius-full | 9999px | 完全圆形（badge、switch） |

### 阴影规范

| Token | 值 | 说明 |
|-------|--------|------|
| --shadow-brand | 0 0 0 3px rgba(255,130,10,0.20), 0 0 12px rgba(255,130,10,0.12) | 品牌光晕（Focus） |
| --shadow-dark-sm | 0 1px 4px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.04) | 深色小阴影 |
| --shadow-dark-md | 0 4px 16px rgba(0,0,0,0.50), 0 0 0 1px rgba(255,255,255,0.06) | 深色中阴影 |

### 字体规范

| Token | 值 | 说明 |
|-------|--------|------|
| --font-zh | Source Han Sans SC, PingFang SC | 中文字体 |
| --font-en | Inter, -apple-system | 英文 / 数字字体 |

### 字号规范

| Token | 值 | 用途 |
|-------|--------|------|
| --font-size-display | 56px | Hero 超大标题 |
| --font-size-heading | 32px | 区块大标题 |
| --font-size-body | 16px | 正文段落 |
| --font-size-desc | 14px | 描述文案 |
| --font-size-caption | 12px | 辅助说明 |
| --font-size-label | 12px | 表单标签 |

### 字重规范

| Token | 值 | 说明 |
|-------|--------|------|
| --font-weight-bold | 700 | 粗体（标题、强调） |
| --font-weight-medium | 500 | 中等字重 |
| --font-weight-regular | 400 | 常规字重 |

### 行高规范

| Token | 值 | 说明 |
|-------|--------|------|
| --line-height-display | 1.1 | 超大标题 |
| --line-height-heading | 1.2 | 标题 |
| --line-height-body-zh | 1.75 | 中文正文 |
| --line-height-body-en | 1.6 | 英文正文 |
| --line-height-caption | 1.5 | 小文本 |

### 字间距规范

| Token | 值 | 说明 |
|-------|--------|------|
| --tracking-tight | -0.02em | 紧密字间距 |
| --tracking-normal | 0em | 标准字间距 |
| --tracking-zh-heading | 0.02em | 中文标题 |
| --tracking-wide | 0.06em | 大写英文 |

### 间距规范

| Token | 值 | 说明 |
|-------|--------|------|
| --space-0-5 | 4px | 极小间距 |
| --space-1 | 8px | 小间距 |
| --space-2 | 16px | 标准间距 |
| --space-3 | 24px | 中等间距 |
| --space-4 | 32px | 大间距 |
| --space-5 | 40px | 更大间距 |
| --space-6 | 48px | 超大间距 |

### 动画规范

| Token | 值 | 说明 |
|-------|--------|------|
| --motion-duration-fast | 150ms | 快速动画（hover / focus） |
| --motion-duration-base | 300ms | 标准动画（展开 / 过渡） |
| --motion-easing-out | cubic-bezier(0,0,0.2,1) | 出场缓动曲线 |

### 层级规范

| Token | 值 | 说明 |
|-------|--------|------|
| --z-base | 0 | 基础层 |
| --z-raised | 10 | 浮起 |
| --z-dropdown | 100 | 下拉菜单 |
| --z-sticky | 200 | 粘性导航 |
| --z-overlay | 300 | 遮罩 |
| --z-modal | 400 | 模态框 |
| --z-toast | 500 | Toast 通知 |
| --z-tooltip | 600 | 气泡提示 |

### 尺寸规范

| Token | 值 | 说明 |
|-------|--------|------|
| --touch-target-min | 44px | 最小触摸目标 |

### 响应式断点

| Token | 值 | 说明 |
|-------|--------|------|
| --bp-sm | 375px | 小屏手机 |
| --bp-md | 768px | 平板 / 小屏笔记本 |
| --bp-lg | 1024px | 笔记本 |
| --bp-xl | 1440px | 大屏 |
| --bp-2xl | 1920px | 超大屏 |

---

## 使用建议

### 1. Token 优先于硬编码

所有样式值都应该引用对应的 CSS 自定义属性（Token），**不允许硬编码 HEX 颜色、固定 px 值**。

```css
/* ✓ 正确做法 */
color: var(--light-text-primary);
background: var(--brand-primary);
border-radius: var(--radius-md);

/* ✗ 错误做法 */
color: #181818;
background: #FF820A;
border-radius: 6px;
```

### 2. 组件复用性

避免创建新的变体，优先从现有组件中的已定义变体选择。如需新增变体，必须与设计团队评审并更新本文档。

### 3. 响应式设计

使用媒体查询和 Token 中定义的断点，确保在所有屏幕尺寸上都保持视觉一致性。

```css
@media (max-width: var(--bp-md)) {
  /* 平板及以下屏幕的样式 */
  font-size: var(--font-size-body-mobile);
}
```

### 4. 性能优化

- 使用 CSS 变量而非预处理器变量，便于运行时主题切换
- 避免重复定义已有的 Token
- 合理使用 `transition` 动画，遵循 --motion-duration 规范

### 5. 可访问性

- 确保颜色对比度符合 WCAG AA 标准
- 所有交互元素最小尺寸应 ≥ --touch-target-min (44px)
- 为禁用状态提供视觉反馈

---

## 版本历史

| 版本 | 发布日期 | 内容 |
|------|----------|------|
| v1 | 2026/07/01 | 初版发布，涵盖 24 个原子 / 复合组件，完整 Token 体系 |

---

**文档维护**：曦望设计团队  
**最后更新**：2026年7月1日