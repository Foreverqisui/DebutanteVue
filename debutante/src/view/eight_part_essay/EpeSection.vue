<template>
  <div class="container">
    <h1 style="text-align: center">{{ epeData.params.section[0].chapter }}</h1>
    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <div class="sectionUp">
      <el-button round style="margin-bottom: 30px; margin-left: 20px" @click="toTextArea(epeData.params.section[0].sectionOne)">{{
        epeData.params.section[0].sectionOne
      }}</el-button>
      <el-button round style="margin-bottom: 20px; margin-left: 30px" @click="toTextArea(epeData.params.section[0].sectionTwo)">{{
        epeData.params.section[0].sectionTwo
      }}</el-button>
      <el-button round style="margin-bottom: 10px; margin-left: 50px" @click="toTextArea(epeData.params.section[0].sectionThree)">{{
        epeData.params.section[0].sectionThree
      }}</el-button>
      <el-button round style="margin-left: 50px; margin-top: 20px" @click="toTextArea(epeData.params.section[0].sectionFour)">{{
        epeData.params.section[0].sectionFour
      }}</el-button>
    </div>
    <div class="section">
      <el-button round style="margin-left: 50px; margin-top: 20px" @click="toTextArea(epeData.params.section[0].sectionFive)">{{
        epeData.params.section[0].sectionFive
      }}</el-button>
      <el-button round style="margin-left: 50px; margin-top: 20px" @click="toTextArea(epeData.params.section[0].sectionSix)">{{
        epeData.params.section[0].sectionSix
      }}</el-button>
      <el-button
        round
        style="
          margin-left: 150px;
          margin-right: 20px;
          margin-bottom: 20px;
          margin-top: 20px;
        "
        @click="toTextArea(epeData.params.section[0].sectionSeven)"
        >{{ epeData.params.section[0].sectionSeven }}</el-button
      >
      <el-button
        round
        style="
          margin-left: 150px;
          margin-right: 20px;
          margin-bottom: 20px;
          margin-top: 20px;
        "
        @click="toTextArea(epeData.params.section[0].sectionEight)"
        >{{ epeData.params.section[0].sectionEight }}</el-button
      >
      <el-button
        round
        style="
          margin-left: 30px;
          margin-right: 20px;
          margin-bottom: 20px;
          margin-top: 20px;
        "
        @click="toTextArea(epeData.params.section[0].sectionNine)"
        >{{ epeData.params.section[0].sectionNine }}</el-button
      >
      <el-button
        round
        style="
          margin-left: 10px;

          margin-bottom: 20px;
          margin-top: 20px;
        "
        @click="toTextArea(epeData.params.section[0].sectionTen)"
        >{{ epeData.params.section[0].sectionTen }}</el-button
      >
    </div>
  </div>
</template>

<script>
import epe from "../../api/epe/epe.js";
import { ref, reactive, computed } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
export default {
  setup() {
    let epeData = reactive({
      params: {
        section: [],
      },
    });
    const router = useRouter();
    let chapter = router.currentRoute.value.query.chapter;
    let essay = router.currentRoute.value.query.essay;
    function getSection(chapter) {
      epe.getSection(chapter).then((res) => {
        console.log(res.data.res);
        epeData.params.section = res.data.res;
      });
    }

    function toTextArea(section) {
      router.push(`/epe/chapter/section/textArea?section=${section}&essay=${essay}`).then(() => {
        window.location.reload();
      });
    }
    getSection(chapter);
    return {
      epeData,
      toTextArea
    };
  },
};
</script>

<style>
.container {
  height: 900px;
  background-color: rgb(213, 211, 211);
  font-family: 'KaiTi_GB2312';
}
.sectionUp {
  margin-top: 50px;
  background-color: rgb(40, 141, 178);
}
.section {
  margin-top: 50px;
  background-color: bisque;
}
</style>