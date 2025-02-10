import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// vite.config.js
export default {
  server: {
    port: process.env.PORT || 3000, // Cổng mặc định là 3000 hoặc sử dụng cổng được Render cung cấp
  },
};
