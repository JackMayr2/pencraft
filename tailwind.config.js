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
                primary: '#1155cc', // Royal blue
                secondary: '#cad5d8', // Light gray-blue
                accent: '#4d7cc3', // Lighter blue for accents
                darkblue: '#0e3c8c', // Darker blue for depth
                lightblue: '#e6eefb', // Very light blue for backgrounds
                dark: '#2e3e44', // Dark teal
                slate: '#6b7b8a', // Medium slate gray
                // Legacy colors as fallbacks
                blue: {
                    600: '#1155cc', // Map to primary for compatibility
                    700: '#0e3c8c', // Darker blue
                    400: '#4d7cc3', // Lighter blue
                    200: '#e6eefb', // Very light blue
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
                sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
                heading: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
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
                'tight': '-0.01em',
            },
            spacing: {
                '128': '32rem',
            },
            boxShadow: {
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'btn': '0 1px 2px rgba(0, 0, 0, 0.05)',
            },
        },
    },
    plugins: [],
} 