import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        //路径选择
        path: "/",
        //路径名称
        name: "Login",
        //组件导入
        component: () => import("../view/Login.vue"),
    },
    {
        //隐藏路由方式
        path: '/loginIndex',
        name: "loginIndex",
        component: () => import("../view/Index.vue"),
        meta: { title: '数据回显' },
        hidden: true
    },
    //404报错
    {
        path: "/:catchAll(.*)",
        name: "404",
        component: () => import("../components/404.vue"),
    },
    //注册页面
    {
        path: "/form",
        name: "form",
        component: () => import("../view/Form.vue"),
    },
    //测试页面
    {
        path: "/test",
        name: "test",
        component: () => import("../components/ShengDanOldMan.vue"),
    },
    //排行榜页面
    {
        path: "/uploadForm",
        name: "uploadForm",
        component: () => import("../view/Leaderboard.vue"),
    },
    //秒杀商品页面
    {
        path: "/to_miaoshagoods",
        name: "miaoshagoods",
        component: () => import("../view/orderShop/GoodsList.vue")
    },
    //秒杀详情页
    // {
    //     path: "/to_detail",
    //     name: "to_detail",
    //     component: () => import("../view/orderShop/Detail.vue"),
    // },
    //订单详情页
    {
        path: "/to_order",
        name: "to_order",
        component: () => import("../view/orderShop/Order.vue"),
    },
    //论坛详情页
    {
        path: "/to_forum",
        name: "to_forum",
        component: () => import("../view/ForumModel/Forum.vue"),
    },
    // 用户信息
    {
        //路径选择
        path: "/forum/userInfo",
        //路径名称
        name: "forumUserInfo",
        //组件导入
        component: () => import("../view/ForumModel/userInfo.vue"),
    },
    // 文章描述
    {
        //路径选择
        path: "/forum/description",
        //路径名称
        name: "forumDescription",
        //组件导入
        component: () => import("../view/ForumModel/Description.vue"),
    },
    // 发布帖子
    {
        //路径选择
        path: "/forum/publishWord",
        //路径名称
        name: "forumPublishWords",
        //组件导入
        component: () => import("../view/ForumModel/PublishWord.vue"),
    },
    {
        //路径选择
        path: "/forum/message",
        //路径名称
        name: "message",
        //组件导入
        component: () => import("../view/ForumModel/Message.vue"),
    },
    //八股首页 类型
    {
        //路径选择
        path: "/epe/first",
        //路径名称
        name: "epeStart",
        //组件导入
        component: () => import("../view/eight_part_essay/EpeStart.vue"),
    },
    //八股二页 大章节
    {
        //路径选择
        path: "/epe/chapter",
        //路径名称
        name: "epeChapter",
        //组件导入
        component: () => import("../view/eight_part_essay/EpeChapter.vue"),
    },
    //八股三页小章节
    {
        //路径选择
        path: "/epe/chapter/section",
        //路径名称
        name: "epeSection",
        //组件导入
        component: () => import("../view/eight_part_essay/EpeSection.vue"),
    },
    //八股 具体内容
    {
        //路径选择
        path: "/epe/chapter/section/textArea",
        //路径名称
        name: "epeTextArea",
        //组件导入
        component: () => import("../view/eight_part_essay/EpeTextArea.vue"),
    },
    //意见箱
    {
        //路径选择
        path: "/suggestionBox",
        //路径名称
        name: "suggestionBox",
        //组件导入
        component: () => import("../view/commoment/SuggestionBox.vue"),
    },
    //私信页面
    {
        //路径选择
        path: "/directMessage",
        //路径名称
        name: "directMessage",
        //组件导入
        component: () => import("../view/commoment/DirectMessage.vue"),
    },
    //私信发送
    {
        //路径选择
        path: "/sendMessage",
        //路径名称
        name: "sendMessage",
        //组件导入
        component: () => import("../view/commoment/SendMessage.vue"),
    },
    //成功计时页
    {

        //路径选择
        path: "/clocked_page",
        //路径名称
        name: "clocked_page",
        //组件导入
        component: () => import("../components/ClockedPage.vue"),
    },
    //成功计时页
    {

        //路径选择
        path: "/wclocked_page",
        //路径名称
        name: "wclocked_page",
        //组件导入
        component: () => import("../components/WClockedPaged.vue"),
    },
    //管理登录
    {

        //路径选择
        path: "/4f836979-82c7-4f89-8e34-551f2a0f17ad/admin",
        //路径名称
        name: "4f836979-82c7-4f89-8e34-551f2a0f17ad_admin",
        //组件导入
        component: () => import("../view/admin/admin.vue"),
        meta: {
            requireAuth: true,
        },
    },
    //管理员页面
    {

        //路径选择
        path: "/4f836979-82c7-4f89-8e34-551f2a0f17ad/admin/index",
        //路径名称
        name: "4f836979-82c7-4f89-8e34-551f2a0f17ad_admin_index",
        //组件导入
        component: () => import("../view/admin/adminIndex.vue"),
    },
    //bokeIndex
    {

        //路径选择
        path: "/bokeIndex",
        //路径名称
        name: "bokeIndex",
        //组件导入
        component: () => import("../view/admin/bokeIndex.vue"),
    },
    //跨界novel
    {
        //路径选择
        path: "/kuajieIndex",
        //路径名称
        name: "kuajieIndex",
        //组件导入
        component: () => import("../view/boke/kuajieIndex.vue"),
    },
    {
        //路径选择
        path: "/novel/:id",
        //路径名称
        name: "novel",
        //组件导入
        component: () => import("../view/boke/kuajieNovelText.vue"),
    },
    //catHome
    {

        //路径选择
        path: "/catHome",
        //路径名称
        name: "catHome",
        //组件导入
        component: () => import("../components/CatHome.vue"),
    },
    //随手记
    {
        path: "/tally/newDo",
        name: "newDo",
        component: () => import("../view/withNotes/withNotesTallyNewDo.vue")
    },
    //投票首页
    {
        path: "/vote/index",
        name: "voteIndex",
        component: () => import("../view/vote/voteIndex.vue")
    },
    //投票结果页
    {
        path: "/vote/result",
        name: "voteResult",
        component: () => import("../view/vote/voteResult.vue")
    },
 
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;