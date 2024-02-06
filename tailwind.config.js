/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#d9d9d9",
        royalblue: "#415ed0",
        silver: "#bbbcc0",
        gray: {
          "100": "#111215",
          "200": "#121212",
          "300": "rgba(18, 18, 18, 0.44)",
          "400": "rgba(255, 255, 255, 0.73)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "31xl": "50px",
        "36xl": "55px",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      lgi: "1.19rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      sm: "0.88rem",
      base: "1rem",
      mini: "0.94rem",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
