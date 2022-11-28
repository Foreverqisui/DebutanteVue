<template>
  <div>
    <el-card class="container">
      <h1 style="text-align: center">发送私信</h1>
      <div>
        <label>收信人昵称</label>
        <el-input v-model="username" type="text" placeholder="请输入昵称" />
      </div>
      <div style="margin: 20px 0" />
      <el-input
        v-model="message"
        :rows="10"
        type="textarea"
        placeholder="请输入内容"
      />
      <el-button
        type="info"
        @click="sendMessage(username, userId, message)"
        style="margin-left: 120px; margin-top: 20px"
        >发送私信</el-button
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
    let username = ref("");
    let message = ref("");
    let userId = router.currentRoute.value.query.userId;
    function sendMessage(username, userId, content) {
      forum.replyMessage(username, userId, content, "").then(res=>{
        ElMessage.success("发送完成")
        router.push(`/directMessage?userId=${userId}`)
      });
    }

    return {
      username,
      userId,
      message,
      sendMessage,
    };
  },
};
</script>

<style>
</style>