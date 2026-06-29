# 字体 Token

## 字体家族

| Token | 值 | 使用场景 |
|---|---|---|
| `--font-sans-zh` | `'Source Han Sans SC', 'PingFang SC', sans-serif` | 中文正文、标题 |
| `--font-sans-en` | `'Inter', -apple-system, sans-serif` | 英文正文、标题、数字 |

```css
/* 中文文本使用 */
.text-zh {
  font-family: var(--font-sans-zh);
}

/* 英文文本使用 */
.text-en {
  font-family: var(--font-sans-en);
}
```

---

## 字号系统

| Token | 值 | 使用场景 |
|---|---|---|
| `--font-size-display` | `56px` | Hero 主标题 |
| `--font-size-heading` | `32px` | 模块标题 |
| `--font-size-body` | `17px` | 正文 |
| `--font-size-caption` | `13px` | 辅助说明、图注 |

### 字号预览

<div style="border: 1px solid var(--color-light-border-default); border-radius: 8px; padding: 24px; background: var(--color-light-bg-surface);">

<div style="margin-bottom: 24px;">
  <div style="font-size: var(--font-size-display); font-weight: var(--font-weight-bold); line-height: var(--line-height-display); color: var(--color-light-text-primary); font-family: var(--font-sans-zh);">
    Display (56px)
  </div>
  <div style="font-size: 12px; color: var(--color-light-text-tertiary); margin-top: 4px;">
    --font-size-display
  </div>
</div>

<div style="margin-bottom: 24px;">
  <div style="font-size: var(--font-size-heading); font-weight: var(--font-weight-bold); line-height: var(--line-height-heading); color: var(--color-light-text-primary); font-family: var(--font-sans-zh);">
    Heading (32px)
  </div>
  <div style="font-size: 12px; color: var(--color-light-text-tertiary); margin-top: 4px;">
    --font-size-heading
  </div>
</div>

<div style="margin-bottom: 24px;">
  <div style="font-size: var(--font-size-body); font-weight: var(--font-weight-regular); line-height: var(--line-height-body-zh); color: var(--color-light-text-primary); font-family: var(--font-sans-zh);">
    Body (17px) - 这是正文文本。Sunrise Design System 提供了完整的 Token 文档，可以帮助团队保持设计的一致性。
  </div>
  <div style="font-size: 12px; color: var(--color-light-text-tertiary); margin-top: 4px;">
    --font-size-body
  </div>
</div>

<div>
  <div style="font-size: var(--font-size-caption); font-weight: var(--font-weight-regular); color: var(--color-light-text-tertiary); font-family: var(--font-sans-zh);">
    Caption (13px) - 辅助说明和图注文本
  </div>
  <div style="font-size: 12px; color: var(--color-light-text-tertiary); margin-top: 4px;">
    --font-size-caption
  </div>
</div>

</div>

---

## 字重

| Token | 值 | 使用场景 |
|---|---|---|
| `--font-weight-bold` | `700` | 主标题 |
| `--font-weight-medium` | `500` | 副标题、模块标题、数据标注 |
| `--font-weight-regular` | `400` | 正文、辅助说明 |

### 字重预览

<div style="border: 1px solid var(--color-light-border-default); border-radius: 8px; padding: 24px; background: var(--color-light-bg-surface);">

<div style="margin-bottom: 16px;">
  <div style="font-weight: var(--font-weight-bold); color: var(--color-light-text-primary);">Bold (700)</div>
  <div style="font-size: 12px; color: var(--color-light-text-tertiary);">--font-weight-bold</div>
</div>

<div style="margin-bottom: 16px;">
  <div style="font-weight: var(--font-weight-medium); color: var(--color-light-text-primary);">Medium (500)</div>
  <div style="font-size: 12px; color: var(--color-light-text-tertiary);">--font-weight-medium</div>
</div>

<div>
  <div style="font-weight: var(--font-weight-regular); color: var(--color-light-text-primary);">Regular (400)</div>
  <div style="font-size: 12px; color: var(--color-light-text-tertiary);">--font-weight-regular</div>
</div>

</div>

---

## 行高

| Token | 值 | 使用场景 |
|---|---|---|
| `--line-height-display` | `1.1` | Display / Hero 标题 |
| `--line-height-heading` | `1.2` | 模块标题 |
| `--line-height-body-zh` | `1.75` | 中文正文 |
| `--line-height-body-en` | `1.6` | 英文正文 |

```css
/* Display 标题 */
.display {
  font-size: var(--font-size-display);
  line-height: var(--line-height-display);
  font-weight: var(--font-weight-bold);
}

/* 模块标题 */
.heading {
  font-size: var(--font-size-heading);
  line-height: var(--line-height-heading);
  font-weight: var(--font-weight-bold);
}

/* 中文正文 */
.body-zh {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body-zh);
  font-family: var(--font-sans-zh);
}

/* 英文正文 */
.body-en {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body-en);
  font-family: var(--font-sans-en);
}
```
