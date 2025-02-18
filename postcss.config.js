module.exports = {
  plugins: {
    'postcss-nesting': {},
    'autoprefixer': {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true
      }
    }
  },
} 