(this["webpackJsonpdraw-bounding-box"]=this["webpackJsonpdraw-bounding-box"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),o=t.n(c),l=(t(14),t(15),t(8)),u=t(21),i=t(22),m=t(23),s=function(e){var a=r.a.useRef(0),t=r.a.useRef(0),n=r.a.useRef(0),c=r.a.useRef(0);return r.a.useEffect((function(){a.current.value=e.data.x,t.current.value=e.data.y,n.current.value=e.data.w,c.current.value=e.data.h}),[e.data]),r.a.createElement("div",{style:{margin:"16%"}},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"X :")),r.a.createElement("input",{type:"text",ref:a,onChange:function(){e.get_coordinates(a,t,n,c)}}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"Y :")),r.a.createElement("input",{type:"text",ref:t,onChange:function(){e.get_coordinates(a,t,n,c)}}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"Width :")),r.a.createElement("input",{type:"text",ref:n,onChange:function(){e.get_coordinates(a,t,n,c)}}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group mb-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"Height :")),r.a.createElement("input",{type:"text",ref:c,onChange:function(){e.get_coordinates(a,t,n,c)}}))))},d=r.a.lazy((function(){return t.e(3).then(t.bind(null,24))})),p=function(){var e=r.a.useState({x:0,y:0,w:0,h:0}),a=Object(l.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Drag and draw bounding box"),r.a.createElement(u.a,{style:{backgroundColor:"#333",borderColor:"#333",color:"#FFF",margin:"0px 1%"}},r.a.createElement(i.a,null,r.a.createElement(m.a,{xs:"8"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,r.a.createElement("p",null,"Loading...."))}," ",r.a.createElement(d,{data:t,get_coordinates_from_image:function(e,a,t,n){c({x:e,y:a,w:t,h:n})}}))),r.a.createElement(m.a,{xs:"4"},r.a.createElement(s,{get_coordinates:function(e,a,t,n){var r=e.current.value||0,o=a.current.value||0,l=t.current.value||0,u=n.current.value||0;0==r&&0==o&&0==l&&0==u||c({x:r,y:o,w:l,h:u})},data:t})))))};var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(18);o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.3c8f6c5c.chunk.js.map