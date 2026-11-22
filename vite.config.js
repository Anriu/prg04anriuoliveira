// Configuração do Vite. O build de produção é gerado em dist/, pasta publicada
// no deploy (Vercel/Netlify).
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
