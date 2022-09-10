"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61228],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81753:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Continuous Delivery",weight:3},s=void 0,u={unversionedId:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery",id:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery",title:"Continuous Delivery",description:"As of Rancher v2.5, Fleet comes preinstalled in Rancher, and as of Rancher v2.6, Fleet can no longer be fully disabled. However, the Fleet feature for GitOps continuous delivery may be disabled using the continuous-delivery feature flag.",source:"@site/docs/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features",slug:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery",permalink:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery.md",tags:[],version:"current",lastUpdatedAt:1662781572,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Continuous Delivery",weight:3},sidebar:"tutorialSidebar",previous:{title:"UI for Istio Virtual Services and Destination Rules",permalink:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/istio-traffic-management-features"},next:{title:"Opening Ports with firewalld",permalink:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld"}},d={},c=[],p={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As of Rancher v2.5, ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet")," comes preinstalled in Rancher, and as of Rancher v2.6, Fleet can no longer be fully disabled. However, the Fleet feature for GitOps continuous delivery may be disabled using the ",(0,i.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," feature flag."),(0,i.kt)("p",null,"To enable or disable this feature, refer to the instructions on ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/enable-experimental-features"},"the main page about enabling experimental features.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment Variable Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"continuous-delivery")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"This flag disables the GitOps continuous delivery feature of Fleet.")))),(0,i.kt)("p",null,"If Fleet was disabled in Rancher v2.5.x, it will become enabled if Rancher is upgraded to v2.6.x. Only the continuous delivery part of Fleet can be disabled. When ",(0,i.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," is disabled, the ",(0,i.kt)("inlineCode",{parentName:"p"},"gitjob")," deployment is no longer deployed into the Rancher server's local cluster, and ",(0,i.kt)("inlineCode",{parentName:"p"},"continuous-delivery")," is not shown in the Rancher UI."))}f.isMDXComponent=!0}}]);