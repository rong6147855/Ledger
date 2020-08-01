<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="from-wrapper">
      <Notes :value="tag.name" @update:value="update" field-name="标签名" placeholder="请输入标签名" />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Notes from "@/components/Money/Notes.vue";
import Button from "@/components/Button.vue";
import tag from "@/components/Money/Tags.vue";

@Component({
  components: { Button, Notes },
})
export default class EditLabel extends Vue {
  get tag() {
    return this.$store.state.currentTag;
  }
  created() {
    const id = this.$route.params.id;
    console.log(id);
    this.$store.commit("fetchTags");
    this.$store.commit("setCurrentTag", id);
    if (!this.tag) {
      console.log("no tag");
      this.$router.replace("/404");
    } else {
      console.log("has tag");
    }
  }
  update(name: string) {
    if (this.tag) {
      this.$store.commit("updateTag", {
        id: this.tag.id,
        name,
      });
    }
  }

  remove() {
    if (this.tag) {
      this.$store.commit("removeTag", this.tag.id);
    }
  }
  goBack() {
    this.$router.back();
  }
}

//     this.tag = store.findTag(this.$route.params.id);
//     if (!this.tag) {
//       this.$router.replace("/404");
//     }

//   update(name: string) {
//     if (this.tag) {
//       store.updateTag(this.tag.id, name);
//     }
//   }
//   remove() {
//     if (this.tag) {
//       if (store.removeTag(this.tag.id)) {
//         this.$router.back();
//       } else {
//         window.alert("删除失败");
//       }
//     }
//   }
//   goBack() {
//     this.$router.back();
//   }
// }
</script>

<style lang="scss" scoped>
.navBar {
  background: rgb(254, 219, 63);
  text-align: center;
  font-size: 24px;
  padding: 12px 16px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {
  }
  > .leftIcon {
    width: 32px;
    height: 32px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>