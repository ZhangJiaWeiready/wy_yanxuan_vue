// ajax接口
import ajax from './ajax'
// 商品列表
export const reqCatelist = () => ajax('/cateList')
// 获取限时购信息
export const reqFlashSaleIndexVO = () => ajax('/flashSaleIndexVO')
// 轮播图信息
export const reqFocuslist = () => ajax('/focusList')
// 头部商品列表
export const reqHeadcatelist = () => ajax('/headCateList')
// 新品列表
export const reqNewitemlist = () => ajax('/newItemList')
// 网易政策列表
export const reqPolicydesclist = () => ajax('/policyDescList')
// 受欢迎的列表
export const reqPopularitemlist = () => ajax('/popularItemList')
// 福利社
export const reqSaleindexvo = () => ajax('/saleIndexVO')
// 品牌制造商列表
export const reqTaglist = () => ajax('/tagList')
// 专题精选
export const reqTopiclist = () => ajax('/topicList')

// 识物页
// 头部轮播
export const reqBanner = () => ajax('/banner')
// nav下的list
export const reqColumn = () => ajax('/column')
//为你推荐
export const reqRecommendOne = () => ajax('/recommendOne')
export const reqRecommendTwo = () => ajax('/recommendTwo')
export const reqRecommendThree = () => ajax('/recommendThree')
// 十点一刻
export const reqTenfifteen = () => ajax('/tenfifteen')
//严选珍品
export const reqZhenOne = () => ajax('/zhenOne')
export const reqZhenTwo = () => ajax('/zhenTwo')
export const reqZhenThree = () => ajax('/zhenThree')
//严选look
export const reqYxLook = () => ajax('/yxLook')
// 找更多
export const reqFindMore = () => ajax('/findMore')
// all cate
export const reqCate = () => ajax('/cate')

