# real_vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

#### 项目构建步骤
 1. 安装`node`,安装好后打开cmd,使用命令 `node -v` 查看版本号
 2. 如果npm速度慢可以使用淘宝`npm`镜像 `npm install -g cnpm --registry=https://registry.npm.taobao.org`
 3. 安装全局`vue-cli`脚手架 `npm install --global vue-cli`
 4. 使用 `vue cli`创建项目 `vue init webpack your-project-name`,根据自己的需求选择配置项
 5. 进入项目文件夹 `cd your-project-name`,使用 `npm run dev`
 6. 在浏览器输入 `localhost:8081`

> Vue Router
 - 去掉URL中的#，将 router配置下面的 `mode`改为`history`

> 风格指南
 - 单文件组件推荐使用短横线连接命名，例如 `"item-list.vue"`或者开头大写``"ItemList.vue"``
