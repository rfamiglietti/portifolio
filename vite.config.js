import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O nome do repositório é usado como caminho base para o deploy
const repoName = 'portfolio-romulo'; 

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // Adiciona /portfolio-romulo/ como base URL para todos os assets
  build: {
    outDir: 'dist', // Diretório padrão de saída do build
  },
});