(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),o=a(17),i=a(39),s=a(68),l=a(83),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b=Object(i.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e.filter((function(e){return e._id!==t.payload}));case d:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case j:return t.payload;case u:return[].concat(Object(l.a)(e),[t.payload]);default:return e}}}),f=a(35),m=a(170),h=a(171),x=a(163),g=a(173),O=a(169),v=a(13),y=a.n(v),C=a(22),w=a(23),k=a.n(w),M="https://rewind-app.herokuapp.com/posts",N=function(e,t){return k.a.patch("".concat(M,"/").concat(e),t)},S=function(e){return k.a.delete("".concat(M,"/").concat(e))},_=function(e){return k.a.patch("".concat(M,"/").concat(e,"/likePost"))},I=function(e){return k.a.patch("".concat(M,"/").concat(e,"/dislikePost"))},L=function(e){return k.a.patch("".concat(M,"/").concat(e,"/lovePost"))},B=a(168),D=a(160),z=a(162),E=a(164),F=a(166),T=a(167),V=a(78),A=a.n(V),R=a(157),W=Object(R.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"10px",right:"5px",color:"white"},overlay3:{position:"absolute",top:"30px",right:"13px",color:"black"},overlay4:{position:"absolute",top:"120px",color:"red",left:"18px"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),P=a(81),H=a.n(P),J=a(165),U=a(77),q=a.n(U),G=a(76),K=a.n(G),Q=a(79),X=a.n(Q),Y=a(80),Z=a.n(Y),$=a(75),ee=a.n($),te=a(73),ae=a.n(te),ne=a(4),re=function(e){var t=e.post,a=e.setCurrentId,r=W(),c=Object(o.b)(),i=Object(n.useState)(),s=Object(f.a)(i,2),l=s[0],u=s[1];return Object(ne.jsxs)(D.a,{className:r.card,children:[Object(ne.jsx)(z.a,{className:r.media,image:t.imageFile,title:t.title}),Object(ne.jsxs)("div",{className:r.overlay,children:[Object(ne.jsx)(x.a,{variant:"h6",children:t.creator}),Object(ne.jsx)(x.a,{variant:"body2",children:ae()(t.createdAt).fromNow()})]}),Object(ne.jsx)("div",{className:r.overlay2,children:Object(ne.jsx)(E.a,{style:{color:"white"},size:"small",onClick:function(){a(t._id)},children:Object(ne.jsx)(ee.a,{fontSize:"default"})})}),Object(ne.jsx)("div",{className:r.overlay4,children:Object(ne.jsx)(x.a,{style:{textTransform:"none",fontSize:"16px",color:"white"},variant:"body2",color:"default",children:t.location})}),Object(ne.jsx)("div",{className:r.details,children:Object(ne.jsx)(x.a,{variant:"body2",color:"textSecondary",children:t.hashtags.map((function(e){return"#".concat(e," ")}))})}),Object(ne.jsx)("div",{className:r.overlay3,children:Object(ne.jsx)(J.a,{style:{color:"yellow"},onClick:function(){u(!0!==l)},children:l?Object(ne.jsx)(K.a,{}):Object(ne.jsx)(q.a,{})})}),Object(ne.jsx)(x.a,{className:r.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(ne.jsx)(F.a,{children:Object(ne.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(ne.jsxs)(T.a,{className:r.cardActions,children:[Object(ne.jsxs)(E.a,{size:"small",color:"primary",onClick:function(){return c((e=t._id,function(){var t=Object(C.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e);case 3:n=t.sent,r=n.data,a({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(ne.jsx)(A.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(ne.jsxs)(E.a,{size:"small",color:"primary",onClick:function(){return c((e=t._id,function(){var t=Object(C.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I(e);case 3:n=t.sent,r=n.data,a({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(ne.jsx)(X.a,{fontSize:"small"}),"\xa0 Dislike \xa0",t.dislikeCount]})]}),Object(ne.jsxs)(T.a,{className:r.cardActions,children:[Object(ne.jsxs)(E.a,{size:"small",color:"primary",onClick:function(){return c((e=t._id,function(){var t=Object(C.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L(e);case 3:n=t.sent,r=n.data,a({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(ne.jsx)(Z.a,{fontSize:"small"}),"\xa0 Love \xa0",t.loveCount]}),Object(ne.jsxs)(E.a,{size:"small",color:"primary",onClick:function(){return c((e=t._id,function(){var t=Object(C.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(ne.jsx)(H.a,{fontSize:"small"}),"Delete"]})]})]})},ce=Object(R.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),oe=function(e){var t=e.setCurrentId,a=Object(o.c)((function(e){return e.posts})),n=ce();return console.log(a),a.length?Object(ne.jsx)(O.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(ne.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(ne.jsx)(re,{post:e,setCurrentId:t})},e._id)}))}):Object(ne.jsx)(B.a,{})},ie=a(16),se=a(85),le=a(172),ue=a(82),de=a.n(ue),pe=Object(R.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},heading:{fontFamily:"Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{fontFamily:"Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif",marginBottom:10},buttonClear:{fontFamily:"Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif"}}})),je=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",location:"",hashtags:"",imageFile:""}),c=Object(f.a)(r,2),i=c[0],s=c[1],l=pe(),p=Object(o.b)(),j=Object(o.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null}));Object(n.useEffect)((function(){j&&s(j)}),[j]);var b=function(){a(0),s({creator:"",title:"",message:"",location:"",hashtags:"",selectedFile:""})};return Object(ne.jsx)(se.a,{className:l.paper,children:Object(ne.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(l.root," ").concat(l.form),onSubmit:function(e){e.preventDefault(),t?(p(function(e,t){return function(){var a=Object(C.a)(y.a.mark((function a(n){var r,c;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,N(e,t);case 3:r=a.sent,c=r.data,n({type:d,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,i)),b()):(p(function(e){return function(){var t=Object(C.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,k.a.post(M,c);case 3:n=t.sent,r=n.data,a({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(i)),b())},children:[Object(ne.jsxs)(x.a,{className:l.heading,variant:"h6",children:[t?"Editing":"Creating"," a Memory"]}),Object(ne.jsx)(le.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:i.creator,onChange:function(e){return s(Object(ie.a)(Object(ie.a)({},i),{},{creator:e.target.value}))}}),Object(ne.jsx)(le.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:i.title,onChange:function(e){return s(Object(ie.a)(Object(ie.a)({},i),{},{title:e.target.value}))}}),Object(ne.jsx)(le.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:i.message,onChange:function(e){return s(Object(ie.a)(Object(ie.a)({},i),{},{message:e.target.value}))}}),Object(ne.jsx)(le.a,{name:"location",variant:"outlined",label:"Location",fullWidth:!0,value:i.location,onChange:function(e){return s(Object(ie.a)(Object(ie.a)({},i),{},{location:e.target.value}))}}),Object(ne.jsx)(le.a,{name:"hashtags",variant:"outlined",label:"Hashtags",fullWidth:!0,value:i.hashtags,onChange:function(e){return s(Object(ie.a)(Object(ie.a)({},i),{},{hashtags:e.target.value.split(",")}))}}),Object(ne.jsx)("div",{className:l.fileInput,children:Object(ne.jsx)(de.a,{type:"file",multuple:!1,onDone:function(e){var t=e.base64;return s(Object(ie.a)(Object(ie.a)({},i),{},{imageFile:t}))}})}),Object(ne.jsx)(E.a,{className:l.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(ne.jsx)(E.a,{className:l.buttonClear,variant:"contained",color:"secondary",size:"medium",onClick:b,fullWidth:!0,children:"Clear"})]})})},be=a.p+"static/media/rewind.9cfa8a46.png",fe=Object(R.a)((function(){return{appBar:{borderRadius:15,margin:"25px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"black",fontFamily:"Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif"},appBar_2:{borderRadius:10,marginTop:"10px",marginBottom:"25px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},appBar_3:{borderRadius:10,marginTop:"30px",marginBottom:"25px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading_2:{color:"black",fontFamily:"Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif"},image:{marginLeft:"20px"},image_2:{marginRight:"20px"}}})),me=function(){var e=Object(n.useState)(null),t=Object(f.a)(e,2),a=t[0],r=t[1],c=fe(),i=Object(o.b)();return Object(n.useEffect)((function(){i(function(){var e=Object(C.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(M);case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,i]),Object(ne.jsxs)(m.a,{maxwidth:"lg",children:[Object(ne.jsxs)(h.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(ne.jsx)("img",{className:c.image_2,src:be,alt:"time",height:"60"}),Object(ne.jsx)(x.a,{className:c.heading,variant:"h2",align:"center",children:"Rewind"}),Object(ne.jsx)("img",{className:c.image,src:be,alt:"rewind",height:"60"})]}),Object(ne.jsx)(h.a,{className:c.appBar_2,position:"static",color:"inherit",children:Object(ne.jsx)(x.a,{className:c.heading_2,variant:"h5",align:"center",children:"Take A Walk Down Memeory Lane"})}),Object(ne.jsx)(g.a,{in:!0,children:Object(ne.jsx)(m.a,{children:Object(ne.jsxs)(O.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(ne.jsx)(O.a,{item:!0,xs:12,sm:8,children:Object(ne.jsx)(oe,{setCurrentId:r})}),Object(ne.jsx)(O.a,{item:!0,xs:12,sm:4,children:Object(ne.jsx)(je,{currentId:a,setCurrentId:r})})]})})}),Object(ne.jsx)(h.a,{className:c.appBar_3,position:"static",color:"inherit",children:Object(ne.jsx)(x.a,{className:c.heading_2,variant:"h5",align:"center",children:"Inspired by JavaScript Mastery (No Rights Reserved)"})})]})},he=(a(127),Object(i.d)(b,Object(i.c)(Object(i.a)(s.a))));c.a.render(Object(ne.jsx)(o.a,{store:he,children:Object(ne.jsx)(me,{})}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.9e966e21.chunk.js.map