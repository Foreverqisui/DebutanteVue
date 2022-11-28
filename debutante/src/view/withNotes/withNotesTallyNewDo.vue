<template>
  <div class="container">
    <el-row justify="space-around">
      <el-col :span="24">
        <el-tabs type="border-card" class="demo-tabs">
          <el-tab-pane label="记一笔">
            <el-form :inline="true" :model="data" class="demo-form-inline">
              <el-form-item label="支出:">
                <el-input-number v-model="data.money" :min="1" :max="1000"/>
              </el-form-item>
              <el-form-item label="类别:">
                <el-select v-model="data.style" placeholder="选择消费类别">
                  <el-option label="早饭" value="早饭" />
                  <el-option label="午饭" value="午饭" />
                  <el-option label="晚饭" value="晚饭" />
                  <el-option label="奶茶" value="奶茶" />
                  <el-option label="冰淇淋" value="冰淇淋" />
                  <el-option label="矿泉水" value="矿泉水" />
                </el-select>
              </el-form-item>
              <el-form-item label="自行添加种类:">
                <el-input v-model="data.otherStyle" placeholder="其他类别" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit(data.money,data.style,data.otherStyle)">提交</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane>
            <template #label>
              <span class="custom-tabs-label">
                <el-icon><calendar /></el-icon>
                <span>概览</span>
              </span>
            </template>
            <h3 style="text-align: center">资产概览</h3>
            <el-card class="card">
              <div class="row">
                <div class="col-md-4">
                  <h3 class="txt">资产</h3>
                  <span style="color: #e66a6a; margin-left: 145px">0.00</span>
                </div>
                <div class="col-md-4">
                  <h3 class="txt">负债</h3>
                  <span style="color: #14ba89; margin-left: 145px">0.00</span>
                </div>
                <div class="col-md-4">
                  <h3 class="txt">净资产</h3>
                  <span style="color: #f78c5c; margin-left: 145px">0.00</span>
                </div>
              </div>
            </el-card>
          </el-tab-pane>

          <el-tab-pane label="余额">余额</el-tab-pane>
          <el-tab-pane label="报表">报表</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from "element-plus";
import { ref, reactive, computed } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
export default {
  setup() {
    let data = reactive({
      src: "http://qisui.top/debunate/petIcon.jpeg",
      activeIndex: "1",
      money: "12",
      style: "",
      otherStyle:""
    });
    const errorHandler = () => true;
    function onSubmit(money,style,otherStyle){
      console.log(money+":"+style+":"+otherStyle)
    }
    return {
      data,
      errorHandler,
      onSubmit
    };
  },
};
</script>

<style>
.demo-tabs {
}
.card {
  background-image: url("http://qisui.top/debunate/lolback.jpg");
  background-position: left;
}
.txt {
  font-size: 18px;
  color: #aaa;
  margin-left: 145px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>