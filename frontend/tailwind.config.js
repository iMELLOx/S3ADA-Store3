/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-error-container": "#ffdad6",
        "surface-bright": "#393939",
        "on-tertiary-fixed-variant": "#454747",
        "outline-variant": "#5f3e3e",
        "on-primary-container": "#5b000f",
        "on-tertiary-container": "#282a2a",
        "on-surface-variant": "#e9bcba",
        "inverse-primary": "#bf002a",
        "surface-container-highest": "#353534",
        "inverse-on-surface": "#313030",
        "on-secondary": "#00363d",
        "surface-dim": "#131313",
        "secondary-container": "#00e3fd",
        "on-background": "#e5e2e1",
        "surface-container": "#201f1f",
        "on-error": "#690005",
        "primary-container": "#ff525c",
        "on-primary-fixed": "#410008",
        secondary: "#bdf4ff",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-high": "#2a2a2a",
        "on-secondary-container": "#00616d",
        surface: "#131313",
        tertiary: "#c6c6c7",
        "secondary-fixed": "#9cf0ff",
        "error-container": "#93000a",
        background: "#131313",
        "tertiary-fixed": "#e2e2e2",
        "on-tertiary-fixed": "#1a1c1c",
        "on-surface": "#e5e2e1",
        "inverse-surface": "#e5e2e1",
        "tertiary-fixed-dim": "#c6c6c7",
        error: "#ffb4ab",
        "on-secondary-fixed": "#001f24",
        "surface-variant": "#353534",
        "primary-fixed": "#ffdad8",
        primary: "#ffb3b2",
        "on-tertiary": "#2f3131",
        "on-primary-fixed-variant": "#92001e",
        "tertiary-container": "#909191",
        "secondary-fixed-dim": "#00daf3",
        "primary-fixed-dim": "#ffb3b2",
        "on-primary": "#680012",
        outline: "#af8786",
        "on-secondary-fixed-variant": "#004f58",
        "surface-tint": "#ffb3b2",
        "surface-container-low": "#1c1b1b"
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px"
      }
    }
  },
  plugins: []
};