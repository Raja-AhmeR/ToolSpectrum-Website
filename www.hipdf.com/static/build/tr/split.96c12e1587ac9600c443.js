!function(t){function e(e){for(var s,a,p=e[0],o=e[1],l=e[2],u=0,g=[];u<p.length;u++)a=p[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&g.push(n[a][0]),n[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);for(h&&h(e);g.length;)g.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,p=1;p<i.length;p++){var o=i[p];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},n={42:0,33:0},r=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="../static/build/tr/index.html";var p=window.webpackJsonp=window.webpackJsonp||[],o=p.push.bind(p);p.push=e,p=p.slice();for(var l=0;l<p.length;l++)e(p[l]);var h=o;r.push([439,0]),i()}({0:function(t,e){t.exports=MutiLang},1:function(t,e){t.exports=Vue},2:function(t,e){t.exports=Cookie},439:function(t,e,i){"use strict";var s,n=i(1),r=(s=n)&&s.__esModule?s:{default:s},a=i(4);i(8);var p=i(22),o=i(6),l=i(15);var h=i(0);new r.default({el:"#app",mixins:[a.publicMixin,o.uploadMixin,l.singlePdfMixin,a.trackMixin,a.shareDocumentMixin],data:function(){return{splitMode:2,showSplitOption:!1,start_page:1,end_page:"",avg:1,input_change:"",input1:!1,input1Msg:"",input2:!1,input2Msg:"",input3:!1,input3Msg:"",disabled:!1,filePages:[],firstPage:{page:0,rotate:0},pdfListImages:[],showButton:!0,groupList:[],savePage:{},cssSelect:!0,cssSplit:!0}},created:function(){var t=this;this.showButton=!0,this.singleUploadFinished=this.showOption,this.pdfCheckSucess=this.showOption,this.resetMoreData=this.resetSplitData,this.inputId="inputFile",this.trackfunc="Split",this.taskNextStepCallback=function(){t.showOption()},this.getTaskSessionList()},watch:{splitMode:function(t,e){e!==t&&(this.monitoring(),1==t?this.gaVueTrackStr("Page Ranges Option"):this.gaVueTrackStr("Average Parts Option"))}},methods:{resetSplitData:function(){this.showSplitOption=!1,this.savePage={},this.groupList=[],this.showButton=!0,this.filePages=[],this.pdfListImages=[],this.input1=!1,this.input2=!1,this.input3=!1,this.input1Msg="",this.input2Msg="",this.input3Msg="",this.splitMode=1,this.start_page=1,this.end_page=1,this.avg=1},chooseMedicine1:function(){},chooseMedicine2:function(){},chooseMedicine3:function(){},monitoring:function(){if(this.file.total_page)if(1===parseInt(this.splitMode)){var t=/^[0-9]\d*$/,e=(t=/^[0-9]\d*$/,parseInt(this.start_page)),i=parseInt(this.end_page);t.test(e)?e<0?this.input1Msg=h.lang.errorTip11:0==e?(this.input1Msg=a.common.replacePlaceVar(h.lang.errorTip3,1,"1"),this.input1=!0):e>parseInt(this.file.total_page)?(this.input1Msg=a.common.replacePlaceVar(h.lang.errorTip8,1,parseInt(this.file.total_page)),this.input1=!0):(this.input1Msg="",this.input1=!1):(this.input1Msg=h.lang.errorTip11,this.input1=!0),t.test(i)?i<0?this.input2Msg=h.lang.errorTip11:0==i?(this.input2Msg=a.common.replacePlaceVar(h.lang.errorTip3,1,"1"),this.input2=!0):i>this.file.total_page?(this.input2Msg=a.common.replacePlaceVar(h.lang.errorTip8,1,parseInt(this.file.total_page)),this.input2=!0):i<e?(this.input2Msg=a.common.replacePlaceVar(h.lang.errorTip9,1,e),this.input2=!0):(this.input2Msg="",this.input2=!1):(this.input2Msg=h.lang.errorTip11,this.input2=!0),this.input3Msg="",this.input3=!1}else if(2===parseInt(this.splitMode)){t=/^[0-9]\d*$/;var s=parseInt(this.avg);t.test(s)?0===s?(this.input3Msg=h.lang.errorTip6,this.input3=!0):s>this.file.total_page?(this.input3Msg=h.lang.errorTip7,this.input3=!0):(this.input3Msg="",this.input3=!1):(this.input3Msg=h.lang.errorTip11,this.input3=!0),this.input1Msg="",this.input1=!1,this.input2Msg="",this.input2=!1}},showOption:function(){this.mutiUploadFinished&&(this.showSplitOption=!0,this.step=a.common.steps.uploadSuccess,this.fileDatas[0].total_page?this.end_page=this.fileDatas[0].total_page:this.file.total_page&&(this.end_page=this.file.total_page))},split:function(){var t=this,e=this;e.monitoring();var i=parseInt(e.splitMode),s={file_id:e.file.file_id,password:e.password,split_type:i};if(1===i){if(""===e.start_page&&""===e.end_page)return!1;if(!1!==e.input1||!1!==e.input2)return!1;e.step=a.common.steps.processing,e.showSplitOption=!1,s.start_page=parseInt(e.start_page),s.end_page=parseInt(e.end_page)}else{if(2!==i)return this.splitNewPages(),!1;if(""===e.avg)return e.input_change=h.lang.errorTip7,setTimeout((function(){e.input_change=""}),1500),!1;if(!1!==e.input3)return!1;e.step=a.common.steps.processing,e.showSplitOption=!1,s.avg=parseInt(e.avg)}a.https.post(a.https.httpUrls.interfaceUrl+a.https.httpUrls.split,s,e.splitOver,(function(){e.showSplitOption=!1,e.error=a.https.handleError(),e.step=a.common.steps.fail,t.input1=!1,t.input2=!1,t.input3=!1,t.splitMode=1,t.start_page=1,t.end_page="",t.avg=1})),this.gaVueTrack(4)},splitNewPages:function(){var t={};if(4==this.splitMode)for(var e=0;e<this.file.total_page;e++)t["split_selected_"+(e+1)]=[e+1];else if(5==this.splitMode){var i=0;for(t.split_selected_1=[],t.split_unselected=[];i<this.file.total_page;)t.split_selected_1.push(i+2),t.split_unselected.push(i+1),i+=2;this.file.total_page%2==1&&t.split_selected_1.pop()}if(t.split_selected_1&&t.split_selected_1.length>0){var s={file_id:this.file.file_id,password:this.password,save_files:t};this.extractPages(s)}},splitOver:function(t){this.resetSplitData(),this.startOperateCallBack(t)},sortPdf:function(t){this.showButton=!1,"true"===t?(this.showSplitOption=!0,this.step=a.common.steps.uploadSuccess):this.showSplitOption&&(this.showSplitOption=!1,this.initPdfView())},initPdfView:function(){var t=this,e=new p.PdfView({file_id:this.file.file_id,doc:this.file.file,password:this.password,upload_id:this.file.upload_id,fileUrl:this.file.fileUrl,readPdfSuccess:function(i){t.file.total_page=i,t.initFilePages(i),e.initRender({height:200,startPage:1})}})},initFilePages:function(t){if(t||(t=this.file.total_page),t>0)for(var e=0;e<t;e++)this.filePages.push({page:e+1,id:e+1,img:"",addBorder:!1,showTemp:!0});this.step=a.common.steps.optionSet},addClassFun:function(t){this.filePages[t].addBorder=!this.filePages[t].addBorder;for(var e=0;e<this.filePages.length;e++)if(!0===this.filePages[e].showTemp){if(!0===this.filePages[e].addBorder){this.cssSelect=!1;break}this.cssSelect=!0}!1===this.cssSelect||this.groupList.length>=1?this.cssSplit=!1:this.cssSplit=!0},removeGroup:function(t){var e=this;if(e.groupList[t].toString().indexOf(",")>=0)for(var i=e.groupList[t].split(","),s=0;s<i.length;s++)if(i[s].toString().indexOf("-")>=0)for(var n=i[s].split("-"),r=parseInt(n[0]);r<=parseInt(n[1]);r++)e.restorePage(parseInt(r));else e.restorePage(parseInt(i[s]));else if(this.groupList[t].toString().indexOf("-")>=0)for(n=this.groupList[t].split("-"),r=parseInt(n[0]);r<=parseInt(n[1]);r++)e.restorePage(parseInt(r));else e.restorePage(parseInt(e.groupList[t]));e.groupList.splice(t,1),!1===e.cssSelect||e.groupList.length>=1?e.cssSplit=!1:e.cssSplit=!0},restorePage:function(t){this.filePages.forEach((function(e){e.page==t&&(e.showTemp=!0)}))},addSelected:function(){var t=this,e=[];t.filePages.length>=1&&(t.filePages.forEach((function(t,i,s){!0===t.addBorder&&(t.showTemp=!1,t.addBorder=!1,e.push(t.page))})),e.length>0&&(t.groupList.push(t.arrToStr(e)),t.cssSelect=!0,!1===t.cssSelect||t.groupList.length>=1?t.cssSplit=!1:t.cssSplit=!0))},splitMerge:function(){for(var t=this,e=!1,i=0;i<t.filePages.length;i++){if(!0===t.filePages[i].showTemp){e=!0;break}e=!1}t.$set(t.savePage,"split_unselected",[]),t.groupList.forEach((function(e,i){var s="split_selected_"+(i+1);if(t.$set(t.savePage,s,[]),e.toString().indexOf("-")>=0)for(var n=e.split("-"),r=parseInt(n[0]);r<=parseInt(n[1]);r++)t.savePage[s].push(parseInt(r));else if(e.toString().indexOf(",")>=0)for(var a=e.toString().split(","),p=0;p<a.length;p++)t.savePage[s].push(parseInt(a[p]));else t.savePage[s].push(parseInt(e))}));for(i=0;i<t.filePages.length;i++){if(!0===t.filePages[i].addBorder){e=!0;break}e=!1}if(!0===e){var s="split_selected_"+(t.groupList.length+1);t.$set(t.savePage,s,[]),t.filePages.forEach((function(e,i,n){1==e.addBorder?t.savePage[s].push(e.page):1==e.showTemp&&t.savePage.split_unselected.push(e.page)}))}else t.filePages.forEach((function(e,i,s){!0!==e.addBorder&&1==e.showTemp&&t.savePage.split_unselected.push(e.page)}));t.cssSelect=!0,t.cssSplit=!0;var n={file_id:t.file.file_id,password:t.password,save_files:t.savePage};this.extractPages(n),t.gaVueTrack(4)},arrToStr:function(t){for(var e="",i=[],s="",n=0;n<t.length;n++)e=0===n?t[0]:t[n-1],t[n]===e+1?""===s?s="@"+t[n]:s+="-"+t[n]:(""!==s&&i.push(s),i.push(t[n]),s="");""!=s&&(i.push(s),s="");for(var r="",a=0;a<i.length;a++)if(i[a].toString().indexOf("@")>=0){var p=i[a].split("@")[1];if(p.toString().indexOf("-")>=0){var o=p.split("-");r+="-"+o[o.length-1]}else r+="-"+p}else""===r?r=i[a]:r+=","+[i[a]];return r},extractPages:function(t){var e=this;e.step=a.common.steps.processing,a.https.post(a.https.httpUrls.interfaceUrl+a.https.httpUrls.extractPage,t,e.splitOver,(function(){e.savePage={},e.groupList=[],e.showSplitOption=!1,e.showButton=!0,e.filePages=[],e.pdfListImages=[],e.error=a.https.handleError(),e.step=a.common.steps.fail,e.input1=!1,e.input2=!1,e.input3=!1,e.splitMode=1,e.start_page=1,e.end_page="",e.avg=1,e.groupArr={}}))},shareFile:function(t){this.shareFilePublic(t,this.getConvertData.task_id)},changeShareType:function(t){this.shareType=t,"link"!=t||this.linkMessage||this.shareFilePublic(2,this.getConvertData.task_id)}}})},5:function(t,e){t.exports=base64}});