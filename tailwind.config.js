/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', "./node_modules/flowbite/**/*.js"],
    safelist: [
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'sm:text-2xl',
        'sm:text-3xl',
        'sm:text-4xl',
        'sm:text-5xl',
        'sm:text-6xl',
        'md:text-2xl',
        'md:text-3xl',
        'md:text-4xl',
        'md:text-5xl',
        'md:text-6xl',
        'lg:text-2xl',
        'lg:text-3xl',
        'lg:text-4xl',
        'lg:text-5xl',
        'lg:text-6xl',
    ],
  theme: {
    colors: {
      primary: '#1D1D1B',
      primary_light: '#353532',
      accent: '#AAFF17',
      accent_light: '#D4FF5B',
      secondary: '#2037BA',
      white: '#FFFFFF',
      bg: '#EDE7E2',
      purple: '#592270',
    },

    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {}
  },
  plugins: [
    require('flowbite/plugin')
  ],
}