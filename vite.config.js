import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "https://Innovatech-SV51-202401.github.io/innovatech-front-end/",
  resolve: {
    alias: [

    ]
  },
})
