(this["webpackJsonpavito-tech"]=this["webpackJsonpavito-tech"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(5),s=n.n(a),o=(n(10),n(11),n(12),n(0)),i=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h1",{className:"header1",children:"Test app"})})},r=n(2),u=n(3),l=(n(14),n(15),n(16),n.p+"static/media/Close.63feaaed.svg"),m=(n(17),function(e){var t=e.defaultValue,n=e.getter,c=e.setter;return Object(o.jsx)("div",{className:"new-comment",children:Object(o.jsx)("input",{className:"input-comments",placeholder:t,value:n,min:1,type:"text",onChange:function(e){var t=e.target.value;c(t)},required:!0,autoFocus:"getter"})})}),d=function(e){var t=e.photoId,n=e.onCloseModal,a=Object(c.useState)(null),s=Object(r.a)(a,2),i=s[0],u=s[1],d=function(){fetch("https://boiling-refuge-66454.herokuapp.com/images/"+t).then((function(e){return e.json()})).then((function(e){u(e)}))};Object(c.useEffect)((function(){d()}),[t]);var j=Object(c.useState)(""),b=Object(r.a)(j,2),f=b[0],h=b[1],O=Object(c.useState)(""),p=Object(r.a)(O,2),g=p[0],v=p[1],x=[{defaultValue:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",getter:f,setter:h},{defaultValue:"\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",getter:g,setter:v}];return Object(o.jsxs)("div",{className:"modal-window",onKeyUp:function(e){27===e.keyCode?n():console.log("\u041d\u0430\u0436\u043c\u0438 Esc \u0434\u043b\u044f \u0432\u044b\u0445\u043e\u0434\u0430")},tabIndex:"1",children:[Object(o.jsx)("div",{className:"black-div",onClick:n}),null!==i?Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("img",{className:"modal-picture",src:i.url}),Object(o.jsx)("div",{className:"modal-comment-container",children:i.comments.map((function(e){return Object(o.jsxs)("div",{className:"modal-comment-item",children:[Object(o.jsx)("div",{className:"modal-comment-date",children:(t=e.date,new Date(t).toLocaleDateString())}),Object(o.jsx)("div",{className:"modal-comment",children:e.text})]});var t}))}),Object(o.jsx)("button",{className:"modal-close-btn",onClick:n,children:Object(o.jsx)("img",{src:l})}),Object(o.jsxs)("div",{className:"modal-new-comment",children:[x.map((function(e){return Object(o.jsx)(m,{defaultValue:e.defaultValue,getter:e.getter,setter:e.setter})})),Object(o.jsx)("button",{className:"send-comment-btn",onClick:function(){return function(e,t){var n={name:e,yourComment:t};console.log(JSON.stringify(n)),fetch("https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){d()}))}(f,g)},children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})]})]}):null]})},j=function(e){Object(u.a)(e);var t=Object(c.useState)([]),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(!1),l=Object(r.a)(i,2),m=l[0],j=l[1],b=Object(c.useState)([]),f=Object(r.a)(b,2),h=f[0],O=f[1];Object(c.useEffect)((function(){fetch("https://boiling-refuge-66454.herokuapp.com/images").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]);return Object(o.jsxs)("div",{className:"body test-bg",children:[m?Object(o.jsx)(d,{onCloseModal:function(){j(!1)},photoId:a}):null,h.map((function(e){return Object(o.jsx)("div",{className:"photo-container",onClick:function(){return t=e.id,s(t),void j(!0);var t},children:Object(o.jsx)("img",{className:"image-item",src:e.url},e.id)})}))]})},b=function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(i,{}),Object(o.jsx)(j,{})]})};s.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.5d6cc28c.chunk.js.map