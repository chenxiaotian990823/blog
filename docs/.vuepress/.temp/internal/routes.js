export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/examples/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/index.html.js"), meta: {"title":"实例"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"少凡"} }],
  ["/interview/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/index.html.js"), meta: {"title":"面试"} }],
  ["/examples/curriedFunc/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/curriedFunc/index.html.js"), meta: {"title":"currying柯里化函数"} }],
  ["/examples/bindClass/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/bindClass/index.html.js"), meta: {"title":"class 的动态绑定"} }],
  ["/examples/gdicons/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/gdicons/index.html.js"), meta: {"title":"高德地图 js-sdk 的图标搜集"} }],
  ["/examples/sinCurve/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/sinCurve/index.html.js"), meta: {"title":"正弦曲线"} }],
  ["/examples/streamResp/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/streamResp/index.html.js"), meta: {"title":"流式应答"} }],
  ["/examples/timeConversion/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/timeConversion/index.html.js"), meta: {"title":"时间转换"} }],
  ["/examples/getPercentageAtIndex/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/getPercentageAtIndex/index.html.js"), meta: {"title":"计算索引处百分比"} }],
  ["/interview/es6/arrExtend/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/es6/arrExtend/index.html.js"), meta: {"title":"ES6中数组新增了哪些扩展？"} }],
  ["/interview/es6/funExtend/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/es6/funExtend/index.html.js"), meta: {"title":"函数新增了哪些扩展？"} }],
  ["/interview/es6/generator/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/es6/generator/index.html.js"), meta: {"title":"你是怎么理解ES6中 Generator的？使用场景？"} }],
  ["/interview/es6/module/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/es6/module/index.html.js"), meta: {"title":"你是怎么理解ES6中Module的？使用场景？"} }],
  ["/interview/es6/objExtend/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/es6/objExtend/index.html.js"), meta: {"title":"对象新增了哪些扩展？"} }],
  ["/interview/es6/proxy/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/es6/proxy/index.html.js"), meta: {"title":"你是怎么理解ES6中Proxy的？使用场景?"} }],
  ["/interview/es6/promise/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/es6/promise/index.html.js"), meta: {"title":"你是怎么理解ES6中 Promise的？使用场景？"} }],
  ["/interview/es6/setmap/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/es6/setmap/index.html.js"), meta: {"title":"你是怎么理解ES6新增Set、Map两种数据结构的？"} }],
  ["/interview/es6/varletconst/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/es6/varletconst/index.html.js"), meta: {"title":"说说var、let、const之间的区别"} }],
  ["/interview/uniapp/onLaunch/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/uniapp/onLaunch/index.html.js"), meta: {"title":"uniapp 应用启动onLaunch方法，改为同步，执行后再执行页面加载onLoad方法"} }],
  ["/interview/vue3/compFunc/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue3/compFunc/index.html.js"), meta: {"title":"组合函数"} }],
  ["/interview/vue/compConmute/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/compConmute/index.html.js"), meta: {"title":"Vue组件之间的通信方式都有哪些？"} }],
  ["/interview/vue/compplug/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/compplug/index.html.js"), meta: {"title":"Vue中组件和插件有什么区别？"} }],
  ["/interview/vue3/introduce/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue3/introduce/index.html.js"), meta: {"title":"Vue3.0的设计目标是什么？做了哪些优化"} }],
  ["/interview/vue/crossDomain/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/crossDomain/index.html.js"), meta: {"title":"Vue项目中你是如何解决跨域的呢？"} }],
  ["/interview/vue/dataObject/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/dataObject/index.html.js"), meta: {"title":"为什么data属性是一个函数而不是一个对象？"} }],
  ["/interview/vue/axios/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/axios/index.html.js"), meta: {"title":"Vue项目中有封装过axios吗？主要是封装哪方面的？"} }],
  ["/interview/vue/diff/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/diff/index.html.js"), meta: {"title":"你了解vue的diff算法吗？说说看"} }],
  ["/interview/vue/deploy404/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/deploy404/index.html.js"), meta: {"title":"vue项目本地开发完成后部署到服务器后报404是什么原因呢？"} }],
  ["/interview/vue/directives/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/directives/index.html.js"), meta: {"title":"你有写过自定义指令吗？自定义指令的应用场景有哪些？"} }],
  ["/interview/vue/dirStructure/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/dirStructure/index.html.js"), meta: {"title":"说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？"} }],
  ["/interview/vue/filters/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/filters/index.html.js"), meta: {"title":"Vue中的过滤器了解吗？过滤器的应用场景有哪些？"} }],
  ["/interview/vue/handleFault/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/handleFault/index.html.js"), meta: {"title":"你是怎么处理vue项目中的错误的？"} }],
  ["/interview/vue/instanceMount/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/instanceMount/index.html.js"), meta: {"title":"Vue实例挂载的过程"} }],
  ["/interview/vue/keepalive/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/keepalive/index.html.js"), meta: {"title":"说说你对keep-alive的理解是什么？"} }],
  ["/interview/vue/introduce/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/introduce/index.html.js"), meta: {"title":"vue介绍"} }],
  ["/interview/vue/mixin/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/mixin/index.html.js"), meta: {"title":"说说你对vue的mixin的理解，有什么应用场景？"} }],
  ["/interview/vue/lifeCycle/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/lifeCycle/index.html.js"), meta: {"title":"Vue生命周期"} }],
  ["/interview/vue/modifiers/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/modifiers/index.html.js"), meta: {"title":"Vue常用的修饰符有哪些？有什么应用场景？"} }],
  ["/interview/vue/nextTick/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/nextTick/index.html.js"), meta: {"title":"Vue中的$nextTick有什么作用？"} }],
  ["/interview/vue/observable/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/observable/index.html.js"), meta: {"title":"Vue.observable你有了解过吗？说说看"} }],
  ["/interview/vue/permManage/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/permManage/index.html.js"), meta: {"title":"vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？"} }],
  ["/interview/vue/slowLoading/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/slowLoading/index.html.js"), meta: {"title":"SPA首屏加载速度慢的怎么解决？"} }],
  ["/interview/vue/slot/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/slot/index.html.js"), meta: {"title":"说说你对slot的理解？slot使用场景有哪些？"} }],
  ["/interview/vue/spa/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/spa/index.html.js"), meta: {"title":"SPA(单页应用)的理解"} }],
  ["/interview/vue/twowayBind/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/twowayBind/index.html.js"), meta: {"title":"双向数据绑定是什么"} }],
  ["/interview/vue/ssr/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/ssr/index.html.js"), meta: {"title":"SSR解决了什么问题？有做过SSR吗？你是怎么做的？"} }],
  ["/interview/vue/vifvfor/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/vifvfor/index.html.js"), meta: {"title":"为什么Vue中的v-if和v-for不建议一起使用"} }],
  ["/interview/vue/vshowvif/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/vshowvif/index.html.js"), meta: {"title":"Vue中v-show和v-if怎么理解"} }],
  ["/interview/vue/virtualDOM/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/virtualDOM/index.html.js"), meta: {"title":"什么是虚拟DOM？如何实现一个虚拟DOM？说说你的思路"} }],
  ["/interview/vue/vuekey/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/vuekey/index.html.js"), meta: {"title":"你知道vue中key的原理吗？说说你对它的理解"} }],
  ["/interview/vue/vueset/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/vueset/index.html.js"), meta: {"title":"动态给vue的data添加一个新的属性时会发生什么？怎样解决？"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/myBlog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
