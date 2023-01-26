import { Config } from "@stencil/core";
import nodePolyfills from "rollup-plugin-node-polyfills";

// https://stenciljs.com/docs/config

export const config: Config = {
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
      // serviceWorker: {
      //   swSrc: "src/sw.js",
      //   globPatterns: ["**/*.{js,css,json,html,ico,png}"],
      // },
      baseUrl: "https://fireenjin.com",
      copy: [
        {
          src: "robots.txt",
        },
        {
          src: "sitemap.xml",
        },
      ],
    },
    // {
    //   type: "dist",
    // },
    // {
    //   type: "dist-hydrate-script",
    //   dir: "functions/src/hydrate",
    // },
  ],
  rollupPlugins: {
    after: [nodePolyfills()],
  },
  globalScript: "src/app.ts",
  globalStyle: "src/app.css",
};
