import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  // plugins: [vue()],
  // test: {
  //   environment: 'jsdom',
  // },
  // base: '/vue-poke-app/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // ここでエイリアスを設定
    },
  },
  plugins: [vue()],
  test: {
    globals: true,
    // setupFiles: ['src/tests/setup.ts'],
    environment: 'jsdom',
    // env: {
    //   VITE_POKEMON_URL: 'TEST_VITE_POKEMON_URL',
    //   VITE_SPECIES_URL: 'TEST_VITE_SPECIES_URL',
    // },
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
})
