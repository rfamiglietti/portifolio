// vite.config.js


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// const repoName = 'portifolio'; 

export default defineConfig({
  plugins: [react()],
  // CORREÇÃO FINAL: Usando caminho relativo para que o GitHub Pages encontre os assets
  base: './', 
  build: {
    outDir: 'dist', 
  },
});