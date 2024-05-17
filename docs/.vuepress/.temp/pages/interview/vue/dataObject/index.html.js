import comp from "E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/dataObject/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/vue/dataObject/\",\"title\":\"为什么data属性是一个函数而不是一个对象？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"为什么data属性是一个函数而不是一个对象？\",\"sidebarDepth\":0,\"date\":\"2024-05-16T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"实例和组件定义 data 的区别\",\"slug\":\"实例和组件定义-data-的区别\",\"link\":\"#实例和组件定义-data-的区别\",\"children\":[]},{\"level\":2,\"title\":\"结论\",\"slug\":\"结论\",\"link\":\"#结论\",\"children\":[]}],\"git\":{\"updatedTime\":1715850582000,\"contributors\":[{\"name\":\"chenxt\",\"email\":\"chenxt@power-www.com\",\"commits\":1}]},\"filePathRelative\":\"interview/vue/dataObject/index.md\"}")
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
