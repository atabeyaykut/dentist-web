module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js',
      enableAll: true
    }),
    require('autoprefixer')
  ]
};
