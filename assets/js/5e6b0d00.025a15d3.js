"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[56200],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(r),m=n,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},15991:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Fleet - GitOps at Scale"},s=void 0,p={unversionedId:"pages-for-subheaders/fleet-gitops-at-scale",id:"pages-for-subheaders/fleet-gitops-at-scale",title:"Fleet - GitOps at Scale",description:"Fleet is GitOps at scale. Fleet is designed to manage up to a million clusters. It\u2019s also lightweight enough that it works great for a single cluster too, but it really shines when you get to a large scale. By large scale we mean either a lot of clusters, a lot of deployments, or a lot of teams in a single organization.",source:"@site/docs/pages-for-subheaders/fleet-gitops-at-scale.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/fleet-gitops-at-scale",permalink:"/pages-for-subheaders/fleet-gitops-at-scale",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/fleet-gitops-at-scale.md",tags:[],version:"current",lastUpdatedAt:1662781572,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Fleet - GitOps at Scale"},sidebar:"tutorialSidebar",previous:{title:"Creating a Custom Benchmark Version for Running a Cluster Scan",permalink:"/explanations/integrations-in-rancher/cis-scans/custom-benchmark"},next:{title:"Architecture",permalink:"/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture"}},c={},u=[],h={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Fleet is GitOps at scale. Fleet is designed to manage up to a million clusters. It\u2019s also lightweight enough that it works great for a ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/single-cluster-install/"},"single cluster")," too, but it really shines when you get to a ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/multi-cluster-install/"},"large scale"),". By large scale we mean either a lot of clusters, a lot of deployments, or a lot of teams in a single organization."),(0,o.kt)("p",null,"Fleet is a separate project from Rancher, and can be installed on any Kubernetes cluster with Helm."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#architecture"},"Architecture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#accessing-fleet-in-the-rancher-ui"},"Accessing Fleet in the Rancher UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#windows-support"},"Windows Support")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#github-repository"},"GitHub Repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#use-fleet-behind-a-proxy"},"Use Fleet Behind a Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#helm-chart-dependencies"},"Helm Chart Dependencies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#troubleshooting"},"Troubleshooting")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#documentation"},"Documentation"))),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"For information about how Fleet works, see ",(0,o.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture"},"this page"),"."),(0,o.kt)("h1",{id:"accessing-fleet-in-the-rancher-ui"},"Accessing Fleet in the Rancher UI"),(0,o.kt)("p",null,"Fleet comes preinstalled in Rancher and is managed by the ",(0,o.kt)("strong",{parentName:"p"},"Continuous Delivery")," option in the Rancher UI. For additional information on Continuous Delivery and other Fleet troubleshooting tips, refer ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/troubleshooting/"},"here"),"."),(0,o.kt)("p",null,"Users can leverage continuous delivery to deploy their applications to the Kubernetes clusters in the git repository without any manual operation by following ",(0,o.kt)("strong",{parentName:"p"},"gitops")," practice."),(0,o.kt)("p",null,"Follow the steps below to access Continuous Delivery in the Rancher UI:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Continous Delivery"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your namespace at the top of the menu, noting the following:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"By default, ",(0,o.kt)("strong",{parentName:"p"},"fleet-default")," is selected which includes all downstream clusters that are registered through Rancher.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You may switch to ",(0,o.kt)("strong",{parentName:"p"},"fleet-local"),", which only contains the ",(0,o.kt)("strong",{parentName:"p"},"local")," cluster, or you may create your own workspace to which you may assign and move clusters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can then manage clusters by clicking on ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," on the left navigation bar.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Gitrepos")," on the left navigation bar to deploy the gitrepo into your clusters in the current workspace.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/gitrepo-add/"},"git repository")," and ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/gitrepo-structure/"},"target clusters/cluster group"),". You can also create the cluster group in the UI by clicking on ",(0,o.kt)("strong",{parentName:"p"},"Cluster Groups")," from the left navigation bar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the gitrepo is deployed, you can monitor the application through the Rancher UI."))),(0,o.kt)("h1",{id:"windows-support"},"Windows Support"),(0,o.kt)("p",null,"For details on support for clusters with Windows nodes, see ",(0,o.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support"},"this page"),"."),(0,o.kt)("h1",{id:"github-repository"},"GitHub Repository"),(0,o.kt)("p",null,"The Fleet Helm charts are available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/tag/v0.3.10"},"here"),"."),(0,o.kt)("h1",{id:"using-fleet-behind-a-proxy"},"Using Fleet Behind a Proxy"),(0,o.kt)("p",null,"For details on using Fleet behind a proxy, see ",(0,o.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy"},"this page"),"."),(0,o.kt)("h1",{id:"helm-chart-dependencies"},"Helm Chart Dependencies"),(0,o.kt)("p",null,"In order for Helm charts with dependencies to deploy successfully, you must run a manual command (as listed below), as it is up to the user to fulfill the dependency list. If you do not do this and proceed to clone your repository and run ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install"),", your installation will fail because the dependencies will be missing."),(0,o.kt)("p",null,"The Helm chart in the git repository must include its dependencies in the charts subdirectory. You must either manually run ",(0,o.kt)("inlineCode",{parentName:"p"},"helm dependencies update $chart")," OR run ",(0,o.kt)("inlineCode",{parentName:"p"},"helm dependencies build $chart")," locally, then commit the complete charts directory to your git repository. Note that you will update your commands with the applicable parameters"),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Known Issue"),": clientSecretName and helmSecretName secrets for Fleet gitrepos are not included in the backup nor restore created by the ",(0,o.kt)("a",{parentName:"p",href:"../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher#1-install-the-rancher-backup-operator"},"backup-restore-operator"),". We will update the community once a permanent solution is in place.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Temporary Workaround"),": By default, user-defined secrets are not backed up in Fleet. It is necessary to recreate secrets if performing a disaster recovery restore or migration of Rancher into a fresh cluster. To modify resourceSet to include extra resources you want to backup, refer to docs ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/backup-restore-operator#user-flow"},"here"),"."))),(0,o.kt)("h1",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The Fleet documentation is at ",(0,o.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/"},"https://fleet.rancher.io/"),"."))}m.isMDXComponent=!0}}]);