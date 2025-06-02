// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    adapter: netlify(),
    output: 'server',
    experimental: {
        session: true, // ← active le flag expérimental si besoin
    },
    vite: {
        plugins: [tailwindcss()]
    },
});