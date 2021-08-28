(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[48],{483:function(i,e,o){"use strict";o.r(e),e.default='<div align="center">\n  <a title="React Color" href="https://uiwjs.github.io/react-color/">\n    <img src="https://user-images.githubusercontent.com/1680273/126048210-964aa087-8641-428e-a4e4-67cdca812159.png" alt="@uiw/react-color" />\n  </a>\n</div>\n\n\x3c!--dividing--\x3e\n\n<div align="center">\n  <a href="https://github.com/uiwjs/react-color/actions/workflows/ci.yml">\n    <img alt="Build & Deploy" src="https://github.com/uiwjs/react-color/actions/workflows/ci.yml/badge.svg" />\n  </a>\n  <a href="https://coveralls.io/github/uiwjs/react-color?branch=main">\n    <img alt="Coverage Status" src="https://coveralls.io/repos/github/uiwjs/react-color/badge.svg?branch=main" />\n  </a>\n  <a href="https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md">\n    <img alt="Open in unpkg" src="https://img.shields.io/badge/Open%20in-unpkg-blue" />\n  </a>\n  <a href="https://bundlephobia.com/package/@uiw/react-color">\n    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@uiw/react-color" />\n  </a>\n  <a href="https://www.npmjs.com/package/@uiw/react-color">\n    <img alt="npm version" src="https://img.shields.io/npm/v/@uiw/react-color.svg" />\n  </a>\n</div>\n\n<div align="center">\n  <strong>react-color</strong> is a tiny color picker widget component for React apps. These components can be installed and used separately.\n</div>\n\n## Getting Started\n\n```bash\nnpm i @uiw/react-color\n```\n\n[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-color-example-rev1n?fontsize=14&hidenavigation=1&theme=dark) [![Open in Github gh-pages](https://img.shields.io/badge/Open%20In-Github%20gh--pages-blue?logo=github)](https://uiwjs.github.io/react-color/)\n\n```jsx\nimport { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from \'@uiw/react-color\';\nimport { Alpha, Hue, ShadeSlider, Saturation, Interactive, hsvaToHslaString } from \'@uiw/react-color\';\nimport { EditableInput, EditableInputRGBA, EditableInputHSLA } from \'@uiw/react-color\';\n\nfunction Demo() {\n  const [hex, setHex] = useState("#fff");\n  return (\n    <Sketch\n      style={{ marginLeft: 20 }}\n      color={hex}\n      onChange={(color) => {\n        setHex(color.hex);\n      }}\n    />\n  );\n}\n```\n\n## Packages\n\nPackage | Bundle size(gzip) | Version / unpkg\n----- | ----- | ----\n[`@uiw/react-color`](https://uiwjs.github.io/react-color/#getting-started) | [![npm bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color) |  [![npm version](https://img.shields.io/npm/v/@uiw/react-color.svg)](https://www.npmjs.com/package/@uiw/react-color) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md)\n[`@uiw/react-color-sketch`](https://uiwjs.github.io/react-color/#react-color-sketch) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-sketch?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-sketch?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-sketch) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-sketch/file/README.md)\n[`@uiw/react-color-slider`](https://uiwjs.github.io/react-color/#react-color-slider) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-slider?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-slider) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-slider?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-slider) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-slider/file/README.md)\n[`@uiw/react-color-compact`](https://uiwjs.github.io/react-color/#react-color-compact) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-compact?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-compact) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-compact?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-compact) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-compact.svg)](https://www.npmjs.com/package/@uiw/react-color-compact) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-compact/file/README.md)\n[`@uiw/react-color-material`](https://uiwjs.github.io/react-color/#react-color-material) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-material?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-material) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-material?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-material) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-material.svg)](https://www.npmjs.com/package/@uiw/react-color-material) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-material/file/README.md)\n[`@uiw/react-color-colorful`](https://uiwjs.github.io/react-color/#react-color-colorful) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-colorful?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-colorful) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-colorful?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-colorful) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-colorful.svg)](https://www.npmjs.com/package/@uiw/react-color-colorful) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-colorful/file/README.md)\n[`@uiw/react-color-wheel`](https://uiwjs.github.io/react-color/#react-color-wheel) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-wheel?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-wheel) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-wheel?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-wheel) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-wheel.svg)](https://www.npmjs.com/package/@uiw/react-color-wheel) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-wheel/file/README.md)\n[`@uiw/react-color-circle`](https://uiwjs.github.io/react-color/#react-color-circle) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-circle?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-circle) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-circle?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-circle) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-circle.svg)](https://www.npmjs.com/package/@uiw/react-color-circle) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-circle/file/README.md)\n[`@uiw/react-color-block`](https://uiwjs.github.io/react-color/#react-color-block) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-block?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-block) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-block?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-block) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-block.svg)](https://www.npmjs.com/package/@uiw/react-color-block) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-block/file/README.md)\n[`@uiw/react-color-chrome`](https://uiwjs.github.io/react-color/#react-color-chrome) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-chrome?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-chrome) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-chrome?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-chrome) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-chrome.svg)](https://www.npmjs.com/package/@uiw/react-color-chrome) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-chrome/file/README.md)\n[`@uiw/react-color-github`](https://uiwjs.github.io/react-color/#react-color-github) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-github?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-github) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-github?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-github) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-github.svg)](https://www.npmjs.com/package/@uiw/react-color-github) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-github/file/README.md)\n\n#### `Base Components`\n\nPackage | Bundle size(gzip) | Version / unpkg\n----- | ----- | ----\n[`@uiw/react-color-saturation`](https://uiwjs.github.io/react-color/#react-color-saturation) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-saturation?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-saturation) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-saturation?color=green&label=)](https://bundlephobia.com/package/@uiw/react-color-saturation) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-saturation.svg)](https://www.npmjs.com/package/@uiw/react-color-saturation) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-saturation/file/README.md)\n[`@uiw/react-color-hue`](https://uiwjs.github.io/react-color/#react-color-hue) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-hue?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-hue) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-hue?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-hue) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-hue.svg)](https://www.npmjs.com/package/@uiw/react-color-hue) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-hue/file/README.md)\n[`@uiw/react-color-alpha`](https://uiwjs.github.io/react-color/#react-color-alpha) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-alpha?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-alpha) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-alpha?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-alpha) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-alpha.svg)](https://www.npmjs.com/package/@uiw/react-color-alpha) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-alpha/file/README.md)\n[`@uiw/react-color-swatch`](https://uiwjs.github.io/react-color/#react-color-swatch) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-swatch?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-swatch) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-swatch?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-swatch) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-swatch.svg)](https://www.npmjs.com/package/@uiw/react-color-swatch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-swatch/file/README.md)\n[`@uiw/react-color-shade-slider`](https://uiwjs.github.io/react-color/#react-color-shade-slider) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-shade-slider?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-shade-slider?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-shade-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-shade-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-shade-slider/file/README.md)\n[`@uiw/react-color-editable-input`](https://uiwjs.github.io/react-color/#react-color-editable-input) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-editable-input?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input/file/README.md)\n[`@uiw/react-color-editable-input-rgba`](https://uiwjs.github.io/react-color/#react-color-editable-input-rgba) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-editable-input-rgba?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input-rgba) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input-rgba?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input-rgba) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input-rgba.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input-rgba) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input-rgba/file/README.md)\n[`@uiw/react-color-editable-input-hsla`](https://uiwjs.github.io/react-color/#react-color-editable-input-hsla) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-editable-input-hsla?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input-hsla) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input-hsla?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-editable-input-hsla) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input-hsla.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input-hsla) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input-hsla/file/README.md)\n[`@uiw/react-drag-event-interactive`](https://uiwjs.github.io/react-color/#react-drag-event-interactive) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-drag-event-interactive?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-drag-event-interactive) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-drag-event-interactive?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-drag-event-interactive) | [![npm version](https://img.shields.io/npm/v/@uiw/react-drag-event-interactive.svg)](https://www.npmjs.com/package/@uiw/react-drag-event-interactive) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-drag-event-interactive/file/README.md)\n[`@uiw/color-convert`](https://uiwjs.github.io/react-color/#color-convert) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/color-convert?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/color-convert) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/color-convert?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/color-convert) | [![npm version](https://img.shields.io/npm/v/@uiw/color-convert.svg)](https://www.npmjs.com/package/@uiw/color-convert) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/color-convert/file/README.md)\n[`@uiw/react-color-name`](https://uiwjs.github.io/react-color/#react-color-name) | [![bundle size](https://img.shields.io/bundlephobia/min/@uiw/react-color-name?color=3789D6&label=)](https://bundlephobia.com/package/@uiw/react-color-name) [![bundle size(gzip)](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-name?color=6ead0a&label=)](https://bundlephobia.com/package/@uiw/react-color-name) | [![npm version](https://img.shields.io/npm/v/@uiw/react-color-name.svg)](https://www.npmjs.com/package/@uiw/react-color-name) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-name/file/README.md)\n\n## License\n\nLicensed under the MIT License.\n'}}]);
//# sourceMappingURL=48.6ed0afdd.chunk.js.map