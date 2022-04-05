import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowView from '../views/ShowView.vue'
//중첩라우터
import DoubleView from '../views/DoubleView.vue'
import DoubleDynamic from "../views/DoubleDynamic.vue";

//컴포넌트 들고옴
import OneComponent from '../components/OneComponent.vue'
import TwoComponent from '../components/TwoComponent.vue'


// vue 플러그인을 사용하기 위한 use()메서드
Vue.use(VueRouter)

//컴포넌트의 경로 설정
//방법(1) - 위에 import를 써줘야함
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
//방법(2)
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //lazy-loaded : 처음부터 가져오는 것이 아니라 실행할때 가져옴
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/show',
    name: 'show',
    component: ShowView
  },
  //* 기호를 이용해 다른 경로로 받아올 수있다.
  {
    path: '*',
    //redirect를 사용하면 이미 작성된 경로로 이동시킬 수있다.
    component: ShowView
  },
  {
    path: '/dynamic/:id',
    name: 'dynamic',
    component: function () {
      return import('../views/DynamicView.vue')
    }
  },
  {
    path : '/double',
    component : DoubleView,
    children : [
      { path : 'one', component : OneComponent },
      { path : 'two', component : TwoComponent }
    ]
  },
  {
    path: "/doubledynamic",
    name: "doubledynamic",
    component: DoubleDynamic,
    children: [
      {
        path: ":id",
        name: "doubledynamicid",
        component: function () {
          return import("../components/DynamicComponent.vue");
        },
      },
    ],
  },
]
//네비게이션 가드 확인
//check가 false이면 링크를 사용할 수없다
// 전역으로 만들어 두어서 이동할때마다 라우팅이 발생하여 확인하기 힘들다
// 라우터나 컴포넌트에 사용해서 각 라우터 혹은 컴포넌트 실행할때사용
// 라우터 : beforeEnter


/*
let check =;
router.beforeEach((to, from, next) => {
  if (check) {
    console.log(check);
    return next();
  }
  console.log(check);
  check = true;
  next({ path: "/show" });
});
*/
//라우터 객체생성
const router = new VueRouter({
  mode : "history",
  base : process.env.BASE_URL,
  routes,  //라우터경로
});

//해당 router를 export한다(내보낸다)
export default router
