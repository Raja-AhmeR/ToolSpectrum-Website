!function(t){function e(e){for(var r,i,o=e[0],u=e[1],l=e[2],f=0,p=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(c&&c(e);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={22:0,33:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="../static/build/hi/index.html";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;a.push([563,0]),n()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},2:function(t,e){t.exports=Cookie},5:function(t,e){t.exports=base64},563:function(t,e,n){"use strict";var r=f(n(26)),s=f(n(1)),a=n(4);n(151),n(20);var i=f(n(32)),o=f(n(12)),u=f(n(152)),l=f(n(153)),c=f(n(143));function f(t){return t&&t.__esModule?t:{default:t}}var p=n(0);s.default.use(i.default),s.default.use(o.default),s.default.use(l.default);new s.default({el:"#app",mixins:[a.publicMixin,a.filterMixin,a.trackMixin,a.shareDocumentMixin],data:function(){return{total:null,current:1,currentSelect:10,userInfo:{email:"",first_name:"",last_name:"",industry:"",career:"",oldPassword:"",newPassword:"",confirmPassword:"",expire_time:""},taskList:"",selectTaskId:""}},created:function(){this.getTask()},methods:{pingUrl:function(t){return a.https.httpUrls.interfaceUrl+"/middle/document/download-doc?task_id="+t},pagechange:function(t){this.current=t.current,this.currentSelect=t.currentSelect,this.getTask()},getTask:function(){var t=this,e=a.https.httpUrls.interfaceUrl+a.https.httpUrls.task+"?page="+this.current+"&count="+this.currentSelect+"&type=self1&language="+p.shorthandLang;a.https.get(e,(function(e){1===e.result?(t.taskList=e.data.data_list,t.total=e.data.total):0===e.result&&3008===e.status&&a.common.setLoginRedirect("login")}))},deleteTask:function(t,e){var n=this,s=[];if(Array.isArray(e)){var i=!0,o=!1,u=void 0;try{for(var l,c=(0,r.default)(e);!(i=(l=c.next()).done);i=!0){var f=l.value;s.push(f.task_id)}}catch(t){o=!0,u=t}finally{try{!i&&c.return&&c.return()}finally{if(o)throw u}}}else s.push(e);var h={type:t,task_ids:s},d=this.$confirm({title:"",text:"multi"===t?p.lang.profileTip5:p.lang.profileTip6,type:"warning",button:[{text:p.lang.profileTip7,ontap:function(){d.close().then((function(t){a.https.httpRequest("DELETE",a.https.httpUrls.interfaceUrl+a.https.httpUrls.taskDelete,h,(function(t){1===t.result?(n.$message({type:"success",text:p.lang.profileTip2}),Math.ceil(n.total/n.currentSelect)===n.current&&n.taskList.length===s.length&&1!==n.current&&(n.current=n.current-1),n.getTask()):(0===t.result&&3005===t.status||3008===t.status)&&a.common.setLoginRedirect("login")}))}))}},{text:p.lang.profileTip8,ontap:function(){d.close()}}]})},dateTiem:function(t){if(""!==t){var e=new Date(1e3*t),n=e.getFullYear(),r=e.getMonth()+1;r=r<10?"0"+r:r;var s=e.getDate();s=s<10?"0"+s:s;var a=e.getHours();a=a<10?"0"+a:a;var i=e.getMinutes(),o=e.getSeconds();return r+"/"+s+"/"+n+" "+a+":"+(i=i<10?"0"+i:i)+":"+(o=o<10?"0"+o:o)}},saveAccount:function(){var t=this,e={firstName:this.userInfo.first_name,lastName:this.userInfo.last_name,email:this.userInfo.email,industry:this.userInfo.industry,career:this.userInfo.career};a.https.post(a.https.httpUrls.interfaceUrl+a.https.httpUrls.account,e,(function(e){1===e.result&&t.$message({type:"success",text:p.lang.profileTip3})}))},shareFileClick:function(t){this.selectTaskId=t.task_id,this.linkMessage="",this.changeShareType("email"),this.changeShowType(!0)},shareFile:function(t){this.shareFilePublic(t,this.selectTaskId)},changeShareType:function(t){this.shareType=t,"link"!=t||this.linkMessage||this.shareFilePublic(2,this.selectTaskId)},cancelShare:function(t){var e=this,n={share_key:t};a.https.httpRequest("DELETE",a.https.httpUrls.interfaceUrl+a.https.httpUrls.cancelShare+"?share_key="+t,n,(function(t){1===t.result?(e.$message({type:"success",text:p.lang.shareCancelled}),e.getTask()):(0===t.result&&3005===t.status||3008===t.status)&&a.common.setLoginRedirect("login")}))},leftTime:function(t){var e=new Date,n=t.expire_time-e.getTime()/1e3;return Math.floor(n/86400)+1}},components:{"v-pagination":u.default,"disk-save":c.default}})}});