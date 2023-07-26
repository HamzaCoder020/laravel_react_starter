import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

// vite.config.js

export default defineConfig({

    plugins: [
        laravel([
            'resources/js/app.jsx',
            'resources/css/app.css',
            'resources/css/queries.css'
        ]),
        react(),
    ],
});
