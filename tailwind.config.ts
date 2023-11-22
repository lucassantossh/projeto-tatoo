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
        hero: 'radial-gradient(circle, rgba(0,0,0,0.9),rgba(32,37,42,0.8) , rgba(0,0,0,0.6)), url("/backgrounds/hero-background.png")',
        address:
          'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("/backgrounds/address-background.jpg")',
        services:
          'linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.8)), url("/backgrounds/services-background.jpg")',
      },
      fontFamily: {
        grenze: 'var(--font-grenze)',
      },
    },
  },
  plugins: [],
}
export default config
