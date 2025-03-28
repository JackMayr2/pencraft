/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1e40af', // Royal blue
                secondary: '#cad5d8', // Light gray-blue
                dark: '#2e3e44', // Dark teal (moved from primary)
                // Legacy colors as fallbacks
                blue: {
                    600: '#1e40af', // Map to primary for compatibility
                },
                gray: {
                    50: '#f8f9fa',
                    100: '#f1f3f5',
                    200: '#e9ecef',
                    300: '#dee2e6',
                    400: '#ced4da',
                    500: '#adb5bd',
                    600: '#868e96',
                    700: '#495057',
                    800: '#343a40',
                    900: '#212529',
                },
            },
            fontFamily: {
                mono: ['var(--font-space-mono)', 'Space Mono', 'monospace'],
                sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
                heading: ['var(--font-space-mono)', 'Space Mono', 'monospace'],
                body: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
            },
            backgroundColor: {
                'light': '#cad5d8',
                'dark': '#2e3e44',
            },
            textColor: {
                'light': '#cad5d8',
                'dark': '#2e3e44',
            },
            letterSpacing: {
                'widest': '0.2em',
            },
            spacing: {
                '128': '32rem',
            },
        },
    },
    plugins: [],
} 