import { Config } from "@stencil/core";
// import nodePolyfills from "rollup-plugin-node-polyfills";

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: "fireenjin",
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
      // serviceWorker: {
      //   swSrc: "src/sw.js",
      //   globPatterns: ["**/*.{js,css,json,html,ico,png}"],
      // },
      baseUrl: "https://theflood.team",
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
    // after: [nodePolyfills()],
  },
  sourceMap: true,
  globalScript: "src/app.ts",
  globalStyle: "src/app.css",
};
