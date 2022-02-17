## 安装

```
$ npm install ec-vue-timeline -S
```

## 引入组件

在 `main.js` 文件中引入插件并注册

```js
import Vue from "vue";
import EcTimeline from "ec-vue-timeline";
import "ec-vue-timeline/lib/ec-vue-timeline.css";
Vue.use(EcTimeline);
```

## 开始使用

基本用法

```html
<div id="app">
  <ec-timeline>
    <ec-timeline-item v-for="(item, index) in timeList" :key="index">
      <div>{{ item.content }}</div>
      <span style="fontsize: 12px; color: #909399">{{ item.time }}</span>
    </ec-timeline-item>
  </ec-timeline>
</div>

<script>
  export default {
    data() {
      return {
        timeList: [
          {
            content: "活动按期开始",
            time: "2018-04-15",
          },
          {
            content: "通过审核",
            time: "2018-04-13",
          },
          {
            content: "创建成功",
            time: "2018-04-11",
          },
        ],
      };
    },
  };
</script>
```

左侧显示文本、自定义圆圈颜色、自定义时间轴节点图标

```html
<div id="app">
  <ec-timeline left-show>
    <ec-timeline-item
      v-for="(item, index) in timeList"
      :key="index"
      :label="item.time"
      :color="item.color"
      size="large"
    >
      <i
          v-if="item.icon"
          slot="icon"
          style="font-size: 16px"
          :class="item.icon"
        ></i>
      <div>{{ item.content }}</div>
    </ec-timeline-item>
  </ec-timeline>
</div>

<script>
  export default {
    data() {
      return {
        timeList: [
          {
            content: "活动按期开始",
            time: "2018-04-15",
            color: "red",
          },
          {
            content: "通过审核",
            time: "2018-04-13",
            icon: "el-icon-delete",
          },
          {
            content: "创建成功",
            time: "2018-04-11",
          },
        ],
      };
    },
  };
</script>
```

### Timeline Attributes

| 参数        | 说明                                   | 类型      | 可选值  | 默认值   |
|:--------- | ------------------------------------ | ------- | ---- | ----- |
| left-show | 时间轴左边是否显示文本（需要和 item 的 label 属性结合使用） | boolean | true | false |

### Timeline-item Attributes

| 参数          | 说明                 | 类型      | 可选值          | 默认值     |
|:----------- | ------------------ | ------- | ------------ | ------- |
| label       | 节点左侧文本             | string  | ——           | ——      |
| color       | 指定圆圈颜色             | string  | ——           | #0E74DA |
| solidCircle | 实心节点标识             | boolean | true         | false   |
| size        | 节点尺寸               | string  | normal/large | normal  |
| icon        | 自定义时间轴点图标（使用vue插槽） | VueNode | ——           | ——      |
