(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{159:function(e,t,c){},210:function(e,t,c){},211:function(e,t,c){},212:function(e,t,c){"use strict";c.r(t);var s=c(22),n=c(0),a=c(1),r=c(23),i=c(31),o=c(141),l=c(63),d=c(64),u=c(67),j=c(66),b=c(5),m=c(6),h=c(4),O="USCCESS_LOG_IN",p="LOG_OUT",x="LOAD_ITEMS",f="ADD_ITEM",v=c.p+"static/media/blank.befce1d6.svg",g=function(e){var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2});return Object(n.jsx)("div",{className:"col-sm-6 card-goup",children:Object(n.jsxs)("div",{className:"card mb-5",style:{width:"21.7rem"},children:[Object(n.jsx)("img",{className:"card-img-top",src:v,alt:"Card cap"}),Object(n.jsxs)("div",{className:"card-body",style:{height:"15rem",maxheight:"15rem",overflow:"hidden"},children:[Object(n.jsx)("h5",{className:"card-title",children:e.name}),Object(n.jsx)("p",{className:"card-text",children:e.description})]}),Object(n.jsx)("div",{className:"card-footer ",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("p",{className:"card-text align-middle",children:t.format(e.price)})}),Object(n.jsx)("div",{className:"col text-right",children:Object(n.jsx)("button",{className:"btn btn-warning btn-sm align-middle",type:"submit",children:"Buy now"})})]})})]})})},N=function(e){return e&&0!==e.length?Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"row justify-content-center",children:e.items.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(b.b,{to:"/product/".concat(e.id),children:Object(n.jsx)(g,{name:e.name,price:e.price,description:e.description})})},e.id)}))})}):Object(n.jsx)("p",{children:"No items, sorry"})},w=function(){return Object(n.jsxs)("div",{className:"jumbotron text-white",style:{background:"none"},children:[Object(n.jsx)("h1",{className:"display-4 mb-5",children:"Bootleg Amazon"}),Object(n.jsx)("p",{className:"mb-5",children:"Online marketplace to buy and sell locally! No need to visit a used car dealership or thrift store to find the best local deals! Here you\u2019ll find a wide selection of used cars for sale, home goods, used electronics, vintage clothes, used furniture, used books, sports equipment, and real estate for sale or rent. It\u2019s everything you can wish for!."}),Object(n.jsx)("p",{className:"lead",children:Object(n.jsx)("a",{className:"btn btn-warning btn-lg",href:"",role:"button",children:"Learn more"})})]})},y=Object(h.b)((function(e){return{stateProducts:e.products}}))((function(e){var t,c=e.stateProducts.length,s=Math.floor(Math.random()*c);return t=e.stateProducts.length>0?Object(n.jsxs)("div",{className:"card text-center my-5 ",children:[Object(n.jsx)("div",{className:"card-header",children:"Featured"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:e.stateProducts[s].name}),Object(n.jsx)("p",{className:"card-text",children:e.stateProducts[s].description}),Object(n.jsx)(b.b,{className:"btn btn-primary",to:"/product/"+e.stateProducts[s].id,children:"Go to product"})]}),Object(n.jsx)("div",{className:"card-footer text-muted",children:"Reacently added"})]}):Object(n.jsx)("h1",{className:"text-center text-danger",children:"** There are no items in the Database **"}),Object(n.jsx)("div",{children:t})})),S=c(11),k=function(){var e=Object(a.useState)(""),t=Object(S.a)(e,2);t[0],t[1];return Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{className:"card-body px-5 py-4",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputUsername",children:"Username"}),Object(n.jsx)("input",{type:"email",className:"form-control",id:"inputUsername","aria-describedby":"usernameHelp",placeholder:"Enter username"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputEmail",children:"Email address"}),Object(n.jsx)("input",{type:"email",className:"form-control",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(n.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",id:"inputPassword",placeholder:"Password"})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("p",{children:"Make sure it's at least 15 characters OR at leaset 8 characters including a number and a lowercase letter."})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg btn-block pa-5",children:"Sign up for Bootleg Amazon"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("small",{children:"By clicking \u201cSign up for Bootleg Amazon\u201d, you agree to our Terms of Service and Privacy Statement. We\u2019ll occasionally send you account related emails."})})]})})})},L=function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"px-5 pb-5 pt-4 mb-3",style:{backgroundColor:"#37474F"},children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"mt-5 row",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(w,{})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(k,{})})]})})}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(y,{}),Object(n.jsx)(N,{items:e.items})]})]})},E=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{className:"container mt-5",children:[Object(n.jsx)("h1",{className:"text-warning",children:"About"}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:"Bootleg Amazon is an Online marketplace to buy and sell locally! No need to visit a used car dealership or thrift store to find the best local deals! Here you\u2019ll find a wide selection of used cars for sale, home goods, used electronics, vintage clothes, used furniture, used books, sports equipment, and real estate for sale or rent. It\u2019s everything you can wish for!."}),Object(n.jsx)("p",{children:"It was build using React as the front end and Toby N Boudreaux API as back end."})]})},C=c(13),I=c(47),A=c(30);c(159);I.b.add(A.d);var U=function(e){return Object(n.jsx)("div",{className:"Banner",children:Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("p",{className:"text-uppercase title",children:e.title}),Object(n.jsx)("p",{className:"text-uppercase subtitle",children:e.subtitle}),Object(n.jsxs)("div",{className:"starSection",children:[Object(n.jsx)(C.a,{className:"star",icon:["fas","star"]}),Object(n.jsx)(C.a,{className:"star",icon:["fas","star"]}),Object(n.jsx)(C.a,{className:"star",icon:["fas","star"]}),Object(n.jsx)(C.a,{className:"star",icon:["fas","star"]}),Object(n.jsx)(C.a,{className:"star",icon:["fas","star-half"]})]}),Object(n.jsx)("p",{children:e.message})]})})},D=function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)(U,{title:"all you need",subtitle:"Customer-loved brands",message:"4+ star fashion with hundreds of reviews"}),Object(n.jsx)(N,{items:e.items})]})},T=c(28),P=c.n(T),q=Object(h.b)((function(e){return{emailAddress:e.user.email}}),(function(e){return{onSuccessLogIn:function(t){return e({type:O,payload:t})}}}))((function(e){var t,c,s=Object(a.useState)(""),r=Object(S.a)(s,2),i=r[0],o=r[1],l=Object(a.useState)(""),d=Object(S.a)(l,2),u=d[0],j=d[1],b=Object(a.useState)(!1),m=Object(S.a)(b,2),h=m[0],O=m[1],p=Object(a.useState)(!1),x=Object(S.a)(p,2),f=x[0],v=x[1];t=h?Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Error: something went wrong with your email address and/or password!!!"}):"",c=f?Object(n.jsxs)("div",{className:"alert alert-success",role:"alert",children:["Log in Success: you are now logged in as ",e.emailAddress,"!!!"]}):"";return Object(n.jsxs)("div",{style:{maxWidth:"400px",marginLeft:"auto",marginRight:"auto"},children:[t,c,Object(n.jsxs)("div",{className:"card bg-light",children:[Object(n.jsx)("div",{className:"card-header",children:"Log In to Bootleg Amazon"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),"admin@admin.com"===i&&"admin"===u){e.onSuccessLogIn({id:1,email:"ruben@gmail.com",balance:1e4,roleName:"Admin"}),window.sessionStorage.setItem("email",i),v(!0),O(!1),o(""),j("")}else P.a.post("http://localhost:8080/Amazon/sessions",{email:i,password:u}).then((function(t){null===t.data.email?(O(!0),v(!1)):(e.onSuccessLogIn(t.data),window.sessionStorage.setItem("email",t.data.email),v(!0),O(!1),o(""),j(""))})).catch((function(e){console.log(e)}))},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email"}),Object(n.jsx)("input",{value:i,onChange:function(e){return function(e){o(e.target.value)}(e)},type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email address"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{value:u,onChange:function(e){return function(e){j(e.target.value)}(e)},type:"password",className:"form-control",id:"password","aria-describedby":"passwordHelp",placeholder:"Enter password"})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Log In"})})]})})]})]})})),F=function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsx)("div",{className:"container mt-5 p-5",children:Object(n.jsx)(q,{userState:e.userState})})},B=c(143),z=(c(176),Object(h.b)(null,(function(e){return{dispatchLoadItems:function(t){return e({type:x,payload:t})}}}))((function(e){var t=Object(i.d)(),c=Object(a.useState)(e.item.id),s=Object(S.a)(c,2),r=s[0],o=(s[1],Object(a.useState)(e.item.name)),l=Object(S.a)(o,2),d=l[0],u=l[1],j=Object(a.useState)(e.item.price),b=Object(S.a)(j,2),m=b[0],h=b[1],O=Object(a.useState)(e.item.description),p=Object(S.a)(O,2),x=p[0],f=p[1],v=(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}),{title:"Confirm to Delete",message:"Are you sure you want to delete: "+e.item.name+"?",buttons:[{label:"Yes",onClick:function(){P.a.delete("http://localhost:8080/Amazon/items/".concat(r)).then((function(t){e.dispatchLoadItems(t.data)})).catch((function(e){return console.error("Error: ",e)}))}},{label:"No"}],closeOnEscape:!0,closeOnClickOutside:!0,willUnmount:function(){},afterClose:function(){},onClickOutside:function(){},onKeypressEscape:function(){}});return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:r}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{value:d,className:"form-control",onChange:function(e){return function(e){u(e.target.value)}(e)}})}),Object(n.jsxs)("td",{children:[Object(n.jsx)("input",{value:m,className:"form-control",onChange:function(e){return function(e){h(e.target.value)}(e)}})," "]}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{value:x,className:"form-control",onChange:function(e){return function(e){f(e.target.value)}(e)}})}),Object(n.jsxs)("td",{className:"text-right",children:[Object(n.jsxs)("button",{className:"btn mr-1 btn-sm",type:"button",onClick:function(c){return function(c){c.preventDefault();var s=JSON.stringify({name:d,price:m,description:x,seller_id:2});P.a.put("http://localhost:8080/Amazon/items/".concat(r),s).then((function(t){e.dispatchLoadItems(t.data)})).catch((function(e){return console.error("Error: ",e)})),t.show("Item: ".concat(d," has been updated"))}(c)},children:[Object(n.jsx)(C.a,{icon:A.b})," "]}),Object(n.jsxs)("button",{className:"btn mr-1 btn-sm",onClick:function(e){return function(e){e.preventDefault(),Object(B.confirmAlert)(v)}(e)},children:[" ",Object(n.jsx)(C.a,{icon:A.a})," "]})]})]})}))),H=Object(h.b)((function(e){return{stateProducts:e.products}}),(function(e){return{dispatchLoadItems:function(t){return e({type:x,payload:t})}}}))((function(e){var t=Object(i.d)(),c=Object(a.useState)(""),s=Object(S.a)(c,2),r=s[0],o=s[1],l=Object(a.useState)(""),d=Object(S.a)(l,2),u=d[0],j=d[1],b=Object(a.useState)(""),m=Object(S.a)(b,2),h=m[0],O=m[1];return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"#"}),Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Price"}),Object(n.jsx)("th",{scope:"col",children:"Description"}),Object(n.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{}),Object(n.jsxs)("td",{children:[" ",Object(n.jsx)("input",{type:"text",value:r,onChange:function(e){return function(e){o(e.target.value)}(e)},className:"form-control",placeholder:"Name"})," "]}),Object(n.jsxs)("td",{children:[" ",Object(n.jsx)("input",{type:"text",value:u,onChange:function(e){return function(e){j(e.target.value)}(e)},className:"form-control",placeholder:"Price"})," "]}),Object(n.jsxs)("td",{children:[" ",Object(n.jsx)("input",{type:"text",value:h,onChange:function(e){return function(e){O(e.target.value)}(e)},className:"form-control",placeholder:"Description"})," "]}),Object(n.jsxs)("td",{children:[" ",Object(n.jsx)("button",{className:"btn btn-success btn-block",onClick:function(c){return function(c){if(c.preventDefault(),""!==r&&""!==u&&""!==h){var s=JSON.stringify({name:r,price:u,description:h,seller_id:1});P.a.post("http://localhost:8080/Amazon/items",s).then((function(t){e.dispatchLoadItems(t.data)})).catch((function(e){return console.error("Error: ",e)})),o(""),j(""),O("")}else t.show("Please verify all inputs")}(c)},children:Object(n.jsx)(C.a,{icon:A.c})})," "]})]}),e.stateProducts.map((function(e){return Object(n.jsx)(z,{item:e},e.id)}))]})]})})})})),M=function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"mb-5",children:"Products"}),Object(n.jsx)(H,{})]})},W=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Users"}),Object(n.jsx)("hr",{})]})},R=Object(h.b)((function(e){return{user:e.user}}))((function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",style:{backgroundColor:"#e3f2fd"},children:[Object(n.jsx)("a",{className:"navbar-brand text-uppercase",children:e.user.roleName}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(b.b,{className:"nav-link",to:"/users/products",children:"Products"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(b.b,{className:"nav-link",to:"/users/users",children:"Users"})})]})})]}),Object(n.jsxs)("div",{className:"container mt-3 p-2",children:[Object(n.jsx)(m.a,{path:"/users/products",children:Object(n.jsx)(M,{})}),Object(n.jsx)(m.a,{path:"/users/users",children:Object(n.jsx)(W,{})})]})]})})),_=Object(h.b)((function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),{user:e.user}}))((function(e){return Object(n.jsxs)("div",{className:"container mt-5 text-center",children:[Object(n.jsx)("h2",{className:"text-uppercase",children:e.user.roleName}),Object(n.jsxs)("h3",{children:["Welcome: ",e.user.emal]})]})})),J=Object(h.b)((function(e){return{user:e.user}}))((function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{className:"container mt-5 text-center",children:[Object(n.jsx)("h2",{className:"text-uppercase",children:e.user.roleName}),Object(n.jsxs)("h3",{children:["Welcome: ",e.user.emal]})]})})),Y=Object(h.b)((function(e){return{user:e.user}}))((function(e){switch(Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),String.prototype.toUpperCase.call(void 0===e.user.roleName?"":e.user.roleName)){case"ADMIN":return Object(n.jsx)(R,{});case"SELLER":return Object(n.jsx)(_,{});case"BUYER":return Object(n.jsx)(J,{});default:return Object(n.jsx)("div",{className:"container text-center mt-5",children:Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"You need to be logged in as Administrator, Seller or Buyer to visit this page"})})}})),G=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(l.a)(this,c),(s=t.call(this,e)).state={items:{id:0,name:"",price:0,description:""}},s}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0);var t=this.props.match.params.handle,c="http://18.189.16.224:8080/Amazon/items?id=".concat(t);P.a.get(c).then((function(t){var c=t.data;e.setState({items:c})}))}},{key:"render",value:function(){for(var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}),t=[],c=0;c<5;c++)t.push(Object(n.jsx)("div",{className:"col-auto",children:Object(n.jsx)("img",{className:"img-thumbnail my-3",src:"https://via.placeholder.com/150.png",alt:"..."})},c));return Object(n.jsxs)("div",{className:"container p-5",children:[Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("h1",{className:"pb-3 ",children:this.state.items.name})}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"row justify-content-center",children:t}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h5",{children:this.state.items.description}),Object(n.jsx)("small",{children:"Sunt incididunt adipisicing aliquip minim exercitation laboris proident eiusmod do id cupidatat. Adipisicing dolore ad ea ipsum Lorem enim Lorem. Ut veniam culpa tempor voluptate elit anim excepteur. Veniam sit cupidatat qui occaecat velit reprehenderit anim amet ex pariatur magna amet quis incididunt. Aliquip magna veniam culpa nulla culpa labore eu nulla. Ullamco incididunt irure elit sunt consequat enim. Anim veniam minim nostrud Lorem fugiat consectetur ut ea commodo nisi. Lorem mollit ex pariatur non pariatur ipsum. Laboris pariatur sint cillum do aliqua sunt esse cupidatat elit deserunt velit. Ea ea officia mollit in Lorem laboris cupidatat quis amet et. Dolor aliqua occaecat est id Lorem excepteur incididunt elit reprehenderit consequat. Non consectetur sint do do est consectetur labore sunt est dolore. Aute irure ad excepteur est pariatur. Laboris ipsum adipisicing incididunt mollit dolore tempor velit ea ipsum labore qui ut consequat nisi. Fugiat minim eiusmod nisi deserunt dolore non sunt non qui reprehenderit pariatur irure reprehenderit. Ut adipisicing nisi velit commodo laboris enim cillum sunt amet enim qui do eu nisi. Ullamco tempor duis duis laboris aute velit eiusmod."})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("h4",{className:"text-right text-success",children:e.format(this.state.items.price)})})]})}}]),c}(a.Component),K=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{className:"container mt-5",children:[Object(n.jsx)("h1",{className:"text-warning",children:"Contact"}),Object(n.jsx)("hr",{})]})},Q=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{className:"container mt-5",children:[Object(n.jsx)("h1",{className:"text-warning",children:"Help"}),Object(n.jsx)("hr",{})]})},V=Object(h.b)((function(e){return{isUserLoggedIn:e.isUserLoggedIn}}),(function(e){return{onLogOut:function(){return e({type:p})}}}))((function(e){return e.isUserLoggedIn?Object(n.jsx)(b.b,{className:"btn btn-outline-light ml-2 my-2 my-sm-0 ",onClick:function(){return fetch("http://localhost:8080/Amazon/sessions",{method:"DELETE"}).then((function(e){console.log(e),console.log(e.data)})).catch((function(e){return console.log(e)})),window.sessionStorage.clear(),void e.onLogOut()},to:"/",role:"button",children:"Log Out"}):Object(n.jsx)(b.b,{className:"btn btn-outline-light ml-2 my-2 my-sm-0 ",to:"/login",role:"button",children:"Log In"})})),$=c(146),X=Object(h.b)((function(e){return{user:e.user}}))((function(e){return void 0!==e.user.email?Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-auto",children:Object(n.jsx)($.a,{color:"#f0ad4e",name:e.user.email,size:"32",round:!0})}),Object(n.jsxs)("div",{className:"col-auto pt-1 pl-0",children:[" ",Object(n.jsx)(b.b,{to:"/users",children:Object(n.jsx)("span",{className:"text-warning",children:e.user.email})})]})]}):""})),Z=Object(h.b)((function(e){return{isUserLoggedIn:e.isUserLoggedIn,user:e.user}}))((function(e){var t=Object(a.useState)(""),c=Object(S.a)(t,2),s=c[0],r=c[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"pl-3",children:Object(n.jsx)(X,{userEmail:e.userEmail})}),Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:[Object(n.jsx)(b.b,{className:"navbar-brand",to:"/",children:"Bootleg Amazon"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(b.b,{className:"nav-link",to:"/",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(b.b,{className:"nav-link",to:"/products",children:"Products"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(b.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(n.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),r("")}(e)},className:"form-inline my-2 my-lg-0",children:[Object(n.jsx)("input",{onChange:function(e){return function(e){r(e.target.value)}(e)},value:s,className:"form-control mr-sm-2 input-sm",type:"search",placeholder:"Search","aria-label":"Search"}),Object(n.jsx)(b.b,{type:"submit",className:"btn btn-outline-light my-2 my-sm-0 ",to:"/product/".concat(s),style:{textDecoration:"none"},onClick:function(){r("")},children:"Search"}),Object(n.jsx)(V,{})]})]})]})]})})),ee=c(36),te=(c(210),function(){return Object(n.jsx)("div",{className:"Footer",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row text-center d-flex justify-content-center pt-5 mb-3",children:[Object(n.jsx)("div",{className:"col-md-2 mb-3",children:Object(n.jsx)("h6",{className:"text-uppercase font-weight-bold",children:Object(n.jsx)(b.b,{to:"/about",children:"About us"})})}),Object(n.jsx)("div",{className:"col-md-2 mb-3",children:Object(n.jsx)("h6",{className:"text-uppercase font-weight-bold",children:Object(n.jsx)(b.b,{to:"/products",children:"Products"})})}),Object(n.jsx)("div",{className:"col-md-2 mb-3",children:Object(n.jsx)("h6",{className:"text-uppercase font-weight-bold",children:Object(n.jsx)(b.b,{to:"/help",children:"Help"})})}),Object(n.jsx)("div",{className:"col-md-2 mb-3",children:Object(n.jsx)("h6",{className:"text-uppercase font-weight-bold",children:Object(n.jsx)(b.b,{to:"/Contact",children:"Contact"})})})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"row d-flex text-center justify-content-center mb-md-0 mb-4",children:Object(n.jsx)("div",{className:"col-md-8 col-12 mt-5",children:Object(n.jsx)("p",{className:"footerInfo",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."})})}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"row pb-3",children:Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsxs)("div",{className:"mb-5 flex-center text-center faIcons",children:[Object(n.jsx)("a",{href:"http://facebook.com",children:Object(n.jsx)(C.a,{icon:ee.a,className:"link-color"})}),Object(n.jsx)("a",{href:"http://tweeter.com",children:Object(n.jsx)(C.a,{icon:ee.e,className:"link-color"})}),Object(n.jsx)("a",{href:"http://google.com",children:Object(n.jsx)(C.a,{icon:ee.b,className:"link-color"})}),Object(n.jsx)("a",{href:"http://linkedin.com",children:Object(n.jsx)(C.a,{icon:ee.d,className:"link-color"})}),Object(n.jsx)("a",{href:"http://instagram.com",children:Object(n.jsx)(C.a,{icon:ee.c,className:"link-color"})})]})})}),Object(n.jsxs)("div",{className:"footer-copyright text-center text-warning py-3",children:["\xa9 ",(new Date).getFullYear()," Copyright:",Object(n.jsx)("a",{href:"https://mdbootstrap.com/",children:" MDBootstrap.com"})]})]})})}),ce=(c(211),function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(e){return Object(l.a)(this,c),t.call(this,e)}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/Amazon/items").then((function(e){return e.json()})).then((function(t){return e.props.dispatchLoadItems(t)}))}},{key:"render",value:function(){return Object(n.jsxs)(b.a,{children:[Object(n.jsx)("div",{className:"px-5 pb-5 pt-4",style:{backgroundColor:"#37474F"},children:Object(n.jsx)(Z,{})}),Object(n.jsx)("div",{id:"showCase",style:{minHeight:"100vh"},children:Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{exact:!0,path:"/",children:Object(n.jsx)(L,{items:this.props.stateProducts})}),Object(n.jsx)(m.a,{path:"/about",children:Object(n.jsx)(E,{})}),Object(n.jsx)(m.a,{path:"/contact",children:Object(n.jsx)(K,{})}),Object(n.jsx)(m.a,{path:"/help",children:Object(n.jsx)(Q,{})}),Object(n.jsx)(m.a,{path:"/products",children:Object(n.jsx)(D,{items:this.props.stateProducts})}),Object(n.jsx)(m.a,{path:"/login",children:Object(n.jsx)(F,{})}),Object(n.jsx)(m.a,{path:"/users",children:Object(n.jsx)(Y,{})}),Object(n.jsx)(m.a,{path:"/product/:handle",component:G})]})}),Object(n.jsx)(te,{})]})}}]),c}(a.Component)),se=Object(h.b)((function(e){return{stateProducts:e.products}}),(function(e){return{dispatchLoadItems:function(t){return e({type:x,payload:t})}}}))(ce),ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var re=c(65),ie={user:{},isUserLoggedIn:!1,products:[{id:0,name:"",price:0,description:""}]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(s.a)(Object(s.a)({},e),{},{products:e.products=t.payload});case O:return Object(s.a)(Object(s.a)({},e),{},{isUserLoggedIn:e.isUserLoggedIn=!0,user:e.user=t.payload});case p:return Object(s.a)(Object(s.a)({},e),{},{isUserLoggedIn:e.isUserLoggedIn=!1,user:e.user={}});case f:return Object(s.a)(Object(s.a)({},e),{},{products:e.products.concat(t.payload)})}return e},le={position:i.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:i.c.SCALE},de=Object(re.b)(oe),ue=function(){return Object(n.jsx)(h.a,{store:de,children:Object(n.jsx)(i.a,Object(s.a)(Object(s.a)({template:o.a},le),{},{children:Object(n.jsx)(se,{})}))})};Object(r.render)(Object(n.jsx)(ue,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");ne?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):ae(e)}))}}()}},[[212,1,2]]]);
//# sourceMappingURL=main.8c00e93d.chunk.js.map