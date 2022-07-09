"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[2442],{9613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2734:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=r(665),a=r(151),i=(r(9496),r(9613)),o=["components"],l={},s="1. Requirements and recommendations",u={unversionedId:"getting-started/requirements-recommendations",id:"getting-started/requirements-recommendations",title:"1. Requirements and recommendations",description:"Requirements",source:"@site/docs/getting-started/01-requirements-recommendations.md",sourceDirName:"getting-started",slug:"/getting-started/requirements-recommendations",permalink:"/docs/getting-started/requirements-recommendations",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/getting-started/01-requirements-recommendations.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Welcome to the ClusterFactory CE Documentation",permalink:"/docs/overview/welcome"},next:{title:"2. Setting up your repository for GitOps",permalink:"/docs/getting-started/setting-up-repository"}},c={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Node requirements",id:"node-requirements",level:3},{value:"Required utilities",id:"required-utilities",level:3},{value:"Recommended tools",id:"recommended-tools",level:2},{value:"Recommended documentation",id:"recommended-documentation",level:2}],d={toc:m};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-requirements-and-recommendations"},"1. Requirements and recommendations"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"node-requirements"},"Node requirements"),(0,i.kt)("p",null,"All nodes should be accessible via SSH."),(0,i.kt)("p",null,"All nodes should have a Linux distribution with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Linux kernel version higher than 3.10."),(0,i.kt)("li",{parentName:"ul"},"An init system based on SystemD or OpenRC.")),(0,i.kt)("p",null,"ClusterFactory has been fully tested on Rocky Linux which is our recommended OS."),(0,i.kt)("h3",{id:"required-utilities"},"Required utilities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SquareFactory/cfctl/releases"},(0,i.kt)("inlineCode",{parentName:"a"},"cfctl")),", for deployment, backing up, and upgrading of the Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},(0,i.kt)("inlineCode",{parentName:"a"},"kubectl")),", for managing your Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bitnami-labs/sealed-secrets/releases/"},(0,i.kt)("inlineCode",{parentName:"a"},"kubeseal")),", for encrypting the secrets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/helm/helm/releases/"},(0,i.kt)("inlineCode",{parentName:"a"},"helm")),", for Helm chart template.")),(0,i.kt)("p",null,"There is a script inside the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/scripts"},(0,i.kt)("inlineCode",{parentName:"a"},"scripts"))," directory to install and set up a working environment."),(0,i.kt)("p",null,"Just run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},". ./scripts/setup-env\n")),(0,i.kt)("p",null,"The binaries are stored inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," directory and the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," is automatically set."),(0,i.kt)("h2",{id:"recommended-tools"},"Recommended tools"),(0,i.kt)("p",null,"We recommend:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"VSCode"),". Any IDE with YAML support is a good alternative."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://k8slens.dev"},"Lens")," to manage your Kubernetes cluster."))),(0,i.kt)("h2",{id:"recommended-documentation"},"Recommended documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/"},"Kubernetes documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubernetes-api/"},"Kubernetes API reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/cfctl.yaml"},"cfctl.yaml API reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/"},"Argo CD declarative setup"))))}p.isMDXComponent=!0}}]);