module.exports = {
  content: ['./index.html', './src/**/*.{react,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        adjusted: 'calc((100vw - 1024px) / 2)',
        'force-screen': 'calc(50% - 50vw)',
      },
      height: {
        banner: 'calc(100vw / 2.5)',
        'banner-parallax-100': 'calc(100vw / 2.5 - 100px)',
      },
      width: {
        carousel: 'calc(100vw - 72px)',
      },
      colors: {
        'gray-blue': '#EDF2F5',
        black: '#2F2F2F',
        'light-slate': '#616E8D',
        'dark-slate': '#1F283D',
        'dark-bg': '#2B344A',
        'dark-content': '#979DB6',
        'dark-blue': '#303E60',
        'light-content': '#575757',
        'accent-green': '#009FAA',
      },
      fontFamily: {
        fira: 'Fira Sans, san-serif',
      },
      boxShadow: {
        'flat-md': '6px 6px',
        'flat-sm': '4px 4px',
        'flat-xs': '2px 2px',
      },
    },
  },
  plugins: [require('daisyui')],
}
