"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[771],{9613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1728:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(2848),o=r(9213),a=(r(9496),r(9613)),i=["components"],c={},l="Welcome to the Cluster Factory CE Documentation",u={unversionedId:"overview/welcome",id:"overview/welcome",title:"Welcome to the Cluster Factory CE Documentation",description:"Cluster Factory CE is an open-source Kubernetes-based infrastructure orchestration tool that automates the process of deploying, managing and monitoring compute-optimized clusters from bare metal servers to VMs and containers.",source:"@site/docs/overview/welcome.mdx",sourceDirName:"overview",slug:"/overview/welcome",permalink:"/docs/overview/welcome",draft:!1,editUrl:"https://github.com/SquareFactory/cluster-factory-ce/tree/main/web/docs/overview/welcome.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"1. Requirements and recommendations",permalink:"/docs/getting-started/requirements-recommendations"}},s={},p=[{value:"Community Support",id:"community-support",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome-to-the-cluster-factory-ce-documentation"},"Welcome to the Cluster Factory CE Documentation"),(0,a.kt)("p",null,"Cluster Factory CE is an open-source Kubernetes-based infrastructure orchestration tool that automates the process of deploying, managing and monitoring compute-optimized clusters from bare metal servers to VMs and containers."),(0,a.kt)("p",null,"Cluster Factory brings together best-in-class solutions from the HPC, Cloud, and DevOps industries to manage a cluster in a declarative way in combination with the GitOps practice."),(0,a.kt)("p",null,"This allows to be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Performance-oriented"),": Integrates a key-in-hand HPC stack including Slurm, MPI, DFS, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Highly configurable"),": With Helm, all configuration is done in a single ",(0,a.kt)("inlineCode",{parentName:"li"},"values.yaml")," file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Repeatable"),": With Argo CD following GitOps practices, all states are specified declaratively and saved in a Git repository."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Highly available"),": With Kubernetes, container scheduling is automatically ensured and easy to set up."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Simple"),": A single descriptive YAML per application, with Argo CD to automatically updates the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Long-term maintainability"),": Easy to deploy, update, backup and restore with K0s.")),(0,a.kt)("p",null,"Follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/requirements-recommendations"},"next page")," for creating a full Kubernetes cluster."),(0,a.kt)("h2",{id:"community-support"},"Community Support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/zt4GF5HYHX"},"Community Discord")," - Request for support and helm from the Cluster Factory community."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SquareFactory/cluster-factory-ce/issues"},"Github Issues")," - Submit your issues and feature requests via Github.")),(0,a.kt)("p",null,"We welcome your help in building Cluster Factory CE! If you are interested, we invite you to check\nout the ",(0,a.kt)("a",{parentName:"p",href:"/docs/see-also/contributing"},"Contributing Guide"),"."))}d.isMDXComponent=!0}}]);