// 定义左侧导航

const list = {

    beforeComponents: [
        {
            title: '组件库简介',
            titleEn: 'introduction',
            path: '/docs/guide/introduction'
        },
        // {
        //     title: '快速上手',
        //     titleEn: 'Quick Start',
        //     path: '/docs/guide/start'
        // },
        {
            title: '大屏开发规范',
            titleEn: 'Bigscreen Develop Rules',
            path: '/docs/guide/develop-rules'
        },
        {
            title: '更新日志',
            titleEn: 'Change Log',
            path: '/docs/guide/update'
        }
    ],
    components: [
        {
            type: 'Basic',
            title: '基础',
            list: [
                {
                    title: 'Grid 栅格',
                    path: '/components/grid',
                    img: 'grid.png',
                    icon: 'ios-grid-view-outline'
                },
                {
                    title: 'Layout 布局',
                    path: '/components/layout',
                    img: 'layout-new.png',
                    icon: 'ios-browsers-outline'
                },
                {
                    title: 'Color 色彩',
                    path: '/components/color',
                    img: 'color.png',
                    icon: 'android-color-palette'
                },
                {
                    title: 'Time 时间',
                    path: '/components/time',
                    icon: 'clock'
                },
                // {
                //     title: 'Font 字体',
                //     path: '/components/font',
                //     img: 'font.png',
                //     icon: 'at'
                // },
            ]
        },
        {
            type: 'Echarts',
            title: '图表',
            list: [
                {
                    title: 'Pie 饼图',
                    path: '/components/pie',
                    icon: 'ios-pie-outline'
                },
                {
                    title: 'Map 地图',
                    path: '/components/map',
                    icon: 'map'
                },
                {
                    title: 'CloudWord 词云',
                    path: '/components/cloud-word',
                    icon: 'ios-cloud-outline'
                },
                {
                    title: 'OtherChart 其他图表',
                    path: '/components/other-chart',
                    icon: 'more'
                },
            ]
        },
        {
            type: 'Javascript Code',
            title: 'JS代码',
            list: [
                {
                    title: 'Utils 工具方法',
                    path: '/components/utils',
                    icon: 'hammer'
                }
            ]
        },
        {
            type: 'Other Source',
            title: '其他资源',
            list: [
                {
                    title: 'Font 字体',
                    path: '/components/font',
                    icon: 'at'
                },
                {
                    title: 'Libs 常用工具库',
                    path: '/components/libs',
                    icon: 'ios-bookmarks-outline'
                },
                {
                    title: 'css3 实用样式',
                    path: '/components/css3',
                    icon: 'social-css3'
                },
                {
                    title: 'tools 实用工具',
                    path: '/components/tools',
                    icon: 'wrench'
                },
                {
                    title: 'components 常见组件',
                    path: '/components/components',
                    icon: 'ios-photos-outline'
                }
            ]
        }
    ]
};

export default list;
