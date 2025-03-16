// tailwind.config.js
module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'test': '#000000',
        'purple': '#00ff00',  
      },
      textColor: {
        'custom': '#ff88dd',
      },
    }
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}