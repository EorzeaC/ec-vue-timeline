<template>
  <li class="timeline-item">
    <div
      :class="{ 'timeline-item-label': label }"
      class="timeline-left"
      v-if="label"
    >
      {{ label }}
    </div>
    <div
      class="timeline-box"
      :style="[
        { '--size': size === 'large' ? '16px' : '10px' },
        { '--top': size === 'large' ? '1px' : '4px' },
      ]"
    >
      <div
        class="out-circle"
        :style="[
          { '--color': color },
          { '--background': solidCircle ? color : '#fff' },
        ]"
      ></div>
      <div class="long-line"></div>
    </div>
    <div class="timeline-content">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: "EcTimelineItem",
  props: {
    label: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#1890ff",
    },
    solidCircle: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "normal",
    },
  },
};
</script>
<style lang="scss">
.timeline-wrapper .timeline-item:last-child .timeline-box {
  .long-line {
    // display: none;
    opacity: 0;
  }
}
.timeline-wrapper.timeline-label {
  .timeline-item-label {
    position: relative;
  }
}
.timeline-item {
  position: relative;
  display: flex;
  font-size: 14px;
  padding-bottom: 20px;
  .timeline-left {
    position: absolute;
    top: 0px;
    width: calc(50% - 16px);
    height: 100%;
    text-align: right;
    line-height: 1.3;
  }

  .timeline-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: calc(var(--left) - 8px);
    top: var(--top);
    width: 16px;
    height: 100%;
    .out-circle {
      box-sizing: border-box;
      width: var(--size);
      height: var(--size);
      border: 2px solid var(--color);
      background: var(--background);
      border-radius: 50%;
    }

    .long-line {
      width: 2px;
      height: calc(100% - var(--size));
      background: rgb(224, 224, 224);
    }
  }

  .timeline-content {
    position: relative;
    top: 0px;
    left: calc(var(--left) - 8px);
    margin: 0 0 0 26px;
    width: calc(50% - 14px);
    text-align: left;
    word-break: break-word;
  }
}
</style>
