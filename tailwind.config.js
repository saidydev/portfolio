/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#011635",
        bgvarient: "#0e2a53",
        primary: "#4db5ff",
        primaryvarient: "rgba(77,181,255,0.4);",
        white: "#ffff",
        whitevarient: "rgba(255,255,255,0.6);",
        nav: "rgba(0,0,0,0.3);",
      },
      fontSize: {
        lg: "25px",
        md: "18px",
        sm: "16px",
        head: "2.5rem",
      },
      fontFamily: {
        heading: ["Domine"],
        paragraph: ["Domine"]
      },
      height: {
        bg: "60vh",
        img: "40vh",
      },
      width: {
        bg: "30%",
        nav: "50%",
        img: "80%",
      },
      borderRadius: {
        top: "46%",
        nav: "30px",
        circle: "50%",
        p: "10px",
      },
      blur: {
        bl: "15px",
      },
      padding: {
        ic: "0.3rem",
      },
      margin: {
        mobiletop: "5%",
      }
    },
  },
  plugins: [],
}

