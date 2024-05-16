import comp from "E:/myBlog/docs/.vuepress/.temp/pages/examples/getPercentageAtIndex/index.html.vue"
const data = JSON.parse("{\"path\":\"/examples/getPercentageAtIndex/\",\"title\":\"计算索引处百分比\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"计算索引处百分比\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"examples/getPercentageAtIndex/index.md\"}")
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
