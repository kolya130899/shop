(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{186:function(e,t,c){},206:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(72),s=c.n(n),i=c.p+"static/media/LOGO.68b8d7ae.svg",j=c(0);function l(){return Object(j.jsx)("header",{className:"header-wrapper",children:Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("div",{className:"header__logo",children:Object(j.jsx)("img",{src:i,alt:"logo"})})})})}var d=c(4),b=function(e){var t=e.beer;return Object(j.jsxs)("div",{className:"catalog-item",children:[Object(j.jsx)("p",{className:"catalog-item__tag",children:t.name}),Object(j.jsxs)("div",{className:"catalog-item__info",children:[Object(j.jsx)("img",{src:t.image_url,alt:""}),Object(j.jsxs)("div",{className:"goods-charachteristics",children:[Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["First brewed - ",t.first_brewed]}),Object(j.jsxs)("li",{children:["ABV - ",t.abv]}),Object(j.jsxs)("li",{children:["IBU - ",t.ibu]}),Object(j.jsxs)("li",{children:["FG - ",t.target_fg]}),Object(j.jsxs)("li",{children:["OG - ",t.target_og]}),Object(j.jsxs)("li",{children:["EBC - ",t.ebc]}),Object(j.jsxs)("li",{children:["SRM - ",t.srm]}),Object(j.jsxs)("li",{children:["PH - ",t.ph]}),Object(j.jsxs)("li",{children:["Attenuation - ",t.attenuation_level]})]}),Object(j.jsx)("p",{children:t.contributed_by})]})]})]})},o=c(19),h=function(e,t){switch(t.type){case"increase":return Object(o.a)(Object(o.a)({},e),{},{page:e.page+1});case"decrease":return Object(o.a)(Object(o.a)({},e),{},{page:e.page-1});case"2":return{page:1,perPage:2};case"5":return{page:1,perPage:5};case"10":return{page:1,perPage:10};case"15":return{page:1,perPage:15};case"25":return{page:1,perPage:25};default:return e}},O=function(e){var t=Object(r.useReducer)(h,{page:1,perPage:15}),c=Object(d.a)(t,2),a=c[0],n=c[1],s=Math.ceil(e.length/a.perPage),i=a.page*a.perPage,j=Math.abs(a.perPage-i);return[e.slice(j,i),s,a,n]},u=c(80),x=["paginationState","lastPageIndex","dispatch"],m=function(e){e.paginationState;var t=e.lastPageIndex,c=e.dispatch,r=Object(u.a)(e,x);return Object(j.jsxs)("div",{className:"pages-control",children:[Object(j.jsx)("button",{id:"decrease",onClick:function(){return r.currentPage>=1?c({type:"decrease"}):""},className:r.currentPage<=1?"hidden":"",children:"Prev"}),Object(j.jsx)("span",{children:r.currentPage}),Object(j.jsx)("button",{id:"increace",onClick:function(){return r.currentPage<t?c({type:"increase"}):""},className:r.currentPage>=t?"hidden":"",children:"Next"})]})},p=function(e){var t=e.dispatch,c=function(e){return Object(j.jsx)("button",{onClick:function(){return t({type:e})},children:e})};return Object(j.jsxs)("div",{className:"items-quantity-control",children:[Object(j.jsx)("p",{children:"Items per page"}),c("2"),c("5"),c("10"),c("15"),c("25")]})},g=function(){var e=Object(r.useContext)(F),t=O(e),c=Object(d.a)(t,4),a=c[0],n=c[1],s=c[2],i=c[3];return Object(j.jsxs)("section",{className:"catalog-section",children:[Object(j.jsx)("h2",{className:"catalog__title page-title",children:"Catalog"}),Object(j.jsx)("div",{className:"catalog",children:a.map((function(e){return Object(r.createElement)(b,{beer:e,key:e.id})}))}),Object(j.jsx)(m,{currentPage:s.page,lastPageIndex:n,dispatch:i}),Object(j.jsx)(p,{dispatch:i})]})},f=function(e){var t=e.beers;return Object(j.jsxs)("table",{className:"beers-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"ID"}),Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Tag"}),Object(j.jsx)("th",{children:"First brewed"}),Object(j.jsx)("th",{children:"ABV"}),Object(j.jsx)("th",{children:"IBU"}),Object(j.jsx)("th",{children:"FG"}),Object(j.jsx)("th",{children:"OG"}),Object(j.jsx)("th",{children:"EBC"}),Object(j.jsx)("th",{children:"SRM"}),Object(j.jsx)("th",{children:"PH"}),Object(j.jsx)("th",{children:"Attenuation"}),Object(j.jsx)("th",{children:"Contributed"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:e.id}),Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.tagline}),Object(j.jsx)("td",{children:e.first_brewed}),Object(j.jsx)("td",{children:e.abv}),Object(j.jsx)("td",{children:e.ibu}),Object(j.jsx)("td",{children:e.target_fg}),Object(j.jsx)("td",{children:e.target_og}),Object(j.jsx)("td",{children:e.ebc}),Object(j.jsx)("td",{children:e.srm}),Object(j.jsx)("td",{children:e.ph}),Object(j.jsx)("td",{children:e.attenuation_level}),Object(j.jsx)("td",{children:e.contributed_by})]},e.id)}))})]})},v=function(e){var t=Object(r.useContext)(F),c=O(t),a=Object(d.a)(c,4),n=a[0],s=a[1],i=a[2],l=a[3];return Object(j.jsxs)("div",{className:"beers block",children:[Object(j.jsx)("h2",{className:"beers__title page-title",children:"Beers"}),Object(j.jsx)(f,{beers:n,perPage:i.perPage,sort:e.sortData}),Object(j.jsx)(m,{currentPage:i.page,lastPageIndex:s,dispatch:l}),Object(j.jsx)(p,{dispatch:l})]})},_=c(8),N=c(18),P=function(e){var t=N.a({email:N.b().required("The field is required").email("Not email format"),name:N.b().required("The field is required"),phone:N.b().required("The field is required").min(10,"The phone is too short").max(12,"The phone is too long").matches(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,"Not phone format")});return Object(j.jsx)("div",{className:"form-wrapper block",children:Object(j.jsx)(_.d,{initialValues:{email:"",name:"",phone:""},validationSchema:t,onSubmit:function(e,t){var c=t.setSubmitting;c(!0),console.log(JSON.stringify(e,null,2)),c(!1)},children:function(t){var c=t.isSubmitting;return Object(j.jsxs)(_.c,{className:"form",children:[Object(j.jsx)("h2",{className:"form__title page-title",children:e.title}),Object(j.jsxs)("div",{className:"form__item",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)(_.b,{name:"email",type:"email",placeholder:"Enter your email"}),Object(j.jsx)(_.a,{name:"email",className:"validation-error",component:"div"})]}),Object(j.jsxs)("div",{className:"form__item",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)(_.b,{name:"name",type:"text",placeholder:"Enter your name"}),Object(j.jsx)(_.a,{name:"name",className:"validation-error",component:"div"})]}),Object(j.jsxs)("div",{className:"form__item",children:[Object(j.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(j.jsx)(_.b,{name:"phone",type:"tel",placeholder:"Enter your phone",inputMode:"numeric"}),Object(j.jsx)(_.a,{name:"phone",className:"validation-error",component:"div"})]}),Object(j.jsx)("button",{disabled:c,type:"submit",children:"Send"})]})}})})};function y(){return Object(j.jsx)("footer",{className:"footer-wrapper block",children:Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("div",{className:"footer__logo",children:Object(j.jsx)("img",{src:i,alt:"logo"})}),Object(j.jsx)("p",{className:"footer__disclaimer",children:"This is the pet project created to test my own skills using React.js."}),Object(j.jsxs)("p",{className:"footer__copyrights",children:["\xa9 ",(new Date).getFullYear()," Company. All rights reserved"]})]})})}c(186);var S=c(40),E=c.n(S),C=c(78),T=c(79),w=c.n(T),F=Object(r.createContext)([]);var k=function(){var e=function(e){var t=Object(r.useState)([]),c=Object(d.a)(t,2),a=c[0],n=c[1],s=function(){var t=Object(C.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get(e).then((function(e){var t=e.data;n(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()})),a}(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL);return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(F.Provider,{value:e,children:[Object(j.jsx)(g,{}),Object(j.jsx)(v,{})]}),Object(j.jsx)(P,{title:"Yup validation Form"}),Object(j.jsx)(y,{})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.23f30a8e.chunk.js.map