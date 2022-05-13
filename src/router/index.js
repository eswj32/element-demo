import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main.vue"),
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('../views/home')
      },
      {
        path:'/user',
        name:'user',
        component:()=>import('../views/user')
      },
      {
        path:'/mall',
        name:'mall',
        component:()=>import('../views/mall')
      },
      {
        path:'/page1',
        name:'page1',
        component:()=>import('../views/other/pageOne.vue')
      },
      {
        path:'/page2',
        name:'page2',
        component:()=>import('../views/other/pageTwo.vue')
      }
    ]
  },
  // {
  //   path:"/user",
  //   name:"User",
  //   component:() => import('../views/User.vue')
  // }
];

const router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
