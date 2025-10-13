// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// REMOVA a variável repoName se for usar o caminho relativo
// const repoName = 'portifolio'; 

export default defineConfig({
  plugins: [react()],
  // MUDE o caminho base para './' (Ponto/Caminho Relativo)
  base: './', 
  build: {
    outDir: 'dist', 
  },
});