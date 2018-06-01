# 如何启动项目
npm i
npm start
# 项目描述
这是一个基于vue技术的单页SPA项目，模仿的时网易严选移动端项目，基本功能已经实现，还存在一些bug后续改善
通过模块化，组件化，工程化创建对象，
# 技术选型
1. vue-cli -- vue脚手架
2. vuex -- 管理状态类似于redux
3. vue-router -- vue的路由
4. axios -- 向后台发送数据
5. mockjs -- 前台模拟后台数据
6. stylus -- css与编译器
7. stylus-loader -- 按需加载
8. vue-lazyload -- 图片懒加载
9. better-scroll -- 必须超过容器大小才可以滑动
10. swiper -- 轮播插件
11. mint-ui -- 移动端的ui库
# 路由
1. 一级路由
  * 首页
  * 识物页
  * 分类
  * 购物车
  * 个人
  * 登录
  * 注册
2. 二级路由
  * 分类
  * 短信登录/email登录
# 组件 
1. alertTip

# use
1. 雪碧图
2. 字体图标

# 实现的功能
1. 适配 rem适配
  width=device-width -- 布局视口等于视觉视口
1. 点击跳转路由
3. 前台登录验证

# 未实现的功能
1. 识物页的小圆点
  1. 可以设置定时器 切换状态
2. 倒计时
3. 登录注册验证时的滑动验证

# 遇到的问题
1. 二维数组
2. better-scroll使用过程中的问题
  1. 移动端时手指滑动,设置左右滑动的时候，上下滑动不了
    * 解决 设置添加属性
3. swiper使用过程中遇到的问题
  1. 两翼留白，居中显示
    * 解决:添加配置项
  2. 单边显示下一个slide一部分
  3. 创建的时机
    1. mounted - 数据回来之后创建swiper对象
      dispatch的时候传入callback，数据收到之后调用回调函数，创建对象
    2. watch - 监视数据完成
4. 使用过程中
  1. 尽量用v-if判断后台数据有没有，否则虽然功能没问题但是控制台会报错，
5. 如何处理时间格式
  1. new Date(xx) -- 将需要处理的时间放进去
  2. getHour/getSecond/getMinite... -- 获取需要的时间
6. stylus
  1. 需要 同时下载stylus-loader -- 按需加载
7. mint-ui
  1. 下载时需要下载按需打包的插件
8. 从网易官网下载json数据
  * 数据获取错误
    1. 图片信息错误
9. 点击按钮到页面顶部
  * 
10. 过渡动画
  * 过渡动画要么自己触发，要么设置定时器
11. 文本两行，然后省略号
12. 某个子组件有的组件使用某个不使用
  * 在需要使用这个组组件的路由设置中，添加meta配置属性
  * 在子组件的最外层包裹器上添加 v-show判断 $route.meta.xx
13. 每次切换路由都到路由顶部
  * 在目标组件中设置，methods:{resetTo(){window.scrollTo(0,0)}}
    ·  created(){this.resetTo()}
14. 倒计时
  * 用vue插件vue-countdown

# 遗留的问题
1. 倒计时处理
2. 不用flex如何实现上下居中
3. 不通过手动触发怎么触发  过渡动画
  解决： 放到vue生命周期函数中
4. 登录注册没有设置后台服务器
  
# 前台正则验证
1. 验证短信验证码
  * /^\d{6}$/.test(message)
2. 验证手机号码
  * /^1\d{10}$/.test(phoneNumber)
3. 密码验证
  * /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
  * 最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
  
# 优化项目
1. 刚开始图片没收到显示loading图
  * 下载 vue-lazyloader
  * main.js 中引入
  * 然后引入需要的loading
  * 注册 --全局有了v-lazy标签
  * 那个图片需要懒加载就将src标签换成v-lazy标签
  * 注册使用 vueLazyload
     Vue.use(VueLazyload,{
       loading
     })  全局组件 有了v-lazy指令
2. 路由懒加载
  * 在index.js中
  * const FirstPage = () => import('../components/FirstPage/FirstPage')
3. 缓存路由组件对象 -- 不需要重新获取数据
4. 按需打包
5. 有的报undefined -- 需要判断v-if
6. 共用的css抽成混合
  * 一像素边框
  * reset.css
  * 清除浮动
7. mint-ui -- 实现按需打包
  * 下载插件
8. 解决保存历史号码的问题
  * css//input:
9. 设置浏览器title旁边的图标
  * build -> webpack.dev.conf.js
    new HtmlWebpackPlugin（{
    filename: '目标页面'
    template: ‘目标页面’
    inject: true
    favicon: 'icon address'
    }
  * static 放需要的图标
10. npm run build -report
  * 可视化图，查看项目打包情况各插件所占体积
  * 从而优化，换小体积库
11. 保存数据的方法
  * 给router-link添加标签 keep-alive
  * cookie
  * localStorage
