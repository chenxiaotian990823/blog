---
title: 组合函数
sidebarDepth: 0
date: 2024-05-20
---

# 组合函数

[[toc]]

## 例子

```js
import { ref, onMounted, onUnmounted } from "vue"

function useMouse() {
  const x = ref(0)
  const y = ref(0)

  const update = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener("mousemove", update)
  })

  onUnmounted(() => {
    window.removeEventListener("mousemove", update)
  })

  return { x, y }
}

export default useMouse
```

### 解释

1.导入部分:

- ref 用于定义响应式的数据。
- onMounted 和 onUnmounted 用于在组件挂载和卸载时执行相应的逻辑。

  2.响应式数据:

- 使用 ref 定义了两个响应式变量 x 和 y，分别用来存储鼠标的横坐标和纵坐标。

  3.事件处理函数:

- update 函数会在 mousemove 事件触发时更新 x 和 y 的值。

  4.生命周期钩子:

- 在 onMounted 钩子中，添加了 mousemove 事件监听器。
- 在 onUnmounted 钩子中，移除了 mousemove 事件监听器。

### onMounted 和 onUnmounted 不是 vue 的生命周期吗？为嘛可以用到这里

在 Vue 3 中，onMounted 和 onUnmounted 是组合式 API 的生命周期钩子函数，可以在任何组合函数（如你的 useMouse 函数）中使用，而不仅仅是组件中。这是因为组合式 API 允许你将与组件生命周期相关的逻辑封装到可复用的函数中。

在组合式 API 中使用生命周期钩子的方式如下：

```js
import { ref, onMounted, onUnmounted } from "vue"

function useMouse() {
  const x = ref(0)
  const y = ref(0)

  const update = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  // 当组件挂载时，添加鼠标移动事件监听器
  onMounted(() => {
    window.addEventListener("mousemove", update)
  })

  // 当组件卸载时，移除鼠标移动事件监听器
  onUnmounted(() => {
    window.removeEventListener("mousemove", update)
  })

  // 返回响应式数据
  return { x, y }
}

export default useMouse
```

为什么可以在组合函数中使用生命周期钩子？

在 Vue 3 中，组合函数（或称作组合式 API 函数）可以封装与生命周期相关的逻辑，这是其强大之处之一。组合函数不直接依赖组件上下文，而是依赖 Vue 的响应式系统和生命周期管理。

使用组合函数的好处:

1.代码复用：可以将相同的逻辑抽象成函数，在多个组件中复用。

2.逻辑组织：将组件逻辑按功能模块化，增强代码的可读性和维护性。

3.灵活性：可以在任何需要的地方使用这些函数，而不仅限于组件内部。

所以，在你的 useMouse 函数中使用 onMounted 和 onUnmounted 是完全正确的做法。这使得你的鼠标跟踪逻辑能够被多个组件复用，并且能够正确处理组件的生命周期事件。

## 其他例子

1. 使用窗口大小的组合函数

这是一个跟踪窗口大小变化的例子：

```js
import { ref, onMounted, onUnmounted } from "vue"

function useWindowSize() {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  const updateSize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener("resize", updateSize)
  })

  onUnmounted(() => {
    window.removeEventListener("resize", updateSize)
  })

  return { width, height }
}

export default useWindowSize
```

2. 使用键盘按键的组合函数

这是一个跟踪键盘按键的例子：

```js
import { ref, onMounted, onUnmounted } from "vue"

function useKeyPress() {
  const keyPressed = ref(null)

  const updateKey = (e) => {
    keyPressed.value = e.key
  }

  onMounted(() => {
    window.addEventListener("keydown", updateKey)
  })

  onUnmounted(() => {
    window.removeEventListener("keydown", updateKey)
  })

  return { keyPressed }
}

export default useKeyPress
```

3. 使用网络状态的组合函数

这是一个跟踪网络连接状态的例子：

