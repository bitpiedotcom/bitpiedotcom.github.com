(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{560:function(t,d){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAFpJREFUCB1jYICC////M8LYIBrMMTExiQWypwAlfwHphLNnz25lNDY2ZmVkZPwIFOQEq2RkfHLmzBlZJhAHKPgfREMBmM0E1PabiYkpCSj4BoifAdmpMBVYaQBtiB8HLiAGkwAAAABJRU5ErkJggg=="},587:function(t,d,e){"use strict";(function(t){var o,n=e(48),c=(e(16),e(5)),r=e(6);d.a=(o={name:"joinMessagePhone",computed:{joinOpen:function(){return this.$store.state.joinOpen},joinId:function(){return this.$route.query.joinId},joinJson:function(){return this.$store.state.joinJson},joinPlace:function(){return this.$route.query.joinPlace},join:function(){return this.$t("join")}},created:function(){this.$store.dispatch("GETJOINJSON");var d=this.$getLang();this.$getStorage("lang")&&(d=this.$getStorage("lang")),this.$i18n.locale=d,this.$store.commit("LANG",d);var e=new Date;this.$store.commit("YEAR",e.getFullYear()),this.$downloadUrl(this);var o,n=navigator.userAgent.toLowerCase(),c=window.screen.width,r=window.devicePixelRatio||1;-1!==n.indexOf("android")&&parseFloat(n.slice(n.indexOf("android")+8))<4&&(o=750/c*r*160,t('meta[name="viewport"]').attr("content","target-densitydpi="+o+", width=device-width, user-scalable=no"))},components:{indexHeader:c.default,indexFooter:r.default}},Object(n.a)(o,"computed",{routerPath:function(){return this.$route.path}}),Object(n.a)(o,"mounted",(function(){var t=this;window.onresize=function(){t.$store.commit("BODYWIDTH",document.documentElement.clientWidth)}})),o)}).call(this,e(22))},597:function(t,d,e){var content=e(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("55a2d682",content,!0,{sourceMap:!1})},606:function(t,d,e){"use strict";e(597)},607:function(t,d,e){var o=e(11),n=e(61),c=e(560),r=o(!1),l=n(c);r.push([t.i,'a[data-v-57adc964],abbr[data-v-57adc964],acronym[data-v-57adc964],address[data-v-57adc964],applet[data-v-57adc964],article[data-v-57adc964],aside[data-v-57adc964],audio[data-v-57adc964],b[data-v-57adc964],big[data-v-57adc964],blockquote[data-v-57adc964],body[data-v-57adc964],canvas[data-v-57adc964],caption[data-v-57adc964],center[data-v-57adc964],cite[data-v-57adc964],code[data-v-57adc964],dd[data-v-57adc964],del[data-v-57adc964],details[data-v-57adc964],dfn[data-v-57adc964],div[data-v-57adc964],dl[data-v-57adc964],dt[data-v-57adc964],em[data-v-57adc964],embed[data-v-57adc964],fieldset[data-v-57adc964],figcaption[data-v-57adc964],figure[data-v-57adc964],footer[data-v-57adc964],form[data-v-57adc964],h1[data-v-57adc964],h2[data-v-57adc964],h3[data-v-57adc964],h4[data-v-57adc964],h5[data-v-57adc964],h6[data-v-57adc964],header[data-v-57adc964],hgroup[data-v-57adc964],html[data-v-57adc964],i[data-v-57adc964],iframe[data-v-57adc964],img[data-v-57adc964],ins[data-v-57adc964],kbd[data-v-57adc964],label[data-v-57adc964],legend[data-v-57adc964],li[data-v-57adc964],mark[data-v-57adc964],menu[data-v-57adc964],nav[data-v-57adc964],object[data-v-57adc964],ol[data-v-57adc964],output[data-v-57adc964],p[data-v-57adc964],pre[data-v-57adc964],q[data-v-57adc964],ruby[data-v-57adc964],s[data-v-57adc964],samp[data-v-57adc964],section[data-v-57adc964],small[data-v-57adc964],span[data-v-57adc964],strike[data-v-57adc964],strong[data-v-57adc964],sub[data-v-57adc964],summary[data-v-57adc964],sup[data-v-57adc964],table[data-v-57adc964],tbody[data-v-57adc964],td[data-v-57adc964],tfoot[data-v-57adc964],th[data-v-57adc964],thead[data-v-57adc964],time[data-v-57adc964],tr[data-v-57adc964],tt[data-v-57adc964],u[data-v-57adc964],ul[data-v-57adc964],var[data-v-57adc964],video[data-v-57adc964]{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline;text-decoration:none;color:#333;letter-spacing:0;font-family:PingFang SC,"微软雅黑"!important}html[data-v-57adc964]{line-height:1}ol[data-v-57adc964],ul[data-v-57adc964]{list-style:none}table[data-v-57adc964]{border-collapse:collapse;border-spacing:0}caption[data-v-57adc964],td[data-v-57adc964],th[data-v-57adc964]{text-align:left;font-weight:400;vertical-align:middle}blockquote[data-v-57adc964],q[data-v-57adc964]{quotes:none}blockquote[data-v-57adc964]:after,blockquote[data-v-57adc964]:before,q[data-v-57adc964]:after,q[data-v-57adc964]:before{content:"";content:none}a img[data-v-57adc964]{border:none}article[data-v-57adc964],aside[data-v-57adc964],details[data-v-57adc964],figcaption[data-v-57adc964],figure[data-v-57adc964],footer[data-v-57adc964],header[data-v-57adc964],hgroup[data-v-57adc964],main[data-v-57adc964],menu[data-v-57adc964],nav[data-v-57adc964],section[data-v-57adc964],summary[data-v-57adc964]{display:block}input[data-v-57adc964]::-webkit-inner-spin-button,input[data-v-57adc964]::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0}input[type=number][data-v-57adc964]{-moz-appearance:textfield}body[data-v-57adc964]{overflow-y:scroll;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important;-moz-text-size-adjust:100%!important}#app[data-v-57adc964],.rol[data-v-57adc964]{width:100%;float:left;box-sizing:border-box}#app[data-v-57adc964]{overflow-x:hidden}@media (min-width:800px){#app[data-v-57adc964]{width:100%}}@media (max-width:799px){#app[data-v-57adc964]{width:750px}}.m-box[data-v-57adc964]{width:1100px;margin:0 auto;box-sizing:border-box}@media (min-width:800px){.m-box[data-v-57adc964]{width:1100px}}@media (max-width:799px){.m-box[data-v-57adc964]{width:700px}}.lt[data-v-57adc964]{float:left}.gt[data-v-57adc964],.lt[data-v-57adc964]{box-sizing:border-box}.gt[data-v-57adc964]{float:right}@font-face{font-family:"iconfont";src:url(//at.alicdn.com/t/font_773130_uo0ypcf2m6s.eot);src:url(//at.alicdn.com/t/font_773130_uo0ypcf2m6s.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/font_773130_uo0ypcf2m6s.woff) format("woff"),url(//at.alicdn.com/t/font_773130_uo0ypcf2m6s.ttf) format("truetype"),url(//at.alicdn.com/t/font_773130_uo0ypcf2m6s.svg#iconfont) format("svg")}.fa[data-v-57adc964]{font-family:"iconfont"!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.el-pagination.is-background .el-pager li:not(.disabled).active[data-v-57adc964]{background-color:#2d49c6!important}@media screen and (max-width:750px){body[data-v-57adc964]{overflow-x:hidden}}.about-line-space[data-v-57adc964]{line-height:1.8em}.about-paragraph-space[data-v-57adc964]{margin-top:12px}.about-paragraph-warnning-space[data-v-57adc964]{margin-top:6px;font-weight:500}@media screen and (max-width:800px){.about-line-space[data-v-57adc964]{line-height:2em}.about-paragraph-space[data-v-57adc964]{margin-top:10px}}body[data-v-57adc964],html[data-v-57adc964]{height:100%}.join-alert-box[data-v-57adc964]{width:100%;height:100%;background:rgba(0,0,0,.3);z-index:20000}.join-alert-message-box[data-v-57adc964]{box-sizing:border-box;border-radius:7px}@media (min-width:800px){.join-alert-message-box[data-v-57adc964]{width:620px}}@media (max-width:799px){.join-alert-message-box[data-v-57adc964]{width:100%}}@media (min-width:800px){.join-alert-message-box[data-v-57adc964]{height:auto}}@media (max-width:799px){.join-alert-message-box[data-v-57adc964]{height:auto}}@media (min-width:800px){.join-alert-message-box[data-v-57adc964]{padding-top:0}}@media (max-width:799px){.join-alert-message-box[data-v-57adc964]{padding-top:160px}}.join-alert-title[data-v-57adc964]{font-size:30px;color:#333;text-align:center;margin-bottom:30px;border-bottom:1px dashed #e4e4e4;height:100px;line-height:100px}@media (min-width:800px){.join-alert-title[data-v-57adc964]{font-size:30px}}@media (max-width:799px){.join-alert-title[data-v-57adc964]{font-size:42px}}@media (min-width:800px){.join-alert-title[data-v-57adc964]{font-weight:400}}@media (max-width:799px){.join-alert-title[data-v-57adc964]{font-weight:500}}.join-alert-title .gt[data-v-57adc964]{font-size:30px;cursor:pointer;color:#999}.join-alert-bt[data-v-57adc964]{font-size:18px;color:#2d49c6;margin-bottom:20px}@media (min-width:800px){.join-alert-bt[data-v-57adc964]{font-size:18px}}@media (max-width:799px){.join-alert-bt[data-v-57adc964]{font-size:32px}}@media (min-width:800px){.join-alert-bt[data-v-57adc964]{font-weight:400}}@media (max-width:799px){.join-alert-bt[data-v-57adc964]{font-weight:500}}.join-ul[data-v-57adc964]{margin-bottom:40px}@media (min-width:800px){.join-ul[data-v-57adc964]{padding-left:20px}}@media (max-width:799px){.join-ul[data-v-57adc964]{padding-left:0}}.join-ul li[data-v-57adc964]{line-height:24px;background:url('+l+") no-repeat left 24px;padding-left:15px;background-size:6px}@media (min-width:800px){.join-ul li[data-v-57adc964]{font-size:14px}}@media (max-width:799px){.join-ul li[data-v-57adc964]{font-size:28px}}@media (min-width:800px){.join-ul li[data-v-57adc964]{line-height:24px}}@media (max-width:799px){.join-ul li[data-v-57adc964]{line-height:52px}}.join-alert-email[data-v-57adc964]{color:#2d49c6;margin-bottom:30px}@media (min-width:800px){.join-alert-email[data-v-57adc964]{line-height:14px}}@media (max-width:799px){.join-alert-email[data-v-57adc964]{line-height:28px}}@media (min-width:800px){.join-alert-email[data-v-57adc964]{font-size:16px}}@media (max-width:799px){.join-alert-email[data-v-57adc964]{font-size:28px}}.join-btn[data-v-57adc964],.join-btn-rol[data-v-57adc964]{text-align:center}.join-btn[data-v-57adc964]{display:inline-block;background-image:linear-gradient(50deg,#2ea3c9,#3a33cf 31%,#320685);color:#fff;cursor:pointer}@media (min-width:800px){.join-btn[data-v-57adc964]{font-size:17px}}@media (max-width:799px){.join-btn[data-v-57adc964]{font-size:32px}}@media (min-width:800px){.join-btn[data-v-57adc964]{width:185px}}@media (max-width:799px){.join-btn[data-v-57adc964]{width:300px}}@media (min-width:800px){.join-btn[data-v-57adc964]{height:55px}}@media (max-width:799px){.join-btn[data-v-57adc964]{height:80px}}@media (min-width:800px){.join-btn[data-v-57adc964]{border-radius:55px}}@media (max-width:799px){.join-btn[data-v-57adc964]{border-radius:80px}}@media (min-width:800px){.join-btn[data-v-57adc964]{line-height:55px}}@media (max-width:799px){.join-btn[data-v-57adc964]{line-height:80px}}.message-body[data-v-57adc964]{box-shadow:0 2px 10px 0 rgba(0,0,0,.1);padding:0 30px 30px;margin-bottom:100px;box-sizing:border-box}",""]),t.exports=r},627:function(t,d,e){"use strict";e.r(d);var o=e(587).a,n=(e(606),e(2)),component=Object(n.a)(o,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",{staticClass:"rol"},[e("index-header",{attrs:{topchange:!0}}),t._v(" "),e("div",{staticClass:"rol join-alert-message-box"},[e("div",{staticClass:"m-box"},[e("div",{staticClass:"rol message-body"},[e("div",{staticClass:"rol join-alert-title"},[t._v("\n          "+t._s(t.joinJson[t.joinPlace][t.joinId].name)+"\n        ")]),t._v(" "),e("div",{staticClass:"rol join-alert-bt"},[t._v(t._s(t.join.Responsibility)+":")]),t._v(" "),e("ul",{staticClass:"rol join-ul join-ul-first"},t._l(t.joinJson[t.joinPlace][t.joinId].duty,(function(d){return e("li",{key:d.index},[t._v("\n            "+t._s(d)+"\n          ")])})),0),t._v(" "),e("div",{staticClass:"rol join-alert-bt"},[t._v(t._s(t.join.Requirements)+":")]),t._v(" "),e("ul",{staticClass:"rol join-ul"},t._l(t.joinJson[t.joinPlace][t.joinId].need,(function(d){return e("li",{key:d.index},[t._v("\n            "+t._s(d)+"\n          ")])})),0),t._v(" "),e("div",{staticClass:"rol join-alert-email"},[t._v(t._s(t.join.Send)+"：hr@bitpie.com")]),t._v(" "),e("div",{staticClass:"rol join-btn-rol"},[e("a",{staticClass:"join-btn",attrs:{href:"mailto:hr@bitpie.com"}},[t._v(t._s(t.join.joinBtn))])])])])]),t._v(" "),e("index-footer")],1)}),[],!1,null,"57adc964",null);d.default=component.exports;installComponents(component,{IndexHeader:e(5).default,IndexFooter:e(6).default})}}]);