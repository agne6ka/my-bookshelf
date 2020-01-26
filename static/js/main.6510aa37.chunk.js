(this["webpackJsonpmy-bookshelf"]=this["webpackJsonpmy-bookshelf"]||[]).push([[0],{75:function(e,t,a){e.exports=a(88)},80:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(80),a(26)),i=a(17),s=a(37),u=a(38),m=a(46),h=a(48),p="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var b={Accept:"application/json",Authorization:d},f=function(e){return fetch("".concat(p,"/search"),{method:"POST",headers:Object(h.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))},E=a(132),g=a(68),v=a(133),k=a(22),y=a(120),j=a(122),O=a(90),w=a(123),x=a(62),C=a.n(x),S=a(63),N=a.n(S),B=a(59),I=a(23),R=Object(B.a)((function(e){return{root:{flexGrow:1,marginBottom:"50px"},title:{flexGrow:1,textAlign:"center"}}})),T=function(){var e=R();return r.a.createElement("div",{className:e.root},r.a.createElement(k.a,{exact:!0,path:["/","/my-bookshelf"],render:function(){return r.a.createElement(y.a,{position:"static"},r.a.createElement(j.a,null,r.a.createElement(O.a,{className:e.title,variant:"h6",noWrap:!0},"MY BOOKSHELF"),r.a.createElement(I.b,{to:"/search"},r.a.createElement(w.a,{color:"secondary","aria-label":"add"},r.a.createElement(C.a,null)))))}}),r.a.createElement(k.a,{path:"/search",render:function(){return r.a.createElement(y.a,{position:"static"},r.a.createElement(j.a,null,r.a.createElement(O.a,{className:e.title,variant:"h6",noWrap:!0},"SEARCH RESULTS"),r.a.createElement(I.b,{to:"/my-bookshelf"},r.a.createElement(w.a,{color:"secondary","aria-label":"back"},r.a.createElement(N.a,null)))))}}))},A=a(131),L=a(12),W=a(19),z=a(66),G=a.n(z),H=a(127),M=a(128),P=a(129),q=a(130),F=a(126),J=a(134),D=a(135),K=a(138),U=a(125),Y=a(137),$=a(124),Q=Object(B.a)((function(e){return{formControl:{margin:e.spacing(3)}}})),V=function(){var e=Q(),t=r.a.useState("female"),a=Object(W.a)(t,2),n=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{component:"fieldset",className:e.formControl},r.a.createElement(O.a,{paragraph:!0},"Move to:"),r.a.createElement($.a,null),r.a.createElement(K.a,{"aria-label":"gender",name:"gender1",value:n,onChange:function(e){o(e.target.value)}},r.a.createElement(U.a,{value:"reading",control:r.a.createElement(D.a,null),label:"Currently Reading"}),r.a.createElement($.a,null),r.a.createElement(U.a,{value:"want-read",control:r.a.createElement(D.a,null),label:"Want to read"}),r.a.createElement($.a,null),r.a.createElement(U.a,{value:"read",control:r.a.createElement(D.a,null),label:"Read"}),r.a.createElement($.a,null),r.a.createElement(U.a,{value:"none",control:r.a.createElement(D.a,null),label:"None"}),r.a.createElement($.a,null))))},X=a(3),Z=Object(B.a)((function(e){return{card:{maxWidth:345,margin:"auto"},cardContent:{backgroundColor:"rgba(33,33,33,0.9)",minHeight:70},media:{maxHeight:350,paddingTop:"56.25%",position:"relative"},expand:{transform:"rotate(0deg)",zIndex:10,position:"absolute",bottom:10,right:10,backgroundColor:"#80CBC4","&:hover":{backgroundColor:"#598e89"},marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{zIndex:10,position:"absolute",bottom:10,right:10,transform:"rotate(180deg)",backgroundColor:"#80CBC4","&:hover":{backgroundColor:"#598e89"}},list:{width:250},fullList:{width:"auto"},drawer:{width:"100%",flexShrink:0},drawerPaper:{width:"100%",position:"absolute",right:0,top:0,zIndex:5}}})),_=function(e){var t=e.book,a=Z(),o=Object(n.useState)(!1),c=Object(W.a)(o,2),l=c[0],i=c[1],s=Object(n.useState)(!1),u=Object(W.a)(s,2),m=u[0],h=u[1],p=t.imageLinks?"".concat(t.imageLinks.smallThumbnail.split("zoom=")[0],"zoom=3"):"";return r.a.createElement(H.a,{className:a.card},r.a.createElement(M.a,{className:a.media,image:p,title:t.title},r.a.createElement(P.a,{className:a.cardContent},r.a.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(O.a,{variant:"body2",color:"textSecondary",component:"p"},t.authors.map((function(e){return" ".concat(e)})))),r.a.createElement(q.a,{className:a.cardContent,disableSpacing:!0},r.a.createElement(F.a,{className:Object(X.a)(a.expand,Object(L.a)({},a.expandOpen,l)),onClick:function(){h(!m),i(!l)},"aria-expanded":l,"aria-label":"show more"},r.a.createElement(G.a,null))),r.a.createElement(J.a,{className:a.drawer,variant:"persistent",anchor:"right",open:m,classes:{paper:a.drawerPaper}},r.a.createElement(V,null))))},ee=Object(B.a)((function(e){return{root:{flexGrow:1},spacing:{marginTop:50}}})),te=function(e){var t=e.books,a=ee();return r.a.createElement("div",{className:a.root},r.a.createElement(A.a,{container:!0,justify:"space-around",className:a.spacing},r.a.createElement(A.a,{container:!0,item:!0,xs:12,spacing:5},t.map((function(e,t){return r.a.createElement(A.a,{key:t,item:!0,xs:12,sm:6,lg:3},r.a.createElement(_,{book:e}))})))))},ae=a(13),ne=a(67),re=a.n(ne),oe=a(136),ce=Object(B.a)((function(e){return{search:Object(L.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ae.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ae.b)(e.palette.common.white,.25)},textAlign:"center",margin:"auto",maxWidth:600,height:55,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{width:e.spacing(8),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"80%",height:"100%"},inputInput:{padding:e.spacing(1,1,1,1),transition:e.transitions.create("width")}}})),le=function(e){var t=e.query,a=e.onSearch,n=ce();return r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(re.a,null)),r.a.createElement(oe.a,{placeholder:"Search books...",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"},value:t,onChange:function(e){return a(e.target.value)}}))},ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={resp:[],value:""},a.onSearch=function(e){a.setState({value:e}),e.length>0?a.showBooks(e):a.setState({resp:[]})},a.showBooks=function(e){f(e).then((function(e){if(void 0===e)return null;e.error?a.setState({resp:[]}):a.setState({resp:e})}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{query:this.state.value,onSearch:this.onSearch}),r.a.createElement(te,{books:this.state.resp}))}}]),t}(n.Component),se=Object(B.a)((function(e){return{root:{flexGrow:1},spacing:{marginTop:50},typography:{textDecoration:"underline",marginLeft:20}}})),ue=function(e){var t=e.books,a=se();return r.a.createElement("div",{className:a.root},r.a.createElement(A.a,{container:!0,className:a.spacing},r.a.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2",className:a.typography},"Currently Reading")),r.a.createElement(A.a,{container:!0,justify:"space-around",className:a.spacing},r.a.createElement(A.a,{container:!0,item:!0,xs:12,spacing:5},t.map((function(e,t){return r.a.createElement(A.a,{key:t,item:!0,xs:12,sm:6,lg:3},r.a.createElement(_,{book:e}))})))))},me=(a(87),Object(g.a)({palette:{type:"dark",primary:{main:"#212121",contrastText:"#fff"},secondary:{main:"#009688",contrastText:"#fff"}}})),he=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(p,"/books"),{headers:b}).then((function(e){return e.json()})).then((function(e){return e.books})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement(E.a,{theme:me},r.a.createElement(v.a,null),r.a.createElement(T,null),r.a.createElement(k.a,{exact:!0,path:["/","/my-bookshelf"],render:function(){return r.a.createElement(ue,{books:e.state.data})}}),r.a.createElement(k.a,{path:"/search",render:function(){return r.a.createElement(ie,{books:e.state.data})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I.a,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.6510aa37.chunk.js.map