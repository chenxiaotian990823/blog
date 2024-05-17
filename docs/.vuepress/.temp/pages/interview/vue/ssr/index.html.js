import comp from "E:/myBlog/docs/.vuepress/.temp/pages/interview/vue/ssr/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/vue/ssr/\",\"title\":\"SSR解决了什么问题？有做过SSR吗？你是怎么做的？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"SSR解决了什么问题？有做过SSR吗？你是怎么做的？\",\"sidebarDepth\":0,\"date\":\"2024-05-17T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"是什么\",\"slug\":\"是什么\",\"link\":\"#是什么\",\"children\":[]},{\"level\":2,\"title\":\"解决了什么\",\"slug\":\"解决了什么\",\"link\":\"#解决了什么\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"interview/vue/ssr/index.md\"}")
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
