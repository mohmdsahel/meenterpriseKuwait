/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          // Updated to a greenish blue cyan tech green black Kuwaiti theme
          1: "#FFFFFF",    // White
          2: "#00A86B",    // Primary Tech Green (Emerald, close to Kuwaiti flag green)
          3: "#00A86B",    // Tech Green (formerly Tech Cyan)
          4: "#000000",    // True Black for main dark background
          5: "#20B2AA",    // Greenish Blue (Light Sea Green)
          6: "#00796B",    // Darker Tech Green
          7: "#F0F4F8",    // Light Grey/Off-white
          8: "#0A1A1A",    // Greenish Black
        },
        stroke: {
          1: "#00A86B4e",  // Primary Tech Green with transparency
          2: "#00A86B"     // Tech Green for secondary stroke (formerly Tech Cyan)
        },
        n: {
          // Updated n colors to use the new tech greenish Kuwaiti palette
          1: "#FFFFFF",    // White
          2: "#00A86B",    // Primary Tech Green
          3: "#00A86B",    // Tech Green (formerly Tech Cyan)
          4: "#20B2AA",    // Greenish Blue
          5: "#000000",    // True Black
          6: "#00796B",    // Darker Tech Green
          7: "#202220",    // Light Grey
          8: "#001000",    // Greenish Black
          9: "#E03A3E",    // Kuwaiti Red accent
          10: "#000000",   // True Black
          11: "#0A1A1A",   // Greenish Black
          12: "#FFFFFF",   // Primary Tech Green
          13: "#00A86B"    // Tech Green (formerly Tech Cyan)
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        // Updated conic gradient to use the new greenish blue cyan tech green black Kuwaiti palette
        "conic-gradient": "conic-gradient(from 225deg, #00A86B, #00796B, #00A86B, #FFFFFF, #20B2AA, #000000, #00A86B)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
