"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79458],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},77746:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Restoring Rancher",weight:2},c=void 0,l={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",id:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",title:"Restoring Rancher",description:"This page outlines how to perform a restore with Rancher.",source:"@site/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher.md",tags:[],version:"current",lastUpdatedAt:1662781572,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Restoring Rancher",weight:2},sidebar:"tutorialSidebar",previous:{title:"Backing up Rancher",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},next:{title:"Migrating Rancher to a New Cluster",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"}},p={},u=[{value:"Additional Steps for Rollbacks with Rancher v2.6.4+",id:"additional-steps-for-rollbacks-with-rancher-v264",level:3},{value:"Create the Restore Custom Resource",id:"create-the-restore-custom-resource",level:3},{value:"Logs",id:"logs",level:3},{value:"Cleanup",id:"cleanup",level:3},{value:"Known Issues",id:"known-issues",level:3}],h={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page outlines how to perform a restore with Rancher."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Follow the instructions from this page for restoring rancher on the same cluster where it was backed up from. In order to migrate rancher to a new cluster, follow the steps to ",(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"migrate rancher.")),(0,o.kt)("li",{parentName:"ul"},"While restoring rancher on the same setup, the operator will scale down the rancher deployment when restore starts, and it will scale back up the deployment once restore completes. So Rancher will be unavailable during the restore."),(0,o.kt)("li",{parentName:"ul"},"If you need to restore Rancher to a previous version after an upgrade, see the ",(0,o.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"},"rollback documentation."))))),(0,o.kt)("h3",{id:"additional-steps-for-rollbacks-with-rancher-v264"},"Additional Steps for Rollbacks with Rancher v2.6.4+"),(0,o.kt)("p",null,"In Rancher v2.6.4, the cluster-api module has been upgraded from v0.4.4 to v1.0.2 in which the apiVersion of CAPI CRDs are upgraded from ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.x-k8s.io/v1alpha4")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.x-k8s.io/v1beta1"),". This has the effect of causing rollbacks from Rancher v2.6.4 to any previous version of Rancher v2.6.x to fail because the previous version the CRDs needed to roll back are no longer available in v1beta1."),(0,o.kt)("p",null,"To avoid this, the Rancher resource cleanup scripts should be run ",(0,o.kt)("strong",{parentName:"p"},"before")," the restore or rollback is attempted. Specifically, two scripts have been created to assist you: one to clean up the cluster (",(0,o.kt)("inlineCode",{parentName:"p"},"cleanup.sh"),"), and one to check for any Rancher-related resources in the cluster (",(0,o.kt)("inlineCode",{parentName:"p"},"verify.sh"),"). Details on the cleanup script can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher-cleanup"},"rancher/rancher-cleanup repo"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Rancher will be down as the ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanup")," script runs as it deletes the resources created by rancher."))),(0,o.kt)("p",null,"The additional preparations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Follow these ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher-cleanup/blob/main/README.md"},"instructions")," to run the scripts."),(0,o.kt)("li",{parentName:"ol"},"Follow these ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/backups/migrating-rancher/"},"instructions")," to install the rancher-backup Helm chart on the existing cluster and restore the previous state.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Omit Step 3."),(0,o.kt)("li",{parentName:"ol"},"When Step 4 is reached, install the required Rancher v2.6.x version on the local cluster you intend to roll back to.")))),(0,o.kt)("h3",{id:"create-the-restore-custom-resource"},"Create the Restore Custom Resource"),(0,o.kt)("p",null,"A restore is performed by creating a Restore custom resource."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster runs the Rancher server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Rancher Backups > Restores"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the Restore with the form, or with YAML.  For creating the Restore resource using form, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/backup-restore-configuration/restore-configuration"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/backup-restore-configuration/examples"},"examples."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For using the YAML editor, we can click ",(0,o.kt)("strong",{parentName:"p"},"Create > Create from YAML"),". Enter the Restore YAML."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: rancher\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,o.kt)("p",{parentName:"li"},"  For help configuring the Restore, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/backup-restore-configuration/restore-configuration"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/backup-restore-configuration/examples"},"examples."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The rancher-operator scales down the rancher deployment during restore, and scales it back up once the restore completes. The resources are restored in this order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Custom Resource Definitions (CRDs)"),(0,o.kt)("li",{parentName:"ol"},"Cluster-scoped resources"),(0,o.kt)("li",{parentName:"ol"},"Namespaced resources")),(0,o.kt)("h3",{id:"logs"},"Logs"),(0,o.kt)("p",null,"To check how the restore is progressing, you can check the logs of the operator. Run this command to follow the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f\n")),(0,o.kt)("h3",{id:"cleanup"},"Cleanup"),(0,o.kt)("p",null,"If you created the restore resource with kubectl, remove the resource to prevent a naming conflict with future restores."),(0,o.kt)("h3",{id:"known-issues"},"Known Issues"),(0,o.kt)("p",null,"In some cases, after restoring the backup, Rancher logs will show errors similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2021/10/05 21:30:45 [ERROR] error syncing 'c-89d82/m-4067aa68dd78': handler rke-worker-upgrader: clusters.management.cattle.io \"c-89d82\" not found, requeuing\n")),(0,o.kt)("p",null,"This happens because one of the resources that was just restored has finalizers, but the related resources have been deleted so the handler cannot find it."),(0,o.kt)("p",null,"To eliminate the errors, we need to find and delete the resource that causes the error. See more information ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/35050#issuecomment-937968556"},"here")))}d.isMDXComponent=!0}}]);