import comp from "E:/myBlog/docs/.vuepress/.temp/pages/examples/time/index.html.vue"
const data = JSON.parse("{\"path\":\"/examples/time/\",\"title\":\"时间转换\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"时间转换\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"examples/time/index.md\"}")
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
