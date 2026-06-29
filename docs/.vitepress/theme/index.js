import { defineTheme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default defineTheme({
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // 自定义应用配置
  }
})
