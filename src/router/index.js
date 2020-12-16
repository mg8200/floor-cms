import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: () => import("../components/user/login.vue"),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../components/home/home.vue"),
    children: [{
        path: '/index',
        name: "homeIndex",
        component: () => import("../components/home/index.vue")
      },
      {
        path: '/userManagement/averageUser',
        name: "averageUser",
        component: () => import("../components/userManagement/averageUser.vue")
      },
      {
        path: '/indexManagement/swiperManagement',
        name: "swiperManagement",
        component: () => import("../components/indexManagement/swiperManagement.vue")
      },
      {
        path: '/indexManagement/uploadSwiper',
        name: "uploadSwiper",
        component: () => import("../components/indexManagement/uploadSwiper.vue")
      },
    ]
  }
]


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem("token");
  if (to.name == 'login') {
    sessionStorage.removeItem('token');
    next()
  } else {
    if (token) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  }
})

export default router