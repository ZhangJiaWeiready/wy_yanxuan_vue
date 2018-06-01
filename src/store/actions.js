
import {
  RECEIVECATELIST,
  RECEIVEFLASHSALEINDEXVO,
  RECEIVEFOCUSLIST,
  RECEIVEHEADCATELIST,
  RECEIVENEWITEMLIST,
  RECEIVEPOLICYDESCLIST,
  RECEIVEPOPULARITEMLIST,
  RECEIVESALEINDEXVO,
  RECEIVETAGLIST,
  RECEIVETOPICLIST,
  RECEIVEBANNER,
  RECEIVECOLUMN,
  RECEIVERECOMMENDONE,
  RECEIVERECOMMENDTHREE,
  RECEIVERECOMMENDTWO,
  RECEIVETENFIFTEEN,
  RECEIVEZHENONE,
  RECEIVEZHENTWO,
  RECEIVEZHENTHREE,
  RECEIVEYXLOOK,
  RECEIVEFINDMORE,
  RECAIVECATE
} from './mutation-type'
import {
  reqCatelist,
  reqFlashSaleIndexVO,
  reqFocuslist,
  reqHeadcatelist,
  reqNewitemlist,
  reqPolicydesclist,
  reqPopularitemlist,
  reqSaleindexvo,
  reqTaglist,
  reqTopiclist,
  reqBanner,
  reqColumn,
  reqRecommendOne,
  reqRecommendThree,
  reqRecommendTwo,
  reqTenfifteen,
  reqZhenOne,
  reqZhenTwo,
  reqZhenThree,
  reqYxLook,
  reqFindMore,
  reqCate
} from '../api'
export default {
  async getCateList({commit}){
    // 发送ajax请求
    const result = await reqCatelist()
    if (result.code ===0){
      const cateList = result.data
      commit(RECEIVECATELIST,{cateList})
    }
  },
  async getFlashSaleIndexVO({commit},callBack){
    // 发送ajax请求
    const result = await reqFlashSaleIndexVO()
    if (result.code ===0){
      const flashSaleIndexVO = result.data
      commit(RECEIVEFLASHSALEINDEXVO,{flashSaleIndexVO})
    }
    callBack&&callBack()
  },
  async getFocusList({commit},callback){
    // 发送ajax请求
    const result = await reqFocuslist()
    if (result.code ===0){
      const focusList = result.data
      commit(RECEIVEFOCUSLIST,{focusList})
    }
    callback&&callback()
  },
  async getHeadCateList ({commit},callback) {
    // 发送ajax请求
    const result = await reqHeadcatelist()
    if (result.code ===0){
      const headCateList = result.data
      commit(RECEIVEHEADCATELIST,{headCateList})
    }
    callback&&callback()
  },
  async getNewItemList ({commit},callBack) {
    // 发送ajax请求
    const result = await reqNewitemlist()
    if (result.code ===0){
      const newItemList = result.data
      commit(RECEIVENEWITEMLIST,{newItemList})
    }
    callBack&&callBack()
  },
  async getPolicyDescList ({commit}) {
    // 发送ajax请求
    const result = await reqPolicydesclist()
    if (result.code ===0){
      const policyDescList = result.data
      commit(RECEIVEPOLICYDESCLIST,{policyDescList})
    }
  },
  async getPopularItemList ({commit},callBack) {
    // 发送ajax请求
    const result = await reqPopularitemlist()
    if (result.code ===0){
      const popularItemList = result.data
      commit(RECEIVEPOPULARITEMLIST,{popularItemList})
    }
    callBack&&callBack()
  },
  async getSaleIndexVO ({commit}) {
    // 发送ajax请求
    const result = await reqSaleindexvo()
    if (result.code ===0){
      const saleIndexVO = result.data
      commit(RECEIVESALEINDEXVO,{saleIndexVO})
    }
  },
  async getTagList ({commit}) {
    // 发送ajax请求
    const result = await reqTaglist()
    if (result.code ===0){
      const tagList = result.data
      commit(RECEIVETAGLIST,{tagList})
    }
  },
  async getTopicList ({commit},callBack) {
    // 发送ajax请求
    const result = await reqTopiclist()
    if (result.code ===0){
      const topicList = result.data
      commit(RECEIVETOPICLIST,{topicList})
    }
    callBack&&callBack()
  },

  async getBanner ({commit},callBack) {
    //发送ajax
    const result = await reqBanner()
    if(result.code === 0){
      const banner  = result.data
      commit(RECEIVEBANNER,{banner} )
    }
    callBack&&callBack()
  },
  async getColumn ({commit},callBack) {
    //发送ajax
    const result = await reqColumn()
    if(result.code===0){
      const column = result.data
      commit(RECEIVECOLUMN , {column})
    }
    callBack&&callBack()
  },
  async getRecommendOne ({commit}) {
    //发送ajax
    const result = await reqRecommendOne()
    if(result.code===0){
      const recommendOne = result.data
      commit( RECEIVERECOMMENDONE, {recommendOne})
    }
  },
  async getRecommendTwo ({commit}) {
    //发送ajax
    const result = await reqRecommendTwo()
    if(result.code===0){
      const recommendTwo  = result.data
      commit( RECEIVERECOMMENDTWO,{recommendTwo} )
    }
  },
  async getRecommendThree ({commit}) {
    //发送ajax
    const result = await reqRecommendThree()
    if(result.code===0){
      const recommendThree = result.data
      commit(RECEIVERECOMMENDTHREE , {recommendThree})
    }
  },
  async getTenfifteen ({commit},callBack) {
    //发送ajax
    const result = await reqTenfifteen()
    if(result.code===0){
      const tenfifteen = result.data
      commit( RECEIVETENFIFTEEN, {tenfifteen})
    }
    callBack&&callBack()
  },
  async getZhenOne ({commit}) {
    //发送ajax
    const result = await reqZhenOne()
    if(result.code===0){
      const zhenOne = result.data
      commit( RECEIVEZHENONE, {zhenOne})
    }
  },
  async getZhenTwo ({commit}) {
    //发送ajax
    const result = await reqZhenTwo()
    if(result.code===0){
      const zhenTwo = result.data
      commit(RECEIVEZHENTWO , {zhenTwo})
    }
  },
  async getZhenThree ({commit}) {
    //发送ajax
    const result = await reqZhenThree()
    if(result.code===0){
      const zhenThree = result.data
      commit(RECEIVEZHENTHREE , {zhenThree})
    }
  },
  async getYxLook ({commit},callBack) {
    //发送ajax
    const result = await reqYxLook()
    if(result.code===0){
      const yxLook = result.data
      commit(RECEIVEYXLOOK ,{yxLook} )
    }
    callBack&&callBack()
  },
  async getFindMore ({commit}) {
    //发送ajax
    const result = await reqFindMore()
    if(result.code===0){
      const findMore = result.data
      commit(RECEIVEFINDMORE ,{findMore})
    }
  },
  async getCates ({commit}) {
    //发送ajax
    const result = await reqCate()
    if(result.code===0){
      const cates = result.data
      commit(RECAIVECATE ,{cates})
    }
  },

}
