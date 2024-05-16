import comp from "E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/vueset/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/vue/vueset/\",\"title\":\"动态给vue的data添加一个新的属性时会发生什么？怎样解决？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"动态给vue的data添加一个新的属性时会发生什么？怎样解决？\",\"sidebarDepth\":0,\"date\":\"2024-05-16T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"原理分析\",\"slug\":\"原理分析\",\"link\":\"#原理分析\",\"children\":[]},{\"level\":2,\"title\":\"解决方案\",\"slug\":\"解决方案\",\"link\":\"#解决方案\",\"children\":[{\"level\":3,\"title\":\"Vue.set()\",\"slug\":\"vue-set\",\"link\":\"#vue-set\",\"children\":[]},{\"level\":3,\"title\":\"Object.assign()\",\"slug\":\"object-assign\",\"link\":\"#object-assign\",\"children\":[]},{\"level\":3,\"title\":\"$forceUpdate\",\"slug\":\"forceupdate\",\"link\":\"#forceupdate\",\"children\":[]}]},{\"level\":2,\"title\":\"小结\",\"slug\":\"小结\",\"link\":\"#小结\",\"children\":[]},{\"level\":2,\"title\":\"参考文献\",\"slug\":\"参考文献\",\"link\":\"#参考文献\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"interview/vue/vueset/index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
