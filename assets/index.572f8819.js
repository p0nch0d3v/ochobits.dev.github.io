(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var j,f,R,w,$,z={},G=[],t0=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function b(e,t){for(var n in t)e[n]=t[n];return e}function V(e){var t=e.parentNode;t&&t.removeChild(e)}function n0(e,t,n){var l,i,o,s={};for(o in t)o=="key"?l=t[o]:o=="ref"?i=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?j.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return P(e,s,l,i,null)}function P(e,t,n,l,i){var o={type:e,props:t,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++R:i};return i==null&&f.vnode!=null&&f.vnode(o),o}function D(e){return e.children}function T(e,t){this.props=e,this.context=t}function L(e,t){if(t==null)return e.__?L(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?L(e):null}function q(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return q(e)}}function B(e){(!e.__d&&(e.__d=!0)&&w.push(e)&&!E.__r++||$!==f.debounceRendering)&&(($=f.debounceRendering)||setTimeout)(E)}function E(){for(var e;E.__r=w.length;)e=w.sort(function(t,n){return t.__v.__b-n.__v.__b}),w=[],e.some(function(t){var n,l,i,o,s,a;t.__d&&(s=(o=(n=t).__v).__e,(a=n.__P)&&(l=[],(i=b({},o)).__v=o.__v+1,H(a,o,i,n.__n,a.ownerSVGElement!==void 0,o.__h!=null?[s]:null,l,s==null?L(o):s,o.__h),X(l,o),o.__e!=s&&q(o)))})}function K(e,t,n,l,i,o,s,a,p,h){var r,v,d,_,u,C,k,m=l&&l.__k||G,g=m.length;for(n.__k=[],r=0;r<t.length;r++)if((_=n.__k[r]=(_=t[r])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?P(null,_,null,null,_):Array.isArray(_)?P(D,{children:_},null,null,null):_.__b>0?P(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(d=m[r])===null||d&&_.key==d.key&&_.type===d.type)m[r]=void 0;else for(v=0;v<g;v++){if((d=m[v])&&_.key==d.key&&_.type===d.type){m[v]=void 0;break}d=null}H(e,_,d=d||z,i,o,s,a,p,h),u=_.__e,(v=_.ref)&&d.ref!=v&&(k||(k=[]),d.ref&&k.push(d.ref,null,_),k.push(v,_.__c||u,_)),u!=null?(C==null&&(C=u),typeof _.type=="function"&&_.__k===d.__k?_.__d=p=J(_,p,e):p=Q(e,_,d,m,u,p),typeof n.type=="function"&&(n.__d=p)):p&&d.__e==p&&p.parentNode!=e&&(p=L(d))}for(n.__e=C,r=g;r--;)m[r]!=null&&e0(m[r],m[r]);if(k)for(r=0;r<k.length;r++)Y(k[r],k[++r],k[++r])}function J(e,t,n){for(var l,i=e.__k,o=0;i&&o<i.length;o++)(l=i[o])&&(l.__=e,t=typeof l.type=="function"?J(l,t,n):Q(n,l,l,i,l.__e,t));return t}function Q(e,t,n,l,i,o){var s,a,p;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),s=null;else{for(a=o,p=0;(a=a.nextSibling)&&p<l.length;p+=2)if(a==i)break e;e.insertBefore(i,o),s=o}return s!==void 0?s:i.nextSibling}function o0(e,t,n,l,i){var o;for(o in n)o==="children"||o==="key"||o in t||I(e,o,null,n[o],l);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||I(e,o,t[o],n[o],l)}function O(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||t0.test(t)?n:n+"px"}function I(e,t,n,l,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof l=="string"&&(e.style.cssText=l=""),l)for(t in l)n&&t in n||O(e.style,t,"");if(n)for(t in n)l&&n[t]===l[t]||O(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?l||e.addEventListener(t,o?F:W,o):e.removeEventListener(t,o?F:W,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function W(e){this.l[e.type+!1](f.event?f.event(e):e)}function F(e){this.l[e.type+!0](f.event?f.event(e):e)}function H(e,t,n,l,i,o,s,a,p){var h,r,v,d,_,u,C,k,m,g,M,x,U,N,S,y=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,a=t.__e=n.__e,t.__h=null,o=[a]),(h=f.__b)&&h(t);try{e:if(typeof y=="function"){if(k=t.props,m=(h=y.contextType)&&l[h.__c],g=h?m?m.props.value:h.__:l,n.__c?C=(r=t.__c=n.__c).__=r.__E:("prototype"in y&&y.prototype.render?t.__c=r=new y(k,g):(t.__c=r=new T(k,g),r.constructor=y,r.render=l0),m&&m.sub(r),r.props=k,r.state||(r.state={}),r.context=g,r.__n=l,v=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),y.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=b({},r.__s)),b(r.__s,y.getDerivedStateFromProps(k,r.__s))),d=r.props,_=r.state,v)y.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(y.getDerivedStateFromProps==null&&k!==d&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(k,g),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(k,r.__s,g)===!1||t.__v===n.__v){for(r.props=k,r.state=r.__s,t.__v!==n.__v&&(r.__d=!1),r.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(A){A&&(A.__=t)}),M=0;M<r._sb.length;M++)r.__h.push(r._sb[M]);r._sb=[],r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(k,r.__s,g),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(d,_,u)})}if(r.context=g,r.props=k,r.__v=t,r.__P=e,x=f.__r,U=0,"prototype"in y&&y.prototype.render){for(r.state=r.__s,r.__d=!1,x&&x(t),h=r.render(r.props,r.state,r.context),N=0;N<r._sb.length;N++)r.__h.push(r._sb[N]);r._sb=[]}else do r.__d=!1,x&&x(t),h=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++U<25);r.state=r.__s,r.getChildContext!=null&&(l=b(b({},l),r.getChildContext())),v||r.getSnapshotBeforeUpdate==null||(u=r.getSnapshotBeforeUpdate(d,_)),S=h!=null&&h.type===D&&h.key==null?h.props.children:h,K(e,Array.isArray(S)?S:[S],t,n,l,i,o,s,a,p),r.base=t.__e,t.__h=null,r.__h.length&&s.push(r),C&&(r.__E=r.__=null),r.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=r0(n.__e,t,n,l,i,o,s,p);(h=f.diffed)&&h(t)}catch(A){t.__v=null,(p||o!=null)&&(t.__e=a,t.__h=!!p,o[o.indexOf(a)]=null),f.__e(A,t,n)}}function X(e,t){f.__c&&f.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(l){l.call(n)})}catch(l){f.__e(l,n.__v)}})}function r0(e,t,n,l,i,o,s,a){var p,h,r,v=n.props,d=t.props,_=t.type,u=0;if(_==="svg"&&(i=!0),o!=null){for(;u<o.length;u++)if((p=o[u])&&"setAttribute"in p==!!_&&(_?p.localName===_:p.nodeType===3)){e=p,o[u]=null;break}}if(e==null){if(_===null)return document.createTextNode(d);e=i?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,a=!1}if(_===null)v===d||a&&e.data===d||(e.data=d);else{if(o=o&&j.call(e.childNodes),h=(v=n.props||z).dangerouslySetInnerHTML,r=d.dangerouslySetInnerHTML,!a){if(o!=null)for(v={},u=0;u<e.attributes.length;u++)v[e.attributes[u].name]=e.attributes[u].value;(r||h)&&(r&&(h&&r.__html==h.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(o0(e,d,v,i,a),r)t.__k=[];else if(u=t.props.children,K(e,Array.isArray(u)?u:[u],t,n,l,i&&_!=="foreignObject",o,s,o?o[0]:n.__k&&L(n,0),a),o!=null)for(u=o.length;u--;)o[u]!=null&&V(o[u]);a||("value"in d&&(u=d.value)!==void 0&&(u!==e.value||_==="progress"&&!u||_==="option"&&u!==v.value)&&I(e,"value",u,v.value,!1),"checked"in d&&(u=d.checked)!==void 0&&u!==e.checked&&I(e,"checked",u,v.checked,!1))}return e}function Y(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(l){f.__e(l,n)}}function e0(e,t,n){var l,i;if(f.unmount&&f.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||Y(l,null,t)),(l=e.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(o){f.__e(o,t)}l.base=l.__P=null,e.__c=void 0}if(l=e.__k)for(i=0;i<l.length;i++)l[i]&&e0(l[i],t,n||typeof e.type!="function");n||e.__e==null||V(e.__e),e.__=e.__e=e.__d=void 0}function l0(e,t,n){return this.constructor(e,n)}function i0(e,t,n){var l,i,o;f.__&&f.__(e,t),i=(l=typeof n=="function")?null:n&&n.__k||t.__k,o=[],H(t,e=(!l&&n||t).__k=n0(D,null,[e]),i||z,z,t.ownerSVGElement!==void 0,!l&&n?[n]:i?null:t.firstChild?j.call(t.childNodes):null,o,!l&&n?n:i?i.__e:t.firstChild,l),X(o,e)}j=G.slice,f={__e:function(e,t,n,l){for(var i,o,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,l||{}),s=i.__d),s)return i.__E=i}catch(a){e=a}throw e}},R=0,T.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof e=="function"&&(e=e(b({},n),this.props)),e&&b(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),B(this))},T.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),B(this))},T.prototype.render=D,w=[],E.__r=0;var _0=0;function c(e,t,n,l,i){var o,s,a={};for(s in t)s=="ref"?o=t[s]:a[s]=t[s];var p={type:e,props:a,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_0,__source:i,__self:l};if(typeof e=="function"&&(o=e.defaultProps))for(s in o)a[s]===void 0&&(a[s]=o[s]);return f.vnode&&f.vnode(p),p}function s0(){return c("svg",{viewBox:"0 0 32 32",id:"svg5",version:"1.1",children:[c("defs",{id:"defs2"}),c("g",{id:"layer1",transform:"translate(-12,-340)",children:[c("path",{d:"M 28,364.95312 A 1.0606602,1.0606602 0 0 0 26.939453,366.01367 1.0606602,1.0606602 0 0 0 28,367.07422 1.0606602,1.0606602 0 0 0 29.060547,366.01367 1.0606602,1.0606602 0 0 0 28,364.95312 Z",id:"path453543",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),c("path",{d:"m 33.914062,362.47461 a 1.0606602,1.0606602 0 0 0 -0.675781,0.30664 1.0606602,1.0606602 0 0 0 0,1.5 1.0606602,1.0606602 0 0 0 1.5,0 1.0606602,1.0606602 0 0 0 0,-1.5 1.0606602,1.0606602 0 0 0 -0.824219,-0.30664 z",id:"path453541",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),c("path",{d:"m 21.935547,362.47461 a 1.0606602,1.0606602 0 0 0 -0.673828,0.30664 1.0606602,1.0606602 0 0 0 0,1.5 1.0606602,1.0606602 0 0 0 1.5,0 1.0606602,1.0606602 0 0 0 0,-1.5 1.0606602,1.0606602 0 0 0 -0.826172,-0.30664 z",id:"path453539",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),c("path",{d:"m 36.46875,356.48242 a 1.0606602,1.0606602 0 0 0 -1.060547,1.06055 1.0606602,1.0606602 0 0 0 1.060547,1.06055 1.0606602,1.0606602 0 0 0 1.0625,-1.06055 1.0606602,1.0606602 0 0 0 -1.0625,-1.06055 z",id:"path453521",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),c("path",{d:"m 19.53125,356.48242 a 1.0606602,1.0606602 0 0 0 -1.0625,1.06055 1.0606602,1.0606602 0 0 0 1.0625,1.06055 1.0606602,1.0606602 0 0 0 1.060547,-1.06055 1.0606602,1.0606602 0 0 0 -1.060547,-1.06055 z",id:"path453519",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),c("path",{d:"m 28,352.01367 a 1,1 0 0 0 -1,1 v 4.58399 l -2.707031,2.70898 a 1,1 0 0 0 0,1.41406 1,1 0 0 0 1.414062,0 l 3,-3 A 1.0001,1.0001 0 0 0 29,358.01367 v -5 a 1,1 0 0 0 -1,-1 z",id:"path453517",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),c("path",{d:"m 33.914062,350.49609 a 1.0606602,1.0606602 0 0 0 -0.675781,0.3086 1.0606602,1.0606602 0 0 0 0,1.5 1.0606602,1.0606602 0 0 0 1.5,0 1.0606602,1.0606602 0 0 0 0,-1.5 1.0606602,1.0606602 0 0 0 -0.824219,-0.3086 z",id:"path453513",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),c("path",{d:"m 21.935547,350.49609 a 1.0606602,1.0606602 0 0 0 -0.673828,0.3086 1.0606602,1.0606602 0 0 0 0,1.5 1.0606602,1.0606602 0 0 0 1.5,0 1.0606602,1.0606602 0 0 0 0,-1.5 1.0606602,1.0606602 0 0 0 -0.826172,-0.3086 z",id:"path453511",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),c("path",{d:"M 28,348.01367 A 1.0606602,1.0606602 0 0 0 26.939453,349.07422 1.0606602,1.0606602 0 0 0 28,350.13477 1.0606602,1.0606602 0 0 0 29.060547,349.07422 1.0606602,1.0606602 0 0 0 28,348.01367 Z",id:"path453509",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"}),c("path",{d:"m 26,342.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 1 v 1.04297 c -6.425484,0.51183 -11.5,5.90234 -11.5,12.45703 0,6.8917 5.6083,12.5 12.5,12.5 6.8917,0 12.5,-5.6083 12.5,-12.5 0,-2.49565 -0.738405,-4.82171 -2.003906,-6.77539 a 1.0001,1.0001 0 0 0 0.111328,-0.0898 l 2.121094,-2.1211 a 1.0001,1.0001 0 0 0 0,-1.41406 l -2.828125,-2.82812 a 1.0001,1.0001 0 0 0 -1.414063,0 l -2.121094,2.12109 A 1.0001,1.0001 0 0 0 34.1875,346.66016 C 32.635016,345.77154 30.875389,345.20603 29,345.05664 v -1.04297 h 1 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z m 11.193359,4.39258 1.414063,1.41406 -0.707031,0.70703 -1.414063,-1.41406 z M 28,347.01367 c 5.810822,0 10.5,4.68918 10.5,10.5 0,5.81083 -4.689178,10.5 -10.5,10.5 -5.810822,0 -10.5,-4.68917 -10.5,-10.5 0,-5.81082 4.689178,-10.5 10.5,-10.5 z",id:"path453491",style:"fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"})]})]})}function c0({className:e}){return c("svg",{viewBox:"0 0 24 24",version:"1.1",className:e,children:[c("title",{children:"Dashboard"}),c("g",{id:"Dashboard","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:[c("rect",{id:"Container",x:"0",y:"0",width:"24",height:"24"}),c("rect",{id:"shape-1","stroke-width":"2","stroke-linecap":"round",x:"4",y:"4",width:"16",height:"16",rx:"2"}),c("line",{x1:"4",y1:"9",x2:"20",y2:"9",id:"shape-2","stroke-width":"2","stroke-linecap":"round"}),c("line",{x1:"9",y1:"10",x2:"9",y2:"20",id:"shape-3","stroke-width":"2","stroke-linecap":"round"})]})]})}function d0(){return c("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.01192 5.6023C1.83312 3.50023 3.61574 2 5.51161 2H7.88594C9.01915 2 10.0411 2.68182 10.4762 3.72819L11.6459 6.54152C12.0464 7.50457 11.8795 8.61027 11.2126 9.41219L9.96021 10.9182C10.7683 12.1458 11.7862 13.2527 12.9455 14.169L14.5827 12.8019C15.386 12.1311 16.4959 11.9632 17.4616 12.3664L20.2638 13.5364C21.3081 13.9725 21.9881 14.9933 21.9881 16.125C21.9881 16.5154 21.9911 16.906 21.9941 17.3009L21.9941 17.3025C21.997 17.6956 22 18.093 22 18.4913C22 20.387 20.4999 22.1699 18.3975 21.9904C9.85772 21.2613 2.74005 14.1628 2.01192 5.6023ZM5.51161 4C4.56806 4 3.94287 4.70566 4.00472 5.43279C4.65016 13.0211 10.9966 19.3513 18.5676 19.9977C19.2944 20.0597 20 19.4349 20 18.4913C20 18.1013 19.9971 17.7109 19.9941 17.316L19.9941 17.3135C19.9911 16.9206 19.9881 16.5234 19.9881 16.125C19.9881 15.8002 19.7929 15.5072 19.4932 15.382L16.691 14.212C16.4138 14.0963 16.0952 14.1444 15.8646 14.337L13.0326 16.7019L12.4051 16.2603C10.5707 14.9694 8.9987 13.2704 7.86741 11.3384L7.51296 10.733L9.67483 8.13339C9.86626 7.90321 9.91417 7.58583 9.79923 7.30939L8.62943 4.49606C8.50455 4.19571 8.21122 4 7.88594 4H5.51161Z"})})}function a0(){return c("svg",{version:"1.1",id:"_x32_",viewBox:"0 0 512 512",children:c("g",{children:[c("path",{class:"st0",d:"M424.267,105.749c-2.652-2.66-5.363-5.244-8.149-7.777l31.257-9.9c1.58-0.499,2.607-2.019,2.503-3.672 c-0.12-1.647-1.341-3.01-2.965-3.3l-70.828-12.492c-8.134-4.768-16.567-9.08-25.282-12.872l23.822-32.046 c0.916-1.236,0.954-2.935,0.067-4.202c-0.879-1.266-2.465-1.832-3.955-1.408l-74.388,21.446c-2.205-0.372-4.41-0.737-6.629-1.05 L258.76,1.296C258.075,0.477,257.061,0,255.997,0c-1.066,0-2.078,0.477-2.764,1.296l-30.959,37.179 c-2.22,0.314-4.425,0.678-6.63,1.05l-74.388-21.446c-1.483-0.424-3.07,0.142-3.956,1.408c-0.879,1.266-0.849,2.965,0.067,4.202 l23.83,32.046c-8.723,3.792-17.156,8.105-25.29,12.872L65.08,81.1c-1.624,0.29-2.845,1.654-2.957,3.3 c-0.112,1.653,0.924,3.173,2.504,3.672l31.249,9.9c-2.778,2.533-5.498,5.118-8.149,7.777 c-43.034,43.004-69.71,102.62-69.702,168.278c-0.008,65.65,26.668,125.266,69.702,168.271 c42.997,43.034,102.62,69.717,168.271,69.702c65.65,0.014,125.273-26.668,168.27-69.702c43.042-43.004,69.718-102.62,69.71-168.271 C493.984,208.37,467.308,148.754,424.267,105.749z M397.345,415.368c-36.233,36.203-86.083,58.544-141.348,58.551 c-55.259-0.008-105.116-22.348-141.349-58.551c-36.203-36.233-58.536-86.083-58.551-141.342 c0.015-55.258,22.348-105.123,58.551-141.348c7.642-7.636,15.919-14.608,24.686-20.925l15.942,5.051 c1.192,0.38,2.093,1.333,2.398,2.54c0.313,1.199-0.014,2.481-0.878,3.375l-51.549,54.11c-1.133,1.177-1.311,2.987-0.447,4.381 c0.864,1.393,2.57,2.018,4.141,1.527l102.934-32.546c1.468-0.462,3.069,0.06,3.978,1.304l37.246,50.565 c0.685,0.916,1.758,1.467,2.898,1.467c1.14,0,2.22-0.551,2.897-1.467l37.247-50.565c0.916-1.244,2.517-1.766,3.977-1.304 l102.941,32.546c1.572,0.491,3.27-0.134,4.134-1.527c0.872-1.394,0.686-3.204-0.44-4.381l-51.556-54.11 c-0.857-0.894-1.192-2.176-0.879-3.375c0.313-1.207,1.214-2.16,2.399-2.54l15.941-5.051c8.775,6.317,17.044,13.29,24.686,20.925 c36.203,36.226,58.536,86.09,58.551,141.348C455.881,329.286,433.548,379.136,397.345,415.368z"}),c("path",{class:"st0",d:"M122.491,278.616c0-8.671,1.654-16.91,4.656-24.478c2.428-6.108-0.567-13.028-6.674-15.45 c-6.101-2.421-13.022,0.559-15.443,6.674c-4.09,10.295-6.339,21.543-6.339,33.254c0,12.775,2.682,24.985,7.494,36.032 c2.622,6.027,9.64,8.79,15.658,6.16c6.027-2.622,8.79-9.632,6.161-15.658C124.465,297,122.491,288.062,122.491,278.616z"})]})})}function u0({className:e}){return c("svg",{viewBox:"0 0 512 512",id:"icons",className:e,children:[c("rect",{x:"48",y:"48",width:"416",height:"416",rx:"96",fill:"none","stroke-linejoin":"round","stroke-width":"32"}),c("path",{d:"M388.94,151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48,29.12-132.94,51.4A34.66,34.66,0,0,0,120,199.64l33.32,39.21a26.07,26.07,0,0,0,33.6,5.21c15.92-9.83,40.91-21.64,69.1-21.64s53.18,11.81,69.1,21.64a26.07,26.07,0,0,0,33.6-5.21L392,199.64A34.66,34.66,0,0,0,388.94,151.56Z",fill:"none","stroke-linejoin":"round","stroke-width":"32"})]})}function p0({className:e,url:t,icon:n}){return c("span",{className:`${e} shortcut`,children:c("a",{target:"_blank",href:t,children:n})})}function f0(e){let t=e.length,n;for(;t!==0;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e}function h0(){let e=[{url:"https://phones.ochobits.dev",icon:c(d0,{})},{url:"https://pomodoro.ochobits.dev",icon:c(a0,{})},{url:"https://clock.ochobits.dev",icon:c(s0,{})},{url:"https://bmi.ochobits.dev",icon:c(u0,{className:"stroke"})},{url:"https://hd.ochobits.dev",icon:c(c0,{className:"stroke"})}];e=f0(e);const t=[],n=4;for(let l=0;l<e.length;l+=n){const i=e.slice(l,l+n);t.push(i)}return c("span",{className:"appsWrapper",children:t.map((l,i)=>l.map((o,s)=>{const a=i%2!==0?"negative":"positive",p=i%2!==0?"positive":"negative";return c(p0,{className:s%2!==0?p:a,url:o.url,icon:o.icon})}))})}function Z({title:e,even:t}){const n=t&&t==="true",l=n?"negative":"positive",i=n?"positive":"negative",o=e.split("").map((s,a)=>c("span",{className:`titleCell ${a%2===0?l:i}`,children:s}));return c("div",{className:"title",children:o})}function v0(){return c("main",{class:"main",children:[c(Z,{title:"ocho",even:"true"}),c(Z,{title:"bits",even:"false"}),c("span",{className:"separator"}),c(h0,{})]})}i0(c(v0,{}),document.getElementById("app"));
