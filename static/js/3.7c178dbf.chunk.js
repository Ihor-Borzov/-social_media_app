(this.webpackJsonpmuchoppp=this.webpackJsonpmuchoppp||[]).push([[3],{292:function(e,t,o){e.exports={aboutUser:"ProfileInfo_aboutUser__m_JrV",wrapper:"ProfileInfo_wrapper__3HMwr",userImgWrapper:"ProfileInfo_userImgWrapper__3ewxk",photoUpload:"ProfileInfo_photoUpload__26i6Y",inputFile:"ProfileInfo_inputFile__2LEOq",profileStatus:"ProfileInfo_profileStatus__3U1HC",userInfo:"ProfileInfo_userInfo__2z2Q-",editButton:"ProfileInfo_editButton___LMnb",fullName:"ProfileInfo_fullName__1VaUt",aboutMe:"ProfileInfo_aboutMe__128uz",lookingForAJob:"ProfileInfo_lookingForAJob__1nDc6",JobDescription:"ProfileInfo_JobDescription__26Nsg",item_social:"ProfileInfo_item_social__1alaM",error:"ProfileInfo_error__zZOLs"}},293:function(e,t,o){e.exports={content:"Profile_content__2ZW2I"}},294:function(e,t,o){e.exports={profileDataForm:"ProfileDataForm_profileDataForm__2QzaJ",lookingForAJob:"ProfileDataForm_lookingForAJob__3U0U-",contacts:"ProfileDataForm_contacts__g_BqR",contact_item:"ProfileDataForm_contact_item__9Jqug",buttons:"ProfileDataForm_buttons__Uq9s6",submitButton:"ProfileDataForm_submitButton__1iMTA",discardButton:"ProfileDataForm_discardButton__GbmcH"}},295:function(e,t,o){e.exports={posts:"MyPosts_posts__3A-t5"}},296:function(e,t,o){e.exports={item:"Post_item__2LN1y",pick:"Post_pick__3KbtI",receivedText:"Post_receivedText__3NaxA"}},301:function(e,t,o){"use strict";o.r(t);var s=o(3),c=o(26),r=o(29),a=o(27),n=o(1),i=o.n(n),l=o(14),u=o(7),b=o(11),j=o(0),d=o(64),f=o(293),p=o.n(f),m=o(28),h=o(122),O=o(101),_=o(292),x=o.n(_),g={facebook:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png",instagram:"https://tbrsteakhouse.com/wp-content/uploads/2018/11/instagram-colourful-icon.png",youtube:"https://cdn.icon-icons.com/icons2/1907/PNG/512/iconfinder-youtube-4555888_121363.png",website:"http://cdn.onlinewebfonts.com/svg/img_504359.png",github:"https://cdn-icons-png.flaticon.com/512/25/25231.png"};var P=function(e){var t=e.contactValue,o=e.contactTitle;return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:g[o],alt:"social media links"})})})},v=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:x.a.fullName,children:[" ",e.userProfile.fullName]}),Object(j.jsxs)("div",{className:x.a.aboutMe,children:["  ",Object(j.jsx)("div",{children:e.userProfile.aboutMe}),"  "]}),Object(j.jsxs)("div",{className:x.a.lookingForAJob,children:["Looking for a job: ",e.userProfile.lookingForAJob?Object(j.jsx)("span",{style:{color:"green"},children:"yes"}):Object(j.jsx)("span",{children:"no"}),"  "]}),Object(j.jsxs)("div",{className:x.a.JobDescription,children:[" ",e.userProfile.lookingForAJobDescription?"my professional skills: ".concat(e.userProfile.lookingForAJobDescription," "):null]}),Object(j.jsxs)("ul",{className:x.a.item_social,children:[Object(j.jsx)("b",{children:"Contacts : "}),Object.keys(e.userProfile.contacts).map((function(t){return e.userProfile.contacts[t]?(console.log(e.userProfile.contacts[t]),Object(j.jsx)(P,{contactTitle:t,contactValue:e.userProfile.contacts[t]},t)):null}))]}),e.isOwner&&Object(j.jsx)("button",{className:x.a.editButton,onClick:function(){e.setEditMode(!0)},children:"Edit"})]})},N=o(124),k=o(45),I=o(294),F=o.n(I),y=Object(N.a)({form:"profileDataA"})((function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,className:F.a.profileDataForm,children:[e.error&&Object(j.jsxs)("div",{style:{color:"red"},children:[" ",e.error]}),Object(j.jsx)("div",{children:Object(k.c)("Full name","fullName",[],k.a)}),Object(j.jsx)("div",{children:Object(k.c)("About me","aboutMe",[],k.b)}),Object(j.jsxs)("div",{className:F.a.lookingForAJob,children:["Looking for a job: ",Object(k.c)("","lookingForAJob",[],k.a,{type:"checkbox"})," "]}),Object(j.jsxs)("div",{children:[Object(k.c)("My professional skills","lookingForAJobDescription",[],k.b)," "]}),Object(j.jsxs)("ul",{className:F.a.contacts,children:[Object(j.jsx)("b",{children:"Contacts : "}),Object.keys(e.userProfile.contacts).map((function(e){return g[e]?Object(j.jsx)("div",{className:F.a.contact_item,children:Object(k.c)("".concat(e),"contacts.".concat(e),[],k.a)},e):null}))]}),Object(j.jsxs)("div",{className:F.a.buttons,children:[Object(j.jsx)("button",{className:F.a.submitButton,children:"Submit"}),Object(j.jsx)("div",{className:F.a.discardButton,onClick:function(){e.setEditMode(!1)},children:"Discard changes"})]})]})})),D=function(e){var t=Object(n.useState)(!1),o=Object(m.a)(t,2),s=o[0],c=o[1],r=Object(n.useState)(e.status),a=Object(m.a)(r,2),i=a[0],l=a[1];Object(n.useEffect)((function(){l(e.status)}),[e.status]);return Object(j.jsxs)("div",{className:c.status,children:[!s&&Object(j.jsx)("span",{onDoubleClick:function(){c(!0)},children:e.status?"Status : ".concat(e.status):"-----"}),s&&Object(j.jsx)("input",{autoFocus:!0,value:i,onBlur:function(){c(!1),e.updateStatus(i)},onChange:function(e){l(e.target.value)}})]})};var S=function(e){var t=Object(n.useState)(!1),o=Object(m.a)(t,2),c=(o[0],o[1]),r=Object(n.useState)(!1),a=Object(m.a)(r,2),l=a[0],u=a[1],b=i.a.createRef(),d=function(){setTimeout((function(){console.log("mouse out"),c(!1)}),3e3)};return e.userProfile?Object(j.jsx)("div",{className:x.a.aboutUser,children:Object(j.jsxs)("div",{className:x.a.wrapper,children:[e.errorFlag&&Object(j.jsx)("div",{className:x.a.error,children:"An error occurred in data fetching"}),Object(j.jsxs)("div",{className:x.a.userImgWrapper,ref:b,children:[e.isFetching?Object(j.jsx)(O.a,{}):Object(j.jsx)("img",{src:null!=e.userProfile.photos.large?e.userProfile.photos.large:h.a,alt:"avatar"}),e.isOwner&&Object(j.jsx)("label",{className:x.a.photoUpload,children:Object(j.jsx)("input",{className:x.a.inputFile,type:"file",onChange:function(t){!function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}(t)},onClick:function(){console.log("remove listener"),b.current.removeEventListener("mouseout",d)}})})]}),Object(j.jsxs)("div",{className:x.a.profileStatus,children:["  ",Object(j.jsx)(D,{status:e.status,updateStatus:e.updateStatus}),"    "]}),Object(j.jsx)("div",{className:x.a.userInfo,children:l?Object(j.jsx)(y,Object(s.a)(Object(s.a)({},e),{},{initialValues:e.userProfile,onSubmit:function(t){e.saveProfile(t).then((function(){u(!1)})).catch((function(e){console.log(e)}))},setEditMode:u})):Object(j.jsx)(v,Object(s.a)(Object(s.a)({},e),{},{setEditMode:u}))})]})}):Object(j.jsx)(O.a,{})},A=o(88),J=o(47),w=o(295),M=o.n(w),U=o(296),C=o.n(U);var B=function(e){return Object(j.jsxs)("div",{className:C.a.item,children:[Object(j.jsx)("div",{className:C.a.pick,children:Object(j.jsx)("img",{src:"https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_500x500_$&$product=PartyCity/P880795",alt:"Post"})}),Object(j.jsxs)("div",{className:C.a.receivedText,children:[e.message,"                      "]}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{children:"LIKES  "+e.likes})})]})};var z=Object(J.a)(10),E=Object(N.a)({form:"NewPost"})((function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsxs)("div",{children:["  ",Object(j.jsx)(A.a,{name:"myPostText",component:k.b,validate:[J.b,z],placeholder:"your comment here"}),"   "]}),Object(j.jsx)("button",{children:"Add post"})]})})),T=function(e){var t=e.state.postsData.map((function(e){return Object(j.jsx)(B,{likes:e.likes,message:e.message},e.likes)}));return Object(j.jsxs)("div",{className:M.a.myPosts,children:[Object(j.jsx)("div",{children:Object(j.jsx)(E,{onSubmit:function(t){e.addPost(t.myPostText)}})}),Object(j.jsx)("div",{className:M.a.posts,children:t})]})},L=Object(l.b)((function(e){return{state:e.myPostsPage}}),(function(e){return{addPost:function(t){e(Object(d.a)(t))}}}))(T);var q=function(e){return Object(j.jsxs)("div",{className:p.a.content,children:["  ",Object(j.jsx)(S,Object(s.a)({},e)),Object(j.jsx)(L,{})]})},V=function(e){Object(r.a)(o,e);var t=Object(a.a)(o);function o(){var e;Object(c.a)(this,o);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).refreshProfile=function(){var t;(t=!e.props.match||isNaN(e.props.match.params.userId)?e.props.authorizedId?e.props.authorizedId:null:e.props.match.params.userId)&&(e.props.getUserProfile(t),e.props.getStatus(t))},e.componentDidMount=function(){e.refreshProfile()},e.componentDidUpdate=function(t,o,s){e.props.match&&e.props.match.params.userId!==t.match.params.userId&&e.refreshProfile()},e.render=function(){return null!==e.props.authorizedId||"null"!==e.props.match.params.userId&&!isNaN(e.props.match.params.userId)?Object(j.jsx)(q,Object(s.a)(Object(s.a)({},e.props),{},{isOwner:+e.props.match.params.userId===e.props.authorizedId})):Object(j.jsx)(u.a,{to:"/login"})},e}return o}(i.a.Component);t.default=Object(b.d)(Object(l.b)((function(e){return{userProfile:e.myPostsPage.userProfile,isAuth:e.auth.isAuth,status:e.myPostsPage.status,authorizedId:e.auth.id,isFetching:e.myPostsPage.isFetching,errorFlag:e.myPostsPage.errorFlag}}),{getUserProfile:d.d,getStatus:d.c,updateStatus:d.h,savePhoto:d.e,saveProfile:d.f}),(function(e){return function(t){var o=Object(u.g)("/profile/:userId");return Object(j.jsx)(e,Object(s.a)(Object(s.a)({},t),{},{match:o}))}}))(V)}}]);
//# sourceMappingURL=3.7c178dbf.chunk.js.map