module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#D68F4C",
        "primary-light": "#DFAD77",
        "primary-middle": "#DBBB76",
        "primary-dark": "#D68F4C",
        "primary-white": "#F0EDE8",
        secondary: "#979797",
        "gray-light": "#f2f2f2",
        "gray-middle": "#e2e2e2",
        "gray-dark": "#505050",
        dark: "#131313",
        light: "#f7f7f7",
        danger: "#dc3545",
        success: "#20c997",
      },
    },
    fontFamily: {
      display: ["Optima"],
      displayB: ["Optima-B"],
      body: ["inter"],
    },
  },
  plugins: [],
};
