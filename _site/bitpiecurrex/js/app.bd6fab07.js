(function(t){function e(e){for(var s,c,i=e[0],r=e[1],l=e[2],d=0,f=[];d<i.length;d++)c=i[d],a[c]&&f.push(a[c][0]),a[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},a={app:0},o=[];function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/bitpiecurrex/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("c21b"),a=n.n(s);a.a},"184e":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exchange-body"},[n("div",{staticClass:"btn-row"},[n("div",{staticClass:"title-btn",class:{on:0===t.titleBtn},on:{click:function(e){t.titleClick(0)}}},[t._v("买入")]),n("div",{staticClass:"title-btn",class:{on:1===t.titleBtn},on:{click:function(e){t.titleClick(1)}}},[t._v("卖出")])]),0===t.titleBtn?n("div",[n("div",{staticClass:"exchange-box"},[n("div",{staticClass:"exchange-title-row"},[n("span",{staticClass:"lt exchange-title"},[t._v("收款账户")]),n("span",{staticClass:"gt"},[t._v(t._s(t.account.name))])]),n("div",{staticClass:"exchange-title"},[t._v("兑换币种")]),n("el-select",{staticClass:"input",attrs:{placeholder:"请选择"},on:{change:t.changeToken},model:{value:t.tokenname,callback:function(e){t.tokenname=e},expression:"tokenname"}},t._l(t.tokenarr,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),2===t.addressState?n("div",{staticClass:"exchange-box"},[n("qrcode-vue",{staticClass:"qrcode",attrs:{value:t.address,size:150,level:"H"}}),n("div",{staticClass:"address-font"},[n("span",{attrs:{id:"address"}},[t._v(t._s(t.address))]),n("span",{staticClass:"copy-btn",on:{click:function(e){t.copystr(t.address)}}},[t._v("复制")])])],1):t._e(),1===t.addressState?n("div",{staticClass:"exchange-box"},[n("div",{staticClass:"address-waiting"},[t._v("请求中")])]):t._e(),0===t.addressState?n("div",{staticClass:"exchange-box",on:{click:function(e){t.getaddress()}}},[n("div",{staticClass:"address-waiting"},[t._v("获取地址")])]):t._e(),n("div",{staticClass:"exchange-box"},[n("div",{staticClass:"order-header"},[t._v("历史订单")]),n("div",{staticClass:"order-item buy"},t._l(t.coinOrder,function(e){return n("el-row",{staticClass:"order-item-rol"},[n("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.user))]),n("el-col",{staticClass:"order-status finish",attrs:{span:12}},[t._v("已完成")]),n("el-col",{staticClass:"order-price",attrs:{span:24}},[t._v("+"+t._s(e.amount))])],1)}))])]):t._e(),1===t.titleBtn?n("div",[n("div",{staticClass:"exchange-box"},[n("div",{staticClass:"exchange-title-row"},[n("span",{staticClass:"lt"},[t._v("付款账户")]),n("span",{staticClass:"gt"},[t._v(t._s(t.account.name))])]),n("div",{},[t._v("兑换币种")]),n("el-select",{staticClass:"input",attrs:{placeholder:"请选择"},on:{change:function(e){t.coinChange(t.coinname)}},model:{value:t.coinname,callback:function(e){t.coinname=e},expression:"coinname"}},t._l(t.coinarr,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),n("div",[t._v("兑换数额")]),n("el-input",{staticClass:"input",attrs:{type:"number"},model:{value:t.coinnum,callback:function(e){t.coinnum=e},expression:"coinnum"}}),n("div",[t._v("收款账户")]),n("el-input",{staticClass:"input",model:{value:t.coinaddress,callback:function(e){t.coinaddress=e},expression:"coinaddress"}}),n("div",{staticClass:"money-row"},[t._v("\n        余额："+t._s(t.currentEOS)+"\n      ")]),n("el-button",{staticClass:"ex-button",on:{click:function(e){t.doAction()}}},[t._v("提交")])],1),n("div",{staticClass:"order-box"},[n("div",{staticClass:"order-header"},[n("div",{staticClass:"order-button",class:{on:0===t.orderBtn},on:{click:function(e){t.orderClick(0)}}},[t._v("处理中")]),n("div",{staticClass:"order-button",class:{on:1===t.orderBtn},on:{click:function(e){t.orderClick(1)}}},[t._v("已完成")])]),0===t.orderBtn?n("div",{staticClass:"order-item"},t._l(t.tokenRun,function(e){return n("el-row",{staticClass:"order-item-rol"},[n("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.from_user))]),n("el-col",{staticClass:"order-status run",attrs:{span:12}},[t._v("进行中")]),n("el-col",{staticClass:"order-title",attrs:{span:12}},[t._v("兑换金额")]),n("el-col",{staticClass:"order-price",attrs:{span:12}},[t._v(t._s(e.amount))]),n("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v("转入地址:")]),n("el-col",{staticClass:"order-address",attrs:{span:24}},[t._v(t._s(e.to_address))])],1)})):t._e(),1===t.orderBtn?n("div",{staticClass:"order-item"},t._l(t.tokenFinish,function(e){return n("el-row",{staticClass:"order-item-rol"},[n("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.from_user))]),n("el-col",{staticClass:"order-status finish",attrs:{span:12}},[t._v("进行中")]),n("el-col",{staticClass:"order-title",attrs:{span:12}},[t._v("兑换金额")]),n("el-col",{staticClass:"order-price",attrs:{span:12}},[t._v(t._s(e.amount))]),n("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v("转入地址:")]),n("el-col",{staticClass:"order-address",attrs:{span:24}},[t._v(t._s(e.to_address))])],1)})):t._e()])]):t._e()])},a=[],o=(n("28a5"),n("c5f6"),n("87f3"),n("7f7f"),n("7514"),n("cadf"),n("551c"),n("097d"),n("d3b7")),c=n.n(o),i=(n("42a5"),n("c290")),r=c()({httpEndpoint:"".concat(i["a"].protocol,"://").concat(i["a"].host,":").concat(i["a"].port),chainId:i["a"].chainId}),l=(location.href.indexOf("dev"),{diceAccount:"bitpiecurrex",diceLog:""}),u=n("98e6"),d=n.n(u),f=n("d7b0"),h={mounted:function(){var t=this;r.getInfo({}).then(function(t){console.log(t)}),this.$i18n.locale=this.$lan(),this.language=this.$lan(),this.getCoinOrder(),this.$nextTick(function(){if("undefined"!==typeof scatter){if(scatter.identity){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});t.$store.commit("UPDATE_ACCOUNT",e),t.searchAddress()}t.$store.state.account&&t.$store.state.account.name||(t.login(),setTimeout(function(){t.login()},5e3))}else document.addEventListener("scatterLoaded",function(){if(scatter.identity){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});t.$store.commit("UPDATE_ACCOUNT",e),t.searchAddress()}t.$store.state.account&&t.$store.state.account.name||(t.login(),setTimeout(function(){t.login()},5e3))})})},data:function(){return{address:null,num:0,titleBtn:0,coinnum:0,orderBtn:0,addressState:0,coinaddress:null,coinname:"BTC",coinarr:[{value:"BTC",label:"BTC"}],tokenname:"EBTC",tokenarr:[{value:"EBTC",label:"EBTC"}],token:{EBTC:0,EETH:0,EUSD:0,EOS:0},currentEOS:0,coinOrder:[],tokenRun:[],tokenFinish:[]}},methods:{getClientSeed:function(){if(this.customSeed)return d()("sha1").update(this.account.name+this.customSeed).digest("hex");var t=Math.floor(Math.random()*Math.floor(Number.MAX_SAFE_INTEGER));return d()("sha1").update(this.account.name+Date.now()+t).digest("hex")},login:function(){var t=this;scatter&&scatter.getIdentity({accounts:[i["a"]]}).then(function(){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&(t.$store.commit("UPDATE_ACCOUNT",e),t.getCoinOrder(),t.getToken(),t.searchAddress(),t.$message({showClose:!0,message:t.$t("login_success"),type:"success",duration:1500}))}).catch(function(e){t.$message({showClose:!0,message:e.message,type:"warning",duration:1500})})},getaddressresult:function(){var t=this;r.getTableRows({scope:this.account.name,code:l.diceAccount,table:"accounts",json:"true"}).then(function(e){e&&e.rows[0]&&e.rows[0].address?(t.address=e.rows[0].address,t.addressState=2):setTimeout(function(){t.getaddressresult()},3e3)}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})},getaddress:function(){var t=this,e=scatter.eos(i["a"],c.a,{});this.addressState=1,e.transaction({actions:[{account:l.diceAccount,name:"newaddress",authorization:[{actor:this.account.name,permission:"active"}],data:{user:this.account.name,symbol:"EBTC"}}]}).then(function(e){console.log(e),t.addressState=1,t.getaddressresult()}).catch(function(e){t.addressState=0;var n="string"===typeof e?JSON.parse(e):e;(n.error.details[0].message="assertion failure with message: already has exchange address")&&t.getaddressresult()})},getToken:function(){var t=this;this.account.name&&r.getCurrencyBalance({json:!0,code:"bitpietokens",account:this.account.name}).then(function(e){if(console.log(e),e&&0!=e.length){for(var n=0;n<e.length;n++){var s=e[n].split(" ");"EBTC"===s[1]?t.token.EBTC=Number(s[0]).toFixed(6):"EETH"===s[1]?t.token.EETH=Number(s[0]).toFixed(4):"EUSD"===s[1]&&(t.token.EUSD=Number(s[0]).toFixed(2))}console.log(t.token),"BTC"===t.coinname?t.currentEOS=t.token.EBTC:"ETH"===t.coinname?t.currentEOS=t.token.EETH:"USD"===t.coinname&&(t.currentEOS=t.token.EUSD)}})},copystr:function(t){var e=document.createRange();e.selectNode(document.getElementById("address"));var n=window.getSelection();n.rangeCount>0&&n.removeAllRanges(),n.addRange(e),document.execCommand("copy"),this.$message({showClose:!0,message:this.$t("copy_success"),type:"success",duration:1500})},titleClick:function(t){this.getToken(),this.titleBtn=t,0===t&&this.searchAddress(),1===t&&(0===this.orderBtn?this.getTokenRun():1===this.orderBtn&&this.getTokenFinish())},changeToken:function(){this.address=null,this.addressState=1,this.searchAddress()},doAction:function(){var t=this,e=this.coinaddress,n=this.coinnum,s=this.coinname,a=WAValidator.validate(e,"bitcoin");if(!a)return this.$notify.error("btc地址不合法"),!1;if(n>this.currentEOS)this.$message({showClose:!0,message:"您的余额不足，请重置",type:"success",duration:1500});else if(0!=n)if(e){n=Number(n).toFixed(8);var o=scatter.eos(i["a"],c.a,{});o.transaction({actions:[{account:"bitpietokens",name:"transfer",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{from:this.account.name,to:l.diceAccount,quantity:n+" E"+s,memo:e}}]}).then(function(e){t.getToken(),console.log(e)}).catch(function(t){console.log(t)})}else this.$message({showClose:!0,message:"收币地址不能为空",type:"success",duration:1500});else this.$message({showClose:!0,message:"金额不能为0",type:"success",duration:1500})},coinChange:function(){this.getToken()},getCoinOrder:function(){var t=this;r.getTableRows({scope:l.diceAccount,code:l.diceAccount,table:"buyorders",lower_bound:this.account.name,json:"true"}).then(function(e){if(console.log(e),!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var n=[],s=0;s<e.rows.length;s++)n.push(e.rows[s]);t.coinOrder=n}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})},getTokenRun:function(){var t=this;r.getTableRows({scope:l.diceAccount,code:l.diceAccount,table:"sellorders",json:"true",lower_bound:this.account.name}).then(function(e){if(console.log(e),!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var n=[],s=0;s<e.rows.length;s++)n.push(e.rows[s]);t.tokenRun=n}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})},getTokenFinish:function(){var t=this;r.getTableRows({scope:l.diceAccount,code:l.diceAccount,table:"soldorders",json:"true",lower_bound:this.account.name}).then(function(e){if(console.log(e),!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var n=[],s=0;s<e.rows.length;s++)n.push(e.rows[s]);t.tokenFinish=n}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})},orderClick:function(t){this.orderBtn=t,0===t?this.getTokenRun():1===t&&this.getTokenFinish()},addressTable:function(){var t=this;r.getTableRows({scope:this.account.name,code:l.diceAccount,table:"newaddresses",json:"true"}).then(function(e){e&&e.rows[0]&&e.rows[0].address?(t.address=e.rows[0].address,t.addressState=1,t.getaddressresult()):t.addressState=0}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})},searchAddress:function(){var t=this;r.getTableRows({scope:this.account.name,code:l.diceAccount,table:"accounts",json:"true"}).then(function(e){console.log(e);var n=!0;if(e&&e.rows[0]&&e.rows[0].address)for(var s=0;s<e.rows.length;s++)e.rows[s].symbol==t.tokenname&&(t.address=e.rows[s].address,t.addressState=2,n=!1);n&&t.addressTable()}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}},watch:{account:function(){this.getCoinOrder()}},computed:{account:function(){return this.$store.state.account}},components:{QrcodeVue:f["a"]}},g=h,m=(n("9aa7"),n("2877")),v=Object(m["a"])(g,s,a,!1,null,"33ef144c",null);v.options.__file="body.vue";e["default"]=v.exports},2:function(t,e){},3:function(t,e){},"38c8":function(t,e,n){},4:function(t,e){},"42a5":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var s=n("2b0e");e["a"]=new s["default"]},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"app"}},[n("dice-header"),n("dice-body")],1)},o=[],c=(new Promise(function(t){document.addEventListener("scatterLoaded",t)}),{mounted:function(){},components:{diceHeader:n("71c2").default,diceBody:n("184e").default}}),i=c,r=(n("034f"),n("2877")),l=Object(r["a"])(i,a,o,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,d=function(t,e){t.prototype.$lan=function(){return"zh-cn"===(navigator.language||navigator.browserLanguage).toLowerCase()?"cn":"en"}},f=n("5c96"),h=n.n(f),g=(n("7f7f"),n("6b54"),n("2f62"));s["default"].use(g["a"]);var m=new g["a"].Store({state:{account:{},lang:"cn"},mutations:{UPDATE_ACCOUNT:function(t,e){t.account=e,t.account.name=e.name.toString()}}}),v=n("ecee"),p=n("c074"),b=n("7a55"),C=n("42b9"),_=n("a925"),w={login:"LOGIN",logout:"LOGOUT",login_success:"Welcome Back",copy_success:"复制成功"},k=w,y={login:" 登陆 ",logout:" 登出 ",login_success:"登入成功",copy_success:"复制成功"},S=y,T={en:k,cn:S};s["default"].use(_["a"]);var $=new _["a"]({locale:"en",fallbackLocale:"en",messages:T}),E=$,O=n("4eb5"),x=n.n(O);n("f5df"),n("450d"),n("a7cc"),n("915d"),n("0fb7"),n("46a1"),n("e05f"),n("0fae"),n("38c8");v["library"].add(p["a"],C["a"]),s["default"].use(x.a),s["default"].use(d),s["default"].use(h.a),s["default"].config.productionTip=!1,s["default"].component("font-awesome-icon",b["FontAwesomeIcon"]),new s["default"]({store:m,i18n:E,render:function(t){return t(u)}}).$mount("#app")},"71c2":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar-fixed"},[n("div",{staticClass:"bx f"},[n("h1",["cn"==t.lang?n("img",{attrs:{src:""}}):t._e(),"en"==t.lang?n("img",{staticStyle:{height:"30px"},attrs:{src:""}}):t._e()]),n("ul",{staticClass:"f nav hidden-xs-only"},[n("li",["en"==t.language?n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[n("img",{staticClass:"lan-img",attrs:{src:""}})]):n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[n("img",{staticClass:"lan-img",attrs:{src:""}})])]),n("li",[t.account.name?n("div",{staticClass:"account-cell",attrs:{href:"JavaScript:;"}},[n("span",[t._v(t._s(t.account.name))]),n("font-awesome-icon",{staticClass:"icon-logout",attrs:{icon:"sign-out-alt"},on:{click:t.logout}})],1):n("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])]),n("div",{staticClass:"mobile-nav hidden-sm-and-up"},[t.account.name?n("span",{staticClass:"login-name"},[t._v(t._s(t.account.name))]):n("span",{staticClass:"login-name",on:{click:t.login}},[t._v(t._s(t.loginLan))]),n("div",{staticClass:"three col"},[n("div",{class:t.navbar?"hamburger is-active":"hamburger",on:{click:function(e){return e.stopPropagation(),t.menuClick(e)}}},[n("span",{staticClass:"line"}),n("span",{staticClass:"line"}),n("span",{staticClass:"line"})])])])])]),n("transition",{attrs:{name:"fade"}},[t.navbar?n("div",{staticClass:"meun-mobile hidden-sm-and-up"},[n("ul",[n("li",["en"==t.language?n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[t._v("中文")]):n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[t._v("English")])]),n("li",[t.account.name?n("a",{attrs:{href:"JavaScript:;"},on:{click:t.logout}},[t._v(t._s(t.logoutLan))]):n("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])])]):t._e()])],1)},a=[],o=(n("7514"),n("cadf"),n("551c"),n("097d"),n("c290")),c=n("42a5"),i={methods:{changeLan:function(t){this.navbar=!1,this.$i18n.locale=t,this.language=t,this.$store.state.lang=t},menuClick:function(){this.navbar=!this.navbar},login:function(){var t=this;this.navbar=!1,scatter.getIdentity({accounts:[o["a"]]}).then(function(){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&t.$store.commit("UPDATE_ACCOUNT",e)}).catch(function(e){t.$message({showClose:!0,message:e.message,type:"warning",duration:1500})})},logout:function(){var t=this;this.navbar=!1,scatter.forgetIdentity().then(function(){t.$message({showClose:!0,message:t.$t("logout_success"),type:"success",duration:1500}),t.$store.commit("UPDATE_ACCOUNT",{})})},showAbout:function(){this.navbar=!1,c["a"].$emit("SHOW_ABOUT")},showSocial:function(){this.navbar=!1,c["a"].$emit("SHOW_SOCIAL")},showReferrals:function(){this.navbar=!1,c["a"].$emit("SHOW_REFERRALS")},showCustomSeed:function(){this.navbar=!1,c["a"].$emit("SHOW_CUSTOMSEED")}},data:function(){return{navbar:!1,language:"cn"}},computed:{account:function(){return this.$store.state.account},loginLan:function(){return this.$t("login")},logoutLan:function(){return this.$t("logout")},howPlay:function(){return this.$t("how_to_play")},referrals:function(){return this.$t("referrals")},fairness:function(){return this.$t("fairness")},social:function(){return this.$t("social")},lang:function(){return this.$store.state.lang}},mounted:function(){var t=this;this.$i18n.locale=this.$lan(),this.language=this.$lan(),this.$store.state.lang=this.language,c["a"].$on("HIDDEN_MENU",function(){return t.navbar=!1})}},r=i,l=(n("7af1"),n("2877")),u=Object(l["a"])(r,s,a,!1,null,"2a89caf2",null);u.options.__file="header.vue";e["default"]=u.exports},"7af1":function(t,e,n){"use strict";var s=n("e430"),a=n.n(s);a.a},"9aa7":function(t,e,n){"use strict";var s=n("e8bb"),a=n.n(s);a.a},c21b:function(t,e,n){},c290:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");e["a"]={blockchain:"eos",host:"eosx.eosinfra.io",port:"",protocol:"https",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}},e430:function(t,e,n){},e8bb:function(t,e,n){}});
//# sourceMappingURL=app.bd6fab07.js.map