<template>
  <div
    v-loading="loading"
    element-loading-text="截图正在提交，请不要退出"
    :element-loading-svg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(122, 122, 122, 0.8)"
    style="width: 100%"
    class="box"
  >
    <el-row :gutter="20">
      <el-col :span="8" :xs="24" :sm="8" :md="7">
        <el-card shadow="hover" class="mgb20" style="height: 252px">
          <el-button
            style="
              margin-left: 300px;
              background-color: bisque;
              font-size: 12px;
            "
            @click="toSuB(formLabelAlign.params.userId)"
            ><el-icon><Message /></el-icon> 意见箱</el-button
          >
          <div style="height: 15px">
            <el-badge
              :value="formLabelAlign.directMessage.count"
              :max="99"
              class="item"
              type="warning"
            >
              <el-button @click="toMessage()">🎗私信列表</el-button>
            </el-badge>
          </div>
          <div class="user-info">
            <el-avatar
              class="card-avator"
              v-bind:src="formLabelAlign.params.pictureoss"
              @click="toAdmin()"
            >
            </el-avatar>
            <div class="user-info-cont">
              <div class="user-info-name">
                {{ formLabelAlign.params.username }}
                <el-tag
                  type="danger"
                  effect="dark"
                  round
                  @click="tagBtn()"
                  v-if="statusTag.error"
                >
                  最晚提交截图人员👹
                </el-tag>
                <el-tag
                  type="success"
                  effect="dark"
                  round
                  v-if="statusTag.success"
                >
                  最早提交截图🥇
                </el-tag>
                <el-tag type="info" effect="dark" round v-if="statusTag.second">
                  第二提交截图🥈
                </el-tag>
                <el-tag type="info" effect="dark" round v-if="statusTag.info">
                  准时提交截图🎖
                </el-tag>
              </div>
              <div>
                {{ formLabelAlign.params.uid }}
              </div>
            </div>
          </div>
          <el-divider>
            <el-icon><star-filled /></el-icon>
          </el-divider>
          <div class="user-info-list">
            上次提交时间：
            <span>{{ formLabelAlign.params.uploadtime }}</span>
          </div>
          <div class="user-info-list">
            是否提交截图：
            <span>
              {{ status }}
            </span>
          </div>
          <el-button
            type="waring"
            round
            @click="logout()"
            style="margin-left: 300px; margin-top: -30px"
          >
            退出登录
          </el-button>
        </el-card>
      </el-col>
      <el-col :span="16" :xs="24" class="bothalf">
        <el-upload
          :action="action"
          :data="{ pictureName: formLabelAlign.params.filename }"
          multiple
          :on-success="uploadSuccess"
          :before-upload="beforeAvatarUpload"
          :on-progress="uploadOssProgress"
        >
          <el-button
            type="primary"
            round
            style="margin-top: 10px; background-color: red"
            ><el-icon class="el-icon--upload"><upload-filled /></el-icon
            >上传青年大学习截图</el-button
          >
          <!-- <el-button type="waring" round @click="lookRankList()">
          查看排行榜
        </el-button> -->
          <template #tip>
            <div class="el-upload__tip">截图需要限制在10MB以下</div>
          </template>
        </el-upload>
        <div>
          <!-- <el-button type="warning" round @click="miaoshaRef()">头像秒杀</el-button> -->
          <el-button
            type="warning"
            round
            @click="forumRef()"
            style="margin-bottom: 10px"
            >网站论坛</el-button
          >

          <!-- <el-button
            type="warning"
            round
            @click="punch()"
            style="margin-bottom: 10px"
            >打卡记录</el-button
          > -->
          <el-button
            type="success"
            round
            @click="toEpe()"
            style="margin-bottom: 10px; background-color: black"
            >八股在路上</el-button
          >
          <el-button
            type="success"
            round
            @click="toVote()"
            style="margin-bottom: 10px; background-color: green"
            >投票</el-button
          >
          <el-button
            type="success"
            round
            @click="toVoteResult()"
            style="margin-bottom: 10px; background-color: #796765"
            >投票结果</el-button
          >
        </div>
      </el-col>
      <Leaderboard></Leaderboard>
    </el-row>

    <el-affix :offset="650">
      <el-footer>
        <el-link type="info" href="https://beian.miit.gov.cn/#/Integrated/index"
          >黑ICP备2021006793号-1</el-link
        >
        <el-link type="info" href="https://www.12377.cn/"
          >中国互联网违法和不良信息举报中心</el-link
        >
        <el-link type="info">联系电话：17545544638</el-link>
      </el-footer></el-affix
    >
  </div>
