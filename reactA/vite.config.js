import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/reactA/', // ベースURLを設定
  plugins: [react()],
});
