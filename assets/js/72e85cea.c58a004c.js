"use strict";(self.webpackChunkcluster_factory_ce_docs=self.webpackChunkcluster_factory_ce_docs||[]).push([[7078],{9613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(665),a=t(151),o=(t(9496),t(9613)),i=["components"],l={},s="Updating the K0s Helm extensions",c={unversionedId:"guides/maintenance/updating-helm-extensions",id:"guides/maintenance/updating-helm-extensions",title:"Updating the K0s Helm extensions",description:"Updating and applying cfctl.yaml will create downtime!",source:"@site/docs/guides/30-maintenance/02-updating-helm-extensions.md",sourceDirName:"guides/30-maintenance",slug:"/guides/maintenance/updating-helm-extensions",permalink:"/docs/guides/maintenance/updating-helm-extensions",draft:!1,editUrl:"https://github.com/SquareFactory/ClusterFactory-CE/tree/main/web/docs/guides/30-maintenance/02-updating-helm-extensions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Creating a highly available cluster",permalink:"/docs/guides/maintenance/high-availability"},next:{title:"Updating the K0s cluster",permalink:"/docs/guides/maintenance/updating-k0s-cluster"}},p={},u=[],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-the-k0s-helm-extensions"},"Updating the K0s Helm extensions"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Updating and applying ",(0,o.kt)("inlineCode",{parentName:"p"},"cfctl.yaml")," will create downtime!")),(0,o.kt)("p",null,"There are two ways to update the K0s Helm extensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updating directly the ",(0,o.kt)("inlineCode",{parentName:"li"},"cfctl.yaml")," and deploying with ",(0,o.kt)("inlineCode",{parentName:"li"},"cfctl")),(0,o.kt)("li",{parentName:"ul"},"Updating the CRD ",(0,o.kt)("inlineCode",{parentName:"li"},"helm.k0sproject.io")," and deploying with ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl"))),(0,o.kt)("p",null,"We recommend updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"cfctl.yaml"),", editing and applying the CRD to avoid downtime. For example, if you wish to update Traefik:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},"cfctl.yaml"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="cfctl.yaml > spec > k0s > config > spec > extensions > helm > charts[]"',title:'"cfctl.yaml',">":!0,spec:!0,k0s:!0,config:!0,extensions:!0,helm:!0,'charts[]"':!0},"                - name: traefik\n                  chartname: traefik/traefik\n-                 version: '10.15.0'\n+                 version: '10.19.5'\n                  namespace: traefik\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Update the CRD:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get Chart k0s-addon-chart-traefik -n kube-system -o yaml > chart.yaml\n")),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"chart.yaml"),". Remove the metadata and update the Traefik version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"  apiVersion: helm.k0sproject.io/v1beta1\n  kind: Chart\n  metadata:\n    finalizers:\n      - helm.k0sproject.io/uninstall-helm-release\n    labels:\n      k0s.k0sproject.io/stack: helm\n    name: k0s-addon-chart-traefik\n    namespace: kube-system\n  spec:\n    chartName: traefik/traefik\n    namespace: traefik\n    releaseName: traefik\n    values: |\n\n      ingressClass:\n        enabled: true\n        isDefaultClass: true\n\n      service:\n        enabled: true\n        annotations:\n          metallb.universe.tf/address-pool: main-pool\n          metallb.universe.tf/allow-shared-ip: traefik-lb-key\n        spec:\n          externalTrafficPolicy: Cluster\n          loadBalancerIP: 192.168.1.100\n\n      providers:\n        kubernetesCRD:\n          enabled: true\n          allowCrossNamespace: true\n          allowExternalNameServices: true\n          namespaces: []\n        kubernetesIngress:\n          enabled: true\n          allowExternalNameServices: true\n          namespaces: []\n          ingressClass: traefik\n          publishedService:\n            enabled: true\n\n      globalArguments:\n        - '--global.checknewversion'\n        - '--api.dashboard=true'\n\n      additionalArguments:\n        - '--entryPoints.websecure.proxyProtocol.insecure'\n        - '--entryPoints.websecure.forwardedHeaders.insecure'\n\n      ingressRoute:\n        dashboard:\n          enabled: false\n\n      ports:\n        traefik:\n          port: 9000\n          expose: false\n          exposedPort: 9000\n          protocol: TCP\n        dns-tcp:\n          port: 8053\n          expose: true\n          exposedPort: 53\n          protocol: TCP\n        dns-udp:\n          port: 8054\n          expose: true\n          exposedPort: 53\n          protocol: UDP\n        oidc:\n          port: 5556\n          expose: true\n          exposedPort: 5556\n          protocol: TCP\n        web:\n          port: 80\n          expose: true\n          exposedPort: 80\n          protocol: TCP\n        websecure:\n          port: 443\n          expose: true\n          exposedPort: 443\n          protocol: TCP\n          # You MUST open port 443 UDP!\n          # HTTP3 upgrades the connection from TCP to UDP.\n          http3: true\n          tls:\n            enabled: true\n        metrics:\n          port: 9100\n          expose: false\n          exposedPort: 9100\n          protocol: TCP\n\n      experimental:\n        http3:\n          enabled: true\n\n      securityContext:\n        capabilities:\n          drop: [ALL]\n          add: [NET_BIND_SERVICE]\n        readOnlyRootFilesystem: true\n        runAsGroup: 0\n        runAsNonRoot: false\n        runAsUser: 0\n\n      podSecurityContext:\n        fsGroup: 65532\n-   version: 10.15.0\n+   version: 10.19.5\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Apply the ",(0,o.kt)("inlineCode",{parentName:"li"},"chart.yaml"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f chart.yaml -n kube-system\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If nothing is happening, delete the chart and reapply it again."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete -f chart.yaml -n kube-system\n\n# OR\n\nkubectl delete Chart k0s-addon-chart-traefik -n kube-system\n"))))}m.isMDXComponent=!0}}]);