import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",
  port: 9999,
  lang: "zh-CN",
  title: "少凡",
  description: "少凡博客",
  head: [["link", { rel: "icon", href: "/images/logo.jpg" }]],
  theme: defaultTheme({
    logo: '/images/logo.jpg',
    navbar: [
      { text: '首页', link: '/' },
      { 
        text: "快速开始", 
        link: "/guide/", 
        children: [
          { text: '实例', link: '/examples/' },
          { text: '面试', link: '/interview/' },
        ],
      },
    ],
    sidebar: {
      '/examples/': [
        {
          text: '实例',
          collapsible: true,
          children: [
            '/examples/streamResp/index.md',
            '/examples/sinCurve/index.md',
            '/examples/curriedFunc/index.md',
            '/examples/getPercentageAtIndex/index.md',
            '/examples/timeConversion/index.md',
            '/examples/bindClass/index.md',
            '/examples/gdicons/index.md',
          ],
        },
      ],
      '/interview/': [
        {
          text: 'Vue',
          collapsible: false,
          children: [
            '/interview/vue/introduce/index.md',
            '/interview/vue/spa/index.md',
            '/interview/vue/vshowvif/index.md',
            '/interview/vue/instanceMount/index.md',
            '/interview/vue/lifeCycle/index.md',
            '/interview/vue/vifvfor/index.md',
            '/interview/vue/slowLoading/index.md',
            '/interview/vue/dataObject/index.md',
            '/interview/vue/vueset/index.md',
            '/interview/vue/compplug/index.md',
            '/interview/vue/compConmute/index.md',
            '/interview/vue/twowayBind/index.md',
            '/interview/vue/nextTick/index.md',
            '/interview/vue/mixin/index.md',
            '/interview/vue/slot/index.md',
            '/interview/vue/observable/index.md',
            '/interview/vue/vuekey/index.md',
            '/interview/vue/keepalive/index.md',
            '/interview/vue/modifiers/index.md',
            '/interview/vue/directives/index.md',
            '/interview/vue/filters/index.md',
            '/interview/vue/virtualDOM/index.md',
            '/interview/vue/diff/index.md',
            '/interview/vue/axios/index.md',
            '/interview/vue/ssr/index.md',
            '/interview/vue/dirStructure/index.md',
            '/interview/vue/permManage/index.md',
            '/interview/vue/crossDomain/index.md',
            '/interview/vue/handleFault/index.md',
            '/interview/vue/deploy404/index.md',
          ],
        },
        {
          text: 'Vue3',
          collapsible: false,
          children: [
            '/interview/vue3/introduce/index.md',
            '/interview/vue3/compFunc/index.md',
          ]
        },
        {
          text: 'uniapp',
          collapsible: false,
          children: [
            '/interview/uniapp/onLaunch/index.md',
          ]
        }
      ],
    },
    repo: 'your-github-repo-url',
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: 'Last Updated',
  }),
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  plugins: [
    searchPlugin({
      // options
    }),
  ],
});
