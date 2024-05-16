import comp from "E:/myBlog/docs/.vuepress/.temp/pages/examples/curriedFunc/index.html.vue"
const data = JSON.parse("{\"path\":\"/examples/curriedFunc/\",\"title\":\"currying柯里化函数\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"currying柯里化函数\",\"date\":\"2021-08-30T11:24:16.000Z\",\"tags\":null},\"headers\":[],\"git\":{},\"filePathRelative\":\"examples/curriedFunc/index.md\"}")
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
