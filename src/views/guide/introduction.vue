<template>
    <i-article>
        <article>
            <h1>组件库简介</h1>
            <Anchor title="设计背景" h2></Anchor>
            <p>目前公司承接项目包括较多大屏内容，针对这方面的内容，公司领导提出优化大屏开发效率，降低开发成本，经过UE、UI、前端三个部门的同事讨论沟通过，决定将大屏常见组件（包括但不限于）进行沉淀，以便后续项目复用、参考。</p>
            <Anchor title="设计目标" h2></Anchor>
            <p>针对层出不穷的大屏项目，有以下几点目标：</p>
            <p>1、形成一套完整的开发体系规范</p>
            <p>2、提供较为常用的组件及布局方案</p>
            <p>3、提供相关案例</p>
            
            <Anchor title="设计理念" h2></Anchor>
            <ul>
                <li>组件便于用户提取复用</li>
                <li>组件代码片段展示友好</li>
                <li>组件库方便维护</li>
            </ul>

            <Anchor title="规划" h2></Anchor>
            <p>大屏组件库的目的是提高大屏开发效率，总体规划包括但不限于以下部分</p>
            <ul>
                <li>常用的特殊配置的echats图表</li>
                <li>常用js代码片段</li>
                <li>css3动画、特效</li>
                <li>常用三方库</li>
                <li>特殊需求的解决方案</li>
            </ul>

            <Alert show-icon>组件库基于iView在线文档搭建</Alert>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            Anchor
        },
        data () {
            return {
            }
        },
        methods: {

        }
    }
</script>