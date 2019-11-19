//引入依赖插件
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//引入路由列表
import router from './router/index.js'
//手动关联install,告知vue使用VueRouter
Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')