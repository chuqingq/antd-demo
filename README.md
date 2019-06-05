# antd-demo

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


### 怎么创建的第一个demo？

https://vue.ant.design/docs/vue/use-with-vue-cli-cn/
完整引入可以替换main.js上面部分：
```
import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

Vue.use(Antd)
```
下面还是要保留render的方式，否则有问题。

### electron

https://github.com/electron/electron
```
git clone https://github.com/electron/electron-quick-start
cd electron-quick-start
npm install
npm start
```

### 修改图标

https://github.com/electron/rcedit/releases


### TODO

1. DONE vue create的项目在vue.config.js中加入publicPath:"./"参数确保build出来的是相对路径
1. DONE 加入websocket服务端：nodejs+express-ws
1. TODO 通过websocket和后端交互，并把数据展示在前端
