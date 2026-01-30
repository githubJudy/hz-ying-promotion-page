import { createRouter, createWebHashHistory } from 'vue-router';
 
const PageHome = () => import('@/views/Home/Index.vue'),
      PageDownload = () => import('@/views/Download/Index.vue')
;
 
const _routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome,
  },
  {
    path: '/Download',
    name: 'Download',
    component: PageDownload,
  },
]
 
const _router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: _routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  }
})
 
// router.beforeEach((to, from) => {
//   document.title = to.meta.title || '默认标题'
// })
 
export default _router;
