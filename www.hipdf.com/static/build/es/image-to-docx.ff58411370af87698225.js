!function(t){function e(e){for(var a,i,o=e[0],u=e[1],l=e[2],c=0,f=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);for(p&&p(e);f.length;)f.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,o=1;o<r.length;o++){var u=r[o];0!==s[u]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},s={16:0,33:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="../static/build/es/index.html";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var p=u;n.push([544,0]),r()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},2:function(t,e){t.exports=Cookie},5:function(t,e){t.exports=base64},544:function(t,e,r){"use strict";var a=u(r(1)),s=r(4),n=r(6),i=u(r(59)),o=u(r(44));function u(t){return t&&t.__esModule?t:{default:t}}r(8);var l=r(0);r(2);a.default.use(i.default),a.default.use(o.default);new a.default({el:"#app",mixins:[s.publicMixin,n.uploadMixin,s.filterMixin,s.trackMixin,s.shareDocumentMixin],data:function(){return{idNow:1e3,error:s.common.initError(),step:s.common.steps.selectUpload,batchDownloadUrl:"",outputName:"",trackfunc:"Image to PDF",acceptFormat:"image/*",ocrLanguage:[],isLogin:!1,isEmail:!0,failedFiles:[],resultTimer:0,mode:0}},watch:{userStatus:function(t,e){t===s.UserType.vip?this.step=s.common.steps.selectUpload:this.step=s.common.steps.upgrade}},created:function(){var t=document.getElementById("pageId").value;if(t){var e=s.common.getInfoFromPageType(t),r=e.from,a=e.type,n=e.acceptFormat,i=e.imgFormat;this.from=r,this.type=a,this.acceptFormat=n,this.imgFormat=i}this.ocrLanguage=[l.langCurr],this.limitFormat=s.common.types.functionImage},methods:{stepChange:function(t,e){e?this.step=t:(this.error=s.https.handleError(3504),this.step=s.common.steps.fail)},reset:function(){document.getElementById(this.inputId).value="",this.mutiVerifyErrors.length>0&&this.fileDatas.length>0?(this.step=s.common.steps.selectMerge,this.mutiVerifyErrors=[]):(this.step=s.common.steps.selectUpload,this.fileDatas=[]),this.error=s.common.initError()},initLanguageData:function(){this.from===s.common.types.pdf&&this.type!==s.common.types.functionImage&&(this.ocrLanguage=[l.langCurr],this.scanned=!1)},changeLanguage:function(){var t=this,e=t.$ocr({text:l.lang.selectLangTitle,ocrLanguage:t.ocrLanguage,button:[{text:l.lang.confirmTip2,ontap:function(r,a){a||(t.ocrLanguage=r.ocrLanguage,e.close())}}]})},Merge:function(){for(var t=this,e=this,r=[],a=0,i=e.fileDatas.length;a<i;a++)e.fileDatas[a].file_id&&e.fileDatas[a].fileStatus===n.fileState.uploadSuccess&&r.push(e.fileDatas[a].file_id);var o={file_ids:r,output_format:"pdf",multi_id:"",password:""};this.step=s.common.steps.mergeing,(0,s.gaEvent)("Operate File","Operate File Start"),s.https.post(s.https.httpUrls.interfaceUrl+s.https.httpUrls.imageNewOCr,o,(function(e){1===e.result&&e.data.task_id?t.getMergeResult(e.data.task_id):(t.error=s.https.handleError(e),t.step=s.common.steps.fail)}),(function(e){t.error=s.https.handleError(e),t.step=s.common.steps.fail})),this.gaVueTrack(4)},getMergeResult:function(t,e){var r=this;t&&s.https.getJSON("GET",s.https.httpUrls.interfaceUrl+s.https.httpUrls.taskResult+"?task_id="+t,null).then((function(a){if(1===a.result&&("converter"===e?r.convertOver(a.data.data[0]):r.mergeOver(a.data.data[0]),!a.data.data[0].is_done)){var s=1e3;a.data.wait_time&&(s=1e3*a.data.wait_time),window.setTimeout((function(){r.getMergeResult(t,e)}),s)}})).catch((function(a){r.getMergeResult(t,e)}))},mergeOver:function(t){var e=this;if(t.is_done)if(0===t.status){t.err_fids&&(this.failedFiles=this.getMutiOperFailedFiles(t.err_fids));var r={using_ocr:!0,languages:l.getLanguagesId(this.ocrLanguage).join(","),output_format:this.type,multi_id:"",task_id:t.task_id};s.https.post(s.https.httpUrls.interfaceUrl+s.https.httpUrls.imageConverter,r,(function(t){1===t.result&&t.data.task_id?(e.getMergeResult(t.data.task_id,"converter"),e.ocrLanguage=[l.langCurr]):(e.error=s.https.handleError(t),e.step=s.common.steps.fail)}),(function(t){e.error=s.https.handleError(t),e.step=s.common.steps.fail}))}else this.error=s.https.handleError(t.status),[4201,5216,4203,4210].indexOf(t.status)>=0&&(this.error.errorType=l.lang.error14),this.step=s.common.steps.fail,(0,s.gaEvent)("Operate File","Operate File Failed")},convertOver:function(t){t.is_done&&(0===t.status?(this.batchDownloadUrl=s.https.httpUrls.interfaceUrl+"/middle/document/download-doc?task_id="+t.task_id,this.outputName=t.output_file_name,this.step=s.common.steps.success,(0,s.gaEvent)("Operate File","Operate File Success")):(this.error=s.https.handleError(t.status),[4201,5216,4203,4210].indexOf(t.status)>=0&&(this.error.errorType=l.lang.error14),this.step=s.common.steps.fail,(0,s.gaEvent)("Operate File","Operate File Failed")))}}})}});