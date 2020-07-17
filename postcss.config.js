// postcss.config.js
module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: ['./pages/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}', './components/*.{js,jsx,ts,tsx}'],
            whitelist: ['html', 'body', '../styles/nprogress.css'],
            defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || []
          }
        ]
      : undefined,
    'autoprefixer'
  ]
};
