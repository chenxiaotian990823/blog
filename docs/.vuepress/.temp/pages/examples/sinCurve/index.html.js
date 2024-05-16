import comp from "E:/myBlog/docs/.vuepress/.temp/pages/examples/sinCurve/index.html.vue"
const data = JSON.parse("{\"path\":\"/examples/sinCurve/\",\"title\":\"正弦曲线\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":false,\"title\":\"正弦曲线\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"examples/sinCurve/index.md\"}")
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
