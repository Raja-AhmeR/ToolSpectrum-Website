!function(t){function e(e){for(var o,a,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);for(l&&l(e);f.length;)f.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],o=!0,s=1;s<i.length;s++){var u=i[s];0!==n[u]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var o={},n={25:0,33:0},r=[];function a(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=o,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(i,o,function(e){return t[e]}.bind(null,o));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="../static/build/it/index.html";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;r.push([562,0]),i()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},2:function(t,e){t.exports=Cookie},5:function(t,e){t.exports=base64},562:function(t,e,i){"use strict";var o=u(i(1)),n=i(4),r=i(6),a=i(25),s=u(i(59));function u(t){return t&&t.__esModule?t:{default:t}}i(8);var c=i(0);i(2);o.default.use(s.default);var l="2";new o.default({el:"#app",mixins:[n.publicMixin,r.uploadMixin,n.filterMixin,n.trackMixin,a.batchMixin],data:function(){return{idNow:1e3,error:n.common.initError(),step:n.common.steps.selectUpload,outputName:"",outputType:"docx",ocrLanguage:[],trackfunc:"OCR",limitFormat:"",type:"",imgFormat:"",isLogin:!1,isFree:!0}},watch:{userStatus:function(t,e){t===n.UserType.vip?this.step=n.common.steps.selectUpload:this.step=n.common.steps.upgrade}},computed:{ocrDownload:function(){return this.batchDownloadUrl?this.batchDownloadUrl+"&interface_name=ocr":""}},created:function(){this.limitFormat=n.common.types.ocr,this.getProcessData=this.computeProcessData,this.acceptFormat="application/pdf,image/*",this.getModeType(),this.ocrLanguage=[c.langCurr]},methods:{reset:function(){document.getElementById(this.inputId).value="",this.mutiVerifyErrors.length>0&&this.fileDatas.length>0?(this.step=n.common.steps.selectMerge,this.mutiVerifyErrors=[]):(this.step=n.common.steps.selectUpload,this.fileDatas=[],this.validFilesNum=0,this.resetMutiProcess()),this.error=n.common.initError()},getModeType:function(){},changeLanguage:function(){var t=this,e=t.$ocr({text:c.lang.selectLangTitle,ocrLanguage:t.ocrLanguage,outFormat:t.outputType,button:[{text:c.lang.confirmTip2,ontap:function(i,o){o||(t.ocrLanguage=i.ocrLanguage,t.outputType=i.outFormat,e.close())}}]})},Operate:function(t){var e=location.href,i="";-1!==e.indexOf("?")&&(i="&"+e.split("?")[1]);n.common.setLoginRedirect(t,i)},mutiDiskUploadBack:function(t,e){var i=e;if(1===t.result&&t.data){for(var o=0,n=t.data.length;o<n;o++)this.jugePages(t.data[o].total_page,this.fileDatas[i].file.name)?(this.fileDatas[i]=this.mutiUploadHandleOneData(t.data[o],this.fileDatas[i]),t.data[o].status||this.selectMode!==l||(this.fileDatas[i].compressTip="",this.fileDatas[i].level="medium")):this.fileDatas.splice(i,1),i++;this.changeUploadStatus()}},computeProcessData:function(t){var e="",i=null,o="",r=c.getLanguagesId(this.ocrLanguage),a=t.file_name.split(".");return"pdf"===a[a.length-1].toLowerCase()?(o="GET",e=n.https.httpUrls.interfaceUrl+n.https.httpUrls.convert+"?file_id="+t.file_id+"&multi_id="+this.mutiFid+"&output_format="+this.outputType,e+="&using_ocr=1&languages="+r+"&t="+(new Date).getTime()):(o="POST",e=n.https.httpUrls.interfaceUrl+n.https.httpUrls.image0cr,i={file_ids:[t.file_id],output_format:this.outputType,using_ocr:!0,multi_id:this.mutiFid,languages:r.join(","),output_content:!1}),{request:e,method:o,postData:i}}}})}});