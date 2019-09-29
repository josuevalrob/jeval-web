(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,a,t){e.exports=t(178)},178:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),l=t.n(o),c=t(15),i=t(16),s=t(13),u=t(239),m=t(236),d=t(235),p=t(259),g=t(238),f=t(263),h=t(240),E=t(241),v=t(71),b=t.n(v),y=t(59),j=t(234),w=t(90),k=Object(w.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}),O=t(36),C=r.a.forwardRef(function(e,a){return r.a.createElement(O.b,Object.assign({innerRef:a},e))}),x=t(115),S=t.n(x),N=t(68),A=t(69),B=t(78),I=t(70),R=t(79),W="current-user",T=r.a.createContext(),q=function(e){function a(){var e,t;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(B.a)(this,(e=Object(I.a)(a)).call.apply(e,[this].concat(r)))).state={user:JSON.parse(localStorage.getItem(W)||"{}")},t.handleUserChange=function(e){t.setState({user:e}),e?localStorage.setItem(W,JSON.stringify(e)):localStorage.removeItem(W)},t.isAuthenticated=function(){return!!(t.state.user&&t.state.user.data&&t.state.user.data.email)},t}return Object(R.a)(a,e),Object(A.a)(a,[{key:"render",value:function(){return r.a.createElement(T.Provider,{value:{user:this.state.user,onUserChange:this.handleUserChange,isAuthenticated:this.isAuthenticated}},this.props.children)}}]),a}(n.Component),U=function(e){return function(a){return r.a.createElement(T.Consumer,null,function(t){return r.a.createElement(e,Object.assign({},t,a))})}},D=S.a.create({baseURL:"".concat("https://jeval.herokuapp.com/"),withCredentials:!0});D.interceptors.response.use(function(e){return e},function(e){if(403!==e.response.status&&401!==e.response.status)return Promise.reject(e);localStorage.removeItem(W),window.location.assign("/sign-in")});var F=D,L={register:function(e){return F.post("/signup",e)},authenticate:function(e){return F.post("/signin",e)},logout:function(){return F.post("/logout")}},G=t(45);var P=U(function(e){var a=k(),t=r.a.useState(!1),n=Object(s.a)(t,2),o=n[0],l=n[1],v=r.a.useState({email:"",password:""}),w=Object(s.a)(v,2),O=w[0],x=w[1],S=function(e){return function(a){return x(Object(i.a)({},O,Object(c.a)({},e,a.target.value)))}};return o?r.a.createElement(G.a,{to:"/"}):r.a.createElement(j.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(m.a,{className:a.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,onSubmit:function(a){a.preventDefault(),L.authenticate(O).then(function(a){e.onUserChange(a,l)},function(e){var a=e.message,t=e.errors;console.error(a,t)})}},r.a.createElement(p.a,{onChange:S("email"),value:O.email||"",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",autoFocus:!0,type:"email"}),r.a.createElement(p.a,{onChange:S("password"),value:O.password||"",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",autoComplete:"off",type:"password"}),r.a.createElement(g.a,{control:r.a.createElement(f.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(h.a,{to:"/authenticate/google",component:C,color:"secondary"},"Google Sign in"),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(h.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{to:"/sign-up",component:C,variant:"body2"},"Don't have an account? Sign Up"))))))}),J=t(264),z=t(242),H=t(183);var Z=U(function(e){var a=k(),t=r.a.useState(!1),n=Object(s.a)(t,2),o=n[0],l=n[1],f=r.a.useState({email:"",password:"",name:"",lastName:"",rol:"student"}),v=Object(s.a)(f,2),w=v[0],O=v[1],x=function(e){return function(a){return O(Object(i.a)({},w,Object(c.a)({},e,a.target.value)))}};return o?r.a.createElement(G.a,{to:"/"}):r.a.createElement(j.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(m.a,{className:a.avatar},r.a.createElement(b.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:a.form,onSubmit:function(a){a.preventDefault(),L.register(w).then(function(a){e.onUserChange(a),l(!0)},function(e){var a=e.message,t=e.errors;console.error(a,t)})},autoComplete:"off"},r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{autoComplete:"off",name:"name",onChange:x("name"),value:w.name||"",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:x("lastName"),value:w.lastName||"",variant:"outlined",fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"off"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:x("email"),value:w.email||"",variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"none"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:x("password"),value:w.password||"",variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"password",type:"password",id:"password",autoComplete:"none"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(H.a,{row:!0},r.a.createElement(z.a,{row:!0,name:w.rol,value:w.rol,onChange:x("rol")},r.a.createElement(g.a,{value:"teacher",control:r.a.createElement(J.a,null),label:"Teacher"}),r.a.createElement(g.a,{value:"student",control:r.a.createElement(J.a,null),label:"Student"}))))),r.a.createElement(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(h.a,{href:"#",variant:"body2",color:"secondary"},"Register with google")),r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{to:"/sign-in",component:C,variant:"body2"},"Already have an account? Sign In"))))))}),M=t(116),Q=t.n(M),Y=t(117),_=t.n(Y),$=Object(w.a)(function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)},iconSmall:{fontSize:20}}});function K(){var e=$();return r.a.createElement("div",null,r.a.createElement(u.a,{to:"/new-record",component:C,variant:"contained",color:"primary",className:e.button},"New Record",r.a.createElement(Q.a,{className:e.rightIcon})),r.a.createElement(u.a,{to:"/recordings",component:C,variant:"contained",color:"default",className:e.button},"Check Recordins",r.a.createElement(_.a,{className:e.leftIcon})))}var V=Object(w.a)(function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"white"}}});var X=U(function(e){var a=e.user,t=e.onUserChange,n=a.data;return r.a.createElement(y.a,{variant:"body2",color:"textSecondary"},"Hello ".concat(n.name,", here you can "),r.a.createElement(h.a,{color:"inherit",to:"/profile/".concat(n.id),component:C},"edit your profile")," or simply  ",r.a.createElement(h.a,{color:"inherit",to:"/",onClick:function(){return t()},component:C},"logout")," from the site")});function ee(){var e=V();return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,null),r.a.createElement(j.a,{component:"main",className:e.main,maxWidth:"sm"},r.a.createElement(y.a,{variant:"h2",component:"h1",gutterBottom:!0},"Jeval"),r.a.createElement(y.a,{variant:"h5",component:"h2",gutterBottom:!0},"A simple App for voice recording and spech recognition analysis."),r.a.createElement(y.a,{variant:"body1"},"What do you want to do now."),r.a.createElement(K,null)),r.a.createElement("footer",{className:e.footer},r.a.createElement(j.a,{maxWidth:"sm"},r.a.createElement(y.a,{variant:"body1"},"Customization"),r.a.createElement(X,null))))}var ae=t(58),te=t.n(ae),ne=t(93),re=Object(w.a)(function(e){return{appBar:{position:"relative"},layout:Object(c.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(900+2*e.spacing(2)),{width:900,marginLeft:"auto",marginRight:"auto"}),paper:Object(c.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(900+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},progress:{margin:e.spacing(2)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},table:{minWidth:650}}}),oe=t(254),le=t(258),ce=t(257),ie=t(255),se=t(256),ue=t(96),me="/recording",de=function(e){return Object(i.a)({},e,{studentA:e.students[0],studentB:e.students[1]})},pe={create:function(e){return F.post(me,e)},read:function(e){return F.get("".concat(me,"/").concat(e)).then(function(e){var a=e.data;return de(a)})},getData:function(){return F.get("".concat(me)).then(function(e){return e.data.map(de)})},update:function(e,a){return F.put("".concat(me,"/").concat(e),a).then(function(e){var a=e.data;return de(a)})},destroy:function(e){return F.delete("".concat(me,"/").concat(e))}},ge=t(118),fe=t.n(ge),he=t(268),Ee=t(10),ve=Object(w.a)(function(e){return{root:{},menuButton:{marginRight:e.spacing(2)},search:Object(c.a)({flexGrow:1,position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Ee.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Ee.d)(e.palette.common.white,.25)},marginRight:0,width:"100%"},e.breakpoints.up("sm"),{marginRight:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(c.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}});function be(){var e=ve();return r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(fe.a,null)),r.a.createElement(he.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}}))}var ye=t(119);var je=function(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"If you don't wanna be here, ",r.a.createElement(h.a,{color:"inherit",component:C,to:"/"},"Click here"),", and Go back to the main menu.")},we=t(253),ke=t(124),Oe=t.n(ke),Ce=t(266),xe=t(246),Se=t(244),Ne=t(245),Ae=t(243),Be=t(109),Ie=r.a.forwardRef(function(e,a){return r.a.createElement(Be.a,Object.assign({direction:"up",ref:a},e))});function Re(e){var a=e.open,t=e.message,n=e.handleClose,o=e.handleOk;return r.a.createElement(Ce.a,{open:!!a,TransitionComponent:Ie,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(Ae.a,{id:"alert-dialog-slide-title"},"Use Google's location service?"),r.a.createElement(Se.a,null,r.a.createElement(Ne.a,{id:"alert-dialog-slide-description"},t)),r.a.createElement(xe.a,null,r.a.createElement(u.a,{onClick:n,color:"primary"},"Disagree"),r.a.createElement(u.a,{onClick:function(){return o(a)},color:"primary"},"Agree")))}var We=t(95),Te=t(267),qe=t(252),Ue=t(265),De=t(247),Fe=function(e){var a=e.arr,t=e.obj,n=e.handle,o=e.student,l=e.stage;return r.a.createElement(H.a,{row:!0},a.map(function(e,a){var c=!!t[e.key][l];return r.a.createElement(E.a,{item:!0,xs:6,key:a},r.a.createElement(g.a,{control:r.a.createElement(De.a,{checked:c,value:c,onChange:n(e.key,o,l),color:"primary"}),label:e.label}))}))},Le=[{key:"confident",label:"Confident",value:!1},{key:"lost",label:"Lost",value:!1},{key:"nervous",label:"Nervous",value:!1},{key:"nothing",label:"I didn't feel anything",value:!1}],Ge=[{key:"startingConversation",label:"Starting the Conversation",value:[!1,!1,!1]},{key:"myOpinion",label:"Giving my opinion",value:[!1,!1,!1]},{key:"asking",label:"Asking Questions",value:[!1,!1,!1]},{key:"partnerGesture",label:"Noticing my partners' gesture",value:[!1,!1,!1]},{key:"comments",label:"Making comments",value:[!1,!1,!1]},{key:"listeningPartnerIdeas",label:"Listening to my partner's ideas",value:[!1,!1,!1]},{key:"answering",label:"Answering Questions",value:[!1,!1,!1]},{key:"smiling",label:"Smiling",value:[!1,!1,!1]},{key:"eyeContact",label:"Establishing eye contact",value:[!1,!1,!1]},{key:"bodyLanguage",label:"Addresing body language",value:[!1,!1,!1]}],Pe=t(261),Je=t(248),ze=t(53),He=t(260);function Ze(e){var a=e.children,t=e.value,n=e.index,o=Object(ze.a)(e,["children","value","index"]);return r.a.createElement(y.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),r.a.createElement(He.a,{p:3},a))}var Me=t(249),Qe=function(e,a,t){var n=k(),o=r.a.useState(0),l=Object(s.a)(o,2),c=l[0],i=l[1];return r.a.createElement(j.a,{component:"main"},r.a.createElement(d.a,null),r.a.createElement("div",{className:n.paper},r.a.createElement(Je.a,{position:"static",color:"default"},r.a.createElement(Pe.a,{value:c,indicatorColor:"primary",textColor:"primary",variant:"fullWidth",onChange:function(e,a){return i(a)}},a.map(function(e,a){return r.a.createElement(Me.a,Object.assign({key:a},e,function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(a)))}))),t.map(function(a,t){return r.a.createElement(Ze,{value:c,index:t,key:t},r.a.createElement(E.a,{container:!0,spacing:3},r.a.createElement(e,a)))})))},Ye=function(e){return e.reduce(function(e,a){return e[a.key]=a.value,e},{})},_e=function(e){var a=e.recording,t=e.fn,n=e.stage,o=a.cognitive,l=a.studentA,u=a.studentB,m=r.a.useState(!1),d=Object(s.a)(m,2),p=d[0],g=d[1],f=r.a.useReducer(function(e,n){var r=n.type,o=n.payload,l=null;switch(r){case 0:l=[Object(i.a)({},e[0],o),e[1]];break;case 1:l=[e[0],Object(i.a)({},e[1],o)];break;case"fill":l=o,g(!0);break;default:l=e}return t(Object(i.a)({},a,{cognitive:l})),l},[Ye(Ge),Ye(Ge)]),h=Object(s.a)(f,2),E=h[0],v=h[1];r.a.useEffect(function(){o&&o.length&&!p&&v({type:"fill",payload:o})},[o,p]);var b=function(e,a){return function(t){v({type:a,payload:Object(c.a)({},e,E[a][e].map(function(e,a){return a===n?!e:e}))})}},y=[{student:0,obj:E[0],handle:b,arr:Ge,stage:n},{student:1,obj:E[1],handle:b,arr:Ge,stage:n}];return Qe(Fe,[{label:l},{label:u}],y)},$e=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,Ke=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)?/gi,Ve={email:function(e){var a;return e?$e.test(e)||(a="Invalid email pattern"):a="Email is required",a},name:function(e){var a;return(!e||e.length<3)&&(a="Name is required"),a},studentA:function(e){var a;return(!e||e.length<3)&&(a="The first student is required"),a},studentB:function(e){var a;return(!e||e.length<3)&&(a="The second student is required"),a},comments:function(e){var a;return e.length>140&&(a="Just a tweet... no more than 140 characters"),a},password:function(e){var a;return(!e||e.length<3)&&(a="Password is required"),a},image:function(e){var a;return Ke.test(e)||(a="Invalid Url Pattern"),a},notesTitle:function(e){var a;return e||(a="We need a title for your Notes x"),a},markDown:function(e){var a;return(!e||e.length<140)&&(a="Give me at least a tweet!!"),a}},Xe=function(e){function a(){var e,t;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(B.a)(this,(e=Object(I.a)(a)).call.apply(e,[this].concat(r)))).state={content:t.props.recording.id?t.props.recording:wa,errors:{name:t.props.recording.name?void 0:Ve.name(),studentA:t.props.recording.studentA?void 0:Ve.studentA(),studentB:t.props.recording.studentB?void 0:Ve.studentB()}},t.hasErrors=function(){var e=t.state.content;return Object.keys(e).some(function(a){var t=e[a];return Ve[a]&&Ve[a](t)})},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value,o=t.state,l=o.content,s=o.errors;t.setState({content:Object(i.a)({},l,Object(c.a)({},n,r)),errors:Object(i.a)({},s,Object(c.a)({},n,Ve[n]&&Ve[n](r)))},function(){var e=t.state,a=e.content,n=e.errors;t.hasErrors()?t.props.fn(Object(i.a)({},a,{hasError:!0,errors:n})):t.props.fn(Object(i.a)({},a,{students:[a.studentA,a.studentB]}))})},t}return Object(R.a)(a,e),Object(A.a)(a,[{key:"componentDidUpdate",value:function(e,a){this.props.recording.id!==e.recording.id&&this.setState({content:this.props.recording,errors:{}})}},{key:"render",value:function(){var e=this.state.content;return r.a.createElement(j.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",null,r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:this.handleChange,value:e.name,error:!!this.state.errors.name,variant:"outlined",fullWidth:!0,id:"name",name:"name",label:"Recording Name",autoComplete:"fname"})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:this.handleChange,value:e.studentA,error:!!this.state.errors.studentA,autoComplete:"fstudent",name:"studentA",variant:"outlined",required:!0,fullWidth:!0,id:"studentA",label:"First Student",autoFocus:!0})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{onChange:this.handleChange,value:e.studentB,error:!!this.state.errors.studentB,variant:"outlined",required:!0,fullWidth:!0,id:"studentB",label:"Second Student",name:"studentB",autoComplete:"sstudent"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{onChange:this.handleChange,value:e.comments,variant:"outlined",fullWidth:!0,id:"comments",label:"Some extra comments",name:"comments",rows:"4",multiline:!0,autoComplete:"fcomments"})))))}}]),a}(r.a.Component),ea=t(125),aa=t(123),ta=t.n(aa),na=t(250),ra=t(251),oa=t(182),la=t(121),ca=t.n(la),ia=t(122),sa=t.n(ia),ua=t(120),ma=t.n(ua);function da(e){var a=e.recording,t=(e.fn,[{label:a.studentA},{label:a.studentB}]);return Qe(pa,t,t)}function pa(e){var a=e.label,t=ga(),n=r.a.useState(!1),o=Object(s.a)(n,2),l=o[0],c=o[1],i=r.a.useState(new Audio),u=Object(s.a)(i,2),m=(u[0],u[1]);return r.a.createElement(na.a,{className:t.card},r.a.createElement("div",{className:t.details},r.a.createElement(ra.a,{className:t.content},r.a.createElement(y.a,{component:"h5",variant:"h5"},"Track # 1"),r.a.createElement(y.a,{variant:"subtitle1",color:"textSecondary"},a)),r.a.createElement("div",{className:t.controls},r.a.createElement(oa.a,{onClick:function(){return c(!l)},"aria-label":"play/pause"},l?r.a.createElement(ca.a,{className:t.playIcon}):r.a.createElement(ma.a,{className:t.playIcon})),r.a.createElement(oa.a,{"aria-label":"previous",disabled:l},r.a.createElement(sa.a,null)))),r.a.createElement(ea.a,{className:t.cover,record:l,onStop:function(e){var a=URL.createObjectURL(e.blob),t=new Audio(a);t.play(),m(t)},strokeColor:"#ffffff",backgroundColor:ta.a[800]}))}var ga=Object(w.a)(function(e){return{card:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}}),fa=function(e){return r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement("h3",null,e.questions.feel),r.a.createElement(ha,e.feel)),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement("h3",null,e.questions.help),r.a.createElement(H.a,{row:!0},r.a.createElement(z.a,{name:e.feel.student,value:e.help.value?"yes":"no",onChange:function(a){return e.help.handle(a,e.feel.student,"help")}},r.a.createElement(g.a,{value:"yes",control:r.a.createElement(J.a,null),label:"Yes, they did"}),r.a.createElement(g.a,{value:"no",control:r.a.createElement(J.a,null),label:"No, they didn't"})))))},ha=function(e){var a=e.arr,t=e.value,n=e.handle,o=e.student;return r.a.createElement(H.a,{row:!0},r.a.createElement(z.a,{name:o,value:t,onChange:function(e){return n(e,o,"feel")}},a.map(function(e,a){return r.a.createElement(g.a,{key:a,value:e.key,control:r.a.createElement(J.a,null),label:e.label})})))},Ea=function(e){var a=e.recording,t=e.fn,n=a.socioAffective,o=a.studentA,l=a.studentB,u=r.a.useState(!1),m=Object(s.a)(u,2),d=m[0],p=m[1],g=r.a.useReducer(function(e,n){var r=n.type,o=n.payload,l=null;switch(r){case"A":l=[Object(i.a)({},e[0],o),e[1]];break;case"B":l=[e[0],Object(i.a)({},e[1],o)];break;case"fill":l=o,p(!0);break;default:l=e}return t(Object(i.a)({},a,{socioAffective:l})),l},[{feel:"",help:void 0},{feel:"",help:!1}]),f=Object(s.a)(g,2),h=f[0],E=f[1];r.a.useEffect(function(){n&&n.length&&!d&&E({type:"fill",payload:n})},[n,d]);var v=function(e,a,t){var n=e.target.value;E({type:a,payload:"feel"===t?Object(c.a)({},t,n):Object(c.a)({},t,"yes"===n)})},b={feel:"How did you feel when using strategies?",help:"Did they help you to talk to your partner?"},y=[{feel:{arr:Le,student:"A",value:h[0].feel,handle:v},questions:b,help:{value:h[0].help,handle:v}},{feel:{arr:Le,student:"B",value:h[1].feel,handle:v},questions:b,help:{value:h[1].help,handle:v}}];return Qe(fa,[{label:o},{label:l}],y)};var va=function(e,a,t){switch(e){case 0:return r.a.createElement(Xe,{fn:a,recording:t});case 1:return r.a.createElement(_e,{stage:0,fn:a,recording:t});case 2:return r.a.createElement(da,{fn:a,recording:t});case 3:return r.a.createElement(_e,{stage:1,fn:a,recording:t});case 4:return r.a.createElement(Ea,{fn:a,recording:t});case 5:return r.a.createElement(_e,{stage:2,fn:a,recording:t});default:throw new Error("Unknown step")}},ba=function(e){var a=e.step,t=e.classes,n=e.back,o=e.next,l=e.steps,c=e.blocked;return r.a.createElement("div",{className:t.buttons},0!==a&&r.a.createElement(u.a,{onClick:n,className:t.button},"Back"),r.a.createElement(u.a,{disabled:c,variant:"contained",color:"primary",onClick:o,className:t.button},a===l.length-1?"Resume":"Next"))},ya=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),r.a.createElement(y.a,{variant:"subtitle1"},"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."))},ja=t(94),wa={id:"",name:"",comments:"",studentA:"",studentB:""},ka=["Set-Up","Before talking","Talking","After talking","Socio Affective","Future Recordings"];function Oa(e){var a=re(),t=e.match.params.id,n=r.a.useState(2),o=Object(s.a)(n,2),l=o[0],c=o[1],i=r.a.useState(!1),u=Object(s.a)(i,2),m=u[0],p=u[1],g=r.a.useState({}),f=Object(s.a)(g,2),h=f[0],E=f[1],v=r.a.useState(ka),b=Object(s.a)(v,2),j=b[0],w=b[1],k=r.a.useState(!1),O=Object(s.a)(k,2),C=O[0],x=O[1],S=Object(ja.useSnackbar)().enqueueSnackbar,N=function(e){return S(e,{variant:"warning"})};r.a.useEffect(function(){t?(x(!0),pe.read(t).then(function(e){w([e.name].concat(Object(We.a)(ka.slice(1,ka.length)))),E(e),p(!0),x(!1)})):(E(wa),w(ka),p(!1))},[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement("main",{className:a.layout},r.a.createElement(ue.a,{className:a.paper},r.a.createElement(y.a,{component:"h1",variant:"h4",align:"center"},j[l]),r.a.createElement(Te.a,{activeStep:l,className:a.stepper},j.map(function(e){return r.a.createElement(qe.a,{key:e},r.a.createElement(Ue.a,null,e))})),r.a.createElement(r.a.Fragment,null,l===j.length?r.a.createElement(ya,null):r.a.createElement(r.a.Fragment,null,C?r.a.createElement(we.a,null):va(l,E,h),r.a.createElement(ba,{steps:j,step:l,classes:a,back:function(){return c(l-1)},next:function(){h.hasError?Object.values(h.errors).forEach(function(e){return e&&N(e)}):0!==l||m?m&&pe.update(t,h).then(function(e){w([e.name].concat(Object(We.a)(ka.slice(1,ka.length)))),c(l+1)},function(e){return N(e.response.data.message)}):pe.create(h).then(function(a){var t=a.data;p(!0),E(t),e.history.push("/record/".concat(t.id)),c(l+1)},function(e){return N(e.response.data.message)})}})))),t&&l<1&&r.a.createElement(Ca,null),r.a.createElement(je,null)))}function Ca(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"This is not what you are looking for?, ",r.a.createElement(h.a,{color:"inherit",component:C,to:"/new-record"},"Click here"),", and Go to create a new recording.")}function xa(e){return r.a.createElement(ja.SnackbarProvider,{maxSnack:3},r.a.createElement(Oa,e))}function Sa(){var e=re(),a=r.a.useState([]),t=Object(s.a)(a,2),n=t[0],o=t[1],l=function(){var e=Object(ne.a)(te.a.mark(function e(){var a;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.getData();case 2:a=e.sent,o(a);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),c=r.a.useState(!1),i=Object(s.a)(c,2),u=i[0],m=i[1],p=function(){var e=Object(ne.a)(te.a.mark(function e(a){return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:pe.destroy(a).then(function(){l(),m(!1)},function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return r.a.useEffect(function(){l()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null),r.a.createElement("main",{className:e.layout},r.a.createElement(ue.a,{className:e.paper},r.a.createElement(y.a,{component:"h1",variant:"h4",align:"center"},"Recordings"),r.a.createElement(be,null),r.a.createElement(oe.a,{className:e.table},r.a.createElement(ie.a,null,r.a.createElement(se.a,null,r.a.createElement(ce.a,null,"Name"),r.a.createElement(ce.a,{align:"right"},"student\xa0A"),r.a.createElement(ce.a,{align:"right"},"student\xa0B"),r.a.createElement(ce.a,{align:"right"},"Date"),r.a.createElement(ce.a,{align:"right"},"Delete"))),r.a.createElement(le.a,null,n.length?n.map(function(e){return r.a.createElement(se.a,{key:e.name},r.a.createElement(ce.a,{scope:"row",component:"th"},r.a.createElement(h.a,{color:"inherit",component:C,to:"/record/".concat(e.id)},Object(ye.upperFirst)(e.name))),r.a.createElement(ce.a,{align:"right"},e.studentA),r.a.createElement(ce.a,{align:"right"},e.studentB),r.a.createElement(ce.a,{align:"right"},e.date.split("T")[0]),r.a.createElement(ce.a,{align:"right"},r.a.createElement(Oe.a,{onClick:function(){return m(e.id)}})))}):r.a.createElement(se.a,null,r.a.createElement(ce.a,{colSpan:5},r.a.createElement(we.a,null)))))),r.a.createElement(Ca,null),r.a.createElement(je,null)),r.a.createElement(Re,{open:u,handleClose:function(){return m(!1)},handleOk:p,title:"Are you sure?",message:"This action can not be undone."}))}var Na=function(e){var a=e.component,t=Object(ze.a)(e,["component"]);return r.a.createElement(T.Consumer,null,function(e){var n=e.isAuthenticated;return r.a.createElement(G.b,Object.assign({render:function(e){return n()?r.a.createElement(a,e):r.a.createElement(G.a,{to:"/sign-in"})}},t))})},Aa=function(e){var a=e.component,t=Object(ze.a)(e,["component"]);return r.a.createElement(T.Consumer,null,function(e){var n=e.isAuthenticated;return r.a.createElement(G.b,Object.assign({render:function(e){return n()?r.a.createElement(G.a,{to:"/"}):r.a.createElement(a,e)}},t))})};var Ba=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.d,null,r.a.createElement(Na,{exact:!0,path:"/",component:ee}),r.a.createElement(Aa,{exact:!0,path:"/sign-in",component:P}),r.a.createElement(Aa,{exact:!0,path:"/sign-up",component:Z}),r.a.createElement(Na,{exact:!0,path:"/new-record",component:xa}),r.a.createElement(Na,{path:"/record/:id",component:xa}),r.a.createElement(Na,{exact:!0,path:"/recordings",component:Sa})))};l.a.render(r.a.createElement(O.a,{basename:"/jeval-web"},r.a.createElement(q,null,r.a.createElement(Ba,null))),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.bc8f293f.chunk.js.map