webpackJsonp([11],{"8t/u":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"lost",data:function(){return{second:3,timeId:null}},methods:{startRun:function(){var t=this;this.timeId=setInterval(function(){0===t.second?t.$router.back():t.second-=1},1e3)}},mounted:function(){this.startRun()},destroyed:function(){clearInterval(this.timeId)}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"view-404"},[e("div",{staticClass:"text-center text-wrap"},[e("p",[this._v("您可能迷路了唷")]),this._v(" "),e("p",[this._v(this._s(this.second)+"秒后自动返回")])])])},staticRenderFns:[]};var a=n("VU/8")(s,i,!1,function(t){n("PGTe")},"data-v-af44dee4",null);e.default=a.exports},PGTe:function(t,e){}});
//# sourceMappingURL=11.de89e561c5da36a0aa59.js.map