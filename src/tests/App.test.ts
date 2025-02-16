import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import { createGlobalConfig } from '@/tests//test-utils'

describe('App', () => {
  test('renders properly', () => {
    const wrapper = mount(App, {
      global: createGlobalConfig(),
    })
    expect(wrapper.exists()).toBeTruthy() // コンポーネントが存在するか確認
    expect(wrapper.html()).toContain('ポケモン図鑑') // HTMLに特定のテキストが含まれているか確認
  })
})
