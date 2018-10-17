const menuList = [
    {
        title: '首页',
        type: 'desktop',
        key: '/home'
    },
    {
        title: 'UI',
        type: 'desktop',
        key: '/admin',
        children: [
            {
                title: '按钮',
                type: 'desktop',
                key: '/admin/ui/buttons',
            },
            {
                title: '弹框',
                type: 'desktop',
                key: '/admin/ui/modals',
            },
            {
                title: 'Loading',
                type: 'desktop',
                key: '/admin/ui/loadings',
            },
            {
                title: '通知提醒',
                type: 'desktop',
                key: '/admin/ui/notification',
            },
            {
                title: '全局Message',
                type: 'desktop',
                key: '/admin/ui/messages',
            },
            {
                title: 'Tab页签',
                type: 'desktop',
                key: '/admin/ui/tabs',
            },
            {
                title: '图片画廊',
                type: 'desktop',
                key: '/admin/ui/gallery',
            },
            {
                title: '轮播图',
                type: 'desktop',
                key: '/admin/ui/carousel',
            }
        ]
    },
    {
        title: '表单',
        type: 'desktop',
        key: '/admin/form',
        children: [
            {
                title: '登录',
                type: 'desktop',
                key: '/admin/form/login',
            },
            {
                title: '注册',
                type: 'desktop',
                key: '/admin/form/reg',
            }
        ]
    },
    {
        title: '表格',
        type: 'desktop',
        key: '/admin/table',
        children: [
            {
                title: '基础表格',
                type: 'desktop',
                key: '/admin/table/basic',
            },
            {
                title: '高级表格',
                type: 'desktop',
                key: '/admin/table/high',
            }
        ]
    },
    {
        title: '富文本',
        type: 'desktop',
        key: '/rich'
    },
    {
        title: '城市管理',
        type: 'desktop',
        key: '/admin/city'
    },
    {
        title: '订单管理',
        type: 'desktop',
        key: '/order',
        btnList: [
            {
                title: '订单详情',
                type: 'desktop',
                key: 'detail'
            },
            {
                title: '结束订单',
                type: 'desktop',
                key: 'finish'
            }
        ]
    },
    {
        title: '员工管理',
        type: 'desktop',
        key: '/user'
    },
    {
        title: '车辆地图',
        type: 'desktop',
        key: '/bikeMap'
    },
    {
        title: '图标',
        type: 'desktop',
        key: '/charts',
        children: [
            {
                title: '柱形图',
                type: 'desktop',
                key: '/charts/bar'
            },
            {
                title: '饼图',
                type: 'desktop',
                key: '/charts/pie'
            },
            {
                title: '折线图',
                type: 'desktop',
                key: '/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        type: 'desktop',
        key: '/permission'
    },
];
export default menuList;