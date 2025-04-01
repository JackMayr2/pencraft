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
                primary: {
                    DEFAULT: '#da4e25', // Orange-red
                    light: '#f26d49', // Lighter orange-red
                    dark: '#b54020', // Darker orange-red
                },
                secondary: {
                    DEFAULT: '#4f645c', // Forest green
                    light: '#6a7d76', // Lighter forest green
                    dark: '#3a4c45', // Darker forest green
                },
                accent: {
                    DEFAULT: '#883e49', // Burgundy
                    light: '#ad5e6a', // Lighter burgundy
                    dark: '#6a2f38', // Darker burgundy
                },
                'iridescent': {
                    DEFAULT: '#00d722', // Base iridescent green
                    light: '#5aff73', // Light iridescent green
                    dark: '#008815', // Dark iridescent green
                },
                dark: '#000000', // Black
                slate: {
                    DEFAULT: '#37404d', // Slate blue-gray
                    light: '#5c6575', // Lighter slate
                },
                cream: '#f8f5f0', // Cream color for backgrounds
                sand: '#e8e0d0', // Sandy color for accents
                light: '#ffffff', // White
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
                sans: ['var(--font-avant-garde)', 'Poppins', 'sans-serif'],
                heading: ['var(--font-avant-garde)', 'Poppins', 'sans-serif'],
                body: ['var(--font-avant-garde)', 'Poppins', 'sans-serif'],
                'avant-garde': ['var(--font-avant-garde)', 'Poppins', 'sans-serif'],
            },
            backgroundColor: {
                'light': '#FFFFFF',
                'dark': '#000000',
                'cream': '#f8f5f0',
                'sand': '#e8e0d0',
                'iridescent': '#00d722',
                'iridescent-light': '#5aff73',
                'iridescent-dark': '#008815',
            },
            textColor: {
                'light': '#FFFFFF',
                'dark': '#000000',
                'iridescent': '#00d722',
                'iridescent-light': '#5aff73',
                'iridescent-dark': '#008815',
            },
            letterSpacing: {
                'widest': '0.2em',
                'tight': '-0.01em',
            },
            spacing: {
                '128': '32rem',
            },
            borderRadius: {
                'xs': '0.125rem',
                'sm': '0.25rem',
                DEFAULT: '0.375rem',
                'md': '0.5rem',
                'lg': '0.75rem',
                'xl': '1rem',
                '2xl': '1.5rem',
                'full': '9999px',
            },
            boxShadow: {
                sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
                DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                outline: '0 0 0 3px rgba(218, 78, 37, 0.5)',
                'primary': '0 4px 14px rgba(218, 78, 37, 0.25)',
                'accent': '0 4px 14px rgba(136, 62, 73, 0.25)',
                'iridescent': '0 4px 14px rgba(0, 215, 34, 0.3)',
                'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                none: 'none',
            },
            backgroundImage: {
                'funky-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23da4e25' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM22.24 0v1.41l2.83 2.83L23.66 5.66 26.49 8.49l1.41-1.41L25.07 4.25V0h-2.83zm1.41 30.74L26.49 29.4l1.41 1.41-3.25 3.25H22.24v-1.41l1.41-1.41zm8.49-22.24l1.41 1.41-1.41 1.41.71.71 2.12-2.12-2.12-2.12-.71.71z'/%3E%3C/g%3E%3C/svg%3E\")",
                'dots-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234f645c' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
                'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23883e49' stroke-opacity='0.1' stroke-width='1'%3E%3Cpath d='M0 20h40M20 0v40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                'waves-pattern': "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23da4e25' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                'paisley-pattern': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f645c' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                'organic-pattern': "url(\"data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23883e49' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                'hex-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E\")",
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'wiggle': 'wiggle 3s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'sheen': 'sheen 8s infinite linear',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                sheen: {
                    '0%': { transform: 'rotate(25deg) translate(-30%, -30%)' },
                    '100%': { transform: 'rotate(25deg) translate(30%, 30%)' },
                }
            },
        },
    },
    plugins: [],
} 