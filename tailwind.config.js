/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      backgroundImage: {
        'hero-pattern': "url('/image/ableton.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'fcottonbro': "url('/image/pexels-cottonbro-studio.jpg')",
        'hotang': "url('/image/pexels-hồ-thành.jpg')",
        'headerimg': "url('/image/hederimg.png')",
        'bgpromo': "url(/image/diskonbg.jpg)"

      },
      fontFamily: {
        poppins: ['Poppins']
      }

      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
