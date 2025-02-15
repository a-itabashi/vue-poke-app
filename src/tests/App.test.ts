import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import ResizeObserver from 'resize-observer-polyfill'
import router from '@/router'

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = ResizeObserver

describe('App', () => {
  test('renders properly', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [vuetify, router],
      },
    })
    expect(wrapper.exists()).toBeTruthy() // コンポーネントが存在するか確認
    expect(wrapper.html()).toContain('ポケモン図鑑') // HTMLに特定のテキストが含まれているか確認
  })
})
