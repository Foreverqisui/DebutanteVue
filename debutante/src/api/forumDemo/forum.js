import request from '../../utils/requestFourm';

export default {
    // 发布帖子
    publishCommont(title, message) {
        return request({
            url: `/admin/ForumDemo/discuss-post/publishPosts?title=${title}&message=${message}`,
            method: 'POST',
            data: title, message
        })
    },
    // 帖子详情
    showCommont(title, userId) {
        return request({
            url: `/admin/ForumDemo/discuss-post/findByToken/toShow?title=${title}&userId=${userId}`,
            method: 'GET',
        })
    },
    //联合查询获取信息
    findAll() {
        return request({
            url: `/admin/ForumDemo/discuss-post/findAll`,
            method: 'GET',
        })
    },
    //根据discuss表的id匹配查询comment的评论数据
    findCommentById(id) {
        return request({
            url: `/admin/ForumDemo/discuss-post/findCommentById?id=${id}`,
            method: 'GET',
        })
    },
    //回复作者评论
    replayAuthor(entityId, content) {
        return request({
            url: `/admin/ForumDemo/discuss-post/replayAuthor?entityId=${entityId}&content=${content}`,
            method: 'POST',
        })
    },
    //点赞操作
    like(entityType,entityId) {
        return request({
            url: `/admin/ForumDemo/discuss-post/like?entityType=${entityType}&entityId=${entityId}`,
            method: 'POST',
        })
    },
    //点赞数量查询
    likeCount(entityType,entityId) {
        return request({
            url: `/admin/ForumDemo/discuss-post/like/count?entityType=${entityType}&entityId=${entityId}`,
            method: 'Get',
        })
    },
    //付费功能 修改帖子等级
    updateType(title,username,type,uid) {
        return request({
            url: `/admin/ForumDemo/discuss-post/updateType?title=${title}&username=${username}&type=${type}&uid=${uid}`,
            method: 'POST',
        })
    },
    //获取发给我的私信的方法
    getSender(userId) {
        return request({
            url: `/ForumDemo/message/getSender?userId=${userId}`,
            method: 'GET',
        })
    },
    //获取我发的私信的方法
    getRecipient(userId){
        return request({
            url: `/ForumDemo/message/getRecipient?userId=${userId}`,
            method: 'GET',
        })
    },
    //获取系统私信
    getSysMessage(userId){
        return request({
            url: `/ForumDemo/message/getSysMessage?userId=${userId}`,
            method: 'GET',
        })
    },
    //回复私信的方法
    replyMessage(username,userId,content,ocontent){
        return request({
            url: `/ForumDemo/message/replyMessage?username=${username}&userId=${userId}&content=${content}&ocontent=${ocontent}`,
            method: 'Post',
        })
    },
    //发布系统私信的方法
    sendSysMessage(content){
        return request({
            url: `/ForumDemo/message/systemMessage?content=${content}`,
            method: 'POST',
        })
    },
    //是否存在系统消息提醒功能
    getSys(userId){
        return request({
            url: `/ForumDemo/message/getSys?userId=${userId}`,
            method: 'GET',
        })
    }
}


