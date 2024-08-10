module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '64': '16rem', // Width for the sidebar
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #053BD3 0%, #03EAEA 100%)',
      },
      

    },
  },
  plugins: [],
}
