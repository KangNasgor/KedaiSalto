import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';


export default defineConfig({
    resolve: {
        alias: {
          'components/Sidebar': '/js/Pages/components/Sidebar.jsx'
        }
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx', `resources/css/filament/admin/theme.css`],
            refresh: true,
        }),
    ],
});
