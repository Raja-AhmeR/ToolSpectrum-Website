!function(t){function e(e){for(var s,o,h=e[0],a=e[1],c=e[2],l=0,f=[];l<h.length;l++)o=h[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);for(d&&d(e);f.length;)f.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,h=1;h<i.length;h++){var a=i[h];0!==r[a]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},r={35:0,33:0},n=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="../static/build/th/index.html";var h=window.webpackJsonp=window.webpackJsonp||[],a=h.push.bind(h);h.push=e,h=h.slice();for(var c=0;c<h.length;c++)e(h[c]);var d=a;n.push([558,0]),i()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},2:function(t,e){t.exports=Cookie},5:function(t,e){t.exports=base64},558:function(t,e,i){"use strict";var s,r=i(1),n=(s=r)&&s.__esModule?s:{default:s},o=i(4);i(8);var h=i(22),a=i(6),c=i(15);var d=i(2);new n.default({el:"#app",mixins:[o.publicMixin,a.uploadMixin,c.singlePdfMixin,o.filterMixin,o.trackMixin,o.shareDocumentMixin],data:function(){return{filePages:[],currentRect:{},referBox:{offsetLeft:0,offsetTop:0,width:1220,height:100,paddRight:20,paddBottom:40,rectBoxPadding:7,minW:10,minH:10},startResize:!1,startMove:!1,startAdd:!1,resizeDirection:"",rectDeepClone:null,moveOriginal:{posX:0,posY:0},resizeOriginal:{},startMoving:null,endMoving:null,redactBoxHeight:0,rects:[],noRedactTip:!1,showTipDialog:!1,isActive:!0,isEnterRect:!1,colIndex:["#000000","#696864","#b7101d","#ebc250","#0d0da4","#c11cba"]}},watch:{step:function(t,e){t===o.common.steps.optionSet?document.getElementById("footer").style.display="none":document.getElementById("footer").style.display="block"}},created:function(){var t=this;this.specialPdfHandle=this.initPdfView,this.pdfInitRender=this.pdfStartRender,this.trackfunc="Redact",this.resetMoreData=this.resetOperateData;document.getElementById("pageId").value;var e=d.getCookie("noRedactTip");e&&1==e&&(this.noRedactTip=!0),this.startMoving=function(e){t.startResize?t.resizeRect(e):t.startMove&&t.moveRect(e)},this.resizeMethod=function(){t.$refs.referBox&&t.calcReferData()},this.endMoving=function(){return t.movingOver()}},mounted:function(){window.addEventListener("resize",this.resizeMethod)},methods:{stepChange:function(t,e){e?this.step=t:(this.error=o.https.handleError(3504),this.step=o.common.steps.fail)},resetOperateData:function(){this.filePages=[],this.rects=[]},initPdfView:function(t){var e=this,i=this,s=new h.PdfView({upload_id:t.upload_id,doc:t.file,file_id:t.file_id,fileUrl:t.fileUrl,password:t.password,getPageInfo:function(t){var e=t.page,s=t.width,r=t.height;1===e&&i.calcReferData(),i.filePages[e-1].width=s,i.filePages[e-1].height=r},readPdfSuccess:function(i){e.initFilePages(i),e.getPdfPages(i,t,s)},renderFail:function(i){e.readPDfFailed(t,i)}})},pdfStartRender:function(t){var e=document.getElementById("referBox").offsetWidth,i=e>1200?1200:e;this.isSafari?setTimeout((function(){t.initRender({width:i,startPage:1,RenderMode:1})}),1e3):t.initRender({width:i,startPage:1,RenderMode:1})},initFilePages:function(t){if(t||(t=this.file.total_page),t>0)for(var e=0;e<t;e++)this.filePages.push({page:e+1,src:"",width:0,height:0,origialWidth:0,origialHeight:0});this.step=o.common.steps.optionSet,this.noRedactTip||(this.showTipDialog=!0)},shutTpTipDialog:function(){this.noRedactTip&&d.setCookie("noRedactTip",1,365),this.showTipDialog=!1},startMoveRect:function(t,e){t.stopPropagation(),this.startMove=!0,this.currentRect=e,this.setActiveStatus(this.currentRect),this.resizeOriginal={width:e.width,height:e.height,left:e.left,top:e.top},this.moveOriginal.posX=t.clientX,this.moveOriginal.posY=t.clientY,this.addMoveEvent()},addRedaction:function(t){t.stopPropagation();var e=document.body.scrollTop||document.documentElement.scrollTop,i=t.clientX-this.referBox.offsetLeft-this.referBox.rectBoxPadding,s=t.clientY+e-this.referBox.offsetTop+this.$refs.referBox.scrollTop-this.referBox.rectBoxPadding;this.rects.push({width:1,height:1,left:i,top:s,isActive:!0,color:this.colIndex[0],showCol:!1}),this.startAdd=!0,this.startResizeEvent(t,this.rects[this.rects.length-1],"rb")},rectMouseDownEvent:function(t){t.stopPropagation()},deleteRedaction:function(t,e){t.stopPropagation(),this.rects.splice(e,1)},showColEvent:function(t,e){t.stopPropagation(),this.rects[e].showCol=!this.rects[e].showCol},startResizeEvent:function(t,e,i){t.stopPropagation(),this.startResize=!0,this.currentRect=e,this.setActiveStatus(this.currentRect),this.resizeOriginal={width:this.currentRect.width,height:this.currentRect.height,left:this.currentRect.left,top:this.currentRect.top},this.moveOriginal.posX=t.clientX,this.moveOriginal.posY=t.clientY,this.resizeDirection=i,this.addMoveEvent()},addMoveEvent:function(){(this.startAdd||this.startMove||this.startResize)&&(document.addEventListener("mousemove",this.startMoving),document.addEventListener("mouseup",this.endMoving))},mouseEnterRect:function(t){this.isEnterRect=!0,this.setActiveStatus(t)},mouseLeaveRect:function(t){this.isEnterRect=!1,this.setActiveStatus(t),t.showCol&&(t.showCol=!1)},setActiveStatus:function(t){this.startAdd||this.startMove||this.startResize||this.isEnterRect?t.isActive=!0:t.isActive=!1},movingOver:function(){this.startAdd?(this.JugeSignPosition(),this.startAdd=!1,this.startResize=!1):this.startMove?this.startMove=!1:this.startResize=!1,this.currentRect&&this.setActiveStatus(this.currentRect),document.removeEventListener("mousemove",this.startMoving),document.removeEventListener("mouseup",this.endMoving),this.currentRect=null},calcReferData:function(){var t=void 0;window.innerHeight?t=window.innerHeight:document.body&&document.body.clientHeight?t=document.body.clientHeight:document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth&&(t=document.documentElement.clientHeight),this.referBox.offsetLeft=this.$refs.referBox.offsetLeft,this.referBox.offsetTop=this.$refs.referBox.offsetTop,this.referBox.width=this.$refs.referBox.offsetWidth-this.referBox.paddRight,this.referBox.height=t-this.referBox.offsetTop-this.referBox.paddBottom},moveRect:function(t){this.startAdd||(this.currentRect.left=this.resizeOriginal.left+(t.clientX-this.moveOriginal.posX),this.currentRect.top=this.resizeOriginal.top+(t.clientY-this.moveOriginal.posY),this.setBoundary())},JugeSignPosition:function(){var t=this.rects.length;t>0&&(this.currentRect=this.rects[t-1],(this.currentRect.width<this.referBox.minW||this.currentRect.height<this.referBox.minH)&&this.rects.pop())},setBoundary:function(){var t=this.$refs.referBox.offsetHeight+this.$refs.referBox.scrollTop,e=t-this.currentRect.height-15,i=this.referBox.width-this.currentRect.width-this.referBox.rectBoxPadding;this.currentRect.top<0?this.currentRect.top=0:this.currentRect.top>e&&this.currentRect.top<=t&&(this.currentRect.top=e),this.currentRect.left<0?this.currentRect.left=0:this.currentRect.left>i&&this.currentRect.left<this.referBox.width+this.currentRect.width&&(this.currentRect.left=i)},resizeRect:function(t){var e=t.clientX-this.moveOriginal.posX,i=t.clientY-this.moveOriginal.posY;this.resizeOriginal.height,this.resizeOriginal.width;switch(this.resizeDirection){case"lt":this.currentRect.width=Math.max(this.resizeOriginal.width-e,10),this.currentRect.height=Math.max(this.resizeOriginal.height-i,10),this.currentRect.left=Math.max(this.resizeOriginal.left+e,0),this.currentRect.top=Math.max(this.resizeOriginal.top+i,0);break;case"lb":this.currentRect.width=Math.max(this.resizeOriginal.width-e,10),this.currentRect.height=Math.max(this.resizeOriginal.height+i,10),this.currentRect.left=Math.max(this.resizeOriginal.left+e,0);break;case"rb":this.currentRect.width=Math.max(this.resizeOriginal.width+e,10),this.currentRect.height=Math.max(this.resizeOriginal.height+i,10)}},setCompareWidth:function(){var t=this.setResizeRange();return width<t.minX?t.minX:width>t.maxX?t.maxX:width},handleRedactData:function(){for(var t=[],e=0,i=this.rects.length;e<i;e++)for(var s=this.rects[e].top,r=0,n=this.filePages.length;r<n;r++){var o=this.$refs.referBox.getElementsByTagName("li")[this.filePages[r].page-1].getElementsByTagName("canvas")[0].offsetWidth,h=this.filePages[r].width/o,a=this.filePages[r].height/h;if(s<a){t.push({x:(this.rects[e].left-1+this.referBox.rectBoxPadding)*h,y:(s+this.referBox.rectBoxPadding)*h,width:this.rects[e].width*h,height:this.rects[e].height*h,color:this.rects[e].color,page:this.filePages[r].page});break}s=s-a-15}for(var c="",d=0,l=t.length;d<l;d++)c+='<data type="redaction" action="apply">',c+="<rect><x>"+t[d].x+"</x><y>"+t[d].y+"</y><width>"+t[d].width+"</width><height>"+t[d].height+"</height></rect>",c+="<color><fill>"+t[d].color+"</fill></color><page>"+t[d].page+"</page></data>";return"<PdfRedactions>"+c+"</PdfRedactions>"},redact:function(){var t=this,e=this.handleRedactData();this.step=o.common.steps.processing,o.https.post(o.https.httpUrls.interfaceUrl+o.https.httpUrls.redaction+"/"+this.file.file_id+"/redaction/"+this.file.password+"/",e,(function(e){t.startOperateCallBack(e)}),(function(e){t.error=o.https.handleError(e),t.step=o.common.steps.fail}))},redactOver:function(t){1===t.result?(this.fileDatas[0].downloadUrl=o.https.httpUrls.interfaceUrl+"/middle/document/download-doc?task_id="+t.data.task_id,this.fileDatas[0].target_name=t.data.output_file_name,this.step=o.common.steps.success):4204===t.status?this.step=o.common.steps.encrypt:(this.error=o.https.handleError(t.status),this.step=o.common.steps.fail)},shareFile:function(t){this.shareFilePublic(t,this.getConvertData.task_id)},changeShareType:function(t){this.shareType=t,"link"!=t||this.linkMessage||this.shareFilePublic(2,this.getConvertData.task_id)}}})}});