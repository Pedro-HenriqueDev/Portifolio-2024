import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);
export default defineNuxtConfig({
    ssr: false,
    devtools: { enabled: true },
    typescript: {
        shim: false,
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/css/main.css"],
    vite: {
        ssr: {
            noExternal: ["vuetify"],
        },
    },
    modules: [
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config: any) =>
                config.plugins.push(
                    vuetify({
                        styles: { configFile: resolve("/assets/scss/_variables.scss") },
                    })
                )
            );
        },
        ,
    ],
});
