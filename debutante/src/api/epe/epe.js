import request from '../../utils/requestEpe';
import qs from 'qs'
export default {
    // 首页 八股类型 
    getEssay() {
        return request({
            url: `/LoginDemo/epe/essay`,
            method: 'Get'
        })
    },
    //热点数据查询
    getHotData(essay) {
        return request({
            url: `/LoginDemo/epe/getHotData?essay=${essay}`,
            method: 'Get'
        })
    },
    // 二页 根据八股类型 搜索大小章节
    getChapter(essay) {
        return request({
            url: `/LoginDemo/epe/getChapter?essay=${essay}`,
            method: 'Get'
        })
    },
    // 三页 根据大章节 搜索小章节
    getSection(chapter) {
        return request({
            url: `/LoginDemo/epe/getSection?chapter=${chapter}`,
            method: 'Get'
        })
    },
    //内容页 根据小章节 搜索具体内容
    getTextArea(section, essay) {
        return request({
            url: `/LoginDemo/epe/getTextArea?section=${section}&essay=${essay}`,
            method: 'Get'
        })
    },
    //意见箱
    suggestionBox(uid, rateVal, textarea) {
        return request({
            url: `/LoginDemo/suggestionBox/suggestion?uid=${uid}&rateVal=${rateVal}`,
            method: 'POST',
            data: {textarea: textarea}
        })
    },
    //获取所有意见
    getSuggestions(){
        return request({
            url: `/LoginDemo/suggestionBox/getSuggestion`,
            method: 'Get'
        })
    },
    // 获取小说章节
    getNovelEssay(){
        return request({
            url: `/kuajie-chapter/getEssay`,
            method: 'Get'
        })
    },
    //获得对应小说内容
    getNovelText(pathId){
        return request({
            url: `/kuajie-chapter/getText?pathId=${pathId}`,
            method: 'Get'
        })
    }


}


