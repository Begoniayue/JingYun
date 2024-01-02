const container = () => import('@/components/Container/container.vue');


const routes = [
  {
    path: '/',
    name: 'home',
    /* 重定向 */
    redirect: '/introduce',
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import("../views/login.vue"),
  // },
  {
    path: '/login',
    name:'login',
    component: container,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/LoginData.vue'),
      },
      {
        path: '/enroll',
        name:'enroll',
        component: () => import('@/views/Login/ALogin.vue'),
      },
      {
        path: '/wakeup',
        name:'wakeup',
        component: () => import('@/views/Login/WakeLogin.vue'),
      },
      {
        path: '/detection',
        name:'detection',
        component: () => import('@/views/Login/DetectionLogin.vue'),
      },
      {
        path: '/deviceLogin',
        name:'deviceLogin',
        component: () => import('@/views/Login/deviceLogin.vue'),
      },
      {
        path: '/deviceLoginConfirm',
        name:'deviceLoginConfirm',
        component: () => import('@/views/Login/deviceLoginConfirm.vue'),
      },
      {
        path: '/getQRCode',
        name:'getQRCode',
        component: () => import('@/views/Login/getQRCode.vue'),
      },
      {
        path: '/HeartBeat',
        name:'HeartBeat',
        component: () => import('@/views/Login/HeartBeat.vue'),
      },
      {
        path: '/ImportLogin',
        name:'ImportLogin',
        component: () => import('@/views/Login/ImportLogin.vue'),
      },
      {
        path: '/LogOut',
        name:'LogOut',
        component: () => import('@/views/Login/LogOut.vue'),
      },
      {
        path: '/Newinit',
        name:'Newinit',
        component: () => import('@/views/Login/Newinit.vue'),
      },
      {
        path: '/NewService',
        name:'NewService',
        component: () => import('@/views/Login/NewService.vue'),
      },
      {
        path: '/PhoneDeviceLogin',
        name:'PhoneDeviceLogin',
        component: () => import('@/views/Login/PhoneDeviceLogin.vue'),
      },
      {
        path: '/SmsLogin',
        name:'SmsLogin',
        component: () => import('@/views/Login/SmsLogin.vue'),
      },
      {
        path: '/SmsLoginAndroid',
        name:'SmsLoginAndroid',
        component: () => import('@/views/Login/SmsLoginAndroid.vue'),
      },
      {
        path: '/TwiceAutoAuth',
        name:'TwiceAutoAuth',
        component: () => import('@/views/Login/TwiceAutoAuth.vue'),
      },
      {
        path: '/UpdateDeviceToken',
        name:'UpdateDeviceToken',
        component: () => import('@/views/Login/UpdateDeviceToken.vue'),
      },
    ],
  },
  {
    path: '/introduce',
    name: 'introduce',
    label: '介绍',
    component: container,
    children: [
      {
        path: '/introduce',
        name: 'introduce',
        component: () => import('@/views/introduce.vue'),
      },
    ],
  },
  {
    path: '/User',
    name: 'User',
    component: container,
    children: [
      {
        path: '/User',
        name: 'User',
        component: () => import('@/views/User/User.vue'),
      },
      {
        path: '/BindingEmail',
        name: 'BindingEmail',
        component: () => import('@/views/User/BindingEmail.vue'),
      },
      {
        path: '/BindingMobile',
        name: 'BindingMobile',
        component: () => import('@/views/User/BindingMobile.vue'),
      },
      {
        path: '/BindingPhoneCode',
        name: 'BindingPhoneCode',
        component: () => import('@/views/User/BindingMobile.vue'),
      },
      {
        path: '/CheckCanSetAlias',
        name: 'CheckCanSetAlias',
        component: () => import('@/views/User/CheckCanSetAlias.vue'),
      },
      {
        path: '/DelSafetyInfo',
        name: 'DelSafetyInfo',
        component: () => import('@/views/User/DelSafetyInfo.vue'),
      },
      {
        path: '/CheckMobile',
        name: 'CheckMobile',
        component: () => import('@/views/User/GetContractProfile.vue'),
      },
      {
        path: '/GetQRCode',
        name: 'GetQRCode',
        component: () => import('@/views/User/GetQRCode.vue'),
      },
      {
        path: '/GetSafetyInfo',
        name: 'GetSafetyInfo',
        component: () => import('@/views/User/GetQRCode.vue'),
      },
      {
        path: '/GetUserInfo',
        name: 'GetUserInfo',
        component: () => import('@/views/User/GetQRCode.vue'),
      }
    ],
  },

  /* 所有找不到的路由都会跳转到404页面 */
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import("../views/underfind.vue"),
  },
]

export default routes
