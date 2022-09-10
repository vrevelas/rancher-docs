"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73282],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31868:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Rancher's CI/CD Pipelines",description:"Use Rancher\u2019s CI/CD pipeline to automatically checkout code, run builds or scripts, publish Docker images, and deploy software to users",weight:4e3,aliases:["/rancher/v2.0-v2.4/en/concepts/ci-cd-pipelines/","/rancher/v2.0-v2.4/en/tasks/pipelines/","/rancher/v2.0-v2.4/en/tools/pipelines/configurations/"]},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",title:"Rancher's CI/CD Pipelines",description:"Use Rancher\u2019s CI/CD pipeline to automatically checkout code, run builds or scripts, publish Docker images, and deploy software to users",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects",slug:"/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662781572,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Rancher's CI/CD Pipelines",description:"Use Rancher\u2019s CI/CD pipeline to automatically checkout code, run builds or scripts, publish Docker images, and deploy software to users",weight:4e3,aliases:["/rancher/v2.0-v2.4/en/concepts/ci-cd-pipelines/","/rancher/v2.0-v2.4/en/tasks/pipelines/","/rancher/v2.0-v2.4/en/tools/pipelines/configurations/"]},sidebar:"tutorialSidebar",previous:{title:"Namespaces",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces"},next:{title:"Pod Security Policies",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies"}},p={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using Rancher, you can integrate with a GitHub repository to setup a continuous integration (CI) pipeline."),(0,o.kt)("p",null,"After configuring Rancher and GitHub, you can deploy containers running Jenkins to automate a pipeline execution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build your application from code to image."),(0,o.kt)("li",{parentName:"ul"},"Validate your builds."),(0,o.kt)("li",{parentName:"ul"},"Deploy your build images to your cluster."),(0,o.kt)("li",{parentName:"ul"},"Run unit tests."),(0,o.kt)("li",{parentName:"ul"},"Run regression tests.")),(0,o.kt)("p",null,"For details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/pipelines"},"pipelines")," section."))}m.isMDXComponent=!0}}]);