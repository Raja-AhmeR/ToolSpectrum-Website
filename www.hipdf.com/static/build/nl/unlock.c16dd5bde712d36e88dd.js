!function(t){function e(e){for(var n,o,a=e[0],l=e[1],c=e[2],u=0,h=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(p&&p(e);h.length;)h.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,a=1;a<s.length;a++){var l=s[a];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},i={43:0,33:0},r=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="../static/build/nl/index.html";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var p=l;r.push([441,0]),s()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},2:function(t,e){t.exports=Cookie},441:function(t,e,s){"use strict";var n,i=s(1),r=(n=i)&&n.__esModule?n:{default:n},o=s(4);s(8);var a=s(6),l=s(15);var c=s(0);new r.default({el:"#app",mixins:[o.publicMixin,a.uploadMixin,l.singlePdfMixin,o.trackMixin,o.shareDocumentMixin],data:function(){return{lockPassword:"",input_change:"",noPassword:!1,disabled:!0}},created:function(){this.pdfCheckSucess=this.showOption,this.singleUploadFinished=this.showOption,this.resetMoreData=this.resetUnlockData,this.inputId="inputFile",this.trackfunc="Unlock",this.getTaskSessionList()},watch:{step:{handler:function(t,e){t===o.common.steps.encrypt&&this.unlock()}}},methods:{resetUnlockData:function(){this.lockPassword="",this.input_change="",this.noPassword=!1,this.disabled=!0},showOption:function(){this.mutiUploadFinished&&this.unlock()},unlock:function(){var t=this,e=this;e.step=o.common.steps.unlocking,o.https.get(o.https.httpUrls.interfaceUrl+o.https.httpUrls.info+"?file_id="+this.file.file_id+"&t="+(new Date).getTime(),(function(t){1===t.result?e.step=o.common.steps.uploadSuccess:3122===t.status||4204===t.status?(e.file.fileStatus=a.fileState.encrypt,e.step=o.common.steps.uploadSuccess):(e.error=o.https.handleError(t.status),e.step=o.common.steps.fail)}),(function(e){o.https.handleError(e);t.step=o.common.steps.fail}))},changelockPassword:function(){this.lockPassword.length>=1?(this.input_change="",this.disabled=!1):(this.input_change=c.lang.error11Msg2,this.disabled=!0)},unlockButton:function(){var t=this,e=encodeURIComponent(this.lockPassword),s=o.https.httpUrls.interfaceUrl+o.https.httpUrls.info+"?file_id="+this.file.file_id+"&passwd="+e+"&t="+(new Date).getTime();this.pwdVerifying=!0,o.https.get(s,this.unlockOver,(function(e){var s=o.https.handleError(e);t.input_change=s.errorMsg,t.pwdVerifying=!1})),this.gaVueTrack(4)},unlockOver:function(t){var e=this;if(1===t.result){var s={file_id:this.file.file_id,password:this.lockPassword};this.step=o.common.steps.processing,o.https.post(o.https.httpUrls.interfaceUrl+o.https.httpUrls.unlock,s,this.protextOver,(function(t){e.lockPassword="",e.error=o.https.handleError(t),e.step=o.common.steps.fail}))}else this.pwdVerifying=!1,this.input_change=c.lang.error11Msg1},protextOver:function(t){this.lockPassword="",this.startOperateCallBack(t)},shareFile:function(t){this.shareFilePublic(t,this.getConvertData.task_id)},changeShareType:function(t){this.shareType=t,"link"!=t||this.linkMessage||this.shareFilePublic(2,this.getConvertData.task_id)}}})},5:function(t,e){t.exports=base64}});