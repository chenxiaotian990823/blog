import comp from "E:/myBlog/docs/.vuepress/.temp/pages/examples/bindClass/index.html.vue"
const data = JSON.parse("{\"path\":\"/examples/bindClass/\",\"title\":\"class 的动态绑定\",\"lang\":\"zh-CN\",\"frontmatter\":{\"tltle\":\"class的动态绑定\"},\"headers\":[{\"level\":2,\"title\":\"对象方法\",\"slug\":\"对象方法\",\"link\":\"#对象方法\",\"children\":[]},{\"level\":2,\"title\":\"数组方法\",\"slug\":\"数组方法\",\"link\":\"#数组方法\",\"children\":[]},{\"level\":2,\"title\":\"数组与三元运算符结合判断选择需要的 class\",\"slug\":\"数组与三元运算符结合判断选择需要的-class\",\"link\":\"#数组与三元运算符结合判断选择需要的-class\",\"children\":[]},{\"level\":2,\"title\":\"数组对象结合动态判断\",\"slug\":\"数组对象结合动态判断\",\"link\":\"#数组对象结合动态判断\",\"children\":[]}],\"git\":{\"updatedTime\":1715850582000,\"contributors\":[{\"name\":\"chenxt\",\"email\":\"chenxt@power-www.com\",\"commits\":1}]},\"filePathRelative\":\"examples/bindClass/index.md\"}")
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
