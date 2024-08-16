import { type ThemeDefinition, createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";

//import style
import "@/assets/scss/style.scss";

//Declare theme colors
const themecolors: ThemeDefinition = {
    colors: {
        background: "#405D72",
        primary: "#76ABAE",
        secondary: "#31363F",
        dark: "#222831",
    },
};

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        theme: {
            themes: {
                light: themecolors,
                dark: {
                    ...themecolors,
                    dark: true,
                },
            },
        },
    });

    nuxtApp.vueApp.use(vuetify);
});
