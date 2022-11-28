<template >
  <body class="container">
    <h1 style="text-align: center; margin-bottom: 20px">八股在路上</h1>
    <div>
      <!-- 行1 -->
      <el-row :gutter="20" class="el-1">
        <el-col :span="20"
          ><div class="grid-content ep-bg-purple" />
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.OS[0],epeData.params.OS.knowleg)">{{
            epeData.hotData.OS[0]
          }}</el-button>
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.OS[1],epeData.params.OS.knowleg)">{{
            epeData.hotData.OS[1]
          }}</el-button>
          <!-- 八股类型 -->
          <el-button
            style="margin-left: 150px; margin-right: 20px; margin-bottom: 20px"
            @click="toChapters(epeData.params.OS.knowleg)"
            >{{ epeData.params.OS.knowleg }}</el-button
          >
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.OS[2],epeData.params.OS.knowleg)">{{
            epeData.hotData.OS[2]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.OS[3],epeData.params.OS.knowleg)">{{
            epeData.hotData.OS[3]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.OS[4],epeData.params.OS.knowleg)">{{
            epeData.hotData.OS[4]
          }}</el-button>
        </el-col>
      </el-row>
      <!-- 行2 -->
      <el-row :gutter="20" class="el-2">
        <el-col :span="20"
          ><div class="grid-content ep-bg-purple" />
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.CNET[0],epeData.params.CNET.knowleg)">{{
            epeData.hotData.CNET[0]
          }}</el-button>
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.CNET[1],epeData.params.CNET.knowleg)">{{
            epeData.hotData.CNET[1]
          }}</el-button>
          <!-- 八股类型 -->
          <el-button
            style="margin-left: 150px; margin-right: 20px; margin-bottom: 20px"
            @click="toChapters(epeData.params.CNET.knowleg)"
            >{{ epeData.params.CNET.knowleg }}</el-button
          >
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.CNET[2],epeData.params.CNET.knowleg)">{{
            epeData.hotData.CNET[2]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.CNET[3],epeData.params.CNET.knowleg)">{{
            epeData.hotData.CNET[3]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.CNET[4],epeData.params.CNET.knowleg)">{{
            epeData.hotData.CNET[4]
          }}</el-button></el-col
        >
      </el-row>
      <!-- 行3 -->
      <el-row :gutter="20" class="el-3">
        <el-col :span="20"
          ><div class="grid-content ep-bg-purple" />
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.Algorithm[0],epeData.params.Algorithm.knowleg)">{{
            epeData.hotData.Algorithm[0]
          }}</el-button>
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.Algorithm[1],epeData.params.Algorithm.knowleg)">{{
            epeData.hotData.Algorithm[1]
          }}</el-button>
          <!-- 八股类型 -->
          <el-button
            style="margin-left: 150px; margin-right: 20px; margin-bottom: 20px"
            @click="toChapters(epeData.params.Algorithm.knowleg)"
            >{{ epeData.params.Algorithm.knowleg }}</el-button
          >
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.Algorithm[2],epeData.params.Algorithm.knowleg)">{{
            epeData.hotData.Algorithm[2]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.Algorithm[3],epeData.params.Algorithm.knowleg)">{{
            epeData.hotData.Algorithm[3]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.Algorithm[4],epeData.params.Algorithm.knowleg)">{{
            epeData.hotData.Algorithm[4]
          }}</el-button></el-col
        >
      </el-row>
      <!-- 行4 -->
      <el-row :gutter="20" class="el-4">
        <el-col :span="20"
          ><div class="grid-content ep-bg-purple" />
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.DS[0],epeData.params.DS.knowleg)" >{{
            epeData.hotData.DS[0]
          }}</el-button>
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.DS[1],epeData.params.DS.knowleg)">{{
            epeData.hotData.DS[1]
          }}</el-button>
          <!-- 八股类型 -->
          <el-button
            style="margin-left: 150px; margin-right: 20px; margin-bottom: 20px"
            @click="toChapters(epeData.params.DS.knowleg)"
            >{{ epeData.params.DS.knowleg }}</el-button
          >
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.DS[2],epeData.params.DS.knowleg)">{{
            epeData.hotData.DS[2]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.DS[3],epeData.params.DS.knowleg)">{{
            epeData.hotData.DS[3]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.DS[4],epeData.params.DS.knowleg)">{{
            epeData.hotData.DS[4]
          }}</el-button></el-col
        >
      </el-row>

      <!-- 行5 -->
      <el-row :gutter="20" class="el-5">
        <el-col :span="20"
          ><div class="grid-content ep-bg-purple" />
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.Redis[0],epeData.params.Redis.knowleg)">{{
            epeData.hotData.Redis[0]
          }}</el-button>
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.Redis[1],epeData.params.Redis.knowleg)">{{
            epeData.hotData.Redis[1]
          }}</el-button>
          <!-- 八股类型 -->
          <el-button
            style="margin-left: 150px; margin-right: 20px; margin-bottom: 20px"
            @click="toChapters(epeData.params.Redis.knowleg)"
            >{{ epeData.params.Redis.knowleg }}</el-button
          >
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.Redis[2],epeData.params.Redis.knowleg)">{{
            epeData.hotData.Redis[2]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.Redis[3],epeData.params.Redis.knowleg)">{{
            epeData.hotData.Redis[3]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.Redis[4],epeData.params.Redis.knowleg)">{{
            epeData.hotData.Redis[4]
          }}</el-button></el-col
        >
      </el-row>

      <!-- 行6 -->
      <el-row :gutter="20" class="el-6">
        <el-col :span="20"
          ><div class="grid-content ep-bg-purple" />
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.JCIP[0],epeData.params.JCIP.knowleg)">{{
            epeData.hotData.JCIP[0]
          }}</el-button>
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.JCIP[1],epeData.params.JCIP.knowleg)">{{
            epeData.hotData.JCIP[1]
          }}</el-button>
          <!-- 八股类型 -->
          <el-button
            style="margin-left: 150px; margin-right: 20px; margin-bottom: 20px"
            @click="toChapters(epeData.params.JCIP.knowleg)"
            >{{ epeData.params.JCIP.knowleg }}</el-button
          >
          <el-button round style="margin-bottom: 20px; margin-left: 20px" @click="getTextArea(epeData.hotData.JCIP[2],epeData.params.JCIP.knowleg)">{{
            epeData.hotData.JCIP[2]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.JCIP[3],epeData.params.JCIP.knowleg)">{{
            epeData.hotData.JCIP[3]
          }}</el-button>
          <el-button round style="margin-left: 20px" @click="getTextArea(epeData.hotData.JCIP[4],epeData.params.JCIP.knowleg)">{{
            epeData.hotData.JCIP[4]
          }}</el-button></el-col
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
        CNET: [],
        OS: [],
        Redis: [],
        JCIP: [],
        Algorithm: [],
        DS: [],
      },
      hotData: {
        CNET: [],
        OS: [],
        Redis: [],
        JCIP: [],
        Algorithm: [],
        DS: [],
      },
    });
    const router = useRouter();
    // 获取八股类型
    function getData() {
      epe.getEssay().then((res) => {
        epeData.params.OS = res.data.res.OS[0];
        epeData.params.CNET = res.data.res.CNET[0];
        epeData.params.Redis = res.data.res.Redis[0];
        epeData.params.JCIP = res.data.res.JCIP[0];
        epeData.params.Algorithm = res.data.res.Algorithm[0];
        epeData.params.DS = res.data.res.DS[0];
        getHotData(epeData.params.OS.knowleg);
        getHotData(epeData.params.CNET.knowleg);
        getHotData(epeData.params.Redis.knowleg);
        getHotData(epeData.params.JCIP.knowleg);
        getHotData(epeData.params.Algorithm.knowleg);
        getHotData(epeData.params.DS.knowleg);
      });
    }
    //从redis里获取热点数据
    function getHotData(essay) {
      epe.getHotData(essay).then((res) => {
        if (essay == "CNET") {
          for (var i = 0; i <= res.data.res.length; i++) {
            epeData.hotData.CNET[i] = res.data.res[i];
          }
        } else if (essay == "OS") {
          for (var i = 0; i <= res.data.res.length; i++) {
            epeData.hotData.OS[i] = res.data.res[i];
          }
        } else if (essay == "Redis") {
          for (var i = 0; i <= res.data.res.length; i++) {
            epeData.hotData.Redis[i] = res.data.res[i];
          }
        } else if (essay == "JCIP") {
          for (var i = 0; i <= res.data.res.length; i++) {
            epeData.hotData.JCIP[i] = res.data.res[i];
          }
        } else if (essay == "Algorithm") {
          for (var i = 0; i <= res.data.res.length; i++) {
            epeData.hotData.Algorithm[i] = res.data.res[i];
          }
        } else if (essay == "DS") {
          for (var i = 0; i <= res.data.res.length; i++) {
            epeData.hotData.DS[i] = res.data.res[i];
          }
        }
      });
    }
    //通过热点数据 跳转到具体文章
    function getTextArea(section, essay) {
      epe.getTextArea(section, essay).then((res) => {
        router.push(`/epe/chapter/section/textArea?section=${section}&essay=${essay}`).then(() => {
          window.location.reload();
        });
      });
    }
    // 根据 八股类型 跳转至 对应的 大章节
    function toChapters(essay) {
      router.push(`/epe/chapter?essay=${essay}`).then(() => {
        window.location.reload();
      });
    }
    getData();
    return {
      epeData,
      getHotData,
      getTextArea,
      toChapters,
    };
  },
};
</script>

<style>
.container {
  background-color: #99a9bf;
  width: 100%;
  height: 100%;
}
.el-1 {
  background-color: bisque;
}
.el-2 {
  background-color: rgb(220, 205, 44);
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