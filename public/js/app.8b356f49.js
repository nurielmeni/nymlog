(function(e){function n(n){for(var r,a,i=n[0],l=n[1],c=n[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(n);while(p.length)p.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],r=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(r=!1)}r&&(s.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},s=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var u=l;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"4d44":function(e,n,t){"use strict";var r=t("eb35"),o=t.n(r);o.a},5612:function(e,n,t){"use strict";var r=t("b62e"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Nav",{attrs:{name:"NYMLogger",logo:"/img/nymLogger.png"}}),t("Console")],1)},s=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",[t("div",{staticClass:"navbar-default"},[t("ul",e._l(e.navs,(function(n,r){return t("li",{key:r},[t("a",{attrs:{href:n.href}},[e._v(e._s(n.name))])])})),0),t("div",{staticClass:"brand"},[t("img",{attrs:{src:e.logo,alt:e.logoAlt}}),t("h1",[e._v(e._s(e.name))])])])])},i=[],l=(t("b0c0"),{name:"Nav",props:{name:String,logo:String},data:function(){return{logoAlt:this.name+" Logo",navs:[{href:"/",name:"Home"},{href:"/about",name:"About"}]}},methods:{}}),c=l,u=(t("5612"),t("2877")),f=Object(u["a"])(c,a,i,!1,null,"268bd61e",null),p=f.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"console"},[t("div",{attrs:{id:"actions"}},[t("filter-ms",{attrs:{name:"level"},on:{valueChanged:e.setFilterLevel}}),t("div",{staticClass:"screen-select"},[t("label",[e._v("Screen")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.screen,expression:"screen"}],attrs:{id:"screen",type:"number"},domProps:{value:e.screen},on:{change:e.changeScreen,input:function(n){n.target.composing||(e.screen=n.target.value)}}})])],1),t("ul",{attrs:{id:e.name}},e._l(e.filteredEntries,(function(e,n){return t("li",{key:n},[t("ConsoleEntry",{attrs:{screen:e.screen,timestamp:e.timestamp,logger:e.logger,level:e.level,message:e.message}})],1)})),0)])},v=[],g=(t("4de4"),t("caad"),t("d3b7"),t("2532"),t("ddb0"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"console-entry"},[t("span",{staticClass:"screen"},[e._v(e._s(e.screen))]),t("span",{staticClass:"timestamp"},[e._v(e._s(e.timestamp))]),t("span",{staticClass:"logger"},[e._v(e._s(e.logger))]),t("span",{class:e.level.toLowerCase()},[e._v("["+e._s(e.level)+"]")]),t("span",{staticClass:"message"},[e._v(e._s(e.message))])])}),m=[],h=(t("a9e3"),{props:{screen:Number,message:String,level:String,logger:String,timestamp:String},data:function(){return{expanded:!1}}}),b=h,_=(t("4d44"),Object(u["a"])(b,g,m,!1,null,"7eb80598",null)),y=_.exports,C=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:e.name}},[t("label",{staticClass:"typo__label"},[e._v("Level")]),t("multiselect",{attrs:{options:e.options,multiple:!0,placeholder:"Type to search"},on:{input:e.updateSelected},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}},[t("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v("Oops! No elements found. Consider changing the search query.")])])],1)},w=[],O=t("8e5f"),S=t.n(O),j={components:{Multiselect:S.a},props:{name:String},data:function(){return{isConnected:!1,value:[],options:["info","debug","error","warning"]}},methods:{updateSelected:function(e){this.$emit("valueChanged",e)}}},E=j,k=(t("60bc"),Object(u["a"])(E,C,w,!1,null,null,null)),x=k.exports,L={components:{ConsoleEntry:y,FilterMs:x},props:{name:String},data:function(){return{isConnected:!1,screen:null,entries:[{_id:"5e0322a4009c3a0011496f6a",timestamp:"2019-12-25T08:49:41.299Z",logger:"",level:"Debug",message:"Testing...",stacktrace:""}],filterLevel:[]}},sockets:{connect:function(){this.isConnected=!0},disconnect:function(){this.isConnected=!1},updateConsole:function(e){this.entries.unshift(e)}},methods:{setFilterLevel:function(e){this.filterLevel=e},changeScreen:function(){this.$socket.emit("screenRoom",this.screen)}},computed:{filteredEntries:function(){var e=this;return this.entries.filter((function(n){return e.filterLevel.includes(n.level)}))}}},N=L,P=(t("8a11"),Object(u["a"])(N,d,v,!1,null,"2c1fbca3",null)),A=P.exports,$={name:"app",components:{Nav:p,Console:A}},M=$,R=(t("034f"),Object(u["a"])(M,o,s,!1,null,null,null)),T=R.exports,F=t("5132"),V=t.n(F),q=t("9483");Object(q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var B=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_LOG_SERVER||"https://logs.nymedia.co.il";r["a"].config.productionTip=!1,r["a"].use(new V.a({debug:!0,connection:B})),new r["a"]({render:function(e){return e(T)}}).$mount("#app")},"85ec":function(e,n,t){},"8a11":function(e,n,t){"use strict";var r=t("c038"),o=t.n(r);o.a},b62e:function(e,n,t){},c038:function(e,n,t){},eb35:function(e,n,t){}});
//# sourceMappingURL=app.8b356f49.js.map