```js
import { ref, onMounted, onUnmounted } from "vue"

function useOnlineStatus() {
  const online = ref(navigator.onLine)

  const updateStatus = () => {
    online.value = navigator.onLine
  }

  onMounted(() => {
    window.addEventListener("online", updateStatus)
    window.addEventListener("offline", updateStatus)
  })

  onUnmounted(() => {
    window.removeEventListener("online", updateStatus)
    window.removeEventListener("offline", updateStatus)
  })

  return { online }
}

export default useOnlineStatus
```

实际使用

以上这些组合函数可以在任何组件中使用。例如：

```js
<template>
  <div>
    <p>Mouse position: {{ x }}, {{ y }}</p>
    <p>Window size: {{ width }} x {{ height }}</p>
    <p>Key pressed: {{ keyPressed }}</p>
    <p>Online status: {{ online ? 'Online' : 'Offline' }}</p>
  </div>
</template>

<script>
import useMouse from './useMouse';
import useWindowSize from './useWindowSize';
import useKeyPress from './useKeyPress';
import useOnlineStatus from './useOnlineStatus';

export default {
  setup() {
    const { x, y } = useMouse();
    const { width, height } = useWindowSize();
    const { keyPressed } = useKeyPress();
    const { online } = useOnlineStatus();

    return { x, y, width, height, keyPressed, online };
  }
};
</script>
```

## 我如果要做一个图片懒加载，需要怎么做

图片懒加载是一种延迟加载图片的技术，仅在图片进入视口（用户可见区域）时才加载图片，以提高页面性能和用户体验。你可以使用 Vue 3 的组合式 API 和 Intersection Observer API 来实现图片懒加载功能。以下是一个完整的实现示例。

1. 创建懒加载组合函数

首先，创建一个组合函数来封装懒加载的逻辑：

```js
import { ref, onMounted, onUnmounted } from "vue"

function useLazyLoad(imageRef) {
  const isIntersecting = ref(false)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isIntersecting.value = true
        observer.unobserve(entry.target)
      }
    })
  })

  onMounted(() => {
    if (imageRef.value) {
      observer.observe(imageRef.value)
    }
  })

  onUnmounted(() => {
    if (imageRef.value) {
      observer.unobserve(imageRef.value)
    }
  })

  return { isIntersecting }
}

export default useLazyLoad
```

2. 在组件中使用懒加载组合函数

创建一个组件来使用 useLazyLoad 组合函数，实现图片的懒加载：

```js
<template>
  <div>
    <img
      v-if="isIntersecting"
      :src="src"
      alt="Lazy Loaded Image"
      ref="imageRef"
    />
    <div v-else ref="imageRef" style="height: 200px; width: 200px; background: #f0f0f0;"></div>
  </div>
</template>

<script>
import { ref } from 'vue';
import useLazyLoad from './useLazyLoad';

export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const imageRef = ref(null);
    const { isIntersecting } = useLazyLoad(imageRef);

    return { imageRef, isIntersecting };
  }
};
</script>

<style>
/* 添加一些样式来模拟加载中的占位 */
</style>
```

3. 使用组件

将懒加载组件在你的应用中使用：

```js
<template>
  <div>
    <LazyImage src="https://example.com/image1.jpg" />
    <LazyImage src="https://example.com/image2.jpg" />
    <LazyImage src="https://example.com/image3.jpg" />
  </div>
</template>

<script>
import LazyImage from './LazyImage.vue';

export default {
  components: {
    LazyImage
  }
};
</script>
```

4. 解释

- useLazyLoad 组合函数：

imageRef 是一个 ref，指向要懒加载的图片元素。
isIntersecting 是一个响应式状态，用于指示图片是否进入视口。
使用 IntersectionObserver 观察图片元素是否进入视口。如果进入视口，则设置 isIntersecting 为 true 并停止观察该元素。

- 组件 LazyImage：

imageRef 绑定到图片或占位符 div 上。
当 isIntersecting 为 true 时，渲染图片；否则渲染占位符 div。

- 使用组件：

在主应用中使用 LazyImage 组件，并传递图片的 src 属性。

### 题外话，可以用自定义指令实现懒加载吗？

