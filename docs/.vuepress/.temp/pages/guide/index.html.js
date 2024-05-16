import comp from "E:/myBlog/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"少凡\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":false,\"title\":\"少凡\",\"description\":\"少凡博客\"},\"headers\":[{\"level\":2,\"title\":\"导航\",\"slug\":\"导航\",\"link\":\"#导航\",\"children\":[]},{\"level\":2,\"title\":\"其他\",\"slug\":\"其他\",\"link\":\"#其他\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/README.md\"}")
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
