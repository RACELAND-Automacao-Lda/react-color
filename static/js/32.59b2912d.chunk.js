(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[32],{433:function(n,o,e){"use strict";e.r(o),o.default="React Color Colorful\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-colorful)](https://bundlephobia.com/package/@uiw/react-color-colorful) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-colorful.svg)](https://www.npmjs.com/package/@uiw/react-color-colorful) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-colorful/file/README.md)\n\nColorful Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n![react-color-colorful](https://user-images.githubusercontent.com/1680273/125949419-cdcac5cb-f5a9-47af-956f-4056630503c9.png)\n\n## Install\n\n```bash\nnpm i @uiw/react-color-colorful\n```\n\n## Usage\n\n```js\nimport Colorful from '@uiw/react-color-colorful';\n\nfunction Demo() {\n  const [hex, setHex] = useState(\"#fff\");\n  return (\n    <Colorful\n      color={hex}\n      onChange={(color) => {\n        setHex(color.hex);\n      }}\n    />\n  );\n}\n```\n\n## Props\n\n```ts\ninterface ColorfulProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {\n  prefixCls?: string;\n  onChange?: (color: ColorResult) => void;\n  color?: string | HsvaColor;\n}\n```\n\n\x3c!--footer-dividing--\x3e\n\n## License\n\nLicensed under the MIT License.\n"}}]);
//# sourceMappingURL=32.59b2912d.chunk.js.map