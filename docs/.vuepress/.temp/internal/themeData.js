export const themeData = JSON.parse("{\"logo\":\"/images/logo.jpg\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"快速开始\",\"link\":\"/guide/\",\"children\":[{\"text\":\"实例\",\"link\":\"/examples/\"},{\"text\":\"面试\",\"link\":\"/interview/\"}]}],\"sidebar\":{\"/examples/\":[{\"text\":\"实例\",\"collapsible\":true,\"children\":[\"/examples/streamResp/index.md\",\"/examples/sinCurve/index.md\",\"/examples/curriedFunc/index.md\",\"/examples/getPercentageAtIndex/index.md\",\"/examples/timeConversion/index.md\",\"/examples/bindClass/index.md\"]}],\"/interview/\":[{\"text\":\"Vue\",\"collapsible\":false,\"children\":[\"/interview/vue/introduce/index.md\",\"/interview/vue/spa/index.md\",\"/interview/vue/vshowvif/index.md\",\"/interview/vue/instanceMount/index.md\",\"/interview/vue/lifeCycle/index.md\",\"/interview/vue/vifvfor/index.md\",\"/interview/vue/slowLoading/index.md\",\"/interview/vue/dataObject/index.md\",\"/interview/vue/vueset/index.md\",\"/interview/vue/compplug/index.md\",\"/interview/vue/compConmute/index.md\"]},{\"text\":\"面试1\",\"collapsible\":false}]},\"repo\":\"your-github-repo-url\",\"editLink\":true,\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdated\":\"Last Updated\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
