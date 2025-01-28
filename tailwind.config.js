import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'Sans-Serif'],
                jua: ['Jua', 'sans-serif'],
            },
            backgroundImage: {
                hero: "url('/public/asset/dumpling-hero.jpg')",
            },
        },
    },
    plugins: [],
};
