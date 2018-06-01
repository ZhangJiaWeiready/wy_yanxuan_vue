这是一个vue项目
# 启动项目

# 用到的插件
1. vue-cli -- vue脚手架
2. vuex -- 管理状态类似于redux
3. vue-router -- vue的路由
4. axios -- 向后台发送数据
5. mockjs -- 前台模拟后台数据
6. stylus -- css与编译器
7. stylus-loader -- 按需加载
7. vue-lazyload -- 图片懒加载
8. better-scroll -- 必须超过容器大小才可以滑动
9. swiper -- 轮播插件
10. mint-ui -- 移动端的ui库
# 路由
1. 

# 组件 
1. 

# use
1. 雪碧图
2. 字体图标

# 实现的功能
1. 点击跳转路由

# 未实现的功能
1. 识物页的小圆点
  1. 可以设置定时器 切换状态
2. 倒计时
3. 

# 遇到的问题
1. 二维数组
2. better-scroll使用过程中的问题
3. swiper使用过程中遇到的问题
4. 使用过程中
  1. 尽量用v-if判断后台数据有没有，否则虽然功能没问题但是控制台会报错，
5. 如何处理时间格式
  1. new Date(xx) -- 将需要处理的时间放进去
  2. getHour/getSecond/getMinite... -- 获取需要的时间
6. stylus
  1. 需要 同时下载stylus-loader -- 按需加载
7. mint-ui
  1. 下载时需要下载按需打包的插件
# 遗留的问题
1. 倒计时处理
2. 不用flex如何实现上下居中
3. 不通过手动触发怎么触发  过渡动画
  解决： 放到vue生命周期函数中
