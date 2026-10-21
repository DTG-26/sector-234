import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    allowedHosts: true,
    cors: true,
    watch: {
      ignored: ['**/*.exe', '**/cloudflared*']
    }
  },
  preview: {
    host: true,
    port: 3000,
    allowedHosts: true,
    cors: true
  }
});
