#Underscores + SASS + Tailwind

## What and why
[Underscores WP Theme](https://underscores.me/) allows you to download a sassified copy, which uses SCSS. That's pretty cool, but I prefer [SASS](https://sass-lang.com/) instead of SCSS. And I'm used to work with [TailwindCSS](https://tailwindcss.com/). 

For that reason, I spent some time changing the syntax of the Underscores files to SASS and integrating TailwindCSS into the project.

## How
1. Downloaded a sassified copy of [Underscores](https://underscores.me/)
2. Integrated TailwindCSS following the example in the following repository: [underscores-tailwindcss](https://github.com/WyattCast44/underscores-tailwindcss)
3. Switched to SASS, reformating all SCSS files
4. Replaced the SASS syntax with the TailwindCSS syntax in all those files

Note that I decided to respect the SASS variables used in Underscores, but replaced all its values using using Tailwind's 'theme()' function, so you'll be free to organize it in a way that you can manage theme from Tailwind config file.

## Use it
1. Download your copy of [Underscores WP Theme](https://underscores.me/). Remember **not to sassify** it
2. Download the files from this repository and paste them into your theme. You will need to replace your **package.json** file. There's no need to do the same with **Readme.md**
3. Replace the theme information in **sass/style.sass** header
4. Run `npm install``
5. Use `npm run dev`, `npm run watch` or `npm run prod` and develop your theme!

## Refs
- [Underscores WP Theme](https://underscores.me/)
- [SASS](https://sass-lang.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [underscores-tailwindcss](https://github.com/WyattCast44/underscores-tailwindcss)