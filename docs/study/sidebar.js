module.exports = [

    {
        title: '庖丁解牛',
        path: '/study/0',
        collapsable: true,
        sidebarDepth: 2,
    },
    {
        title: '软硬结合-从零打造物联网',
        path: '/study/1',
        collapsable: true,
        sidebarDepth: 2,
    },
    {
        title: '全栈开发-后台管理系统',
        path: '/study/fullstack/',
        collapsable: true,
        sidebarDepth: 3,
        children: [
            '/study/fullstack/rd',
            '/study/fullstack/fe'
        ]
    },
]

// module.exports = [

//     {
//         title: '硬件调试',
//         path: '/FE/VUE/vuepress',
//         collapsable: true,
//         sidebarDepth: 2,
//     },
//     {
//         title: '软件调试',
//         path: '/FE/VUE/vuepress',
//         collapsable: true,
//         sidebarDepth: 2,
//     },
//     {
//         title: '项目部署',
//         path: '/work/deploy/',
//         collapsable: true,
//         sidebarDepth: 2,
//         children: [
//             '/work/deploy/windows_env',
//             '/work/deploy/ubuntu_env',
//         ]
//     },
//     {
//         title: '项目记录',
//         path: '/FE/VUE/vuepress',
//         collapsable: true,
//         sidebarDepth: 2,
//     }
// ]