/**
 * Created by aresn on 16/8/22.
 */
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/docs/guide/layout',
        meta: {
            title: '布局'
        },
        component: (resolve) => require(['./views/guide/layout.vue'], resolve)
    },
    {
        path: '/components/time',
        meta: {
            title: '时间'
        },
        component: (resolve) => require(['./views/components/time.vue'], resolve)
    },
    {
        path: '/docs/guide/introduction',
        meta: {
            title: '组件库简介'
        },
        component: (resolve) => require(['./views/guide/introduction.vue'], resolve)
    },
    {
        path: '/docs/guide/develop-rules',
        meta: {
            title: '大屏开发规范'
        },
        component: (resolve) => require(['./views/guide/develop-rules.vue'], resolve)
    },
    // {
    //     path: '/docs/guide/start',
    //     meta: {
    //         title: '快速上手'
    //     },
    //     component: (resolve) => require(['./views/guide/start.vue'], resolve)
    // },
    {
        path: '/docs/guide/update',
        meta: {
            title: '更新日志'
        },
        component: (resolve) => require(['./views/guide/update.vue'], resolve)
    },
    {
        path: '/components/grid',
        meta: {
            title: '栅格 Grid'
        },
        component: (resolve) => require(['./views/components/grid.vue'], resolve)
    },
    {
        path: '/components/layout',
        meta: {
            title: '布局 Layout'
        },
        component: (resolve) => require(['./views/guide/layout.vue'], resolve)
    },
    {
        path: '/components/color',
        meta: {
            title: '色彩 Color'
        },
        component: (resolve) => require(['./views/components/color.vue'], resolve)
    },
    {
        path: '/components/pie',
        meta: {
            title: '饼图 Pie'
        },
        component: (resolve) => require(['./views/components/pie.vue'], resolve)
    },
    {
        path: '/components/map',
        meta: {
            title: '地图 Map'
        },
        component: (resolve) => require(['./views/components/map.vue'], resolve)
    },
    {
        path: '/components/cloud-word',
        meta: {
            title: '词云 CloudWord'
        },
        component: (resolve) => require(['./views/components/cloud-word.vue'], resolve)
    },
    {
        path: '/components/other-chart',
        meta: {
            title: '其他图表 OtherChart'
        },
        component: (resolve) => require(['./views/components/other-chart.vue'], resolve)
    },
    {
        path: '/components/utils',
        meta: {
            title: '工具方法 Utils'
        },
        component: (resolve) => require(['./views/components/utils.vue'], resolve)
    },
    {
        path: '/components/font',
        meta: {
            title: '字体 Font'
        },
        component: (resolve) => require(['./views/components/font.vue'], resolve)
    },
    {
        path: '/components/libs',
        meta: {
            title: '常用工具库 Libs'
        },
        component: (resolve) => require(['./views/components/libs.vue'], resolve)
    },
    {
        path: '/components/css3',
        meta: {
            title: 'css3 实用样式'
        },
        component: (resolve) => require(['./views/components/css3.vue'], resolve)
    },
    {
        path: '/components/tools',
        meta: {
            title: 'tools 实用工具'
        },
        component: (resolve) => require(['./views/components/tools.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;
