(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[9],{118:function(e,t,r){"use strict";var a=r(2),o=r(4),n=r(0),i=r.n(n),c=r(12),s=r(7),l=r(27),d=r(53),u=r(56),b=r(1),p=["prefixCls","className","style","color","colors","onChange"],h=["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"],j=i.a.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-block":r,i=e.className,j=e.style,f=e.color,g=e.colors,m=void 0===g?h:g,v=e.onChange,x=Object(o.a)(e,p),O="string"===typeof f&&Object(c.a)(f)?Object(s.b)(f):f,w=f?Object(s.f)(O):"",y=function(e,t){"string"===typeof e&&Object(c.a)(e)&&/(3|6)/.test(String(e.length))&&v&&v(Object(s.a)(Object(s.b)(e)))};return Object(b.jsxs)("div",Object(a.a)({ref:t,className:[n,i].filter(Boolean).join(" "),style:Object(a.a)({width:170,borderRadius:6,background:"rgb(255, 255, 255)",boxShadow:"rgb(0 0 0 / 10%) 0 1px",position:"relative"},j)},x,{children:[Object(b.jsx)("div",{style:{width:0,height:0,borderStyle:"solid",borderWidth:"0 10px 10px",borderColor:"transparent transparent "+w,position:"absolute",top:-10,left:"50%",marginLeft:-10}}),Object(b.jsx)("div",{title:w,style:{backgroundColor:""+w,color:Object(l.a)(w),height:110,fontSize:18,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center"},children:w.toLocaleUpperCase()}),Object(b.jsx)(u.a,{colors:m,color:w,style:{paddingLeft:10,paddingTop:10},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:4,height:22,width:22}},onChange:function(e){v&&v(Object(s.a)(e))}}),Object(b.jsx)(d.a,{value:w.toLocaleUpperCase(),onChange:function(e,t){return y(t)},onBlur:function(e){var t=e.target.value;e.target.value=t.slice(0,6),y(t.slice(0,6))},inputStyle:{height:22,outline:0,borderRadius:3,color:"#666",padding:"0 7px"},style:{padding:10,paddingTop:0,borderRadius:"0 0 6px 6px"}})]}))}));j.displayName="Block",t.a=j},27:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(7),o=function(e){if(!e)return"#fff";var t=Object(a.a)(e);return(299*t.rgb.r+587*t.rgb.g+114*t.rgb.b)/1e3>=128?"#000":"#fff"}},466:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var a=r(48),o=r(49),n=r(50),i=r(5),c=r(0),s=r(118),l=r(51),d=r(6),u=r(1);function b(){var e=Object(c.useContext)(d.a),t=e.hsva,r=e.dispatch;return Object(u.jsx)("div",{style:{width:300},children:Object(u.jsx)(s.a,{color:t,onChange:function(e){r({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}})})}var p=function(e){Object(o.a)(i,e);var t=Object(n.a)(i);function i(){var e;Object(a.a)(this,i);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).editorUrl="/packages/color-block/README.md",e.getMdStr=function(){return r.e(29).then(r.bind(null,435))},e.example=Object(u.jsx)(b,{}),e}return i}(l.a)},51:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(48),o=r(54),n=r(49),i=r(50),c=r(0),s=r(55),l=r(52),d=r.n(l),u=r(1),b=function(e){Object(n.a)(r,e);var t=Object(i.a)(r);function r(e){var o;return Object(a.a)(this,r),(o=t.call(this,e)).editorUrl=void 0,o.getMdStr=void 0,o.example=void 0,o.state={mdStr:""},o}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:d.a.warpper,children:[Object(u.jsxs)("div",{className:d.a.markdown,children:[this.example&&Object(u.jsx)("div",{className:d.a.example,children:this.example}),Object(u.jsx)(s.a,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px"}})]}),Object(u.jsxs)("div",{className:d.a.footer,children:[Object(u.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color.svg",alt:"Github Issues"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(u.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})})]})]})}}]),r}(c.Component)},52:function(e,t,r){e.exports={markdown:"Markdown_markdown__2igKS",warpper:"Markdown_warpper__1Ekz5",example:"Markdown_example__3LCkn",footer:"Markdown_footer__2D6Vq"}},53:function(e,t,r){"use strict";var a=r(2),o=r(4),n=r(0),i=r.n(n),c=r(1),s=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],l=i.a.forwardRef((function(e,t){var r=e.prefixCls,i=void 0===r?"w-color-editable-input":r,l=e.placement,d=void 0===l?"bottom":l,u=e.label,b=e.value,p=e.className,h=e.style,j=e.labelStyle,f=e.inputStyle,g=e.onChange,m=e.onBlur,v=Object(o.a)(e,s),x=Object(n.useState)(b),O=x[0],w=x[1],y=Object(n.useRef)(!1);Object(n.useEffect)((function(){e.value!==O&&(y.current||w(e.value))}),[e.value]);var k={};return"bottom"===d&&(k.flexDirection="column"),"top"===d&&(k.flexDirection="column-reverse"),"left"===d&&(k.flexDirection="row-reverse"),Object(c.jsxs)("div",{className:[i,p||""].filter(Boolean).join(" "),style:Object(a.a)({position:"relative",alignItems:"center",display:"flex",fontSize:11},k,h),children:[Object(c.jsx)("input",Object(a.a)({ref:t,value:O,onChange:function(e,t){var r=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&g&&g(e,r);var a=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(a)||g&&g(e,a),w(r)},onBlur:function(t){y.current=!1,w(e.value),m&&m(t)},autoComplete:"off",onFocus:function(){return y.current=!0}},v,{style:Object(a.a)({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},f)})),u&&Object(c.jsx)("span",{style:Object(a.a)({color:"rgb(153, 153, 153)",textTransform:"capitalize"},j),children:u})]})}));l.displayName="EditableInput",t.a=l},56:function(e,t,r){"use strict";var a=r(2),o=r(4),n=r(0),i=r.n(n),c=r(7),s=r(1),l=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],d=i.a.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-swatch":r,d=e.className,u=e.color,b=e.colors,p=void 0===b?[]:b,h=e.style,j=e.rectProps,f=void 0===j?{}:j,g=e.onChange,m=e.addonAfter,v=e.addonBefore,x=e.rectRender,O=Object(o.a)(e,l),w=Object(a.a)({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},f.style),y=function(e){g&&g(Object(c.b)(e))};return Object(s.jsxs)("div",Object(a.a)({ref:t},O,{className:[n,d||""].filter(Boolean).join(" "),style:Object(a.a)({display:"flex",flexWrap:"wrap",position:"relative"},h),children:[v&&i.a.isValidElement(v)&&v,p&&Array.isArray(p)&&p.map((function(e,t){var r="",o="";"string"===typeof e&&(r=e,o=e),"object"===typeof e&&e.color&&(r=e.title||e.color,o=e.color);var n=u&&u.toLocaleLowerCase()===o.toLocaleLowerCase();if(x)return x({key:t,title:r,color:o,checked:!!n,style:Object(a.a)({},w,{background:o}),onClick:function(){return y(o)}});var c=f.children&&i.a.isValidElement(f.children)?i.a.cloneElement(f.children,{color:o,checked:n}):null;return Object(s.jsx)("div",Object(a.a)({tabIndex:0,title:r,onClick:function(){return y(o)}},f,{children:c,style:Object(a.a)({},w,{background:o})}),t)})),m&&i.a.isValidElement(m)&&m]}))}));d.displayName="Swatch",t.a=d}}]);
//# sourceMappingURL=9.4a57bb3d.chunk.js.map