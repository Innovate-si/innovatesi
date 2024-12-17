import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // OPTION 1: Ocean Theme
        primary: {
          DEFAULT: "#1B3A5C",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E8F1F8",
          foreground: "#1B3A5C",
        },
        accent: {
          DEFAULT: "#2E8BC0",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F0F7FC",
          foreground: "#64748B",
        },

        // OPTION 2: Nature Theme
        // primary: {
        //   DEFAULT: "#2D4A3E",
        //   foreground: "#FFFFFF",
        // },
        // secondary: {
        //   DEFAULT: "#F3F7F4",
        //   foreground: "#2D4A3E",
        // },
        // accent: {
        //   DEFAULT: "#5C9D89",
        //   foreground: "#FFFFFF",
        // },
        // muted: {
        //   DEFAULT: "#EDF3F0",
        //   foreground: "#64748B",
        // },

        // OPTION 3: Sunset Theme
        // primary: {
        //   DEFAULT: "#2C1810",
        //   foreground: "#FFFFFF",
        // },
        // secondary: {
        //   DEFAULT: "#FFF6F4",
        //   foreground: "#2C1810",
        // },
        // accent: {
        //   DEFAULT: "#E85D3F",
        //   foreground: "#FFFFFF",
        // },
        // muted: {
        //   DEFAULT: "#FDF0EC",
        //   foreground: "#64748B",
        // },

        // Common colors (unchanged)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "var(--primary)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
