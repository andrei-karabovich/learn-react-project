"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[645],{645:function(e,t,o){o.r(t),o.d(t,{default:function(){return X}});var s=o(1413),n=o(2791),r="Feed_feedBlock__gNC50",i="Feed_feed__xnp2R",a="Feed_newPostInput__hezrY",l="Feed_createPostBlock__Xhy+w",u="Feed_buttonBlock__cHp8k",c="Feed_submitButton__9UEL-",d="Post_post__ebJ9a",f="Post_avatar__JJRQ2",p="Post_postAuthorblock__09Y9C",h="Post_postDetailsBlock__c0dcT",v="Post_likes__LgY5X",x=o(184),j=function(e){var t=e.message,o=e.likes;return(0,x.jsxs)("div",{className:d,children:[(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("img",{className:f,src:"https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"}),(0,x.jsx)("span",{children:"Post Author"})]}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("div",{children:t}),(0,x.jsxs)("div",{className:v,children:[o," \u2665"]})]})]})},m=o(3896),_=o(5646),g=function(e){var t=e.posts,o=e.onPostCreate,s=(0,m.cI)(),n=s.register,d=s.handleSubmit,f=s.reset,p=s.formState.errors,h=t.map((function(e){return(0,x.jsx)(j,{message:e.text,likes:e.likesCount},e.postId)}));return(0,x.jsxs)("div",{className:r,children:[(0,x.jsx)("div",{className:l,children:(0,x.jsxs)("form",{onSubmit:d((function(e){o(e.postText),f()})),children:[(0,x.jsx)(_.o,{type:"textarea",placeholder:"New post",className:a,register:n,name:"postText",validationSchema:{required:!0,maxLength:20},errors:p.postText}),(0,x.jsx)("p",{className:u,children:(0,x.jsx)("input",{type:"submit",value:"Add post",className:c})})]})}),(0,x.jsx)("div",{className:i,children:h})]})},b=o(6508),k=o(8687),N=(0,k.$j)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{onPostCreate:function(t){var o=(0,b.Wl)(t);e(o)}}}))(g),P={feedBlock:"Profile_feedBlock__hXNpv"},S=o(885),I=o(4066),Z="ProfileData_contactItem__mGLBM",F=function(e){var t=e.prop,o=e.value;return(0,x.jsx)("div",{className:Z,children:(0,x.jsxs)("span",{children:[t,": ",o]})})},C=function(e){var t=e.profile;return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{children:["About me: ",t.aboutMe]}),(0,x.jsxs)("div",{children:["Looking for a job: ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&(0,x.jsxs)("div",{children:["Job description: ",t.lookingForAJobDescription]}),Object.keys(t.contacts).map((function(e){var o=t.contacts[e];return(0,x.jsx)(F,{prop:e,value:o})}))]})},A=function(e){var t=e.prop,o=e.value,s=e.register,r=(0,n.useState)(o),i=(0,S.Z)(r,2),a=i[0],l=i[1];return(0,x.jsx)("div",{className:Z,children:(0,x.jsx)(_.o,{label:t+": ",name:"contacts."+t,type:"text",register:s,value:a,onChange:function(e){l(e.target.value)}})})},J=function(e){var t=e.profile,o=e.handleProfileUpdate,r=(0,m.cI)({mode:"all"}),i=r.register,a=r.handleSubmit,l=(r.formState.errors,(0,n.useState)(t)),u=(0,S.Z)(l,2),c=u[0],d=u[1],f=function(e){var o=(0,s.Z)({},t);t[e.target.name]=e.target.value,d(o)};return(0,x.jsxs)("form",{onSubmit:a((function(e){o(e)})),children:[(0,x.jsx)("input",(0,s.Z)((0,s.Z)({},i("userId")),{},{type:"hidden",name:"userId",value:t.userId})),(0,x.jsx)("input",(0,s.Z)((0,s.Z)({},i("fullName")),{},{type:"hidden",name:"fullName",value:t.fullName})),(0,x.jsx)(_.o,{label:"About me: ",name:"aboutMe",type:"text",register:i,value:t.aboutMe,onChange:f}),(0,x.jsx)("label",{for:"lookingForAJob",children:"Looking for a job: "}),(0,x.jsx)("input",(0,s.Z)((0,s.Z)({name:"lookingForAJob"},i("lookingForAJob")),{},{type:"checkbox",checked:c.lookingForAJob,onChange:function(e){d((0,s.Z)((0,s.Z)({},t),{},{lookingForAJob:e.target.checked}))}})),(0,x.jsx)(_.o,{label:"Job Description: ",name:"lookingForAJobDescription",type:"text",register:i,value:t.lookingForAJobDescription,onChange:f}),Object.keys(t.contacts).map((function(e){var o=t.contacts[e];return(0,x.jsx)(A,{prop:e,value:o,register:i})})),(0,x.jsx)("button",{type:"sumbit",children:"Save"})]})},w="ProfileInfo_descriptionBlock__XBXuJ",y="ProfileInfo_avatar__1VFcV",B="ProfileInfo_profileBlock__5SjaS",U="ProfileInfo_userName__IUeFo",z="ProfileStatus_statusInputBlock__RRf5M",D=function(e){var t=(0,n.useState)(!1),o=(0,S.Z)(t,2),s=o[0],r=o[1],i=(0,n.useState)(e.status),a=(0,S.Z)(i,2),l=a[0],u=a[1];(0,n.useEffect)((function(){u(e.status)}),[e.status]);return(0,x.jsx)("div",{children:s?(0,x.jsx)("div",{className:z,children:(0,x.jsx)("input",{autoFocus:!0,onBlur:function(){e.updateStatus(l),r(!1)},value:l,onChange:function(e){u(e.target.value)}})}):(0,x.jsx)("div",{className:z,onDoubleClick:function(){r(!0)},children:(0,x.jsx)("span",{children:""!=e.status?e.status:"---------"})})})},E=o(7781),L=o(6871),R=function(e){return function(t){var o=(0,L.TH)(),n=(0,L.s0)(),r=(0,L.UO)();return(0,x.jsx)(e,(0,s.Z)((0,s.Z)({},t),{},{router:{location:o,navigate:n,params:r}}))}},M=(0,E.qC)(R,(0,k.$j)((function(e){return{status:e.profilePage.status,authorizedUserId:e.auth.id}}),{getStatus:b.lR,updateStatus:b.Nf}))((function(e){return(0,n.useEffect)((function(){var t=e.router.params.userId;t||(t=e.authorizedUserId),e.getStatus(t)}),[e.getStatus]),(0,x.jsx)(D,(0,s.Z)({},e))})),O=function(e){var t=e.profile,o=e.isOwner,s=e.updatePhoto,r=e.updateProfile,i=(0,n.useState)(null),a=(0,S.Z)(i,2),l=a[0],u=a[1],c=(0,n.useState)(!1),d=(0,S.Z)(c,2),f=d[0],p=d[1];if(!t)return(0,x.jsx)(I.Z,{});return(0,x.jsxs)("div",{className:B,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:U,children:t.fullName}),(0,x.jsx)("img",{alt:"avatar",src:t.photos.large?t.photos.large:"https://www.w3schools.com/howto/img_avatar.png",className:y}),o&&(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{type:"file",onChange:function(e){e.target.files&&u(e.target.files[0])}}),(0,x.jsx)("button",{onClick:function(){l&&s(l)},children:"Upload"})]})]}),(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)(M,{}),o&&!f&&(0,x.jsx)("div",{children:(0,x.jsx)("button",{onClick:function(){p(!0)},children:"Edit"})}),f?(0,x.jsx)(J,{profile:t,handleProfileUpdate:function(e){r(e).then((function(){p(!1)}))}}):(0,x.jsx)(C,{profile:t})]})})]})},T=function(e){return(0,x.jsxs)("div",{className:P.content,children:[(0,x.jsx)("div",{children:(0,x.jsx)(O,(0,s.Z)({},e))}),(0,x.jsx)("div",{className:P.feedBlock,children:(0,x.jsx)(N,{})})]})},X=(0,E.qC)(R,(0,k.$j)((function(e){var t,o,s;return{profile:e.profilePage.profile,authorizedUserId:e.auth.id,isOwner:(null===e||void 0===e||null===(t=e.profilePage)||void 0===t||null===(o=t.profile)||void 0===o?void 0:o.userId)===(null===e||void 0===e||null===(s=e.auth)||void 0===s?void 0:s.id)}}),{getProfile:b.Ai,updatePhoto:b.tU,updateProfile:b.ck}))((function(e){var t=function(e){var t=(0,n.useRef)();return(0,n.useEffect)((function(){t.current=e})),t.current}(e.profile);return(0,n.useEffect)((function(){var o,s,n,r=e.router.params.userId;r||(r=e.authorizedUserId),e.profile&&(null===t||void 0===t||null===(o=t.photos)||void 0===o?void 0:o.large)===(null===e||void 0===e||null===(s=e.profile)||void 0===s||null===(n=s.photos)||void 0===n?void 0:n.large)||e.getProfile(r)}),[e.getProfile,e.profile]),(0,x.jsx)(T,(0,s.Z)({},e))}))}}]);
//# sourceMappingURL=645.45aec5a0.chunk.js.map