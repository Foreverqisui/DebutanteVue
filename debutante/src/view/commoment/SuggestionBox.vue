<template>
  <div class="container">
    <h1 style="text-align: center">意见箱</h1>
    <div class="mContainer">
      <el-radio-group v-model="subData.userVal" style="margin-left: 10px">
        <el-radio :label="1">匿名发送</el-radio>
        <el-radio :label="2">实名发送</el-radio>
      </el-radio-group>
      <br />
      <sapn style="margin-left: 10px">评分：</sapn>
      <el-rate
        v-model="subData.rateVal"
        :texts="['垃圾', '特差', '一般', '很好', '非常好']"
        show-text
      />
      <el-input
        v-model="subData.textVal"
        :rows="20"
        type="textarea"
        placeholder="在这里写下你的意见"
      />
      <el-button
        @click="addSuggestion(uid, subData.rateVal, subData.textVal)"
        style="margin-left: 160px"
        type="info"
        >提交</el-button
      >
    </div>
  </div>
</template>

<script>
import suggestionBox from "../../api/epe/epe.js";
import { ref, reactive, computed } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { Search } from "@element-plus/icons-vue";
export default {
  setup() {
    const subData = reactive({
      textVal: "",
      userVal: 1,
      rateVal: 5,
    });
    const router = useRouter();
    let uid = router.currentRoute.value.query.uid;
    function addSuggestion(uid, rateVal, textarea) {
      //匿名用户 uid为0
      if (subData.userVal == 1) {
        uid = 0;
      }
      suggestionBox.suggestionBox(uid, rateVal, textarea).then((res) => {
        router.push("/clocked_page")
      });
    };
    return {
      Search,
      subData,
      uid,
      addSuggestion
    };
  },
};
</script>

<style>
.container {
  background-color: rgb(197, 26, 26);
  height: 900px;
}
.mContainer {
  margin-top: 20px;
  background-color: bisque;
  font-family: "YouYuan";
}
</style>