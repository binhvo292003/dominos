/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx}', // Assuming you might have pages directory for Next.js
        './components/**/*.{js,jsx,ts,tsx}',
        './app/**/*.{js,jsx,ts,tsx}',
        './public/**/*.html', // If you have any HTML files in the public directory
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
