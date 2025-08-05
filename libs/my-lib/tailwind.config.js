const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8',     
          dark: '#1E40AF',        
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#D97706',
          dark: '#B45309',
          light: '#FBBF24',
        },
      },
    },
  },
  plugins: [],
};
