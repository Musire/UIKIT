import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// Function to resolve aliases
const resolveAliases = () => {
  return {
    '@': path.resolve(__dirname, 'src'),
  };
};

export default defineConfig(({ mode }) => {
  let env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.REACT_APP_API_CREATE_EMPLOYEE': JSON.stringify(env.REACT_APP_API_CREATE_EMPLOYEE),
    },
    resolve: {
      alias: resolveAliases(),
    },
    plugins: [
      react(),
      svgr(),
    ],
  };
});