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
