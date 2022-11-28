<template>
  <div class="container">
    <el-result
      icon="warning"
      title="已到最新篇章"
      sub-title="小编正努力加更中😭"
    >
      <template #extra>
        <el-button type="primary" @click="toIndex()">Back</el-button>
      </template>
    </el-result>
  </div>
</template>

<script>
import { onBeforeRouteUpdate, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function toIndex() {
      router.push("/kuajieIndex");
    }
    return {
      toIndex,
    };
  },
};
</script>

<style>
.container {
  background-color: bisque;
}
</style>