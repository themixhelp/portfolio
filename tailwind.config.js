module.exports = {
    purge: {
        enabled: true,
        layers: ["components", "utilities"],
        content: ["./src/*.pug", "./src/includes/*.pug"],
    },

    darkMode: false, // or 'media' or 'class'

    theme: {
        extend: {},

        colors: {
          color: "#f8f8f8",
          background: "#2e2e2e",
        },

        fontFamily: {
            display: ["'Poppins'"],
        },
    },

    variants: {
        extend: {},
    },

    plugins: [],
}