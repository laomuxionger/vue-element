import Vue from "vue";
import VueRouter from "vue-router";


// 引入组件
import home from "../views/home/index.vue";
import about from "../views/second/index.vue";
import three from "../views/third/index.vue";

Vue.use(VueRouter)
//定义路由列表
const routes = [{
    path: "/home",
    component: home
  },
  {
    path: "/about",
    component: about
  },
  {
    path: "/three",
    component: three
  }
]

var router = new VueRouter({
  routes
})

export default router;