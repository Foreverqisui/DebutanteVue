<template>
  <div>
    <el-table :data="info.tableData" style="width: 100%">
      <el-table-column prop="group" label="职务" width="150" />
      <el-table-column prop="name" label="姓名" width="150" />
      <el-table-column prop="score" label="得票数" />
    </el-table>
  </div>
</template>

<script>
import vote from "../../api/login/login";
import { ElMessage, ElMessageBox } from "element-plus";
import { ref, reactive, computed, onMounted } from "vue";

export default {
  setup() {
    let info = reactive({
      username: "",
      score: 0,
      tableData: [],
    });
    onMounted(() => {
      const groups = [
        { name: "班长" },
        { name: "团支书" },
        { name: "生活班长" },
        { name: "伙食班长" },
        { name: "学习班长" },
        { name: "体育班长" },
        { name: "文艺班长" },
      ];
      function getVote() {
          vote.getVote(groups[0].name).then((res) => {
              info.tableData[0] = {
                group: groups[0].name,
                name: res.data.res.name,
                score: res.data.res.score,
              };
          });
          vote.getVote(groups[1].name).then((res) => {
              info.tableData[1] = {
                group: groups[1].name,
                name: res.data.res.name,
                score: res.data.res.score,
              };
          });
          vote.getVote(groups[2].name).then((res) => {
              info.tableData[2] = {
                group: groups[2].name,
                name: res.data.res.name,
                score: res.data.res.score,
              };
          });
          vote.getVote(groups[3].name).then((res) => {
              info.tableData[3] = {
                group: groups[3].name,
                name: res.data.res.name,
                score: res.data.res.score,
              };
          });
          vote.getVote(groups[4].name).then((res) => {
              info.tableData[4] = {
                group: groups[4].name,
                name: res.data.res.name,
                score: res.data.res.score,
              };
          });
          vote.getVote(groups[5].name).then((res) => {
              info.tableData[5] = {
                group: groups[5].name,
                name: res.data.res.name,
                score: res.data.res.score,
              };
          });
          vote.getVote(groups[6].name).then((res) => {
              info.tableData[6] = {
                group: groups[6].name,
                name: res.data.res.name,
                score: res.data.res.score,
              };
          });
        }
      getVote();
    });

    return {
      onMounted,
      info,
    };
  },
};
</script>

<style>
</style>