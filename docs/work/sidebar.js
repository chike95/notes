module.exports = [

    {
        title: '硬件测试',
        path: '/work/hardware/',
        collapsable: true,
        sidebarDepth: 2,
        children: [
            '/work/hardware/02_RS485',
            '/work/hardware/01_strain',
        ]
    },
    {
        title: '软件测试',
        path: '/work/software/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
            '/work/software/strain',
            '/work/deploy/ubuntu_env',
        ]
    },
    {
        title: '网络设备',
        path: '/work/devices/net',
        collapsable: true,
        sidebarDepth: 2,
    },
    {
        title: '调试系统',
        path: '/work/debug/',
        collapsable: true,
        sidebarDepth: 2,
    },
    {
        title: '项目部署',
        path: '/work/deploy/',
        collapsable: true,
        sidebarDepth: 2,
        children: [
            '/work/deploy/windows_env',
            '/work/deploy/ubuntu_env',
        ]
    },
]
