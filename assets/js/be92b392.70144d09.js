"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3776],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||l;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),l="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),c=a(67392),i=a(7094),s=a(12466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a,o=e.lazy,d=e.block,h=e.defaultValue,m=e.values,f=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,c.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===h?h:null!=(t=null!=h?h:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),w=N.tabGroupChoices,C=N.setTabGroupChoices,A=(0,r.useState)(v),E=A[0],T=A[1],O=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var M=w[f];null!=M&&M!==E&&b.some((function(e){return e.value===M}))&&T(M)}var x=function(e){var t=e.currentTarget,a=O.indexOf(t),n=b[a].value;n!==E&&(_(t),T(n),null!=f&&C(f,String(n)))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=O.indexOf(e.currentTarget)+1;a=null!=(n=O[r])?n:O[0];break;case"ArrowLeft":var l,o=O.indexOf(e.currentTarget)-1;a=null!=(l=O[o])?l:O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},b.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function h(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},13040:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(65488),c=a(85162),i=["components"],s={title:"Installing the Adapter",weight:2},u=void 0,p={unversionedId:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter",id:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter",title:"Installing the Adapter",description:"Important: If you are attempting to re-install the adapter, you may experience errant out-of-compliance messages for up to an hour.",source:"@site/docs/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter.md",sourceDirName:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace",slug:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter.md",tags:[],version:"current",lastUpdatedAt:1662781572,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Installing the Adapter",weight:2},sidebar:"tutorialSidebar",previous:{title:"AWS Marketplace Integration",permalink:"/pages-for-subheaders/aws-cloud-marketplace"},next:{title:"Uninstalling The Adapter",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter"}},d={},h=[{value:"1. Gain Access to the Local Cluster",id:"1-gain-access-to-the-local-cluster",level:3},{value:"2. Create the Adapter Namespace",id:"2-create-the-adapter-namespace",level:3},{value:"3. Create Certificate Secrets",id:"3-create-certificate-secrets",level:3},{value:"4. Install the Chart",id:"4-install-the-chart",level:3},{value:"5. Managing Certificate Updates",id:"5-managing-certificate-updates",level:3}],m={toc:h};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important:")," If you are attempting to re-install the adapter, you may experience errant out-of-compliance messages for up to an hour.")),(0,l.kt)("h3",{id:"1-gain-access-to-the-local-cluster"},"1. Gain Access to the Local Cluster"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Only admin users should have access to the local cluster. Because the CSP adapter must be installed in the local cluster, this installation must be carried out by an admin user.")),(0,l.kt)("p",null,"First, click on the local cluster and download a kubeconfig token. You can then configure your CLI to use this new token with the following command, replacing ",(0,l.kt)("inlineCode",{parentName:"p"},"$TOKEN_PATH")," with the path on your filesystem to the downloaded token:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=$TOKEN_PATH\n")),(0,l.kt)("h3",{id:"2-create-the-adapter-namespace"},"2. Create the Adapter Namespace"),(0,l.kt)("p",null,"Create the namespace that the adapter will be installed in."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns cattle-csp-adapter-system\n")),(0,l.kt)("h3",{id:"3-create-certificate-secrets"},"3. Create Certificate Secrets"),(0,l.kt)("p",null,"The adapter requires access to the root CA that Rancher is using to communicate with the Rancher server. You can read more about which certificate options Rancher supports in the ",(0,l.kt)("a",{parentName:"p",href:"/reference-guides/installation-references/helm-chart-options"},"chart options page"),"."),(0,l.kt)("p",null,"If your Rancher install uses a certificate signed by a recognized Certificate Authority such as Let's Encrypt, then you can safely skip to ",(0,l.kt)("a",{parentName:"p",href:"#4-install-the-chart"},"Step 4"),"."),(0,l.kt)("p",null,"However, if your Rancher install uses a custom certificate such as a Rancher-generated certificate or one signed by a private Certificate Authority, you will need to provide the certificate for this authority in PEM-encoded format so that the adapter can communicate with Rancher."),(0,l.kt)("p",null,"First, retrieve the certificate that Rancher is using and place in a file named ",(0,l.kt)("inlineCode",{parentName:"p"},"ca-additional.pem"),". If you are using the Rancher-generated certs option, this can be done with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl get secret tls-rancher -n cattle-system -o jsonpath="{.data.tls\\.crt}" | base64 -d  >> ca-additional.pem\n')),(0,l.kt)("p",null,"Then, create a secret which uses this cert:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-csp-adapter-system create secret generic tls-ca-additional --from-file=ca-additional.pem\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important:")," Do not change the names of the file or of the created secret. Making changes to these values may result in errors when the adapter runs.")),(0,l.kt)("h3",{id:"4-install-the-chart"},"4. Install the Chart"),(0,l.kt)("p",null,"First, add the ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher/charts")," repo using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add rancher-charts https://charts.rancher.io\n")),(0,l.kt)("p",null,"Next, install the CSP adapter. You must specify several values, including the account number, and the name of the role created in the prerequisites."),(0,l.kt)("p",null,"For the below instructions, replace ",(0,l.kt)("inlineCode",{parentName:"p"},"$MY_ACC_NUM")," with your AWS account number and ",(0,l.kt)("inlineCode",{parentName:"p"},"$MY_ROLE_NAME")," with the name of the role created in the prerequisites."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),' If you use shell variables, do not specify quotation marks. For example, MY_ACC_NUM=123456789012 will work, but MY_ACC_NUM="123456789012" will fail.')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Accounts using the AWS Marketplace listing for the EU and the UK will need to specify an additional ",(0,l.kt)("inlineCode",{parentName:"p"},"--set image.repository=rancher/rancher-csp-adapter-eu")," option. To see if your account needs this option when installing the adapter, refer to the usage instructions of the marketplace listing.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," It is important that you follow the instructions below exactly. In particular, the command to install version 1.0.1 of the adapter (by using --set image.tag=v1.0.1) is key to ensure that node counts are accurate.")),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"Let's Encrypt/ Public Certificate Authority",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter --namespace cattle-csp-adapter-system --set aws.enabled=true --set aws.roleName=$MY_ROLE_NAME --set-string aws.accountNumber=$MY_ACC_NUM --set image.tag=v1.0.1\n")),(0,l.kt)("p",null,"  Alternatively, you can use a ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," and specify options like below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'image:\ntag: v1.0.1\naws:\nenabled: true\naccountNumber: "$MY_ACC_NUM"\nroleName: $MY_ROLE_NAME\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," The account number needs to be specified in a string format, like the above, or the installation will fail.")),(0,l.kt)("p",null,"  You can then install the adapter with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter -f values.yaml\n"))),(0,l.kt)(c.Z,{value:"Private CA Authority / Rancher-generated Certificates",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter --namespace cattle-csp-adapter-system --set aws.enabled=true --set aws.roleName=$MY_ROLE_NAME --set-string aws.accountNumber=$MY_ACC_NUM --set additionalTrustedCAs=true --set image.tag=v1.0.1\n")),(0,l.kt)("p",null,"  Alternatively, you can use a ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," and specify options the below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'image:\ntag: v1.0.1\naws:\nenabled: true\naccountNumber: "$MY_ACC_NUM"\nroleName: $MY_ROLE_NAME\nadditionalTrustedCAs: true\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," The account number needs to be specified in a string format, like the above, or the installation will fail.")),(0,l.kt)("p",null,"  You can then install the adapter with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter -f values.yaml\n")))),(0,l.kt)("h3",{id:"5-managing-certificate-updates"},"5. Managing Certificate Updates"),(0,l.kt)("p",null,"If you had to create a secret storing a custom cert in ",(0,l.kt)("a",{parentName:"p",href:"#3-create-certificate-secrets"},"Step 3"),", you will need to update this secret over time as the certificate is rotated."),(0,l.kt)("p",null,"First, delete the original secret in the cattle-csp-adapter-system namespace, using the below command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete secret tls-ca-additional -n cattle-csp-adapter-system\n")),(0,l.kt)("p",null,"Then, follow the original installation steps in ",(0,l.kt)("a",{parentName:"p",href:"#3-create-certificate-secrets"},"Step 3")," to replace the content of the secret with the updated value."),(0,l.kt)("p",null,"Finally, restart the rancher-csp-adapter deployment to ensure that the updated value is made available to the adapter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl rollout restart deploy rancher-csp-adapter -n cattle-csp-adapter-system\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," There are methods such as cert-manager's ",(0,l.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/projects/trust/"},"trust operator")," which can help reduce the number of manual rotation tasks over time. While these options are not officially supported, they may be useful to users wishing to automate some of these tasks.")))}f.isMDXComponent=!0}}]);