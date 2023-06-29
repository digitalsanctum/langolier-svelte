/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}",
    require('path').join(require.resolve(
            '@skeletonlabs/skeleton'),
        '../**/*.{html,js,svelte,ts}'
    )
  ],

  theme: {
    extend: { }
  },

  // skeleton should be last
  plugins: [
      ...require("@skeletonlabs/skeleton/tailwind/skeleton.cjs")(),
  ]
};

module.exports = config;
