// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:'/UDC_Test/'
  // 🚫 No base config — makes it work from root path
});
