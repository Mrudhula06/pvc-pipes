/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      ssm:'375px',
      ss:'512px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
    },
    extend: {},
  },
  plugins: [],
}

