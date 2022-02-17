<template>
  <li
    class="timeline-item"
    :style="[
      { '--size': size === 'large' || isIcon ? '16px' : '10px' },
      { '--top': size === 'large' ? '1px' : '4px' },
    ]"
  >
    <div
      :class="{ 'timeline-item-label': label }"
      class="timeline-left"
      v-if="label"
    >
      {{ label }}
    </div>
    <div
      class="out-circle"
      :class="{ 'timeline-item-icon': isIcon }"
      :style="[
        { '--color': color },
        { '--background': solidCircle ? color : '#fff' },
      ]"
    >
      <slot name="icon"></slot>
    </div>
    <div class="long-line"></div>
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
  data() {
    return {
      isIcon: false,
    };
  },
  created() {
    if (this.$slots["icon"]) {
      this.isIcon = true;
    }
  },
};
</script>
<style lang="scss">
.timeline-wrapper .timeline-item:last-child {
  .long-line {
    // display: none;
    opacity: 0;
  }
}
.timeline-wrapper {
  margin: 0;
  padding: 0;
  list-style: none;
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
  list-style: none;
  .timeline-left {
    position: absolute;
    // top: 0px;
    width: calc(50% - 16px);
    height: 100%;
    text-align: right;
    line-height: 1.3;
  }

  .out-circle {
    position: absolute;
    top: var(--top);
    box-sizing: border-box;
    left: calc(var(--left) - var(--size) / 2);
    margin-top: 0;
    width: var(--size);
    height: var(--size);
    border: 2px solid var(--color);
    background: var(--background);
    border-radius: 50%;
    color: var(--color);
  }
  .timeline-item-icon {
    position: absolute;
    box-sizing: border-box;
    top: 9.5px;
    left: calc(var(--left));
    width: auto;
    height: auto;
    margin-top: 0;
    border: 0;
    border-radius: 0;
    background: none;
    transform: translate(-50%, -50%);
  }
  .long-line {
    // width: 2px;
    // height: calc(100% - var(--size));
    // background: rgb(224, 224, 224);
    position: absolute;
    top: calc(var(--top) + var(--size));
    left: calc(var(--left) - 1px);
    height: calc(100% - var(--size));
    border-left: 2px solid #e8e8e8;
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
