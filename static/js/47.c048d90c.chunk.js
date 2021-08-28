(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[47],{438:function(e,n,o){"use strict";o.r(n),n.default="React Color Wheel\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-wheel)](https://bundlephobia.com/package/@uiw/react-color-wheel) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-wheel.svg)](https://www.npmjs.com/package/@uiw/react-color-wheel) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-wheel/file/README.md)\n\nWheel Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n![react-color-wheel](https://user-images.githubusercontent.com/1680273/125949147-ab96c3d8-1490-4418-b2cf-3f347993bdcb.png)\n\n## Install\n\n```bash\nnpm i @uiw/react-color-wheel\n```\n\n## Usage\n\n```js\nimport Wheel from '@uiw/react-color-wheel';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });\n  return (\n    <Wheel\n      hsva={hsva}\n      onChange={(color) => {\n        setHsva({ ...hsva, ...color.hsva });\n      }}\n    />\n  );\n}\n```\n\n## Props\n\n```ts\nimport { HsvaColor, ColorResult } from '@uiw/color-convert';\n\ninterface WheelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {\n  prefixCls?: string;\n  color?: string | HsvaColor;\n  width?: number;\n  height?: number;\n  radius?: React.CSSProperties['borderRadius'];\n  /** Starting angle of the color wheel's hue gradient, measured in degrees. */\n  angle?: number;\n  /** Direction of the color wheel's hue gradient; either clockwise or anticlockwise. Default: `anticlockwise` */\n  direction?: 'clockwise' | 'anticlockwise';\n  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;\n  onChange?: (color: ColorResult) => void;\n}\ninterface PointerProps extends React.HTMLAttributes<HTMLDivElement> {\n  prefixCls?: string;\n  top?: string;\n  left: string;\n  color?: string;\n}\n```\n\n\x3c!--footer-dividing--\x3e\n\n## License\n\nLicensed under the MIT License.\n"}}]);
//# sourceMappingURL=47.c048d90c.chunk.js.map