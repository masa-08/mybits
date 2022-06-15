module.exports = {
  content: ['./index.html', './src/**/*.{react,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'top-image': "url('/src/assets/neobaby-top-image.webp')",
      },
      margin: {
        adjusted: 'calc((100vw - 1024px) / 2)',
        'force-screen': 'calc(50% - 50vw)',
      },
      height: {
        banner: 'calc(100vw / 2.5)',
      },
    },
  },
  plugins: [require('daisyui')],
}
