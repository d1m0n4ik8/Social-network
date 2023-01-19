"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[967],{1967:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ie}});var s=t(1413),i=t(2791),r=t(8128),a=t(9439),o=t(7804),l=t(2622),c=t(711),u=t(2995),d=t(9951),h=t(7537),x=t(6090),f=t(5786),j=t(6988),p=t(1082),m=t(7309),g=t(914),Z=t(6106),b=t(3099),v=t(2266),k=t(5400),C=t(9998),w=t(6441),y=t(3433),P=t(7518),N=t(183),S=t(6734),L=t(8159),F=t(5527),_=t(184),B="https://randomuser.me/api/?results=".concat(3,"&inc=name,gender,email,nat,picture&noinfo"),A=function(){var e=(0,i.useState)(!0),n=(0,a.Z)(e,2),t=n[0],r=n[1],o=(0,i.useState)(!1),l=(0,a.Z)(o,2),c=l[0],u=l[1],d=(0,i.useState)([]),h=(0,a.Z)(d,2),x=h[0],f=h[1],j=(0,i.useState)([]),p=(0,a.Z)(j,2),g=p[0],Z=p[1];(0,i.useEffect)((function(){fetch(B).then((function(e){return e.json()})).then((function(e){var n=e.results.map((function(e,n){return(0,s.Z)((0,s.Z)({},e),{},{id:n})}));r(!1),f(n),Z(n)}))}),[]);var b=t||c?null:(0,_.jsx)("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:(0,_.jsx)(m.Z,{onClick:function(){u(!0),Z(x.concat((0,y.Z)(new Array(3)).map((function(e){return(0,s.Z)((0,s.Z)({},e),{},{loading:!0,name:{},picture:{}})})))),fetch(B).then((function(e){return e.json()})).then((function(e){var n=x.concat(e.results.map((function(e,n){return(0,s.Z)((0,s.Z)({},e),{},{id:x.length+n})})));f(n),Z(n),u(!1),window.dispatchEvent(new Event("resize"))}))},children:"loading more"})});return(0,_.jsx)(P.ZP,{loading:t,itemLayout:"horizontal",loadMore:b,dataSource:g,rowKey:function(e){return e.id},renderItem:function(e){var n;return(0,_.jsx)(P.ZP.Item,{children:(0,_.jsxs)(N.Z,{avatar:!0,title:!1,loading:e.loading,active:!0,children:[(0,_.jsx)(P.ZP.Item.Meta,{avatar:(0,_.jsx)(v.C,{src:e.picture.large}),title:null===(n=e.name)||void 0===n?void 0:n.last,description:"This is so beautiful"}),(0,_.jsx)(S.Z,{}),(0,_.jsx)(L.Z,{twoToneColor:"#eb2f96"}),(0,_.jsx)(F.Z,{twoToneColor:"#52c41a"})]})})}})},I=h.Z.Meta,U=function(e){var n=(0,w.a)("(min-width: 992px)"),t=(0,i.useState)(!1),s=(0,a.Z)(t,2),r=s[0],y=s[1],P=(0,i.useState)(!1),N=(0,a.Z)(P,2),S=N[0],L=N[1],F=x.Z.useNotification(),B=(0,a.Z)(F,2),U=B[0],M=B[1],D=function(n){e.increaseLikesCount(n),U.open({message:"".concat(e.userName," liked your post"),description:(0,_.jsx)(f.Z,{height:100,alt:"postImage",src:e.post.image}),icon:(0,_.jsx)(o.Z,{}),placement:"bottomRight",duration:2,maxCount:2})},T=[{key:"1",label:(0,_.jsx)(p.Z,{title:"Delete the post",description:"Are you sure to delete this post?",onConfirm:function(){e.deletePost(e.post.id),j.ZP.success("Post deleted")},okText:"Yes",cancelText:"No",children:(0,_.jsxs)(m.Z,{type:"ghost",children:[(0,_.jsx)(l.Z,{}),"Delete"]})})}];return(0,_.jsx)(g.Z,{xs:24,sm:24,md:12,lg:8,xl:6,xxl:6,children:(0,_.jsx)(h.Z,{title:(0,_.jsxs)(Z.Z,{justify:"space-between",align:"middle",children:[(0,_.jsx)(g.Z,{children:(0,_.jsxs)(b.Z,{children:[(0,_.jsx)(v.C,{size:30,icon:(0,_.jsx)("img",{src:e.userAvatar,alt:"main-img"})}),e.userName]})}),(0,_.jsx)(g.Z,{children:e.allowChange&&(0,_.jsx)(k.Z,{placement:"bottomRight",trigger:"click",menu:{items:T},onOpenChange:function(e){y(e)},open:r,children:(0,_.jsx)(c.Z,{})})})]}),hoverable:!0,className:"post",cover:(0,_.jsx)(f.Z,{height:n?200:250,alt:"postImage",src:e.post.image}),actions:[(0,_.jsxs)("div",{onClick:function(){e.post.liked?e.decreaseLikesCount(e.post.id):D(e.post.id)},children:[e.post.likesCount,M,(0,_.jsx)(o.Z,{},"like")]}),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(C.Z,{title:"Comments",closable:!0,open:S,onCancel:function(){L(!1)},footer:[],children:(0,_.jsx)(A,{})}),(0,_.jsx)(u.Z,{onClick:function(){L(!0)}},"comment")]}),(0,_.jsx)(d.Z,{},"share")],children:(0,_.jsx)(I,{title:e.post.message,description:"www.instagram.com"})})})},M=i.memo(U),D=t(6859),T=t(7128),J=t(4664),E=t(1117),R=t(1635),O=t(1429),Y=t(6842),G=t(7106),q=t(9286),z=t(5518),H="Profile_main__YV3cZ",V="Profile_btn__Y5+Jz",W="Profile_contactsIcon__i+3Sf",K="Profile_info__n2gRn",X=function(e){var n="image/jpeg"===e.type||"image/png"===e.type;return n||j.ZP.error("You can only upload JPG/PNG file!"),n},$=function(e){var n=(0,i.useState)(!1),t=(0,a.Z)(n,2),s=t[0],r=t[1],o=function(){r(!1)},l=(0,i.useState)(!1),c=(0,a.Z)(l,2),u=c[0],d=c[1],h=(0,i.useState)(),x=(0,a.Z)(h,2),f=x[0],j=x[1],p=(0,Y.Z)("",{isEmpty:!0,minLenght:3}),m=(0,_.jsxs)("div",{children:[u?(0,_.jsx)(G.Z,{}):(0,_.jsx)(q.Z,{}),(0,_.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("button",{className:"btn",onClick:function(){r(!0)},children:["Add post ",(0,_.jsx)(q.Z,{})]}),(0,_.jsx)(C.Z,{onCancel:o,title:"Add new post",open:s,footer:[(0,_.jsx)("button",{onClick:o,className:V,children:"Cancel"},1),(0,_.jsx)("button",{onClick:function(){r(!1),e.onSubmit(p.value,f)},disabled:!p.inputValid||!f,className:V,children:"Add post"},2)],children:(0,_.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("input",{onBlur:p.onBlur,onChange:p.onChange,value:p.value,name:"postMessage",type:"text"}),p.isDirty&&p.error&&(0,_.jsx)("div",{style:{color:"red"},children:p.error})]}),(0,_.jsx)("div",{children:(0,_.jsx)(z.Z,{name:"postImage",listType:"picture-card",showUploadList:!1,beforeUpload:X,onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status&&function(e,n){var t=new FileReader;t.addEventListener("load",(function(){return n(t.result)})),t.readAsDataURL(e)}(e.file.originFileObj,(function(e){d(!1),j(e)})):d(!0)},children:f?(0,_.jsx)("img",{src:f,alt:"avatar",style:{width:"100%"}}):m})})]})})]})},Q=t(4165),ee=t(5861),ne=t(2004),te=t(2351),se=function(e){var n=function(){var e=(0,ee.Z)((0,Q.Z)().mark((function e(n){var t,s,i;return(0,Q.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.url){e.next=5;break}return e.next=4,new Promise((function(e){var t=new FileReader;t.readAsDataURL(n.originFileObj),t.onload=function(){return e(t.result)}}));case 4:t=e.sent;case 5:(s=new Image).src=t,null===(i=window.open(t))||void 0===i||i.document.write(s.outerHTML);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,_.jsx)(ne.Z,{rotate:!0,children:(0,_.jsx)(z.Z,{showUploadList:!1,beforeUpload:function(n){var t="image/jpeg"===n.type||"image/png"===n.type,s=n.size/1024/1024<5;return t?s?(e.savePhoto(n),j.ZP.success("Image update")):j.ZP.error("Image must smaller than 5MB!"):j.ZP.error("You can only upload JPG/PNG file!"),t&&s},onPreview:n,children:(0,_.jsxs)("button",{className:"btn",children:["Upload ",(0,_.jsx)(te.Z,{})]})})})},ie=t(2175),re=function(e){return(0,_.jsxs)("div",{children:[(0,_.jsx)(Z.Z,{justify:"center",children:(0,_.jsx)(v.C,{className:"avatar",icon:(0,_.jsx)("img",{src:e.profile.photos.large||D,alt:"main-img"})})}),(0,_.jsx)(Z.Z,{justify:"center",children:e.allowChange?(0,_.jsx)(b.Z,{direction:"vertical",children:(0,_.jsx)(se,{savePhoto:e.savePhoto})}):(0,_.jsx)(ie.Z,{userId:e.profile.userId,followed:e.profile.followed})})]})},ae=t(1752),oe=t(732),le=t(7575),ce=function(e){var n=(0,i.useState)(!1),t=(0,a.Z)(n,2),r=t[0],o=t[1],l=function(){var n=(0,s.Z)((0,s.Z)({},e.profile),{},{aboutMe:j.value,contacts:{facebook:b.value,website:v.value,twitter:k.value,instagram:w.value,youtube:y.value,github:P.value,mainLink:N.value},lookingForAJob:h,lookingForAJobDescription:p.value,fullName:f.value});e.onSubmit(n),o(!1)},c=function(){o(!1)},u=(0,i.useState)(e.profile.lookingForAJob),d=(0,a.Z)(u,2),h=d[0],x=d[1],f=(0,Y.Z)(e.profile.fullName?e.profile.fullName:"",{isEmpty:!0,minLenght:3}),j=(0,Y.Z)(e.profile.aboutMe?e.profile.aboutMe:"",{}),p=(0,Y.Z)(e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:"",{}),b=(0,Y.Z)(e.profile.contacts.facebook?e.profile.contacts.facebook:"",{}),v=(0,Y.Z)(e.profile.contacts.website?e.profile.contacts.website:"",{}),k=(0,Y.Z)(e.profile.contacts.twitter?e.profile.contacts.twitter:"",{}),w=(0,Y.Z)(e.profile.contacts.instagram?e.profile.contacts.instagram:"",{}),y=(0,Y.Z)(e.profile.contacts.youtube?e.profile.contacts.youtube:"",{}),P=(0,Y.Z)(e.profile.contacts.github?e.profile.contacts.github:"",{}),N=(0,Y.Z)(e.profile.contacts.mainLink?e.profile.contacts.mainLink:"",{});return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("button",{className:"btn",onClick:function(){o(!0)},children:["Edit info ",(0,_.jsx)(ae.Z,{})]}),(0,_.jsx)(C.Z,{title:"User profile",closable:!1,open:r,onOk:l,onCancel:c,footer:[(0,_.jsxs)(m.Z,{onClick:c,children:["Return ",(0,_.jsx)(oe.Z,{})]},"back"),(0,_.jsxs)(m.Z,{type:"primary",onClick:l,children:["Save ",(0,_.jsx)(le.Z,{})]},"submit")],children:(0,_.jsxs)(Z.Z,{gutter:[16,16],children:[(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("b",{children:"Full name : "})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("input",{type:"text",name:"fullName",onBlur:f.onBlur,onChange:f.onChange,value:f.value})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("b",{children:"About me : "})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("textarea",{type:"text",name:"aboutMe",onBlur:j.onBlur,onChange:j.onChange,value:j.value})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("b",{children:"Looking for a job"})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("input",{type:"checkbox",name:"lookingForAJob",checked:h,onChange:function(){x(!h)}})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("b",{children:"Skills "})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("textarea",{type:"text",name:"lookingForAJobDescription",onBlur:p.onBlur,onChange:p.onChange,value:p.value})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("b",{children:"Facebook "})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("input",{type:"text",name:"facebook",onBlur:b.onBlur,onChange:b.onChange,value:b.value})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("b",{children:"Website "})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("input",{type:"text",name:"website",onBlur:v.onBlur,onChange:v.onChange,value:v.value})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("b",{children:"Twitter "})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("input",{type:"text",name:"twitter",onBlur:k.onBlur,onChange:k.onChange,value:k.value})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("b",{children:"Instagram "})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("input",{type:"text",name:"instagram",onBlur:w.onBlur,onChange:w.onChange,value:w.value})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("b",{children:"Youtube "})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("input",{type:"text",name:"youtube",onBlur:y.onBlur,onChange:y.onChange,value:y.value})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("b",{children:"Github "})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("input",{type:"text",name:"github",onBlur:P.onBlur,onChange:P.onChange,value:P.value})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("b",{children:"Main Link "})}),(0,_.jsx)(g.Z,{span:12,children:(0,_.jsx)("input",{type:"text",name:"mainLink",onBlur:N.onBlur,onChange:N.onChange,value:N.value})})]})})]})},ue=t(655),de=t(8042),he=t(6908),xe=t(5763),fe=t(3657),je=t(4204),pe=t(9293),me=t(1753),ge=function(e){var n=e.contacts,t=[{key:"1",label:(0,_.jsxs)("a",{href:n.facebook,target:"_blank",rel:"noreferrer",children:[(0,_.jsx)("b",{children:"Facebook"})," ",n.facebook]}),icon:(0,_.jsx)(ue.Z,{className:W}),disabled:!n.facebook},{key:"2",label:(0,_.jsxs)("a",{href:n.website,target:"_blank",rel:"noreferrer",children:[(0,_.jsx)("b",{children:"Website"})," ",n.website]}),icon:(0,_.jsx)(de.Z,{className:W}),disabled:!n.website},{key:"3",label:(0,_.jsxs)("a",{href:n.twitter,target:"_blank",rel:"noreferrer",children:[(0,_.jsx)("b",{children:"Twitter"})," ",n.twitter]}),icon:(0,_.jsx)(he.Z,{className:W}),disabled:!n.twitter},{key:"4",label:(0,_.jsxs)("a",{href:n.instagram,target:"_blank",rel:"noreferrer",children:[(0,_.jsx)("b",{children:"Instagram"})," ",n.instagram]}),icon:(0,_.jsx)(xe.Z,{className:W}),disabled:!n.instagram},{key:"5",label:(0,_.jsxs)("a",{href:n.youtube,target:"_blank",rel:"noreferrer",children:[(0,_.jsx)("b",{children:"Youtube"})," ",n.youtube]}),icon:(0,_.jsx)(fe.Z,{className:W}),disabled:!n.youtube},{key:"6",label:(0,_.jsxs)("a",{href:n.github,target:"_blank",rel:"noreferrer",children:[(0,_.jsx)("b",{children:"Github"})," ",n.github]}),icon:(0,_.jsx)(je.Z,{className:W}),disabled:!n.github},{key:"7",label:(0,_.jsxs)("a",{href:n.mainLink,target:"_blank",rel:"noreferrer",children:[(0,_.jsx)("b",{children:"Main Link"})," ",n.mainLink]}),icon:(0,_.jsx)(pe.Z,{className:W}),disabled:!n.mainLink}].filter((function(e){return!e.disabled}));return(0,_.jsx)("div",{style:{cursor:"pointer"},children:(0,_.jsx)(k.Z,{menu:{items:t},trigger:["click"],children:(0,_.jsxs)("div",{children:["Contacts ",(0,_.jsx)(me.Z,{})]})})})},Ze=function(e){return(0,_.jsxs)("div",{className:K,children:[(0,_.jsx)("div",{children:(0,_.jsx)("b",{children:e.profile.fullName})}),(0,_.jsx)("div",{children:e.profile.aboutMe}),e.profile.lookingForAJob?(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{children:"Looking for a job"}),(0,_.jsx)("div",{children:e.profile.lookingForAJobDescription})]}):(0,_.jsx)("div",{children:"Don't looking for a job"}),Object.values(e.profile.contacts).some((function(e){return e}))&&(0,_.jsx)(ge,{contacts:e.profile.contacts})]})},be=function(e){var n=(0,i.useState)(!1),t=(0,a.Z)(n,2),s=t[0],r=t[1],o=(0,i.useState)(e.status),l=(0,a.Z)(o,2),c=l[0],u=l[1];(0,i.useEffect)((function(){return u(e.status)}),[e.status]);return(0,_.jsxs)("div",{className:K,children:[(0,_.jsx)("div",{children:(0,_.jsx)("b",{children:"Status"})}),s?(0,_.jsx)("div",{children:(0,_.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),e.updateUserStatus(c)},onChange:function(e){u(e.currentTarget.value)},type:"text",defaultValue:c})}):(0,_.jsx)("div",{children:(0,_.jsx)("span",{onDoubleClick:function(){e.allowChange&&r(!0)},children:c||"------------"})})]})},ve=function(e){return(0,_.jsxs)(Z.Z,{gutter:[16,16],justify:{sm:"start",md:"center"},children:[(0,_.jsx)(g.Z,{span:8,children:(0,_.jsx)(O.Z,{className:"statistic__item",valueStyle:{color:"#fff"},title:"Followers",value:e.profile.followed?1:0})}),(0,_.jsx)(g.Z,{span:8,children:(0,_.jsx)(O.Z,{className:"statistic__item",title:"Follows",value:10})}),(0,_.jsx)(g.Z,{span:8,children:(0,_.jsx)(O.Z,{className:"statistic__item",title:"Now",suffix:e.allowChange?(0,_.jsx)(E.Z,{}):(0,_.jsx)(R.Z,{}),value:e.allowChange?"online":"offline"})}),(0,_.jsx)(g.Z,{span:24,className:"AvatatMobile1",children:(0,_.jsx)(Z.Z,{justify:"center",children:(0,_.jsx)(re,{allowChange:e.allowChange,profile:e.profile})})}),(0,_.jsx)(g.Z,{sm:24,md:e.allowChange?8:12,children:(0,_.jsx)(Z.Z,{justify:{sm:"start",md:"center"},children:(0,_.jsx)(Ze,{profile:e.profile})})}),(0,_.jsx)(g.Z,{sm:8,md:e.allowChange?8:12,children:(0,_.jsx)(Z.Z,{justify:{sm:"start",md:"center"},children:(0,_.jsx)(be,{status:e.status,updateUserStatus:e.updateUserStatus,allowChange:e.allowChange})})}),e.allowChange&&(0,_.jsx)(g.Z,{sm:16,md:8,children:(0,_.jsxs)(Z.Z,{justify:{sm:"start",md:"center"},children:[(0,_.jsx)(ce,{onSubmit:function(n){e.saveProfileInfo(n)},profile:e.profile}),(0,_.jsx)($,{onSubmit:function(n,t){e.addPost(n,t),j.ZP.success("Post added")}})]})})]})},ke=function(e){var n=function(n){e.deletePost(n)},t=function(n){e.increaseLikesCount(n)},s=function(n){e.decreaseLikesCount(n)},i=e.posts.map((function(i){return(0,_.jsx)(M,{userAvatar:e.profile.photos.large||D,userName:e.profile.fullName,post:i,deletePost:n,decreaseLikesCount:s,increaseLikesCount:t,allowChange:e.allowChange},i.id)}));return(0,_.jsxs)("main",{className:H,children:[(0,_.jsxs)(Z.Z,{gutter:[16,16],justify:"center",children:[(0,_.jsx)(g.Z,{span:6,className:"AvatatMobile2",children:(0,_.jsx)(re,{allowChange:e.allowChange,profile:e.profile})}),(0,_.jsx)(g.Z,{span:18,children:(0,_.jsx)(ve,{status:e.status,updateUserStatus:e.updateUserStatus,allowChange:e.allowChange,profile:e.profile,savePhoto:e.savePhoto,saveProfileInfo:e.saveProfileInfo,addPost:e.addPost})})]}),(0,_.jsx)(T.Z,{style:{color:"white",borderColor:"white",padding:"20px 0px"},plain:!0,children:"Posts"}),e.allowChange?(0,_.jsx)(_.Fragment,{children:i.length?(0,_.jsx)(Z.Z,{className:"w100",gutter:[16,16],children:i}):(0,_.jsx)(J.Z,{})}):(0,_.jsx)(J.Z,{})]})},Ce=t(8687),we=t(2732),ye=t(6871),Pe=t(7781),Ne=function(e){return e.profilePage.posts},Se=function(e){return e.profilePage.newPostMessage},Le=function(e){return e.profilePage.isFetching},Fe=function(e){return e.profilePage.status},_e=function(e){return e.profilePage.profile},Be=function(e){return e.auth.id},Ae=t(4041),Ie=(0,Pe.qC)((0,Ce.$j)((function(e){return{posts:Ne(e),newPostMessage:Se(e),isFetching:Le(e),isAuth:(0,Ae.Od)(e),status:Fe(e),profile:_e(e),id:Be(e)}}),{addPost:r.q2,deletePost:r.fR,increaseLikesCount:r.dk,decreaseLikesCount:r.D8,requestProfile:r.tg,getUserStatus:r.Tq,updateUserStatus:r.OL,savePhoto:r.Ju,saveProfileInfo:r.FX}),(function(e){return function(n){var t=(0,ye.TH)(),i=(0,ye.s0)(),r=(0,ye.UO)();return(0,_.jsx)(e,(0,s.Z)((0,s.Z)({},n),{},{router:{location:t,navigate:i,params:r}}))}}))((function(e){var n=e.router.params.userId,t=!1,r=e.requestProfile,a=e.getUserStatus;return n||(n=e.id,t=!0),(0,i.useEffect)((function(){r(n),a(n)}),[n,r,a]),(0,_.jsx)(_.Fragment,{children:e.isFetching?(0,_.jsx)(we.Z,{}):(0,_.jsx)(ke,(0,s.Z)((0,s.Z)({},e),{},{allowChange:t}))})}))}}]);
//# sourceMappingURL=967.7fabbd97.chunk.js.map