!function(e){function t(t){for(var i,a,r=t[0],d=t[1],p=t[2],u=0,f=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);for(l&&l(t);f.length;)f.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var d=n[r];0!==o[d]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={40:0,33:0},s=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="../static/build/ar/index.html";var r=window.webpackJsonp=window.webpackJsonp||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var p=0;p<r.length;p++)t(r[p]);var l=d;s.push([557,0]),n()}({0:function(e,t){e.exports=MutiLang},1:function(e,t){e.exports=Vue},2:function(e,t){e.exports=Cookie},5:function(e,t){e.exports=base64},557:function(e,t,n){"use strict";var i=u(n(29)),o=u(n(146)),s=u(n(1)),a=n(4);n(8),n(148);var r=n(149),d=u(n(150));n(20);var p=n(6),l=n(15);function u(e){return e&&e.__esModule?e:{default:e}}var f=n(0),c=n(2);s.default.use(d.default);var h=new o.default;s.default.directive("drag",{inserted:function(e,t){var n=e,i=!1,o=t.value.zIndexPost,s="",a="",r="";g(n.parentNode,t.value.type,o,t.value.bank),n.onmousedown=function(e){e.preventDefault(),s=e.clientX-n.parentNode.offsetLeft,a=e.clientY-n.parentNode.offsetTop,r=n.parentNode.parentNode.parentNode.scrollTop,i=!0,document.onmousemove=function(e){var d=[0,n.parentNode.parentNode.clientWidth,1,n.parentNode.parentNode.offsetHeight-12];if(i){var p=e.clientX-s,l=e.clientY-a,u=n.parentNode.offsetWidth,f=n.parentNode.offsetHeight,c={left:p=p<=d[0]?d[0]:p>=d[1]-u?d[1]-u:p,top:l=n.parentNode.parentNode.parentNode.scrollTop>r?l<=d[2]?d[2]:(l>=d[3]-f?d[3]-f:l)+n.parentNode.parentNode.parentNode.scrollTop-r:l<=d[2]?d[2]:(l>=d[3]-f?d[3]-f:l)-(r-n.parentNode.parentNode.parentNode.scrollTop)};t.value.bank(o,c)}},document.onmouseup=function(e){e.preventDefault(),document.onmousemove=null,document.onmouseup=null,i=!1},document.onmouseleave=function(){e.preventDefault(),document.onmousemove=null,document.onmouseup=null,i=!1}}}}),s.default.directive("zoom",{inserted:function(e,t){var n=e,i="",o="",s="",a=!1;n.onmousedown=function(e){e.preventDefault(),i=t.value.type,o=t.value.zIndexPost;var r=e.clientX,d=e.clientY,p=n.parentNode.parentNode.offsetTop,l=n.parentNode.parentNode.offsetLeft,u=(n.parentNode.parentNode.parentNode.parentNode.scrollTop,n.parentNode.parentNode.clientHeight),f=n.parentNode.parentNode.clientWidth;a=!0,document.onmousemove=function(e){if(s=t.value.objValue,a){var c=parseInt(e.pageY)-parseInt(d),g=parseInt(e.pageX)-parseInt(r),m=c+parseInt(p),y=g+parseInt(l);switch(i){case"edit_left_top":if(parseInt(f)-g<=n.parentNode.parentNode.parentNode.clientWidth&&parseInt(f)-g>s.styleCss._minWidth&&parseInt(u)-c>=s.styleCss._minHeight+20){"images"===s.type?(n.parentNode.parentNode.style.width=parseInt(f)-g+"px",n.parentNode.parentNode.style.height=parseInt(u)-c+"px"):"line"===s.type?(n.parentNode.parentNode.style.width=parseInt(f)-g+"px",n.parentNode.parentNode.style.height=parseInt(f)-g+"px"):(n.parentNode.parentNode.style.height=parseInt(u)-c+"px",n.parentNode.parentNode.style.width=parseInt(f)-g+"px"),n.parentNode.parentNode.style.top=m+"px",n.parentNode.parentNode.style.left=y+"px";var v={left:y,top:m};t.value.bank(o,v)}break;case"edit_left_bottom":if(parseInt(f)-g<=n.parentNode.parentNode.parentNode.clientWidth&&parseInt(f)-g>s.styleCss._minWidth&&parseInt(u)+c>=s.styleCss._minHeight+20){"images"===s.type?(n.parentNode.parentNode.style.width=parseInt(f)-g+"px",n.parentNode.parentNode.style.height=parseInt(u+c)+"px"):"line"===s.type?(n.parentNode.parentNode.style.height=parseInt(u)+c+"px",n.parentNode.parentNode.style.width=parseInt(u)+c+"px"):(n.parentNode.parentNode.style.height=parseInt(u)+c+"px",n.parentNode.parentNode.style.width=parseInt(f)-g+"px"),n.parentNode.parentNode.style.left=y+"px";v={left:y};t.value.bank(o,v)}break;case"edit_right_bottom":parseInt(f)+g<=n.parentNode.parentNode.parentNode.clientWidth&&parseInt(f)+g>s.styleCss._minWidth&&parseInt(u)+c>=s.styleCss._minHeight+20&&("images"===s.type?(n.parentNode.parentNode.style.width=parseInt(f)+g+"px",n.parentNode.parentNode.style.height=parseInt(u+c)+"px"):"line"===s.type?(n.parentNode.parentNode.style.height=parseInt(u)+c+"px",n.parentNode.parentNode.style.width=parseInt(u)+c+"px"):(n.parentNode.parentNode.style.height=parseInt(u)+c+"px",n.parentNode.parentNode.style.width=parseInt(f)+g+"px"))}h.set(o,!0)}},document.onmouseup=function(e){e.preventDefault(),document.onmousemove=null,document.onmouseup=null,a=!1},document.onmouseleave=function(){e.preventDefault(),document.onmousemove=null,document.onmouseup=null,a=!1}}}}),s.default.directive("rotate",{inserted:function(e,t){var n,i,o=e,s=t.value.zIndexPost,a=!1;o.onmousedown=function(e){e.preventDefault(),o.parentNode.parentNode.style.cursor="alias",n=parseInt(o.parentNode.parentNode.offsetLeft)+parseInt(o.parentNode.parentNode.clientWidth)/2,i=parseInt(o.parentNode.parentNode.offsetTop)+parseInt(o.parentNode.parentNode.clientHeight)/2-o.parentNode.parentNode.parentNode.parentNode.scrollTop;var r=document.documentElement.clientWidth-1200;a=!0,document.onmousemove=function(e){if(a){var o=parseInt(e.pageX)-r/2-parseInt(n),d=parseInt(e.pageY)-121-parseInt(i),p=Math.abs(o/d),l=Math.atan(p)/(2*Math.PI)*360;o<0&&d<0?l=-l:o<0&&d>0?l=-(180-l):o>0&&d<0?l=l:o>0&&d>0&&(l=180-l),t.value.bank(s,l)}},document.onmouseup=function(e){e.preventDefault(),o.parentNode.parentNode.style.cursor="all",document.onmousemove=null,document.onmouseup=null,a=!1},document.onmouseleave=function(){e.preventDefault(),o.parentNode.parentNode.style.cursor="all",document.onmousemove=null,document.onmouseup=null,a=!1}}}});var g=function(e,t,n,i){if("draw"!==t){e.offsetTop,e.offsetLeft;if("absolute"===e.style.position)return;e.style.position="absolute";var o={left:e.parentNode.clientWidth/2-e.clientWidth/2,top:e.parentNode.parentNode.clientHeight/3-e.clientHeight/2+e.parentNode.parentNode.scrollTop};e.style.zIndex=1e6,i(n,o)}};new s.default({el:"#app",mixins:[a.publicMixin,p.uploadMixin,l.singlePdfMixin,a.trackMixin,a.shareDocumentMixin],data:function(){return{showSplitOption:!1,lockPassword:"",input_change:"",noPassword:!1,disabled:!0,editUpload:!0,acceptFormat:"application/pdf",limitFormat:a.common.types.pdf,nodeEdit:[],fontSize:[{name:"small",value:16},{name:"normal",value:20},{name:"large",value:24}],fontFamily:["Noto Sans","Noto Serif","Ubuntu Mono"],fontColor:["#ffffff","#000000","#0000ff","#ffc000","#ff00ff","#ff0000"],pathLineColor:["#47f267","#666666","#000000","#ffffff","#ffc000","#0000ff","#ff00ff","#ff0000"],pathColor:["none","#666666","#000000","#ffffff","#ffc000","#0000ff","#ff00ff","#ff0000"],lineStyle:[1,2,4],lineVirtual:["path_solid","path_maxDotted","path_minDotted"],lineDirection:["path_line","path_arrow","path_round"],imagesList:[],imagesListH:[],oss_domain:"sz-pe-pdf-test.oss-cn-shenzhen.aliyuncs.com",proportion:[],dpi:"",pdfFileID:"",file:{oldPdfName:"",url:"",file_name:"",target_name:""},canvasEdit:{zIndex:-1,pointerEvents:"none"},sessionArray:[],totalPage:0,sbutitle:"",atitle:"",pageId:"",applyDisabled:!0,user:""}},created:function(){var e=this;this.user=c.getUserInfo(),e.pageId=document.getElementById("pageId").value,e.sbutitle=f.lang.singatureTitle,e.atitle=f.lang.freeTry,e.pdfCheckSucess=this.showOption,this.resetMoreData=this.resetMoreDataAction,e.inputId="inputFile";var t=[];if(this.user&&this.user.email)this.getSignOperate();else if(null!=a.session.getSession("sing")?a.session.getSession("sing").indexOf("&&&&")>=0?t=a.session.getSession("sing").split("&&&&"):t.push(a.session.getSession("sing")):t="",t[0]&&""!=t[0].id)this.getSign(t);else{this.getSign("")}},mounted:function(){var e=this;this.taskNextStepCallback=function(){e.getDpi(),e.pdfFileID=e.fileDatas[0].file_id,e.showSplitOption=!1,e.step=a.common.steps.processing,document.getElementById("footer").style.display="none",document.getElementById("editUploadDiv").style.display="block",document.getElementById("editContainer").style.display="none",e.editUpload=!1,e.getPDFPageSize()},this.getTaskSessionList()},methods:{getSign:function(e){if(e){var t=this;t.sessionArray=[],t.user&&t.user.email?e.forEach((function(e){var n=JSON.parse(e.content);n.insert_time=e.insert_time,t.sessionArray.push(n)})):e.forEach((function(e){var n=JSON.parse(e);t.sessionArray.push(n)}))}},getSignOperate:function(){var e=this;a.https.get(a.https.httpUrls.interfaceUrl+a.https.httpUrls.signOperate,(function(t){1===t.result&&e.getSign(t.data.record)}),(function(){}))},deleteSign:function(e){var t=this;if(t.user&&t.user.email){var n={insert_time:e.insert_time};a.https.httpRequest("DELETE",a.https.httpUrls.interfaceUrl+a.https.httpUrls.signOperate,n,(function(e){1===e.result&&t.getSignOperate()}),(function(){}))}else{var o="";t.sessionArray.forEach((function(n,i){if(n.id===e.id)return t.sessionArray.splice(i,1),!0})),t.sessionArray.forEach((function(e,t){""===o?o=(0,i.default)(e):o+="&&&&"+(0,i.default)(e)})),a.session.setSession("sing",o),o=""}},buttonLinkUrl:function(){(0,a.gaEvent)("Hipdf_Sign ","Pricing"),window.open("https://signx.wondershare.com/")},stepChange:function(e){this.step=e},getDpi:function(){void 0!==window.screen.deviceXDPI?this.dpi=window.screen.deviceYDPI:this.dpi=this.$refs.dpi.offsetHeight},resetMoreDataAction:function(){this.showSplitOption=!1,this.totalPage=0,this.step=a.common.steps.selectUpload,document.getElementById(this.inputId).value="",this.error=a.common.initError()},showOption:function(){this.pdfFileID=this.file.file_id,this.step=a.common.steps.upload,this.getPDFPageSize()},gernerateRef:function(e,t){return t+e},getPDFPageSize:function(){var e=this;e.resetMoreDataAction(),e.imagesListH=[],e.imagesList=[],e.step=a.common.steps.processing,e.totalPage=this.file.total_page,e.showSplitOption=!1,e.step=a.common.steps.processing,e.editUpload=!1,document.getElementById("footer").style.display="none",document.getElementById("editUploadDiv").style.display="block",document.getElementById("editContainer").style.display="none",setTimeout((function(){(0,r.editView)(e.file,e.password,(function(t){e.totalPage=t}),(function(t,n,i,o){e.proportion=t,n.forEach((function(t,n){0===n?e.imagesListH.push(t):e.imagesListH.push(t+e.imagesListH[n-1]+10),0===(o[n]+360)%180?e.imagesList.push({page:n+1,width:i[n][2],height:i[n][3]}):e.imagesList.push({page:n+1,width:i[n][3],height:i[n][2]}),document.getElementById("imgCanvasID_"+(n+1)).style.height=t+"px"})),e.applyDisabled=!1}),(function(){e.getDpi(),e.showSplitOption=!0,e.editUpload=!0,document.getElementById("footer").style.display="block",document.getElementById("editUploadDiv").style.display="none",e.error=a.https.handleError(3500),e.step=a.common.steps.fail}))}),2e3)},conversion:function(e){var t=this;1===e.result?(t.imagesList=JSON.parse(e.data.pages),t.proportion=1200/t.imagesList[0].width,t.imagesList.forEach((function(e,n){t.file.oss_domain&&(t.oss_domain=t.file.oss_domain),e.src="https://"+t.oss_domain+"/files/"+t.fileDatas[0].file_id+"/"+(n+1)+".jpg?x-oss-process=image/resize,w_1200",0===n?t.imagesListH.push(Math.round(1200/e.width*e.height)):t.imagesListH.push(Math.round(1200/e.width*e.height)+t.imagesListH[n-1]+10)})),this.getDpi(),document.getElementById("footer").style.display="none",document.getElementById("editUploadDiv").style.display="block",document.getElementById("editContainer").style.display="none",t.showSplitOption=!1,t.step=a.common.steps.processing,t.editUpload=!1):(t.error=a.https.handleError(e.status),t.step=a.common.steps.fail)},dropBank:function(e,t){for(var n in t)"left"===n?this.nodeEdit[e].styleCss.left=t[n]:"top"===n&&(this.nodeEdit[e].styleCss.top=t[n])},rotateBank:function(e,t){this.nodeEdit[e].styleCss.rotate=t+"deg"},removeNode:function(e,t){h.set(t,!1),this.nodeEdit.splice(t,1)},singBox:function(){var e=this;e.$sign({email:"",text:f.lang.createSignature,sbutitle:f.lang.singatureTitle,atitle:f.lang.freeTry,esignUrl:"https://signx.wondershare.com",button:[{text:f.lang.create,ontap:function(t){var n=[];e.user&&e.user.email?e.getSignOperate():(null!=a.session.getSession("sing")?a.session.getSession("sing").indexOf("&&&&")>=0?n=a.session.getSession("sing").split("&&&&"):n.push(a.session.getSession("sing")):n=[],e.getSign(n)),t&&e.addSing(t)}}]})},addSing:function(e){if("sing"===e.type){this.nodeEdit.push({type:"images",active:!0,page:1,fileFile:e.id,src:e.image,styleCss:{width:e.w>800?800:e.w+20,height:e.h,_minWidth:80,_minHeight:e.h,left:"50%",rows:1}})}else this.nodeEdit.push({type:"images",active:!0,page:1,fileFile:e.id,src:e.image,styleCss:{width:320,height:"auto",_minWidth:80,_minHeight:60,left:"50%",rows:1}})},removeAction:function(){var e=this;e.nodeEdit.forEach((function(t,n){null!==t&&(e.nodeEdit[n].active=!1),"text"===t.type&&(e.nodeEdit[n].pointerEvents="none")}))},addStyle:function(e,t,n){for(var i=this,o=0;o<i.nodeEdit.length;o++)null!==i.nodeEdit[o]&&(t===o?(i.nodeEdit[o].active=!0,document.getElementById("nodeEdit"+o).style.zIndex=1e6,i.nodeEdit[o].pointerEvents="all"):(i.nodeEdit[o].active=!1,"text"===i.nodeEdit[o].type&&document.getElementById("textedit"+o).blur(),document.getElementById("nodeEdit"+o).style.zIndex=10+t,i.nodeEdit[o].pointerEvents="none"));n.stopPropagation()},clearStyle:function(e){var t="",n=this;for(var i in e.path)t+=" "+e.path[i].className;t.indexOf("text_drop")<0?n.nodeEdit.forEach((function(e,t){null!==e&&(n.nodeEdit[t].active=!1,document.getElementById("textedit"+t)&&document.getElementById("textedit"+t).blur(),n.nodeEdit[t].pointerEvents="none",document.getElementById("nodeEdit"+t).style.zIndex=10+t)})):t.indexOf("text_drop active")>0&&n.nodeEdit.forEach((function(e,t){null!==e&&!0===n.nodeEdit[t].active&&(n.nodeEdit[t].pointerEvents="all",document.getElementById("nodeEdit"+t).style.zIndex=1e6,"text"===e.type&&document.getElementById("textedit"+t).focus(),n.nodeEdit[t].active=!0)}))},selectTabs:function(e,t){this.nodeEdit[t].styleTabs=e},styleClick:function(e,t,n,i){switch(e){case"fontSize":this.nodeEdit[n].styleCss.fontSize=t.value,!0!==h.get(n)&&(16===t.value?this.nodeEdit[n].styleCss.height=25:20===t.value?this.nodeEdit[n].styleCss.height=32:24===t.value&&(this.nodeEdit[n].styleCss.height=40),this.descInput("",n)),16===t.value?this.nodeEdit[n].styleCss.height=25:20===t.value?this.nodeEdit[n].styleCss.height=32:24===t.value&&(this.nodeEdit[n].styleCss.height=40),this.descInput("",n);break;case"fontFamily":this.nodeEdit[n].styleCss.fontFamily=t,this.descInput("",n);break;case"fontColor":case"pathColor":this.nodeEdit[n].styleCss.fontColor=t;break;case"pathfileter":this.nodeEdit[n].styleCss.fontfileter=t;break;case"pathlineStyle":this.nodeEdit[n].styleCss.lineStyle=t;break;case"pathlineDirection":this.nodeEdit[n].pathType=t;break;case"pathlineVirtual":this.nodeEdit[n].lineVirtual=t}this.nodeEdit[n].fontStyleEdit=!1},showeditStyle:function(e){this.nodeEdit[e].fontStyleEdit=!this.nodeEdit[e].fontStyleEdit},leaveEditStyle:function(e){this.nodeEdit[e].fontStyleEdit=!1},apply:function(){var e=this,t=this;t.getDpi();var n,i=t.imagesListH,s="",r="",d=new o.default;d.set("text",0),d.set("images",0),d.set("path",0),d.set("rect",0),d.set("line",0),this.nodeEdit.forEach((function(n,o){if("",s="","",n){for(var a=n.styleCss.top,p=0;p<i.length;p++)0===p?a>=0&&a<=i[p]&&(n.page=p+1):a>i[p-1]&&a<=i[p]&&(n.page=p+1);if("images"===n.type){var l=t.$refs.uploadImages[d.get("images")].clientWidth,u=t.$refs.uploadImages[d.get("images")].clientHeight+4,f=n.styleCss.left/t.proportion[n.page-1]+6,c=n.styleCss.top+u;n.page>=2&&(c=c-i[n.page-2]-10),c=(e.imagesList[n.page-1].height*t.proportion[n.page-1]-c)/t.proportion[n.page-1]-4,s+="<data type='image' action='add'>",s+="<file>"+n.fileFile+"</file>",s+="<width>"+l/t.proportion[n.page-1]+"</width>",s+="<height>"+u/t.proportion[n.page-1]+"</height>",s+="<position>",s+="<x>"+f+"</x>",s+="<y>"+c+"</y>",s+="</position>",s+="<page>"+n.page+"</page>",s+="</data>",d.set("images",d.get("images")+1),r+=s}}})),n="<PdfContents>"+r+"</PdfContents>";var p=a.https.httpUrls.interfaceUrl+a.https.httpUrls.applyContent+"/"+t.fileDatas[0].file_id+"/sign/"+t.password+"/?t="+(new Date).getTime();t.editUpload=!0,document.getElementById("footer").style.display="block",document.getElementById("editUploadDiv").style.display="none",document.getElementById("editContainer").style.display="block",t.showSplitOption=!1,t.step=a.common.steps.processing,a.https.post(p,n,t.editPdfOver,(function(t){e.resetEditInfo(),e.error=a.https.handleError(t),e.step=a.common.steps.fail}))},resetEditInfo:function(){this.password="",this.acceptFormat="application/pdf",this.limitFormat=a.common.types.pdf,this.nodeEdit=[],this.imagesList="",this.imagesListH=[],this.oss_domain="",this.proportion=[],this.totalPage=0},editPdfOver:function(e){this.resetEditInfo(),this.startOperateCallBack(e)},shareFile:function(e){this.shareFilePublic(e,this.getConvertData.task_id)},changeShareType:function(e){this.shareType=e,"link"!=e||this.linkMessage||this.shareFilePublic(2,this.getConvertData.task_id)}}})}});