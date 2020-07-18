const extend = require('./typographieTailwind.js');
module.exports = {
  target: 'ie11',
  purge: false,
  options: {
    prefix: '',
    important: false,
    separator: ':'
  },
  theme: {
    screens: {
      xs: { min: 'Opx', max: '500px' },
      sm: { min: '0px', max: '768px' },
      md: '768px',
      'scr-12': '1024px',
      'scr-13': '1280px',
      'scr-15': '1366px',
      'scr-19': '1440px',
      'scr-20': '1600',
      'scr-22': '1680'
    },
    fontFamily: {
      title: ['"Cormorant Garamond"', 'serif'],
      portfolio: ['"Roboto"', 'sans-serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },

    extend
  },
  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColors: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontSize: ['responsive', 'hover', 'focus'],
    fontWeights: ['responsive', 'hover'],
    height: ['responsive', 'hover'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive', 'hover', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive'],
    svgFill: [],
    svgStroke: [],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive', 'hover'],
    zIndex: ['responsive']
  },
  corePlugins: {},
  plugins: [
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: 'c-' // the prefix to use for text style classes
    })
  ]
};
