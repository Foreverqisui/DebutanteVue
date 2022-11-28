import request from '../../utils/request';

export default {
    // 登录
    login(userInfo) {
        return request({
            url: `/admin/debutante/login`,
            method: 'POST',
            data: userInfo
        })
    },
    //根据token登录
    loginByToken(userInfo) {
        return request({
            url: `/admin/debutante/loginByToken`,
            method: 'POST',
            data: userInfo
        })
    },
    //根据id查询
    findById(id) {
        return request({
            url: `/admin/debutante/findLoginById/${id}`,
            method: 'GET',
        })
    },
    //根据userId查询用户名
    findByUserId(uid){
        return request({
            url: `/admin/debutante/findLoginByUid/${uid}`,
            method: 'GET'
        })
    },
    //根据uid查询userId
    getUserIdByUid(uid){
        return request({
            url: `/admin/debutante/getUserIdByUid?uid=${uid}`,
            method: 'GET'
        })
    },
    //oss文件上传
    uploadFile(file,id) {
        return request({
            url: `/api/oss/file/uploadFile/${id}`,
            method: 'POST',
            data: file
        })
    },
    //注册功能
    register(formItem) {
        return request({
            url: `/admin/debutante/register`,
            method: 'POST',
            data: formItem
        })
    },
    //根据token获取用户信息
    getUserInfoByToken() {
        return request({
            url: `/admin/debutante/getByToken`,
            method: "GET"
        })
    },
    //分页排行榜
    uploadForm(current, limit, formInfo) {
        return request({
            url: `/admin/debutante/upLoadDesc/${current}/${limit}`,
            method: "POST",
            data: formInfo
        })
    },
    //更新上传时间
    uploadTime(uploadTime) {
        return request({
            url: `/admin/debutante/uploadTime`,
            method: "POST",
            data: uploadTime
        })
    },
    //打卡功能
    punch() {
        return request({
            url: `/admin/debutante/punch`,
            method: "POST",
        })
    },
    //修改用户名 密码 forumId
    updateUsernameByUid(uid, username) {
        return request({
            url: `/admin/debutante/updateUsernameByUid?uid=${uid}&username=${username}`,
            method: 'Post'
        })
    },
    updatePasswordByUid(uid, password) {
        return request({
            url: `/admin/debutante/updatePasswordByUid?uid=${uid}&password=${password}`,
            method: 'Post'
        })
    },
    updateForumIdByUid(uid, forumId) {
        return request({
            url: `/admin/debutante/updateForumIdByUid?uid=${uid}&forumId=${forumId}`,
            method: 'Post'
        })
    },
    //统计当前用户私信数量
    getMessageCount(userId){
        return request({
            url: `/admin/debutante/countMessage?toId=${userId}`,
            method: 'Get'
        })
    },
    //投票
    vote(username,groupPosition){
        return request({
            url: `/admin/debutante/vote?username=${username}&groupPosition=${groupPosition}`,
            method: 'POST'
        })
    },
    //查询结果
    getVote(position){
        return request({
            url: `/admin/debutante/getVote?position=${position}`,
            method:"GET"
        })
    }


}