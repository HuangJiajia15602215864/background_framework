# background_framework（vue.js + Element UI）

> 这是一个自建极简的基于vue.js框架的后台管理系统框架，以便后期的项目复用并快速进行业务开发。
引入 Element UI组件库 & axios的HTTP库 & iconfont图标等。


## 功能清单
- 1、国际化
- 2、拖拽排序
- 3、数字滚动
- 4、密码加密
- 5、全局过滤器
- 6、全局函数


## 组件清单
- 1、表格（包含分页器）
- 2、表单


## 页面清单
- 1、注册（多种风格：黑底白字、白底、图片背景）
- 2、登录（多种风格：黑底白字、白底、图片背景）
- 3、首页（多种风格：用户入口、数据面板）
- 4、后台管理基础：增删改查页（表单+表格+导出表格）
- 5、


## 个性化配置
- 管理系统名称（在src/settings.js中的title）
- 管理系统图标（在public/favicon.png更换图标）
- 开发端口（在vue.config.js修改）
- Element UI颜色主题（在src/styles/element-variables.scss中更换）
- 侧边栏颜色（在src/styles/variables.scss中更换）


## 借鉴项目
- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)


## 构建命令行
```bash
# 克隆项目
git clone https://github.com/HuangJiajia15602215864/background_framework

# 进入项目目录
cd background_framework

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```