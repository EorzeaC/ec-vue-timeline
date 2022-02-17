<template>
  <div id="app">
    <ec-timeline left-show>
      <ec-timeline-item
        v-for="(item, index) in timeList"
        :key="index"
        :label="item.time"
        :color="item.color"
        size="large"
        solidCircle
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
</template>

<script>
export default {
  name: "App",
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

<style lang="scss" scoped></style>
