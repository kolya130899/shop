(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{186:function(e,t,c){},206:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),s=c(72),n=c.n(s),i=c.p+"static/media/LOGO.68b8d7ae.svg",l=c(0);function j(){return Object(l.jsx)("header",{className:"header-wrapper",children:Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("div",{className:"header__logo",children:Object(l.jsx)("img",{src:i,alt:"logo"})})})})}var d=c(4),b=function(e){var t=e.beer;return Object(l.jsxs)("div",{className:"catalog-item",children:[Object(l.jsx)("p",{className:"catalog-item__tag",children:t.name}),Object(l.jsxs)("div",{className:"catalog-item__info",children:[Object(l.jsx)("img",{src:t.image_url,alt:""}),Object(l.jsxs)("div",{className:"goods-charachteristics",children:[Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["First brewed - ",t.first_brewed]}),Object(l.jsxs)("li",{children:["ABV - ",t.abv]}),Object(l.jsxs)("li",{children:["IBU - ",t.ibu]}),Object(l.jsxs)("li",{children:["FG - ",t.target_fg]}),Object(l.jsxs)("li",{children:["OG - ",t.target_og]}),Object(l.jsxs)("li",{children:["EBC - ",t.ebc]}),Object(l.jsxs)("li",{children:["SRM - ",t.srm]}),Object(l.jsxs)("li",{children:["PH - ",t.ph]}),Object(l.jsxs)("li",{children:["Attenuation - ",t.attenuation_level]})]}),Object(l.jsx)("p",{children:t.contributed_by})]})]})]})},o=c(19),h=function(e,t){switch(t.type){case"increase":return Object(o.a)(Object(o.a)({},e),{},{page:e.page+1});case"decrease":return Object(o.a)(Object(o.a)({},e),{},{page:e.page-1});case"2":return{page:1,perPage:2};case"5":return{page:1,perPage:5};case"10":return{page:1,perPage:10};case"15":return{page:1,perPage:15};case"25":return{page:1,perPage:25};default:return e}},O=function(e){var t=Object(r.useReducer)(h,{page:1,perPage:15}),c=Object(d.a)(t,2),a=c[0],s=c[1],n=Math.ceil(e.length/a.perPage),i=a.page*a.perPage,l=Math.abs(a.perPage-i);return[e.slice(l,i),n,a,s]},u=c(80),x=["paginationState","lastPageIndex","dispatch"],m=function(e){e.paginationState;var t=e.lastPageIndex,c=e.dispatch,r=Object(u.a)(e,x);return Object(l.jsxs)("div",{className:"pages-control",children:[Object(l.jsx)("button",{id:"decrease",onClick:function(){return r.currentPage>=1?c({type:"decrease"}):""},className:r.currentPage<=1?"hidden":"",children:"Prev"}),Object(l.jsx)("span",{children:r.currentPage}),Object(l.jsx)("button",{id:"increace",onClick:function(){return r.currentPage<t?c({type:"increase"}):""},className:r.currentPage>=t?"hidden":"",children:"Next"})]})},p=function(e){var t=e.dispatch,c=function(e){return Object(l.jsx)("button",{onClick:function(){return t({type:e})},children:e})};return Object(l.jsxs)("div",{className:"items-quantity-control",children:[Object(l.jsx)("p",{children:"Items per page"}),c("2"),c("5"),c("10"),c("15"),c("25")]})},g=function(){var e=Object(r.useContext)(E),t=O(e),c=Object(d.a)(t,4),a=c[0],s=c[1],n=c[2],i=c[3];return Object(l.jsxs)("section",{className:"catalog-section",children:[Object(l.jsx)("h2",{className:"catalog__title page-title",children:"Catalog"}),Object(l.jsx)("div",{className:"catalog",children:a.map((function(e){return Object(r.createElement)(b,{beer:e,key:e.id})}))}),Object(l.jsx)(m,{currentPage:n.page,lastPageIndex:s,dispatch:i}),Object(l.jsx)(p,{dispatch:i})]})},f=function(e){var t=e.beers;return Object(l.jsxs)("table",{className:"beers-table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Tag"}),Object(l.jsx)("th",{children:"First brewed"}),Object(l.jsx)("th",{children:"ABV"}),Object(l.jsx)("th",{children:"IBU"}),Object(l.jsx)("th",{children:"FG"}),Object(l.jsx)("th",{children:"OG"}),Object(l.jsx)("th",{children:"EBC"}),Object(l.jsx)("th",{children:"SRM"}),Object(l.jsx)("th",{children:"PH"}),Object(l.jsx)("th",{children:"Attenuation"}),Object(l.jsx)("th",{children:"Contributed"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:e.id}),Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.tagline}),Object(l.jsx)("td",{children:e.first_brewed}),Object(l.jsx)("td",{children:e.abv}),Object(l.jsx)("td",{children:e.ibu}),Object(l.jsx)("td",{children:e.target_fg}),Object(l.jsx)("td",{children:e.target_og}),Object(l.jsx)("td",{children:e.ebc}),Object(l.jsx)("td",{children:e.srm}),Object(l.jsx)("td",{children:e.ph}),Object(l.jsx)("td",{children:e.attenuation_level}),Object(l.jsx)("td",{children:e.contributed_by})]},e.id)}))})]})},v=function(e){var t=Object(r.useContext)(E),c=O(t),a=Object(d.a)(c,4),s=a[0],n=a[1],i=a[2],j=a[3];return Object(l.jsxs)("div",{className:"beers block",children:[Object(l.jsx)("h2",{className:"beers__title page-title",children:"Beers"}),Object(l.jsx)(f,{beers:s,perPage:i.perPage,sort:e.sortData}),Object(l.jsx)(m,{currentPage:i.page,lastPageIndex:n,dispatch:j}),Object(l.jsx)(p,{dispatch:j})]})},N=c(8),_=c(18),P=function(e){var t=_.a({email:_.b().required("The field is required").email("Not email format"),name:_.b().required("The field is required"),phone:_.b().required("The field is required").min(10,"The phone is too short").max(12,"The phone is too long").matches(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,"Not phone format")});return Object(l.jsx)("div",{className:"form-wrapper block",children:Object(l.jsx)(N.d,{initialValues:{email:"",name:"",phone:""},validationSchema:t,onSubmit:function(e,t){var c=t.setSubmitting;c(!0),console.log(JSON.stringify(e,null,2)),c(!1)},children:function(t){var c=t.isSubmitting;return Object(l.jsxs)(N.c,{className:"form",children:[Object(l.jsx)("h2",{className:"form__title page-title",children:e.title}),Object(l.jsxs)("div",{className:"form__item",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email"}),Object(l.jsx)(N.b,{name:"email",type:"email",placeholder:"Enter your email"}),Object(l.jsx)(N.a,{name:"email",className:"validation-error",component:"div"})]}),Object(l.jsxs)("div",{className:"form__item",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)(N.b,{name:"name",type:"text",placeholder:"Enter your name"}),Object(l.jsx)(N.a,{name:"name",className:"validation-error",component:"div"})]}),Object(l.jsxs)("div",{className:"form__item",children:[Object(l.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(l.jsx)(N.b,{name:"phone",type:"tel",placeholder:"Enter your phone",inputMode:"numeric"}),Object(l.jsx)(N.a,{name:"phone",className:"validation-error",component:"div"})]}),Object(l.jsx)("button",{disabled:c,type:"submit",children:"Send"})]})}})})};function y(){return Object(l.jsx)("footer",{className:"footer-wrapper block",children:Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("div",{className:"footer__logo",children:Object(l.jsx)("img",{src:i,alt:"logo"})}),Object(l.jsx)("p",{className:"footer__disclaimer",children:"This is the pet project created to test my own skills using React.js."}),Object(l.jsxs)("p",{className:"footer__copyrights",children:["\xa9 ",(new Date).getFullYear()," Company. All rights reserved"]})]})})}c(186);var w=c(40),k=c.n(w),S=c(78),C=c(79),F=c.n(C),E=Object(r.createContext)([]);var I=function(){var e=function(e){var t=Object(r.useState)([]),c=Object(d.a)(t,2),a=c[0],s=c[1],n=function(){var t=Object(S.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.a.get(e).then((function(e){var t=e.data;s(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){n()})),a}("https://api.punkapi.com/v2/beers");return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(E.Provider,{value:e,children:[Object(l.jsx)(g,{}),Object(l.jsx)(v,{})]}),Object(l.jsx)(P,{title:"Yup validation Form"}),Object(l.jsx)(y,{})]})};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.3e600bea.chunk.js.map