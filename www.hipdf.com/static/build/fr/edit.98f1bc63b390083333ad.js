!function(e){function t(t){for(var i,a,l=t[0],p=t[1],d=t[2],h=0,c=[];h<l.length;h++)a=l[h],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&c.push(o[a][0]),o[a]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(e[i]=p[i]);for(r&&r(t);c.length;)c.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,l=1;l<n.length;l++){var p=n[l];0!==o[p]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={10:0,33:0},s=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="../static/build/fr/index.html";var l=window.webpackJsonp=window.webpackJsonp||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var r=p;s.push([443,0]),n()}({0:function(e,t){e.exports=MutiLang},1:function(e,t){e.exports=Vue},2:function(e,t){e.exports=Cookie},443:function(e,t,n){"use strict";var i=c(n(29)),o=c(n(146)),s=c(n(1)),a=n(4);n(8),n(148);var l=n(149),p=c(n(150));n(20);var d=n(6),r=n(15),h=n(73);n(24);function c(e){return e&&e.__esModule?e:{default:e}}var u=n(0),f=n(2);s.default.use(p.default);var g=new o.default;s.default.directive("drag",{inserted:function(e,t){var n=e,i=!1,o=t.value.zIndexPost,s="",a="",l="";m(n.parentNode,t.value.type,o,t.value.bank),n.onmousedown=function(e){e.preventDefault(),s=e.clientX-n.parentNode.offsetLeft,a=e.clientY-n.parentNode.offsetTop,l=n.parentNode.parentNode.parentNode.scrollTop,i=!0,document.onmousemove=function(e){var p=[0,n.parentNode.parentNode.clientWidth,1,n.parentNode.parentNode.offsetHeight-12];if(i){var d=e.clientX-s,r=e.clientY-a,h=n.parentNode.offsetWidth,c=n.parentNode.offsetHeight,u={left:d=d<=p[0]?p[0]:d>=p[1]-h?p[1]-h:d,top:r=n.parentNode.parentNode.parentNode.scrollTop>l?r<=p[2]?p[2]:(r>=p[3]-c?p[3]-c:r)+n.parentNode.parentNode.parentNode.scrollTop-l:r<=p[2]?p[2]:(r>=p[3]-c?p[3]-c:r)-(l-n.parentNode.parentNode.parentNode.scrollTop)};t.value.bank(o,u)}},document.onmouseup=function(e){e.preventDefault(),document.onmousemove=null,document.onmouseup=null,i=!1},document.onmouseleave=function(){e.preventDefault(),document.onmousemove=null,document.onmouseup=null,i=!1}}}}),s.default.directive("zoom",{inserted:function(e,t){var n=e,i="",o="",s="",a=!1;n.onmousedown=function(e){e.preventDefault(),i=t.value.type,o=t.value.zIndexPost;var l=e.clientX,p=e.clientY,d=n.parentNode.parentNode.offsetTop,r=n.parentNode.parentNode.offsetLeft,h=(n.parentNode.parentNode.parentNode.parentNode.scrollTop,n.parentNode.parentNode.clientHeight),c=n.parentNode.parentNode.clientWidth;a=!0,document.onmousemove=function(e){if(s=t.value.objValue,a){var u=parseInt(e.pageY)-parseInt(p),f=parseInt(e.pageX)-parseInt(l),m=u+parseInt(d),y=f+parseInt(r);switch(i){case"edit_left_top":if(parseInt(c)-f<=n.parentNode.parentNode.parentNode.clientWidth&&parseInt(c)-f>s.styleCss._minWidth&&parseInt(h)-u>=s.styleCss._minHeight+20){"images"===s.type?(n.parentNode.parentNode.style.width=parseInt(c)-f+"px",n.parentNode.parentNode.style.height=parseInt(h)-u+"px"):"line"===s.type?(n.parentNode.parentNode.style.width=parseInt(c)-f+"px",n.parentNode.parentNode.style.height=parseInt(c)-f+"px"):(n.parentNode.parentNode.style.height=parseInt(h)-u+"px",n.parentNode.parentNode.style.width=parseInt(c)-f+"px"),n.parentNode.parentNode.style.top=m+"px",n.parentNode.parentNode.style.left=y+"px";var v={left:y,top:m};t.value.bank(o,v)}break;case"edit_left_bottom":if(parseInt(c)-f<=n.parentNode.parentNode.parentNode.clientWidth&&parseInt(c)-f>s.styleCss._minWidth&&parseInt(h)+u>=s.styleCss._minHeight+20){"images"===s.type?(n.parentNode.parentNode.style.width=parseInt(c)-f+"px",n.parentNode.parentNode.style.height=parseInt(h+u)+"px"):"line"===s.type?(n.parentNode.parentNode.style.height=parseInt(h)+u+"px",n.parentNode.parentNode.style.width=parseInt(h)+u+"px"):(n.parentNode.parentNode.style.height=parseInt(h)+u+"px",n.parentNode.parentNode.style.width=parseInt(c)-f+"px"),n.parentNode.parentNode.style.left=y+"px";v={left:y};t.value.bank(o,v)}break;case"edit_right_bottom":parseInt(c)+f<=n.parentNode.parentNode.parentNode.clientWidth&&parseInt(c)+f>s.styleCss._minWidth&&parseInt(h)+u>=s.styleCss._minHeight+20&&("images"===s.type?(n.parentNode.parentNode.style.width=parseInt(c)+f+"px",n.parentNode.parentNode.style.height=parseInt(h+u)+"px"):"line"===s.type?(n.parentNode.parentNode.style.height=parseInt(h)+u+"px",n.parentNode.parentNode.style.width=parseInt(h)+u+"px"):(n.parentNode.parentNode.style.height=parseInt(h)+u+"px",n.parentNode.parentNode.style.width=parseInt(c)+f+"px"))}g.set(o,!0)}},document.onmouseup=function(e){e.preventDefault(),document.onmousemove=null,document.onmouseup=null,a=!1},document.onmouseleave=function(){e.preventDefault(),document.onmousemove=null,document.onmouseup=null,a=!1}}}}),s.default.directive("rotate",{inserted:function(e,t){var n,i,o=e,s=t.value.zIndexPost,a=!1;o.onmousedown=function(e){e.preventDefault(),o.parentNode.parentNode.style.cursor="alias",n=parseInt(o.parentNode.parentNode.offsetLeft)+parseInt(o.parentNode.parentNode.clientWidth)/2,i=parseInt(o.parentNode.parentNode.offsetTop)+parseInt(o.parentNode.parentNode.clientHeight)/2-o.parentNode.parentNode.parentNode.parentNode.scrollTop;var l=document.documentElement.clientWidth-1200;a=!0,document.onmousemove=function(e){if(a){var o=parseInt(e.pageX)-l/2-parseInt(n),p=parseInt(e.pageY)-121-parseInt(i),d=Math.abs(o/p),r=Math.atan(d)/(2*Math.PI)*360;o<0&&p<0?r=-r:o<0&&p>0?r=-(180-r):o>0&&p<0?r=r:o>0&&p>0&&(r=180-r),t.value.bank(s,r)}},document.onmouseup=function(e){e.preventDefault(),o.parentNode.parentNode.style.cursor="all",document.onmousemove=null,document.onmouseup=null,a=!1},document.onmouseleave=function(){e.preventDefault(),o.parentNode.parentNode.style.cursor="all",document.onmousemove=null,document.onmouseup=null,a=!1}}}});var m=function(e,t,n,i){if("draw"!==t){e.offsetTop,e.offsetLeft;if("absolute"===e.style.position)return;e.style.position="absolute";var o={left:e.parentNode.clientWidth/2-e.clientWidth/2,top:e.parentNode.parentNode.clientHeight/3-e.clientHeight/2+e.parentNode.parentNode.scrollTop};e.style.zIndex=1e6,i(n,o)}};new s.default({el:"#app",mixins:[a.publicMixin,d.uploadMixin,r.singlePdfMixin,a.trackMixin,a.shareDocumentMixin],data:function(){return{showSplitOption:!1,lockPassword:"",input_change:"",noPassword:!1,disabled:!0,editUpload:!0,acceptFormat:"application/pdf",limitFormat:a.common.types.pdf,nodeEdit:[],fontSize:[{name:"small",value:16},{name:"normal",value:20},{name:"large",value:24}],fontFamily:["Noto Sans","Noto Serif","Ubuntu Mono"],fontColor:["#ffffff","#000000","#0000ff","#ffc000","#ff00ff","#ff0000"],pathLineColor:["#47f267","#666666","#000000","#ffffff","#ffc000","#0000ff","#ff00ff","#ff0000"],pathColor:["none","#666666","#000000","#ffffff","#ffc000","#0000ff","#ff00ff","#ff0000"],lineStyle:[1,2,4],lineVirtual:["path_solid","path_maxDotted","path_minDotted"],lineDirection:["path_line","path_arrow","path_round"],imagesList:[],imagesListH:[],oss_domain:"sz-pe-pdf-test.oss-cn-shenzhen.aliyuncs.com",proportion:[],dpi:"",pdfFileID:"",file:{oldPdfName:"",url:"",file_name:"",target_name:""},canvasEdit:{zIndex:-1,pointerEvents:"none"},sessionArray:[],totalPage:0,applyDisabled:!0,user:"",showRecommemdBox:!0}},created:function(){var e=this;this.user=f.getUserInfo(),e.pdfCheckSucess=e.showOption,e.resetMoreData=e.resetMoreDataAction,e.inputId="inputFile";var t=[];if(this.user&&this.user.email)this.getSignOperate();else if(null!=a.session.getSession("sing")?a.session.getSession("sing").indexOf("&&&&")>=0?t=a.session.getSession("sing").split("&&&&"):t.push(a.session.getSession("sing")):t="",t[0]&&""!=t[0].id)this.getSign(t);else{this.getSign("")}},mounted:function(){var e=this;this.taskNextStepCallback=function(){e.getDpi(),e.pdfFileID=e.fileDatas[0].file_id,e.showSplitOption=!1,e.step=a.common.steps.processing,document.getElementById("footer").style.display="none",document.getElementById("editUploadDiv").style.display="block",document.getElementById("editContainer").style.display="none",e.editUpload=!1,e.getPDFPageSize()},this.getTaskSessionList()},methods:{getSign:function(e){if(e){var t=this;t.sessionArray=[],t.user&&t.user.email?e.forEach((function(e){var n=JSON.parse(e.content);n.insert_time=e.insert_time,t.sessionArray.push(n)})):e.forEach((function(e){var n=JSON.parse(e);t.sessionArray.push(n)}))}},getSignOperate:function(){var e=this;a.https.get(a.https.httpUrls.interfaceUrl+a.https.httpUrls.signOperate,(function(t){1===t.result&&e.getSign(t.data.record)}),(function(){}))},deleteSign:function(e){var t=this;if(t.user&&t.user.email){var n={insert_time:e.insert_time};a.https.httpRequest("DELETE",a.https.httpUrls.interfaceUrl+a.https.httpUrls.signOperate,n,(function(e){1===e.result&&t.getSignOperate()}),(function(){}))}else{var o="";t.sessionArray.forEach((function(n,i){if(n.id===e.id)return t.sessionArray.splice(i,1),!0})),t.sessionArray.forEach((function(e,t){""===o?o=(0,i.default)(e):o+="&&&&"+(0,i.default)(e)})),a.session.setSession("sing",o),o=""}},stepChange:function(e){this.step=e},getDpi:function(){void 0!==window.screen.deviceXDPI?this.dpi=window.screen.deviceYDPI:this.dpi=this.$refs.dpi.offsetHeight},resetMoreDataAction:function(){this.showSplitOption=!1,this.step=a.common.steps.selectUpload,document.getElementById(this.inputId).value="",document.getElementById("inputFileImages").value="",this.error=a.common.initError()},showOption:function(){this.pdfFileID=this.file.file_id,this.step=a.common.steps.upload,this.getPDFPageSize()},gernerateRef:function(e,t){return t+e},getPDFPageSize:function(){var e=this;e.resetMoreDataAction(),e.imagesListH=[],e.imagesList=[],e.step=a.common.steps.processing,e.showSplitOption=!1,e.step=a.common.steps.processing,e.editUpload=!1,document.getElementById("footer").style.display="none",document.getElementById("editUploadDiv").style.display="block",document.getElementById("editContainer").style.display="none",setTimeout((function(){(0,l.editView)(e.file,e.password,(function(t){e.totalPage=t}),(function(t,n,i,o){e.proportion=t,n.forEach((function(t,n){0===n?e.imagesListH.push(t):e.imagesListH.push(t+e.imagesListH[n-1]+10),0===(o[n]+360)%180?e.imagesList.push({page:n+1,width:i[n][2],height:i[n][3]-i[n][1]}):e.imagesList.push({page:n+1,width:i[n][3],height:i[n][2]}),document.getElementById("imgCanvasID_"+(n+1)).style.height=t+"px"})),e.applyDisabled=!1}),(function(){e.getDpi(),e.showSplitOption=!0,e.editUpload=!0,document.getElementById("footer").style.display="block",document.getElementById("editUploadDiv").style.display="none",e.error=a.https.handleError(3500),e.step=a.common.steps.fail}))}),2e3)},conversion:function(e){var t=this;1===e.result?(t.imagesList=JSON.parse(e.data.pages),t.proportion=1200/t.imagesList[0].width,t.imagesList.forEach((function(e,n){t.file.oss_domain&&(t.oss_domain=t.file.oss_domain),e.src="//"+t.oss_domain+"/files/"+t.fileDatas[0].file_id+"/"+(n+1)+".jpg?x-oss-process=image/resize,w_1200",0===n?t.imagesListH.push(Math.round(1200/e.width*e.height)):t.imagesListH.push(Math.round(1200/e.width*e.height)+t.imagesListH[n-1]+10)})),this.getDpi(),document.getElementById("footer").style.display="none",document.getElementById("editUploadDiv").style.display="block",document.getElementById("editContainer").style.display="none",t.showSplitOption=!1,t.step=a.common.steps.processing,t.editUpload=!1):(t.error=a.https.handleError(e.status),t.step=a.common.steps.fail)},dropBank:function(e,t){for(var n in t)"left"===n?this.nodeEdit[e].styleCss.left=t[n]:"top"===n&&(this.nodeEdit[e].styleCss.top=t[n])},rotateBank:function(e,t){this.nodeEdit[e].styleCss.rotate=t+"deg"},removeNode:function(e,t){g.set(t,!1),this.nodeEdit.splice(t,1)},addNodeText:function(e){this.removeAction(),"text"===e&&this.nodeEdit.push({type:"text",active:!0,page:1,styleTabs:1,fontStyleEdit:!1,pointerEvents:"all",placeholder:u.lang.inputDefault,textarea:"",arrLength:"",wrap:"off",cursor:"all-scroll",styleCss:{width:200,height:25,_minWidth:80,_minHeight:25,rows:1,top:"50%",left:"50%",fontSize:16,fontFamily:"Arial",fontColor:"#000000"}}),this.$nextTick((function(){document.getElementById("textedit"+(this.nodeEdit.length-1)).focus()}))},addDraw:function(e){var t=this;t.canvasEdit={zIndex:1e5,pointerEvents:"all"};for(var n=document.getElementsByTagName("canvas"),i=[],o=[],s=[],a=[],l=[],p=[],d=0;d<n.length;d++)!function(e){i[e]=n[e].getContext("2d"),i[e].strokeStyle="#000",i[e].fillStyle="#000",i[e].lineWidth=1,n[e].onmousedown=function(d){p=[],o[e]=d.clientX-(document.documentElement.clientWidth-1200)/2,s[e]=d.clientY-121+document.getElementById("editContent").scrollTop-n[e].clientHeight*e-10*e,i[e].beginPath(),i[e].moveTo(o[e],s[e]),n[e].onmousemove=function(t){a[e]=t.clientX-(document.documentElement.clientWidth-1200)/2,l[e]=t.clientY-121+document.getElementById("editContent").scrollTop-n[e].clientHeight*e-10*e,p.push({x:a[e],y:l[e],yy:t.clientY-121+document.getElementById("editContent").scrollTop}),i[e].lineCap="round",i[e].lineTo(a[e],l[e]),i[e].stroke()},document.onmouseup=function(){p.length>=5&&t.svgPath(p,i[e],n[e].clientHeight),n[e].onmousemove=null,document.onmouseup=null}}}(d)},singBox:function(){var e=this;e.$sign({email:"",text:u.lang.createSignature,sbutitle:u.lang.singatureTitle,atitle:u.lang.freeTry,esignUrl:"https://signx.wondershare.com",button:[{text:u.lang.create,ontap:function(t){var n=[];e.user&&e.user.email?e.getSignOperate():(null!=a.session.getSession("sing")?a.session.getSession("sing").indexOf("&&&&")>=0?n=a.session.getSession("sing").split("&&&&"):n.push(a.session.getSession("sing")):n=[],e.getSign(n)),t&&e.addSing(t)}}]})},addSing:function(e){if("sing"===e.type){this.nodeEdit.push({type:"images",active:!0,page:1,fileFile:e.id,src:e.image,styleCss:{width:e.w>800?800:e.w+20,height:e.h,_minWidth:80,_minHeight:e.h,left:"50%",rows:1}})}else{var t=document.getElementById("editMainBox").offsetWidth;this.nodeEdit.push({type:"images",active:!0,page:1,fileFile:e.id,src:e.image,styleCss:{width:1*t/4>=60?1*t/4+20:80,height:"auto",_minWidth:80,_minHeight:t/(t/60),left:"50%",rows:1}})}},svgPath:function(e,t,n){for(var i=[],o=[],s=[],a=0;a<e.length;a++)i.push(e[a].x),o.push(e[a].y),s.push(e[a].yy);for(var l=0;l<e.length;l++)e[l].x=e[l].x-Math.min.apply(null,i)+10,e[l].y=e[l].y-Math.min.apply(null,o)+10;var p=d3.line().x((function(e){return e.x})).y((function(e){return e.y})).curve(d3.curveBasis);t.clearRect(0,0,1200,n),this.canvasEdit={zIndex:-1,pointerEvents:"none"},this.nodeEdit.push({type:"draw",active:!1,page:1,styleTabs:1,fontStyleEdit:!1,styleCss:{width:Math.max.apply(null,i)-Math.min.apply(null,i)+20,height:Math.max.apply(null,o)-Math.min.apply(null,o)+20,_minWidth:80,_minHeight:60,svg:{width:Math.max.apply(null,i)-Math.min.apply(null,i)+20,height:Math.max.apply(null,o)-Math.min.apply(null,o)+20,path:p(e)},rotate:"0deg",rows:1,top:Math.min.apply(null,s)-10,left:Math.min.apply(null,i)-10,lineStyle:1,fontfileter:"none",fontColor:"#000000"}})},addNodePath:function(e){switch(this.removeAction(),e){case"path":this.nodeEdit.push({type:"path",active:!0,page:1,styleTabs:1,fontStyleEdit:!1,linePath:"M0 95 190 95",styleCss:{width:220,height:200,_minWidth:80,_minHeight:60,rows:1,top:"50%",left:"50%",lineStyle:1,fontfileter:"none",fontColor:"#000000"}});break;case"rect":this.nodeEdit.push({type:"rect",active:!0,page:1,styleTabs:1,fontStyleEdit:!1,linePath:"M0 95 190 95",styleCss:{width:220,height:200,_minWidth:80,_minHeight:60,rows:1,top:"50%",left:"50%",lineStyle:1,fontfileter:"none",fontColor:"#000000"}});break;case"line":this.nodeEdit.push({type:"line",active:!0,page:1,styleTabs:1,fontStyleEdit:!1,linePath:"M0 95 190 95",pathType:"path_line",lineVirtual:"path_solid",styleCss:{width:220,height:200,_minWidth:80,_minHeight:60,rotate:"0deg",rows:1,top:"50%",left:"50%",lineStyle:1,fontfileter:"#000000",fontColor:"#000000"}})}},removeAction:function(){var e=this;e.nodeEdit.forEach((function(t,n){null!==t&&(e.nodeEdit[n].active=!1),"text"===t.type&&(e.nodeEdit[n].pointerEvents="none")}))},addStyle:function(e,t,n){for(var i=this,o=0;o<i.nodeEdit.length;o++)null!==i.nodeEdit[o]&&(t===o?(i.nodeEdit[o].active=!0,document.getElementById("nodeEdit"+o).style.zIndex=1e6,i.nodeEdit[o].pointerEvents="all"):(i.nodeEdit[o].active=!1,"text"===i.nodeEdit[o].type&&document.getElementById("textedit"+o).blur(),document.getElementById("nodeEdit"+o).style.zIndex=10+t,i.nodeEdit[o].pointerEvents="none"));n.stopPropagation()},clearStyle:function(e){var t="",n=this;for(var i in e.path)t+=" "+e.path[i].className;t.indexOf("text_drop")<0?n.nodeEdit.forEach((function(e,t){null!==e&&(n.nodeEdit[t].active=!1,document.getElementById("textedit"+t)&&document.getElementById("textedit"+t).blur(),n.nodeEdit[t].pointerEvents="none",document.getElementById("nodeEdit"+t).style.zIndex=10+t)})):t.indexOf("text_drop active")>0&&n.nodeEdit.forEach((function(e,t){null!==e&&!0===n.nodeEdit[t].active&&(n.nodeEdit[t].pointerEvents="all",document.getElementById("nodeEdit"+t).style.zIndex=1e6,"text"===e.type&&document.getElementById("textedit"+t).focus(),n.nodeEdit[t].active=!0)}))},descInput:function(e,t,n){var i=document.getElementById("arrLength"+t);if(!0===g.get(t))this.nodeEdit[t].wrap="physical";else{var o=this.nodeEdit[t].textarea.split("\n");this.nodeEdit[t].styleCss.rows=o.length;for(var s=o[0].length,a="",l=0;l<o.length;l++)0===l?a=o[l]:a+="<br>"+o[l],o[l].length>s&&(s=o[l].length,l);this.nodeEdit[t].arrLength=a,this.$nextTick((function(){i.clientWidth<=200?this.nodeEdit[t].styleCss.width=200:i.clientWidth>=1185?(this.nodeEdit[t].styleCss.width=1185,this.nodeEdit[t].wrap="physical"):(this.nodeEdit[t].wrap="off",this.nodeEdit[t].styleCss.width=i.clientWidth+20),!0===g.get(t)&&(this.nodeEdit[t].wrap="physical")}))}},selectTabs:function(e,t){this.nodeEdit[t].styleTabs=e,this.nodeEdit[t].fontStyleEdit=!0},styleClick:function(e,t,n,i){switch(e){case"fontSize":this.nodeEdit[n].styleCss.fontSize=t.value,!0!==g.get(n)&&(16===t.value?this.nodeEdit[n].styleCss.height=25:20===t.value?this.nodeEdit[n].styleCss.height=32:24===t.value&&(this.nodeEdit[n].styleCss.height=40),this.descInput("",n)),16===t.value?this.nodeEdit[n].styleCss.height=25:20===t.value?this.nodeEdit[n].styleCss.height=32:24===t.value&&(this.nodeEdit[n].styleCss.height=40),this.descInput("",n);break;case"fontFamily":this.nodeEdit[n].styleCss.fontFamily=t,this.descInput("",n);break;case"fontColor":case"pathColor":this.nodeEdit[n].styleCss.fontColor=t;break;case"pathfileter":this.nodeEdit[n].styleCss.fontfileter=t;break;case"pathlineStyle":this.nodeEdit[n].styleCss.lineStyle=t;break;case"pathlineDirection":this.nodeEdit[n].pathType=t;break;case"pathlineVirtual":this.nodeEdit[n].lineVirtual=t}this.nodeEdit[n].fontStyleEdit=!1},showeditStyle:function(e){this.nodeEdit[e].fontStyleEdit=!this.nodeEdit[e].fontStyleEdit},leaveEditStyle:function(e){this.nodeEdit[e].fontStyleEdit=!1},imageFil:function(){this.acceptFormat="image/*",this.limitFormat=a.common.types.image,this.$refs.inputFileImages.click()},uploadEditImage:function(e){var t=this;h.uploadImageMethod.uploadImages(e,this.uploadImagesBack,(function(e){t.$refs.inputFileImages.value="",t.$message({type:"error",text:e})}))},apply:function(){var e=this,t=this;t.getDpi();var n,i=t.imagesListH,s="",l="",p="",d="",r=new o.default;r.set("text",0),r.set("images",0),r.set("path",0),r.set("rect",0),r.set("line",0),this.nodeEdit.forEach((function(n,o){if(s="",l="",p="",n){for(var a=n.styleCss.top,h=0;h<i.length;h++)0===h?a>=0&&a<=i[h]&&(n.page=h+1):a>i[h-1]&&a<=i[h]&&(n.page=h+1);if("text"===n.type){document.documentElement.clientWidth;var c=t.$refs.nodeEdit[o].clientWidth,u=t.$refs.nodeEdit[o].clientHeight,f=n.styleCss.left/t.proportion[n.page-1]+6,g=0,m=n.styleCss.top+11+n.styleCss.fontSize;n.page>=2&&(m=m-i[n.page-2]-10),16===n.styleCss.fontSize?g=0:20===n.styleCss.fontSize?g=2:24===n.styleCss.fontSize&&(g=0);var y=f+c,v=(m=(t.imagesList[n.page-1].height*t.proportion[n.page-1]-m)/t.proportion[n.page-1]-g)+n.styleCss.fontSize/t.dpi*72;s+="<data type='text' action='add'>";for(var E=n.textarea.split("\n"),N=0;N<E.length;N++){var x=E[N].replace(/\&+/g,"&amp;");x=(x=(x=(x=x.replace(/\>+/g,"&gt;")).replace(/\<+/g,"&lt;")).replace(/\"+/g,"&quot;")).replace(/\'+/g,"&apos;"),s+="<content>"+x+"</content>"}s+="<font embedded='true'>"+n.styleCss.fontFamily+"</font>",s+="<font-size>"+n.styleCss.fontSize/e.dpi*72+"</font-size>",s+="<line-end-position>",s+="<x>"+y+"</x>",s+="<y>"+v+"</y>",s+="</line-end-position>",s+="<color>",s+="<fill>"+n.styleCss.fontColor+"</fill>",s+="<stroke>none</stroke>",s+="</color>",s+="<position>",s+="<x>"+f+"</x>",s+="<y>"+m+"</y>",s+="</position>",s+="<page>"+n.page+"</page>",s+="</data>",r.set("text",r.get("text")+1),d+=s}else if("images"===n.type){var I=t.$refs.uploadImages[r.get("images")].clientWidth,w=t.$refs.uploadImages[r.get("images")].clientHeight+4;f=n.styleCss.left/t.proportion[n.page-1]+6,m=n.styleCss.top+w;n.page>=2&&(m=m-i[n.page-2]-10),m=(e.imagesList[n.page-1].height*t.proportion[n.page-1]-m)/t.proportion[n.page-1]-4,l+="<data type='image' action='add'>",l+="<file>"+n.fileFile+"</file>",l+="<width>"+I/t.proportion[n.page-1]+"</width>",l+="<height>"+w/t.proportion[n.page-1]+"</height>",l+="<position>",l+="<x>"+f+"</x>",l+="<y>"+m+"</y>",l+="</position>",l+="<page>"+n.page+"</page>",l+="</data>",r.set("images",r.get("images")+1),d+=l}else if("path"===n.type){document.documentElement.clientWidth,c=(S=document.getElementById("shapeRect"+o)).clientWidth,u=S.clientHeight;S.innerHTML.split('xmlns="http://www.w3.org/2000/svg"').length-1>=2&&S.childNodes[0].removeAttribute("xmlns"),(_=S.cloneNode(!0)).childNodes[0].setAttribute("height",u/t.proportion[n.page-1]),_.childNodes[0].removeAttribute("id"),_.childNodes[0].setAttribute("width",c/t.proportion[n.page-1]),_.childNodes[0].setAttribute("viewBox","0 0 "+c/t.proportion[n.page-1]+" "+u/t.proportion[n.page-1]),_.childNodes[0].childNodes[0].setAttribute("rx","49%"),_.childNodes[0].childNodes[0].setAttribute("ry","49%");f=n.styleCss.left/t.proportion[n.page-1]+10,m=n.styleCss.top+u;n.page>=2&&(m=m-i[n.page-2]-10),m=(t.imagesList[n.page-1].height*t.proportion[n.page-1]-m)/t.proportion[n.page-1]-10,p+="<data type='svg' action='add'>",p+="<file></file>",p+="<svgContent>"+_.innerHTML+"</svgContent>",p+="<position>",p+="<x>"+f+"</x>",p+="<y>"+m+"</y>",p+="</position>",p+="<page>"+n.page+"</page>",p+="</data>",r.set("path",r.get("path")+1),d+=p,_=""}else if("rect"===n.type){document.documentElement.clientWidth,c=(S=document.getElementById("shapeRect"+o)).clientWidth,u=S.clientHeight;S.innerHTML.split('xmlns="http://www.w3.org/2000/svg"').length-1>=2&&S.childNodes[0].removeAttribute("xmlns"),(_=S.cloneNode(!0)).childNodes[0].setAttribute("height",u/t.proportion[n.page-1]),_.childNodes[0].removeAttribute("id"),_.childNodes[0].setAttribute("width",c/t.proportion[n.page-1]),_.childNodes[0].setAttribute("viewBox","0 0 "+c/t.proportion[n.page-1]+" "+u/t.proportion[n.page-1]),_.childNodes[0].childNodes[0].style.strokeWidth=n.styleCss.lineStyle;f=n.styleCss.left/t.proportion[n.page-1]+10,m=n.styleCss.top+u;n.page>=2&&(m=m-i[n.page-2]-10),m=(t.imagesList[n.page-1].height*t.proportion[n.page-1]-m)/t.proportion[n.page-1]-10,p+="<data type='svg' action='add'>",p+="<file></file>",p+="<svgContent>"+_.innerHTML+"</svgContent>",p+="<position>",p+="<x>"+f+"</x>",p+="<y>"+m+"</y>",p+="</position>",p+="<page>"+n.page+"</page>",p+="</data>",r.set("rect",r.get("rect")+1),d+=p,_=""}else if("line"===n.type){document.documentElement.clientWidth,c=(S=document.getElementById("shapeRect"+o)).clientWidth,u=S.clientHeight;var C=0;C="path_line"===n.pathType?0:"path_arrow"===n.pathType?2:4,S.innerHTML.split('xmlns="http://www.w3.org/2000/svg"').length-1>=2&&S.childNodes[C].removeAttribute("xmlns"),(_=S.cloneNode(!0)).childNodes[C].removeAttribute("style"),_.childNodes[C].setAttribute("height",u/t.proportion[n.page-1]),_.childNodes[C].setAttribute("width",c/t.proportion[n.page-1]),_.childNodes[C].hasAttribute("viewBox")?_.childNodes[C].setAttribute("transform","rotate("+parseInt(n.styleCss.rotate)+" 95 95)"):_.childNodes[C].setAttribute("transform","rotate("+parseInt(n.styleCss.rotate)+" "+c/t.proportion[n.page-1]/2+" "+u/t.proportion[n.page-1]/2+")");f=n.styleCss.left/t.proportion[n.page-1]+10,m=n.styleCss.top+u;n.page>=2&&(m=m-i[n.page-2]-10),m=(t.imagesList[n.page-1].height*t.proportion[n.page-1]-m)/t.proportion[n.page-1]-10;var b=_.innerHTML;b=b.replace(/<!---->/g,""),p+="<data type='svg' action='add'>",p+="<file></file>",p+="<svgContent>"+b+"</svgContent>",p+="<position>",p+="<x>"+f+"</x>",p+="<y>"+m+"</y>",p+="</position>",p+="<page>"+n.page+"</page>",p+="</data>",r.set("line",r.get("line")+1),d+=p,_=""}else if("draw"===n.type){var S,_;document.documentElement.clientWidth,c=(S=document.getElementById("svgDraw"+o)).clientWidth,u=S.clientHeight;S.innerHTML.split('xmlns="http://www.w3.org/2000/svg"').length-1>=2&&S.childNodes[0].removeAttribute("xmlns"),(_=S.cloneNode(!0)).childNodes[0].setAttribute("height",u/t.proportion[n.page-1]),_.childNodes[0].removeAttribute("id"),_.childNodes[0].setAttribute("width",c/t.proportion[n.page-1]),_.childNodes[0].setAttribute("viewBox","0 0 "+c+" "+u);f=n.styleCss.left/t.proportion[n.page-1],m=n.styleCss.top+u;n.page>=2&&(m=m-i[n.page-2]-10),m=(t.imagesList[n.page-1].height*t.proportion[n.page-1]-m)/t.proportion[n.page-1],p+="<data type='svg' action='add'>",p+="<file></file>",p+="<svgContent>"+_.innerHTML+"</svgContent>",p+="<position>",p+="<x>"+f+"</x>",p+="<y>"+m+"</y>",p+="</position>",p+="<page>"+n.page+"</page>",p+="</data>",r.set("path",r.get("path")+1),d+=p,_=""}}})),n="<PdfContents>"+d+"</PdfContents>";var h=a.https.httpUrls.interfaceUrl+a.https.httpUrls.applyContent+"/"+t.fileDatas[0].file_id+"/content/"+t.file.password+"/?t="+(new Date).getTime();t.editUpload=!0,document.getElementById("footer").style.display="block",document.getElementById("editUploadDiv").style.display="none",document.getElementById("editContainer").style.display="block",t.showSplitOption=!1,t.step=a.common.steps.processing,a.https.post(h,n,t.editPdfOver,(function(t){e.resetEditInfo(),e.error=a.https.handleError(t),e.step=a.common.steps.fail}))},resetEditInfo:function(){this.password="",this.acceptFormat="application/pdf",this.limitFormat=a.common.types.pdf,this.nodeEdit=[],this.imagesList="",this.imagesListH=[],this.oss_domain="",this.proportion=[],this.totalPage=0},editPdfOver:function(e){this.resetEditInfo(),this.startOperateCallBack(e)},uploadImagesBack:function(e){if(1===e.result){this.removeAction();var t=document.getElementById("editMainBox").offsetWidth;this.nodeEdit.push({type:"images",active:!0,page:1,fileFile:e.data.output_file,src:"//"+e.data.oss_domain+"/"+e.data.output_file,styleCss:{width:1*t/4>=60?1*t/4+20:80,height:"auto",_minWidth:80,_minHeight:t/(t/60),left:"50%",rows:1}})}document.getElementById("inputFileImages").value=""},shareFile:function(e){this.shareFilePublic(e,this.getConvertData.task_id)},changeShareType:function(e){this.shareType=e,"link"!=e||this.linkMessage||this.shareFilePublic(2,this.getConvertData.task_id)}}})},5:function(e,t){e.exports=base64}});