"use strict";(self.webpackChunkiamsashrika=self.webpackChunkiamsashrika||[]).push([[643],{5124:(t,e,a)=>{a.r(e),a.d(e,{default:()=>A});a(6540);var n=a(4164),r=a(4586),i=a(1213),s=a(7559),o=a(6535),l=a(7713),c=a(1463),d=a(3892),m=a(5260),g=a(6676),u=a(4848);function h(t){const e=(0,g.k)(t);return(0,u.jsx)(m.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}function p(t){const{metadata:e}=t,{siteConfig:{title:a}}=(0,r.A)(),{blogDescription:n,blogTitle:s,permalink:o}=e,l="/"===o?a:s;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.be,{title:l,description:n}),(0,u.jsx)(c.A,{tag:"blog_posts_list"})]})}function x(t){const{metadata:e,items:a,sidebar:n}=t;return(0,u.jsxs)(o.A,{sidebar:n,children:[(0,u.jsx)(d.A,{items:a}),(0,u.jsx)(l.A,{metadata:e})]})}function A(t){return(0,u.jsxs)(i.e3,{className:(0,n.A)(s.G.wrapper.blogPages,s.G.page.blogListPage),children:[(0,u.jsx)(p,{...t}),(0,u.jsx)(h,{...t}),(0,u.jsx)(x,{...t})]})}},7713:(t,e,a)=>{a.d(e,{A:()=>s});a(6540);var n=a(1312),r=a(9022),i=a(4848);function s(t){const{metadata:e}=t,{previousPage:a,nextPage:s}=e;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,i.jsx)(r.A,{permalink:a,title:(0,i.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),s&&(0,i.jsx)(r.A,{permalink:s,title:(0,i.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(t,e,a)=>{a.d(e,{A:()=>s});a(6540);var n=a(7131),r=a(4651),i=a(4848);function s(t){let{items:e,component:a=r.A}=t;return(0,i.jsx)(i.Fragment,{children:e.map((t=>{let{content:e}=t;return(0,i.jsx)(n.i,{content:e,children:(0,i.jsx)(a,{children:(0,i.jsx)(e,{})})},e.metadata.permalink)}))})}},6676:(t,e,a)=>{a.d(e,{k:()=>d,J:()=>m});var n=a(6025),r=a(4586),i=a(6803);var s=a(7131);const o=t=>new Date(t).toISOString();function l(t){const e=t.map(g);return{author:1===e.length?e[0]:e}}function c(t,e,a){return t?{image:u({imageUrl:e(t,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(t){const{siteConfig:e}=(0,r.A)(),{withBaseUrl:a}=(0,n.h)(),{metadata:{blogDescription:i,blogTitle:s,permalink:d}}=t,m=`${e.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:s,description:i,blogPost:t.items.map((t=>function(t,e,a){const{assets:n,frontMatter:r,metadata:i}=t,{date:s,title:d,description:m,lastUpdatedAt:g}=i,u=n.image??r.image,h=r.keywords??[],p=`${e.url}${i.permalink}`,x=g?o(g):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:m,datePublished:s,...x?{dateModified:x}:{},...l(i.authors),...c(u,a,d),...h?{keywords:h}:{}}}(t.content,e,a)))}}function m(){const t=function(){const t=(0,i.A)(),e=t?.data?.blogMetadata;if(!e)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return e}(),{assets:e,metadata:a}=(0,s.e)(),{siteConfig:d}=(0,r.A)(),{withBaseUrl:m}=(0,n.h)(),{date:g,title:u,description:h,frontMatter:p,lastUpdatedAt:x}=a,A=e.image??p.image,b=p.keywords??[],f=x?o(x):void 0,v=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:u,name:u,description:h,datePublished:g,...f?{dateModified:f}:{},...l(a.authors),...c(A,m,u),...b?{keywords:b}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${t.blogBasePath}`,name:t.blogTitle}}}function g(t){return{"@type":"Person",...t.name?{name:t.name}:{},...t.title?{description:t.title}:{},...t.url?{url:t.url}:{},...t.email?{email:t.email}:{},...t.imageURL?{image:t.imageURL}:{}}}function u(t){let{imageUrl:e,caption:a}=t;return{"@type":"ImageObject","@id":e,url:e,contentUrl:e,caption:a}}},6517:(t,e,a)=>{a.d(e,{A:()=>i});a(6540);var n=a(4164),r=a(4848);const i=t=>{let{className:e,style:a,children:i,textAlign:s,variant:o,italic:l=!1,noDecoration:c=!1,transform:d,breakWord:m=!1,truncate:g=!1,weight:u}=t;const h=s?`text--${s}`:"",p=o?`text--${o}`:"",x=l?"text--italic":"",A=c?"text-no-decoration":"",b=d?`text--${d}`:"",f=m?"text--break":"",v=g?"text--truncate":"",j=u?`text--${u}`:"";return(0,r.jsx)("div",{className:(0,n.A)("card__footer",e,h,b,p,x,A,f,v,j),style:a,children:i})}},1827:(t,e,a)=>{a.d(e,{A:()=>s});a(6540);var n=a(4164),r=a(6025),i=a(4848);const s=t=>{let{className:e,style:a,cardImageUrl:s,alt:o,title:l}=t;const c=(0,r.A)(s);return(0,i.jsx)("img",{className:(0,n.A)("card__image",e),style:a,src:c,alt:o,title:l})}},3863:(t,e,a)=>{a.d(e,{A:()=>i});a(6540);var n=a(4164),r=a(4848);const i=t=>{let{className:e,style:a,children:i,shadow:s}=t;const o=s?`item shadow--${s}`:"";return(0,r.jsx)("div",{className:(0,n.A)("card",e,o),style:a,children:i})}},6239:(t,e,a)=>{a.d(e,{A:()=>i});a(6540);var n=a(4164),r=a(4848);function i(t){let{children:e,className:a,style:i}=t;return(0,r.jsx)("div",{className:(0,n.A)("col",a),style:i,children:e})}},8240:(t,e,a)=>{a.d(e,{A:()=>i});a(6540);var n=a(4164),r=a(4848);function i(t){let{children:e,className:a,style:i}=t;return(0,r.jsx)("div",{className:"col-container center",children:(0,r.jsx)("div",{className:(0,n.A)("row",a),style:i,children:e})})}},7879:(t,e,a)=>{a.d(e,{A:()=>u});var n=a(7172),r=a(8240),i=a(6239),s=(a(6540),a(3863)),o=a(4164),l=a(4848);const c=t=>{let{className:e,style:a,children:n,textAlign:r,variant:i,italic:s=!1,noDecoration:c=!1,transform:d,breakWord:m=!1,truncate:g=!1,weight:u}=t;const h=r?`text--${r}`:"",p=i?`text--${i}`:"",x=s?"text--italic":"",A=c?"text-no-decoration":"",b=d?`text--${d}`:"",f=m?"text--break":"",v=g?"text--truncate":"",j=u?`text--${u}`:"";return(0,l.jsx)("div",{className:(0,o.A)("card__body",e,h,b,p,x,A,f,v,j),style:a,children:n})};var d=a(6517);const m=t=>{let{className:e,style:a,children:n,textAlign:r,variant:i,italic:s=!1,noDecoration:c=!1,transform:d,breakWord:m=!1,truncate:g=!1,weight:u}=t;const h=r?`text--${r}`:"",p=i?`text--${i}`:"",x=s?"text--italic":"",A=c?"text-no-decoration":"",b=d?`text--${d}`:"",f=m?"text--break":"",v=g?"text--truncate":"",j=u?`text--${u}`:"";return(0,l.jsx)("div",{className:(0,o.A)("card__header",e,h,b,p,x,A,f,v,j),style:a,children:n})};var g=a(1827);const u={...n.A,Card:s.A,CardHeader:m,CardBody:c,CardFooter:d.A,CardImage:g.A,Columns:r.A,Column:i.A}}}]);