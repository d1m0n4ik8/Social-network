"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[189],{6842:function(e,t,n){var s=n(8683),i=n(885),a=n(2791),r=function(e,t){var n=(0,a.useState)(!0),s=(0,i.Z)(n,2),r=s[0],o=s[1],u=(0,a.useState)(!1),c=(0,i.Z)(u,2),l=c[0],f=c[1],d=(0,a.useState)(!1),m=(0,i.Z)(d,2),p=m[0],g=m[1],h=(0,a.useState)(""),x=(0,i.Z)(h,2),j=x[0],v=x[1],_=(0,a.useState)(!1),C=(0,i.Z)(_,2),P=C[0],k=C[1];return(0,a.useEffect)((function(){for(var n in t)switch(n){case"minLenght":e.length<t[n]?f(!0):f(!1);break;case"isEmpty":o(!e);break;case"isEmail":g(!String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))}}),[e,t]),(0,a.useEffect)((function(){v(r?"\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c":p?"\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u0435\u043c\u0435\u0439\u043b":l?"\u041c\u0456\u043d\u0456\u043c\u0430\u043b\u044c\u043d\u0430 \u0434\u043e\u0432\u0436\u0438\u043d\u0430 "+t.minLenght:""),k(!(r||l||p))}),[r,l,p,t]),(0,a.useEffect)((function(){}),[]),{error:j,inputValid:P}};t.Z=function(e,t){var n=(0,a.useState)(e),o=(0,i.Z)(n,2),u=o[0],c=o[1],l=(0,a.useState)(!1),f=(0,i.Z)(l,2),d=f[0],m=f[1],p=r(u,t);return(0,s.Z)({value:u,isDirty:d,onChange:function(e){c(e.target.value)},onBlur:function(e){m(!0)}},p)}},6189:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var s=n(8683),i=n(2791),a=n(8128),r={main:"Profile_main__YV3cZ",main_img:"Profile_main_img__yfTkq",textarea:"Profile_textarea__waFTE",btn:"Profile_btn__Y5+Jz",posts:"Profile_posts__-gQ-o"},o={post:"Post_post__QrPww",image:"Post_image__fE1ff",discription:"Post_discription__ygkRU",comments:"Post_comments__cDniO"},u=n(184),c=function(e){return(0,u.jsxs)("div",{className:o.post,children:[(0,u.jsx)("div",{className:o.image,children:(0,u.jsx)("img",{src:e.post.image,alt:"post"})}),(0,u.jsx)("div",{className:o.discription,children:(0,u.jsx)("p",{children:e.post.message})}),(0,u.jsx)("div",{className:o.likesCount,children:(0,u.jsx)("button",{onClick:function(){e.post.liked?e.decreaseLikesCount(e.post.id):e.increaseLikesCount(e.post.id)},children:e.post.likesCount})}),(0,u.jsx)("div",{className:o.comments,children:(0,u.jsx)("div",{children:e.post.comments})}),e.allowChange&&(0,u.jsx)("button",{onClick:function(){e.deletePost(e.post.id)},children:"Delete"})]})},l=i.memo(c),f=n(6859),d=n(885),m=function(e){var t=(0,i.useState)(!1),n=(0,d.Z)(t,2),s=n[0],a=n[1],r=(0,i.useState)(e.status),o=(0,d.Z)(r,2),c=o[0],l=o[1];return(0,u.jsx)(u.Fragment,{children:s?(0,u.jsx)("div",{children:(0,u.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),e.updateUserStatus(c)},onChange:function(e){l(e.currentTarget.value)},type:"text",defaultValue:c})}):(0,u.jsx)("div",{children:(0,u.jsx)("span",{onDoubleClick:function(){e.allowChange&&a(!0)},children:c||"------------"})})})},p=n(6842),g=function(e){var t=(0,p.Z)("",{isEmpty:!0,minLenght:3});return e.allowChange?(0,u.jsxs)("form",{onSubmit:function(t){return e.onSubmit(t)},children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("input",{onBlur:function(e){return t.onBlur(e)},onChange:function(e){return t.onChange(e)},value:t.value,name:"postMessage",type:"text"}),t.isDirty&&t.error&&(0,u.jsx)("div",{style:{color:"red"},children:t.error})]}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{disabled:!t.inputValid,className:r.btn,children:"Add post"})})]}):(0,u.jsx)(u.Fragment,{})},h=function(e){var t=function(t){e.deletePost(t)},n=function(t){e.increaseLikesCount(t)},s=function(t){e.decreaseLikesCount(t)},i=e.posts.map((function(i){return(0,u.jsx)(l,{post:i,deletePost:t,decreaseLikesCount:s,increaseLikesCount:n,allowChange:e.allowChange},i.id)}));return(0,u.jsxs)("main",{className:r.main,children:[(0,u.jsx)("div",{className:r.main_img,children:(0,u.jsx)("img",{src:e.profile.photos.large||f,alt:"main-img"})}),(0,u.jsx)("div",{className:r.name,children:e.profile.fullName}),(0,u.jsx)(m,{status:e.status,updateUserStatus:e.updateUserStatus,allowChange:e.allowChange}),(0,u.jsx)(g,{onSubmit:function(t){t.preventDefault(),e.addPost(t.target.postMessage.value)},allowChange:e.allowChange}),(0,u.jsx)("div",{className:r.posts,children:i})]})},x=n(6434),j=n(6669),v=n(5666),_=n(6871),C=n(7781),P=function(e){return e.profilePage.posts},k=function(e){return e.profilePage.newPostMessage},Z=function(e){return e.profilePage.isFetching},w=function(e){return e.profilePage.status},S=function(e){return e.profilePage.profile},b=function(e){return e.auth.id},L=n(4041),N=(0,C.qC)((0,x.$j)((function(e){return{posts:P(e),newPostMessage:k(e),isFetching:Z(e),isAuth:(0,L.O)(e),status:w(e),profile:S(e),id:b(e)}}),{addPost:a.q2,deletePost:a.fR,increaseLikesCount:a.dk,decreaseLikesCount:a.D8,requestProfile:a.tg,getUserStatus:a.Tq,updateUserStatus:a.OL}),v.N,(function(e){return function(t){var n=(0,_.TH)(),i=(0,_.s0)(),a=(0,_.UO)();return(0,u.jsx)(e,(0,s.Z)((0,s.Z)({},t),{},{router:{location:n,navigate:i,params:a}}))}}))((function(e){var t=e.router.params.userId,n=!1,a=e.requestProfile,r=e.getUserStatus;return t||(t=e.id,n=!0),(0,i.useEffect)((function(){a(t),r(t)}),[t,a,r]),(0,u.jsx)(u.Fragment,{children:e.isFetching?(0,u.jsx)(j.Z,{}):(0,u.jsx)(h,(0,s.Z)((0,s.Z)({},e),{},{allowChange:n}))})}))},5666:function(e,t,n){n.d(t,{N:function(){return c}});var s=n(8683),i=n(6434),a=n(6871),r=n(4041),o=n(184),u=function(e){return{isAuth:(0,r.O)(e)}},c=function(e){return(0,i.$j)(u)((function(t){return t.isAuth?(0,o.jsx)(e,(0,s.Z)({},t)):(0,o.jsx)(a.Fg,{replace:!0,to:"/login"})}))}}}]);
//# sourceMappingURL=189.44f41ac3.chunk.js.map