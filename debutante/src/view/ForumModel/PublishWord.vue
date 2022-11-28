<template>
  <div style="margin-top: 100px">
  <sapn style="text-align: center">注：发布需要标题 作为外面展示，暂时不支持修改，保持文明发言</sapn>
    <el-card class="container">
      <h1 style="text-align: center">发布帖子</h1>
      <el-input
        v-model="title"
        type="textarea"
        :rows="4"
        placeholder="请输入标题"
      />
      <div style="margin: 20px 0" />
      <el-input
        v-model="message"
        :rows="10"
        type="textarea"
        placeholder="请输入内容"
      />
      <el-button
        type="info"
        @click="publishCommont(title, message)"
        style="margin-left: 120px; margin-top: 20px"
        >发布帖子</el-button
      >
    </el-card>
  </div>
</template>


<script>
import forum from "../../api/forumDemo/forum";
import { ref, reactive, computed } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
export default {
  setup() {
    const router = useRouter();
    let title = ref("");
    let message = ref("");

    function publishCommont(title, message) {
      forum.publishCommont(title, message).then((res) => {
        if (res.data.flag == 200) {
          ElMessage.success("发帖成功");
          setTimeout(() => {
            router.push("/to_forum").then(() => {
              window.location.reload();
            });
          }, 1000);
        } else {
          ElMessage.error("发帖失败");
          router.push("/to_forum").then(() => {
            window.location.reload();
          });
        }
      });
    }

    return {
      title,
      message,
      publishCommont,
    };
  },
};
</script>

<style>
.container {
  width: 420px;
  height: 700%;
   background-image: linear-gradient(
    to right top,
    #d16ba5,
    #251e23,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #4d5557,
    #46eefa,
    #d1fb5f
  );
  font-family: "Pacifico", cursive;
}
</style>