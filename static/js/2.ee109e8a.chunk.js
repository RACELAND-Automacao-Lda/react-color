(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[2],{443:function(e,t,r){"use strict";var o=r(5),n=r(2),a=r.n(n),s=r(7),i=r.n(s),l=r(0),c=r.n(l),p=r(11),d=r(8),u=r(90),b=r(60),h=r(59),f=r(44),g=r(50),j=r(54),x=r(89),v=r(1),m=["style"];function y(e){var t=e.style,r=i()(e,m),o=Object(l.useRef)(null),n=Object(l.useCallback)((function(e){o.current.style.backgroundColor="#e8e8e8"}),[]),s=Object(l.useCallback)((function(e){o.current.style.backgroundColor="transparent"}),[]);return Object(v.jsx)("div",a()({ref:o,style:a()({marginLeft:5,cursor:"pointer",transition:"background-color .3s",borderRadius:2},t)},r,{onMouseEnter:n,onMouseLeave:s,children:Object(v.jsx)("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24",style:{display:"block"},children:Object(v.jsx)("path",{d:"M373.888 576h276.224c9.322667 0 14.293333 11.178667 9.173333 18.773333l-1.258666 1.557334-138.112 146.858666a10.709333 10.709333 0 0 1-14.293334 1.365334l-1.536-1.365334-138.112-146.858666c-6.592-6.997333-2.666667-18.645333 5.973334-20.16l1.941333-0.170667h276.224-276.224z m146.026667-295.189333l138.112 146.858666c7.04 7.509333 2.069333 20.330667-7.914667 20.330667H373.888c-9.984 0-14.976-12.821333-7.914667-20.330667l138.112-146.858666a10.730667 10.730667 0 0 1 15.829334 0z",fill:"#333"})})}))}var O,C=["prefixCls","className","style","color","inputType","rectProps","onChange"];!function(e){e.HEXA="hexa",e.RGBA="rgba",e.HSLA="hsla"}(O||(O={}));var w=c.a.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-chrome":r,s=e.className,c=e.color,m=e.inputType,w=void 0===m?O.RGBA:m,B=(e.rectProps,e.onChange),R=i()(e,C),S="string"===typeof c&&Object(p.a)(c)?Object(d.b)(c):c||{h:0,s:0,l:0,a:0},k=function(e){return B&&B(Object(d.a)(e))},L=Object(l.useState)(w),N=Object(o.a)(L,2),P=N[0],T=N[1],A={paddingTop:6},E={textAlign:"center",paddingTop:4,paddingBottom:4};return Object(v.jsx)(u.b,a()({ref:t,color:S,style:{borderRadius:0,flexDirection:"column",width:230,padding:0},colors:void 0,className:[n,s].filter(Boolean).join(" "),placement:u.a.TopLeft},R,{addonAfter:Object(v.jsxs)(l.Fragment,{children:[Object(v.jsx)(b.a,{hsva:S,style:{width:"100%",height:130},onChange:function(e){k(a()({},S,e,{a:S.a}))}}),Object(v.jsxs)("div",{style:{padding:15,display:"flex",alignItems:"center"},children:[Object(v.jsx)(f.b,{width:24,height:24,hsva:S,radius:2,style:{marginRight:15,borderRadius:"50%"},bgProps:{style:{background:"transparent"}},innerProps:{style:{borderRadius:"50%",background:Object(d.l)(S),boxShadow:"rgb(0 0 0 / 25%) 0px 0px 1px inset"}},pointer:function(){return Object(v.jsx)(l.Fragment,{})}}),Object(v.jsxs)("div",{style:{flex:1},children:[Object(v.jsx)(h.a,{hue:S.h,style:{width:"100%"},bgProps:{style:{borderRadius:2}},onChange:function(e){k(a()({},S,e))}}),Object(v.jsx)(f.b,{hsva:S,style:{marginTop:10},bgProps:{style:{borderRadius:2}},onChange:function(e){k(a()({},S,e))}})]})]}),Object(v.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",padding:"0 15px 15px 15px",userSelect:"none"},children:[Object(v.jsxs)("div",{style:{flex:1},children:[P==O.RGBA&&Object(v.jsx)(j.a,{hsva:S,rProps:{labelStyle:A,inputStyle:E},gProps:{labelStyle:A,inputStyle:E},bProps:{labelStyle:A,inputStyle:E},aProps:{labelStyle:A,inputStyle:E},onChange:function(e){return k(e.hsva)}}),P===O.HEXA&&Object(v.jsx)(g.a,{label:"HEX",labelStyle:A,inputStyle:E,value:S.a>0&&S.a<1?Object(d.g)(S).toLocaleUpperCase():Object(d.f)(S).toLocaleUpperCase(),onChange:function(e,t){"string"===typeof t&&k(Object(d.b)(/^#/.test(t)?t:"#"+t))}}),P===O.HSLA&&Object(v.jsx)(x.a,{hsva:S,hProps:{labelStyle:A,inputStyle:E},sProps:{labelStyle:A,inputStyle:E},lProps:{labelStyle:A,inputStyle:E},aProps:{labelStyle:A,inputStyle:E},onChange:function(e){return k(e.hsva)}})]}),Object(v.jsx)(y,{onClick:function(){P===O.RGBA&&T(O.HSLA),P===O.HSLA&&T(O.HEXA),P===O.HEXA&&T(O.RGBA)}})]})]}),rectRender:function(e){var t=e.key;return Object(v.jsx)(l.Fragment,{},t)}}))}));w.displayName="Chrome";t.a=w},48:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var o=r(45),n=r(51),a=r(46),s=r(47),i=r(0),l=r(52),c=r(49),p=r.n(c),d=r(1),u=function(e){Object(a.a)(r,e);var t=Object(s.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).editorUrl=void 0,n.getMdStr=void 0,n.example=void 0,n.state={mdStr:""},n}return Object(n.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:p.a.warpper,children:[Object(d.jsxs)("div",{className:p.a.markdown,children:[this.example&&Object(d.jsx)("div",{className:p.a.example,children:this.example}),Object(d.jsx)(l.a,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px"}})]}),Object(d.jsxs)("div",{className:p.a.footer,children:[Object(d.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color.svg",alt:"Github Issues"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),Object(d.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(d.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:Object(d.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),Object(d.jsxs)("p",{children:["Copyright \xa9 2021"," ",Object(d.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(i.Component)},49:function(e,t,r){e.exports={markdown:"Markdown_markdown__2igKS",warpper:"Markdown_warpper__1Ekz5",example:"Markdown_example__3LCkn",footer:"Markdown_footer__2D6Vq"}},50:function(e,t,r){"use strict";var o=r(5),n=r(2),a=r.n(n),s=r(7),i=r.n(s),l=r(0),c=r.n(l),p=r(1),d=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],u=c.a.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-editable-input":r,s=e.placement,c=void 0===s?"bottom":s,u=e.label,b=e.value,h=e.className,f=e.style,g=e.labelStyle,j=e.inputStyle,x=e.onChange,v=e.onBlur,m=i()(e,d),y=Object(l.useState)(b),O=Object(o.a)(y,2),C=O[0],w=O[1],B=Object(l.useRef)(!1);Object(l.useEffect)((function(){e.value!==C&&(B.current||w(e.value))}),[e.value]);var R={};return"bottom"===c&&(R.flexDirection="column"),"top"===c&&(R.flexDirection="column-reverse"),"left"===c&&(R.flexDirection="row-reverse"),Object(p.jsxs)("div",{className:[n,h||""].filter(Boolean).join(" "),style:a()({position:"relative",alignItems:"center",display:"flex",fontSize:11},R,f),children:[Object(p.jsx)("input",a()({ref:t,value:C,onChange:function(e,t){var r=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&x&&x(e,r);var o=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(o)||x&&x(e,o),w(r)},onBlur:function(t){B.current=!1,w(e.value),v&&v(t)},autoComplete:"off",onFocus:function(){return B.current=!0}},m,{style:a()({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},j)})),u&&Object(p.jsx)("span",{style:a()({color:"rgb(153, 153, 153)",textTransform:"capitalize"},g),children:u})]})}));u.displayName="EditableInput",t.a=u},53:function(e,t,r){"use strict";var o=r(2),n=r.n(o),a=r(7),s=r.n(a),i=r(0),l=r.n(i),c=r(8),p=r(1),d=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],u=l.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-swatch":r,a=e.className,i=e.color,u=e.colors,b=void 0===u?[]:u,h=e.style,f=e.rectProps,g=void 0===f?{}:f,j=e.onChange,x=e.addonAfter,v=e.addonBefore,m=e.rectRender,y=s()(e,d),O=n()({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},g.style),C=function(e){j&&j(Object(c.b)(e))};return Object(p.jsxs)("div",n()({ref:t},y,{className:[o,a||""].filter(Boolean).join(" "),style:n()({display:"flex",flexWrap:"wrap",position:"relative"},h),children:[v&&l.a.isValidElement(v)&&v,b&&Array.isArray(b)&&b.map((function(e,t){var r="",o="";"string"===typeof e&&(r=e,o=e),"object"===typeof e&&e.color&&(r=e.title||e.color,o=e.color);var a=i&&i.toLocaleLowerCase()===o.toLocaleLowerCase();if(m)return m({key:t,title:r,color:o,checked:!!a,style:n()({},O,{background:o}),onClick:function(){return C(o)}});var s=g.children&&l.a.isValidElement(g.children)?l.a.cloneElement(g.children,{color:o,checked:a}):null;return Object(p.jsx)("div",n()({tabIndex:0,title:r,onClick:function(){return C(o)}},g,{children:s,style:n()({},O,{background:o})}),t)})),x&&l.a.isValidElement(x)&&x]}))}));u.displayName="Swatch",t.a=u},54:function(e,t,r){"use strict";var o=r(2),n=r.n(o),a=r(7),s=r.n(a),i=r(0),l=r.n(i),c=r(50),p=r(8),d=r(1),u=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],b=l.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-editable-input-rgba":r,a=e.hsva,i=e.placement,l=void 0===i?"bottom":i,b=e.rProps,h=void 0===b?{}:b,f=e.gProps,g=void 0===f?{}:f,j=e.bProps,x=void 0===j?{}:j,v=e.aProps,m=void 0===v?{}:v,y=e.className,O=e.style,C=e.onChange,w=s()(e,u),B=a?Object(p.k)(a):{};function R(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var S=function(e,t,r){"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),C&&C(Object(p.a)(Object(p.m)(n()({},B,{a:e/100}))))),e>255&&(e=255,r.target.value="255"),e<0&&(e=0,r.target.value="0"),"r"===t&&C&&C(Object(p.a)(Object(p.m)(n()({},B,{r:e})))),"g"===t&&C&&C(Object(p.a)(Object(p.m)(n()({},B,{g:e})))),"b"===t&&C&&C(Object(p.a)(Object(p.m)(n()({},B,{b:e})))))};return Object(d.jsxs)("div",n()({ref:t,className:[o,y||""].filter(Boolean).join(" ")},w,{style:n()({fontSize:11,display:"flex"},O),children:[Object(d.jsx)(c.a,n()({label:"R",value:B.r||0,onBlur:R,placement:l,onChange:function(e,t){return S(t,"r",e)}},h,{style:n()({},h.style)})),Object(d.jsx)(c.a,n()({label:"G",value:B.g||0,onBlur:R,placement:l,onChange:function(e,t){return S(t,"g",e)}},g,{style:n()({marginLeft:5},h.style)})),Object(d.jsx)(c.a,n()({label:"B",value:B.b||0,onBlur:R,placement:l,onChange:function(e,t){return S(t,"b",e)}},x,{style:n()({marginLeft:5},x.style)})),m&&Object(d.jsx)(c.a,n()({label:"A",value:B.a?parseInt(String(100*B.a),10):0,onBlur:R,placement:l,onChange:function(e,t){return S(t,"a",e)}},m,{style:n()({marginLeft:5},m.style)}))]}))}));b.displayName="EditableInputRGBA",t.a=b},59:function(e,t,r){"use strict";var o=r(2),n=r.n(o),a=r(7),s=r.n(a),i=r(0),l=r.n(i),c=r(44),p=r(1),d=["prefixCls","className","hue","onChange","direction"],u=l.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-hue":r,a=e.className,i=e.hue,l=void 0===i?0:i,u=e.onChange,b=e.direction,h=void 0===b?"horizontal":b,f=s()(e,d);return Object(p.jsx)(c.b,n()({ref:t,className:o+" "+(a||"")},f,{direction:h,background:"linear-gradient(to "+("horizontal"===h?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:l,s:100,v:100,a:l/360},onChange:function(e,t){u&&u({h:"horizontal"===h?360*t.left:360*t.top})}}))}));u.displayName="Hue",t.a=u},60:function(e,t,r){"use strict";var o=r(2),n=r.n(o),a=r(7),s=r.n(a),i=r(0),l=r.n(i),c=r(8),p=r(16),d=r(1),u=function(e){var t=e.className,r=e.color,o=e.left,n=e.top,a=e.prefixCls,s={position:"absolute",top:n,left:o};return Object(i.useMemo)((function(){return Object(d.jsx)("div",{className:a+"-pointer "+(t||""),style:s,children:Object(d.jsx)("div",{className:a+"-fill",style:{width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:r}})})}),[n,o,r,t,a])},b=["prefixCls","radius","pointer","className","style","hsva","onChange"],h=l.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-saturation":r,a=e.radius,i=void 0===a?0:a,h=e.pointer,f=e.className,g=e.style,j=e.hsva,x=e.onChange,v=s()(e,b),m=n()({width:200,height:200,borderRadius:i},g,{position:"relative"}),y=function(e,t){x&&x({h:j.h,s:100*e.left,v:100*(1-e.top),a:j.a})},O={top:100-j.v+"%",left:j.s+"%",color:Object(c.j)(j)};return Object(d.jsx)(p.a,n()({className:[o,f||""].filter(Boolean).join(" ")},v,{style:n()({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+j.h+", 100%, 50%))"},m),ref:t,onMove:y,onDown:y,children:l.a.createElement(h||u,n()({prefixCls:o},O))}))}));h.displayName="Saturation";t.a=h},89:function(e,t,r){"use strict";var o=r(2),n=r.n(o),a=r(7),s=r.n(a),i=r(0),l=r.n(i),c=r(54),p=r(8),d=r(1),u=["prefixCls","hsva","hProps","sProps","lProps","aProps","className","onChange"],b=l.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-editable-input-hsla":r,a=e.hsva,i=e.hProps,l=void 0===i?{}:i,b=e.sProps,h=void 0===b?{}:b,f=e.lProps,g=void 0===f?{}:f,j=e.aProps,x=void 0===j?{}:j,v=e.className,m=e.onChange,y=s()(e,u),O=a?Object(p.i)(a):{h:0,s:0,l:0,a:0},C=function(e,t,r){"number"===typeof e&&("h"===t&&(e<0&&(e=0),e>360&&(e=360),m&&m(Object(p.a)(Object(p.e)(n()({},O,{h:e}))))),"s"===t&&(e<0&&(e=0),e>100&&(e=100),m&&m(Object(p.a)(Object(p.e)(n()({},O,{s:e}))))),"l"===t&&(e<0&&(e=0),e>100&&(e=100),m&&m(Object(p.a)(Object(p.e)(n()({},O,{l:e}))))),"a"===t&&(e<0&&(e=0),e>1&&(e=1),m&&m(Object(p.a)(Object(p.e)(n()({},O,{a:e}))))))};return Object(d.jsx)(c.a,n()({ref:t,hsva:a,rProps:n()({label:"H",value:Math.round(O.h)},l,{onChange:function(e,t){return C(t,"h")}}),gProps:n()({label:"S",value:Math.round(O.s)+"%"},h,{onChange:function(e,t){return C(t,"s")}}),bProps:n()({label:"L",value:Math.round(O.l)+"%"},g,{onChange:function(e,t){return C(t,"l")}}),aProps:n()({label:"A",value:Math.round(100*O.a)/100},x,{onChange:function(e,t){return C(t,"a")}}),className:[o,v||""].filter(Boolean).join(" ")},y))}));b.displayName="EditableInputHSLA",t.a=b},90:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var o=r(2),n=r.n(o),a=r(7),s=r.n(a),i=r(0),l=r.n(i),c=r(11),p=r(8),d=r(53),u=r(1);function b(e){var t=e.style,r=e.title,o=e.checked,a=(e.color,e.onClick),s=e.rectProps,l=Object(i.useRef)(null),c=Object(i.useCallback)((function(){l.current.style.zIndex="2",l.current.style.outline="#fff solid 2px",l.current.style.boxShadow="rgb(0 0 0 / 25%) 0 0 5px 2px"}),[]),p=Object(i.useCallback)((function(){o||(l.current.style.zIndex="0",l.current.style.outline="initial",l.current.style.boxShadow="initial")}),[o]);return Object(u.jsx)("div",n()({ref:l,title:r},s,{onClick:a,onMouseEnter:c,onMouseLeave:p,style:n()({},t,{marginRight:0,marginBottom:0,borderRadius:0,boxSizing:"border-box",height:25,width:25},o?{zIndex:1,outline:"#fff solid 2px",boxShadow:"rgb(0 0 0 / 25%) 0 0 5px 2px"}:{zIndex:0},s.style)}))}var h,f=["prefixCls","placement","className","style","color","colors","rectProps","onChange"],g=["key"],j=["#B80000","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#5300EB","#EB9694","#FAD0C3","#FEF3BD","#C1E1C5","#BEDADC","#C4DEF6","#BED3F3","#D4C4FB"];!function(e){e.Left="L",e.LeftTop="LT",e.LeftBotton="LB",e.Right="R",e.RightTop="RT",e.RightBotton="RB",e.Top="T",e.TopRight="TR",e.TopLeft="TL",e.Botton="B",e.BottonLeft="BL",e.BottonRight="BR"}(h||(h={}));var x=l.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-github":r,a=e.placement,l=void 0===a?h.TopRight:a,x=e.className,v=e.style,m=e.color,y=e.colors,O=void 0===y?j:y,C=e.rectProps,w=void 0===C?{}:C,B=e.onChange,R=s()(e,f),S="string"===typeof m&&Object(c.a)(m)?Object(p.b)(m):m,k=m?Object(p.f)(S):"",L={borderStyle:"solid",position:"absolute"},N=n()({},L),P=n()({},L);return/^T/.test(l)&&(N.borderWidth="0 8px 8px",N.borderColor="transparent transparent rgba(0, 0, 0, 0.15)",P.borderWidth="0 7px 7px",P.borderColor="transparent transparent #fff"),l===h.TopRight&&(N.top=-8,P.top=-7),l===h.Top&&(N.top=-8,P.top=-7),l===h.TopLeft&&(N.top=-8,P.top=-7),/^B/.test(l)&&(N.borderWidth="8px 8px 0 ",N.borderColor="rgba(0, 0, 0, 0.15) transparent transparent",P.borderWidth="7px 7px 0px",P.borderColor="#fff transparent transparent",l===h.BottonRight&&(N.top="100%",P.top="100%"),l===h.Botton&&(N.top="100%",P.top="100%"),l===h.BottonLeft&&(N.top="100%",P.top="100%")),/^(B|T)/.test(l)&&(l!==h.Top&&l!==h.Botton||(N.left="50%",N.marginLeft=-8,P.left="50%",P.marginLeft=-7),l!==h.TopRight&&l!==h.BottonRight||(N.right=10,P.right=11),l!==h.TopLeft&&l!==h.BottonLeft||(N.left=7,P.left=8)),/^L/.test(l)&&(N.borderWidth="8px 8px 8px 0px",N.borderColor="transparent rgba(0, 0, 0, 0.15) transparent transparent",P.borderWidth="7px 7px 7px 0px",P.borderColor="transparent #fff transparent transparent",N.left=-8,P.left=-7),/^R/.test(l)&&(N.borderWidth="8px 0px 8px 8px",N.borderColor="transparent transparent transparent rgba(0, 0, 0, 0.15)",P.borderWidth="7px 0px 7px 7px",P.borderColor="transparent transparent transparent #fff",N.right=-8,P.right=-7),/^(L|R)/.test(l)&&(l!==h.RightTop&&l!==h.LeftTop||(N.top=5,P.top=6),l!==h.Left&&l!==h.Right||(N.top="50%",P.top="50%",N.marginTop=-8,P.marginTop=-7),l!==h.LeftBotton&&l!==h.RightBotton||(N.top="100%",P.top="100%",N.marginTop=-21,P.marginTop=-20)),Object(u.jsx)(d.a,n()({ref:t,className:[o,x].filter(Boolean).join(" "),colors:O,color:k,rectRender:function(e){var t=e.key,r=s()(e,g);return Object(u.jsx)(b,n()({},r,{rectProps:w}),t)}},R,{onChange:function(e){return B&&B(Object(p.a)(e))},style:n()({width:200,borderRadius:4,background:"#fff",boxShadow:"rgb(0 0 0 / 15%) 0px 3px 12px",border:"1px solid rgba(0, 0, 0, 0.2)",position:"relative",padding:5},v),rectProps:{style:{marginRight:0,marginBottom:0,borderRadius:0,height:25,width:25}},addonBefore:Object(u.jsxs)(i.Fragment,{children:[Object(u.jsx)("div",{style:N}),Object(u.jsx)("div",{style:P})]})}))}));x.displayName="Github";t.b=x}}]);
//# sourceMappingURL=2.ee109e8a.chunk.js.map