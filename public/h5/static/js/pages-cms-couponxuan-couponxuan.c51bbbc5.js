(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cms-couponxuan-couponxuan"],{"22f2":function(t,n,i){"use strict";var e,o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"xuan"},[t._l(t.my_product,function(n,e){return i("v-uni-view",{staticClass:"product"},[i("v-uni-view",{staticClass:"pro_01"},[i("uni-icon",{attrs:{type:"checkbox-filled",size:"25",color:"#D6D6D6"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.choose(n.id)}}})],1),i("v-uni-view",{staticClass:"pro_02"},[i("img",{attrs:{src:n.imgs}})]),i("v-uni-view",{staticClass:"pro_03"},[i("v-uni-view",{staticClass:"pro_03_tit"},[t._v(t._s(n.goods_name))]),i("v-uni-view",{staticClass:"pro_03_p"},[t._v("¥ "+t._s(n.price))])],1)],1)}),i("v-uni-view",{staticClass:"foot"},[i("v-uni-view",{staticClass:"foot_l"},[i("uni-icon",{attrs:{type:"checkbox-filled",size:"25",color:"#D6D6D6"}}),i("span",[t._v("全选")])],1),i("v-uni-view",{staticClass:"foot_r",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.back.apply(void 0,arguments)}}},[t._v("确定")])],1)],2)},a=[];i.d(n,"b",function(){return o}),i.d(n,"c",function(){return a}),i.d(n,"a",function(){return e})},"5f2d":function(t,n,i){"use strict";var e=i("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("05ba")),a={data:function(){return{my_product:[],id:[]}},components:{uniIcon:o.default},onLoad:function(){this.get_all_product()},methods:{get_all_product:function(){this.my_product=this.$api.json.my_product},choose:function(t){this.id.push(t),console.log(this.id)},back:function(){uni.setStorageSync("pro_id_list",this.id),uni.navigateBack({})}}};n.default=a},"6d17":function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.xuan[data-v-ebc197ba]{background-color:#f6f6f6;min-height:100vh}.xuan .product[data-v-ebc197ba]{margin:5px 0 10px;padding:10px 0;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff}.xuan .product .pro_01[data-v-ebc197ba]{padding:0 10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.xuan .product .pro_02 img[data-v-ebc197ba]{width:30vw;height:20vw}.xuan .product .pro_03[data-v-ebc197ba]{padding-left:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.xuan .product .pro_03 .pro_03_tit[data-v-ebc197ba]{font-size:16px;height:40px;line-height:20px;overflow:hidden}.xuan .foot[data-v-ebc197ba]{background-color:#fff;position:fixed;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:10px;box-sizing:border-box;width:100%}.xuan .foot .foot_l[data-v-ebc197ba]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:27px;padding-top:8px}.xuan .foot .foot_l span[data-v-ebc197ba]{padding-left:10px}.xuan .foot .foot_r[data-v-ebc197ba]{background-color:#fa1919;color:#fff;border-radius:5px;height:40px;line-height:40px;text-align:center;width:100px}',""])},8969:function(t,n,i){"use strict";i.r(n);var e=i("5f2d"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,function(){return e[t]})}(a);n["default"]=o.a},"9d4f":function(t,n,i){var e=i("6d17");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("b4c602f8",e,!0,{sourceMap:!1,shadowMode:!1})},ab9e:function(t,n,i){"use strict";var e=i("9d4f"),o=i.n(e);o.a},f1d8:function(t,n,i){"use strict";i.r(n);var e=i("22f2"),o=i("8969");for(var a in o)"default"!==a&&function(t){i.d(n,t,function(){return o[t]})}(a);i("ab9e");var c,s=i("f0c5"),r=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"ebc197ba",null,!1,e["a"],c);n["default"]=r.exports}}]);