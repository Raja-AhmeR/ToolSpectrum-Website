!function(t){function e(e){for(var s,r,a=e[0],p=e[1],h=e[2],u=0,c=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&c.push(n[r][0]),n[r]=0;for(s in p)Object.prototype.hasOwnProperty.call(p,s)&&(t[s]=p[s]);for(l&&l(e);c.length;)c.shift()();return o.push.apply(o,h||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,a=1;a<i.length;a++){var p=i[a];0!==n[p]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={32:0,33:0},o=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="../static/build/jp/index.html";var a=window.webpackJsonp=window.webpackJsonp||[],p=a.push.bind(a);a.push=e,a=a.slice();for(var h=0;h<a.length;h++)e(a[h]);var l=p;o.push([440,0]),i()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},2:function(t,e){t.exports=Cookie},440:function(t,e,i){"use strict";var s,n=i(1),o=(s=n)&&s.__esModule?s:{default:s},r=i(4);i(8);var a=i(6),p=i(15);var h=i(0);new o.default({el:"#app",mixins:[r.publicMixin,a.uploadMixin,p.singlePdfMixin,r.trackMixin,r.shareDocumentMixin],data:function(){return{showSplitOption:!1,proPassword:"",input_change:"",disabled:!0,taskId:""}},created:function(){var t=this;this.pdfCheckSucess=this.showOption,this.resetMoreData=this.resetSingleData,this.singleUploadFinished=this.showOption,this.trackfunc="Protect",this.taskNextStepCallback=function(){t.step=r.common.steps.uploadSuccess},this.getTaskSessionList()},methods:{resetSingleData:function(){this.proPassword="",this.password="",this.showSplitOption=!1},showOption:function(){this.mutiUploadFinished&&(this.showSplitOption=!0,this.step=r.common.steps.uploadSuccess)},changePassword:function(){this.proPassword.length>=6&&this.proPassword.length<=20?(this.input_change="",this.disabled=!1):(this.input_change=h.lang.errorTip1,this.disabled=!0)},protext:function(){var t=this,e={file_id:this.file.file_id,oldpwd:this.password,password:this.proPassword};this.fileDatas[0].fileStatus=a.fileState.aimOperating,r.https.post(r.https.httpUrls.interfaceUrl+r.https.httpUrls.protect,e,this.startOperateCallBack,(function(e){t.proPassword="",t.password="",t.showSplitOption=!1,t.error=r.https.handleError(0),t.step=r.common.steps.fail})),this.gaVueTrack(4)},protextOver:function(t){this.proPassword="",this.password="",this.showSplitOption=!1,this.operationSuccess(t)},shareFile:function(t){this.shareFilePublic(t,this.getConvertData.task_id)},changeShareType:function(t){this.shareType=t,"link"!=t||this.linkMessage||this.shareFilePublic(2,this.getConvertData.task_id)}}})},5:function(t,e){t.exports=base64}});