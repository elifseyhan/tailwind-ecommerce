module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily:{
        poppins: 'Poppins, sans-serif',
        roboto: 'Roboto, sans-serif'
      }
    },
    colors: {
      'transparent': 'transparent',
      'white': 'white',
      'primary': '#FD3D57'
    },
  },
  plugins: [],
}
