(this["webpackJsonpmoxy-proxy"]=this["webpackJsonpmoxy-proxy"]||[]).push([[10],{145:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(87),r=n(42),c=n.n(r),o=n(19),i=n(0),l=n.n(i);n(145);function u(e,t){var n=Object(i.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(o.a)(n,2),r=a[0],c=a[1];return[r,Object(i.useCallback)((function(t){try{window.localStorage.setItem(e,JSON.stringify(t)),c(t)}catch(n){console.error(n)}}),[e])]}var s=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,444))})),d=Object(i.lazy)((function(){return n.e(12).then(n.bind(null,447))})),p=Object(i.lazy)((function(){return n.e(13).then(n.bind(null,448))})),f=Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(14)]).then(n.bind(null,427))}));function S(){var e=Object(i.useContext)(E).viewMode;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.Suspense,{fallback:"Loading header..."},l.a.createElement(s,null)),"tabs"===e&&l.a.createElement(i.Suspense,{fallback:"Loading tabs layout..."},l.a.createElement(f,null)),"panels"===e&&l.a.createElement(i.Suspense,{fallback:"Loading panel layout..."},l.a.createElement(p,null)),"board"===e&&l.a.createElement(i.Suspense,{fallback:"Loading board layout..."},l.a.createElement(d,null)))}var b=n(88);n.d(t,"AppStateContext",(function(){return E}));var m="localhost"!==window.location.hostname?"wss://moxy-proxy.herokuapp.com//".concat("superHash123"):"ws://localhost:5000/".concat("superHash123");function v(){return{}}function g(){return[]}var E=Object(i.createContext)({activeTab:"serverState",activeServerStateScenarioId:"default",viewMode:"tabs",serverState:{},endpoints:[],serverStateInterface:"",serverStateScenarios:[],persistEndpoints:function(){},persistMockedData:function(){},changeViewMode:function(e){},changeActiveTab:function(e){},addServerStateScenario:function(e){},changeServerStateScenario:function(e){},updateServerState:function(e){},resetServerState:function(){},deleteStateScenario:function(){},addEndpoint:function(e){},deleteEndpoint:function(e){},changeEndpointResponseStatus:function(e,t){},updateEndpoint:function(e){},testEndpoint:function(e,t,n,a){return Promise.resolve(new Response(""))}});var y=new WebSocket(m);function O(e){console.log(["sendEvent"],e);try{y.send(JSON.stringify(e))}catch(t){console.error(t)}}t.default=function(){var e=u("activeTab","serverState"),t=Object(o.a)(e,2),n=t[0],r=t[1],s=u("activeServerStateScenarioId","default"),d=Object(o.a)(s,2),p=d[0],f=d[1],m=u("viewMode","tabs"),j=Object(o.a)(m,2),h=j[0],w=j[1],k=Object(i.useState)(v),x=Object(o.a)(k,2),C=x[0],I=x[1],T=Object(i.useState)([]),J=Object(o.a)(T,2),N=J[0],R=J[1],q=Object(i.useState)(""),P=Object(o.a)(q,2),M=P[0],A=P[1],z=Object(i.useState)(g),B=Object(o.a)(z,2),F=B[0],L=B[1],W=Object(i.useCallback)((function(e){var t=e.action,n=e.payload;({updateEndpoints:function(e){L(e)},updateServerState:function(e){I(e)},updateServerStateInterface:function(e){A(e)},updateActiveStateScenarioId:function(e){f(e)},updateServerStateScenarios:function(e){R(e)}})[t](n)}),[f]);Object(i.useEffect)((function(){y.onopen=function(e){console.log(["WebSocket.onopen"],e)},y.onclose=function(e){console.log(["WebSocket.onclose"],e),setTimeout((function(){window.location.reload()}),3e3)},y.onmessage=function(e){console.log(["WebSocket.onmessage"],JSON.parse(e.data)),W(function(e){var t=JSON.parse(e);return{action:t.action,payload:t.payload}}(e.data))},y.onerror=function(e){console.error(["WebSocket.onerror"],e)};var e=setInterval((function(){O({action:"ping"})}),1e4);return function(){clearInterval(e)}}),[W]);var D={activeTab:n,activeServerStateScenarioId:p,endpoints:F,serverState:C,serverStateInterface:M,serverStateScenarios:N,viewMode:h,persistEndpoints:function(){O({action:"persistEndpoints"})},persistMockedData:function(){O({action:"persistMockedData"})},changeEndpointResponseStatus:function(e,t){O({action:"changeEndpointResponseStatus",payload:{endpointId:e,status:t}})},addServerStateScenario:function(e){R((function(t){return[].concat(Object(a.a)(t),[e])})),O({action:"addServerStateScenario",payload:e})},deleteStateScenario:function(){O({action:"deleteStateScenario",payload:p})},changeServerStateScenario:function(e){O({action:"changeServerStateScenario",payload:e}),f(e)},changeViewMode:w,changeActiveTab:r,updateServerState:function(e){I(e),O({action:"clientUpdatedServer",payload:{serverStateScenarioId:p,state:e}})},resetServerState:function(){O({action:"resetServerState"})},addEndpoint:function(e){O({action:"addEndpoint",payload:e})},updateEndpoint:function(e){O({action:"updateEndpoint",payload:e})},deleteEndpoint:function(e){O({action:"deleteEndpoint",payload:e})},testEndpoint:function(e,t,n,a){var r,o,i,l,u,s,d,p;return c.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:return d=function(e,t){return e.split("/").filter(Boolean).reduce((function(e,n){return n[0]===b.b?"".concat(e,"/").concat(t[n.slice(1)]):"".concat(e,"/").concat(n)}),"")},r=e.url,o=e.method,i=JSON.parse(a),l="get"===o||0===Object.keys(i).length,u=l?void 0:JSON.stringify(i),s=l?void 0:{Accept:"application/json","Content-Type":"application/json"},p="".concat(d(r,t),"?").concat(n),f.next=9,c.a.awrap(fetch(p,{body:u,method:o,headers:s,credentials:"include"}));case 9:return f.abrupt("return",f.sent);case 10:case"end":return f.stop()}}))}};return l.a.createElement("div",{className:"App"},l.a.createElement(E.Provider,{value:D},l.a.createElement(S,null)))}},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(19),r=n(414),c=n(410),o=n(0),i=n.n(o),l=n(440),u=n(71);function s(e){var t=e.code,n=e.title,s=e.language,d=void 0===s?"javascript":s,p=e.onSave,f=Object(o.useState)(t),S=Object(a.a)(f,2),b=S[0],m=S[1],v=Object(o.useState)(!1),g=Object(a.a)(v,2),E=g[0],y=g[1],O=Object(o.useState)(!1),j=Object(a.a)(O,2),h=j[0],w=j[1];return i.a.createElement("div",{style:{width:"100%"}},i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement(c.a,{variant:"body1"},n),h&&E?i.a.createElement(r.a,{onClick:function(){y(!1),p(b)}},"Done"):i.a.createElement(r.a,{onClick:function(){return y(!0)}},"Edit")),i.a.createElement("div",null,E?i.a.createElement(u.a,{autoHeight:!0,code:b,language:d,onReady:function(){w(!0)},onSave:m}):i.a.createElement(l.a,{language:d},t.trim())))}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(97),r=n.n(a),c=n(0),o=n.n(c);function i(e){var t=e.onSave,n=e.code,a=e.autoHeight,i=e.language,l=e.onReady,u=Object(c.useRef)();!function(e,t){Object(c.useEffect)((function(){var n=setInterval((function(){e.current&&t(e.current())}),500);return function(){clearInterval(n)}}),[e,t])}(u,t);var s=n.split(/\r\n|\r|\n/).length+3,d=a?"".concat(18*s,"px"):"500px";return o.a.createElement(r.a,{editorDidMount:function(e){l&&l(),u.current=e},height:d,language:i,value:n.trim(),width:"100%"})}},88:function(e,t,n){"use strict";var a=n(42),r=n.n(a),c=n(19),o=n(35),i=n(31),l=n(423),u=n(417),s=n(414),d=n(445),p=n(426),f=n(425),S=n(424),b=n(422),m=n(449),v=n(39),g=n(410),E=n(450),y=n(0),O=n.n(y),j=n(440),h=n(24),w=n(32),k=n(446),x=n(371),C=n.n(x);function I(e){var t=e.endpoint,n=e.queryString,a=e.requestBody,o=Object(y.useState)(!1),i=Object(c.a)(o,2),l=i[0],d=i[1],p=function(e,t){"clickaway"!==t&&d(!1)};return O.a.createElement("div",null,O.a.createElement(s.a,{onClick:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,r.a.awrap(navigator.clipboard.writeText('curl -i --header "Content-Type: application/json" --request '.concat(t.method.toLocaleUpperCase()," --data '").concat(JSON.stringify(JSON.parse(a)),"' ").concat(window.location.origin,"/").concat(t.url,"?").concat(n)));case 3:case"end":return e.stop()}}))}},"Copy CURL to clipboard"),O.a.createElement(k.a,{action:O.a.createElement(u.a,{"aria-label":"close",color:"inherit",size:"small",onClick:p},O.a.createElement(C.a,{fontSize:"small"})),anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3,message:"CURL copied to clipboard!",open:l,onClose:p}))}var T=n(451);function J(e){var t=e.endpoint,n=e.queryParams,a=e.setQueryParams;return O.a.createElement(O.a.Fragment,null,O.a.createElement(g.a,{variant:"subtitle2"},"Fill query parameters"),O.a.createElement("div",{style:{display:"flex"}},t.parameters.map((function(e,t){e.id;var r=e.name;e.type;return O.a.createElement(O.a.Fragment,null,O.a.createElement(g.a,{style:{marginTop:20,marginRight:5},variant:"body1"},"".concat(t>0?"& ":"").concat(r," = ")),O.a.createElement(T.a,{label:r,placeholder:"Set query parameter value",value:n[r],onChange:function(e){a(Object(i.a)({},n,Object(o.a)({},r,e.target.value)))}}))}))))}function N(e){var t=e.endpoint,n=e.urlParameters,a=e.setUrlParameters,r=t.url.split("/").filter(Boolean);return O.a.createElement(O.a.Fragment,null,O.a.createElement(g.a,{style:{flexGrow:1},variant:"subtitle2"},"Fill url parameters"),O.a.createElement("div",{style:{display:"flex"}},r.map((function(e){if(":"===e[0]){var t=e.slice(1),r=n[t];return O.a.createElement(T.a,{required:!0,label:t,placeholder:"Set parameter value",value:r,onChange:function(e){a(Object(i.a)({},n,Object(o.a)({},t,e.target.value)))}})}return O.a.createElement(g.a,{style:{marginTop:20,marginRight:5},variant:"body1"},"".concat(e," /"))}))))}n.d(t,"b",(function(){return q})),n.d(t,"a",(function(){return P}));var R=Object(b.a)((function(e){return Object(m.a)({closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})})),q=":";function P(e){var t=e.endpoint,n=Object(y.useState)(!1),a=Object(c.a)(n,2),b=a[0],m=a[1],k=Object(y.useState)("\n{}\n"),x=Object(c.a)(k,2),C=x[0],T=x[1],P=Object(y.useState)(!1),M=Object(c.a)(P,2),A=M[0],z=M[1],B=Object(y.useState)(""),F=Object(c.a)(B,2),L=F[0],W=F[1],D=Object(v.a)(),U=R(),H=Object(l.a)(D.breakpoints.down("xs")),Q=Object(y.useContext)(h.AppStateContext).testEndpoint,V=Object(y.useState)(t.url.split("/").filter(Boolean).reduce((function(e,t){return t[0]===q?Object(i.a)({},e,Object(o.a)({},t.slice(1),"")):e}),{})),G=Object(c.a)(V,2),K=G[0],X=G[1],Y=Object(y.useState)(function(e){return e.reduce((function(e,t){return Object(i.a)({},e,Object(o.a)({},t.name,""))}),{})}(t.parameters)),Z=Object(c.a)(Y,2),$=Z[0],_=Z[1];function ee(){m(!1)}function te(e){return Object.entries(e).reduce((function(e,t){var n=Object(c.a)(t,2),a=n[0],r=n[1];return"".concat(e,"&").concat(a,"=").concat(r)}),"")}return O.a.createElement("div",null,O.a.createElement(s.a,{onClick:function(){m(!0)}},"Test endpoint"),O.a.createElement(d.a,{closeAfterTransition:!0,"aria-labelledby":"max-width-dialog-title",fullScreen:H,maxWidth:"md",open:b,onClose:ee},O.a.createElement(S.a,{disableTypography:!0,id:"max-width-dialog-title",style:{minWidth:500}},O.a.createElement(g.a,{style:{marginRight:40},variant:"h6"},"Test endpoint ".concat(t.method,":").concat(t.url)),O.a.createElement(u.a,{"aria-label":"close",className:U.closeButton,onClick:ee},O.a.createElement(E.a,null))),Object.keys(K).length>0&&O.a.createElement(f.a,null,O.a.createElement(N,{endpoint:t,setUrlParameters:X,urlParameters:K})),t.parameters.length>0&&O.a.createElement(f.a,null,O.a.createElement(J,{endpoint:t,queryParams:$,setQueryParams:_})),O.a.createElement(f.a,null,A?O.a.createElement(w.a,{code:C,language:"json",title:"Request body",onSave:T}):O.a.createElement(s.a,{onClick:function(){return z(!0)}},"Add request body")),O.a.createElement(f.a,null,L&&O.a.createElement(O.a.Fragment,null,O.a.createElement(g.a,{variant:"body1"},"Response"),O.a.createElement(j.a,{language:"json"},JSON.stringify(JSON.parse(L),null,2)))),O.a.createElement(p.a,null,O.a.createElement(I,{endpoint:t,queryString:te($),requestBody:C}),O.a.createElement(s.a,{onClick:function(){var e,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=te($),c.next=3,r.a.awrap(Q(t,K,e,C));case 3:if(!((n=c.sent).status<300)){c.next=15;break}return c.prev=5,c.next=8,r.a.awrap(n.json());case 8:a=c.sent,W(JSON.stringify(a)),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(5),W("");case 15:case"end":return c.stop()}}),null,null,[[5,12]])}},"Test"))))}}}]);
//# sourceMappingURL=10.df299365.chunk.js.map