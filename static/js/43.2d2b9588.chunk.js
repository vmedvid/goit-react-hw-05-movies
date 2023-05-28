"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[43],{43:function(n,e,t){t.r(e),t.d(e,{StyledLink:function(){return b},default:function(){return w}});var r,c,a,i=t(439),s=t(168),o=t(689),u=t(791),p=t(635),d=t(87),l=t(686),f=l.Z.div(r||(r=(0,s.Z)(["\n  margin: 15px 0;\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  padding: 5px;\n  background-color: #ecdbdb;\n  border-radius: 5px;\n  /* border-top: 1px solid #b92f2c;\n  border-bottom: 1px solid #b92f2c; */\n"]))),h=l.Z.img(c||(c=(0,s.Z)(["\n  border-radius: 5px;\n"]))),x=t(184),v=function(n){var e=n.film,t=e.poster_path,r=e.title,c=e.name,a=e.release_date,i=e.vote_average,s=e.overview,o=e.genres;return(0,x.jsxs)(f,{children:[(0,x.jsx)(h,{width:250,src:"https://www.themoviedb.org/t/p/w500//".concat(t),alt:r||c}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h2",{children:[r,(0,x.jsxs)("span",{children:[" (",a.substring(0,4),")"]})]}),(0,x.jsxs)("p",{children:["User rating: ",i.toFixed(1)]}),(0,x.jsx)("h4",{children:"Overview"}),(0,x.jsx)("p",{children:s}),(0,x.jsx)("h4",{children:"Genres"}),(0,x.jsxs)("span",{children:[" ",o.map((function(n){return n.name})).join(", ")]})]})]})},m=t(135),b=(0,l.Z)(d.rU)(a||(a=(0,s.Z)(["\n  align-items: center;\n  display: flex;\n  gap: 10px;\n  text-decoration: none;\n  color: black;\n  &.active {\n  }\n  :hover {\n    color: #b92f2c;\n    text-decoration: underline;\n  }\n"]))),w=function(){var n,e=(0,o.UO)().movieId,t=(0,u.useState)(null),r=(0,i.Z)(t,2),c=r[0],a=r[1],s=(0,o.TH)(),d=(0,u.useRef)((null===(n=s.state)||void 0===n?void 0:n.from)||"/");return(0,u.useEffect)((function(){(0,p.Pg)(e).then((function(n){a(n)})).catch((function(n){console.log(n)}))}),[e]),(0,x.jsxs)("main",{children:[(0,x.jsxs)(b,{to:d.current,children:[(0,x.jsx)(m.dL9,{size:16})," Go back"]}),c&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v,{film:c}),(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(b,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(b,{to:"reviews",children:"Reviews"})})]}),(0,x.jsx)(u.Suspense,{children:(0,x.jsx)(o.j3,{})})]})]})}},635:function(n,e,t){t.d(e,{IQ:function(){return x},JS:function(){return u},Jh:function(){return m},Pg:function(){return f},Zh:function(){return d}});var r=t(861),c=t(687),a=t.n(c),i=t(243),s="https://api.themoviedb.org/3/",o="12565cffb0d296cb69d2160e9bc02510";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"/trending/all/week?api_key=").concat(o,"&page=").concat(1));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"search/movie?query=").concat(e,"&include_adult=false&api_key=").concat(o,"&page=").concat(1));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=43.2d2b9588.chunk.js.map