import { TransformOptions } from '@babel/core';

export const babelConfig: TransformOptions = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-typescript"
  ]
}
