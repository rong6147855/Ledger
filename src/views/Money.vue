<template>
  <Layout class-prefix="layout">
    <Types />
    <Tags :data-source.sync="tags" />
    <Notes />
    <NumberPad />
  </Layout>
</template>

<script>
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";

export default Vue.extend({
  name: "Money",
  components: { Tags, Notes, Types, NumberPad },
  data() {
    return {
      tags: ["衣", "食", "住", "行", "彩票"],
    };
  },
});
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>
