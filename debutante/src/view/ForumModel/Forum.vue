<template>
  <div class="module-body">
    <el-page-header @back="toHome()"></el-page-header>
    <div>
      <el-button type="info" @click="publishWord()" style="margin-left: 300px"
        >我要发布</el-button
      >
    </div>
    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <!--主题讨论区-->
    <ul>
      <li
        v-for="item in formLabelAlign.data1"
        v-bind:key="item"
        data-v-bf28f726=""
        class="clearfix"
      >
        <div data-v-bf28f726="" class="discuss-detail">
          <div data-v-bf28f726="" class="discuss-head">
            <el-card :body-style="{ padding: '0px' }">
              <!-- 头像 -->
              <a
                data-v-bf28f726=""
                data-card-uid="173362216"
                href="#/forum/Head"
                class="head-pic"
                data-card-index="1"
                ><img
                  data-v-bf28f726=""
                  alt="头像"
                  v-bind:src="item.pictureoss"
              /></a>
              <!-- 用户名 -->
              <a
                data-v-bf28f726=""
                data-card-uid="173362216"
                href="#/forum/userInfo"
                class="d-name level-color-8"
                style="font-size: 20px; color: #999"
                data-card-index="2"
                >{{ item.username }}</a
              >
              <el-tag
                type="success"
                effect="plain"
                round
                size="large"
                hit="true"
                color="black"
                style="margin-left: 5px"
                v-if="item.type == 2"
              >
                置顶👑
              </el-tag>
              <el-tag
                type="warning"
                effect="light"
                round
                style="margin-left: 5px"
                hit="true"
                v-if="item.type == 1"
              >
                精华🎆
              </el-tag>
              <el-tag type="info" v-if="item.type == 0"> pc精品🐲 </el-tag>
              <!-- 内容简介 -->
              <div class="discuss-main clearfix">
                <router-link
                  :to="{
                    path: '/forum/description',
                    query: {
                      title: item.title,
                      author: item.username,
                      userId: item.userId,
                      pictureoss: item.pictureoss,
                    },
                  }"
                  >{{ item.title }}</router-link
                >
              </div>
            </el-card>
          </div>
          <!-- 点赞 评论 浏览量 -->
          <div class="feed-foot">
            <span style="margin: 6px 0px"></span>
            <div class="feed-legend">
              <div class="feed-legend-content">
                <span class="no-after"
                  ><img
                    data-v-bf28f726=""
                    src="//static.nowcoder.com/images-nk/oss/page/discuss/center/browse.png"
                    alt=""
                  />{{ item.status }}</span
                >

                <span data-v-bf28f726="" class="no-after"
                  ><img
                    data-v-bf28f726=""
                    src="//static.nowcoder.com/images-nk/oss/page/discuss/center/comment.png"
                    alt=""
                  />{{ item.commentCount }}</span
                >
                <span data-v-bf28f726="" class="no-after"
                  ><img
                    data-v-bf28f726=""
                    src="//static.nowcoder.com/images-nk/oss/page/discuss/center/like.png"
                    alt=""
                  />{{ item.score }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <el-footer>
      <el-link type="info" href="https://beian.miit.gov.cn/#/Integrated/index"
        >黑ICP备2021006793号-1</el-link
      >
      <el-link type="info" href="https://www.12377.cn/"
        >中国互联网违法和不良信息举报中心</el-link
      >
      <el-link type="info">联系电话：17545544638</el-link>
    </el-footer>
  </div>
</template>

<script>
import forum from "../../api/forumDemo/forum";
import { ref, reactive, computed } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
export default {
  setup() {
    const router = useRouter();
    let formLabelAlign = reactive({
      data1: [],
      data2: [],
    });
    function findAll() {
      forum.findAll().then((res) => {
        formLabelAlign.data1 = res.data.data;
        console.log(formLabelAlign.data1)
      });
    }

    // //获取帖子信息
    // function showCommont() {
    //   forum.showCommont().then((res) => {
    //     console.log(res.data.data);
    //   });
    // }

    // 发帖功能
    function publishWord() {
      router.push("/forum/publishWord").then(() => {});
    }
    //回主页
    function toHome() {
      router.push("/loginIndex").then(() => {});
    }
    findAll();
    return {
      formLabelAlign,
      publishWord,
      toHome,
    };
  },
};
</script>

<style>
ul {
  margin: 0;
  padding: 0;
  font-weight: 400;
}
body,
html {
  margin: 0;
  height: 100%;
}
body {
  background-image: url("http://pc5201314.oss-cn-beijing.aliyuncs.com/2022/05/%E5%A4%B4%E5%83%8F/%E5%A4%A9%E6%B0%94%E4%B9%8B%E5%AD%90.jpeg");
  background-position: center;
  font: 25px/1.5 system, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    Helvetica, "PingFang SC", "Segoe UI", "Microsoft YaHei",
    "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", Arial, sans-serif;
  word-wrap: break-word;
  word-break: break-word;
}
a {
  color: #333;
}
a:link,
a:visited {
  text-decoration: none;
}
a:hover {
  color: #25bb9b;
}
.clearfix {
  display: block;
  zoom: 1;
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
.el-footer {
  background-color: rgb(101, 98, 98);
  margin-top: 160px;
  font-size: 20;
  height: 100%;
}
</style>