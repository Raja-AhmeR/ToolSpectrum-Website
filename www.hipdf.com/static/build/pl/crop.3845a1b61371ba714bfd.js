!function(t){function e(e){for(var o,h,n=e[0],c=e[1],a=e[2],p=0,d=[];p<n.length;p++)h=n[p],Object.prototype.hasOwnProperty.call(r,h)&&r[h]&&d.push(r[h][0]),r[h]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);for(f&&f(e);d.length;)d.shift()();return s.push.apply(s,a||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],o=!0,n=1;n<i.length;n++){var c=i[n];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=h(h.s=i[0]))}return t}var o={},r={6:0,33:0},s=[];function h(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,h),i.l=!0,i.exports}h.m=t,h.c=o,h.d=function(t,e,i){h.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},h.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},h.t=function(t,e){if(1&e&&(t=h(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(h.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)h.d(i,o,function(e){return t[e]}.bind(null,o));return i},h.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return h.d(e,"a",e),e},h.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},h.p="../static/build/pl/index.html";var n=window.webpackJsonp=window.webpackJsonp||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var a=0;a<n.length;a++)e(n[a]);var f=c;s.push([462,0]),i()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},2:function(t,e){t.exports=Cookie},462:function(t,e,i){"use strict";var o=a(i(29)),r=a(i(1)),s=i(4);i(8);var h=i(22),n=i(6),c=i(15);function a(t){return t&&t.__esModule?t:{default:t}}var f=8,p=9;new r.default({el:"#app",mixins:[s.publicMixin,n.uploadMixin,c.singlePdfMixin,s.filterMixin,s.trackMixin,s.shareDocumentMixin],data:function(){return{firstPage:0,firstPageSize:{width:0,height:0},coverImg:"",cropBox:this.initBox(),cloneStartBox:null,referBox:{offsetLeft:0,offsetTop:0,width:200,height:0,startX:0,startY:0,minW:30,minH:30},startCrop:!1,startMove:!1,cropDirection:"",startMoving:null,endMoving:null,file:{},cropMode:f,cropImageType:""}},created:function(){var t=this;this.singleUploadFinished=this.uploadBackAction,this.specialPdfHandle=this.initPdfView,this.resetMoreData=this.resetSingleData,this.pdfInitRender=this.pdfStartRender,this.trackfunc="Crop","cropImage"===document.getElementById("pageId").value&&(this.cropMode=p,this.acceptFormat="image/*",this.limitFormat=s.common.types.image),this.startMoving=function(e){t.startCrop?t.cropping(e):t.startMove&&t.moveCropBox(e)},this.resizeMethod=function(){t.$refs.cropBox&&(t.referBox.offsetLeft=t.$refs.cropBox.offsetLeft+t.$refs.mainWhiteBox.offsetLeft,t.referBox.offsetTop=t.$refs.cropBox.offsetTop+t.$refs.mainWhiteBox.offsetLeft)},this.endMoving=function(){return t.movingOver()},this.getTaskSessionList()},mounted:function(){window.addEventListener("resize",this.resizeMethod)},methods:{resetSingleData:function(){this.firstPage=0,this.coverImg=""},uploadBackAction:function(){this.cropMode===p&&this.file.fileUrl&&(this.coverImg=this.file.fileUrl),this.step=s.common.steps.optionSet},calcImageSize:function(){var t=document.getElementById("cropImage");this.firstPageSize={width:t.naturalWidth,height:t.naturalHeight}},initPdfView:function(t){var e=this,i=new h.PdfView({upload_id:t.upload_id,doc:t.file,file_id:t.file_id,fileUrl:t.fileUrl,password:t.password,getCanvasImg:this.renderGetImg,readPdfSuccess:function(o){e.getPdfPages(o,t,i)},renderFail:function(i){e.readPDfFailed(t,i)}})},pdfStartRender:function(t){this.firstPage=1,this.step=s.common.steps.optionSet,this.isSafari?setTimeout((function(){t.initRender({height:300,startPage:1,renderMode:h.RenderMode.cover})}),500):t.initRender({height:300,startPage:1,renderMode:h.RenderMode.cover})},renderGetImg:function(t,e,i){this.coverImg=e,this.firstPageSize={width:i.width,height:i.height}},convertOver:function(t){if(t){var e=JSON.parse(t);this.firstPageSize={width:e[0].width,height:e[0].height}}this.step=s.common.steps.optionSet,this.firstPage=1},initBox:function(){return{left:0,top:0,width:200,height:100}},mouseDownEvent:function(t,e){e?(this.startCrop=!0,this.cropDirection=e):this.startMove=!0,this.referBox.startX=t.clientX,this.referBox.startY=t.clientY;var i=(0,o.default)(this.cropBox);this.cloneStartBox=JSON.parse(i),document.addEventListener("mousemove",this.startMoving),document.addEventListener("mouseup",this.endMoving)},movingOver:function(){this.startCrop=!1,this.startMove=!1,document.removeEventListener("mousemove",this.startMoving),document.removeEventListener("mouseup",this.endMoving)},calcReferData:function(){this.referBox.offsetLeft=this.$refs.cropBox.offsetLeft+this.$refs.mainWhiteBox.offsetLeft,this.referBox.offsetTop=this.$refs.cropBox.offsetTop+this.$refs.mainWhiteBox.offsetTop,this.referBox.width=this.$refs.cropBox.offsetWidth,this.referBox.height=this.$refs.cropBox.offsetHeight,this.cropBox.left=0,this.cropBox.top=0,this.cropBox.width=this.referBox.width,this.cropBox.height=this.referBox.height},moveCropBox:function(t){if(this.startMove){document.documentElement.scrollTop;this.cropBox.left=this.cloneStartBox.left+(t.clientX-this.referBox.startX),this.cropBox.left<0?this.cropBox.left=0:this.cropBox.left+this.cropBox.width>this.referBox.width&&(this.cropBox.left=this.referBox.width-this.cropBox.width),this.cropBox.top=this.cloneStartBox.top+(t.clientY-this.referBox.startY),this.cropBox.top<0?this.cropBox.top=0:this.cropBox.top+this.cropBox.height>this.referBox.height&&(this.cropBox.top=this.referBox.height-this.cropBox.height)}},cropping:function(t){if(this.startCrop){var e=document.documentElement.scrollTop,i=Math.min(Math.max(t.clientX-this.referBox.offsetLeft,0),this.referBox.width),o=Math.min(Math.max(t.clientY+e-this.referBox.offsetTop,0),this.referBox.height);switch(this.cropDirection){case"nw":this.cropBox.left=i,this.cropBox.top=o,this.cropBox.width=this.cloneStartBox.width-(this.cropBox.left-this.cloneStartBox.left),this.setMinBoundary("width"),this.cropBox.height=this.cloneStartBox.height-(this.cropBox.top-this.cloneStartBox.top),this.setMinBoundary("height");break;case"n":this.cropBox.top=o,this.cropBox.height=this.cloneStartBox.height-(this.cropBox.top-this.cloneStartBox.top),this.setMinBoundary("height");break;case"ne":this.cropBox.top=o,this.cropBox.width=this.setBoundary("width",i-this.cropBox.left),this.cropBox.height=this.cloneStartBox.height-(this.cropBox.top-this.cloneStartBox.top),this.setMinBoundary("height");break;case"e":this.cropBox.width=this.setBoundary("width",i-this.cropBox.left);break;case"se":this.cropBox.width=this.setBoundary("width",i-this.cropBox.left),this.cropBox.height=this.setBoundary("height",o-this.cropBox.top);break;case"s":this.cropBox.height=this.setBoundary("height",o-this.cropBox.top);break;case"sw":this.cropBox.left=i,this.cropBox.width=this.cloneStartBox.width-(this.cropBox.left-this.cloneStartBox.left),this.setMinBoundary("width"),this.cropBox.height=this.setBoundary("height",o-this.cropBox.top);break;case"w":this.cropBox.left=i,this.cropBox.width=this.cloneStartBox.width-(this.cropBox.left-this.cloneStartBox.left),this.setMinBoundary("width")}}},setMinBoundary:function(t){if("width"===t)this.cropBox.width<this.referBox.minW&&(this.cropBox.width=this.referBox.minW,this.cropBox.left=this.cloneStartBox.left-(this.cropBox.width-this.cloneStartBox.width));else this.cropBox.height<this.referBox.minH&&(this.cropBox.height=this.referBox.minH,this.cropBox.top=this.cloneStartBox.top-(this.cropBox.height-this.cloneStartBox.height))},setBoundary:function(t,e){var i=e;switch(t){case"width":i<this.referBox.minW?i=this.referBox.minW:i>this.referBox.width&&(i=this.referBox.width);break;case"height":i<this.referBox.minH?i=this.referBox.minH:i>this.referBox.height&&(i=this.referBox.height)}return i},crop:function(){var t=this;if(this.cropMode!==p){var e=this.firstPageSize.width/this.referBox.width,i=this.firstPageSize.height/this.referBox.height,o=void 0,r=[{left:this.cropBox.left*e,right:(this.referBox.width-(this.cropBox.width+this.cropBox.left))*e,top:this.cropBox.top*i,bottom:(this.referBox.height-(this.cropBox.height+this.cropBox.top))*i,page:"1-"+this.file.total_page}];o=this.password?{file_id:this.file.file_id,cut_list:r,password:this.password}:{file_id:this.file.file_id,cut_list:r,password:""},this.step=s.common.steps.processing,s.https.post(s.https.httpUrls.interfaceUrl+s.https.httpUrls.crop,o,this.startOperateCallBack,(function(e){t.error=s.https.handleError(e),t.step=s.common.steps.fail})),this.gaVueTrack(4)}else this.canvasCropImage()},canvasCropImage:function(){var t=this;if(this.firstPageSize.width){var e=this.firstPageSize.width/this.referBox.width,i=this.firstPageSize.height/this.referBox.height,o=this.cropBox.left*e,r=this.cropBox.width*e,h=this.cropBox.top*i,n=this.cropBox.height*i,c={file_ids:[this.file.file_id],crop_width:o+","+r,crop_heigh:h+","+n,mode:"crop"};this.step=s.common.steps.processing,s.https.post(s.https.httpUrls.interfaceUrl+s.https.httpUrls.imagesProcess,c,this.startOperateCallBack,(function(e){t.error=s.https.handleError(e),t.step=s.common.steps.fail}))}},cropOver:function(t){this.firstPage=0,this.coverImg="",this.operationSuccess(t)},shareFile:function(t){this.shareFilePublic(t,this.getConvertData.task_id)},changeShareType:function(t){this.shareType=t,"link"!=t||this.linkMessage||this.shareFilePublic(2,this.getConvertData.task_id)}}})},5:function(t,e){t.exports=base64}});