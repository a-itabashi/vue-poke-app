import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from '@/router'
import ResizeObserver from 'resize-observer-polyfill'

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = ResizeObserver

// グローバル設定を返す関数
export function createGlobalConfig() {
  return {
    plugins: [vuetify, router],
  }
}
