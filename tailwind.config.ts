const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        para_des: "0.95rem",
        para_mob: "0.9rem",
        h1_des: "3rem",
        h1_mob: "1.8rem",
        h2_des: "1.8rem",
        h2_mob: "1.5rem",
        h3_des: "1.4rem",
        h3_mob: "1.15rem",
      },
      colors: {
        bg_color: "black",
        text_color: "white",
      },
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
