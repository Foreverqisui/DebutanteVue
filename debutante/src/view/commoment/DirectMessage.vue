<template>
  <div>
    <div style="text-align: center">
      <h1>私信列表</h1>
    </div>
    <div>
      <el-tabs type="border-card">
        <el-tab-pane label="system">
          <ul>
            <li
              v-for="item in formLabelAlign.data3"
              v-bind:key="item"
              class="clearfix"
            >
              <a href="#/forum/Head" class="head-pic"
                ><img alt="头像" v-bind:src="sysAvatar"
              /></a>
              <el-tag type="danger" effect="dark" round style="margin-left: 20px;margin-top: 10px;">系统消息 </el-tag>
              <div class="message-main">
                <span>{{ item }}</span>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="sender">
          <div style="text-align: center; margin-bottom: 20px">
            <span>发给你的消息</span>
          </div>
          <ul>
            <li
              v-for="item in formLabelAlign.data1"
              v-bind:key="item"
              class="clearfix"
            >
              <div>
                <div>
                  <el-card style="margin-left: -20px;">
                    <!-- 头像 -->
                    <a href="#/forum/Head" class="head-pic"
                      ><img alt="头像" v-bind:src="item.pictureoss"
                    /></a>
                    <!-- 用户名 -->
                    <a
                      style="font-size: 20px; color: #999"
                      data-card-index="2"
                      >{{ item.username }}</a
                    >
                    <span style="margin-left: 10px">{{ item.createTime }}</span>
                    <!-- 内容简介 -->
                    <div class="message-main">
                      <span>{{ item.content }} </span>
                      <el-affix
                        position="bottom"
                        :offset="10"
                        style="margin-left: 270px"
                        ><el-button
                          @click="replay(item.username, userId, item.content)"
                          >回复</el-button
                        ></el-affix
                      >
                    </div>
                  </el-card>
                </div>
              </div>
            </li>
          </ul></el-tab-pane
        >
        <el-tab-pane label="recipient">
          <div style="text-align: center; margin-bottom: 20px">
            <span>你发的消息</span>
          </div>
          <el-button @click="sendMessage()" style="margin-left: 300px"
            >发送私信</el-button
          >
          <ul>
            <li
              v-for="item in formLabelAlign.data2"
              v-bind:key="item"
              class="clearfix"
            >
              <div>
                <div>
                  <el-card style="margin-left: -20px">
                    <!-- 头像 -->
                    <a href="#/forum/Head" class="head-pic"
                      ><img alt="头像" v-bind:src="item.pictureoss"
                    /></a>
                    <!-- 用户名 -->
                    <span
                      style="font-size: 20px; color: #999"
                      data-card-index="2"
                      >{{ item.username }}</span
                    >
                    <span style="margin-left: 10px">{{ item.createTime }}</span>

                    <!-- 内容简介 -->
                    <div class="message-main">
                      <span>{{ item.content }} </span>
                    </div>
                  </el-card>
                </div>
              </div>
            </li>
          </ul></el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>

<script>
import forum from "../../api/forumDemo/forum";
import { ref, reactive, computed } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";
export default {
  setup() {
    const router = useRouter();
    let formLabelAlign = reactive({
      data1: [],
      data2: [],
      data3: [],
    });
    let userId = router.currentRoute.value.query.userId;
    let sysAvatar =
      "http://pc5201314.oss-cn-beijing.aliyuncs.com/%E7%94%A8%E6%88%B7%E5%A4%B4%E5%83%8F/adminnAvatar.jpeg";
    //获取私信数据
    function getSender(userId) {
      forum.getSender(userId).then((res) => {
        formLabelAlign.data1 = res.data.data;
      });
      forum.getRecipient(userId).then((res) => {
        formLabelAlign.data2 = res.data.data;
      });
      forum.getSysMessage(userId).then((res) => {
        formLabelAlign.data3 = res.data;
      });
    }
    //回复私信
    const replay = (username, userId, ocontent) => {
      ElMessageBox.prompt("请输入具体内容", "回复内容", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        center: "true",
      })
        .then(({ value }) => {
          forum.replyMessage(username, userId, value, ocontent);
          ElMessage({
            type: "success",
            message: "回复完成",
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "修改取消",
          });
        });
    };
    function sendMessage() {
      router.push(`sendMessage?userId=${userId}`);
    }

    getSender(userId);
    return {
      formLabelAlign,
      userId,
      sysAvatar,
      replay,
      sendMessage,
    };
  },
};
</script>

<style>
.clearfix {
  display: block;
}
.clearfix:after,
.clearfix:before {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.head-pic {
  border-radius: 50%;
  display: block;
  float: left;
  margin-right: 10px;
  overflow: hidden;
  width: 50px;
  height: 50px;
}
.head-pic img {
  width: 100%;
}
.message-main {
  margin-top: 30px;
  margin-left: 20px;
  font-size: 20px;
  font-family: "YouYuan";
}
</style>