module.exports = {
  content:{
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ["./components/**/*.js", "./src/**/*.js"],}, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal': '#41B3A3',
      },
    },
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"],
      custom2: ["Custom-2", "sans-serif"],
      custom3: ["Custom-3", "sans-serif"],
      custom4: ["Custom-4", "sans-serif"],
      custom5: ["Custom-5", "sans-serif"],
      custom6: ["Custom-6", "sans-serif"],
      custom7: ["Custom-7", "sans-serif"],
      custom8: ["Custom-8", "sans-serif"],
      custom9: ["Custom-9", "sans-serif"],
      custom10: ["Custom-10", "sans-serif"],
      custom11: ["Custom-11", "sans-serif"],
      custom12: ["Custom-12", "sans-serif"],
      custom13: ["Custom-13", "sans-serif"],
      custom14: ["Custom-14", "sans-serif"],
      custom15: ["Custom-15", "sans-serif"],
      custom16: ["Custom-16", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
};
