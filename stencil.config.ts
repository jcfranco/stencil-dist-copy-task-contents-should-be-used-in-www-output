import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-starter-project-name',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: "../node_modules/@esri/calcite-ui-icons/js/*.json", dest: "icons" }
      ]
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',

      // is this necessary or should anything in dist be considered content for `www/build/`?
      // copy: [
      //   { src: "../node_modules/@esri/calcite-ui-icons/js/*.json", dest: "build/icons" }
      // ],

      serviceWorker: null, // disable service workers
    },
  ],
};
