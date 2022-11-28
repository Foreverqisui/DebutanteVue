<template>
  <div>
    <el-row :gutter="20" class="headPet">
      <el-col :span="8">
        <div>
          <el-avatar class="card-avator" v-bind:src="petHome.head.headIcon">
          </el-avatar>
        </div>
      </el-col>

      <el-col :span="8">
        <h3>萌宠之家</h3>
      </el-col>
      <el-col :span="8">
        <el-avatar class="card-avator" v-bind:src="petHome.head.headIconM" style="margin-left: 80px">
        </el-avatar
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
export default {
  setup() {
    let petHome = reactive({
      head: {
        headIcon:
          "http://pc5201314.oss-cn-beijing.aliyuncs.com/PetHome/petIcon.jpeg",
        headIconM:
          "http://pc5201314.oss-cn-beijing.aliyuncs.com/PetHome/petIcon2.jpeg",
      },
    });
    return {
      petHome,
    };
  },
};
</script>

<style>
.headPet {
  background-color: bisque;
}
</style>