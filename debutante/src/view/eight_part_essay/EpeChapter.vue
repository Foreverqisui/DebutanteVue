<template>
  <body class="container">
    <h1 style="text-align: center; margin-bottom: 20px">{{ essay }}</h1>
    <div>
      <!-- 行1 -->
      <el-row :gutter="20" class="el-1">
        <el-col :span="20"
          ><div class="grid-content ep-bg-purple" />
          <el-button
            round
            style="margin-bottom: 30px; margin-left: 20px"
            @click="toChapters(epeData.params.chapterOne)"
            >{{ epeData.params.chapterOne }}</el-button
          >
          <el-button
            round
            style="margin-bottom: 30px; margin-left: 20px"
            @click="toChapters(epeData.params.chapterTwo)"
            >{{ epeData.params.chapterTwo }}</el-button
          >
          <!-- 八股类型 -->
          <el-button
            round
            style="margin-bottom: 50px; margin-left: 20px; margin-top: 20px"
            @click="toChapters(epeData.params.chapterThree)"
            >{{ epeData.params.chapterThree }}</el-button
          >
          <el-button
            round
            style="margin-left: 20px"
            @click="toChapters(epeData.params.chapterFour)"
            >{{ epeData.params.chapterFour }}</el-button
          >
          <el-button
            round
            style="margin-left: 20px"
            @click="toChapters(epeData.params.chapterFive)"
            >{{ epeData.params.chapterFive }}</el-button
          >
        </el-col>
      </el-row>
      <!-- 行2 -->
      <el-row :gutter="20" class="el-2">
        <el-col :span="20">
          <el-button
            round
            style="margin-left: 50px; margin-top: 20px"
            @click="toChapters(epeData.params.chapterSix)"
            >{{ epeData.params.chapterSix }}</el-button
          >
          <el-button
            round
            style="margin-left: 40px; margin-top: 30px"
            @click="toChapters(epeData.params.chapterSeven)"
            >{{ epeData.params.chapterSeven }}</el-button
          >
          <el-button
            round
            style="margin-left: 30px; margin-top: 40px"
            @click="toChapters(epeData.params.chapterEight)"
            >{{ epeData.params.chapterEight }}</el-button
          >
          <el-button
            round
            style="margin-left: 40px; margin-top: 20px"
            @click="toChapters(epeData.params.chapterNine)"
            >{{ epeData.params.chapterNine }}</el-button
          >
          <el-button
            round
            style="
              margin-left: 150px;
              margin-right: 20px;
              margin-bottom: 20px;
              margin-top: 20px;
            "
            @click="toChapters(epeData.params.chapterTen)"
            >{{ epeData.params.chapterTen }}</el-button
          ></el-col
        >
      </el-row>
    </div>
  </body>
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
        chapter: [],
        chapterOne: "敬请期待",
        chapterTwo: "敬请期待",
        chapterThree: "敬请期待",
        chapterFour: "敬请期待",
        chapterFive: "敬请期待",
        chapterSix: "敬请期待",
        chapterSeven: "敬请期待",
        chapterEight: "敬请期待",
        chapterNine: "敬请期待",
        chapterTen: "敬请期待",
        section: [],
      },
    });
    const router = useRouter();
    let essay = router.currentRoute.value.query.essay;
    // 根据八股类型 获取大小章节
    function getChapter() {
      epe.getChapter(essay).then((res) => {
        epeData.params.chapter = res.data.res;
        //TODO 这个地方做的不是很好 暂时只能这样处理
        epeData.params.chapterOne = epeData.params.chapter[0].chapter;
        epeData.params.chapterTwo = epeData.params.chapter[1].chapter;
        epeData.params.chapterThree = epeData.params.chapter[2].chapter;
        epeData.params.chapterFour = epeData.params.chapter[3].chapter;
        epeData.params.chapterFive = epeData.params.chapter[4].chapter;
        epeData.params.chapterSix = epeData.params.chapter[5].chapter;

        if (epeData.params.chapter.length <= 6) {
          epeData.params.chapterSeven = "敬请期待";
          epeData.params.chapterEight = "敬请期待";
          epeData.params.chapterNine = "敬请期待";
          epeData.params.chapterTen = "敬请期待";
        } else {
          epeData.params.chapterSeven = epeData.params.chapter[6].chapter;
          epeData.params.chapterEight = epeData.params.chapter[7].chapter;
          epeData.params.chapterNine = epeData.params.chapter[8].chapter;
          epeData.params.chapterTen = epeData.params.chapter[9].chapter;
        }
      });
    }

    //根据 大章节 跳转到小章节页面
    function toChapters(chapter) {
      router.push(`/epe/chapter/section?chapter=${chapter}&essay=${essay}`).then(() => {
        window.location.reload();
      });
    }
    getChapter();
    return {
      epeData,
      essay,
      toChapters,
    };
  },
};
</script>

<style>
.container {
  background-color: #99a9bf;
  width: 100%;
  height: 900px;
  font-family: 'STSong';

}
.el-1 {
  background-color: rgb(255, 140, 0);
}
.el-2 {
  background-color: rgb(255, 234, 0);
  margin-top: 50px;
}
.el-3 {
  background-color: rgb(25, 141, 191);
  margin-top: 50px;
}
.el-4 {
  background-color: rgb(174, 40, 85);
  margin-top: 50px;
}
.el-5 {
  background-color: rgb(40, 174, 71);
  margin-top: 50px;
}
.el-6 {
  background-color: rgb(40, 71, 174);
  margin-top: 50px;
}
</style>