(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[42],{448:function(n,t,o){"use strict";o.r(t),t.default="React Color Saturation\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-saturation)](https://bundlephobia.com/package/@uiw/react-color-saturation) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-saturation.svg)](https://www.npmjs.com/package/@uiw/react-color-saturation) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-saturation/file/README.md)\n\nSaturation Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n![react-color-saturation](https://user-images.githubusercontent.com/1680273/125951532-ee5bb5df-1d1f-43ed-a4be-e7e8818bf897.png)\n\n## Install\n\n```bash\nnpm i @uiw/react-color-saturation\n```\n\n## Usage\n\n```js\nimport Saturation from '@uiw/react-color-saturation';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });\n  return (\n    <Saturation\n      hsva={hsva}\n      onChange={(newColor) => {\n        setHsva({ ...hsva, ...newColor, a: hsva.a });\n      }}\n    />\n  );\n}\n```\n\n## Props\n\n```ts\nimport { HsvaColor } from '@uiw/color-convert';\n\ninterface SaturationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {\n  prefixCls?: string;\n  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */\n  hsva: HsvaColor;\n  onChange?: (newColor: HsvaColor) => void;\n}\n```\n\n\x3c!--footer-dividing--\x3e\n\n## License\n\nLicensed under the MIT License.\n"}}]);
//# sourceMappingURL=42.52c9b102.chunk.js.map