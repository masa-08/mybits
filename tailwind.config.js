module.exports = {
  content: ['./index.html', './src/**/*.{react,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'top-image': "url('/src/assets/neobaby-top-image.webp')",
        'top-image-mobile': "url('/src/assets/neobaby-top-image-mobile.webp')",
      },
      margin: {
        adjusted: 'calc((100vw - 1024px) / 2)',
        'force-screen': 'calc(50% - 50vw)',
      },
      height: {
        banner: 'calc(100vw / 2.5)',
      },
      colors: {
        'gray-blue': '#EDF2F5',
      },
      fontFamily: {
        fira: 'Fira Sans, san-serif',
      },
      boxShadow: {
        flat: '6px 6px',
        'flat-sm': '3px 3px',
      },
    },
  },
  plugins: [require('daisyui')],
}
