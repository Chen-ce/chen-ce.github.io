import { HomeUnderline } from '@theojs/lumen'
import DefaultTheme from 'vitepress/theme'
import './var.css'
export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('Home', HomeUnderline)
  },
}