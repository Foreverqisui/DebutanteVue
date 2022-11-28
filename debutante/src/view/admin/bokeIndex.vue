<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="bisque"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <el-avatar
          class="card-avator"
          v-bind:src="bokeData.avatar"
          @click="changeMenu()"
        >
        </el-avatar
      ></el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1" @click="changeMenu()">首页</el-menu-item>
      <el-menu-item index="2" @click="toKuajie()">我的小说</el-menu-item>
      <el-menu-item index="3" @click="changeMenu()">我的八股</el-menu-item>
      <el-menu-item index="4" @click="changeMenu()">我的简历</el-menu-item>
      <el-menu-item index="5" @click="changeMenu()">我的未来</el-menu-item>
      <el-sub-menu index="6">
        <template #title>学习资料</template>
        <el-sub-menu index="6-1">
          <template #title>java网课</template>
          <el-menu-item index="6-1-1">尚硅谷</el-menu-item>
          <el-menu-item index="6-1-2">黑马</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6-2">
          <template #title>全栈项目</template>
          <el-menu-item index="6-2-1">尚硅谷</el-menu-item>
          <el-menu-item index="6-2-2">黑马</el-menu-item>
          <el-menu-item index="6-2-3">仿牛客</el-menu-item>
          <el-menu-item index="6-2-4">秒杀</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6-3">
          <template #title>算法网课</template>
          <el-menu-item index="6-3-1">某某网课（详细+推荐）</el-menu-item>
          <el-menu-item index="6-3-2">左神网课</el-menu-item>
          <el-menu-item index="6-3-3">蓝桥杯</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6-5">
          <template #title>八股资源</template>
          <el-menu-item index="6-5-1">全套</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6-6">
          <template #title>各种软件</template>
          <el-menu-item index="6-6-1">全套</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>其它</template>
        <el-sub-menu index="7-4">
          <template #title>支持作者</template>
          <el-menu-item index="7-4-1">微信</el-menu-item>
          <el-menu-item index="7-4-2">支付宝</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12" style="text-align: center">
          <div class="page-header">
            <h1>Aa潘七岁的世界</h1>
          </div>
          <p>
            <em
              ><strong
                >很开心 你可以来到我的个人博客,这里是Aa潘七岁的世界😏</strong
              ></em
            >
          </p>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in bokeData.imgList" :key="item.id">
              <img :src="item.idView" class="image" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <el-divider>
        <el-icon><star-filled /></el-icon>
      </el-divider>
      <div class="row">
        <div class="col-md-4">
          <div class="jumbotron">
            <h2>网站介绍</h2>
            <p>
              个人开发，起初是为了收青年大学习的截图，后来进行了不断的完善与功能的添加，目前包括了论坛、八股两个主要功能，还有一些小的功能正在开发ing。
              这个博客也是正在开发的功能之一，希望会喜欢。
            </p>
            <p>
              <a class="btn btn-primary btn-large" href="#">Learn more</a>
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <dl>
            <dt>Description lists</dt>
            <dd>A description list is perfect for defining terms.</dd>
            <dt>Euismod</dt>
            <dd>
              Vestibulum id ligula porta felis euismod semper eget lacinia odio
              sem nec elit.
            </dd>
            <dd>Donec id elit non mi porta gravida at eget metus.</dd>
            <dt>Malesuada porta</dt>
            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
            <dt>Felis euismod semper eget lacinia</dt>
            <dd>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus.
            </dd>
          </dl>
        </div>
        <div class="col-md-4">
          <dl>
            <dt>Description lists</dt>
            <dd>A description list is perfect for defining terms.</dd>
            <dt>Euismod</dt>
            <dd>
              Vestibulum id ligula porta felis euismod semper eget lacinia odio
              sem nec elit.
            </dd>
            <dd>Donec id elit non mi porta gravida at eget metus.</dd>
            <dt>Malesuada porta</dt>
            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
            <dt>Felis euismod semper eget lacinia</dt>
            <dd>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus.
            </dd>
          </dl>
        </div>
      </div>
      <el-divider>
        <el-icon><star-filled /></el-icon>
      </el-divider>
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <img
                  class="card-img-top"
                  alt="Bootstrap Thumbnail First"
                  src="http://qisui.top/debunate/八股功能截图.jpg"
                />
                <div class="card-block">
                  <h5 class="card-title">八股模块</h5>
                  <p class="card-text">
                    这里面有我自己写的有关八股的笔记，首页借助redis统计了前几的热点八股作为展示，后面按照章节来进行展示。点击按钮跳转到八股内容
                  </p>
                  <p>
                    <a class="btn btn-primary" href="#">前往查看</a>
                    <a class="btn" href="#">Action</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  class="card-img-top"
                  alt="Bootstrap Thumbnail Second"
                  src="http://qisui.top/debunate/论坛功能截图.jpg"
                />
                <div class="card-block">
                  <h5 class="card-title">论坛模块</h5>
                  <p class="card-text">
                    这是我自己做的一个小论坛，目前还不算完善，只完成了浏览量、点赞数、评论数统计和发布回复功能，还是需要慢慢完善的。注：发布和回复帖子需要先登录哦
                  </p>
                  <p>
                    <a class="btn btn-primary" href="#">前往查看</a>
                    <a class="btn" href="#">Action</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  class="card-img-top"
                  alt="Bootstrap Thumbnail Third"
                  style="height: 450px"
                  src="http://qisui.top/debunate/个人微信.jpg"
                />
                <div class="card-block">
                  <h5 class="card-title">个人微信</h5>
                  <p class="card-text">加我微信，一起搞更多的事情</p>
                  <p>
                    <a class="btn btn-primary" href="#">Action</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from "element-plus";
import { ref, reactive, computed } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
export default {
  setup() {
    let bokeData = reactive({
      info: "123",
      avatar: "https://www.layoutit.com/img/people-q-c-600-200-1.jpg",
      isCollapse: "false",
      imgList: [
        {
          id: 0,
          idView: "https://www.layoutit.com/img/people-q-c-600-200-1.jpg",
        },
        {
          id: 1,
          idView: "https://www.layoutit.com/img/city-q-c-600-200-1.jpg",
        },
        {
          id: 2,
          idView: "https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg",
        },
        {
          id: 3,
          idView: "https://www.layoutit.com/img/sports-q-c-600-200-1.jpg",
        },
      ],
    });
    const router = useRouter();
    function changeMenu() {
      bokeData.isCollapse = true;
      console.log(bokeData.isCollapse);
    }
    function toKuajie() {
      router.push("/kuajieIndex").then(() => {});
    }
    return {
      bokeData,
      changeMenu,
      toKuajie,
    };
  },
};
</script>

<style>
.container {
  font-family: "STSong";
  background-color: bisque;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: black;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}
</style>