(this["webpackJsonpS2R2-PROJECT"]=this["webpackJsonpS2R2-PROJECT"]||[]).push([[0],{148:function(e,t,a){e.exports=a(189)},177:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),c=a(7),i=a(13),s=a(11),u=a(251),m=a(247),d=a(246),p=a(274),f=a(250),h=a(278),g=a(254),E=a(253),v=a(76),b=a.n(v),y=a(41),k=a(244),O=a(68),w=Object(O.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),j=a(38),C=r.a.forwardRef((function(e,t){return r.a.createElement(j.b,Object.assign({innerRef:t},e))})),x=a(116),S=a.n(x),N=a(46),A=a(30),R=a(74),I=a(75),B=a(83),T=r.a.createContext(),W=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(R.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={user:JSON.parse(localStorage.getItem("current-user")||"{}")},a.handleUserChange=function(e){a.setState({user:e}),e?localStorage.setItem("current-user",JSON.stringify(e)):localStorage.removeItem("current-user")},a.isAuthenticated=function(){return!!(a.state.user&&a.state.user.data&&a.state.user.data.email)},a}return Object(B.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement(T.Provider,{value:{user:this.state.user,onUserChange:this.handleUserChange,isAuthenticated:this.isAuthenticated}},this.props.children)}}]),t}(n.Component),P=function(e){return function(t){return r.a.createElement(T.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},a,t))}))}},D=S.a.create({baseURL:"http://localhost:3001/",withCredentials:!0,dataType:"jsonp"});D.interceptors.response.use((function(e){return e}),(function(e){if(403!==e.response.status&&401!==e.response.status)return Promise.reject(e);localStorage.removeItem("current-user"),window.location.assign("/sign-in")}));var U=D,F=function(e){return U.post("/signup",e)},q=function(e){return U.post("/signin",e)},_=a(50),L=a(252);var J=P((function(e){var t=w(),a=r.a.useState({email:"",password:""}),n=Object(s.a)(a,2),o=n[0],l=n[1],v=r.a.useState(!1),O=Object(s.a)(v,2),j=O[0],C=O[1],x=function(e){return function(t){return l(Object(i.a)({},o,Object(c.a)({},e,t.target.value)))}};return r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(m.a,{className:t.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,onSubmit:function(t){t.preventDefault(),C(!0),q(o).then((function(t){C(!1),e.onUserChange(t)}),(function(e){var t=e.message,a=e.errors;console.error(t,a),C(!1)}))}},r.a.createElement(p.a,{onChange:x("email"),value:o.email||"",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",autoFocus:!0,type:"email"}),r.a.createElement(p.a,{onChange:x("password"),value:o.password||"",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"off",type:"password"}),r.a.createElement(f.a,{control:r.a.createElement(h.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},j?r.a.createElement(L.a,{className:t.progress,color:"secondary"}):"Sign In"),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(g.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(E.a,{item:!0})))))})),H=a(279),z=a(255),G=a(195);P((function(e){var t=w(),a=r.a.useState(!1),n=Object(s.a)(a,2),o=n[0],l=n[1],h=r.a.useState({email:"",password:"",name:"",lastName:"",rol:"student"}),v=Object(s.a)(h,2),O=v[0],j=v[1],x=function(e){return function(t){return j(Object(i.a)({},O,Object(c.a)({},e,t.target.value)))}};return o?r.a.createElement(_.a,{to:"/"}):r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(m.a,{className:t.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:t.form,onSubmit:function(t){t.preventDefault(),F(O).then((function(t){e.onUserChange(t),l(!0)}),(function(e){var t=e.message,a=e.errors;console.error(t,a)}))},autoComplete:"off"},r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{autoComplete:"off",name:"name",onChange:x("name"),value:O.name||"",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:x("lastName"),value:O.lastName||"",variant:"outlined",fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"off"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:x("email"),value:O.email||"",variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"none"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:x("password"),value:O.password||"",variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"password",type:"password",id:"password",autoComplete:"none"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(G.a,{row:!0},r.a.createElement(z.a,{row:!0,name:O.rol,value:O.rol,onChange:x("rol")},r.a.createElement(f.a,{value:"teacher",control:r.a.createElement(H.a,null),label:"Teacher"}),r.a.createElement(f.a,{value:"student",control:r.a.createElement(H.a,null),label:"Student"}))))),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign Up"),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(g.a,{href:"#",variant:"body2",color:"secondary"},"Register with google")),r.a.createElement(E.a,{item:!0},r.a.createElement(g.a,{to:"/sign-in",component:C,variant:"body2"},"Already have an account? Sign In"))))))}));var Z=a(117),M=a.n(Z),V=a(118),Y=a.n(V),$=Object(O.a)((function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20}}}));function K(){var e=$();return r.a.createElement("div",null,r.a.createElement(u.a,{to:"/new-record",component:C,variant:"contained",color:"primary",className:e.button},"New Record",r.a.createElement(M.a,{className:e.rightIcon})),r.a.createElement(u.a,{to:"/recordings",component:C,variant:"contained",color:"default",className:e.button},"Check Recordins",r.a.createElement(Y.a,{className:e.leftIcon})))}var Q=Object(O.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"white"}}}));var X=P((function(e){var t=e.user,a=e.onUserChange,n=t.data;return r.a.createElement(y.a,{variant:"body2",color:"textSecondary"},"Hello ".concat(n.name,", here you can "),r.a.createElement(g.a,{color:"inherit",to:"/profile/".concat(n.id),component:C},"edit your profile")," or simply  ",r.a.createElement(g.a,{color:"inherit",to:"/",onClick:function(){return a()},component:C},"logout")," from the site")}));function ee(){var e=Q();return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,null),r.a.createElement(k.a,{component:"main",className:e.main,maxWidth:"sm"},r.a.createElement(y.a,{variant:"h2",component:"h1",gutterBottom:!0},"S",r.a.createElement("sup",null,"2"),"R",r.a.createElement("sup",null,"2")," PROJECT"),r.a.createElement(y.a,{variant:"h5",component:"h2",gutterBottom:!0},"A simple App for voice recording and speech recognition analysis."),r.a.createElement(y.a,{variant:"body1"},"What do you want to do now."),r.a.createElement(K,null)),r.a.createElement("footer",{className:e.footer},r.a.createElement(k.a,{maxWidth:"sm"},r.a.createElement(y.a,{variant:"body1"},"Customization"),r.a.createElement(X,null))))}var te=a(25),ae=a.n(te),ne=Object(O.a)((function(e){return{appBar:{position:"relative"},layout:Object(c.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(900+2*e.spacing(2)),{width:900,marginLeft:"auto",marginRight:"auto"}),paper:Object(c.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(900+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},progress:{margin:e.spacing(2)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},table:{minWidth:650}}})),re=a(269),oe=a(273),le=a(272),ce=a(270),ie=a(271),se=a(94),ue="/recording",me=function(e){return Object(i.a)({},e,{studentA:e.students[0],studentB:e.students[1]})},de=function(e){return U.post(ue,e)},pe=function(e){return U.get("".concat(ue,"/").concat(e)).then((function(e){var t=e.data;return me(t)}))},fe=function(){return U.get("".concat(ue)).then((function(e){return e.data.map(me)})).catch((function(e){return[{error:e.response.data.message}]}))},he=function(e,t){return U.put("".concat(ue,"/").concat(e),t).then((function(e){var t=e.data;return me(t)}))},ge=function(e){return U.delete("".concat(ue,"/").concat(e))},Ee=function(e,t){return U.put("".concat(ue,"/").concat(e,"/single"),t).then((function(e){var t=e.data;return me(t)}))},ve=function(e,t){return U.put("".concat(ue,"/").concat(e,"/singleDelete"),t)},be=a(119),ye=a.n(be),ke=a(283),Oe=a(8),we=Object(O.a)((function(e){return{root:{},menuButton:{marginRight:e.spacing(2)},search:Object(c.a)({flexGrow:1,position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Oe.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Oe.d)(e.palette.common.white,.25)},marginRight:0,width:"100%"},e.breakpoints.up("sm"),{marginRight:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(c.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}));function je(){var e=we();return r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(ye.a,null)),r.a.createElement(ke.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}}))}var Ce=a(120);var xe=function(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"If you don't wanna be here, ",r.a.createElement(g.a,{color:"inherit",component:C,to:"/"},"Go back")," to the main menu.")},Se=a(268),Ne=a(128),Ae=a.n(Ne),Re=a(281),Ie=a(259),Be=a(257),Te=a(258),We=a(256),Pe=a(108),De=r.a.forwardRef((function(e,t){return r.a.createElement(Pe.a,Object.assign({direction:"up",ref:t},e))}));function Ue(e){var t=e.open,a=e.message,n=e.handleClose,o=e.handleOk;return r.a.createElement(Re.a,{open:!!t,TransitionComponent:De,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(We.a,{id:"alert-dialog-slide-title"},"Delete Recording"),r.a.createElement(Be.a,null,r.a.isValidElement(a)?a:r.a.createElement(Te.a,{id:"alert-dialog-slide-description"},a)),r.a.createElement(Ie.a,null,r.a.createElement(u.a,{onClick:n,color:"primary"},"Disagree"),r.a.createElement(u.a,{onClick:function(){return o(t)},color:"primary"},"Agree")))}var Fe=a(19),qe=a(282),_e=a(267),Le=a(280),Je=a(260),He=function(e){var t=e.arr,a=e.obj,n=e.handle,o=e.student,l=e.stage;return(r.a.createElement(G.a,{row:!0},t.map((function(e,t){var c=!!a[e.key][l];return r.a.createElement(E.a,{item:!0,xs:6,key:t},r.a.createElement(f.a,{control:r.a.createElement(Je.a,{checked:c,value:c,onChange:n(e.key,o,l),color:"primary"}),label:e.label}))}))))},ze=[{key:"confident",label:"Confident",value:!1},{key:"lost",label:"Lost",value:!1},{key:"nervous",label:"Nervous",value:!1},{key:"nothing",label:"I didn't feel anything",value:!1}],Ge=[{key:"startingConversation",label:"Starting the Conversation",value:[!1,!1,!1]},{key:"risk",label:"Take the risk to speak",value:[!1,!1,!1]},{key:"opinion",label:"Say my opinion",value:[!1,!1,!1]},{key:"askClarification",label:"Ask clarification questions",value:[!1,!1,!1]},{key:"provClarification",label:"Provide clarifications",value:[!1,!1,!1]},{key:"askExamples",label:"Ask for examples",value:[!1,!1,!1]},{key:"giveExamples",label:"Give examples",value:[!1,!1,!1]},{key:"understanding",label:"Show understanding",value:[!1,!1,!1]},{key:"eyeContact",label:"Ask for my partner's opinion",value:[!1,!1,!1]},{key:"saySomething",label:"Encourage myself to say something",value:[!1,!1,!1]},{key:"filters",label:"Use fillers",value:[!1,!1,!1]}],Ze=a(276),Me=a(261),Ve=a(2),Ye=a(275);function $e(e){var t=e.children,a=e.value,n=e.index,o=Object(Ve.a)(e,["children","value","index"]);return r.a.createElement(y.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),r.a.createElement(Ye.a,{p:3},t))}var Ke=a(262),Qe=function(e,t,a){var n=w(),o=r.a.useState(0),l=Object(s.a)(o,2),c=l[0],i=l[1];return r.a.createElement(k.a,{component:"main"},r.a.createElement(d.a,null),r.a.createElement("div",{className:n.paper},r.a.createElement(Me.a,{position:"static",color:"default"},r.a.createElement(Ze.a,{value:c,indicatorColor:"primary",textColor:"primary",variant:"fullWidth",onChange:function(e,t){return i(t)}},t.map((function(e,t){return r.a.createElement(Ke.a,Object.assign({key:t},e,function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(t)))})))),a.map((function(t,a){return r.a.createElement($e,{value:c,index:a,key:a,style:{width:"100%"}},r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement(e,t)))}))))},Xe=function(e){return e.reduce((function(e,t){return e[t.key]=t.value,e}),{})},et=function(e){var t=e.recording,a=e.fn,n=e.stage,o=t.cognitive,l=t.studentA,u=t.studentB,m=r.a.useState(!1),d=Object(s.a)(m,2),p=d[0],f=d[1],h=r.a.useReducer((function(e,r){var o=r.type,l=r.payload,c=null;switch(o){case 0:c=[Object(i.a)({},e[0],{},l),e[1]];break;case 1:c=[e[0],Object(i.a)({},e[1],{},l)];break;case"fill":c=l,f(!0);break;case"preFill":c=e;break;default:c=e}return a(tt(t,c,n)),c}),[Xe(Ge),Xe(Ge)]),g=Object(s.a)(h,2),E=g[0],v=g[1];r.a.useEffect((function(){o&&o.length&&!p?v({type:"fill",payload:o}):v({type:"preFill",payload:[]})}),[o,p]);var b=function(e,t){return function(a){v({type:t,payload:Object(c.a)({},e,E[t][e].map((function(e,t){return t===n?!e:e})))})}},y=[{student:0,obj:E[0],handle:b,arr:Ge,stage:n},{student:1,obj:E[1],handle:b,arr:Ge,stage:n}];return Qe(He,[{label:l},{label:u}],y)},tt=function(e,t,a){return Object(i.a)({},e,{},function(e,t){return e.map((function(e){return delete e._id&&e})).map((function(e){return Object.values(e).some((function(e){return e[t]}))})).some((function(e){return!e}))}(t,a)?{hasError:!0,errors:{cognitive:"At least one value should be selected for both students."}}:{hasError:!1,cognitive:t})},at=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,nt=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,rt={email:function(e){var t;return e?at.test(e)||(t="Invalid email pattern"):t="Email is required",t},name:function(e){var t;return(!e||e.length<3)&&(t="Name is required"),t},studentA:function(e){var t;return(!e||e.length<3)&&(t="The first student is required"),t},studentB:function(e){var t;return(!e||e.length<3)&&(t="The second student is required"),t},comments:function(e){var t;return e.length>140&&(t="Just a tweet... no more than 140 characters"),t},password:function(e){var t;return(!e||e.length<3)&&(t="Password is required"),t},image:function(e){var t;return nt.test(e)||(t="Invalid Url Pattern"),t},notesTitle:function(e){var t;return e||(t="We need a title for your Notes x"),t},markDown:function(e){var t;return(!e||e.length<140)&&(t="Give me at least a tweet!!"),t}},ot=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(R.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={content:a.props.recording.id?a.props.recording:Zt,errors:{name:a.props.recording.name?void 0:rt.name(),studentA:a.props.recording.studentA?void 0:rt.studentA(),studentB:a.props.recording.studentB?void 0:rt.studentB()}},a.hasErrors=function(){var e=a.state.content;return Object.keys(e).some((function(t){var a=e[t];return rt[t]&&rt[t](a)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value,o=a.state,l=o.content,s=o.errors;a.setState({content:Object(i.a)({},l,Object(c.a)({},n,r)),errors:Object(i.a)({},s,Object(c.a)({},n,rt[n]&&rt[n](r)))},(function(){var e=a.state,t=e.content,n=e.errors;a.hasErrors()?a.props.fn(Object(i.a)({},t,{hasError:!0,errors:n})):a.props.fn(Object(i.a)({},t,{students:[t.studentA,t.studentB]}))}))},a}return Object(B.a)(t,e),Object(A.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props.recording.id!==e.recording.id&&this.setState({content:this.props.recording,errors:{}})}},{key:"render",value:function(){var e=this.state.content;return r.a.createElement(k.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",null,r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:this.handleChange,value:e.name,error:!!this.state.errors.name,variant:"outlined",fullWidth:!0,id:"name",name:"name",label:"Recording Name",autoComplete:"fname"})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:this.handleChange,value:e.studentA,error:!!this.state.errors.studentA,autoComplete:"fstudent",name:"studentA",variant:"outlined",required:!0,fullWidth:!0,id:"studentA",label:"First Student",autoFocus:!0})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:this.handleChange,value:e.studentB,error:!!this.state.errors.studentB,variant:"outlined",required:!0,fullWidth:!0,id:"studentB",label:"Second Student",name:"studentB",autoComplete:"sstudent"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:this.handleChange,value:e.comments,variant:"outlined",fullWidth:!0,id:"comments",label:"Some extra comments",name:"comments",rows:"4",multiline:!0,autoComplete:"fcomments"})))))}}]),t}(r.a.Component),lt=Object(O.a)((function(e){return{card:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{backgroundColor:"#1565c0",width:160,display:"flex",justifyContent:"flex-end",flexDirection:"column"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},saveIcon:{margin:"auto",color:"#fff"}}})),ct=a(129),it=a(124),st=a.n(it),ut=a(263),mt=a(194),dt=a(122),pt=a.n(dt),ft=a(123),ht=a.n(ft),gt=a(125),Et=a.n(gt),vt=a(81),bt=a.n(vt),yt=a(121),kt=a.n(yt);function Ot(e){var t=e.handleSave,a=lt(),n=r.a.useState(!1),o=Object(s.a)(n,2),l=o[0],c=o[1],i=r.a.useState(!1),u=Object(s.a)(i,2),m=u[0],d=u[1],p=r.a.useState(new Blob),f=Object(s.a)(p,2),h=f[0],g=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.details},r.a.createElement(ut.a,{className:a.content},r.a.createElement(y.a,{component:"h5",variant:"h5"},"Track # 1")),r.a.createElement("div",{className:a.controls},r.a.createElement(mt.a,{onClick:function(){return c(!l)},"aria-label":"play/pause"},l?r.a.createElement(pt.a,{className:a.playIcon}):r.a.createElement(kt.a,{className:a.playIcon})),r.a.createElement(mt.a,{"aria-label":"previous",onClick:function(){new Audio(h.blobURL).play()},disabled:!h.blobURL},r.a.createElement(ht.a,{className:a.playIcon})))),h.blobURL?r.a.createElement("div",{className:a.cover},r.a.createElement("div",{className:a.saveIcon},r.a.createElement(mt.a,{onClick:function(){var e;return ae.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return d(!0),a.next=3,ae.a.awrap(t(h));case 3:e=a.sent,console.log(e),d(!1);case 6:case"end":return a.stop()}}))},"aria-label":"previous"},m?r.a.createElement(L.a,{className:a.progress}):r.a.createElement(Et.a,{className:a.saveIcon})),r.a.createElement(mt.a,{onClick:function(){return g(new Blob)},"aria-label":"previous"},r.a.createElement(bt.a,null)))):r.a.createElement(ct.a,{className:a.cover,record:l,onStop:g,strokeColor:"#ffffff",backgroundColor:st.a[800]}))}a(177);var wt=a(126),jt=a.n(wt),Ct=function(e,t,a){var n=new FileReader;return n.readAsDataURL(a),new Promise((function(a,r){n.onerror=function(){n.abort(),r(new DOMException("Problem parsing file"))},n.onload=function(){var o;return ae.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:o=n.result.split(",")[1],Ee(e,{audioName:t,audio:o}).then((function(e){a(e)}),(function(e){console.error("Invalid status saving audio message: "+e.status),r(e)}));case 3:case"end":return l.stop()}}))}}))},xt=a(127),St=a(264);function Nt(e){var t=e.recording,a=e.fn,o=t.id,l=t.audioId,c=r.a.useRef(t);Object(n.useEffect)((function(){c.current=t}));return Object(n.useEffect)((function(){!c.current.audioId&&a(Object(i.a)({},c.current,{hasError:!0,errors:{x:"We need an audio recording"}}))}),[a]),r.a.createElement(At,{newAudio:function(e){var t,n;return ae.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=Object(xt.v4)(),r.prev=1,r.next=4,ae.a.awrap(Ct(o,t,e));case 4:return n=r.sent,a(Object(i.a)({},n,{hasError:!1,errors:{}})),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),console.log(r.t0),r.abrupt("return",!1);case 13:case"end":return r.stop()}}),null,null,[[1,9]])},deleteAudio:function(e){return ae.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:ve(o,{audioName:e}).then(a(Object(i.a)({},t,{audioId:"",hasError:!0,errors:{x:"We need an audio recording"}})),(function(e){console.error(e)}));case 1:case"end":return n.stop()}}))},audio:l})}var At=function(e){var t=e.newAudio,a=e.deleteAudio,n=e.audio;return r.a.createElement(k.a,{component:"main"},r.a.createElement(d.a,null),r.a.createElement(St.a,{style:{display:"flex",height:"100%"}},r.a.createElement(Ot,{handleSave:function(e){var a=e.blob;return t(a)}}),r.a.createElement(Rt,{onDelete:function(){return a(n)},audio:n})))},Rt=function(e){var t=e.audio,a=e.onDelete;return!!t&&r.a.createElement("div",{style:{width:"100%",alignSelf:"center",overflow:"scroll"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(jt.a,{src:"".concat("http://localhost:3001/","/messages/").concat(t)}),a&&r.a.createElement(mt.a,{style:{margin:".5em 0"},onClick:a,"aria-label":"delete audio"},r.a.createElement(bt.a,null))))},It=function(e){return r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement("h3",null,e.questions.feel),r.a.createElement(Bt,e.feel)),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement("h3",null,e.questions.help),r.a.createElement(G.a,{row:!0},r.a.createElement(z.a,{name:e.feel.student,value:e.help.value,onChange:function(t){return e.help.handle(t,e.feel.student,"help")}},r.a.createElement(f.a,{value:"yes",control:r.a.createElement(H.a,null),label:"Yes, they did"}),r.a.createElement(f.a,{value:"no",control:r.a.createElement(H.a,null),label:"No, they didn't"})))))},Bt=function(e){var t=e.arr,a=e.value,n=e.handle,o=e.student;return r.a.createElement(G.a,{row:!0},r.a.createElement(z.a,{name:o,value:a,onChange:function(e){return n(e,o,"feel")}},t.map((function(e,t){return r.a.createElement(f.a,{key:t,value:e.key,control:r.a.createElement(H.a,null),label:e.label})}))))},Tt=function(e){var t=e.recording,a=e.fn,n=t.socioAffective,o=t.studentA,l=t.studentB,u=r.a.useState(!1),m=Object(s.a)(u,2),d=m[0],p=m[1],f=r.a.useReducer((function(e,n){var r=n.type,o=n.payload,l=null;switch(r){case"A":l=[Object(i.a)({},e[0],{},o),e[1]];break;case"B":l=[e[0],Object(i.a)({},e[1],{},o)];break;case"fill":l=o,p(!0);break;default:l=e}return a(Object(i.a)({},t,{socioAffective:l})),l}),[{feel:"",help:void 0},{feel:"",help:void 0}]),h=Object(s.a)(f,2),g=h[0],E=h[1];r.a.useEffect((function(){n&&n.length&&!d&&E({type:"fill",payload:n})}),[n,d]);var v=function(e,t,a){var n=e.target.value;E({type:t,payload:"feel"===a?Object(c.a)({},a,n):Object(c.a)({},a,"yes"===n)})},b={feel:"How did you feel when using strategies?",help:"Did they help you to talk to your partner?"},y=t.students.map((function(e,t){return{questions:b,feel:{arr:ze,student:t?"B":"A",value:g[t].feel,handle:v},help:{value:"undefined"!==typeof g[t].help&&(g[t].help?"yes":"no"),handle:v}}}));return Qe(It,[{label:o},{label:l}],y)};var Wt=function(e,t,a){switch(e){case 0:return r.a.createElement(ot,{fn:t,recording:a});case 1:return r.a.createElement(et,{stage:0,fn:t,recording:a});case 2:return r.a.createElement(Nt,{fn:t,recording:a});case 3:return r.a.createElement(et,{stage:1,fn:t,recording:a});case 4:return a.students&&r.a.createElement(Tt,{fn:t,recording:a});case 5:return r.a.createElement(et,{stage:2,fn:t,recording:a});default:throw new Error("Unknown step")}},Pt=function(e){var t=e.step,a=e.classes,n=e.back,o=e.next,l=e.steps,c=e.blocked;return r.a.createElement("div",{className:a.buttons},0!==t&&r.a.createElement(u.a,{onClick:n,className:a.button},"Back"),r.a.createElement(u.a,{disabled:c,variant:"contained",color:"primary",onClick:o,className:a.button},t===l.length-1?"Resume":"Next"))};var Dt,Ut=a(249),Ft=a(265),qt=a(266),_t=(Dt=Ge,function(e,t){return function(a){return Object.keys(e[t]).filter((function(a){return Array.isArray(e[t][a])})).filter((function(n){return e[t][n][a]})).map((function(e){return Dt.filter((function(t){return t.key===e})).map((function(e){return e.label}))}))}}),Lt=function(e){var t=e.data,a=t.studentA,n=t.studentB,o=t.name,l=[{label:a},{label:n}],c=zt(t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Thank you for your participation in ".concat(o,".")),r.a.createElement(y.a,{variant:"subtitle1"},"Here you will see all your inputs and have a discussion with your teacher and partner"),Qe(Jt,l,c))},Jt=function(e){var t=e.before_talking,a=e.talking,n=e.help,o=e.after_talking,l=e.socio_affective,c=e.future;return r.a.createElement(k.a,null,r.a.createElement(E.a,{container:!0},r.a.createElement(Ht,{data:t}),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("h3",{style:{marginBottom:0}},a.label),r.a.createElement(Rt,{audio:a.content})),r.a.createElement(Ht,{data:o}),r.a.createElement(Ht,{data:l}),r.a.createElement(Ht,{data:n}),r.a.createElement(Ht,{data:c})))},Ht=function(e){var t=e.data,a=t.label,n=t.content;return r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("h3",{style:{marginBottom:0}},a),r.a.createElement(Ut.a,{style:{paddingTop:0},dense:!0},n.map((function(e,t){return r.a.createElement(Ft.a,{key:t},r.a.createElement(qt.a,{primary:e}))}))))},zt=function(e){return e.students.map((function(t,a){var n=_t(e.cognitive,a),r=e.socioAffective[a].feel;return{before_talking:{label:"The strategies you chose before talking \ud83e\uddd0",content:n(0)},talking:{label:"Let's play your recording \ud83c\udfb6",content:e.audioId},after_talking:{label:"The strategies you really applied",content:n(1)},socio_affective:{label:"How did you feel when using strategies?",content:[ze.find((function(e){return e.key===r})).label]},help:{label:"Did they help you to talk to your partner?",content:e.socioAffective[0].help?["Yes, they did"]:["No, they didn't"]},future:{label:"What is the plan for the next time?",content:n(2)}}}))},Gt=a(93),Zt={id:"",name:"",comments:"",studentA:"",studentB:""},Mt=["Set-Up","Before talking","Talking","After talking","How about you?","Future Recordings"];function Vt(e){var t=ne(),a=e.match.params.id,n=r.a.useState(0),o=Object(s.a)(n,2),l=o[0],c=o[1],u=r.a.useState(!1),m=Object(s.a)(u,2),p=m[0],f=m[1],h=r.a.useState({}),g=Object(s.a)(h,2),E=g[0],v=g[1],b=r.a.useState(Mt),k=Object(s.a)(b,2),O=k[0],w=k[1],j=r.a.useState(!1),C=Object(s.a)(j,2),x=C[0],S=C[1],N=Object(Gt.useSnackbar)().enqueueSnackbar,A=function(e){return N(e,{variant:"warning"})};r.a.useEffect((function(){a?(S(!0),pe(a).then((function(e){w([e.name].concat(Object(Fe.a)(Mt.slice(1,Mt.length)))),v(e),f(!0),S(!1),e.complete&&c(O.length)}))):(v(Zt),w(Mt),f(!1))}),[a,O.length]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement("main",{className:t.layout},r.a.createElement(se.a,{className:t.paper},r.a.createElement(y.a,{component:"h1",variant:"h4",align:"center"},O[l]),r.a.createElement(qe.a,{activeStep:l,className:t.stepper},O.map((function(e){return r.a.createElement(_e.a,{key:e},r.a.createElement(Le.a,null,e))}))),r.a.createElement(r.a.Fragment,null,l===O.length?r.a.createElement(Lt,{data:E}):r.a.createElement(r.a.Fragment,null,x?r.a.createElement(Se.a,null):Wt(l,v,E),r.a.createElement(Pt,{steps:O,step:l,classes:t,back:function(){N("Okey, we won\xb4t save that...",{autoHideDuration:1e3}),v(Object(i.a)({},E,{hasError:!1,errors:{}})),c(l-1)},next:function(){if(E.hasError)Object.values(E.errors).forEach((function(e){return e&&A(e)}));else if(N("Saving...",{variant:"success",autoHideDuration:800}),0!==l||p){if(p){var t=l+1<O.length?Object(i.a)({},E):Object(i.a)({},E,{complete:!0});he(a,t).then((function(e){w([e.name].concat(Object(Fe.a)(Mt.slice(1,Mt.length)))),c(l+1)}),(function(e){A(e.response.data.message)}))}}else de(E).then((function(t){var a=t.data;f(!0),v(a),e.history.push("/record/".concat(a.id)),c(l+1)}),(function(e){return A(e.response.data.message)}))}})))),a&&l<1&&r.a.createElement(Yt,null),r.a.createElement(xe,null)))}function Yt(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"This is not what you are looking for?, ",r.a.createElement(g.a,{color:"inherit",component:C,to:"/new-record"},"Click here"),", and Go to create a new recording.")}function $t(e){return r.a.createElement(Gt.SnackbarProvider,{maxSnack:3},r.a.createElement(Vt,e))}function Kt(){var e=ne(),t=r.a.useState([]),a=Object(s.a)(t,2),n=a[0],o=a[1],l=r.a.useState(!1),c=Object(s.a)(l,2),i=c[0],u=c[1],m=r.a.useState("This action can not be undone."),p=Object(s.a)(m,2),f=p[0],h=p[1],E=function(){var e;return ae.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ae.a.awrap(fe());case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}))},v=r.a.useState(!1),b=Object(s.a)(v,2),k=b[0],O=b[1];return r.a.useEffect((function(){E()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement("main",{className:e.layout},r.a.createElement(se.a,{className:e.paper},r.a.createElement(y.a,{component:"h1",variant:"h4",align:"center"},"Recordings"),r.a.createElement(je,null),r.a.createElement(re.a,{className:e.table},r.a.createElement(ce.a,null,r.a.createElement(ie.a,null,r.a.createElement(le.a,null,"Name"),r.a.createElement(le.a,{align:"right"},"student\xa0A"),r.a.createElement(le.a,{align:"right"},"student\xa0B"),r.a.createElement(le.a,{align:"right"},"Date"),r.a.createElement(le.a,{align:"right"},"Delete"))),r.a.createElement(oe.a,null,n.length?n.map((function(e,t){return r.a.createElement(ie.a,{key:t},e.error?r.a.createElement(le.a,{scope:"row",component:"th",colSpan:5},e.error):r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{scope:"row",component:"th"},r.a.createElement(g.a,{color:"inherit",component:C,to:"/record/".concat(e.id,"/checkout")},Object(Ce.upperFirst)(e.name))),r.a.createElement(le.a,{align:"right"},e.studentA),r.a.createElement(le.a,{align:"right"},e.studentB),r.a.createElement(le.a,{align:"right"},e.date.split("T")[0]),r.a.createElement(le.a,{align:"right"},r.a.createElement(Ae.a,{onClick:function(){return O(e.id)}}))))})):r.a.createElement(ie.a,null,r.a.createElement(le.a,{colSpan:5},r.a.createElement(Se.a,null)))))),r.a.createElement(Yt,null),r.a.createElement(xe,null)),r.a.createElement(Ue,{open:k,handleClose:function(){return O(!1)},handleOk:function(e){return ae.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:u(!0),ge(e).then((function(){E(),u(!1),O(!1)}),(function(e){u(!1),h("Ups, we have an error trying to delete the file. Contact with the admin"),console.log(e)}));case 2:case"end":return t.stop()}}))},title:"Are you sure?",message:i?r.a.createElement(Se.a,null):f}))}var Qt=function(e){var t=e.component,a=Object(Ve.a)(e,["component"]);return r.a.createElement(T.Consumer,null,(function(e){var n=e.isAuthenticated;return r.a.createElement(_.b,Object.assign({render:function(e){return n()?r.a.createElement(t,e):r.a.createElement(_.a,{to:"/sign-in"})}},a))}))},Xt=function(e){var t=e.component,a=Object(Ve.a)(e,["component"]);return r.a.createElement(T.Consumer,null,(function(e){var n=e.isAuthenticated;return r.a.createElement(_.b,Object.assign({render:function(e){return n()?r.a.createElement(_.a,{to:"/"}):r.a.createElement(t,e)}},a))}))};var ea=function(){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/S2R2-PROJECT",REACT_APP_PRO_API:"https://jeval.herokuapp.com/",REACT_APP_API_URL:"http://localhost:3001/"})),r.a.createElement(r.a.Fragment,null,r.a.createElement(_.d,null,r.a.createElement(Qt,{exact:!0,path:"/",component:ee}),r.a.createElement(Xt,{exact:!0,path:"/sign-in",component:J}),r.a.createElement(Qt,{exact:!0,path:"/new-record",component:$t}),r.a.createElement(Qt,{path:"/record/:id",component:$t}),r.a.createElement(Qt,{exact:!0,path:"/recordings",component:Kt})))};l.a.render(r.a.createElement(j.a,{basename:"/S2R2-PROJECT"},r.a.createElement(W,null,r.a.createElement(ea,null))),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.945d78b3.chunk.js.map