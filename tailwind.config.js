module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
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
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('taos/plugin'),
  ],
};
