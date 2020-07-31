<template>
  <Layout>
    <Types class-prefix="zzz" :value.sync="yyy" />
  </Layout>
</template>

<style scoped lang="scss">
::v-deep .zzz-item {
  background: white;
  border: 1px solid red;
  &.selected {
    background: rgb(254, 219, 63);
    &::after {
      display: none;
    }
  }
}
</style>

<script lang="ts">
import Types from "@/components/Money/Types.vue";
import Vue from "vue";
// import Component from 'vue-class-component';
import { Component } from "vue-property-decorator";
@Component({ components: { Types } })
export default class Statistics extends Vue {
  yyy = "-";
}
</script>