</template>

<script>
import login from "../api/login/login";
import forum from "../api/forumDemo/forum";
import { ref, reactive, computed } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";
import cookie from "js-cookie";
import Leaderboard from "./Leaderboard.vue";
export default {
  components: {
    Leaderboard,
  },
  setup() {
    //表内信息
    let formLabelAlign = reactive({
      params: {
        id: "",
        username: "",
        logintime: "",
        status: "",
        pictureoss: "",
        uploadtime: "",
        tagStatus: "",
        userId: "",
        filename: "",
      },
      directMessage: {
        count: 100,
      },
    });
    //tag属性
    var statusTag = reactive({
      error: false,
      success: false,
      second: false,
      info: false,
    });
    //加载属性
    var loading = ref(false);
    const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;
    //是否提交截图
    let status = ref({});
    //头像地址
    let pictureoss = ref({});
    const router = useRouter();
    //router钩子函数 做跳转验证
    router.beforeEach((to, from, next) => {
      if (to.meta.requireAuth == true) {
        if (formLabelAlign.params.id == "1") {
          next();
        } else if (formLabelAlign.params.id != "1") {
          router.push("/forum/userInfo").then(() => {
            window.location.reload();
          });
        }
      } else {
        next();
      }
    });

    let action = "http://123.56.156.8:8080/api/oss/file/uploadFile";
    //根据cookie中的信息获取用户信息
    function getUserInfoByToken() {
      let cookieInfo = cookie.get("userInfo");
      if (cookieInfo) {
        formLabelAlign.params = JSON.parse(cookieInfo);
        formLabelAlign.params.filename = formLabelAlign.params.username;
      }
      //根据状态码返回是否提交
      if (formLabelAlign.params.status == 1) {
        status = "已提交";
      } else if (formLabelAlign.params.status == 0) {
        status = "未提交";
      }
      // 根据状态码判别是第几个提交 -1为最后 0为正常 1 为最早
      if (formLabelAlign.params.tagStatus == -1) {
        statusTag.error = true;
        ElMessage.error("你怎么好意思的😒");
      } else if (formLabelAlign.params.tagStatus == 1) {
        statusTag.success = true;
      } else if (formLabelAlign.params.tagStatus == 2) {
        statusTag.second = true;
      } else {
        statusTag.info = true;
      }
      //查询私信数量
      login.getMessageCount(formLabelAlign.params.userId).then((res) => {
        formLabelAlign.directMessage.count = res.data.data;
      });
      //判断是否存在系统消息
      forum.getSys(formLabelAlign.params.userId).then((res) => {
        if (res.data.data == 4000) {
          ElMessageBox.alert(
            "❗❗❗有新的系统消息，请及时查看❗❗❗",
            "🦏来自系统自动发送",
            {
              // if you want to disable its autofocus
              // autofocus: false,
              confirmButtonText: "收到",
            }
          );
        }
      });
    }
    //标签
    function tagBtn() {
      ElMessage.warning("你怎么好意思的");
    }
    //退出登录
    function logout() {
      cookie.set("userInfo", "", { domain: "qisui.top" });
      cookie.set("cookieName", "", { domain: "qisui.top" });
      router.push("/").then(() => {
        window.location.reload();
      });
    }

    //限制上传图片的大小
    function beforeAvatarUpload(file) {
      const isLimtSize = file.size / 1024 / 1024 < 100;
      if (!isLimtSize) {
        ElMessage.warning("请限制提交大小在10MB以下");
        return false;
      }
    }

    //正在上传的操作
    function uploadOssProgress() {
      loading.value = true;
    }
    function uploadSuccess() {
      loading.value = false;
      ElMessage.success("提交成功");
      login.uploadTime(formLabelAlign.params);
    }
    //查看排行榜
    function lookRankList() {
      router.push("/uploadForm").then(() => {
        window.location.reload();
      });
    }
    //意见箱
    function toSuB(uid) {
      router.push(`/suggestionBox?uid=${uid}`).then(() => {
        window.location.reload();
      });
    }
    //跳转至秒杀页面
    function miaoshaRef() {
      router.push("/to_miaoshagoods").then(() => {
        window.location.reload();
      });
    }
    //跳转至论坛
    function forumRef() {
      router.push("/to_forum").then(() => {
        window.location.reload();
      });
    }
    //打卡记录
    function punch() {
      login.punch().then((res) => {
        ElMessage.success("打卡成功");
        setTimeout(() => {
          router.push("/to_forum").then(() => {
            window.location.reload();
          });
        }, 1000);
      });
    }
    //八股文
    function toEpe() {
      router.push(`/epe/first`).then(() => {
        window.location.reload();
      });
    }
    //去admin页面
    function toAdmin() {
      router.push("/4f836979-82c7-4f89-8e34-551f2a0f17ad/admin").then(() => {
        window.location.reload();
      });
    }
    //投票页面
    function toVote(){
      router.push(`/vote/index`).then(() => {
        window.location.reload();
      })
    }
    function toVoteResult(){
      router.push("/vote/result")
    }
    function toMessage() {
      router.push(`/directMessage?userId=${formLabelAlign.params.userId}`);
    }
    getUserInfoByToken();
    // getUserInfo(id);

    return {
      action,
      formLabelAlign,
      logout,
      status,
      lookRankList,
      uploadSuccess,
      pictureoss,
      miaoshaRef,
      loading,
      svg,
      statusTag,
      beforeAvatarUpload,
      uploadOssProgress,
      tagBtn,
      forumRef,
      punch,
      toEpe,
      toSuB,
      toAdmin,
      toMessage,
      toVote,
      toVoteResult
    };
  },
};

