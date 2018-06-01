/*
 mockjs 模拟后台数据
 */

import Mock from 'mockjs'
import data from './data'
import shiwu from './shiwu_data'
import cate from './cateContent'


// 首页 信息
Mock.mock('/cateList',{code:0,data: data.cateList})
Mock.mock('/flashSaleIndexVO',{code:0,data: data.flashSaleIndexVO})
Mock.mock('/focusList',{code:0,data: data.focusList})
Mock.mock('/headCateList',{code:0,data: data.headCateList})
Mock.mock('/newItemList',{code:0,data: data.newItemList})
Mock.mock('/policyDescList',{code:0,data: data.policyDescList})
Mock.mock('/popularItemList',{code:0,data: data.popularItemList})
Mock.mock('/saleIndexVO',{code:0,data: data.saleIndexVO})
Mock.mock('/tagList',{code:0,data: data.tagList})
Mock.mock('/topicList',{code:0,data: data.topicList})
// 识物
Mock.mock('/banner',{code:0,data: shiwu.banner})
Mock.mock('/column',{code:0,data: shiwu.column})
Mock.mock('/recommendOne',{code:0,data: shiwu.recommendOne})
Mock.mock('/recommendThree',{code:0,data: shiwu.recommendThree})
Mock.mock('/recommendTwo',{code:0,data: shiwu.recommendTwo})
Mock.mock('/tenfifteen',{code:0,data: shiwu.tenfifteen})
Mock.mock('/zhenOne',{code:0,data: shiwu.zhenOne})
Mock.mock('/zhenTwo',{code:0,data: shiwu.zhenTwo})
Mock.mock('/zhenThree',{code:0,data: shiwu.zhenThree})
Mock.mock('/findMore',{code:0,data: shiwu.findMore})
Mock.mock('/yxLook',{code:0,data: shiwu.yxLook})

// 商品列表
Mock.mock('/cate',{code:0,data: cate.cates})
