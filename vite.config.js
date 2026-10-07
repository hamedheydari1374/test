import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Sandbox preview only: the preview proxy forwards a rotating sandbox hostname
// (Host: <port>-<sandbox id>.<BASE44_SANDBOX_HOST_DOMAIN>). Extend the dev-server
// host allowlist with that wildcard so the preview can reach the dev server.
// Outside the sandbox (flag unset) the default localhost-only behaviour is kept.
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN
const allowedHosts =
  process.env.BASE44_PREVIEW_MODE === '1' && sandboxDomain
    ? ['localhost', '127.0.0.1', `.${sandboxDomain}`]
    : undefined

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts,
  },
})
