<template>
  <div class="layout-wrapper" :class="clssPrefix && `${Prefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}_content`">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["classPrefix"],
  name: "Layout",
});
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>
