webpackJsonp([1],[,,,,,,,,,,,,,,function(t,e,n){n(62),n(63),n(61);var a=n(0)(n(18),n(79),null,null);t.exports=a.exports},,function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n(27),s=n.n(a),i=function(t,e){return s()(e).reduce(function(n,a){var s=e[a];return!0===s&&(n+=" "+t+"-"+a),"string"==typeof s&&(n+=" "+t+"-"+s),n},t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(15),s=n(14),i=n.n(s);a.a.config.productionTip=!1,new a.a({el:"#app",render:function(t){return t(i.a)}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(70),s=n.n(a),i=n(71),r=n.n(i),o=n(72),l=n.n(o),c=n(73),u=n.n(c);e.default={name:"app",components:{NToggle:s.a,MainContent:r.a,NavBar:l.a,TopNavbar:u.a},data:function(){return{cbValue:!0,toggleValue:!0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(28),s=n.n(a),i=n(16);e.default={functional:!0,props:{type:{type:String,default:"default"},size:{type:String},simple:Boolean,round:Boolean,icon:Boolean,iconMini:Boolean},render:function(t,e){var a=e.data,r=e.props,o=e.children,l="btn";return l+=" "+n.i(i.a)("btn",r),a.staticClass=a.staticClass?a.staticClass+" "+l:l,t("button",s()({},a),o)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={model:{prop:"checked",event:"change"},props:{label:String,checked:[Array,Boolean],disabled:[Boolean,String],onText:String,offText:String},computed:{model:{get:function(){return this.checked},set:function(t){this.$emit("change",t)}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(56),s=(n.n(a),n(68)),i=n.n(s),r=n(75),o=n.n(r);i.a.highlightAll(),e.default={components:{Buttons:o.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{hovering:!1,isExpanded:!1}},props:{jsfiddle:Object,default:function(){return{}}},methods:{goJsfiddle:function(){var t=this.jsfiddle,e=t.script,n=t.html,a=t.style,s=(e||"").replace(/export default/,"var Main =").trim(),i='<script src="//unpkg.com/vue/dist/vue.js"><\/script>\n<script src="//unpkg.com/element-ui@1.0/lib/index.js"><\/script>\n<div id="app">\n'+n.trim()+"\n</div>",r='@import url("//unpkg.com/element-ui@1.0/lib/theme-default/index.css")\n'+(a||"").trim()+"\n";s=s?s+"\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount('#app')":"new Vue().$mount('#app')";var o={js:s,css:r,html:i,panel_js:3,panel_css:1},l=document.getElementById("fiddle-form")||document.createElement("form");l.innerHTML="";var c=document.createElement("textarea");l.method="post",l.action="https://jsfiddle.net/api/post/library/pure/",l.target="_blank";for(var u in o)c.name=u,c.value=o[u].toString(),l.appendChild(c.cloneNode());l.setAttribute("id","fiddle-form"),l.style.display="none",document.body.appendChild(l),l.submit()}},computed:{lang:function(){return this.$route.path.split("/")[1]},blockClass:function(){return"demo-test"},iconClass:function(){return this.isExpanded?"el-icon-caret-top":"el-icon-caret-bottom"},controlText:function(){return this.isExpanded?"Hide code":"Show code"},codeArea:function(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight:function(){return this.$el.getElementsByClassName("description").length>0?Math.max(this.$el.getElementsByClassName("description")[0].clientHeight,this.$el.getElementsByClassName("highlight")[0].clientHeight):this.$el.getElementsByClassName("highlight")[0].clientHeight}},watch:{isExpanded:function(t){this.codeArea.style.height=t?this.codeAreaHeight+1+"px":"0"}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$el.getElementsByClassName("highlight")[0];0===t.$el.getElementsByClassName("description").length&&(e.style.width="100%",e.borderRight="none")})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(69),s=n.n(a),i=n(74),r=n.n(i);e.default={components:{NButton:s.a,DemoBlock:r.a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){n(66);var a=n(0)(n(19),null,null,null);t.exports=a.exports},function(t,e,n){n(58),n(59);var a=n(0)(n(20),n(77),null,null);t.exports=a.exports},function(t,e,n){n(64);var a=n(0)(n(21),n(80),null,null);t.exports=a.exports},function(t,e,n){n(65);var a=n(0)(n(22),n(81),null,null);t.exports=a.exports},function(t,e,n){n(57);var a=n(0)(n(23),n(76),null,null);t.exports=a.exports},function(t,e,n){n(60);var a=n(0)(n(24),n(78),null,null);t.exports=a.exports},function(t,e,n){n(67);var a=n(0)(n(25),n(82),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header page-header-small clear-filter",attrs:{"filter-color":"orange"}},[n("div",{staticClass:"page-header-image",staticStyle:{"background-image":"url('/static/img/header.jpg')"},attrs:{"data-parallax":"true"}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"content-center"},[n("h1",{staticClass:"title text-center"},[t._v("Components Documentation")]),t._v(" "),n("h3",{staticClass:"description text-center"},[t._v("Elements description - v1.0.0")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{staticClass:"bootstrap-switch",attrs:{type:"checkbox",name:"checkbox","data-on-label":t.onText,"data-off-label":t.offText},domProps:{checked:t.checked}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-block",class:[t.blockClass,{hover:t.hovering}],on:{mouseenter:function(e){t.hovering=!0},mouseleave:function(e){t.hovering=!1}}},[t._t("source"),t._v(" "),n("div",{staticClass:"meta"},[n("div",{staticClass:"description"},[t._t("default")],2),t._v(" "),t._t("highlight")],2),t._v(" "),n("div",{staticClass:"demo-block-control",on:{click:function(e){t.isExpanded=!t.isExpanded}}},[n("transition",{attrs:{name:"arrow-slide"}},[n("i",{class:[t.iconClass,{hovering:t.hovering}]})]),t._v(" "),n("transition",{attrs:{name:"text-slide"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.hovering,expression:"hovering"}]},[t._v(t._s(t.controlText))])])],1)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-bar"),t._v(" "),n("div",{staticClass:"wrapper"},[n("top-navbar"),t._v(" "),n("main-content")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-8 col-md-12"},[n("div",{staticClass:"tim-container"},[n("buttons")],1)])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-6"},[n("div",{staticClass:"fixed-section"},[n("ul",[n("li",[n("a",{attrs:{href:"#buttons-row"}},[t._v("Buttons")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-toggleable-md fixed-top bg-primary navbar-transparent",attrs:{"color-on-scroll":"500"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-translate"},[n("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navigation","aria-controls":"navigation-index","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-bar bar1"}),t._v(" "),n("span",{staticClass:"navbar-toggler-bar bar2"}),t._v(" "),n("span",{staticClass:"navbar-toggler-bar bar3"})])]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navigation","data-nav-image":"static/img/blurred-image-1.jpg"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://github.com/cristijora/vue-now-ui"}},[t._v("Back to Kit")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://github.com/cristijora/vue-now-ui/issues"}},[t._v("Have an issue?")])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tim-row",attrs:{id:"buttons-row"}},[n("h2",[t._v("Buttons")]),t._v(" "),n("legend"),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("h4",[t._v("Colors")]),t._v(" "),n("p",[t._v("We worked over the original Bootstrap classes, choosing a different, slightly intenser color pallete:")]),t._v(" "),n("p",[n("n-button",[t._v("Default")]),t._v(" "),n("n-button",{attrs:{type:"primary"}},[t._v("Primary")]),t._v(" "),n("n-button",{attrs:{type:"info"}},[t._v("Info")]),t._v(" "),n("n-button",{attrs:{type:"success"}},[t._v("Success")]),t._v(" "),n("br"),t._v(" "),n("n-button",{attrs:{type:"warning"}},[t._v("Warning")]),t._v(" "),n("n-button",{attrs:{type:"danger"}},[t._v("Danger")]),t._v(" "),n("n-button",{attrs:{type:"neutral"}},[t._v("Neutral")])],1)]),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",{staticClass:"line-numbers"},[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-button>Default</n-button>\n<n-button type="primary">Primary</n-button>\n<n-button type="info">Info</n-button>\n<n-button type="success">Success</n-button>\n\n<n-button type="warning">Warning</n-button>\n<n-button type="danger">Danger</n-button>\n<n-button type="neutral">Neutral</n-button>\n            ')]),t._v("\n\n          ")]),t._v("\n        ")])])]),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("h4",[t._v("Sizes")]),t._v(" "),n("p",[t._v("Buttons come in all needed sizes:")]),t._v(" "),n("p",[n("n-button",{attrs:{type:"primary",size:"lg"}},[t._v("Large")]),t._v(" "),n("n-button",{attrs:{type:"primary"}},[t._v("Normal")]),t._v(" "),n("n-button",{attrs:{type:"primary",size:"sm"}},[t._v("Small")])],1)]),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",{staticClass:"line-numbers"},[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-button type="primary" size="lg">Large</n-button>\n<n-button type="primary">Normal</n-button>\n<n-button type="primary" size="sm">Small</n-button>\n            ')]),t._v("\n\n          ")]),t._v("\n        ")])])]),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("h4",[t._v("Styles")]),t._v(" "),n("p",[t._v("\n          We added extra classes that can help you better customise the look. You can use regular buttons, rounded corners buttons or plain simple buttons. Let's see some examples:")]),t._v(" "),n("p",[n("n-button",{attrs:{type:"primary"}},[t._v("Default")]),t._v(" "),n("n-button",{attrs:{type:"primary",round:""}},[t._v("Round")]),t._v(" "),n("n-button",{attrs:{type:"primary",round:""}},[n("i",{staticClass:"now-ui-icons ui-2_favourite-28"}),t._v(" With Icon")]),t._v(" "),n("n-button",{attrs:{type:"primary",round:"",icon:"","icon-mini":""}},[n("i",{staticClass:"now-ui-icons ui-2_favourite-28"})]),t._v(" "),n("n-button",{attrs:{type:"primary",simple:""}},[t._v("Simple")])],1),t._v(" "),n("p",[t._v("\n          Button groups and disabled state all work like they are supposed to. We used the Nucleo icons that can be found "),n("a",{attrs:{href:"https://nucleoapp.com/?ref=creativetim",target:"_blank"}},[t._v("here")]),t._v(".")])]),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",{staticClass:"line-numbers"},[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-button type="primary">Default</n-button>\n<n-button type="primary" round>Round</n-button>\n<n-button type="primary" round><i class="now-ui-icons ui-2_favourite-28"></i> With Icon</n-button>\n<n-button type="primary" round icon icon-mini><i class="now-ui-icons ui-2_favourite-28"></i></n-button>\n<n-button type="primary" simple>Simple</n-button>\n            ')]),t._v("\n\n          ")]),t._v("\n        ")])])])],1)},staticRenderFns:[]}}],[17]);
//# sourceMappingURL=app.5eaff894691045a30aad.js.map