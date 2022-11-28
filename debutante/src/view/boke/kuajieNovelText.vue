<template>
  <div class="container">
    <el-affix :offset="650" style="margin-right: 3000px">
      <el-button type="danger" @click="goBack()">停止阅读</el-button>
    </el-affix>
    <h1>{{ data.chapter }}</h1>
    <label style="margin-left: 220px">🐲作者：Aa潘七岁</label>

    <div class="text">
      <span
        v-html="
          data.text.replace(/\n/g, '<br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp')
        "
      ></span>
    </div>
    <div class="button">
      <el-button type="button" @click="preChapter()" style="margin-right: 30px"
        >上一章</el-button
      >
      <span>|</span>
      <el-rate
        v-model="data.rate"
        :texts="['垃圾', '特差', '一般', '很好', '非常好']"
        show-text
      />
      <el-backtop :right="50" :bottom="100" />
      <span>|</span>
      <el-button type="button" @click="nextChapter()" style="margin-left: 30px"
        >下一章</el-button
      >
    </div>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from "element-plus";
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import novel from "../../api/epe/epe.js";
export default {
  setup() {
    let data = reactive({
      chapter: "",
      text: "",
      rate: "1",
      count: "1",
    });
    const router = useRouter();
    const pathId = router.currentRoute.value.params.id;
    function getNovelText() {
      novel.getNovelText(pathId).then((res) => {
        data.chapter = res.data.text.chapter;
        data.text = res.data.text.textArea;
        data.count = res.data.count;
        console.log(res.data);
      });
    }
    function preChapter() {
      if (pathId <= 1) {
        ElMessage.warning("已经是第一页，不可继续向前");
        return;
      }
      let npathId = parseInt(pathId) - 1;
      router.push(`/novel/${npathId}`).then(() => {
        window.location.reload();
      });
    }
    function nextChapter() {
      let npathId = parseInt(pathId) + 1;
      if (npathId > data.count) {
        router.push("/wclocked_page");
        return;
      }
      novel
        .suggestionBox(pathId, data.rate, pathId + "章节" + "novel评分")
        .then((res) => {
          router.push(`/novel/${npathId}`).then(() => {
            window.location.reload();
          });
        });
    }
    function goBack() {
      router.push("/kuajieIndex");
    }
    getNovelText();
    return {
      data,
      preChapter,
      nextChapter,
      goBack,
    };
  },
};
</script>

<style>
.container {
  background-color: #ddcca0;
  height: 300%;
  font-size: 18px;
  text-align: center;
  font-family: "YaHei";
}
.text {
  background-color: #f5ebc9;
  margin-top: 30px;
  text-align: center;
  max-width: 100%;
}
.button {
  background-color: #f8f3e9;
}
</style>