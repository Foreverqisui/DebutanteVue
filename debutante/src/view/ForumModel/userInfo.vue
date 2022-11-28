<template>
  <div class="container">
    <el-row>
      <el-col
        :span="4"
        v-loading="loading"
        element-loading-text="截图正在提交，请不要退出"
        :element-loading-svg="svg"
        element-loading-svg-view-box="-10, -10, 50, 50"
        element-loading-background="rgba(122, 122, 122, 0.8)"
        style="width: 100%"
        class="box"
      >
        <el-tooltip placement="bottom">
          <template #content
            ><h5>更改头像需花费1000资产</h5>
            <br />
            <mark
              >上传头像的照片需要更改名称为自己的学号+尾缀（jpg/jpeg/png）</mark
            ></template
          >
          <el-upload
            :action="action"
            multiple
            :on-success="uploadSuccess"
            :before-upload="beforeAvatarUpload"
            :on-progress="uploadOssProgress"
            :on-error="uploadError"
          >
            <el-avatar v-bind:src="userData.info.pictureoss"> </el-avatar>
          </el-upload>
        </el-tooltip>
      </el-col>
      <el-col :span="20">
        <h1 style="margin-left: 50px">个人信息简介</h1>
      </el-col>
    </el-row>
    <el-row class="infoChangeAll">
      <el-col :span="20">
        <el-card shadow="hover" class="mgb20" style="height: 252px">
          <div class="infoChange">
            名称：{{ userData.info.username }}
            <el-button round type="info" @click="updateUsername()">
              修改名称
            </el-button>
          </div>
          <div class="infoChange">
            密码：不做展示
            <el-button round type="info" @click="updatePassword()">
              更改密码
            </el-button>
          </div>
          <div class="infoChange">
            论坛回复Id：{{ userData.info.userId }}
              <el-button round type="info" @click="updateForumId()">
                更改id
              </el-button>
          </div>
          <div class="infoChange">
            个人资产：{{ userData.info.property }}
              <el-tooltip placement="bottom">
              <template #content><mark>目前暂不支持充值，有需要可在意见箱中叙说或提交合理意见</mark></template>
            <el-button round type="warning" @click="addProperty()">
              充值
            </el-button>
            </el-tooltip>
          </div>
        </el-card></el-col
      >
    </el-row>
    <h1 style="text-align: center; margin-top: 20px">评论区加精置顶功能</h1>
    <el-row class="infoChangeAll">
      <el-col :span="20"
        ><div class="grid-content ep-bg-purple" />
        <el-card shadow="hover" class="mgb20" style="height: 252px">
          <el-form :inline="true">
            <el-form-item label="帖子标题">
              <el-input
                v-model="userData.params.updateType.title"
                placeholder="请输入帖子标题"
              />
            </el-form-item>
            <el-form-item label="帖子用户名">
              <el-input
                v-model="userData.params.updateType.username"
                placeholder="请输入帖子用户名"
              />
            </el-form-item>
            <el-form-item label="帖子等级">
              <el-select
                v-model="userData.params.updateType.type"
                placeholder="请选择帖子等级"
              >
                <el-option label="精华" value="1" />
                <el-option label="置顶" value="2" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-tooltip placement="top" content="修改价格：精华500 置顶1500">
                <el-button
                  type="primary"
                  style="margin-left: 70px; margin-top: 20px"
                  @click="
                    updateType(
                      userData.params.updateType.title,
                      userData.params.updateType.username,
                      userData.params.updateType.type
                    )
                  "
                  >修改等级</el-button
                >
              </el-tooltip>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import login from "../../api/login/login";
