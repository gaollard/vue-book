webpackJsonp([12],{"8Gl7":function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=t("Xxa5"),i=t.n(e),r=t("exGp"),n=t.n(r),c=t("P9l9"),o={name:"MovieDetail",data:function(){return{movieInfo:null}},created:function(){var a=this;return n()(i.a.mark(function s(){var t,e;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=a.$route.params.movieId,s.next=3,c.a.getMovieDetail(t);case 3:e=s.sent,a.movieInfo=e.data;case 5:case"end":return s.stop()}},s,a)}))()}},v={render:function(){var a=this,s=a.$createElement,t=a._self._c||s;return a.movieInfo?t("div",{staticClass:"wrapper"},[t("div",{staticClass:"movie-logo-wrapper"},[t("div",{staticClass:"movie-logo-cover",style:{backgroundImage:"url("+a.movieInfo.images.small+")"}}),a._v(" "),t("img",{staticClass:"movie-logo",attrs:{src:a.movieInfo.images.small,alt:""}})]),a._v(" "),t("div",{staticClass:"btm-info"},[t("div",{staticClass:"movie-name"},[a._v(a._s(a.movieInfo.title))]),a._v(" "),t("div",{staticClass:"movie-desc"},[t("span",{staticClass:"movie-year"},[a._v(a._s(a.movieInfo.year))]),a._v(" "),a._l(a.movieInfo.genres,function(s){return t("span",{key:s,staticClass:"movie-genre"},[a._v(a._s(s))])}),a._v(" "),a._l(a.movieInfo.directors,function(s){return t("span",{key:s.name,staticClass:"move-director"},[a._v(a._s(s.name))])}),a._v(" "),a._l(a.movieInfo.countries,function(s){return t("span",{key:s,staticClass:"move-country"},[a._v(a._s(s))])})],2),a._v(" "),t("div",{staticClass:"movie-average"},[a._v("豆瓣评分"+a._s(a.movieInfo.rating.average))]),a._v(" "),t("div",{staticClass:"card card-summary"},[t("div",{staticClass:"card-hd"},[a._v("剧情简介")]),a._v(" "),t("div",{staticClass:"card-bd"},[a._v(a._s(a.movieInfo.summary))])]),a._v(" "),t("div",{staticClass:"card card-directors"},[t("div",{staticClass:"card-hd"},[a._v("导演")]),a._v(" "),t("div",{staticClass:"card-bd"},[t("ul",{staticClass:"director-list clearfix"},a._l(a.movieInfo.directors,function(s){return t("li",{key:s.name,staticClass:"director-item"},[t("div",{staticClass:"director-name"},[a._v(a._s(s.name))])])}))])]),a._v(" "),t("div",{staticClass:"card card-casts"},[t("div",{staticClass:"card-hd"},[a._v("影人")]),a._v(" "),t("div",{staticClass:"card-bd"},[t("ul",{staticClass:"cast-list clearfix"},a._l(a.movieInfo.casts,function(s){return t("li",{key:s.name,staticClass:"cast-item"},[t("div",{staticClass:"cast-name"},[a._v(a._s(s.name))])])}))])])])]):a._e()},staticRenderFns:[]};var l=t("VU/8")(o,v,!1,function(a){t("e0Qo")},"data-v-9e5414b8",null);s.default=l.exports},e0Qo:function(a,s){}});
//# sourceMappingURL=12.d1255282dc8cff4d470b.js.map