webpackJsonp([64],{OCUP:function(t,e,v){t.exports=v("ZaYQ")},YOR8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("section",[[v("h1",[t._v("行政区划")]),t._v(" "),t._m(0),t._v(" "),v("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),v("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),v("h2",[t._v("示例")]),t._v(" "),v("h3",[t._v("在地图中添加北京市海淀区行政区划范围")]),t._v(" "),v("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),v("h4",[t._v("预览")]),t._v(" "),v("doc-preview",[v("baidu-map",{staticClass:"map",attrs:{center:{lng:116.403765,lat:39.91485},zoom:11}},[v("bm-boundary",{attrs:{name:"北京市海淀区",strokeWeight:2,strokeColor:"blue"}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("p",[v("code",[t._v("BmBoundary")]),t._v(" 组件继承于 "),v("code",[t._v("bm-polygon")]),t._v(" 组件，视图由 "),v("code",[t._v("bm-polygon")]),t._v(" 组件进行渲染。")])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("属性名")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("name")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",[t._v("行政区划名称")])]),t._v(" "),v("tr",[v("td",[t._v("strokeColor")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",[t._v("折线颜色")])]),t._v(" "),v("tr",[v("td",[t._v("strokeWeight")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",[t._v("折线的宽度，以像素为单位")])]),t._v(" "),v("tr",[v("td",[t._v("strokeOpacity")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",[t._v("折线的透明度，取值范围0 - 1")])]),t._v(" "),v("tr",[v("td",[t._v("strokeStyle")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("'solid'")]),t._v(" "),v("td",[t._v("折线的样式，solid或dashed")])]),t._v(" "),v("tr",[v("td",[t._v("fillColor")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",[t._v("填充颜色。当参数为空时，折线覆盖物将没有填充效果")])]),t._v(" "),v("tr",[v("td",[t._v("fillOpacity")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",[t._v("填充的透明度，取值范围0 - 1")])]),t._v(" "),v("tr",[v("td",[t._v("enableMassClear")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),v("td",[t._v("是否在调用map.clearOverlays清除此覆盖物")])]),t._v(" "),v("tr",[v("td",[t._v("enableClicking")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),v("td",[t._v("是否响应点击事件")])])])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("事件名")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("click")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("点击行政区划后会触发此事件")])]),t._v(" "),v("tr",[v("td",[t._v("dblclick")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("双击行政区划后会触发此事件")])]),t._v(" "),v("tr",[v("td",[t._v("mousedown")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("鼠标在行政区划上按下触发此事件")])]),t._v(" "),v("tr",[v("td",[t._v("mouseup")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("鼠标在行政区划释放触发此事件")])]),t._v(" "),v("tr",[v("td",[t._v("mouseout")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("鼠标离开行政区划时触发此事件")])]),t._v(" "),v("tr",[v("td",[t._v("mouseover")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("当鼠标进入行政区划时会触发此事件")])]),t._v(" "),v("tr",[v("td",[t._v("remove")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("event{type, target}")]),t._v(" "),v("td",[t._v("移出行政区划时触发")])])])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("pre",[v("code",{staticClass:"language-html"},[v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.403765, lat: 39.914850}"')]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"11"')]),t._v(">")]),t._v("\n  "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("bm-boundary")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"北京市海淀区"')]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v(":strokeWeight")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"2"')]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("strokeColor")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"blue"')]),t._v(">")]),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("bm-boundary")]),t._v(">")]),t._v("\n"),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n")])])}]}},ZaYQ:function(t,e,v){var _=v("VU/8")(null,v("YOR8"),null,null);t.exports=_.exports}});