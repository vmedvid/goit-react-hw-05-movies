"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[856],{856:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,i,u=e(439),o=e(791),s=e(689),p=e(635),f=e(168),d=e(686),l=d.Z.div(r||(r=(0,f.Z)(["\n  margin: 15px 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  gap: 20px;\n  padding: 5px;\n"]))),h=d.Z.div(a||(a=(0,f.Z)(["\n  margin: 0;\n  padding: 0;\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: #ecdbdb;\n"]))),x=d.Z.div(c||(c=(0,f.Z)(["\n  margin: 5px 0;\n  padding: 2px 10px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n"]))),g=d.Z.div(i||(i=(0,f.Z)(["\n  margin: 5px 0;\n  padding: 2px 10px;\n  text-align: center;\n  font-size: 14px;\n"]))),v=e(184),m=function(n){var t=n.inCast;return(0,v.jsx)(l,{children:t&&t.map((function(n){return(0,v.jsxs)(h,{children:[(0,v.jsx)("img",{width:150,src:"https://www.themoviedb.org/t/p/w500//".concat(n.profile_path),alt:n.name}),(0,v.jsx)(x,{children:n.name}),(0,v.jsxs)(g,{children:["Character: ",n.character]})]},n.id)}))})},w=function(){var n=(0,o.useState)(null),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,s.UO)().movieId;return(0,o.useEffect)((function(){(0,p.IQ)(a).then((function(n){r(n)})).catch((function(n){console.log(n)}))}),[a]),(0,v.jsx)(v.Fragment,{children:e&&(0,v.jsx)(m,{inCast:e})})}},635:function(n,t,e){e.d(t,{IQ:function(){return x},JS:function(){return s},Jh:function(){return v},Pg:function(){return l},Zh:function(){return f}});var r=e(861),a=e(687),c=e.n(a),i=e(243),u="https://api.themoviedb.org/3/",o="12565cffb0d296cb69d2160e9bc02510";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/trending/all/week?api_key=").concat(o,"&page=").concat(1));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"search/movie?query=").concat(t,"&include_adult=false&api_key=").concat(o,"&page=").concat(1));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=856.8187c9e2.chunk.js.map