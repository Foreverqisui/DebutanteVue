<template>
  <div class="container">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6" style="text-align: center">
          <h3>跨界</h3>
          <el-image :src="data.src" />
          <address>
            <strong>作者：Aa潘七岁</strong><br />
            创作时间：2022.9.11<br />
            热爱生活的每一天<br />
            <abbr title="Phone">P:</abbr> 17545544638
          </address>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" arialabelledby="wechat" class="icon wechat-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1AC88E"></circle>,<path fill="#fff" d="M827.551 578.742a176.583 176.583 0 0 0-185.685-158.379 172.942 172.942 0 0 0-186.3 158.379 172.942 172.942 0 0 0 185.686 158.379 282.169 282.169 0 0 0 65.536-10.923l60.689 32.768-16.384-54.613a166.275 166.275 0 0 0 76.458-125.611zm-245.76-27.307a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.307 21.845 24.872 24.872 0 0 1-27.921 21.845h.614zm121.356 0a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.306 21.845 24.872 24.872 0 0 1-28.512 21.845h1.206z"></path>,<path fill="#fff" d="M623.662 400.953h21.23A222.709 222.709 0 0 0 419.772 245.6a208.145 208.145 0 0 0-223.323 189.94 182.044 182.044 0 0 0 89.201 150.483l-22.436 67.356 78.279-39.435a389.575 389.575 0 0 0 78.279 10.923h20.616a163.226 163.226 0 0 1-6.667-46.718 182.044 182.044 0 0 1 189.94-177.197zm-121.379-60.69a27.921 27.921 0 1 1 0 55.843 31.562 31.562 0 0 1-33.36-27.921 31.562 31.562 0 0 1 34.59-27.921h-1.23zM346.34 396.107a31.562 31.562 0 0 1-33.383-27.921 31.562 31.562 0 0 1 33.383-27.921 27.921 27.921 0 1 1 0 55.842z"></path></svg>
        <div class="col-md-6" style="margin-top: 40px">
          <dl>
            <dt>故事类别</dt>
            <dd>玄幻、穿越、言情</dd>
            <dt>故事背景</dt>
            <dd>背景纯属虚构，如有雷同，纯属巧合</dd>
            <dt>故事简介</dt>
            <dd>
              讲述由于远古一场大战被坑的男主（阎王之子），经历百世轮回后，重新回归，
              从现代社会穿越到其它三界，从而开启的一段恢复记忆的旅途。
            </dd>
            <dt>联系作者</dt>
            <dd><a href="/#/bokeIndex">点我点我</a></dd>
          </dl>
          <el-link
            href="/#/novel/1"
            target="_blank"
            style="margin-left: 130px"
            >🤑免费阅读</el-link
          >
        </div>
      </div>
    </div>
    <h5 style="margin-left: 25px;">目录</h5>
    <div class="volume-list" style="display: block">
      <ul>
        <li v-for="item in data.essay" v-bind:key="item">
          <a :href="item.link">{{item.chapter}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from "element-plus";
import { ref, reactive, computed } from "vue";
import novel from "../../api/epe/epe.js";
export default {
  setup() {
    let data = reactive({
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      essay: []
    });
    function getNovelEssay(){
        novel.getNovelEssay().then((res)=>{
            console.log(res);
            data.essay = res.data.essay;
        })
    }
    getNovelEssay()
    return {
      data,
    };
  },
};
</script>

<style>
.container {
  background-color: bisque;
}
a img {
  border: none;
}
a {
  text-decoration: none;
  color: #262626;
  outline: 0;
}
a:hover {
  color: #ed4259;
}
.loaded a {
  transition: color 0.3s, background-color 0.3s;
}
textarea {
  font: 14px/1.8 PingFangSC-Regular, HelveticaNeue-Light, "Helvetica Neue Light",
    "Microsoft YaHei", sans-serif;
  resize: none;
  outline: 0;
}
.volume-list {
  display: none;
  clear: both;
  margin-right: -4px;
  margin-bottom: 20px;
  
}
.volume-list ul {
  overflow: hidden;
  padding-left: 24px;
  list-style:noen
}
.volume-list li {
  font: 16px/40px PingFangSC-Regular, HelveticaNeue-Light,
    "Helvetica Neue Light", "Microsoft YaHei", sans-serif;
  float: left;
  width: 376px;
  border-top: 1px solid #f2f2f2;
}
.volume-list li a {
  max-width: 72%;
  float: left;
  overflow: hidden;
  max-width: 80%;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>