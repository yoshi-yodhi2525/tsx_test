import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 公開するリポジトリ名に合わせて設定します
  base: '/event/', 
})
