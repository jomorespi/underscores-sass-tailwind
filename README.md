# SASS + TailwindCSS setup for Underscores WP Theme

## What
- SASS & Tailwind version of *sassified* [Underscores WP Theme](https://underscores.me/) SCSS files.
- TailwindCSS basic configuration
- Package.json file
- Laravelmix webpack.mix.js file

## Use it
1. Download your copy of [Underscores WP Theme](https://underscores.me/). Remember **not to sassify** it
2. Download the files from this repository and paste them into your theme. You can replace the **package.json** file. There's no need to do the same with **Readme.md**
3. Replace the theme information in **sass/style.sass** header
4. Run `npm install`
5. Use the scripts (`npm run dev`, `npm run watch` or `npm run prod`) and start developing your theme!

## Notes
- TailwindCSS first setup based on the instructions of the following repository: [underscores-tailwindcss](https://github.com/WyattCast44/underscores-tailwindcss)
- The original SCSS syntax has been replaced by SASS and TailwindCSS syntax, using the **@apply** rule as far as possible.
- The SASS variables used in Underscores has been respected, but all its values have been replaced using Tailwind's **theme()** function, so you'll be free to organize it in a way that you can manage them from Tailwind config file, using your colors, fonts, etc.

## Refs
- [Underscores WP Theme](https://underscores.me/)
- [SASS](https://sass-lang.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [underscores-tailwindcss](https://github.com/WyattCast44/underscores-tailwindcss)