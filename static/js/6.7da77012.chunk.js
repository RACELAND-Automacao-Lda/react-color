(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[6],{110:function(e,t,r){"use strict";var o=r(2),n=r.n(o),a=r(7),i=r.n(a),c=r(0),s=r.n(c),l=r(11),d=r(8),b=r(44),f=r(60),h=r(59),j=r(1),p=["style","color"],u=["prefixCls","className","onChange","color","style"],x=function(e){var t=e.style,r=e.color,o=i()(e,p);return Object(j.jsx)("div",n()({},o,{style:n()({height:28,width:28,position:"absolute",transform:"translate(-14px, -4px)",boxShadow:"0 2px 4px rgb(0 0 0 / 20%)",borderRadius:"50%",background:"url("+b.a+")",backgroundColor:"#fff",border:"2px solid #fff",zIndex:1},t),children:Object(j.jsx)("div",{style:{backgroundColor:r,borderRadius:"50%",height:" 100%",width:"100%"}})}))},g=s.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-colorful":r,a=e.className,c=e.onChange,s=e.color,p=e.style,g=i()(e,u),O="string"===typeof s&&Object(l.a)(s)?Object(d.b)(s):s||{},v=function(e){return c&&c(Object(d.a)(e))};return Object(j.jsxs)("div",n()({ref:t,style:n()({width:200,position:"relative"},p)},g,{className:o+" "+(a||""),children:[Object(j.jsx)(f.a,{hsva:O,className:o,radius:"8px 8px 0 0",style:{width:"auto",height:150,minWidth:120,borderBottom:"12px solid #000"},pointer:function(e){var t=e.left,r=e.top;e.color;return Object(j.jsx)(x,{style:{left:t,top:r,transform:"translate(-16px, -16px)"},color:Object(d.f)(O)})},onChange:function(e){return v(n()({},O,e))}}),Object(j.jsx)(h.a,{hue:O.h,height:24,className:o,onChange:function(e){return v(n()({},O,e))},pointer:function(e){var t=e.left;return Object(j.jsx)(x,{style:{left:t},color:"hsl("+(O.h||0)+"deg 100% 50%)"})}}),Object(j.jsx)(b.b,{hsva:O,height:24,className:o,radius:"0 0 8px 8px",pointer:function(e){var t=e.left;return Object(j.jsx)(x,{style:{left:t},color:Object(d.l)(O)})},onChange:function(e){return v(n()({},O,e))}})]}))}));g.displayName="Colorful",t.a=g},111:function(e,t,r){"use strict";var o=r(5),n=r(2),a=r.n(n),i=r(7),c=r.n(i),s=r(0),l=r.n(s),d=r(60),b=r(44),f=r(50),h=r(54),j=r(59),p=r(11),u=r(8),x=r(53),g=r(1),O=["prefixCls","className","onChange","width","presetColors","color","editableDisable","style"],v=["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],y=function(e){return Object(g.jsx)("div",{style:{boxShadow:"rgb(0 0 0 / 60%) 0px 0px 2px",width:4,top:1,bottom:1,left:e.left,borderRadius:1,position:"absolute",backgroundColor:"#fff"}})},m=l.a.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-sketch":r,i=e.className,l=e.onChange,m=e.width,C=void 0===m?218:m,w=e.presetColors,k=void 0===w?v:w,R=e.color,S=e.editableDisable,F=void 0===S||S,N=e.style,B=c()(e,O),D=Object(s.useState)({h:209,s:36,v:90,a:1}),E=Object(o.a)(D,2),P=E[0],A=E[1];Object(s.useEffect)((function(){"string"===typeof R&&Object(p.a)(R)&&A(Object(u.b)(R)),"object"===typeof R&&A(R)}),[R]);var L=Object(s.useCallback)((function(e){A(e),l&&l(Object(u.a)(e))}),[P]);return Object(g.jsxs)("div",a()({},B,{className:n+" "+(i||""),ref:t,style:a()({background:"rgb(255, 255, 255)",borderRadius:4,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px",width:C},N),children:[Object(g.jsxs)("div",{style:{padding:"10px 10px 8px"},children:[Object(g.jsx)(d.a,{hsva:P,style:{width:"auto",height:150},onChange:function(e){return L(a()({},P,e,{a:P.a}))}}),Object(g.jsxs)("div",{style:{display:"flex",marginTop:4},children:[Object(g.jsxs)("div",{style:{flex:1},children:[Object(g.jsx)(j.a,{width:"auto",height:10,hue:P.h,pointer:y,innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){return L(a()({},P,e))}}),Object(g.jsx)(b.b,{width:"auto",height:10,hsva:P,pointer:y,style:{marginTop:4},innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){L(a()({},P,{a:e.a}))}})]}),Object(g.jsx)(b.b,{width:24,height:24,hsva:P,radius:2,style:{marginLeft:4},bgProps:{style:{background:"transparent"}},innerProps:{style:{borderRadius:2,background:Object(u.l)(P),boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset"}},pointer:function(){return Object(g.jsx)(s.Fragment,{})}})]})]}),F&&Object(g.jsxs)("div",{style:{display:"flex",margin:"0 10px 3px 10px"},children:[Object(g.jsx)(f.a,{label:"Hex",value:Object(u.f)(P).replace(/^#/,"").toLocaleUpperCase(),onChange:function(e,t){var r;"string"===typeof(r=t)&&Object(p.a)(r)&&/(3|6)/.test(String(r.length))&&L(Object(u.b)(r))},style:{minWidth:58}}),Object(g.jsx)(h.a,{hsva:P,style:{marginLeft:6},onChange:function(e){return L(e.hsva)}})]}),k&&k.length>0&&Object(g.jsx)(x.a,{style:{borderTop:"1px solid rgb(238, 238, 238)",paddingTop:10,paddingLeft:10},colors:k,color:Object(u.f)(P),onChange:function(e){return L(e)},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:3,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset"}}})]}))}));m.displayName="Sketch",t.a=m},112:function(e,t,r){"use strict";var o=r(2),n=r.n(o),a=r(7),i=r.n(a),c=r(0),s=r.n(c),l=r(26),d=r(11),b=r(8),f=r(50),h=r(54),j=r(53),p=r(1),u=["prefixCls","className","style","onChange","color","colors"],x=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#cccccc","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];function g(e){return e.checked?Object(p.jsx)("div",{style:{height:5,width:5,borderRadius:"50%",backgroundColor:Object(l.a)(e.color)}}):null}var O=s.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-compact":r,a=e.className,s=e.style,l=e.onChange,O=e.color,v=e.colors,y=void 0===v?x:v,m=i()(e,u),C="string"===typeof O&&Object(d.a)(O)?Object(b.b)(O):O,w=O?Object(b.f)(C).replace(/^#/,""):"",k=Object(c.useCallback)((function(e){return l&&l(Object(b.a)(e))}),[]),R={style:{alignItems:"baseline"},inputStyle:{boxShadow:"none",backgroundColor:"transparent",outline:0}};return Object(p.jsxs)("div",n()({ref:t,style:n()({background:"#f6f6f6",borderRadius:3,display:"flex",width:240,flexWrap:"wrap",paddingTop:5,paddingLeft:5},s),className:[o,a||""].filter(Boolean).join(" ")},m,{children:[Object(p.jsx)(j.a,{colors:y,color:O?Object(b.f)(C):void 0,rectProps:{children:Object(p.jsx)(g,{}),style:{display:"flex",alignItems:"center",justifyContent:"center"}},onChange:function(e){return k(e)}}),Object(p.jsxs)("div",{style:{display:"flex",margin:"0 4px 3px 0"},children:[Object(p.jsx)(f.a,{onChange:function(e,t){var r;"string"===typeof(r=t)&&Object(d.a)(r)&&/(3|6)/.test(String(r.length))&&k(Object(b.b)(r))},labelStyle:{paddingRight:5,marginTop:-1},value:w.toLocaleUpperCase(),label:Object(p.jsx)("div",{style:{width:8,height:8,backgroundColor:"#"+w}}),inputStyle:{outline:"none",boxShadow:"initial",background:"transparent"},style:{flexDirection:"row-reverse",flex:"1 1 0%",minWidth:80}}),Object(p.jsx)(h.a,{hsva:C,placement:"left",onChange:function(e){return k(e.hsva)},aProps:!1,rProps:R,gProps:R,bProps:R})]})]}))}));O.displayName="Compact",t.a=O},113:function(e,t,r){"use strict";var o=r(2),n=r.n(o),a=r(7),i=r.n(a),c=r(0),s=r.n(c),l=r(11),d=r(8),b=r(50),f=r(54),h=r(1),j=["prefixCls","className","style","color","onChange"],p={boxShadow:"initial",borderWidth:"0 0 1px 0",borderBottomColor:"#eee",borderBottomStyle:"solid",height:30,outline:0,fontSize:15,padding:0},u=s.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-material":r,a=e.className,c=e.style,s=e.color,u=e.onChange,x=i()(e,j),g="string"===typeof s&&Object(l.a)(s)?Object(d.b)(s):s,O=s?Object(d.f)(g).replace(/^#/,""):"",v=function(e){u&&u(Object(d.a)(e))},y=function(e,t){"string"===typeof e&&Object(l.a)(e)&&/(3|6)/.test(String(e.length))&&u&&u(Object(d.a)(Object(d.b)(e)))};return Object(h.jsxs)("div",n()({ref:t,className:[o,a||""].filter(Boolean).join(" "),style:n()({padding:16,width:98,fontFamily:"Roboto",backgroundColor:"#fff"},c)},x,{children:[Object(h.jsx)(b.a,{label:"Hex",value:O.toLocaleUpperCase(),onChange:function(e,t){return y(t)},onBlur:function(e){var t=e.target.value;e.target.value=t.slice(0,6),y(t.slice(0,6))},inputStyle:{outline:0,border:0,height:30,fontSize:15,padding:0,boxShadow:"initial",borderWidth:"0 0 2px 0",borderBottomColor:O?"#"+O:"#eee",borderBottomStyle:"solid"},style:{flexDirection:"column-reverse",alignItems:"flex-start"}}),Object(h.jsx)(f.a,{hsva:g,placement:"top",style:{marginTop:11},rProps:{style:{alignItems:"flex-start"},inputStyle:n()({},p)},gProps:{style:{alignItems:"flex-start"},inputStyle:n()({},p)},bProps:{style:{alignItems:"flex-start"},inputStyle:n()({},p)},aProps:!1,onChange:function(e){return v(e.hsva)}})]}))}));u.displayName="Material",t.a=u},114:function(e,t,r){"use strict";var o=r(2),n=r.n(o),a=r(7),i=r.n(a),c=r(0),s=r.n(c),l=r(11),d=r(8),b=r(26),f=r(50),h=r(53),j=r(1),p=["prefixCls","className","style","color","colors","onChange"],u=["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"],x=s.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-block":r,a=e.className,c=e.style,s=e.color,x=e.colors,g=void 0===x?u:x,O=e.onChange,v=i()(e,p),y="string"===typeof s&&Object(l.a)(s)?Object(d.b)(s):s,m=s?Object(d.f)(y):"",C=function(e,t){"string"===typeof e&&Object(l.a)(e)&&/(3|6)/.test(String(e.length))&&O&&O(Object(d.a)(Object(d.b)(e)))};return Object(j.jsxs)("div",n()({ref:t,className:[o,a].filter(Boolean).join(" "),style:n()({width:170,borderRadius:6,background:"rgb(255, 255, 255)",boxShadow:"rgb(0 0 0 / 10%) 0 1px",position:"relative"},c)},v,{children:[Object(j.jsx)("div",{style:{width:0,height:0,borderStyle:"solid",borderWidth:"0 10px 10px",borderColor:"transparent transparent "+m,position:"absolute",top:-10,left:"50%",marginLeft:-10}}),Object(j.jsx)("div",{title:m,style:{backgroundColor:""+m,color:Object(b.a)(m),height:110,fontSize:18,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center"},children:m.toLocaleUpperCase()}),Object(j.jsx)(h.a,{colors:g,color:m,style:{paddingLeft:10,paddingTop:10},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:4,height:22,width:22}},onChange:function(e){O&&O(Object(d.a)(e))}}),Object(j.jsx)(f.a,{value:m.toLocaleUpperCase(),onChange:function(e,t){return C(t)},onBlur:function(e){var t=e.target.value;e.target.value=t.slice(0,6),C(t.slice(0,6))},inputStyle:{height:22,outline:0,borderRadius:3,color:"#666",padding:"0 7px"},style:{padding:10,paddingTop:0,borderRadius:"0 0 6px 6px"}})]}))}));x.displayName="Block",t.a=x},115:function(e,t,r){"use strict";var o=r(2),n=r.n(o),a=r(7),i=r.n(a),c=r(0),s=r.n(c),l=r(11),d=r(8),b=r(16),f=r(1),h=function(e){var t=e.className,r=e.color,o=e.left,a=e.top,i=e.style,s=e.prefixCls,l=n()({},i,{position:"absolute",top:a,left:o});return Object(c.useMemo)((function(){return Object(f.jsx)("div",{className:s+"-pointer "+(t||""),style:l,children:Object(f.jsx)("div",{className:s+"-fill",style:{width:10,height:10,transform:"translate(-5px, -5px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:"#fff"},children:Object(f.jsx)("div",{style:{inset:0,borderRadius:"50%",position:"absolute",backgroundColor:r}})})})}),[a,o,r,t,s])},j=2*Math.PI,p=function(e,t){return Math.sqrt(e*e+t*t)};function u(e){var t=e.width,r=void 0===t?0:t,o=r/2;return{width:r,radius:o,cx:o,cy:o}}function x(e){var t=e.width;return(void 0===t?0:t)/2}function g(e,t,r){var o,n=e.angle||0,a=e.direction;return r&&"clockwise"===a?t=n+t:"clockwise"===a?t=360-n+t:r&&"anticlockwise"===a?t=n+180-t:"anticlockwise"===a&&(t=n-t),(t%(o=360)+o)%o}var O=["prefixCls","radius","pointer","className","style","width","height","direction","angle","color","onChange"],v=s.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-wheel":r,a=(e.radius,e.pointer),c=e.className,v=e.style,y=e.width,m=void 0===y?200:y,C=e.height,w=void 0===C?200:C,k=e.direction,R=void 0===k?"anticlockwise":k,S=e.angle,F=void 0===S?180:S,N=e.color,B=e.onChange,D=i()(e,O),E="string"===typeof N&&Object(l.a)(N)?Object(d.b)(N):N||{},P=N?Object(d.f)(E):"",A=function(e,t){var r=u(e),o=r.cx,n=r.cy,a=x(e),i=(180+g(e,t.h,!0))*(j/360),c=t.s/100*a,s="clockwise"===e.direction?-1:1;return{x:o+c*Math.cos(i)*s,y:n+c*Math.sin(i)*s}}({width:m},E),L={top:"0",left:"0",color:P},M=function(e,t){var r=function(e,t,r){var o=u(e),n=o.cx,a=o.cy,i=x(e);t=n-t,r=a-r;var c=g(e,Math.atan2(-r,-t)*(360/j)),s=Math.min(p(t,r),i);return{h:Math.round(c),s:Math.round(100/i*s)}}({width:m},m-e.x,w-e.y),o={h:r.h,s:r.s,v:E.v,a:E.a};B&&B(Object(d.a)(o))};return Object(f.jsxs)(b.a,n()({className:[o,c||""].filter(Boolean).join(" ")},D,{style:n()({},v,{position:"relative",width:m,height:w}),ref:t,onMove:M,onDown:M,children:[s.a.createElement(a||h,n()({prefixCls:o,style:{zIndex:1,transform:"translate("+A.x+"px, "+A.y+"px)"}},L)),Object(f.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"anticlockwise"===R?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)",transform:"rotateZ("+(F+90)+"deg)",inset:0}}),Object(f.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle closest-side, #fff, transparent)",inset:0}}),Object(f.jsx)("div",{style:{backgroundColor:"#000",borderRadius:"50%",position:"absolute",inset:0,opacity:"number"===typeof E.v?1-E.v/100:0}})]}))}));v.displayName="Wheel";t.a=v},116:function(e,t,r){"use strict";var o=r(2),n=r.n(o),a=r(7),i=r.n(a),c=r(0),s=r.n(c),l=r(11),d=r(8),b=r(53),f=r(1);function h(e){var t=e.style,r=e.title,o=e.checked,a=e.color,i=e.onClick,s=e.rectProps,l=Object(c.useRef)(null),d=Object(c.useCallback)((function(e){l.current.style.transform="scale(1.2)"}),[]),b=Object(c.useCallback)((function(e){l.current.style.transform="scale(1)"}),[]);return Object(f.jsx)("div",{ref:l,onClick:i,onMouseEnter:d,onMouseLeave:b,title:r,style:n()({},t,{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:3,borderRadius:"50%",marginRight:12,marginBottom:12,boxSizing:"border-box",transform:"scale(1)",boxShadow:a+" 0px 0px "+(o?5:0)+"px",transition:"transform 100ms ease 0s, box-shadow 100ms ease 0s"}),children:Object(f.jsx)("div",n()({},s,{style:n()({height:o?"100%":0,width:o?"100%":0,borderRadius:"50%",backgroundColor:"#fff",boxSizing:"border-box",transition:"height 100ms ease 0s, width 100ms ease 0s"},s.style)}))})}var j=["prefixCls","className","color","colors","rectProps","onChange"],p=s.a.forwardRef((function(e,t){var r=e.prefixCls,o=void 0===r?"w-color-circle":r,a=e.className,c=e.color,s=e.colors,p=void 0===s?[]:s,u=e.rectProps,x=void 0===u?{}:u,g=e.onChange,O=i()(e,j),v="string"===typeof c&&Object(l.a)(c)?Object(d.b)(c):c||{},y=c?Object(d.f)(v):"";return Object(f.jsx)(b.a,n()({ref:t,colors:p,color:y},O,{className:[o,a].filter(Boolean).join(" "),rectRender:function(e){var t=n()({},e);return Object(f.jsx)(h,n()({},t,{rectProps:x}))},onChange:function(e){g&&g(Object(d.a)(e))}}))}));p.displayName="Circle";t.a=p},26:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(8),n=function(e){if(!e)return"#fff";var t=Object(o.a)(e);return(299*t.rgb.r+587*t.rgb.g+114*t.rgb.b)/1e3>=128?"#000":"#fff"}},423:function(e,t,r){e.exports={warpper:"index_warpper__3y_Qk"}},477:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return k}));var o=r(45),n=r(46),a=r(47),i=r(4),c=r(0),s=r(110),l=r(111),d=r(443),b=r(116),f=r(112),h=r(115),j=r(90),p=r(113),u=r(114),x=r(8),g=r(48),O=r(6),v=r(1);function y(e){return Object(v.jsx)("div",Object(i.a)(Object(i.a)({},e),{},{style:Object(i.a)({fontSize:12,padding:"5px 0",color:"#6b6b6b"},e.style),children:e.children}))}var m=r(423),C=r.n(m);function w(){var e=Object(c.useContext)(O.a),t=e.hsva,r=e.dispatch;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:C.a.warpper,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(s.a,{color:t,onChange:function(e){r({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}}),Object(v.jsx)(y,{children:'<Colorful color="'.concat(Object(x.f)(t),'" />')})]}),Object(v.jsxs)("div",{style:{marginLeft:60,marginRight:60},children:[Object(v.jsx)(l.a,{color:t,onChange:function(e){r({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}}),Object(v.jsx)(y,{children:'<Sketch color="'.concat(Object(x.f)(t),'" />')})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(d.a,{color:t,onChange:function(e){r({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}}),Object(v.jsx)(y,{children:'<Chrome color="..." />'})]})]}),Object(v.jsxs)("div",{className:C.a.warpper,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(b.a,{colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],style:{width:252},color:t,onChange:function(e){r({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}}),Object(v.jsx)(y,{children:'<Circle color="'.concat(Object(x.f)(t),'" />')})]}),Object(v.jsxs)("div",{style:{paddingLeft:20},children:[Object(v.jsx)(f.a,{color:t,style:{boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px"},onChange:function(e){r({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}}),Object(v.jsx)(y,{children:'<Compact color="'.concat(Object(x.f)(t),'" />')})]}),Object(v.jsxs)("div",{style:{marginLeft:25},children:[Object(v.jsx)(h.a,{color:t,width:140,height:140,onChange:function(e){r({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}}),Object(v.jsx)(y,{children:'<Wheel color="..." />'})]})]}),Object(v.jsxs)("div",{className:C.a.warpper,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(j.b,{color:t,onChange:function(e){r({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}}),Object(v.jsx)(y,{children:'<Github color="'.concat(Object(x.f)(t),'" />')})]}),Object(v.jsxs)("div",{style:{marginRight:30,marginLeft:30},children:[Object(v.jsx)(p.a,{color:t,style:{boxShadow:"rgb(0 0 0 / 12%) 0px 2px 10px, rgb(0 0 0 / 16%) 0px 2px 5px"},onChange:function(e){r({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}}),Object(v.jsx)(y,{children:'<Material color="..." />'})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(u.a,{color:t,onChange:function(e){r({hsva:Object(i.a)(Object(i.a)({},t),e.hsva)})}}),Object(v.jsx)(y,{children:'<Block color="'.concat(Object(x.f)(t),'" />')})]})]})]})}var k=function(e){Object(n.a)(i,e);var t=Object(a.a)(i);function i(){var e;Object(o.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).editorUrl="/packages/color/README.md",e.getMdStr=function(){return r.e(48).then(r.bind(null,474))},e.example=Object(v.jsx)(w,{}),e}return i}(g.a)}}]);
//# sourceMappingURL=6.7da77012.chunk.js.map