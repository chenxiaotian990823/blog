import comp from "E:/myBlog/docs/.vuepress/.temp/pages/interview/uniapp/onLaunch/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/uniapp/onLaunch/\",\"title\":\"uniapp 应用启动onLaunch方法，改为同步，执行后再执行页面加载onLoad方法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"uniapp 应用启动onLaunch方法，改为同步，执行后再执行页面加载onLoad方法\",\"sidebarDepth\":0,\"date\":\"2024-05-21T00:00:00.000Z\"},\"headers\":[{\"level\":2,\"title\":\"问题描述\",\"slug\":\"问题描述\",\"link\":\"#问题描述\",\"children\":[]},{\"level\":2,\"title\":\"方案一\",\"slug\":\"方案一\",\"link\":\"#方案一\",\"children\":[{\"level\":3,\"title\":\"main.js 添加如下代码\",\"slug\":\"main-js-添加如下代码\",\"link\":\"#main-js-添加如下代码\",\"children\":[]},{\"level\":3,\"title\":\"应用启动时，设置需要等待的逻辑\",\"slug\":\"应用启动时-设置需要等待的逻辑\",\"link\":\"#应用启动时-设置需要等待的逻辑\",\"children\":[]},{\"level\":3,\"title\":\"在页面 onLoad 中增加等待代码 await this.$onLaunched\",\"slug\":\"在页面-onload-中增加等待代码-await-this-onlaunched\",\"link\":\"#在页面-onload-中增加等待代码-await-this-onlaunched\",\"children\":[]}]},{\"level\":2,\"title\":\"方案二\",\"slug\":\"方案二\",\"link\":\"#方案二\",\"children\":[{\"level\":3,\"title\":\"main.js\",\"slug\":\"main-js\",\"link\":\"#main-js\",\"children\":[]},{\"level\":3,\"title\":\"页面\",\"slug\":\"页面\",\"link\":\"#页面\",\"children\":[]}]},{\"level\":2,\"title\":\"参考文献\",\"slug\":\"参考文献\",\"link\":\"#参考文献\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"interview/uniapp/onLaunch/index.md\"}")
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
