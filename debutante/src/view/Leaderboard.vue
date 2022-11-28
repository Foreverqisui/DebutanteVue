<template>
  <div>
    <el-row :gutter="20">
      <el-col span="20" xs="10">
        <e-card shadow="hover" class="magrinTop">
          <el-table
            :data="query.list"
            max-height="800px"
            style="width: 100%; font-size: 20px"
            class="magrinTop"
            highlight-current-row="true"
            :header-cell-style="{ background: '#3f3a48' }"
            :row-style="{ height: 80 + 'px' }"
          >
            <el-table-column prop="uid" label="头像" width="150">
              <template #default="scope">
                <el-avatar
                  v-bind:src="scope.row.pictureoss"
                  class="card-avator"
                >
                </el-avatar>
              </template>
            </el-table-column>
            <el-table-column prop="username" label="用户名" width="140" />
            <!-- 通过状态码来判断是否可以使用 -->
            <el-table-column label="状态" width="140">
              <template #default="scope">
                <el-tag
                  style="margin-bottom: 10px; margin-left: 40px"
                  :type="
                    scope.row.status == 1
                      ? 'success'
                      : scope.row.status == 0
                      ? 'danger'
                      : ''
                  "
                >
                </el-tag>
                <el-tag
                  type="danger"
                  effect="dark"
                  round
                  v-if="scope.row.tagStatus == -1"
                >
                  最晚提交截图👹
                </el-tag>
                <el-tag
                  type="success"
                  effect="dark"
                  round
                  v-if="scope.row.tagStatus == 1"
                >
                  最早提交截图🥇
                </el-tag>
                <el-tag
                  type="waring"
                  effect="dark"
                  round
                  v-if="scope.row.tagStatus == 2"
                >
                  第二提交截图🥈
                </el-tag>
                <el-tag
                  type="waring"
                  effect="dark"
                  round
                  v-if="scope.row.tagStatus == 3"
                >
                  第三提交截图🥉
                </el-tag>
                <el-tag
                  type="info"
                  effect="dark"
                  round
                  v-if="scope.row.tagStatus == 0"
                >
                  准时提交截图🎖
                </el-tag>
              </template>
            </el-table-column>
          </el-table>
          <!-- <el-button @click="logout()">退出登录</el-button> -->
        </e-card>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";
import { Delete, Edit } from "@element-plus/icons-vue";
import ShengDanOldMan from "../components/ShengDanOldMan.vue";
import login from "../api/login/login";
import cookie from "js-cookie";

export default {
  components: {
    ShengDanOldMan,
  },
  setup() {
    const value = ref("100");
    const router = useRouter();
    const user = reactive({
      username: "Aa潘七岁",
    });
    const query = reactive({
      current: 1,
      limit: 4,
      formInfo: {},
      list: [],
      total: 10,
    });
    // 获取表格数据
    function getData(page = 1) {
      query.current = page;
      login
        .uploadForm(query.current, query.limit, query.formInfo)
        .then((res) => {
          query.list = res.data.uploadPage.records;
        });
    }
    let formLabelAlign = reactive({
      params: {
        username: "",
        logintime: "",
        status: "",
        pictureoss: "",
        uploadtime: "",
        tagStatus: "",
      },
    });
    //tag属性
    var statusTag = reactive({
      error: false,
      success: false,
    });
    //根据cookie中的信息获取用户信息
    function getUserInfoByToken() {
      let cookieInfo = cookie.get("userInfo");
      if (cookieInfo) {
        formLabelAlign.params = JSON.parse(cookieInfo);
      }
      //根据状态码返回是否提交
      if (formLabelAlign.params.status == 1) {
        status = "已提交";
      } else if (formLabelAlign.params.status == 0) {
        status = "未提交";
      }
    }
    //退出登录
    function logout() {
      cookie.set("userInfo", "", { domain: "qisui.top" });
      cookie.set("cookieName", "", { domain: "qisui.top" });
      router.push("/").then(() => {
        window.location.reload();
      });
    }
    getUserInfoByToken();
    getData();
    return {
      user,
      value,
      query,
      statusTag,

      getData,
      logout,
    };
  },
};
</script>

<style scoped>
.imgs {
  width: 100px;
  height: 100px;
}
::v-deep .el-table__body tbody tr:nth-child(odd) {
background-image: radial-gradient(circle, #c7c7c7, #b2b2b3, #9e9e9f, #8a8a8b, #777778, #686869, #59595a, #4a4b4c, #3c3d3e, #2f3030, #222323, #161717);}
::v-deep .el-table__body tbody tr:nth-child(even)  {
  background-color: #393939;
}
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.magrinTop {
  background-color: rgb(59, 58, 58);
  font-family: "Pacifico", cursive;
}
.card-avator {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  margin-top: 20px;
}
</style>