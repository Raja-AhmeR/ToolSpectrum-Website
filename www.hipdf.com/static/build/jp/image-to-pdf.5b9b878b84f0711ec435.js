!function(t){function e(e){for(var r,n,o=e[0],l=e[1],u=e[2],c=0,f=[];c<o.length;c++)n=o[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&f.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(p&&p(e);f.length;)f.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(r=!1)}r&&(a.splice(e--,1),t=n(n.s=i[0]))}return t}var r={},s={18:0,33:0},a=[];function n(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=r,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="../static/build/jp/index.html";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var p=l;a.push([473,0]),i()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},2:function(t,e){t.exports=Cookie},473:function(t,e,i){"use strict";var r=o(i(1)),s=i(4),a=i(6),n=o(i(44));function o(t){return t&&t.__esModule?t:{default:t}}i(8);var l=i(0);r.default.use(n.default);new r.default({el:"#app",mixins:[s.publicMixin,a.uploadMixin,s.filterMixin,s.trackMixin,s.shareDocumentMixin],data:function(){return{idNow:1e3,error:s.common.initError(),step:s.common.steps.selectUpload,batchDownloadUrl:"",outputName:"",trackfunc:"Image to PDF",outputFormat:s.common.types.pdf,acceptFormat:"image/*",failedFiles:[],isEmail:!0,mergeTaskId:""}},created:function(){this.limitFormat=s.common.types.functionImage,this.diskUploadBack=this.mutiDiskUploadBack;var t=document.getElementById("pageId").value;if(t){var e=t.indexOf("To");this.outputFormat=t.substring(e+2).toLowerCase()}},methods:{stepChange:function(t,e){e?this.step=t:(this.error=s.https.handleError(3504),this.step=s.common.steps.fail)},reset:function(){document.getElementById(this.inputId).value="",this.failedFiles=[],this.mergeTaskId="",("selectMerge"===this.step||this.mutiVerifyErrors.length>0)&&this.fileDatas.length>0?(this.step=s.common.steps.selectMerge,this.mutiVerifyErrors=[]):(this.step=s.common.steps.selectUpload,this.fileDatas=[],this.validFilesNum=0),this.error=s.common.initError()},Merge:function(){var t=this;this.step=s.common.steps.mergeing;for(var e=[],i=0,r=this.fileDatas.length;i<r;i++)this.fileDatas[i].file_id&&this.fileDatas[i].fileStatus===a.fileState.uploadSuccess&&e.push(this.fileDatas[i].file_id);(0,s.gaEvent)("Operate File","Operate File Start"),s.https.post(s.https.httpUrls.interfaceUrl+s.https.httpUrls.imagesMerge,{file_ids:e},(function(e){1===e.result&&e.data.task_id?t.getMergeResult(e.data.task_id):3023===e.status?t.handleTimesLimit(e.back_data.ttl):4204===e.status&&(t.step=s.common.steps.encrypt)}),(function(e){t.error=s.https.handleError(e),t.step=s.common.steps.fail})),this.gaVueTrack(4)},getMergeResult:function(t){var e=this;t&&s.https.getJSON("GET",s.https.httpUrls.interfaceUrl+s.https.httpUrls.taskResult+"?task_id="+t,null).then((function(i){if(1===i.result&&(e.mergeOver(i.data.data[0]),!i.data.data[0].is_done)){var r=1e3;i.data.wait_time&&(r=1e3*i.data.wait_time),window.setTimeout((function(){e.getMergeResult(t)}),r)}})).catch((function(i){e.getMergeResult(t)}))},mergeOver:function(t){t.is_done&&(0===t.status?(this.mergeTaskId=t.task_id,this.batchDownloadUrl=s.https.httpUrls.interfaceUrl+"/middle/document/download-doc?task_id="+t.task_id,this.outputName=t.output_file_name,t.err_fids&&(this.failedFiles=this.getMutiOperFailedFiles(t.err_fids)),this.step=s.common.steps.success,(0,s.gaEvent)("Operate File","Operate File Success")):(this.error=s.https.handleError(t.status),[4201,5216,4203,4210].indexOf(t.status)>=0&&(this.error.errorType=l.lang.error14),this.step=s.common.steps.fail,(0,s.gaEvent)("Operate File","Operate File Failed")))},shareFile:function(t){this.shareFilePublic(t,this.mergeTaskId)},changeShareType:function(t){this.shareType=t,"link"!=t||this.linkMessage||this.shareFilePublic(2,this.mergeTaskId)}}})},5:function(t,e){t.exports=base64}});