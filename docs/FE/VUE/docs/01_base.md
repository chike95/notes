# 一、知识简介

官网：<https://cn.vuejs.org/>


## vue-cli

全局安装Vue脚手架
```
npm install -g @vue/cli
```

产看 vue-cli 版本
```
vue -V
```

升级脚手架
```
npm update -g @vue/cli
```

### 创建项目
```
vue create xxx项目名

? Please pick a preset:
  Default ([Vue 3] babel, eslint)
  Default ([Vue 2] babel, eslint)
> Manually select features      // 选择手动配置

? Check the features needed for your project: (Press <space> to select, <a> to
toggle all, <i> to invert selection, and <enter> to proceed)
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
>(*) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing

Choose a version of Vue.js that you want to start the project with (Use arrow
keys)
> 3.x
  2.x

Use class-style component syntax? 【使用类风格的组件语法?】（选择：Y）

Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? 【使用Babel和TypeScript(现代模式需要，自动检测填充，置换JSX)? 】

Use history mode for router? (Requires proper server setup for index fallback in production)【使用历史模式的路由器?(需要为生产环境中的索引回退进行适当的服务器设置) 】

Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supportedby default): (Use arrow keys)
> Sass/SCSS (with dart-sass)
  Less
  Stylus

Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
> ESLint + Standard config
  ESLint + Prettier

Pick additional lint features: (Press <space> to select, <a> to toggle all,
<i> to invert selection, and <enter> to proceed)
 (*) Lint on save
>(*) Lint and fix on commit

Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
> In dedicated config files     // 单独的配置文件
  In package.json

Save this as a preset for future projects? (y/N) n

Pick the package manager to use when installing dependencies:
> Use PNPM
  Use NPM
```

