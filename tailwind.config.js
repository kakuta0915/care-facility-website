/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    // 共通のカラー
    colors: {
      "base-color": "#56534F",
      white: {
        DEFAULT: "#fff",
      },
      green: {
        DEFAULT: "#006400",
        2: "#228B22",
        3: "#CCE7D3",
      },
      red: {
        DEFAULT: "#B22D35",
      },
      blue: {
        DEFAULT: "#0067C0",
      },
    },
  },
  plugins: [],
};
