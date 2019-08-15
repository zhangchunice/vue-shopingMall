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

## 制作首页App组件（使用vant组件库）
1.完成Header区域
2.完成底部Tabbar区域,采用路由切换的方式
3.要再中间区域放一个router-view，来展示路由匹配到的组件

###首页制作
1.1 轮播图布局（swipe）
1.2 加载首页轮播图数据（使用axios）
1.3 更改首页九宫格样式（grid）
    van-image 只能使用图片连接--http
    img 使用本地图片地址，要用require()导入图片  例：require('../../assets/menu1.png')
1.4