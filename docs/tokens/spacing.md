# 间距 Token

| Token | 值 | 使用场景 |
|---|---|---|
| `--space-0-5` | `4px` | 图标内边距、Tag 内上下边距 |
| `--space-1` | `8px` | 行内元素间距、Badge 水平间距 |
| `--space-2` | `16px` | 按钮内边距、卡片内边距（紧凑） |
| `--space-3` | `24px` | 卡片内边距（标准）、表单控件间距 |
| `--space-4` | `32px` | 模块内部区块间距 |
| `--space-6` | `48px` | 模块内各组之间间距 |
| `--space-8` | `64px` | 页面内 Section 分隔 |
| `--space-12` | `96px` | Hero 区上下内边距 |
| `--space-16` | `128px` | 大 Section 之间的间距 |

## 间距视觉对比

<div style="background: var(--color-light-bg-base); padding: var(--space-4); border-radius: 8px;">

<div style="display: flex; align-items: flex-end; gap: var(--space-4); margin-bottom: var(--space-4);">
  <div style="text-align: center;">
    <div style="width: 4px; height: 60px; background: var(--color-brand-primary); border-radius: 2px; margin-bottom: 8px;"></div>
    <div style="font-size: 12px; color: var(--color-light-text-secondary);">4px</div>
    <div style="font-size: 11px; color: var(--color-light-text-tertiary);">space-0-5</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 8px; height: 100px; background: var(--color-brand-primary); border-radius: 2px; margin-bottom: 8px;"></div>
    <div style="font-size: 12px; color: var(--color-light-text-secondary);">8px</div>
    <div style="font-size: 11px; color: var(--color-light-text-tertiary);">space-1</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 16px; height: 200px; background: var(--color-brand-primary); border-radius: 2px; margin-bottom: 8px;"></div>
    <div style="font-size: 12px; color: var(--color-light-text-secondary);">16px</div>
    <div style="font-size: 11px; color: var(--color-light-text-tertiary);">space-2</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 24px; height: 300px; background: var(--color-brand-primary); border-radius: 2px; margin-bottom: 8px;"></div>
    <div style="font-size: 12px; color: var(--color-light-text-secondary);">24px</div>
    <div style="font-size: 11px; color: var(--color-light-text-tertiary);">space-3</div>
  </div>
  <div style="text-align: center;">
    <div style="width: 32px; height: 400px; background: var(--color-brand-primary); border-radius: 2px; margin-bottom: 8px;"></div>
    <div style="font-size: 12px; color: var(--color-light-text-secondary);">32px</div>
    <div style="font-size: 11px; color: var(--color-light-text-tertiary);">space-4</div>
  </div>
</div>

</div>

## 使用示例

### 按钮内边距

```css
.button {
  padding: var(--space-2);  /* 16px 紧凑模式 */
  padding: var(--space-3);  /* 24px 标准模式 */
}
```

### 卡片内边距

```css
.card {
  padding: var(--space-3);  /* 卡片标准内边距 */
}

.card-compact {
  padding: var(--space-2);  /* 卡片紧凑模式 */
}
```

### 元素之间间距

```css
.section {
  margin-bottom: var(--space-8);  /* Section 分隔 64px */
}

.block {
  margin-bottom: var(--space-4);  /* 区块间隔 32px */
}

.item {
  margin-bottom: var(--space-3);  /* 项目间隔 24px */
}
```

### 行内元素间距

```css
.badge {
  padding: 0 var(--space-1);  /* 左右 8px */
  margin-right: var(--space-1);  /* 右间隔 8px */
}
```

## 间距规模

间距系统遵循 **8px 基数** 的设计原则：

- **4px** (0.5x) — 微调、最小间隔
- **8px** (1x) — 基础间隔
- **16px** (2x) — 小间隔
- **24px** (3x) — 标准间隔
- **32px** (4x) — 大间隔
- **48px** (6x) — 组间隔
- **64px** (8x) — 模块间隔
- **96px** (12x) — Hero 区垂直间隔
- **128px** (16x) — 大模块间隔

这样的设计确保了整个界面的节奏感和视觉统一性。