// //获取连接中的id
// //得到id值
// const id = router.currentRoute.value.params.id;

// //根据id查询信息
// function getUserInfo(id) {
//   login.findById(id).then((res) => {
//     formLabelAlign.params = res.data.userInfoById;
//   });
// }
</script>

<style>
.alert-header {
  height: 100px;
}
.mgb20 {
  background-image: url("http://qisui.top/debunate/lolback.jpg");
  background-position: center;
  /* 鼠标样式 */
  cursor: url("https://blog-static.cnblogs.com/files/lucas--liu/cat6.ico"),
    default;
}

.bothalf {
  background-image: url("http://qisui.top/debunate/lolback.jpg");
  background-position: left;
}
.card-avator {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  margin-top: 20px;
  margin-left: 10px;
}
.user-info-name {
  margin-bottom: 10px;
  font-size: 20px;
}
.user-info-cont {
  font-size: 10px;
  color: rgb(55, 55, 55);
  margin-left: 100px;
  margin-top: -70px;
}
.user-info-list {
  font-size: 14px;
  color: rgb(98, 97, 97);
  line-height: 25px;
}

.upload-container {
  margin-top: 100px;
  margin-left: 20px;
}

.el-row {
  margin-bottom: 20px;
  cursor: url("https://blog-static.cnblogs.com/files/lucas--liu/cat6.ico"),
    default;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-footer {
  background-color: rgb(101, 98, 98);
  margin-top: 100px;
  font-size: 20;
  height: 100%;
}
</style>