!function(t){function e(e){for(var o,a,r=e[0],u=e[1],p=e[2],l=0,f=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);for(c&&c(e);f.length;)f.shift()();return s.push.apply(s,p||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],o=!0,r=1;r<i.length;r++){var u=i[r];0!==n[u]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=i[0]))}return t}var o={},n={2:0,33:0},s=[];function a(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=o,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(i,o,function(e){return t[e]}.bind(null,o));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="../static/build/nl/index.html";var r=window.webpackJsonp=window.webpackJsonp||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var p=0;p<r.length;p++)e(r[p]);var c=u;s.push([540,0]),i()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},2:function(t,e){t.exports=Cookie},5:function(t,e){t.exports=base64},540:function(t,e,i){"use strict";var o=u(i(1)),n=i(4),s=i(6),a=i(25),r=u(i(59));function u(t){return t&&t.__esModule?t:{default:t}}i(8);var p=i(0);i(2);o.default.use(r.default);var c="1",l="2";new o.default({el:"#app",mixins:[n.publicMixin,s.uploadMixin,n.filterMixin,n.trackMixin,a.batchMixin,n.shareDocumentMixin],data:function(){return{idNow:1e3,step:n.common.steps.selectUpload,outputName:"",trackfunc:"Batch PDF Converter Compress",limitFormat:"",type:"",imgFormat:"",selectMode:c,showUpgradeGuide:!1,level:"medium",outputType:"docx",ocrLanguage:[],isOcrRadio:"off",showTipDialog:!1,outputMap:{pdfToWord:"docx",pdfToPpt:"pptx",pdfToExcel:"xlsx",pdfToEpub:"ePub",pdfToTxt:"txt",pdfToPages:"pages"}}},watch:{userStatus:function(t,e){},batchDownloadUrl:function(){this.setUpgradeGuideStatus()},isOcrRadio:function(t,e){"on"===t&&(2!==this.userStatus?(this.jugeTips={show:!0,guide:"OCRLimit"},this.isOcrRadio="off"):(0,n.gaEvent)(document.getElementById("pageId").value,"OCR_ON")),"off"===t&&(0,n.gaEvent)(document.getElementById("pageId").value,"OCR_OFF")}},created:function(){var t=this;this.limitFormat=n.common.types.functionImage,this.getProcessData=this.computeProcessData,this.resetMoreData=this.resetMutiProcess,this.acceptFormat="";var e=document.getElementById("pageId").value;this.outputType=this.outputMap[e],"compressPdf"===e&&(this.selectMode=l),this.getModeType(e),"compressPdf"!==e&&0!==e.indexOf("pdfTo")||(this.taskNextStepCallback=function(){t.step=n.common.steps.selectMerge,t.mutiUploadFinished=!0,t.validFilesNum+=1},this.getTaskSessionList()),this.ocrLanguage=[p.langCurr]},methods:{setUpgradeGuideStatus:function(){this.batchDownloadUrl&&this.fileDatas.length>0&&this.limitFormat===n.common.types.pdf&&1===this.fileDatas.length&&this.fileDatas[0].scanned&&(this.showUpgradeGuide=!0,this.jugeTips={show:!0,guide:"ocr"})},getModeType:function(t){if(this.selectMode===c){var e=n.common.getInfoFromPageType(t),i=e.from,o=e.type,s=e.acceptFormat,a=e.imgFormat;this.limitFormat=i,this.type=o,this.imgFormat=a,this.acceptFormat=s}else this.limitFormat=n.common.types.pdf,this.acceptFormat="application/pdf"},signupClick:function(){this.accountType=n.FunctionType.register,this.showAccount=!0},changeLanguage:function(){var t=this;(0,n.gaEvent)(document.getElementById("pageId").value,"OCR_Setting");var e=t.$ocr({text:p.lang.selectLangTitle,ocrLanguage:t.ocrLanguage,button:[{text:p.lang.confirmTip2,ontap:function(i,o){o||(t.ocrLanguage=i.ocrLanguage,e.close())}}]})},Operate:function(t){var e=location.href,i="";-1!==e.indexOf("?")&&(i="&"+e.split("?")[1]);n.common.setLoginRedirect(t,i)},computeProcessData:function(t){var e="",i=null,o="GET";if(this.selectMode===c)if("off"===this.isOcrRadio)e=n.https.httpUrls.interfaceUrl+n.https.httpUrls.convert+"?file_id="+t.file_id+"&multi_id="+this.mutiFid+"&output_format=",this.type===n.common.types.functionImage?e+=this.imgFormat:e+=this.type,e+="&t="+(new Date).getTime();else{var s=p.getLanguagesId(this.ocrLanguage),a=t.file_name.split(".");"pdf"===a[a.length-1].toLowerCase()?(o="GET",e=n.https.httpUrls.interfaceUrl+n.https.httpUrls.convert+"?file_id="+t.file_id+"&multi_id="+this.mutiFid+"&output_format="+this.outputType,e+="&using_ocr=1&languages="+s+"&t="+(new Date).getTime()):(o="POST",e=n.https.httpUrls.interfaceUrl+n.https.httpUrls.image0cr,i={file_ids:[t.file_id],output_format:this.outputType,using_ocr:!0,multi_id:this.mutiFid,languages:s.join(","),output_content:!1})}else e=n.https.httpUrls.interfaceUrl+n.https.httpUrls.compress,o="POST",i={file_id:t.file_id,level:this.level,password:"",multi_id:this.mutiFid};return{request:e,method:o,postData:i}},shareFile:function(t){this.shareFilePublic(t,this.getConvertData.task_id)},changeShareType:function(t){this.shareType=t,"link"!=t||this.linkMessage||this.shareFilePublic(2,this.getConvertData.task_id)},shutTpTipDialog:function(){this.showTipDialog=!1}}})}});