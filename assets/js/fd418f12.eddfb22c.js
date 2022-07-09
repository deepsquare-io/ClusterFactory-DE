"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[3345],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<c;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=r(665),a=r(151),c=(r(9496),r(9613)),s=["components"],o={},i="Sealed Secrets",l={unversionedId:"main-concepts/gitops/sealed-secrets",id:"main-concepts/gitops/sealed-secrets",title:"Sealed Secrets",description:"Sealed Secrets encrypt the Secret resources into a SealedSecret using asymmetric encryption.",source:"@site/docs/main-concepts/03-gitops/05-sealed-secrets.md",sourceDirName:"main-concepts/03-gitops",slug:"/main-concepts/gitops/sealed-secrets",permalink:"/docs/main-concepts/gitops/sealed-secrets",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/main-concepts/03-gitops/05-sealed-secrets.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"cert-manager",permalink:"/docs/main-concepts/gitops/cert-manager"},next:{title:"xCAT, the Bare-Metal Provisioner",permalink:"/docs/main-concepts/apps/xcat"}},p={},u=[],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"sealed-secrets"},"Sealed Secrets"),(0,c.kt)("p",null,"Sealed Secrets encrypt the Secret resources into a SealedSecret using asymmetric encryption."),(0,c.kt)("p",null,"A secret could look like this:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="secret.yaml"',title:'"secret.yaml"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: mysecret\n  namespace: mynamespace\nstringData:\n  password: my-super-password\n")),(0,c.kt)("p",null,"And you want to store this secret in Git so that it is versioned. Storing a plain-text secret is always bad practice as the git repository can get shared everywhere in the world."),(0,c.kt)("p",null,"Sealed Secrets encrypt the secret and only the Sealed Secrets controller can decrypt the SealedSecret."),(0,c.kt)("p",null,"A SealedSecret looks like this:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="sealed-secret.yaml"',title:'"sealed-secret.yaml"'},"apiVersion: bitnami.com/v1alpha1\nkind: SealedSecret\nmetadata:\n  creationTimestamp: null\n  name: mysecret\n  namespace: mynamespace\nspec:\n  encryptedData:\n    password: AgDZWhe0dUqXNOE2TNxN5z3...\n  template:\n    data: null\n    metadata:\n      creationTimestamp: null\n      name: mysecret\n      namespace: mynamespace\n")),(0,c.kt)("p",null,"Sealed Secrets allows secrets to be stored inside Git, which means it allows\nGitOps to be used. Git becomes the source of truth, but only the Kubernetes\ncluster canread the secrets."),(0,c.kt)("p",null,"Another solution for managing secrets is ",(0,c.kt)("a",{parentName:"p",href:"https://www.vaultproject.io"},"Hashicorp Vault"),".\nHowever, the source of truth for secrets is moved to Hashicorp Vault, which is\nnot GitOps friendly."),(0,c.kt)("p",null,"Depending on the use case, you may prefer Hashicorp Vault for multi-clusters\nand to support multiple application types."))}d.isMDXComponent=!0}}]);