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
        label: '登录设备管理',
        path: '/GetSafetyInfo',
      },
      {
        key: '3-8',
        label: '一键修改密码',
        path: '/OnekeySetPasswd',
      },
      {
        key: '3-9',
        label: '隐私设置',
        path: '/PrivacySettings',
      },
      {
        key: '3-10',
        label: 'ReportMotion',
        path: '/ReportMotion',
      },
      {
        key: '3-11',
        label: '修改微信号(一年一次)',
        path: '/ReviseAlisa',
      },
      {
        key: '3-12',
        label: '设置微信号',
        path: '/SetAlisa',
      },
      {
        key: '3-13',
        label: '修改密码',
        path: '/SetPasswd',
      },
      {
        key: '3-14',
        label: '修改个人信息',
        path: '/UpdateProfile',
      },
      {
        key: '3-15',
        label: '修改头像',
        path: '/UploadHeadImage',
      },
    ]
  },
  {
    key: '4',
    label: '消息发送',
    path: '/SendTxt',
    children: [
      {
        key: '4-1',
        label: '发送文本消息',
        path: '/SendTxt',
      },
      {
        key: '4-2',
        label: '批量发送文本消息',
        path: '/BatchSendMsg',
      },
      {
        key: '4-3',
        label: '发送提醒消息',
        path: '/RemindMsg',
      },
      {
        key: '4-4',
        label: '批量发送提醒消息',
        path: '/Revoke',
      },
      {
        key: '4-5',
        label: '发送App消息',
        path: '/SendApp',
      },
      {
        key: '4-6',
        label: '发送文件(转发,并非上传)',
        path: '/SendCDNFile',
      },
      {
        key: '4-7',
        label: '发送Cdn图片(转发图片)',
        path: '/SendCDNImg',
      },
      {
        key: '4-8',
        label: '发送Cdn视频(转发视频)',
        path: '/SendCDNVideo',
      },
      {
        key: '4-9',
        label: '发送Emoji',
        path: '/SendEmoji',
      },
      {
        key: '4-10',
        label: '群发文字',
        path: '/SendGroupMassMsgText',
      },
      {
        key: '4-11',
        label: '转发聊天记录',
        path: '/SendTransmitMsg',
      },
      {
        key: '4-12',
        label: '发送分享视频消息',
        path: '/ShareVideo',
      },
      {
        key: '4-13',
        label: '发送图片',
        path: '/UploadImg',
      },
      ]
  },
  {
    label: '接口测试',
    path: '/',
  }]

export default items
