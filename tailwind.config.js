/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "logo": "#2b2d60",
        "primary-1": "#213269",
        "primary-1-light": "#bfd4e6",
        "primary-2": "#1f4e78",
        "secondary-1": "#65a2b3",
        "secondary-1-light": "#e3fcf9",
        "secondary-2": "#85b7bf",
        "accent-1": "#a2d0cc",
        "dark-1": "#10172e",
        "white-1": "#dceaee",
        "overlay-1": "#bfd4e6",
        "overlay-2": "#10172e",
        "filter-1": "#bfd4e6",
      },
      fontSize: {
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "1.75rem",
        "3xl": "2.5rem",
        "4xl": "3rem"
      },
      fontFamily: {
        "open-sans": "Open Sans",
        "inter": "Inter",
        "roboto": "Roboto"
      },
      boxShadow: {
        "box-1": "inset 0px 0px 20px 12px rgba(0,0,0,0.35)"
      },
      borderRadius: {
        "none": "0",
        "xs": "0.3rem",
        "sm": "0.5rem",
        "default": "0.75rem",
        "lg": "1rem",
        "full": "9999px"
      },
      backgroundColor: {
        'overlay-1': 'rgba(191, 212, 230, 0.75)',
        'overlay-2': 'rgba(16, 23, 46, 0.75)',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(180deg, rgba(31, 78, 120, 0.90) 0%, rgba(33, 50, 105, 0.90) 100%)',
        'gradient-2': 'linear-gradient(180deg, rgba(31, 104, 120, 0.90) 0%, rgba(33, 105, 101, 0.90) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
