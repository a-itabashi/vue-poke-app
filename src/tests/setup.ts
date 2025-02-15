// tests/setup.js
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { config } from '@vue/test-utils'
import router from '@/router' // router のパスが正しいか確認してください
import ResizeObserver from 'resize-observer-polyfill'
import App from '@/App.vue'

global.ResizeObserver = ResizeObserver

const app = createApp({})
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

createApp(App).use(vuetify).use(router).mount('#app')

// App に vuetify と router を使用
app.use(vuetify)
app.use(router)

// // config.global.plugins に vuetify と router を追加
// config.global.plugins.push(vuetify)
// config.global.plugins.push(router)
