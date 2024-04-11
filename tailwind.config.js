/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#6c25ff",
        customPink: "#cebafb",
        customLightPurple: "#a981fc",
        profileBody: "#f7f8f9"
      }
    },
  },
  plugins: [],
}

