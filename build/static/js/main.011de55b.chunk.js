(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{156:function(e,t,s){},206:function(e,t,s){},207:function(e,t,s){},208:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s(57),r=s.n(n),i=s(59),o=s(60),l=s(64),d=s(63),j=s(5),u=s(6),b=s(4),m="USCCESS_LOG_IN",h="LOG_OUT",x="LOAD_ITEMS",O=s.p+"static/media/blank.befce1d6.svg",p=function(e){var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2});return Object(c.jsx)("div",{className:"col-sm-6 card-goup",children:Object(c.jsxs)("div",{className:"card mb-5",style:{width:"21.7rem"},children:[Object(c.jsx)("img",{className:"card-img-top",src:O,alt:"Card cap"}),Object(c.jsxs)("div",{className:"card-body",style:{height:"15rem",maxheight:"15rem",overflow:"hidden"},children:[Object(c.jsx)("h5",{className:"card-title",children:e.name}),Object(c.jsx)("p",{className:"card-text",children:e.description})]}),Object(c.jsx)("div",{className:"card-footer ",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("p",{className:"card-text align-middle",children:t.format(e.price)})}),Object(c.jsx)("div",{className:"col text-right",children:Object(c.jsx)("button",{className:"btn btn-warning btn-sm align-middle",type:"submit",children:"Buy now"})})]})})]})})},f=function(e){return e&&0!==e.length?Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"row justify-content-center",children:e.items.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(j.b,{to:"/product/"+e.id,children:Object(c.jsx)(p,{name:e.name,price:e.price,description:e.description})})},e.id)}))})}):Object(c.jsx)("p",{children:"No items, sorry"})},v=function(){return Object(c.jsxs)("div",{className:"jumbotron text-white",style:{background:"none"},children:[Object(c.jsx)("h1",{className:"display-4 mb-5",children:"Bootleg Amazon"}),Object(c.jsx)("p",{className:"mb-5",children:"Online marketplace to buy and sell locally! No need to visit a used car dealership or thrift store to find the best local deals! Here you\u2019ll find a wide selection of used cars for sale, home goods, used electronics, vintage clothes, used furniture, used books, sports equipment, and real estate for sale or rent. It\u2019s everything you can wish for!."}),Object(c.jsx)("p",{className:"lead",children:Object(c.jsx)("a",{className:"btn btn-warning btn-lg",href:"",role:"button",children:"Learn more"})})]})},g=Object(b.b)((function(e){return{stateProducts:e.products}}))((function(e){return Object(c.jsxs)("div",{className:"card text-center my-5 ",children:[Object(c.jsx)("div",{className:"card-header",children:"Featured"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:e.stateProducts[0].name}),Object(c.jsx)("p",{className:"card-text",children:e.stateProducts[0].description}),Object(c.jsx)("a",{href:"",className:"btn btn-primary",onClick:function(e){return handleGoSomeWhereButton(e)},children:"Go somewhere"})]}),Object(c.jsx)("div",{className:"card-footer text-muted",children:"2 days ago"})]})})),N=s(25),w=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2);t[0],t[1];return Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body px-5 py-4",children:Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"inputUsername",children:"Username"}),Object(c.jsx)("input",{type:"email",className:"form-control",id:"inputUsername","aria-describedby":"usernameHelp",placeholder:"Enter username"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"inputEmail",children:"Email address"}),Object(c.jsx)("input",{type:"email",className:"form-control",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(c.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(c.jsx)("input",{type:"password",className:"form-control",id:"inputPassword",placeholder:"Password"})]}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("p",{children:"Make sure it's at least 15 characters OR at leaset 8 characters including a number and a lowercase letter."})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg btn-block pa-5",children:"Sign up for Bootleg Amazon"})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("small",{children:"By clicking \u201cSign up for Bootleg Amazon\u201d, you agree to our Terms of Service and Privacy Statement. We\u2019ll occasionally send you account related emails."})})]})})})},y=function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"px-5 pb-5 pt-4 mb-3",style:{backgroundColor:"#37474F"},children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"mt-5 row",children:[Object(c.jsx)("div",{className:"col",children:Object(c.jsx)(v,{})}),Object(c.jsx)("div",{className:"col",children:Object(c.jsx)(w,{})})]})})}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(g,{}),Object(c.jsx)(f,{items:e.items})]})]})},S=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.jsxs)("div",{className:"container mt-5",children:[Object(c.jsx)("h1",{className:"text-warning",children:"About"}),Object(c.jsx)("hr",{}),Object(c.jsx)("p",{children:"Bootleg Amazon is an Online marketplace to buy and sell locally! No need to visit a used car dealership or thrift store to find the best local deals! Here you\u2019ll find a wide selection of used cars for sale, home goods, used electronics, vintage clothes, used furniture, used books, sports equipment, and real estate for sale or rent. It\u2019s everything you can wish for!."}),Object(c.jsx)("p",{children:"It was build using React as the front end and Toby N Boudreaux API as back end."})]})},k=s(19),L=s(42),E=s(91);s(156);L.b.add(E.a);var I=function(e){return Object(c.jsx)("div",{className:"Banner",children:Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)("p",{className:"text-uppercase title",children:e.title}),Object(c.jsx)("p",{className:"text-uppercase subtitle",children:e.subtitle}),Object(c.jsxs)("div",{className:"starSection",children:[Object(c.jsx)(k.a,{className:"star",icon:["fas","star"]}),Object(c.jsx)(k.a,{className:"star",icon:["fas","star"]}),Object(c.jsx)(k.a,{className:"star",icon:["fas","star"]}),Object(c.jsx)(k.a,{className:"star",icon:["fas","star"]}),Object(c.jsx)(k.a,{className:"star",icon:["fas","star-half"]})]}),Object(c.jsx)("p",{children:e.message})]})})},U=function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.jsxs)("div",{className:"container text-center",children:[Object(c.jsx)(I,{title:"all you need",subtitle:"Customer-loved brands",message:"4+ star fashion with hundreds of reviews"}),Object(c.jsx)(f,{items:e.items})]})},C=s(62),A=s.n(C),q=Object(b.b)((function(e){return{emailAddress:e.user.email}}),(function(e){return{onSuccessLogIn:function(t){return e({type:m,payload:t})}}}))((function(e){var t,s,n=Object(a.useState)(""),r=Object(N.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(""),d=Object(N.a)(l,2),j=d[0],u=d[1],b=Object(a.useState)(!1),m=Object(N.a)(b,2),h=m[0],x=m[1],O=Object(a.useState)(!1),p=Object(N.a)(O,2),f=p[0],v=p[1];t=h?Object(c.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Error: something went wrong with your email address and/or password!!!"}):"",s=f?Object(c.jsxs)("div",{className:"alert alert-success",role:"alert",children:["Log in Success: you are now logged in as ",e.emailAddress,"!!!"]}):"";return Object(c.jsxs)("div",{style:{maxWidth:"400px",marginLeft:"auto",marginRight:"auto"},children:[t,s,Object(c.jsxs)("div",{className:"card bg-light",children:[Object(c.jsx)("div",{className:"card-header",children:"Log In to Bootleg Amazon"}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),"admin@admin.com"===i&&"admin"===j){e.onSuccessLogIn({id:1,email:"ruben@gmail.com",balance:1e4,roleName:"Admin"}),window.sessionStorage.setItem("email",i),v(!0),x(!1),o(""),u("")}else A.a.post("http://18.191.164.245:8080/Amazon/sessions",{email:i,password:j}).then((function(t){null===t.data.email?(x(!0),v(!1)):(e.onSuccessLogIn(t.data),window.sessionStorage.setItem("email",t.data.email),v(!0),x(!1),o(""),u(""))})).catch((function(e){console.log(e)}))},children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{value:i,onChange:function(e){return function(e){o(e.target.value)}(e)},type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email address"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{value:j,onChange:function(e){return function(e){u(e.target.value)}(e)},type:"password",className:"form-control",id:"password","aria-describedby":"passwordHelp",placeholder:"Enter password"})]}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Log In"})})]})})]})]})})),T=function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.jsx)("div",{className:"container mt-5 p-5",children:Object(c.jsx)(q,{userState:e.userState})})},P=function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:e.item.id}),Object(c.jsx)("td",{children:e.item.name}),Object(c.jsx)("td",{children:e.item.price}),Object(c.jsx)("td",{children:e.item.description}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{children:"Edit"})}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{children:"Delete"})})]})},D=Object(b.b)((function(e){return{stateProducts:e.products}}))((function(e){return e&&0!==e.length?Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"row justify-content-center",children:e.stateProducts.map((function(e){return Object(c.jsxs)("table",{class:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"#"}),Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"Price"}),Object(c.jsx)("th",{scope:"col",children:"Description"})]})}),Object(c.jsx)("tbody",{children:Object(c.jsx)("div",{children:Object(c.jsx)(P,{item:e})},e.id)})]})}))})}):Object(c.jsx)("p",{children:"No products to show, sorry"})})),F=function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Products"}),Object(c.jsx)("hr",{}),Object(c.jsx)(D,{})]})},B=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Users"}),Object(c.jsx)("hr",{})]})},W=Object(b.b)((function(e){return{user:e.user}}))((function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",style:{backgroundColor:"#e3f2fd"},children:[Object(c.jsx)("a",{className:"navbar-brand text-uppercase",children:e.user.roleName}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(c.jsxs)("ul",{className:"navbar-nav",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{className:"nav-link",to:"/users/products",children:"Products"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{className:"nav-link",to:"/users/users",children:"Users"})})]})})]}),Object(c.jsxs)("div",{className:"container mt-3 p-2",children:[Object(c.jsx)(u.a,{path:"/users/products",children:Object(c.jsx)(F,{})}),Object(c.jsx)(u.a,{path:"/users/users",children:Object(c.jsx)(B,{})})]})]})})),H=Object(b.b)((function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),{user:e.user}}))((function(e){return Object(c.jsxs)("div",{className:"container mt-5 text-center",children:[Object(c.jsx)("h2",{className:"text-uppercase",children:e.user.roleName}),Object(c.jsxs)("h3",{children:["Welcome: ",e.user.emal]})]})})),z=Object(b.b)((function(e){return{user:e.user}}))((function(e){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.jsxs)("div",{className:"container mt-5 text-center",children:[Object(c.jsx)("h2",{className:"text-uppercase",children:e.user.roleName}),Object(c.jsxs)("h3",{children:["Welcome: ",e.user.emal]})]})})),M=Object(b.b)((function(e){return{user:e.user}}))((function(e){switch(Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),String.prototype.toUpperCase.call(void 0===e.user.roleName?"":e.user.roleName)){case"ADMIN":return Object(c.jsx)(W,{});case"SELLER":return Object(c.jsx)(H,{});case"BUYER":return Object(c.jsx)(z,{});default:return Object(c.jsx)("div",{className:"container text-center mt-5",children:Object(c.jsx)("div",{className:"alert alert-danger",role:"alert",children:"You need to be logged in as Administrator, Seller or Buyer to visit this page"})})}})),R=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={items:{id:0,name:"",price:0,description:""}},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0);var t=this.props.match.params.handle,s="http://18.191.164.245:8080/Amazon/items?id=".concat(t);A.a.get(s).then((function(t){var s=t.data;e.setState({items:s})}))}},{key:"render",value:function(){for(var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}),t=[],s=0;s<5;s++)t.push(Object(c.jsx)("div",{className:"col-auto",children:Object(c.jsx)("img",{className:"img-thumbnail my-3",src:"https://via.placeholder.com/150.png",alt:"..."})}));return Object(c.jsxs)("div",{className:"container p-5",children:[Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsx)("h1",{className:"pb-3 ",children:this.state.items.name})}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"row justify-content-center",children:t}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h5",{children:this.state.items.description}),Object(c.jsx)("p",{children:"Sunt incididunt adipisicing aliquip minim exercitation laboris proident eiusmod do id cupidatat. Adipisicing dolore ad ea ipsum Lorem enim Lorem. Ut veniam culpa tempor voluptate elit anim excepteur. Veniam sit cupidatat qui occaecat velit reprehenderit anim amet ex pariatur magna amet quis incididunt. Aliquip magna veniam culpa nulla culpa labore eu nulla. Ullamco incididunt irure elit sunt consequat enim. Anim veniam minim nostrud Lorem fugiat consectetur ut ea commodo nisi. Lorem mollit ex pariatur non pariatur ipsum. Laboris pariatur sint cillum do aliqua sunt esse cupidatat elit deserunt velit. Ea ea officia mollit in Lorem laboris cupidatat quis amet et. Dolor aliqua occaecat est id Lorem excepteur incididunt elit reprehenderit consequat. Non consectetur sint do do est consectetur labore sunt est dolore. Aute irure ad excepteur est pariatur. Laboris ipsum adipisicing incididunt mollit dolore tempor velit ea ipsum labore qui ut consequat nisi. Fugiat minim eiusmod nisi deserunt dolore non sunt non qui reprehenderit pariatur irure reprehenderit. Ut adipisicing nisi velit commodo laboris enim cillum sunt amet enim qui do eu nisi. Ullamco tempor duis duis laboris aute velit eiusmod."})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("h4",{className:"text-right text-success",children:e.format(this.state.items.price)})})]})}}]),s}(a.Component),G=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.jsxs)("div",{className:"container mt-5",children:[Object(c.jsx)("h1",{className:"text-warning",children:"Contact"}),Object(c.jsx)("hr",{})]})},_=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.jsxs)("div",{className:"container mt-5",children:[Object(c.jsx)("h1",{className:"text-warning",children:"Help"}),Object(c.jsx)("hr",{})]})},V=Object(b.b)((function(e){return{isUserLoggedIn:e.isUserLoggedIn}}),(function(e){return{onLogOut:function(){return e({type:h})}}}))((function(e){return e.isUserLoggedIn?Object(c.jsx)(j.b,{className:"btn btn-outline-light ml-2 my-2 my-sm-0 ",onClick:function(){return window.sessionStorage.clear(),void e.onLogOut()},to:"/",role:"button",children:"Log Out"}):Object(c.jsx)(j.b,{className:"btn btn-outline-light ml-2 my-2 my-sm-0 ",to:"/login",role:"button",children:"Log In"})})),Y=s(143),J=Object(b.b)((function(e){return{user:e.user}}))((function(e){return void 0!==e.user.email?Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-auto",children:Object(c.jsx)(Y.a,{color:"#f0ad4e",name:e.user.email,size:"32",round:!0})}),Object(c.jsxs)("div",{className:"col-auto pt-1 pl-0",children:[" ",Object(c.jsx)(j.b,{to:"/users",children:Object(c.jsx)("span",{className:"text-warning",children:e.user.email})})]})]}):""})),Q=Object(b.b)((function(e){return{isUserLoggedIn:e.isUserLoggedIn,user:e.user}}))((function(e){var t=Object(a.useState)(""),s=Object(N.a)(t,2),n=s[0],r=s[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"pl-3",children:Object(c.jsx)(J,{userEmail:e.userEmail})}),Object(c.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:[Object(c.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Bootleg Amazon"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(c.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{className:"nav-link",to:"/",children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{className:"nav-link",to:"/products",children:"Products"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(j.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(c.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),r("")}(e)},className:"form-inline my-2 my-lg-0",children:[Object(c.jsx)("input",{onChange:function(e){return function(e){r(e.target.value)}(e)},value:n,className:"form-control mr-sm-2 input-sm",type:"search",placeholder:"Search","aria-label":"Search"}),Object(c.jsx)(j.b,{type:"submit",className:"btn btn-outline-light my-2 my-sm-0 ",to:"/product/"+n,style:{textDecoration:"none"},children:"Search"}),Object(c.jsx)(V,{})]})]})]})]})})),$=s(31),K=(s(206),function(){return Object(c.jsx)("div",{className:"Footer",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row text-center d-flex justify-content-center pt-5 mb-3",children:[Object(c.jsx)("div",{className:"col-md-2 mb-3",children:Object(c.jsx)("h6",{className:"text-uppercase font-weight-bold",children:Object(c.jsx)(j.b,{to:"/about",children:"About us"})})}),Object(c.jsx)("div",{className:"col-md-2 mb-3",children:Object(c.jsx)("h6",{className:"text-uppercase font-weight-bold",children:Object(c.jsx)(j.b,{to:"/products",children:"Products"})})}),Object(c.jsx)("div",{className:"col-md-2 mb-3",children:Object(c.jsx)("h6",{className:"text-uppercase font-weight-bold",children:Object(c.jsx)(j.b,{to:"/help",children:"Help"})})}),Object(c.jsx)("div",{className:"col-md-2 mb-3",children:Object(c.jsx)("h6",{className:"text-uppercase font-weight-bold",children:Object(c.jsx)(j.b,{to:"/Contact",children:"Contact"})})})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"row d-flex text-center justify-content-center mb-md-0 mb-4",children:Object(c.jsx)("div",{className:"col-md-8 col-12 mt-5",children:Object(c.jsx)("p",{className:"footerInfo",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."})})}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"row pb-3",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"mb-5 flex-center text-center faIcons",children:[Object(c.jsx)("a",{href:"http://facebook.com",children:Object(c.jsx)(k.a,{icon:$.a,className:"link-color"})}),Object(c.jsx)("a",{href:"http://tweeter.com",children:Object(c.jsx)(k.a,{icon:$.e,className:"link-color"})}),Object(c.jsx)("a",{href:"http://google.com",children:Object(c.jsx)(k.a,{icon:$.b,className:"link-color"})}),Object(c.jsx)("a",{href:"http://linkedin.com",children:Object(c.jsx)(k.a,{icon:$.d,className:"link-color"})}),Object(c.jsx)("a",{href:"http://instagram.com",children:Object(c.jsx)(k.a,{icon:$.c,className:"link-color"})})]})})}),Object(c.jsxs)("div",{className:"footer-copyright text-center text-warning py-3",children:["\xa9 ",(new Date).getFullYear()," Copyright:",Object(c.jsx)("a",{href:"https://mdbootstrap.com/",children:" MDBootstrap.com"})]})]})})}),X=(s(207),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("http://18.191.164.245:8080/Amazon/items").then((function(e){return e.json()})).then((function(t){return e.props.dispatchLoadItems(t)}))}},{key:"render",value:function(){return Object(c.jsxs)(j.a,{children:[Object(c.jsx)("div",{className:"px-5 pb-5 pt-4",style:{backgroundColor:"#37474F"},children:Object(c.jsx)(Q,{})}),Object(c.jsx)("div",{id:"showCase",style:{minHeight:"100vh"},children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",children:Object(c.jsx)(y,{items:this.props.stateProducts})}),Object(c.jsx)(u.a,{path:"/about",children:Object(c.jsx)(S,{})}),Object(c.jsx)(u.a,{path:"/contact",children:Object(c.jsx)(G,{})}),Object(c.jsx)(u.a,{path:"/help",children:Object(c.jsx)(_,{})}),Object(c.jsx)(u.a,{path:"/products",children:Object(c.jsx)(U,{items:this.props.stateProducts})}),Object(c.jsx)(u.a,{path:"/login",children:Object(c.jsx)(T,{})}),Object(c.jsx)(u.a,{path:"/users",children:Object(c.jsx)(M,{})}),Object(c.jsx)(u.a,{path:"/product/:handle",component:R})]})}),Object(c.jsx)(K,{})]})}}]),s}(a.Component)),Z=Object(b.b)((function(e){return{stateProducts:e.products}}),(function(e){return{dispatchLoadItems:function(t){return e({type:x,payload:t})}}}))(X),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var se=s(61),ce=s(95),ae={user:{},isUserLoggedIn:!1,products:[{id:0,name:"Vulova Watch",price:300,description:"Nice Vulova Watch From the 1800s"}]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(ce.a)(Object(ce.a)({},e),{},{products:e.products=t.payload});case m:return{isUserLoggedIn:e.isUserLoggedIn=!0,user:e.user=t.payload};case h:return{isUserLoggedIn:e.isUserLoggedIn=!1,user:e.user={}}}return e},re=Object(se.b)(ne);r.a.render(Object(c.jsx)(b.a,{store:re,children:Object(c.jsx)(Z,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");ee?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):te(e)}))}}()}},[[208,1,2]]]);
//# sourceMappingURL=main.011de55b.chunk.js.map