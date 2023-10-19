module.exports = {
    title: '夜枫林',
    description: '夜枫林的个人文档',
    // dest: './dist',
    port: '7777',
    // head: [
    //     ['link', { rel: 'icon', href: '/logo.jpg' }]
    // ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav"),
        sidebar: require("./sidebar"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
