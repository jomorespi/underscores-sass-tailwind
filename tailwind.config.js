module.exports = {
  content: [
    './inc/**/*.php',
    './js/**/*.js',
    './sass/**/*.sass',
    './template-parts/**/*.php',
    './404.php',
    './archive.php',
    './comments.php',
    './footer.php',
    './functions.php',
    './header.php',
    './index.php',
    './page.php',
    './search.php',
    './sidebar.php',
    './single.php',
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': 'Calisto MT, Bookman Old Style, Bookman, Goudy Old Style, Garamond, Hoefler Text, Bitstream Charter, Georgia, serif',
        'body': 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif',
        'code': 'monaco, consolas, "Andale Mono", "DejaVu Sans Mono", monospace'
      }
    },
  },
  plugins: [],
}