Vue 3 中，你可以使用自定义指令来实现图片懒加载。自定义指令提供了一种直接操作 DOM 元素的方式，非常适合用于这种场景。以下是如何使用自定义指令实现图片懒加载的步骤。

1. 创建自定义指令

首先，我们创建一个自定义指令 v-lazy 来实现图片懒加载。

```js
import { ref } from "vue"

const lazyLoadDirective = {
  mounted(el, binding) {
    const imageSrc = binding.value
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.src = imageSrc
          observer.unobserve(el)
        }
      })
    })

    observer.observe(el)
  },
}

export default lazyLoadDirective
```

2. 在 Vue 应用中注册自定义指令

你可以在主应用中注册这个自定义指令：

```js
import { createApp } from "vue"
import App from "./App.vue"
import lazyLoadDirective from "./directives/lazyLoadDirective"

const app = createApp(App)

app.directive("lazy", lazyLoadDirective)

app.mount("#app")
```

3. 使用自定义指令

```js
<template>
  <div>
    <img v-lazy="'https://example.com/image1.jpg'" alt="Lazy Loaded Image" />
    <img v-lazy="'https://example.com/image2.jpg'" alt="Lazy Loaded Image" />
    <img v-lazy="'https://example.com/image3.jpg'" alt="Lazy Loaded Image" />
  </div>
</template>

<script>
export default {
  name: 'LazyLoadExample'
};
</script>

<style>
/* 样式用于在图片未加载前显示占位符 */
img {
  width: 300px;
  height: 200px;
  background: #f0f0f0;
  display: block;
}
</style>
```

4. 自定义指令解释
- 指令定义对象：
  - mounted：当绑定元素插入到 DOM 中时调用。在这里，我们使用 IntersectionObserver 来观察元素是否进入视口。
  - 绑定值：通过 binding.value 获取传递给指令的图片 URL。
  - IntersectionObserver：当图片元素进入视口时，设置图片的 src 属性，并停止观察该元素。

## 那这些组合复用函数，一般放在哪个目录下呢

在 Vue 3 项目中，组合函数（也称为 composables 或 hooks）通常放在一个专门的目录中，以便于管理和复用。以下是一些常见的目录结构建议，以及如何组织这些组合函数。

1. 建议的目录结构

通常，在 Vue 项目中，你可以创建一个 composables 或 hooks 目录来存放这些组合函数：

```css
src/
├── assets/
├── components/
├── composables/  # 或 hooks/
│   ├── useMouse.js
│   ├── useWindowSize.js
│   ├── useKeyPress.js
│   └── useLazyLoad.js
├── views/
├── App.vue
└── main.js
```

2. 放置组合函数的文件

创建一个 composables 目录，并在其中创建各个组合函数文件。例如：

useMouse.js

```js
import { ref, onMounted, onUnmounted } from "vue"

function useMouse() {
  const x = ref(0)
  const y = ref(0)

  const update = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener("mousemove", update)
  })

  onUnmounted(() => {
    window.removeEventListener("mousemove", update)
  })

  return { x, y }
}

export default useMouse
```

3. 在组件中使用组合函数

你可以在你的 Vue 组件中导入和使用这些组合函数。例如：

```js
<template>
  <div>
    <p>Mouse position: {{ x }}, {{ y }}</p>
    <p>Window size: {{ width }} x {{ height }}</p>
    <p>Key pressed: {{ keyPressed ? 'Yes' : 'No' }}</p>
    <p>Lazy loaded image:</p>
    <LazyImage src="https://example.com/image.jpg" />
  </div>
</template>

<script>
import { ref } from 'vue';
import useMouse from '@/composables/useMouse';
import useWindowSize from '@/composables/useWindowSize';
import useKeyPress from '@/composables/useKeyPress';
import LazyImage from '@/components/LazyImage.vue';

export default {
  components: {
    LazyImage
  },
  setup() {
    const { x, y } = useMouse();
    const { width, height } = useWindowSize();
    const { keyPressed } = useKeyPress('Enter');

    return { x, y, width, height, keyPressed };
  }
};
</script>
```
