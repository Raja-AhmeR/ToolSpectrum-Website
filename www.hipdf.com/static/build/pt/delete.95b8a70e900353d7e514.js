!function(e){function t(t){for(var r,a,o=t[0],l=t[1],f=t[2],u=0,g=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&g.push(s[a][0]),s[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(h&&h(t);g.length;)g.shift()();return n.push.apply(n,f||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],r=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=i[0]))}return e}var r={},s={7:0,33:0},n=[];function a(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=r,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="../static/build/pt/index.html";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var f=0;f<o.length;f++)t(o[f]);var h=l;n.push([467,0]),i()}({0:function(e,t){e.exports=MutiLang},1:function(e,t){e.exports=Vue},2:function(e,t){e.exports=Cookie},467:function(e,t,i){"use strict";var r=f(i(65)),s=f(i(1)),n=i(4);i(8);var a=i(22),o=i(6),l=i(15);function f(e){return e&&e.__esModule?e:{default:e}}var h=i(0),u="3",g="4";new s.default({el:"#app",mixins:[n.publicMixin,o.uploadMixin,l.singlePdfMixin,n.filterMixin,n.trackMixin,n.shareDocumentMixin],data:function(){return{filePages:[],initImgFinished:!1,selectMode:u,enterNumber:"",numberError:""}},created:function(){this.specialPdfHandle=this.initPdfView,this.pdfInitRender=this.pdfStartRender,this.resetMoreData=this.resetData,this.trackfunc="DeletePages",this.getTaskSessionList()},methods:{initFilePages:function(e){if(this.initImgFinished=!1,e||(e=this.file.total_page),this.filePages=[],e>0)for(var t=0;t<e;t++)this.filePages.push({page:t+1,src:""});this.step=n.common.steps.optionSet},resetData:function(){this.filePages=[],this.selectMode=u,this.enterNumber="",this.numberError=""},uploadBackAction:function(e){1===e.result&&(this.file.has_passwd||this.initPdfView())},initPdfView:function(e){var t=this,i=new a.PdfView({upload_id:e.upload_id,doc:e.file,file_id:e.file_id,fileUrl:e.fileUrl,password:e.password,readPdfSuccess:function(r){t.initFilePages(r),t.getPdfPages(r,e,i)},renderFail:function(i){t.readPDfFailed(e,i)}})},pdfStartRender:function(e){this.isSafari?setTimeout((function(){e.initRender({height:200,startPage:1})}),500):e.initRender({height:200,startPage:1})},deletePage:function(e){this.initImgFinished||this.initCanvasImg(),1===this.filePages.length?this.numberError=h.lang.errorTip10:(this.filePages.splice(e,1),this.numberError&&(this.numberError=""))},initCanvasImg:function(){for(var e=0,t=this.filePages.length;e<t;e++)if(!this.filePages[e].src){var i=document.getElementById(this.file.upload_id+"_"+this.filePages[e].page);i&&(this.filePages[e].src=i.toDataURL("image/png"),i.parentNode.removeChild(i))}this.initImgFinished=!0},batchSelectDelete:function(){var e=[],t=this.filePages.length;if(this.selectMode===g)for(var i=0;i<t;)e.push(this.filePages[i].page),i+=2;else for(var r=1;r<t;)e.push(this.filePages[r].page),r+=2;e.length>0&&(1===this.filePages.length?this.numberError=h.lang.errorTip10:(this.filePages=this.batchDeletePages(this.getFilePagesNum(),e),this.numberError&&(this.numberError="")))},getFilePagesNum:function(){for(var e=[],t=this.filePages.length,i=0;i<t;i++)e.push(this.filePages[i].page);return e},batchNumberDelete:function(){for(var e=[],t=this.getFilePagesNum(),i=this.enterNumber.replace(/\s/g,"").split(","),r=this.filePages.length,s=0,n=i.length;s<n;s++)if(-1===i[s].indexOf("-")){var a=Number(i[s]);if(!this.jugeNumber(a,r))return;e.push(t.slice(a-1,a))}else if(0===i[s].indexOf("-"))this.jugeNumber(Number(i[s]),r);else{var o=i[s].split("-"),l=Number(o[0]),f=Number(o[1]);if(2!==o.length)return void(this.numberError=h.lang.errorTip11);if(!this.jugeNumber(l,r)||!this.jugeNumber(f,r))return;if(l>=f)return void(this.numberError=h.lang.errorTip11);var u=t.slice(o[0]-1,o[1]);e=e.concat(u)}if(e.length>0){var g=this.batchDeletePages(t,e);if(0===g.length)return void(this.numberError=h.lang.errorTip10);this.filePages=g,this.numberError&&(this.numberError="")}},batchDeletePages:function(e,t){this.initImgFinished||this.initCanvasImg();for(var i=t.concat(e),r=[],s={},n=0;n<i.length;n++)i[n]in s?s[i[n]]++:s[i[n]]=1;for(var a in s)if(1==s[a])for(var o=0,l=this.filePages.length;o<l;o++)if(a==this.filePages[o].page){r.push(this.filePages[o]);break}return r},jugeNumber:function(e,t){return isNaN(e)?(this.numberError=h.lang.errorTip2,!1):/^-?\d*$/.test(e)?!(e<1||e>t)||(this.numberError=h.lang.errorTip7,!1):(this.numberError=h.lang.errorTip11,!1)},deletePagesBtn:function(){var e=this;this.step=n.common.steps.processing;for(var t=void 0,i=[],s=0,a=this.filePages.length;s<a;s++)i.push(this.filePages[s].page);t=this.password?{file_id:this.file.file_id,save_files:(0,r.default)({},this.file.file_name.split(".pdf")[0],i),password:this.password}:{file_id:this.file.file_id,save_files:(0,r.default)({},this.file.file_name.split(".pdf")[0],i),password:""},n.https.post(n.https.httpUrls.interfaceUrl+n.https.httpUrls.extractPage,t,this.startOperateCallBack,(function(t){e.error=n.https.handleError(t),e.step=n.common.steps.fail})),this.gaVueTrack(4)},shareFile:function(e){this.shareFilePublic(e,this.getConvertData.task_id)},changeShareType:function(e){this.shareType=e,"link"!=e||this.linkMessage||this.shareFilePublic(2,this.getConvertData.task_id)}}})},5:function(e,t){e.exports=base64}});