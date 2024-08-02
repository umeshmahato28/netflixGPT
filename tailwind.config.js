/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [function({ addUtilities }) {
    const newUtilities = {
      '.scrollbar-hide': {
        /* Hide scrollbar for Webkit-based browsers (e.g., Chrome, Safari) */
        '::-webkit-scrollbar': {
          display: 'none',
        },
        /* Hide scrollbar for IE, Edge and Firefox */
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none',    /* Firefox */
      },
    };

    addUtilities(newUtilities);
  }],
} 