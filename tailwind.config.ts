import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',     // for app directory
    './pages/**/*.{js,ts,jsx,tsx}',   // for pages directory
    './components/**/*.{js,ts,jsx,tsx}', // for components
    
    './src/**/*.{js,ts,jsx,tsx}' 
  ],
safelist: [
  'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6',
  'md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4',
  'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4', 'lg:grid-cols-5',
  'columns-1', 'columns-2', 'columns-3', 'columns-4',
  'md:columns-2', 'md:columns-3', 'lg:columns-4'
],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config