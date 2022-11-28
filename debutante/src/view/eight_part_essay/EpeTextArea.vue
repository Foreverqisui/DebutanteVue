<template>
  <div class="container">
    <span v-html="epeData.test.replace(/\n/g, '<br>')"></span>
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
      test: "<h1>这里期待与你的相遇</h1><br><h2>我在这里等着你的意见</h2>",
    });
    const router = useRouter();
    let section = router.currentRoute.value.query.section;
    let essay = router.currentRoute.value.query.essay;
    function getTextArea(section,essay) {
      epe.getTextArea(section,essay).then((res) => {
        epeData.test = res.data.res[0].essay;
      });
    }
    getTextArea(section,essay);
    return {
      epeData,
    };
  },
};
</script>

<style>
.container {
  background-color: bisque;
  height: 300%;
  font-family: 'YouYuan'
}
</style>