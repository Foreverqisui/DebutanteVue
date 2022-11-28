<template>
  <div class="container">
    <el-row justify="space-around">
      <el-col :span="24">
        <el-tabs type="border-card" class="demo-tabs">
          <el-tab-pane label="👑班长">
            <div class="container-fluid">
              <div>
                <el-card class="card1">
                  <div class="col-md-4">
                    <h3 style="text-align: center">👑十项全能</h3>
                    <el-image
                      src="http://qisui.top/debunate/3055d38c3dfe03b5a0a16113be3d5bb.jpg"
                      class="image"
                    />
                    <address class="txt">
                      <strong>姓名：{{ data.mb[0].name }}</strong
                      ><br />
                      <a href="www.qisui.top/冀文静的个人简介.txt">冀文静的个人简介</a>
                    </address>
                    <el-button
                      type="info"
                      :icon="Message"
                      style="margin-left: 90px"
                      @click="vote(data.mb[0].name, data.mb[0].position)"
                      >投票</el-button
                    >
                    <el-button type="danger" @click="bad(data.mb[0].name)">差评</el-button>
                  </div>
                </el-card>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <template #label>
              <span class="custom-tabs-label">
                <el-icon><star /></el-icon>
                <span>团支书  🇨🇳</span>
              </span>
            </template>
            <div class="container-fluid">
              <div>
                <el-card class="card4">
                  <div class="col-md-4">
                    <h4 style="text-align: center">学习新思想，争做新青年 🇨🇳</h4>
                    <el-image
                      src="http://qisui.top/debunate/回朦哀.jpeg"
                      class="image"
                    />
                    <address class="txt">
                      <strong>姓名：{{ data.tz[0].name }}</strong
                      ><br />
                      个人简介: 周一记得看青年大学习
                    </address>
                    <el-button
                      type="info"
                      :icon="Message"
                      style="margin-left: 90px"
                      @click="vote(data.tz[0].name, data.tz[0].position)"
                      >投票</el-button
                    >
                    <el-button type="danger" @click="bad(data.tz[0].name)">差评</el-button>
                  </div>
                </el-card>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="🤑生活班长">
            <div class="container-fluid">
              <div>
                <el-card class="card1">
                  <div class="col-md-4">
                    <h3 style="text-align: center">🤑数不到钱的财务主管</h3>
                    <el-image
                      src="http://qisui.top/debunate/马昕宇.jpg"
                      class="image"
                    />
                    <address class="txt">
                      <strong>姓名：{{ data.sb[0].name }}</strong
                      ><br />
                      个人简介：大家好，我是马昕宇，想要竞选生活班长一职。<br />
                      我活泼开朗，兴趣广泛，而且还有一颗热爱班集体的心。希望可以继续在这个职务上帮助大家完成一些琐事，服务于大家，谢谢。
                    </address>
                    <el-button
                      type="info"
                      :icon="Message"
                      style="margin-left: 90px"
                      @click="vote(data.sb[0].name, data.sb[0].position)"
                      >投票</el-button
                    >
                    <el-button type="danger" @click="bad(data.sb[0].name)">差评</el-button>
                  </div>
                </el-card>
              </div>
            </div></el-tab-pane
          >
          <el-tab-pane label="⛄伙食班长">
            <div class="container-fluid">
              <div>
                <el-card class="card1">
                  <div class="col-md-4">
                    <h3 style="text-align: center">⛄任劳任怨的扫雪大队长</h3>
                    <el-image
                      src="http://qisui.top/debunate/14-杨尉.jpg"
                      class="image"
                    />
                    <address class="txt">
                      <strong>姓名：{{ data.hb[0].name }}</strong
                      ><br />
                      个人简介：任劳任怨的扫雪大队长
                    </address>
                    <el-button
                      type="info"
                      :icon="Message"
                      style="margin-left: 90px"
                      @click="vote(data.hb[0].name, data.hb[0].position)"
                      >投票</el-button
                    >
                    <el-button type="danger" @click="bad(data.hb[0].name)">差评</el-button>
                  </div>
                </el-card>
                <el-card class="card1">
                  <div class="col-md-4">
                    <h3 style="text-align: center">⛄任劳任怨的扫雪大队长</h3>
                    <el-image
                      src="http://qisui.top/debunate/29-杨帆.jpg"
                      class="image"
                    />
                    <address class="txt">
                      <strong>姓名：{{ data.hb[1].name }}</strong
                      ><br />
                      个人简介：我是杨帆，担任过大一一年的扫雪班长，每次扫雪都能做到亲力亲为，帮助同学，在扫雪班长任上做的相对尽善尽责，希望还能有机会担任扫雪班长，为班级同学服务。
                    </address>
                    <el-button
                      type="info"
                      :icon="Message"
                      style="margin-left: 90px"
                      @click="vote(data.hb[1].name, data.hb[1].position)"
                      >投票</el-button
                    >
                    <el-button type="danger" @click="bad(data.hb[1].name)">差评</el-button>
                  </div>
                </el-card>
              </div>
            </div></el-tab-pane
          >
          <el-tab-pane label="📚学习班长">
            <div class="container-fluid">
              <div>
                <el-card class="card1">
                  <div class="col-md-4">
                    <h3 style="text-align: center">📚热爱学习的三好少年</h3>
                    <el-image
                      src="http://qisui.top/debunate/07-段超.jpg"
                      class="image"
                    />
                    <address class="txt">
                      <strong>姓名：{{ data.xb[0].name }}</strong
                      ><br />
                      个人简介：平常负责班级里面和学习相关的事，在过去的两年里面我做的不算太好，班级里面的同学找我帮忙，我能做的我都尽力去做好。不管过去还是以后我能帮助同学的我都尽力去做。谢谢大家！
                    </address>
                    <el-button
                      type="info"
                      :icon="Message"
                      style="margin-left: 90px"
                      @click="vote(data.xb[0].name, data.xb[0].position)"
                      >投票</el-button
                    >
                    <el-button type="danger" @click="bad(data.xb[0].name)">差评</el-button>
                  </div>
                </el-card>
                <el-card class="card1">
                  <div class="col-md-4">
                    <h3 style="text-align: center">📚热爱学习的三好少年</h3>
                    <el-image
                      src="http://qisui.top/debunate/23-李世婷.jpg"
                      class="image"
                    />
                    <address class="txt">
                      <strong>姓名：{{ data.xb[1].name }}</strong
                      ><br />
                      个人简介：大家好，我叫李世婷，我今天想竞选的是班级里的学习委员，由于是后分到班级里的，我跟班级的一部分同学还没有那么熟悉，
                      也很想通过这次和大家认识和熟悉，在大一的时候我很荣幸被以前班级里的同学投票当了一年的学习委员，这也让我明白和了解了学委的工作和如何与同学相处，来到新的班级，我想在尝试一下，继续为同学们服务，
                      如果我当上学委后，首先我会在学习方面严格的要求自己做到努力学习同时帮助大家一起学习营造良好的学习氛围，我也会协助各个班委之间的工作，也请同学和老师进行监督，谢谢大家
                    </address>
                    <el-button
                      type="info"
                      :icon="Message"
                      style="margin-left: 90px"
                      @click="vote(data.xb[1].name, data.xb[1].position)"
                      >投票</el-button
                    >
                    <el-button type="danger" @click="bad(data.xb[1].name)">差评</el-button>
                  </div>
                </el-card>
              </div>
            </div></el-tab-pane
          >
          <el-tab-pane label="💪体育班长">
            <div class="container-fluid">
              <div>
                <el-card class="card1">
                  <div class="col-md-4">
                    <h3 style="text-align: center">💪身强体壮，健身有我</h3>
                    <el-image
                      src="http://qisui.top/debunate/04-彭国强.jpg"
                      class="image"
                    />
                    <address class="txt">
                      <strong>姓名：{{ data.tb[0].name }}</strong
                      ><br />
                      个人简介：大家好，我是彭国强，也担任了俩年的体育班长了，只能说没为班级做出什么大的贡献，仅仅完成了自己的本职工作罢了，相比较服务于咱们班的同学来说，我的重心大多放在了大学生服务中心勤工助学中了，只能说服务全校学生了，也相当于服务咱班人了。就在昨天我也完成了部门里的换届工作，正式卸任了。然后呢我还想继续担任体育班长一职，在大学最后的时光里继续完成以前该干的事。谢谢大家了～
                    </address>
                    <el-button
                      type="info"
                      :icon="Message"
                      style="margin-left: 90px"
                      @click="vote(data.tb[0].name, data.tb[0].position)"
                      >投票</el-button
                    >
                    <el-button type="danger" @click="bad(data.tb[0].name)">差评</el-button>
                  </div>
                </el-card>
              </div>
            </div></el-tab-pane
          >
          <el-tab-pane label="🧚🏻‍♀️文艺班长">
            <div class="container-fluid">
              <div>
                <el-card class="card1">
                  <div class="col-md-4">
                    <h3 style="text-align: center">🧚🏻‍♀️多才多艺，表演唱歌俱佳</h3>
                    <el-image
                      src="http://qisui.top/debunate/12-战美钰.jpg"
                      class="image"
                    />
                    <address class="txt">
                      <strong>姓名：{{ data.wb[0].name }}</strong
                      ><br />
                      个人简介：性格活泼开朗，积极乐于组织活动，并想继续担任文艺班长一职，积极为同学们服务。在两年任职期间，我知道自己有很多不足，但我会积极改正，争取做的更好，以身作则，继续团结班级同学，服务同学，增强班级凝聚力，配合班级班干开展班级各项工作。为同学们的生活增添色彩。
                    </address>
                    <el-button
                      type="info"
                      :icon="Message"
                      style="margin-left: 90px"
                      @click="vote(data.wb[0].name, data.wb[0].position)"
                      >投票</el-button
                    >
                    <el-button type="danger" @click="bad(data.wb[0].name)">差评</el-button>
                  </div>
                </el-card>
              </div>
            </div></el-tab-pane
          >
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
  
  <script>
