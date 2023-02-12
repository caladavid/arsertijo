module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#F5F5F5',
        'black': '#181818',
        'black-btn': '#050B12',
        'blue':'#376EB0'
      },

      animation: {
        'marquee': '32s linear infinite',
      },

      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      },
      fontSize: {
        title: '100px'
      },
      backgroundPosition: {
        button: '0 -100%'
      },
    },
  },
  plugins: [],
}
