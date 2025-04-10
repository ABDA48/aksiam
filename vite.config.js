import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path'; 
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        tailwindcss(),
        react(),
    ],
    resolve:{
        alias:{
            '@': path.resolve(__dirname, 'resources/js'),
        }
    },
    theme: {
        colors: {
          indigo: '#5c6ac4',
          primary: '#3ad6d1',
          red: '#de3618',
        }
    },
});
