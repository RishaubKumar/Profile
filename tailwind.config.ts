import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
        accent: '#f59e42',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config; 