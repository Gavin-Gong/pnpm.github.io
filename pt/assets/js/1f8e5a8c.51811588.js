"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4563],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=l,v=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(v,o(o({ref:t},s),{},{components:r})):n.createElement(v,o({ref:t},s))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(2848),l=r(9213),a=(r(9496),r(9613)),o=["components"],i={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"cli/why",title:"pnpm why",description:"Shows all packages that depend on the specified package.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/pt/next/cli/why",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"why",title:"pnpm why"},sidebar:"docs",previous:{title:"pnpm outdated",permalink:"/pt/next/cli/outdated"},next:{title:"pnpm run",permalink:"/pt/next/cli/run"}},s={},d=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global",id:"--global",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:d};function f(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Shows all packages that depend on the specified package."),(0,a.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace."),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"Show information in JSON format."),(0,a.kt)("h3",{id:"--long"},"--long"),(0,a.kt)("p",null,"Show verbose output."),(0,a.kt)("h3",{id:"--parseable"},"--parseable"),(0,a.kt)("p",null,"Show parseable output instead of tree view."),(0,a.kt)("h3",{id:"--global"},"--global"),(0,a.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"Only display the dependency tree for packages in ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Only display the dependency tree for packages in ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Ler mais sobre filtra\xe7\xe3o.")))}f.isMDXComponent=!0}}]);