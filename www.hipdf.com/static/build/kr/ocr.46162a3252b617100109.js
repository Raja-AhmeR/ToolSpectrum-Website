!function(t){function e(e){for(var i,a,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);for(l&&l(e);f.length;)f.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],i=!0,s=1;s<o.length;s++){var u=o[s];0!==n[u]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var i={},n={25:0,33:0},r=[];function a(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=i,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(o,i,function(e){return t[e]}.bind(null,i));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="../static/build/kr/index.html";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;r.push([562,0]),o()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},2:function(t,e){t.exports=Cookie},5:function(t,e){t.exports=base64},562:function(t,e,o){"use strict";var i=u(o(1)),n=o(4),r=o(6),a=o(25),s=u(o(59));function u(t){return t&&t.__esModule?t:{default:t}}o(8);var c=o(0);o(2);i.default.use(s.default);var l="2";new i.default({el:"#app",mixins:[n.publicMixin,r.uploadMixin,n.filterMixin,n.trackMixin,a.batchMixin],data:function(){return{idNow:1e3,error:n.common.initError(),step:n.common.steps.selectUpload,outputName:"",outputType:"docx",ocrLanguage:[],trackfunc:"OCR",limitFormat:"",type:"",imgFormat:"",isLogin:!1,isFree:!0}},watch:{userStatus:function(t,e){t===n.UserType.vip?this.step=n.common.steps.selectUpload:this.step=n.common.steps.upgrade}},computed:{ocrDownload:function(){return this.batchDownloadUrl?this.batchDownloadUrl+"&interface_name=ocr":""}},created:function(){this.limitFormat=n.common.types.ocr,this.getProcessData=this.computeProcessData,this.acceptFormat="application/pdf,image/*",this.getModeType(),this.ocrLanguage=[c.langCurr]},methods:{reset:function(){document.getElementById(this.inputId).value="",this.mutiVerifyErrors.length>0&&this.fileDatas.length>0?(this.step=n.common.steps.selectMerge,this.mutiVerifyErrors=[]):(this.step=n.common.steps.selectUpload,this.fileDatas=[],this.validFilesNum=0,this.resetMutiProcess()),this.error=n.common.initError()},getModeType:function(){},changeLanguage:function(){var t=this,e=t.$ocr({text:c.lang.selectLangTitle,ocrLanguage:t.ocrLanguage,outFormat:t.outputType,button:[{text:c.lang.confirmTip2,ontap:function(o,i){i||(t.ocrLanguage=o.ocrLanguage,t.outputType=o.outFormat,e.close())}}]})},Operate:function(t){var e=location.href,o="";-1!==e.indexOf("?")&&(o="&"+e.split("?")[1]);n.common.setLoginRedirect(t,o)},mutiDiskUploadBack:function(t,e){var o=e;if(1===t.result&&t.data){for(var i=0,n=t.data.length;i<n;i++)this.jugePages(t.data[i].total_page,this.fileDatas[o].file.name)?(this.fileDatas[o]=this.mutiUploadHandleOneData(t.data[i],this.fileDatas[o]),t.data[i].status||this.selectMode!==l||(this.fileDatas[o].compressTip="",this.fileDatas[o].level="medium")):this.fileDatas.splice(o,1),o++;this.changeUploadStatus()}},computeProcessData:function(t){var e="",o=null,i="",r=c.getLanguagesId(this.ocrLanguage),a=t.file_name.split(".");return"pdf"===a[a.length-1].toLowerCase()?(i="GET",e=n.https.httpUrls.interfaceUrl+n.https.httpUrls.convert+"?file_id="+t.file_id+"&multi_id="+this.mutiFid+"&output_format="+this.outputType,e+="&using_ocr=1&languages="+r+"&t="+(new Date).getTime()):(i="POST",e=n.https.httpUrls.interfaceUrl+n.https.httpUrls.image0cr,o={file_ids:[t.file_id],output_format:this.outputType,using_ocr:!0,multi_id:this.mutiFid,languages:r.join(","),output_content:!1}),{request:e,method:i,postData:o}}}})}});