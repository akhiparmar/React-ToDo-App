(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c(8),s=c.n(i),l=(c(15),c(16),c(9)),r=c(5),o=c(4),d=c(7),j=function(e){var t=Object(a.useState)({title:"",description:""}),c=Object(r.a)(t,2),i=c[0],s=c[1],l=function(e){var t=e.target,c=t.name,n=t.value;s((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},c,n))}))};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"modal-dialog",children:Object(n.jsx)("div",{className:"modal-content",children:Object(n.jsx)("div",{className:"modal-body",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",name:"title",onChange:l,value:i.title,placeholder:"Title",className:"form-control",id:"recipient-name",autoComplete:"off",required:!0})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("textarea",{name:"description",onChange:l,value:i.description,className:"form-control",placeholder:"Description",id:"message-text",required:!0})}),Object(n.jsx)("div",{className:"form-group text-center",children:Object(n.jsx)("button",{type:"button",onClick:function(){0===i.title.length?alert("Fill Out Title field"):0===i.description.length?alert("Fill Out Description field"):(e.note(i),s({title:"",description:""}))},className:"btn btn-success",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",fill:"currentColor",class:"bi bi-plus",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})})})})]})})})})})})},b=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"card col-md-3 m-3",style:{background:"lightblue"},children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h4",{className:"card-title",style:{fontFamily:"monospace"},children:e.val.title}),Object(n.jsx)("p",{className:"card-text",children:e.val.description}),Object(n.jsx)("button",{type:"button",onClick:function(){e.delete(e.id)},className:"btn btn-danger my-1 mx-2",style:{backgroundColor:"#ff1a1a"},children:Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(n.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})]})})})},h=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],s=function(e){i((function(t){return t.filter((function(t,c){return c!==e}))}))};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)(j,{note:function(e){i((function(t){return[].concat(Object(l.a)(t),[e])}))}}),Object(n.jsx)("div",{className:"row",style:{display:"flex",justifyContent:"center"},children:c.map((function(e,t){return Object(n.jsx)(b,{id:t,val:e,delete:s},t)}))})]})})};s.a.render(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b03e3fff.chunk.js.map