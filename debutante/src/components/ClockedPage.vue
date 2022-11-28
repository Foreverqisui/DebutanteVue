<template>
  <div class="container">
    <el-result
      icon="success"
      title="已成功提交"
      sub-title="感谢您百忙中提出的意见，并且在此诚挚的邀请您一起共同维护"
    >
      <template #extra>
        <el-button type="primary" @click=" toIndex()">回到首页</el-button>
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
      router.push("/loginIndex")
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
  font-family: "STSong";
  height: 900px;
}
</style>