import forum from "../../api/forumDemo/forum.js";
import { ref, reactive, computed } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";
import { UploadFilled } from "@element-plus/icons-vue";
import cookie from "js-cookie";
export default {
  setup() {
    let userData = reactive({
      info: {
        uid: "",
        username: "测试",
        password: "",
        userId: "101",
        property: "1000",
        pictureoss:
          "http://pc5201314.oss-cn-beijing.aliyuncs.com/2022/05/%E5%A4%B4%E5%83%8F/%E5%8F%AF%E7%88%B1%E5%A5%B3%E5%A4%B4.jpeg",
        loginTime: "2022-8-21",
      },
      params: {
        updateType: {
          title: "",
          username: "",
          type: "1",
        },
      },
    });
    let action = "http://123.56.156.8:8080/api/oss/file/updatePictureOss";
    //加载属性
    var loading = ref(false);
    //根据cookie中的信息获取用户信息
    function getUserInfoByToken() {
      let cookieInfo = cookie.get("userInfo");
      if (cookieInfo) {
        userData.info = JSON.parse(cookieInfo);
      }
    }
    //限制上传图片的大小
    function beforeAvatarUpload(file) {
      const isLimtSize = file.size / 1024 / 1024 < 1;
      if (!isLimtSize) {
        ElMessage.warning("请限制提交大小在1MB以下");
        return false;
      }
      if (userData.info.property < 1000) {
        ElMessage.error("你的资产不足1000，请充值到1000以上");
        return false;
      }
    }
    function uploadOssProgress() {
      loading.value = false;
    }
    //修改用户名
    const updateUsername = () => {
      ElMessageBox.prompt("请输入新的用户名", "修改用户名", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        center: "true",
      })
        .then(({ value }) => {
          userData.info.username = value;
          login.updateUsernameByUid(userData.info.uid, userData.info.username);
          ElMessage({
            type: "success",
            message: `你的新用户名为:${value}`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "修改取消",
          });
        });
    };
    // 修改密码
    const updatePassword = () => {
      ElMessageBox.prompt("请输入新的密码", "修改密码", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        inputPattern: /^\d{5,10}$/,
        inputErrorMessage: "请限制在5-10位之内",
      })
        .then(({ value }) => {
          userData.info.password = value;
          login.updatePasswordByUid(userData.info.uid, userData.info.password);
          ElMessage({
            type: "success",
            message: `你的新密码为:${value}`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "修改取消",
          });
        });
    };
    // 修改论坛回复id
    const updateForumId = () => {
      ElMessageBox.prompt("请输入新的论坛id", "修改论坛id会导致曾经的帖子和回复全部消失，请三思！！！", {
        confirmButtonText: "谨慎修改！！！",
        cancelButtonText: "Cancel",
        inputPattern: /^\d{1,10}$/,
        inputErrorMessage: "请限制在1-10位之内",
      })
        .then(({ value }) => {
          userData.info.userId = value;
          login.updateForumIdByUid(userData.info.uid, userData.info.userId);
          ElMessage({
            type: "success",
            message: `你的新的论坛id为:${value}`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "修改取消",
          });
        });
    };
    //充值
    function addProperty() {
      console.log("充值");
    }

    //更改帖子等级
    function updateType(title, username, type) {
      forum.updateType(title, username, type, userData.info.uid).then((res) => {
        if (userData.info.property < 500) {
          ElMessage.warning("请保证你的资产在500以上");
        }

        if (res.success == true) {
          ElMessage.success("等级修改成功");
        } else {
          ElMessage.error("请检查和用户名 或者 资产不足，请及时充值");
          adminData.params.updateType.username = "";
          adminData.params.updateType.title = "";
        }
      });
    }
    getUserInfoByToken();
    return {
      userData,
      action,
      loading,
      updateUsername,
      updatePassword,
      updateForumId,
      UploadFilled,
      uploadOssProgress,
      beforeAvatarUpload,
      addProperty,
      updateType,
    };
  },
};
</script>

<style>
.container {
  font-family: "YouYuan";
  background-color: bisque;
}
.infoChangeAll {
  margin-top: 20px;
  margin-left: 50px;
}
.infoChange {
  margin-bottom: 20px;
}
</style>