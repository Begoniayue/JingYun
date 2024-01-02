import { createRouter, createWebHistory } from 'vue-router'

import routes from './menu.js'

const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

// 路由前置守卫
// router.beforeEach(async (to, from, next) => {
//   let toPath: string = to.path;
//   const token = useStorage('token', '');
//   if(token.value) {
//     //获取用户信息
//   } else {
//     toPath = '/login';
//   }
//   if (to.path === toPath) {
//     next();
//   } else {
//     next(toPath);
//   }
// })
export default router
