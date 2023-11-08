import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'linear-gradient(rgba(32,37,41,0.3), rgba(32,37,41,1)), url("/hero-bg.jpg")',
        contact:
          'linear-gradient(rgba(32,37,41,0.1), rgba(32,37,41,0.3)), url("/bg-3.jpg")',
        services:
          'linear-gradient(rgba(32,37,41,0.8), rgba(32,37,41,0.4)), url("/bg-2.jpg")',
      },
      fontFamily: {
        grenze: 'var(--font-grenze)',
      },
    },
  },
  plugins: [],
}
export default config
