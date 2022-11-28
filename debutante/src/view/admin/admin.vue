<template>
  <div>
    <el-card>
      <el-input
        v-model="adminData.params.uid"
        placeholder="请输入学号"
        id="inputText"
        class="hvr-grow"
      >
      </el-input>
      <el-input
        v-model="adminData.params.password"
        type="password"
        placeholder="请输入密码"
        show-password
        id="inputPassword"
        class="hvr-grow"
      />
      <el-button type="success" round id="btn" @click="submitForm()"
        >提交</el-button
      >
    </el-card>
  </div>
</template>

<script>
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { ref, reactive, computed } from "vue";

export default {
  setup() {
    let adminData = reactive({
      params: {
        uid: "2020025489",
        password: "123456",
      },
    });
    const router = useRouter();
    function submitForm() {
      router.push("/4f836979-82c7-4f89-8e34-551f2a0f17ad/admin/index");
    }
    return {
      adminData,
      submitForm,
    };
  },
};
</script>

<style>
</style>