/*! For license information please see rearrange-pdf-pages.fe46d74b7cd86af28a02.js.LICENSE.txt */
!function(t){function e(e){for(var i,a,s=e[0],l=e[1],c=e[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(u&&u(e);h.length;)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={34:0,33:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="../static/build/sv/index.html";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([556,0]),n()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},144:function(t,e,n){"use strict";var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}!function(){Array.from||(Array.from=function(t){return[].slice.call(t)});var e=n(145);t.exports=function(t){function e(t){t.parentElement.removeChild(t)}function n(t,e,n){var i=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}function r(t,e){var n=this;this.$nextTick((function(){return n.$emit(t.toLowerCase(),e)}))}function a(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),r.call(e,t,n)}}var s=["Start","Add","Remove","Update","End"],l=["Choose","Sort","Filter","Clone"],c=["Move"].concat(s,l).map((function(t){return"on"+t})),u=null,d={name:"draggable",props:{options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},data:function(){return{transitionMode:!1,noneFunctionalComponentMode:!1,init:!1}},render:function(t){var e=this.$slots.default;if(e&&1===e.length){var n=e[0];n.componentOptions&&"transition-group"===n.componentOptions.tag&&(this.transitionMode=!0)}var i=e,r=this.$slots.footer;r&&(i=e?[].concat(o(e),o(r)):[].concat(o(r)));var a=null,s=function(t,e){a=function(t,e,n){return null==n||((t=null==t?{}:t)[e]=n),t}(a,t,e)};if(s("attrs",this.$attrs),this.componentData){var l=this.componentData,c=l.on,u=l.props;s("on",c),s("props",u)}return t(this.element,a,i)},mounted:function(){var e=this;if(this.noneFunctionalComponentMode=this.element.toLowerCase()!==this.$el.nodeName.toLowerCase(),this.noneFunctionalComponentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: "+this.element);var n={};s.forEach((function(t){n["on"+t]=a.call(e,t)})),l.forEach((function(t){n["on"+t]=r.bind(e,t)}));var o=i({},this.options,n,{onMove:function(t,n){return e.onDragMove(t,n)}});!("draggable"in o)&&(o.draggable=">*"),this._sortable=new t(this.rootContainer,o),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return!!this.options&&!!this.options.group&&"clone"===this.options.group.pull},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){for(var e in t)-1==c.indexOf(e)&&this._sortable.option(e,t[e])},deep:!0},realList:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){if(this.init||(this.noneFunctionalComponentMode=this.noneFunctionalComponentMode&&1==this.$children.length,this.init=!0),this.noneFunctionalComponentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick((function(){t.visibleIndexes=function(t,e,n){if(!t)return[];var i=t.map((function(t){return t.elm})),r=[].concat(o(e)).map((function(t){return i.indexOf(t)}));return n?r.filter((function(t){return-1!==t})):r}(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode)}))},getUnderlyingVm:function(t){var e,n,i=(e=this.getChildrenNodes()||[],n=t,e.map((function(t){return t.elm})).indexOf(n));return-1===i?null:{index:i,element:this.realList[i]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick((function(){e.$emit("change",t)}))},alterList:function(t){if(this.list)t(this.list);else{var e=[].concat(o(this.value));t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,t)};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,o=this.getUnderlyingPotencialDraggableComponent(e);if(!o)return{component:o};var r=o.realList,a={list:r,component:o};if(e!==n&&r&&o.getUnderlyingVm){var s=o.getUnderlyingVm(n);if(s)return i(s,a)}return a},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){this.getChildrenNodes()[t].data=null;var e=this.getComponent();e.children=[],e.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),u=t.item},onDragAdd:function(t){var n=t.item._underlying_vm_;if(void 0!==n){e(t.item);var i=this.getVmIndex(t.newIndex);this.spliceList(i,0,n),this.computeIndexes();var o={element:n,newIndex:i};this.emitChanges({added:o})}},onDragRemove:function(t){if(n(this.rootContainer,t.item,t.oldIndex),this.isCloning)e(t.clone);else{var i=this.context.index;this.spliceList(i,1);var o={element:this.context.element,oldIndex:i};this.resetTransitionData(i),this.emitChanges({removed:o})}},onDragUpdate:function(t){e(t.item),n(t.from,t.item,t.oldIndex);var i=this.context.index,o=this.getVmIndex(t.newIndex);this.updatePosition(i,o);var r={element:this.context.element,oldIndex:i,newIndex:o};this.emitChanges({moved:r})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(o(e.to.children)).filter((function(t){return"none"!==t.style.display})),i=n.indexOf(e.related),r=t.component.getVmIndex(i);return-1==n.indexOf(u)&&e.willInsertAfter?r+1:r},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var o=this.getRelatedContextFromMoveEvent(t),r=this.context,a=this.computeFutureIndex(o,t);return i(r,{futureIndex:a}),i(t,{relatedContext:o,draggedContext:r}),n(t,e)},onDragEnd:function(t){this.computeIndexes(),u=null}}};return d}(e)}()},145:function(t,e,n){var i,o;!function(r){"use strict";void 0===(o="function"==typeof(i=r)?i.call(e,n,e,t):i)||(t.exports=o)}((function(){"use strict";if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var t,e,n,i,o,r,a,s,l,c,u,d,h,f,p,g,v,m,_,b,y,D={},x=/\s+/g,w=/left|right|inline/,C="Sortable"+(new Date).getTime(),T=window,P=T.document,S=T.parseInt,E=T.setTimeout,I=T.jQuery||T.Zepto,M=T.Polymer,O=!1,k="draggable"in P.createElement("div"),N=!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&((y=P.createElement("x")).style.cssText="pointer-events:auto","auto"===y.style.pointerEvents),F=!1,B=Math.abs,L=Math.min,A=[],R=[],U=it((function(t,e,n){if(n&&e.scroll){var i,o,r,a,u,d,h=n[C],f=e.scrollSensitivity,p=e.scrollSpeed,g=t.clientX,v=t.clientY,m=window.innerWidth,_=window.innerHeight;if(l!==n&&(s=e.scroll,l=n,c=e.scrollFn,!0===s)){s=n;do{if(s.offsetWidth<s.scrollWidth||s.offsetHeight<s.scrollHeight)break}while(s=s.parentNode)}s&&(i=s,o=s.getBoundingClientRect(),r=(B(o.right-g)<=f)-(B(o.left-g)<=f),a=(B(o.bottom-v)<=f)-(B(o.top-v)<=f)),r||a||(a=(_-v<=f)-(v<=f),((r=(m-g<=f)-(g<=f))||a)&&(i=T)),D.vx===r&&D.vy===a&&D.el===i||(D.el=i,D.vx=r,D.vy=a,clearInterval(D.pid),i&&(D.pid=setInterval((function(){if(d=a?a*p:0,u=r?r*p:0,"function"==typeof c)return c.call(h,u,d,t);i===T?T.scrollTo(T.pageXOffset+u,T.pageYOffset+d):(i.scrollTop+=d,i.scrollLeft+=u)}),24)))}}),30),Y=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,i){var o=i.options.group.name;return e?t:t&&(t.join?t.indexOf(o)>-1:o==t)}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){O={capture:!1,passive:!1}}}))}catch(t){}function $(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=ot({},e),t[C]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==$.supportPointer};for(var i in n)!(i in e)&&(e[i]=n[i]);for(var o in Y(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&k,H(t,"mousedown",this._onTapStart),H(t,"touchstart",this._onTapStart),e.supportPointer&&H(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(H(t,"dragover",this),H(t,"dragenter",this)),R.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function X(e,n){"clone"!==e.lastPullMode&&(n=!0),i&&i.state!==n&&(G(i,"display",n?"none":""),n||i.state&&(e.options.group.revertClone?(o.insertBefore(i,r),e._animate(t,i)):o.insertBefore(i,t)),i.state=n)}function j(t,e,n){if(t){n=n||P;do{if(">*"===e&&t.parentNode===n||nt(t,e))return t}while(t=V(t))}return null}function V(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function H(t,e,n){t.addEventListener(e,n,O)}function W(t,e,n){t.removeEventListener(e,n,O)}function q(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(x," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(x," ")}}function G(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return P.defaultView&&P.defaultView.getComputedStyle?n=P.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function z(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function J(t,e,n,o,r,a,s,l){t=t||e[C];var c=P.createEvent("Event"),u=t.options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);c.initEvent(n,!0,!0),c.to=r||e,c.from=a||e,c.item=o||e,c.clone=i,c.oldIndex=s,c.newIndex=l,e.dispatchEvent(c),u[d]&&u[d].call(t,c)}function Q(t,e,n,i,o,r,a,s){var l,c,u=t[C],d=u.options.onMove;return(l=P.createEvent("Event")).initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,l.relatedRect=r||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),d&&(c=d.call(u,l,a)),c}function Z(t){t.draggable=!1}function K(){F=!1}function tt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function et(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!nt(t,e)||n++;return n}function nt(t,e){if(t){var n=(e=e.split(".")).shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function it(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,E((function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0}),e))}}function ot(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function rt(t){return M&&M.dom?M.dom(t).cloneNode(!0):I?I(t).clone(!0)[0]:t.cloneNode(!0)}function at(t){return E(t,0)}function st(t){return clearTimeout(t)}return $.prototype={constructor:$,_onTapStart:function(e){var n,i=this,o=this.el,r=this.options,s=r.preventOnFilter,l=e.type,c=e.touches&&e.touches[0],u=(c||e).target,d=e.target.shadowRoot&&e.path&&e.path[0]||u,h=r.filter;if(function(t){var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var i=e[n];i.checked&&A.push(i)}}(o),!t&&!(/mousedown|pointerdown/.test(l)&&0!==e.button||r.disabled)&&!d.isContentEditable&&(u=j(u,r.draggable,o))&&a!==u){if(n=et(u,r.draggable),"function"==typeof h){if(h.call(this,e,u,this))return J(i,d,"filter",u,o,o,n),void(s&&e.preventDefault())}else if(h&&(h=h.split(",").some((function(t){if(t=j(d,t.trim(),o))return J(i,t,"filter",u,o,o,n),!0}))))return void(s&&e.preventDefault());r.handle&&!j(d,r.handle,o)||this._prepareDragStart(e,c,u,n)}},_prepareDragStart:function(n,i,s,l){var c,u=this,d=u.el,h=u.options,p=d.ownerDocument;s&&!t&&s.parentNode===d&&(m=n,o=d,e=(t=s).parentNode,r=t.nextSibling,a=s,g=h.group,f=l,this._lastX=(i||n).clientX,this._lastY=(i||n).clientY,t.style["will-change"]="all",c=function(){u._disableDelayedDrag(),t.draggable=u.nativeDraggable,q(t,h.chosenClass,!0),u._triggerDragStart(n,i),J(u,o,"choose",t,o,o,f)},h.ignore.split(",").forEach((function(e){z(t,e.trim(),Z)})),H(p,"mouseup",u._onDrop),H(p,"touchend",u._onDrop),H(p,"touchcancel",u._onDrop),H(p,"selectstart",u),h.supportPointer&&H(p,"pointercancel",u._onDrop),h.delay?(H(p,"mouseup",u._disableDelayedDrag),H(p,"touchend",u._disableDelayedDrag),H(p,"touchcancel",u._disableDelayedDrag),H(p,"mousemove",u._disableDelayedDrag),H(p,"touchmove",u._disableDelayedDrag),h.supportPointer&&H(p,"pointermove",u._disableDelayedDrag),u._dragStartTimer=E(c,h.delay)):c())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),W(t,"mouseup",this._disableDelayedDrag),W(t,"touchend",this._disableDelayedDrag),W(t,"touchcancel",this._disableDelayedDrag),W(t,"mousemove",this._disableDelayedDrag),W(t,"touchmove",this._disableDelayedDrag),W(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(e,n){(n=n||("touch"==e.pointerType?e:null))?(m={target:t,clientX:n.clientX,clientY:n.clientY},this._onDragStart(m,"touch")):this.nativeDraggable?(H(t,"dragend",this),H(o,"dragstart",this._onDragStart)):this._onDragStart(m,!0);try{P.selection?at((function(){P.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(o&&t){var e=this.options;q(t,e.ghostClass,!0),q(t,e.dragClass,!1),$.active=this,J(this,o,"start",t,o,o,f)}else this._nulling()},_emulateDragOver:function(){if(_){if(this._lastX===_.clientX&&this._lastY===_.clientY)return;this._lastX=_.clientX,this._lastY=_.clientY,N||G(n,"display","none");var t=P.elementFromPoint(_.clientX,_.clientY),e=t,i=R.length;if(t&&t.shadowRoot&&(e=t=t.shadowRoot.elementFromPoint(_.clientX,_.clientY)),e)do{if(e[C]){for(;i--;)R[i]({clientX:_.clientX,clientY:_.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);N||G(n,"display","")}},_onTouchMove:function(t){if(m){var e=this.options,i=e.fallbackTolerance,o=e.fallbackOffset,r=t.touches?t.touches[0]:t,a=r.clientX-m.clientX+o.x,s=r.clientY-m.clientY+o.y,l=t.touches?"translate3d("+a+"px,"+s+"px,0)":"translate("+a+"px,"+s+"px)";if(!$.active){if(i&&L(B(r.clientX-this._lastX),B(r.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),b=!0,_=r,G(n,"webkitTransform",l),G(n,"mozTransform",l),G(n,"msTransform",l),G(n,"transform",l),t.preventDefault()}},_appendGhost:function(){if(!n){var e,i=t.getBoundingClientRect(),r=G(t),a=this.options;q(n=t.cloneNode(!0),a.ghostClass,!1),q(n,a.fallbackClass,!0),q(n,a.dragClass,!0),G(n,"top",i.top-S(r.marginTop,10)),G(n,"left",i.left-S(r.marginLeft,10)),G(n,"width",i.width),G(n,"height",i.height),G(n,"opacity","0.8"),G(n,"position","fixed"),G(n,"zIndex","100000"),G(n,"pointerEvents","none"),a.fallbackOnBody&&P.body.appendChild(n)||o.appendChild(n),e=n.getBoundingClientRect(),G(n,"width",2*i.width-e.width),G(n,"height",2*i.height-e.height)}},_onDragStart:function(e,n){var r=this,a=e.dataTransfer,s=r.options;r._offUpEvents(),g.checkPull(r,r,t,e)&&((i=rt(t)).draggable=!1,i.style["will-change"]="",G(i,"display","none"),q(i,r.options.chosenClass,!1),r._cloneId=at((function(){o.insertBefore(i,t),J(r,o,"clone",t)}))),q(t,s.dragClass,!0),n?("touch"===n?(H(P,"touchmove",r._onTouchMove),H(P,"touchend",r._onDrop),H(P,"touchcancel",r._onDrop),s.supportPointer&&(H(P,"pointermove",r._onTouchMove),H(P,"pointerup",r._onDrop))):(H(P,"mousemove",r._onTouchMove),H(P,"mouseup",r._onDrop)),r._loopId=setInterval(r._emulateDragOver,50)):(a&&(a.effectAllowed="move",s.setData&&s.setData.call(r,a,t)),H(P,"drop",r),r._dragStartId=at(r._dragStarted))},_onDragOver:function(a){var s,l,c,f,p=this.el,m=this.options,_=m.group,y=$.active,D=g===_,x=!1,T=m.sort;if(void 0!==a.preventDefault&&(a.preventDefault(),!m.dragoverBubble&&a.stopPropagation()),!t.animated&&(b=!0,y&&!m.disabled&&(D?T||(f=!o.contains(t)):v===this||(y.lastPullMode=g.checkPull(this,y,t,a))&&_.checkPut(this,y,t,a))&&(void 0===a.rootEl||a.rootEl===this.el))){if(U(a,m,this.el),F)return;if(s=j(a.target,m.draggable,p),l=t.getBoundingClientRect(),v!==this&&(v=this,x=!0),f)return X(y,!0),e=o,void(i||r?o.insertBefore(t,i||r):T||o.appendChild(t));if(0===p.children.length||p.children[0]===n||p===a.target&&function(t,e){var n=t.lastElementChild.getBoundingClientRect();return e.clientY-(n.top+n.height)>5||e.clientX-(n.left+n.width)>5}(p,a)){if(0!==p.children.length&&p.children[0]!==n&&p===a.target&&(s=p.lastElementChild),s){if(s.animated)return;c=s.getBoundingClientRect()}X(y,D),!1!==Q(o,p,t,l,s,c,a)&&(t.contains(p)||(p.appendChild(t),e=p),this._animate(l,t),s&&this._animate(c,s))}else if(s&&!s.animated&&s!==t&&void 0!==s.parentNode[C]){u!==s&&(u=s,d=G(s),h=G(s.parentNode));var P=(c=s.getBoundingClientRect()).right-c.left,S=c.bottom-c.top,I=w.test(d.cssFloat+d.display)||"flex"==h.display&&0===h["flex-direction"].indexOf("row"),M=s.offsetWidth>t.offsetWidth,O=s.offsetHeight>t.offsetHeight,k=(I?(a.clientX-c.left)/P:(a.clientY-c.top)/S)>.5,N=s.nextElementSibling,B=!1;if(I){var L=t.offsetTop,A=s.offsetTop;B=L===A?s.previousElementSibling===t&&!M||k&&M:s.previousElementSibling===t||t.previousElementSibling===s?(a.clientY-c.top)/S>.5:A>L}else x||(B=N!==t&&!O||k&&O);var R=Q(o,p,t,l,s,c,a,B);!1!==R&&(1!==R&&-1!==R||(B=1===R),F=!0,E(K,30),X(y,D),t.contains(p)||(B&&!N?p.appendChild(t):s.parentNode.insertBefore(t,B?N:s)),e=t.parentNode,this._animate(l,t),this._animate(c,s))}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),G(e,"transition","none"),G(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,G(e,"transition","all "+n+"ms"),G(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=E((function(){G(e,"transition",""),G(e,"transform",""),e.animated=!1}),n)}},_offUpEvents:function(){var t=this.el.ownerDocument;W(P,"touchmove",this._onTouchMove),W(P,"pointermove",this._onTouchMove),W(t,"mouseup",this._onDrop),W(t,"touchend",this._onDrop),W(t,"pointerup",this._onDrop),W(t,"touchcancel",this._onDrop),W(t,"pointercancel",this._onDrop),W(t,"selectstart",this)},_onDrop:function(a){var s=this.el,l=this.options;clearInterval(this._loopId),clearInterval(D.pid),clearTimeout(this._dragStartTimer),st(this._cloneId),st(this._dragStartId),W(P,"mouseover",this),W(P,"mousemove",this._onTouchMove),this.nativeDraggable&&(W(P,"drop",this),W(s,"dragstart",this._onDragStart)),this._offUpEvents(),a&&(b&&(a.preventDefault(),!l.dropBubble&&a.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),o!==e&&"clone"===$.active.lastPullMode||i&&i.parentNode&&i.parentNode.removeChild(i),t&&(this.nativeDraggable&&W(t,"dragend",this),Z(t),t.style["will-change"]="",q(t,this.options.ghostClass,!1),q(t,this.options.chosenClass,!1),J(this,o,"unchoose",t,e,o,f),o!==e?(p=et(t,l.draggable))>=0&&(J(null,e,"add",t,e,o,f,p),J(this,o,"remove",t,e,o,f,p),J(null,e,"sort",t,e,o,f,p),J(this,o,"sort",t,e,o,f,p)):t.nextSibling!==r&&(p=et(t,l.draggable))>=0&&(J(this,o,"update",t,e,o,f,p),J(this,o,"sort",t,e,o,f,p)),$.active&&(null!=p&&-1!==p||(p=f),J(this,o,"end",t,e,o,f,p),this.save()))),this._nulling()},_nulling:function(){o=t=e=n=r=i=a=s=l=m=_=b=p=u=d=v=g=$.active=null,A.forEach((function(t){t.checked=!0})),A.length=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":case"mouseover":this._onDrop(e);break;case"dragover":case"dragenter":t&&(this._onDragOver(e),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.preventDefault()}(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,i=0,o=n.length,r=this.options;i<o;i++)j(t=n[i],r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||tt(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach((function(t,i){var o=n.children[i];j(o,this.options.draggable,n)&&(e[t]=o)}),this),t.forEach((function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))}))},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return j(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&Y(n)},destroy:function(){var t=this.el;t[C]=null,W(t,"mousedown",this._onTapStart),W(t,"touchstart",this._onTapStart),W(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(W(t,"dragover",this),W(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),R.splice(R.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},H(P,"touchmove",(function(t){$.active&&t.preventDefault()})),$.utils={on:H,off:W,css:G,find:z,is:function(t,e){return!!j(t,e,t)},extend:ot,throttle:it,closest:j,toggleClass:q,clone:rt,index:et,nextTick:at,cancelNextTick:st},$.create=function(t,e){return new $(t,e)},$.version="1.7.0",$}))},2:function(t,e){t.exports=Cookie},5:function(t,e){t.exports=base64},556:function(t,e,n){"use strict";var i=u(n(65)),o=u(n(1)),r=n(4);n(8);var a=u(n(144)),s=n(22),l=n(6),c=n(15);function u(t){return t&&t.__esModule?t:{default:t}}n(0),new o.default({el:"#app",mixins:[r.publicMixin,l.uploadMixin,c.singlePdfMixin,r.filterMixin,r.trackMixin,r.shareDocumentMixin],data:function(){return{filePages:[],firstPage:{page:0,rotate:0},pdfListImages:[],initImgFinished:!1}},created:function(){this.specialPdfHandle=this.initPdfView,this.pdfInitRender=this.pdfStartRender,this.getTaskSessionList()},mounted:function(){},methods:{resetData:function(){this.filePages=[]},initPdfView:function(t){var e=this,n=new s.PdfView({upload_id:t.upload_id,doc:t.file,file_id:t.file_id,fileUrl:t.fileUrl,password:t.password,readPdfSuccess:function(i){e.initFilePages(i),e.getPdfPages(i,t,n)},renderFail:function(n){e.readPDfFailed(t,n)}})},initCanvasImg:function(){if(!this.initImgFinished){for(var t=0,e=this.filePages.length;t<e;t++)if(!this.filePages[t].img){var n=document.getElementById(this.file.upload_id+"_"+this.filePages[t].page);n&&(this.filePages[t].img=n.toDataURL("image/png"),n.parentNode.removeChild(n))}this.initImgFinished=!0}},pdfStartRender:function(t){this.isSafari?setTimeout((function(){t.initRender({height:200,startPage:1})}),500):t.initRender({height:200,startPage:1})},initFilePages:function(t){if(t||(t=this.file.total_page),this.initImgFinished=!1,this.filePages=[],t>0)for(var e=0;e<t;e++)this.filePages.push({page:e+1,id:e+1,img:"",addBorder:!1,showTemp:!0});this.step=r.common.steps.optionSet},renderGetImg:function(t,e){for(var n=0,i=this.filePages.length;n<i;n++)t===this.filePages[n].page&&(this.filePages[n].img=e);this.step=r.common.steps.optionSet},rearrange:function(){var t=this;this.step=r.common.steps.processing;for(var e=void 0,n=[],o=0,a=this.filePages.length;o<a;o++)n.push(this.filePages[o].page);e=this.password?{file_id:this.file.file_id,save_files:(0,i.default)({},this.file.file_name.split(".pdf")[0],n),password:this.password}:{file_id:this.file.file_id,save_files:(0,i.default)({},this.file.file_name.split(".pdf")[0],n),password:""},r.https.post(r.https.httpUrls.interfaceUrl+r.https.httpUrls.extractPage,e,(function(e){t.startOperateCallBack(e),t.filePages=[]}),(function(e){t.error=r.https.handleError(e),t.step=r.common.steps.fail})),this.gaVueTrack(4)},shareFile:function(t){this.shareFilePublic(t,this.getConvertData.task_id)},changeShareType:function(t){this.shareType=t,"link"!=t||this.linkMessage||this.shareFilePublic(2,this.getConvertData.task_id)}},components:{draggable:a.default}})}});