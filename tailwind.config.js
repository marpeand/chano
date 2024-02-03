/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography'
import { darkColor, lightColor } from './blog.config'

module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,tsx}',
        './layouts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                dark: darkColor || '#050505',
                light: lightColor || '#FFFFFF',
                white: '#eaeaea',
                silver: '#A5A5A5',
                black: '#353535',
                slate: '#6B6B6B',
                gray: '#525252',
                onyx: '#404040',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['dark'],
        },
    },
    plugins: [typography],
}
