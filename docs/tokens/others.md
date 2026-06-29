# 其他 Token

## 阴影系统

| Token | 值 | 使用场景 |
|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(13,16,24,.08), 0 1px 2px rgba(13,16,24,.04)` | 卡片默认态 |
| `--shadow-md` | `0 4px 12px rgba(13,16,24,.08), 0 2px 4px rgba(13,16,24,.04)` | 卡片 Hover、浮层 |
| `--shadow-lg` | `0 12px 32px rgba(13,16,24,.10), 0 4px 8px rgba(13,16,24,.06)` | 下拉菜单、Modal |

### 阴影预览

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin: 24px 0;">
  <div style="border-radius: 8px; padding: 20px; background: var(--color-light-bg-surface); box-shadow: var(--shadow-sm); text-align: center;">
    <div style="font-weight: 500; margin-bottom: 8px;">Shadow SM</div>
    <div style="font-size: 12px; color: var(--color-light-text-tertiary);">卡片默认态</div>
  </div>
  <div style="border-radius: 8px; padding: 20px; background: var(--color-light-bg-surface); box-shadow: var(--shadow-md); text-align: center;">
    <div style="font-weight: 500; margin-bottom: 8px;">Shadow MD</div>
    <div style="font-size: 12px; color: var(--color-light-text-tertiary);">Hover、浮层</div>
  </div>
  <div style="border-radius: 8px; padding: 20px; background: var(--color-light-bg-surface); box-shadow: var(--shadow-lg); text-align: center;">
    <div style="font-weight: 500; margin-bottom: 8px;">Shadow LG</div>
    <div style="font-size: 12px; color: var(--color-light-text-tertiary);">菜单、Modal</div>
  </div>
</div>

```css
.card {
  box-shadow: var(--shadow-sm);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.modal {
  box-shadow: var(--shadow-lg);
}
```

---

## 图标系统

| Token | 值 | 使用场景 |
|---|---|---|
| `--icon-stroke-width` | `1.5px` | 所有 Outline 图标描边粗细 |
| `--icon-size-sm` | `16px` | 小图标（行内、标签） |
| `--icon-size-md` | `20px` | 中图标（列表、导航） |
| `--icon-size-lg` | `24px` | 大图标（功能区块） |

### 图标尺寸对比

<div style="display: flex; align-items: center; gap: 32px; padding: 24px; background: var(--color-light-bg-base); border-radius: 8px; margin: 24px 0;">
  <div style="text-align: center;">
    <div style="width: 16px; height: 16px; background: var(--color-brand-primary); border-radius: 3px; margin: 0 auto 8px;"></div>
    <div style="font-size: 12px; color: var(--color-light-text-secondary);">SM 16px</div>
    <div style="font-size: 11px; color: var(--color-light-text-tertiary);">--icon-size-sm</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 20px; height: 20px; background: var(--color-brand-primary); border-radius: 3px; margin: 0 auto 8px;"></div>
    <div style="font-size: 12px; color: var(--color-light-text-secondary);">MD 20px</div>
    <div style="font-size: 11px; color: var(--color-light-text-tertiary);">--icon-size-md</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 24px; height: 24px; background: var(--color-brand-primary); border-radius: 3px; margin: 0 auto 8px;"></div>
    <div style="font-size: 12px; color: var(--color-light-text-secondary);">LG 24px</div>
    <div style="font-size: 11px; color: var(--color-light-text-tertiary);">--icon-size-lg</div>
  </div>
</div>

```css
.icon {
  stroke-width: var(--icon-stroke-width);
}

.icon-sm {
  width: var(--icon-size-sm);
  height: var(--icon-size-sm);
}

.icon-md {
  width: var(--icon-size-md);
  height: var(--icon-size-md);
}

.icon-lg {
  width: var(--icon-size-lg);
  height: var(--icon-size-lg);
}
```

---

## 布局系统

| Token | 值 | 使用场景 |
|---|---|---|
| `--layout-max-width` | `1200px` | 内容最大宽度 |
| `--layout-columns` | `12` | 栅格列数 |
| `--layout-gutter` | `24px` | 列间距 |
| `--layout-margin-desktop` | `64px` | 桌面端页面左右边距 |

```css
/* 内容容器 */
.container {
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 var(--layout-margin-desktop);
}

/* 12 列栅格 */
.grid {
  display: grid;
  grid-template-columns: repeat(var(--layout-columns), 1fr);
  gap: var(--layout-gutter);
}

/* 栅格项目 */
.grid-item {
  grid-column: span 1;  /* 1 列 */
}

.grid-item-half {
  grid-column: span 6;  /* 半宽（6 列） */
}

.grid-item-third {
  grid-column: span 4;  /* 三分之一（4 列） */
}
```

---

## 动效系统

| Token | 值 | 使用场景 |
|---|---|---|
| `--motion-duration-fast` | `150ms` | 按钮 Hover、颜色过渡 |
| `--motion-duration-base` | `300ms` | 淡入、展开 |
| `--motion-duration-slow` | `500ms` | 页面区块进入、Slide Up |
| `--motion-easing-out` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | 元素进入动效 |
| `--motion-easing-default` | `ease` | 通用过渡 |

### 动效预览

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin: 24px 0;">
  <div style="text-align: center;">
    <div style="width: 40px; height: 40px; background: var(--color-brand-primary); border-radius: 4px; margin: 0 auto 12px; animation: pulse 150ms ease infinite; outline: 2px solid var(--color-brand-primary); outline-offset: 4px; opacity: 0.5;"></div>
    <div style="font-size: 12px; color: var(--color-light-text-secondary);">Fast 150ms</div>
    <div style="font-size: 11px; color: var(--color-light-text-tertiary);">Hover、过渡</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 40px; height: 40px; background: var(--color-brand-primary); border-radius: 4px; margin: 0 auto 12px; animation: pulse 300ms ease infinite;"></div>
    <div style="font-size: 12px; color: var(--color-light-text-secondary);">Base 300ms</div>
    <div style="font-size: 11px; color: var(--color-light-text-tertiary);">淡入、展开</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 40px; height: 40px; background: var(--color-brand-primary); border-radius: 4px; margin: 0 auto 12px; animation: pulse 500ms ease infinite;"></div>
    <div style="font-size: 12px; color: var(--color-light-text-secondary);">Slow 500ms</div>
    <div style="font-size: 11px; color: var(--color-light-text-tertiary);">进入、Slide</div>
  </div>
</div>

<style>
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>

```css
/* 快速过渡 */
.button {
  transition: background-color var(--motion-duration-fast) var(--motion-easing-default);
}

/* 基础过渡 */
.fade-in {
  animation: fadeIn var(--motion-duration-base) var(--motion-easing-out);
}

/* 缓慢过渡 */
.slide-up {
  animation: slideUp var(--motion-duration-slow) var(--motion-easing-out);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 总结

这些 Token 覆盖了设计系统的方方面面，配合使用能确保：

✅ **视觉一致性** — 统一的色彩、间距、字体  
✅ **易于维护** — 修改 Token 值，所有地方同步更新  
✅ **开发效率** — 开发者可以直接使用 Token，无需重复计算  
✅ **设计到开发** — 设计和代码无缝对接，减少沟通成本
