## 项目概述

这是一个基于 React 开发的后台系统，主要包含登录、注册、埋点统计和个人设置等模块。

## 功能模块

- **登录** - 允许用户通过验证身份来访问系统。
- **注册** - 新用户可以创建账户。
- **埋点统计** - 收集和分析用户行为数据，用于优化用户体验。
- **个人设置** - 用户可以修改个人信息和系统设置。

## 技术栈

- **React** - 用于构建用户界面的 JavaScript 库。
- **Redux** - 状态管理工具，帮助管理应用的状态。
- **React Router** - 用于处理应用中的路由。
- **Axios** - 用于处理 HTTP 请求的库。
- **SCSS** - 用于样式表的扩展语言，提供更强大的样式功能。
- **Ant Design** - 企业级 UI 设计语言和 React 组件库。
- **ECharts** - 用于数据可视化的 JavaScript 库。
- **Webpack** - 模块打包工具，用于打包 JavaScript 应用。

## 目录结构

- **api/** - 存放与后端 API 交互的域名配置。
  - **path/** - 包含不同环境下的 API 路径配置文件。
    - **dev.js** - 开发环境的 API 路径配置。
    - **pro.js** - 生产环境的 API 路径配置。
- **config/** - 存放项目的配置文件，如 Webpack 配置。
- **src/**
  - **actions/** - 存放 Redux actions，用于管理应用状态。
  - **assets/** - 存放静态资源，如css、图片、字体等。
  - **axios/** - 封装 Axios 请求的配置和拦截器。
  - **components/** - 存放可复用的 React 组件。
  - **mock/** - 存放 mock 数据。
  - **reducers/** - 存放 Redux reducers，用于管理应用状态。
  - **route/** - 存放路由相关的配置信息。
    - **authorized/**
      - **login.js** - 登录拦截
  - **utils/** - 存放工具函数和常用方法。
  - **views/** - 存放页面组件。
  - **App.jsx** - React 应用的根组件，负责渲染应用的主体结构。
  - **index.js** - 应用的主路由文件，集中管理所有路由配置。

## 项目启动步骤

1. **克隆项目**  
   使用 Git 克隆项目到本地：
   ```bash
   git clone <项目的 Git 仓库地址>
   ```

2. **安装依赖**  
   进入项目目录并安装依赖：
   ```bash
   cd <项目目录>
   npm install
   ```

3. **启动开发服务器**  
   使用以下命令启动开发服务器：
   ```bash
   npm start
   ```
   访问地址：http://localhost:8089

4. **打包项目**  
    使用以下命令打包项目：
    ```bash
    npm run build
    ```

#### 开发建议

- 使用 jsx 作为 React 组件的扩展名。
- 组件文件命名规则：KebabCase.jsx。
- js、scss 文件命名规则：kebab-case.js/scss。
- img 文件命名规则：kebab_case.png。

#### 资源链接

- 图片在线压缩网站
  https://tinypng.com/
