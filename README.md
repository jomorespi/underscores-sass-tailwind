# SASS + TailwindCSS files for Underscores WP Theme

## What
SASS & Tailwind version of *sassified* [Underscores WP Theme](https://underscores.me/) SCSS files.

## Notes
- The original SCSS syntax has been replaced by SASS and TailwindCSS syntax, using the **@apply** rule as far as possible.
- The SASS variables used in Underscores have been respected, but all its values have been replaced using Tailwind's **theme()** function, so you'll be free to organize it in a way that you can manage them from Tailwind config file, using your colors, fonts, etc.
- The *generic* folder (containing *box-sizing* and *normalize* files) have been removed as they are no necessary when you are using a framework like Tailwind.