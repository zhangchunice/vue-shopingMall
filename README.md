# vue-cms

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 尝试在手机上预览项目
1. 保证手机和开发的电脑处于同一个WIFI环境中，也就是说手机能够访问到电脑的IP

## 配置移动端适配
1. 安装npm install postcss-pxtorem --save-dev
       npm i -S amfe-flexible
2. 在postcss.config.js添加
      ```
      module.exports = {
        plugins: {
          'autoprefixer': {
            browsers: ['Android >= 4.0', 'iOS >= 7']
          },
          'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*']
          }
        }
      }
      ```
3. 在main.js中添加 import 'amfe-flexible/index.js'

## 制作首页App组件（使用vant组件库）
1.完成Header区域van-nav-bar
2.完成底部Tabbar区域,采用路由切换的方式van-tabbar
3.要再中间区域放一个router-view，来展示路由匹配到的组件

### 首页制作   
1. 轮播图布局（swipe）   
2. 加载首页轮播图数据（使用axios）   
3. 更改首页九宫格样式（grid）
    van-image 只能使用图片连接--http
    img 使用本地图片地址
      * 在/src/assets文件夹下要用require()导入图片  例：require('../../assets/menu1.png')
      * 在/public/images文件夹下直接使用，例：'/images/menu1.png'
    可以直接定义数组，使用van-grid-item在外面包裹 嵌套循环，icon、text、to要用v-bind绑定

### 改造首页链接新闻列表页面
1. 添加路由链接    
2. 

### 添加新闻列表详情页
1. 在列表页将div改造成router-link,将tag="div"依旧渲染为div   
2. 传递参数
  * 1. to里传参，router-link里绑定属性:to="'/home/newsinfo/'+item.id"传参时要拼接字符串   
     2. 在router.js中添加路由匹配规则，要添加参数path:'/home/newsinfo/:id'接收参数
     3. 详情页参数为this.$route.params.id
  * 1. 利用name传参，router里绑定属性:to="'/home/newsinfo?id='传参时要用?拼接参数
    2. 在router.js中添加 "path: '/home/newsinfo', name: '/home/newsinfo'
    3. 详情页参数为this.$route.query.id
  * 导航式编程

### 单独封装一个评论子组件（Comment.vue）
1. 先创建单独的Comment.vue组件模板
2. 在需要使用的组件页面中导入Comment组件
3. 在父组件中，使用components属性，将导入的Comment组件，注册为自己的子组件
4. 将子组件注册成功后，以标签形式引用

### 获取所有的评论显示到页面
### 发表评论
1. 把文本框做数据双向绑定
2. 发表评论按钮添加事件
3. 检验评论内容是否为空
4. 校验通过调用接口发送到服务器
5. 刷新列表，查看最新评论
  + pageIndex为2的时候，如果调用getCommentss方法刷新列表，只能得到第二页的10条数据，无法查看到第一页10条数据
  + 所以换一种方法，当评论发表成功，直接往评论数组拼接最新评论，调用数组的unshift方法