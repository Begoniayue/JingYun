const items = [
  {
    key: '1',
    label: '介绍',
    path: '/introduce',
  },
  {
    key: '2',
    label: '登录',
    path: '/login',
    children: [
      {
        key: '2-1',
        label: '62登陆(账号或密码)',
        path: '/login',
      },
      {
        key: '2-2',
        label: 'A16登陆(账号或密码)',
        path: '/enroll',
      },
      {
        key: '2-3',
        label: '唤醒登陆(只限扫码登录)',
        path: '/wakeup',
      },
      {
        key: '2-4',
        label: '检测二维码',
        path: '/detection',
      },
      {
        key: '2-5',
        label: '新设备扫码登录',
        path: '/deviceLogin',
      },
      {
        key: '2-6',
        label: '新设备扫码确认登录',
        path: '/deviceLoginConfirm',
      },
      {
        key: '2-7',
        label: '获取二维码',
        path: '/getQRCode',
      },
      {
        key: '2-8',
        label: '心跳包',
        path: '/HeartBeat',
      },
      {
        key: '2-9',
        label: '导入数据登录',
        path: '/ImportLogin',
      },
      {
        key: '2-10',
        label: '退出登录',
        path: '/LogOut',
      },
      {
        key: '2-11',
        label: '初始化',
        path: '/Newinit',
      },
      /*start*/
      {
        key: '2-12',
        label: '新服务一键推登录',
        path: '/NewService',
      },
      {
        key: '2-13',
        label: '铺助手机扫码登录',
        path: '/PhoneDeviceLogin',
      },
      {
        key: '2-14',
        label: '苹果设备验证码登陆',
        path: '/SmsLogin',
      },
      {
        key: '2-15',
        label: '安卓设备验证码登陆',
        path: '/SmsLoginAndroid',
      },
      {
        key: '2-16',
        label: '二次登陆',
        path: '/TwiceAutoAuth',
      },
      {
        key: '2-17',
        label: 'DeviceToken更新',
        path: '/UpdateDeviceToken',
      },
    ]
  },
  {
    key: '3',
    label: '用户',
    path: '/User',
    children: [
      {
        key: '3-1',
        label: '获取个人信息',
        path: '/User',
      },
    /*start*/
      {
        key: '3-2',
        label: '绑定邮箱',
        path: '/BindingEmail',
      },
      {
        key: '3-3',
        label: '检查微信号安全环境',
        path: '/CheckCanSetAlias',
      },
      {
        key: '3-4',
        label: '删除登录设备',
        path: '/DelSafetyInfo',
      },
      {
        key: '3-5',
        label: '个人二维码',
        path: '/GetQRCode',
      },
      {
        key: '3-7',
        label: '绑定钉钉',
      }
    ]
  },
  {
    key: '4',
    label: '好友操作',
    path: '/User',
    children: [
      {
        key: '4-1',
        label: '附近人',
        path: '/User',
      },
      {
        key: '4-2',
        label: '添加/移除黑名单',
        path: '/User',
      },
      {
        key: '4-3',
        label: '删除好友',
        path: '/User',
      }]
    },
  {
    key: '5',
    label: '群组操作',
    path: '/User',
    children: [
      {
        key: '5-1',
        label: '创建群组',
        path: '/User',
      },
      {
        key: '5-2',
        label: '加入群组',
        path: '/User',
      },
      {
        key: '5-3',
        label: '退出群组',
        path: '/User',
      }]
    },
  {
    key: '6',
    label: '朋友圈操作',
    path: '/User',
    children: [
      {
        key: '6-1',
        label: '群组消息',
        path: '/User',
      },
      {
        key: '6-2',
        label: '群组消息详情',
        path: '/User',
      },
      {
        key: '6-3',
        label: '群组消息撤回',
      }]
    },
  {
    label: '接口测试',
    path: '/',
  }]

export default items
