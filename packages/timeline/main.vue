<template>
  <ul
    class="timeline-wrapper"
    :class="{ 'timeline-label': !leftShow }"
    :style="{ '--left': leftShow ? '50%' : '0%' }"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "EcTimeline",
  props: {
    leftShow: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
};
</script>

<style lang="scss"></style>
