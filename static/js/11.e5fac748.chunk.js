(this["webpackJsonpmoxy-proxy"]=this["webpackJsonpmoxy-proxy"]||[]).push([[11],{136:function(e,t,a){"use strict";var n=a(12),o=a(22),i=a(10),r=a(0),s=a.n(r),c=(a(11),a(13)),l=a(14),d=a(482),u=a(59),p=a(20),m=a(61),b=a(1),f=a.n(b),v="undefined"===typeof window?s.a.useEffect:s.a.useLayoutEffect,g=s.a.forwardRef((function(e,t){var a=e.alignItems,o=void 0===a?"center":a,r=e.autoFocus,l=void 0!==r&&r,b=e.button,g=void 0!==b&&b,h=e.children,x=e.classes,y=e.className,j=e.component,O=e.ContainerComponent,E=void 0===O?"li":O,C=e.ContainerProps,k=(C=void 0===C?{}:C).className,w=Object(n.a)(C,["className"]),S=e.dense,N=void 0!==S&&S,I=e.disabled,M=void 0!==I&&I,R=e.disableGutters,P=void 0!==R&&R,B=e.divider,G=void 0!==B&&B,T=e.focusVisibleClassName,V=e.selected,z=void 0!==V&&V,A=Object(n.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),D=s.a.useContext(m.a),L={dense:N||D.dense||!1,alignItems:o},F=s.a.useRef(null);v((function(){l&&F.current&&F.current.focus()}),[l]);var W=s.a.Children.toArray(h),H=W.length&&Object(u.a)(W[W.length-1],["ListItemSecondaryAction"]),$=s.a.useCallback((function(e){F.current=f.a.findDOMNode(e)}),[]),J=Object(p.a)($,t),_=Object(i.a)({className:Object(c.a)(x.root,y,L.dense&&x.dense,!P&&x.gutters,G&&x.divider,M&&x.disabled,g&&x.button,"center"!==o&&x.alignItemsFlexStart,H&&x.secondaryAction,z&&x.selected),disabled:M},A),q=j||"li";return g&&(_.component=j||"div",_.focusVisibleClassName=Object(c.a)(x.focusVisible,T),q=d.a),H?(q=_.component||j?q:"div","li"===E&&("li"===q?q="div":"li"===_.component&&(_.component="div")),s.a.createElement(m.a.Provider,{value:L},s.a.createElement(E,Object(i.a)({className:Object(c.a)(x.container,k),ref:J},w),s.a.createElement(q,_,W),W.pop()))):s.a.createElement(m.a.Provider,{value:L},s.a.createElement(q,Object(i.a)({ref:J},_),W))})),h=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(g),x=s.a.forwardRef((function(e,t){var a,o=e.classes,r=e.className,l=e.component,d=void 0===l?"li":l,u=e.disableGutters,p=void 0!==u&&u,m=e.role,b=void 0===m?"menuitem":m,f=e.selected,v=e.tabIndex,g=Object(n.a)(e,["classes","className","component","disableGutters","role","selected","tabIndex"]);return e.disabled||(a=void 0!==v?v:-1),s.a.createElement(h,Object(i.a)({button:!0,role:b,tabIndex:a,component:d,selected:f,disableGutters:p,classes:{dense:o.dense},className:Object(c.a)(o.root,r,f&&o.selected,!p&&o.gutters),ref:t},g))}));t.a=Object(l.a)((function(e){return{root:Object(i.a)({},e.typography.body1,Object(o.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(i.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(x)},487:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var n=a(19),o=a(463),i=a(10),r=a(12),s=a(0),c=a.n(s),l=(a(11),a(13)),d=a(14),u=a(18),p=a(459),m=c.a.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.color,s=void 0===o?"primary":o,d=e.position,m=void 0===d?"fixed":d,b=Object(r.a)(e,["classes","className","color","position"]);return c.a.createElement(p.a,Object(i.a)({square:!0,component:"header",elevation:4,className:Object(l.a)(a.root,a["position".concat(Object(u.a)(m))],n,"inherit"!==s&&a["color".concat(Object(u.a)(s))],{fixed:"mui-fixed"}[m]),ref:t},b))})),b=Object(d.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static",transform:"translateZ(0)"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}}),{name:"MuiAppBar"})(m),f=a(497),v=a(136),g=a(484),h=a(465),x=a(492),y=a(22),j=c.a.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,s=void 0===o?"div":o,d=e.disableGutters,u=void 0!==d&&d,p=e.variant,m=void 0===p?"regular":p,b=Object(r.a)(e,["classes","className","component","disableGutters","variant"]);return c.a.createElement(s,Object(i.a)({className:Object(l.a)(a.root,a[m],n,!u&&a.gutters),ref:t},b))})),O=Object(d.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(y.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(j),E=a(453),C=a(25),k=a(420),w=a(90),S=a.n(w),N=a(460),I=Object(h.a)((function(e){return Object(x.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),M={panels:"Panels view",tabs:"Tabs view",board:"Board view"};function R(){var e=I(),t=Object(s.useContext)(C.AppStateContext),a=t.viewMode,i=t.activeServerStateScenarioId,r=t.serverStateScenarios,l=t.changeServerStateScenario,d=t.changeViewMode,u=t.persistMockedData,p=t.persistEndpoints,m=Object(s.useRef)(null),h=Object(s.useState)(0),x=Object(n.a)(h,2),y=x[0],j=x[1],w=c.a.useState(null),R=Object(n.a)(w,2),P=R[0],B=R[1],G=function(){B(null)};return Object(s.useEffect)((function(){j(m.current.offsetWidth)}),[]),c.a.createElement("div",{className:e.root},c.a.createElement(b,{position:"static"},c.a.createElement(O,null,c.a.createElement(E.a,{className:e.title,variant:"h6"},"Moxy Proxy"),c.a.createElement(o.a,{style:{margin:8,minWidth:120},variant:"outlined"},c.a.createElement(f.a,{id:"view-mode-select",ref:m},"View mode"),c.a.createElement(g.a,{labelId:"view-mode-select",labelWidth:y,value:a,onChange:function(e){d(e.target.value)}},Object.keys(M).map((function(e){return c.a.createElement(v.a,{key:e,value:e},M[e])})))),c.a.createElement(o.a,{style:{margin:8,minWidth:120},variant:"outlined"},c.a.createElement(f.a,{id:"state-scenario-select",ref:m},"State scenario"),c.a.createElement(g.a,{labelId:"state-scenario-select",labelWidth:y,value:i,onChange:function(e){l(e.target.value)}},r.map((function(e){var t=e.id,a=e.name;return c.a.createElement(v.a,{key:t,value:t},a)})))),c.a.createElement(N.a,{"aria-controls":"admin-menu","aria-haspopup":"true","aria-label":"admin menu",onClick:function(e){B(e.currentTarget)}},c.a.createElement(S.a,null)),c.a.createElement(k.a,{keepMounted:!0,anchorEl:P,id:"admin-menu",open:Boolean(P),onClose:G},c.a.createElement(v.a,{onClick:function(){G(),u()}},"Persist mocked data"),c.a.createElement(v.a,{onClick:function(){G(),p()}},"Persist endpoints changes")))))}},90:function(e,t,a){"use strict";var n=a(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=(0,n(a(87)).default)(o.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.default=i}}]);
//# sourceMappingURL=11.e5fac748.chunk.js.map