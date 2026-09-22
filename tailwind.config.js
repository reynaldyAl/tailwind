/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {

        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Memindai seluruh file HTML & JS di proyek
  content: ["./**/*.{html,js}"],

  theme: {
    // "extend" berfungsi MENAMBAHKAN tanpa menghapus warna/font bawaan Tailwind
    extend: {
      colors: {
        midnight: "#121063",
        brand: "#06b6d4",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        glory: ["Give You Glory", "cursive"],
      },
    },
  },

  plugins: [],
}
