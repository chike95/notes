module.exports = [

    {
        title: '硬件调试',
        path: '/work/hardware/',
        collapsable: true,
        sidebarDepth: 2,
        children: [
            '/work/hardware/02_RS485',
            '/work/hardware/01_strain',
        ]
    },
    {
        title: '软件调试',
        path: '/work/sofeware/',
        collapsable: true,
        sidebarDepth: 2,
        children: [
            '/work/deploy/windows_env',
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
