import comp from "E:/myBlog/docs/.vuepress/.temp/pages/examples/streamResp.html.vue"
const data = JSON.parse("{\"path\":\"/examples/streamResp.html\",\"title\":\"流式应答\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":false,\"title\":\"流式应答\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"examples/streamResp.md\"}")
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
