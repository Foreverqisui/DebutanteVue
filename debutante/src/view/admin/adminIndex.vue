<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-button @click="getSuggestions()" style="background-color: bisque"
          ><el-icon><Message /></el-icon> 意见箱</el-button
        >
        <ul>
          <li v-for="item in adminData.params.suggestionBox" v-bind:key="item">
            <sapn>用户：{{ item.uid }}</sapn
            ><br />
            <sapn>内容：{{ item.textarea }}</sapn
            ><br />
            <sapn>评分：{{ item.rateval }}</sapn
            ><br />
          </li>
        </ul>
      </el-col>
      <el-col :span="6" @click="sendSysMessage()" ><el-button round style="background-color: bisque">发布系统消息</el-button></el-col>
      <el-col :span="6" @click="toBoke()"><el-button>博客</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
import suggestionBox from "../../api/epe/epe.js";
import forum from "../../api/forumDemo/forum.js";
import { ElMessage,ElMessageBox} from "element-plus";
import { ref, reactive, computed } from "vue";
import { constant } from "lodash";
import router from "../../../../../test/MyProject/src/router";
export default {
  setup() {
    let adminData = reactive({
      params: {
        suggestionBox: [],
      },
    });
    //查询所有意见
    function getSuggestions() {
      suggestionBox.getSuggestions().then((res) => {
        adminData.params.suggestionBox = res.data.res;
        for (var i = 0; i < res.data.res.length; i++) {
          if (res.data.res[i].uid == 0) {
            adminData.params.suggestionBox[i].uid = "匿名";
          } else {
            adminData.params.suggestionBox[i].uid = res.data.res[i].uid;
          }
        }
      });
    }
     const sendSysMessage = () => {
      ElMessageBox.prompt("请输入具体内容", "回复内容", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        center: "true",
      })
        .then(({ value }) => {
          forum.sendSysMessage(value);
          ElMessage({
            type: "success",
            message: "回复完成",
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "修改取消",
          });
        });
    };
    function toBoke(){
      router.push("/bokeIndex").then(() => {
        window.location.reload();
      })
    }
    return {
      adminData,
      getSuggestions,
      sendSysMessage,
      toBoke
    };
  },
};
</script>

<style>
</style>