import { createRouter, createWebHistory } from 'vue-router';
 
const PageHome = () => import('@/views/Home.vue');
 
const _routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome,
  },
]
 
const _router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: _routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  }
})
 
// router.beforeEach((to, from) => {
//   document.title = to.meta.title || '默认标题'
// })
 
export default _router;
