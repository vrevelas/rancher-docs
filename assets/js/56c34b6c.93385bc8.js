"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[12584],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92299:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"Multi-cluster Apps",weight:2,aliases:["/rancher/v2.x/en/deploy-across-clusters/multi-cluster-apps/"]},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",id:"version-2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",title:"Multi-cluster Apps",description:"As of Rancher v2.5, we now recommend using Fleet for deploying apps across clusters.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps.md",sourceDirName:"how-to-guides/new-user-guides/deploy-apps-across-clusters",slug:"/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",permalink:"/v2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps.md",tags:[],version:"2.5",lastUpdatedAt:1662781572,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Multi-cluster Apps",weight:2,aliases:["/rancher/v2.x/en/deploy-across-clusters/multi-cluster-apps/"]},sidebar:"tutorialSidebar",previous:{title:"Fleet - GitOps at Scale",permalink:"/v2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},next:{title:"Backups and Disaster Recovery",permalink:"/v2.5/pages-for-subheaders/backup-restore-and-disaster-recovery"}},c={},u=[{value:"Targets",id:"targets",level:3},{value:"Upgrades",id:"upgrades",level:3},{value:"Roles",id:"roles",level:3},{value:"Using a questions.yml file",id:"using-a-questionsyml-file",level:3},{value:"Key Value Pairs for Native Helm Charts",id:"key-value-pairs-for-native-helm-charts",level:3},{value:"Members",id:"members",level:3},{value:"Overriding Application Configuration Options for Specific Projects",id:"overriding-application-configuration-options-for-specific-projects",level:3}],m={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"As of Rancher v2.5, we now recommend using ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet")," for deploying apps across clusters.")),(0,i.kt)("p",null,"Typically, most applications are deployed on a single Kubernetes cluster, but there will be times you might want to deploy multiple copies of the same application across different clusters and/or projects. In Rancher, a ",(0,i.kt)("em",{parentName:"p"},"multi-cluster application"),",  is an application deployed using a Helm chart across multiple clusters. With the ability to deploy the same application across multiple clusters, it avoids the repetition of the same action on each cluster, which could introduce user error during application configuration. With multi-cluster applications, you can customize to have the same configuration across all projects/clusters as well as have the ability to change the configuration based on your target project. Since multi-cluster application is considered a single application, it's easy to manage and maintain this application."),(0,i.kt)("p",null,"Any Helm charts from a global catalog can be used to deploy and manage multi-cluster applications."),(0,i.kt)("p",null,"After creating a multi-cluster application, you can program a global DNS entry to make it easier to access the application."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#launching-a-multi-cluster-app"},"Launching a multi-cluster app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multi-cluster-app-configuration-options"},"Multi-cluster app configuration options"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#targets"},"Targets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upgrades"},"Upgrades")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#roles"},"Roles")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#application-configuration-options"},"Application configuration options"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-a-questions-yml-file"},"Using a questions.yml file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#key-value-pairs-for-native-helm-charts"},"Key value pairs for native Helm charts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#members"},"Members")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overriding-application-configuration-options-for-specific-projects"},"Overriding application configuration options for specific projects")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upgrading-multi-cluster-app-roles-and-projects"},"Upgrading multi-cluster app roles and projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multi-cluster-application-management"},"Multi-cluster application management")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#deleting-a-multi-cluster-application"},"Deleting a multi-cluster application"))),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To create a multi-cluster app in Rancher, you must have at least one of the following permissions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project-member role")," in the target cluster(s), which gives you the ability to create, read, update, and delete the workloads"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner role")," for the clusters(s) that include the target project(s)")),(0,i.kt)("h1",{id:"launching-a-multi-cluster-app"},"Launching a Multi-Cluster App"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,i.kt)("strong",{parentName:"p"},"Apps")," in the navigation bar. Click ",(0,i.kt)("strong",{parentName:"p"},"Launch"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the application that you want to launch, and then click ",(0,i.kt)("strong",{parentName:"p"},"View Details"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(Optional) Review the detailed descriptions, which are derived from the Helm chart's ",(0,i.kt)("inlineCode",{parentName:"p"},"README"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under ",(0,i.kt)("strong",{parentName:"p"},"Configuration Options")," enter a ",(0,i.kt)("strong",{parentName:"p"},"Name")," for the multi-cluster application. By default, this name is also used to create a Kubernetes namespace in each ",(0,i.kt)("a",{parentName:"p",href:"#targets"},"target project")," for the multi-cluster application. The namespace is named as ",(0,i.kt)("inlineCode",{parentName:"p"},"<MULTI-CLUSTER_APPLICATION_NAME>-<PROJECT_ID>"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a ",(0,i.kt)("strong",{parentName:"p"},"Template Version"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the ",(0,i.kt)("a",{parentName:"p",href:"#multi-cluster-app-configuration-options"},"multi-cluster applications specific configuration options")," as well as the ",(0,i.kt)("a",{parentName:"p",href:"#application-configuration-options"},"application configuration options"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"Members")," who can ",(0,i.kt)("a",{parentName:"p",href:"#members"},"interact with the multi-cluster application"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add any ",(0,i.kt)("a",{parentName:"p",href:"#overriding-application-configuration-options-for-specific-projects"},"custom application configuration answers")," that would change the configuration for specific project(s) from the default application configuration answers.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Review the files in the ",(0,i.kt)("strong",{parentName:"p"},"Preview")," section. When you're satisfied, click ",(0,i.kt)("strong",{parentName:"p"},"Launch"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result"),": Your application is deployed to your chosen namespace. You can view the application status from the project's:"),(0,i.kt)("h1",{id:"multi-cluster-app-configuration-options"},"Multi-cluster App Configuration Options"),(0,i.kt)("p",null,"Rancher has divided the configuration option for the multi-cluster application into several sections."),(0,i.kt)("h3",{id:"targets"},"Targets"),(0,i.kt)("p",null,"In the ",(0,i.kt)("strong",{parentName:"p"},"Targets")," section, select the projects that you want the application to be deployed in. The list of projects is based on what projects you have access to. For each project that you select, it will be added to the list, which shows the cluster name and project name that were selected. To remove a target project, click on ",(0,i.kt)("strong",{parentName:"p"},"-"),"."),(0,i.kt)("h3",{id:"upgrades"},"Upgrades"),(0,i.kt)("p",null,"In the ",(0,i.kt)("strong",{parentName:"p"},"Upgrades")," section, select the upgrade strategy to use, when you decide to upgrade your application."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Rolling Update (batched):")," When selecting this upgrade strategy, the number of applications upgraded at a time is based on the selected ",(0,i.kt)("strong",{parentName:"p"},"Batch size")," and the ",(0,i.kt)("strong",{parentName:"p"},"Interval")," specifies how many seconds to wait before starting the next batch of updates.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Upgrade all apps simultaneously:")," When selecting this upgrade strategy, all applications across all projects will be upgraded at the same time."))),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("p",null,"In the ",(0,i.kt)("strong",{parentName:"p"},"Roles")," section, you define the role of the multi-cluster application. Typically, when a user ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/helm-charts-in-rancher"},"launches catalog applications"),", that specific user's permissions are used for creation of all workloads/resources that is required by the app."),(0,i.kt)("p",null,"For multi-cluster applications, the application is deployed by a ",(0,i.kt)("em",{parentName:"p"},"system user")," and is assigned as the creator of all underlying resources. A ",(0,i.kt)("em",{parentName:"p"},"system user")," is used instead of the actual user due to the fact that the actual user could be removed from one of the target projects. If the actual user was removed from one of the projects, then that user would no longer be able to manage the application for the other projects."),(0,i.kt)("p",null,"Rancher will let you select from two options for Roles, ",(0,i.kt)("strong",{parentName:"p"},"Project")," and ",(0,i.kt)("strong",{parentName:"p"},"Cluster"),". Rancher will allow creation using any of these roles based on the user's permissions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Project")," - This is the equivalent of a ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project member"),". If you select this role, Rancher will check that in all the target projects, the user has minimally the ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project member")," role. While the user might not be explicitly granted the ",(0,i.kt)("em",{parentName:"p"},"project member")," role, if the user is an ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator"),", a ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner"),", or a ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project owner"),", then the user is considered to have the appropriate level of permissions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cluster")," - This is the equivalent of a ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner"),". If you select this role, Rancher will check that in all the target projects, the user has minimally the ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"cluster owner")," role. While the user might not be explicitly granted the ",(0,i.kt)("em",{parentName:"p"},"cluster owner")," role, if the user is an ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator"),", then the user is considered to have the appropriate level of permissions."))),(0,i.kt)("p",null,"When launching the application, Rancher will confirm if you have these permissions in the target projects before launching the application."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," There are some applications like ",(0,i.kt)("em",{parentName:"p"},"Grafana")," or ",(0,i.kt)("em",{parentName:"p"},"Datadog")," that require access to specific cluster-scoped resources. These applications will require the ",(0,i.kt)("em",{parentName:"p"},"Cluster")," role. If you find out later that the application requires cluster roles, the multi-cluster application can be upgraded to update the roles.")),(0,i.kt)("h1",{id:"application-configuration-options"},"Application Configuration Options"),(0,i.kt)("p",null,"For each Helm chart, there are a list of desired answers that must be entered in order to successfully deploy the chart. When entering answers, you must format them using the syntax rules found in ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/using_helm/#the-format-and-limitations-of---set"},"Using Helm: The format and limitations of \u2013set"),", as Rancher passes them as ",(0,i.kt)("inlineCode",{parentName:"p"},"--set")," flags to Helm."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For example, when entering an answer that includes two values separated by a comma (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"abc, bcd"),"), it is required to wrap the values with double quotes (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},'"abc, bcd"'),").")),(0,i.kt)("h3",{id:"using-a-questionsyml-file"},"Using a questions.yml file"),(0,i.kt)("p",null,"If the Helm chart that you are deploying contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"questions.yml")," file, Rancher's UI will translate this file to display an easy to use UI to collect the answers for the questions."),(0,i.kt)("h3",{id:"key-value-pairs-for-native-helm-charts"},"Key Value Pairs for Native Helm Charts"),(0,i.kt)("p",null,"For native Helm charts (i.e., charts from the ",(0,i.kt)("strong",{parentName:"p"},"Helm Stable")," or ",(0,i.kt)("strong",{parentName:"p"},"Helm Incubator")," catalogs or a custom Helm chart repository, answers are provided as key value pairs in the ",(0,i.kt)("strong",{parentName:"p"},"Answers")," section. These answers are used to override the default values."),(0,i.kt)("h3",{id:"members"},"Members"),(0,i.kt)("p",null,"By default, multi-cluster applications can only be managed by the user who created it. In the ",(0,i.kt)("strong",{parentName:"p"},"Members")," section, other users can be added so that they can also help manage or view the multi-cluster application."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the user that you want to add by typing in the member's name in the ",(0,i.kt)("strong",{parentName:"p"},"Member")," search box.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"Access Type")," for that member. There are three access types for a multi-cluster project, but due to how the permissions of a multi-cluster application are launched, please read carefully to understand what these access types mean."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Owner"),": This access type can manage any configuration part of the multi-cluster application including the template version, the ","[multi-cluster applications specific configuration options]","(#Multi-cluster App Configuration Options), the ",(0,i.kt)("a",{parentName:"p",href:"#application-configuration-options"},"application specific configuration options"),", the members who can interact with the multi-cluster application and the ",(0,i.kt)("a",{parentName:"p",href:"#overriding-application-configuration-options-for-specific-projects"},"custom application configuration answers"),". Since a multi-cluster application is created with a different set of permissions from the user, any ",(0,i.kt)("em",{parentName:"p"},"owner")," of the multi-cluster application can manage/remove applications in ",(0,i.kt)("a",{parentName:"p",href:"#targets"},"target projects")," without explicitly having access to these project(s). Only trusted users should be provided with this access type.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Member"),": This access type can only modify the template version, the ",(0,i.kt)("a",{parentName:"p",href:"#application-configuration-options"},"application specific configuration options")," and the ",(0,i.kt)("a",{parentName:"p",href:"#overriding-application-configuration-options-for-specific-projects"},"custom application configuration answers"),". Since a multi-cluster application is created with a different set of permissions from the user, any ",(0,i.kt)("em",{parentName:"p"},"member")," of the multi-cluster application can modify the application without explicitly having access to these project(s). Only trusted users should be provided with this access type.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Read-only"),": This access type cannot modify any configuration option for the multi-cluster application. Users can only view these applications."))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:"),"  Please ensure only trusted users are given ",(0,i.kt)("em",{parentName:"p"},"Owner")," or ",(0,i.kt)("em",{parentName:"p"},"Member")," access as they will automatically be able to manage applications created for this multi-cluster application in target projects they might not have direct access to.")))),(0,i.kt)("h3",{id:"overriding-application-configuration-options-for-specific-projects"},"Overriding Application Configuration Options for Specific Projects"),(0,i.kt)("p",null,"The ability to use the same configuration to deploy the same application across multiple clusters/projects is one of the main benefits of multi-cluster applications. There might be a specific project that requires a slightly different configuration option, but you want to manage that application with all the other matching applications. Instead of creating a brand new application, you can override specific ",(0,i.kt)("a",{parentName:"p",href:"#application-configuration-options"},"application specific configuration options")," for specific projects."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Answer Overrides")," section, click ",(0,i.kt)("strong",{parentName:"p"},"Add Override"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For each override, you can select the following:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Scope"),": Select which target projects you want to override the answer in the configuration option.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Question"),": Select which question you want to override.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Answer"),": Enter the answer that you want to be used instead."))))),(0,i.kt)("h1",{id:"upgrading-multi-cluster-app-roles-and-projects"},"Upgrading Multi-Cluster App Roles and Projects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Changing Roles on an existing Multi-Cluster app"),'\nThe creator and any users added with the access-type "owner" to a multi-cluster app, can upgrade its Roles. When adding a new Role, we check if the user has that exact role in all current target projects. These checks allow the same relaxations for global admins, cluster owners and project-owners as described in the installation section for the field ',(0,i.kt)("inlineCode",{parentName:"p"},"Roles"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Adding/Removing target projects")))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'The creator and any users added with access-type "owner" to a multi-cluster app, can add or remove its target projects. When adding a new project, we check if the caller of this request has all Roles defined on multi-cluster app, in the new projects they want to add. The roles checks are again relaxed for global admins, cluster-owners and project-owners.'),(0,i.kt)("li",{parentName:"ol"},"We do not do these membership checks when removing target projects. This is because the caller's permissions could have with respect to the target project, or the project could have been deleted and hence the caller wants to remove it from targets list.")),(0,i.kt)("h1",{id:"multi-cluster-application-management"},"Multi-Cluster Application Management"),(0,i.kt)("p",null,"One of the benefits of using a multi-cluster application as opposed to multiple individual applications of the same type, is the ease of management. Multi-cluster applications can be cloned, upgraded or rolled back."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,i.kt)("strong",{parentName:"p"},"Apps")," in the navigation bar.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose the multi-cluster application you want to take one of these actions on and click the ",(0,i.kt)("strong",{parentName:"p"},"\u22ee"),". Select one of the following options:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Clone"),": Creates another multi-cluster application with the same configuration. By using this option, you can easily duplicate a multi-cluster application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Upgrade"),": Upgrade your multi-cluster application to change some part of the configuration. When performing an upgrade for multi-cluster application, the ",(0,i.kt)("a",{parentName:"li",href:"#upgrades"},"upgrade strategy")," can be modified if you have the correct ",(0,i.kt)("a",{parentName:"li",href:"#members"},"access type"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rollback"),": Rollback your application to a specific version. If after an upgrade, there are issues for your multi-cluster application for one or more of your ",(0,i.kt)("a",{parentName:"li",href:"#targets"},"targets"),", Rancher has stored up to 10 versions of the multi-cluster application. Rolling back a multi-cluster application reverts the application for ",(0,i.kt)("strong",{parentName:"li"},"all")," target clusters and projects, not just the targets(s) affected by the upgrade issue.")))),(0,i.kt)("h1",{id:"deleting-a-multi-cluster-application"},"Deleting a Multi-Cluster Application"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,i.kt)("strong",{parentName:"p"},"Apps")," in the navigation bar.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose the multi-cluster application you want to delete and click the ",(0,i.kt)("strong",{parentName:"p"},"\u22ee"," > Delete"),". When deleting the multi-cluster application, all applications and namespaces are deleted in all of the target projects."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The applications in the target projects, that are created for a multi-cluster application, cannot be deleted individually. The applications can only be deleted when the multi-cluster application is deleted.")))))}h.isMDXComponent=!0}}]);