export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/examples/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/index.html.js"), meta: {"title":"实例"} }],
  ["/interview/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/index.html.js"), meta: {"title":"面试"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"少凡"} }],
  ["/examples/curriedFunc/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/curriedFunc/index.html.js"), meta: {"title":"currying柯里化函数"} }],
  ["/examples/bindClass/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/bindClass/index.html.js"), meta: {"title":"class 的动态绑定"} }],
  ["/examples/getPercentageAtIndex/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/getPercentageAtIndex/index.html.js"), meta: {"title":"计算索引处百分比"} }],
  ["/examples/sinCurve/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/sinCurve/index.html.js"), meta: {"title":"正弦曲线"} }],
  ["/examples/timeConversion/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/timeConversion/index.html.js"), meta: {"title":"时间转换"} }],
  ["/examples/streamResp/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/examples/streamResp/index.html.js"), meta: {"title":"流式应答"} }],
  ["/interview/vue/compplug/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/compplug/index.html.js"), meta: {"title":"Vue中组件和插件有什么区别？"} }],
  ["/interview/vue/compConmute/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/compConmute/index.html.js"), meta: {"title":"Vue组件之间的通信方式都有哪些？"} }],
  ["/interview/vue/dataObject/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/dataObject/index.html.js"), meta: {"title":"为什么data属性是一个函数而不是一个对象？"} }],
  ["/interview/vue/instanceMount/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/instanceMount/index.html.js"), meta: {"title":"Vue实例挂载的过程"} }],
  ["/interview/vue/introduce/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/introduce/index.html.js"), meta: {"title":"vue介绍"} }],
  ["/interview/vue/lifeCycle/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/lifeCycle/index.html.js"), meta: {"title":"Vue生命周期"} }],
  ["/interview/vue/slowLoading/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/slowLoading/index.html.js"), meta: {"title":"SPA首屏加载速度慢的怎么解决？"} }],
  ["/interview/vue/spa/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/spa/index.html.js"), meta: {"title":"SPA(单页应用)的理解"} }],
  ["/interview/vue/vifvfor/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/vifvfor/index.html.js"), meta: {"title":"为什么Vue中的v-if和v-for不建议一起使用"} }],
  ["/interview/vue/vueset/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/vueset/index.html.js"), meta: {"title":"动态给vue的data添加一个新的属性时会发生什么？怎样解决？"} }],
  ["/interview/vue/vshowvif/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/vshowvif/index.html.js"), meta: {"title":"Vue中v-show和v-if怎么理解"} }],
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
