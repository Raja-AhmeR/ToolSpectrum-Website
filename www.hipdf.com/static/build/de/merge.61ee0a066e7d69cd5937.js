!function(e){function t(t){for(var r,a,o=t[0],l=t[1],d=t[2],f=0,p=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);p.length;)p.shift()();return n.push.apply(n,d||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],r=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=i[0]))}return e}var r={},s={23:0,33:0},n=[];function a(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=r,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="../static/build/de/index.html";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=l;n.push([438,0]),i()}({0:function(e,t){e.exports=MutiLang},1:function(e,t){e.exports=Vue},2:function(e,t){e.exports=Cookie},438:function(e,t,i){"use strict";var r=l(i(1)),s=i(4),n=i(22),a=l(i(44));i(8);var o=i(6);function l(e){return e&&e.__esModule?e:{default:e}}var d=i(0);r.default.use(a.default);new r.default({el:"#app",mixins:[s.publicMixin,o.uploadMixin,s.filterMixin,s.trackMixin,s.shareDocumentMixin],data:function(){return{idNow:1e3,error:s.common.initError(),step:s.common.steps.selectUpload,downloadUrl:"",outputName:"",trackfunc:"Merge",failedFiles:[],acceptFormat:"application/pdf",mergeTaskId:""}},created:function(){this.multiple="multiple",this.specialPdfHandle=this.initPdfView,this.pdfInitRender=this.pdfStartRender,this.resetMoreData=this.resetMergeData},methods:{resetMergeData:function(){this.downloadUrl&&(this.step=s.common.steps.selectUpload,this.fileDatas=[],this.validFilesNum=0,this.downloadUrl="",this.outputName="",this.mergeTaskId="")},initPdfView:function(e){var t=this,i=new n.PdfView({upload_id:e.upload_id,doc:e.file,file_id:e.file_id,fileUrl:e.fileUrl,password:e.password,readPdfSuccess:function(r){t.getPdfPages(r,e,i)},renderFail:function(i){t.readPDfFailed(e,i)}})},pdfStartRender:function(e){this.isSafari?setTimeout((function(){e.initRender({height:160,renderMode:n.RenderMode.cover})}),500):e.initRender({height:160,renderMode:n.RenderMode.cover})},Merge:function(){var e=this;this.step=s.common.steps.mergeing;for(var t=[],i=0,r=this.fileDatas.length;i<r;i++)this.fileDatas[i].file_id&&this.fileDatas[i].fileStatus===o.fileState.uploadSuccess&&t.push(this.fileDatas[i].file_id);0!==t.length&&((0,s.gaEvent)("Operate File","Operate File Start"),s.https.post(s.https.httpUrls.interfaceUrl+s.https.httpUrls.merge,{file_ids:t},this.mergeOver,(function(t){e.error=s.https.handleError(t),e.step=s.common.steps.fail})),this.gaVueTrack(4))},mergeOver:function(e){1===e.result?(this.mergeTaskId=e.data.task_id,this.outputName=e.data.output_file_name,this.getMergeResult(e.data.task_id)):(3023===e.status?this.handleTimesLimit(e.back_data.ttl):4204===e.status?this.step=s.common.steps.encrypt:(this.error=s.https.handleError(e.status),[4201,5216,4203,4210].indexOf(e.status)>=0&&(this.error.errorType=d.lang.error14),this.step=s.common.steps.fail),(0,s.gaEvent)("Operate File","Operate File Failed"))},getMergeResult:function(e){var t=this,i=this;e&&s.https.getJSON("GET",s.https.httpUrls.interfaceUrl+s.https.httpUrls.taskResult+"?task_id="+e,null).then((function(r){if(1===r.result){var n=r.data.data[0];if(n.is_done){if(0!==n.status)return t.error=s.https.handleError(n.status),t.step=s.common.steps.fail;n.err_fids&&n.err_fids.length>0?i.failedFiles=i.getMutiOperFailedFiles(n.err_fids):i.failedFiles=[],t.downloadUrl=s.https.httpUrls.interfaceUrl+"/middle/document/download-doc?task_id="+e,t.step=s.common.steps.success,(0,s.gaEvent)("Operate File","Operate File Success")}if(!r.data.data[0].is_done){var a=1e3;r.data.wait_time&&(a=1e3*r.data.wait_time),window.setTimeout((function(){i.getMergeResult(e)}),a)}}})).catch((function(t){i.getMergeResult(e)}))},shareFile:function(e){this.shareFilePublic(e,this.mergeTaskId)},changeShareType:function(e){this.shareType=e,"link"!=e||this.linkMessage||this.shareFilePublic(2,this.mergeTaskId)}}})},5:function(e,t){e.exports=base64}});