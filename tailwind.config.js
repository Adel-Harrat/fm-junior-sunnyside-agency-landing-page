/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-soft-red": "hsl(7, 99%, 70%)",
        "tw-yellow": "hsl(51, 100%, 49%)",
        "tw-dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "tw-dark-blue-photography-text": "hsl(198, 62%, 26%)",
        "tw-dark-moderate-cyan-footer": "hsl(168, 34%, 41%)",
        "tw-very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "tw-very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "tw-dark-grayish-blue": "hsl(232, 10%, 55%)",
        "tw-grayish-blue": "hsl(210, 4%, 67%)",
        "tw-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "tw-primary": ["'Fraunces'", "serif"],
        "tw-secondary": ["'Barlow'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