import { ElMessage, ElMessageBox } from "element-plus";
import voteApi from "../../api/login/login";
import poor from "../../api/epe/epe.js";
import { ref, reactive, computed, onMounted } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";

export default {
  setup() {
    let data = reactive({
      src: "http://qisui.top/debunate/petIcon.jpeg",
      activeIndex: "1",
      money: "12",
      style: "",
      otherStyle: "",
      mb: [
        {
          name: "冀文静",
          position: "班长",
        },
      ],
      tz: [
        {
          name: "潘策",
          position: "团支书",
        },
      ],
      sb: [
        {
          name: "马昕宇",
          position: "生活班长",
        },
      ],
      hb: [
        {
          name: "杨尉",
          position: "伙食班长",
        },
        { name: "杨帆", position: "伙食班长" },
      ],
      xb: [
        {
          name: "段超",
          position: "学习班长",
        },
        { name: "李世婷", position: "学习班长" },
      ],
      tb: [
        {
          name: "彭国强",
          position: "体育班长",
        },
      ],
      wb: [
        {
          name: "战美钰",
          position: "文艺班长",
        },
      ],
    });
    const errorHandler = () => true;
    const vote = (name, position) => {
      ElMessageBox.confirm(`你将要投票给 ${name}，是否确认", "Warning`, {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          voteApi.vote(name, position).then((res) => {
            if (res.data.res == 4000) {
              ElMessage({
                type: "error",
                showClose: true,
                message: "请勿重复投票",
              });
            } else {
              ElMessage({
                type: "success",
                showClose: true,
                message: "投票成功，请勿重复点击",
              });
            }
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Delete canceled",
          });
        });
    };
    const bad = (name) => {
      ElMessageBox.confirm(`你将要投差评给 ${name}，是否确认", "Warning`, {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          poor.suggestionBox(name, "0", "被差评").then((res) => {

          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Delete canceled",
          });
        });
    };
    return {
      data,
      errorHandler,
      Message,
      vote,
      bad
    };
  },
};
</script>
  
  <style>
.card {
  background-image: url("http://qisui.top/debunate/lolback.jpg");
  background-position: top;
}
.card1 {
  background-image: url("http://qisui.top/debunate/lolback.jpg");
  background-position: center;
}
.card2 {
  background-image: url("http://qisui.top/debunate/lolback.jpg");
  background-position: right;
}
.card4{
  background-image: url("http://qisui.top/debunate/背景.jpg");
  background-size:100% 100%;
  background-position: center
}
.image {
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  margin-left: 40px;
}
.col-md-4 {
  margin-bottom: 20px;
}
.txt {
  font-size: 18px;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>