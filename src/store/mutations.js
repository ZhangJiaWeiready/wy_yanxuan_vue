import Vue from 'vue'
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
  RECEIVEFINDMORE,
  RECEIVERECOMMENDONE,
  RECEIVERECOMMENDTHREE,
  RECEIVERECOMMENDTWO,
  RECEIVETENFIFTEEN,
  RECEIVEYXLOOK,
  RECEIVEZHENONE,
  RECEIVEZHENTWO,
  RECEIVEZHENTHREE,
  RECAIVECATE

} from './mutation-type'


export default {// 同名函数简写的方式
  [RECEIVECATELIST] (state,{cateList}){
    state.cateList = cateList
  },
  [RECEIVEFLASHSALEINDEXVO] (state,{flashSaleIndexVO}){
    state.flashSaleIndexVO = flashSaleIndexVO
  },
  [RECEIVEFOCUSLIST] (state,{focusList}){
    state.focusList = focusList
  },
  [RECEIVEHEADCATELIST] (state,{headCateList}){
    state.headCateList = headCateList
  },
  [RECEIVENEWITEMLIST] (state,{newItemList}){
    state.newItemList = newItemList
  },
  [RECEIVEPOLICYDESCLIST] (state,{policyDescList}){
    state.policyDescList = policyDescList
  },
  [RECEIVEPOPULARITEMLIST] (state,{popularItemList}){
    state.popularItemList = popularItemList
  },
  [RECEIVESALEINDEXVO] (state,{saleIndexVO}){
    state.saleIndexVO = saleIndexVO
  },
  [RECEIVETAGLIST] (state,{tagList}){
    state.tagList = tagList
  },
  [RECEIVETOPICLIST] (state,{topicList}){
    state.topicList = topicList
  },

  [RECEIVEBANNER] (state,{banner}){
    state.banner= banner
  },
  [RECEIVECOLUMN] (state,{column}){
    state.column= column
  },

  [RECEIVERECOMMENDONE] (state,{recommendOne}){
    state.recommendOne= recommendOne
  },

  [RECEIVERECOMMENDTWO] (state,{recommendTwo}){
    state.recommendTwo= recommendTwo
  },
  [RECEIVERECOMMENDTHREE] (state,{recommendThree}){
    state.recommendThree= recommendThree
  },
  [RECEIVETENFIFTEEN] (state,{tenfifteen}){
    state.tenfifteen= tenfifteen
  },

  [RECEIVEZHENONE] (state,{zhenOne}){
    state.zhenOne= zhenOne
  },
  [RECEIVEZHENTWO] (state,{zhenTwo}){
    state.zhenTwo= zhenTwo
  },
  [RECEIVEZHENTHREE] (state,{zhenThree}){
    state.zhenThree= zhenThree
  },
  [RECEIVEFINDMORE] (state,{findMore}){
    state.findMore= findMore
  },
  [RECEIVEYXLOOK] (state,{yxLook}){
    state.yxLook= yxLook
  },
  [RECAIVECATE] (state,{cates}){
    state.cates = cates
  }
}
