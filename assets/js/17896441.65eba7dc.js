"use strict";(self.webpackChunkiamsashrika=self.webpackChunkiamsashrika||[]).push([[401],{1243:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var a=n(4164),s=n(7559),i=n(1754),l=n(9169),o=n(8774),r=n(1312),c=n(6025),d=n(4848);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const x={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function v(e){let{children:t,href:n,isLast:a}=e;const s="breadcrumbs__link";return a?(0,d.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,d.jsx)(o.A,{className:s,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:s,children:t})}function b(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function g(){const e=(0,i.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,a.A)(s.G.docs.docBreadcrumbs,x.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(b,{active:a,index:n,addMicrodata:!!s,children:(0,d.jsx)(v,{href:s,isLast:a,children:t.label})},n)}))]})}):null}},6011:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var a=n(6540),s=n(1213),i=n(9532),l=n(4848);const o=a.createContext(null);function r(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:s,children:t})}function c(){const e=(0,a.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(4164),u=n(4581),h=n(7719);function x(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var v=n(1878),b=n(4267),g=n(7559),p=n(2053),f=n(4336);function j(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,tags:s}=e,i=s.length>0,o=!!(t||n||a);return i||o?(0,l.jsxs)("footer",{className:(0,m.A)(g.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,m.A)("row margin-top--sm",g.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(p.A,{tags:s})})}),o&&(0,l.jsx)(f.A,{className:(0,m.A)("margin-top--sm",g.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a})]}):null}var A=n(1422),N=n(5195),C=n(1312);const _={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function L(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,m.A)("clean-btn",_.tocCollapsibleButton,!t&&_.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(C.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const k={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function T(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:o}=(0,A.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,m.A)(k.tocCollapsible,!i&&k.tocCollapsibleExpanded,n),children:[(0,l.jsx)(L,{collapsed:i,onClick:o}),(0,l.jsx)(A.N,{lazy:!0,className:k.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(N.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const H={tocMobile:"tocMobile_ITEo"};function y(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(T,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(g.G.docs.docTocMobile,H.tocMobile)})}var M=n(7763);function w(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(M.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.G.docs.docTocDesktop})}var I=n(1107),E=n(7910);function B(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,m.A)(g.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(I.A,{as:"h1",children:n})}),(0,l.jsx)(E.A,{children:t})]})}var O=n(1243),V=n(996);const $={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function G(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,u.l)(),a=e.hide_table_of_contents,s=!a&&t.length>0;return{hidden:a,mobile:s?(0,l.jsx)(y,{}):void 0,desktop:!s||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(w,{})}}(),{metadata:{unlisted:a}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,m.A)("col",!n.hidden&&$.docItemCol),children:[a&&(0,l.jsx)(V.A,{}),(0,l.jsx)(v.A,{}),(0,l.jsxs)("div",{className:$.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(O.A,{}),(0,l.jsx)(b.A,{}),n.mobile,(0,l.jsx)(B,{children:t}),(0,l.jsx)(j,{})]}),(0,l.jsx)(x,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function R(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(s.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(G,{children:(0,l.jsx)(n,{})})]})})}},7719:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(1312),s=n(9022),i=n(4848);function l(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(s.A,{...t,subLabel:(0,i.jsx)(a.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(s.A,{...n,subLabel:(0,i.jsx)(a.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(4164),s=n(1312),i=n(7559),l=n(2252),o=n(4848);function r(e){let{className:t}=e;const n=(0,l.r)();return n.badge?(0,o.jsx)("span",{className:(0,a.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(s.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,n)=>{n.d(t,{A:()=>b});n(6540);var a=n(4164),s=n(4586),i=n(8774),l=n(1312),o=n(4070),r=n(7559),c=n(5597),d=n(2252),m=n(4848);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,m.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,m.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=u[e.versionMetadata.banner];return(0,m.jsx)(t,{...e})}function x(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,m.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(i.A,{to:n,onClick:a,children:(0,m.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,s.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,o.HW)(l),b=u??(g=v).docs.find((e=>e.id===g.mainDocId));var g;return(0,m.jsxs)("div",{className:(0,a.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(x,{versionLabel:v.label,to:b.path,onClick:()=>d(v.name)})})]})}function b(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,m.jsx)(v,{className:t,versionMetadata:n}):null}},9022:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),s=n(8774),i=n(4848);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(4848);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,a.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(s.A,{...n,linkClassName:o,linkActiveClassName:r})})}},5195:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(6540),s=n(6342);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var m=n(8774),u=n(4848);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,u.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const x=a.memo(h);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const v=(0,s.p)(),b=c??v.tableOfContents.minHeadingLevel,g=m??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:b,maxHeadingLevel:g});return d((0,a.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:b,maxHeadingLevel:g}}),[o,r,b,g])),(0,u.jsx)(x,{toc:p,className:n,linkClassName:o,...h})}},6133:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164),s=n(8774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=n(4848);function o(e){let{permalink:t,label:n,count:o}=e;return(0,l.jsxs)(s.A,{href:t,className:(0,a.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[n,o&&(0,l.jsx)("span",{children:o})]})}},2053:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(4164),s=n(1312),i=n(6133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var o=n(4848);function r(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.A,{label:t,permalink:n})},n)}))})]})}},996:(e,t,n)=>{n.d(t,{A:()=>h});n(6540);var a=n(4164),s=n(1312),i=n(5260),l=n(4848);function o(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),m=n(7293);function u(e){let{className:t}=e;return(0,l.jsx)(m.A,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,a.A)(t,d.G.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(u,{...e})]})}},6517:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164),s=n(4848);const i=e=>{let{className:t,style:n,children:i,textAlign:l,variant:o,italic:r=!1,noDecoration:c=!1,transform:d,breakWord:m=!1,truncate:u=!1,weight:h}=e;const x=l?`text--${l}`:"",v=o?`text--${o}`:"",b=r?"text--italic":"",g=c?"text-no-decoration":"",p=d?`text--${d}`:"",f=m?"text--break":"",j=u?"text--truncate":"",A=h?`text--${h}`:"";return(0,s.jsx)("div",{className:(0,a.A)("card__footer",t,x,p,v,b,g,f,j,A),style:n,children:i})}},1827:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),s=n(6025),i=n(4848);const l=e=>{let{className:t,style:n,cardImageUrl:l,alt:o,title:r}=e;const c=(0,s.A)(l);return(0,i.jsx)("img",{className:(0,a.A)("card__image",t),style:n,src:c,alt:o,title:r})}},3863:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164),s=n(4848);const i=e=>{let{className:t,style:n,children:i,shadow:l}=e;const o=l?`item shadow--${l}`:"";return(0,s.jsx)("div",{className:(0,a.A)("card",t,o),style:n,children:i})}},6239:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164),s=n(4848);function i(e){let{children:t,className:n,style:i}=e;return(0,s.jsx)("div",{className:(0,a.A)("col",n),style:i,children:t})}},8240:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164),s=n(4848);function i(e){let{children:t,className:n,style:i}=e;return(0,s.jsx)("div",{className:"col-container center",children:(0,s.jsx)("div",{className:(0,a.A)("row",n),style:i,children:t})})}},7879:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(7172),s=n(8240),i=n(6239),l=(n(6540),n(3863)),o=n(4164),r=n(4848);const c=e=>{let{className:t,style:n,children:a,textAlign:s,variant:i,italic:l=!1,noDecoration:c=!1,transform:d,breakWord:m=!1,truncate:u=!1,weight:h}=e;const x=s?`text--${s}`:"",v=i?`text--${i}`:"",b=l?"text--italic":"",g=c?"text-no-decoration":"",p=d?`text--${d}`:"",f=m?"text--break":"",j=u?"text--truncate":"",A=h?`text--${h}`:"";return(0,r.jsx)("div",{className:(0,o.A)("card__body",t,x,p,v,b,g,f,j,A),style:n,children:a})};var d=n(6517);const m=e=>{let{className:t,style:n,children:a,textAlign:s,variant:i,italic:l=!1,noDecoration:c=!1,transform:d,breakWord:m=!1,truncate:u=!1,weight:h}=e;const x=s?`text--${s}`:"",v=i?`text--${i}`:"",b=l?"text--italic":"",g=c?"text-no-decoration":"",p=d?`text--${d}`:"",f=m?"text--break":"",j=u?"text--truncate":"",A=h?`text--${h}`:"";return(0,r.jsx)("div",{className:(0,o.A)("card__header",t,x,p,v,b,g,f,j,A),style:n,children:a})};var u=n(1827);const h={...a.A,Card:l.A,CardHeader:m,CardBody:c,CardFooter:d.A,CardImage:u.A,Columns:s.A,Column:i.A}}}]);