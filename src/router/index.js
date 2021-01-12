import { createRouter, createWebHashHistory } from 'vue-router'
const HelloWorld = () => import(/* webpackChunkName: "HelloWorld" */ "../views/HelloWorld.vue");
const LiveCycle = () => import(/* webpackChunkName: "LiveCycle" */ "../views/LiveCycle.vue");
const TodoList = () => import(/* webpackChunkName: "TodoList" */ "../views/TodoList.vue");
const VuexShow = () => import(/* webpackChunkName: "VuexShow" */ "../views/VuexShow.vue");
const PluginShow = () => import(/* webpackChunkName: "PluginShow" */ "../views/PluginShow.vue");
const Watch = () => import(/* webpackChunkName: "Watch" */ "../views/Watch.vue");

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        name: '欢迎页-综合演示'
      }
    }, {
      path: '/live-cycle',
      name: 'LiveCycle',
      component: LiveCycle,
      meta: {
        name: '生命周期演示'
      }
    }, {
      path: '/todo-list',
      name: 'TodoList',
      component: TodoList,
      meta: {
        name: '简单todolist演示'
      }
    }, {
      path: '/vuex-show',
      name: 'VuexShow',
      component: VuexShow,
      meta: {
        name: 'vuex演示'
      }
    }, {
      path: '/plugin-show',
      name: 'PluginShow',
      component: PluginShow,
      meta: {
        name: '插件演示'
      }
    }, {
      path: '/watch',
      name: 'Watch',
      component: Watch,
      meta: {
        name: 'watch 演示'
      }
    }]
})
