<template>
    <i-article>
        <article>
            <h1>快速上手</h1>
            <Anchor title="使用之前" h2></Anchor>
            <p>如果您没有了解过大屏开发方案，建议先看看<a href="svn://192.168.0.51/2016/T16/fecodebackup/Trunk/core/大数据大屏开发/2018大屏方案" target="_blank">示例</a></p>
            <p>常规大屏页面（1920*1080分辨率）的快速开发，需要遵循以下约定：</p>
            <ul>
                <li>
                    <p>页面元素，区块与主容器、区块和区块之间间距约定为16px。</p>
                    <img src="../../images/layout1.png">
                </li>
                <li>
                    <P>采用60列栅格化系统进行页面的整体布局。</p>
                    <img src="../../images/col60.png">
                </li>
                <li>
                    <P>大屏主题要素主要如下图所示，主题色由设计提供。</p>
                    <img src="../../images/elements.png">
                </li>
            </ul>
            <Alert show-icon>
                整体布局示例可以参考<a href="svn://192.168.0.51/2016/T16/fecodebackup/Trunk/core/大数据大屏开发/2018大屏方案" target="_blank">示例</a>
            </Alert>

            <Anchor title="目录结构" h2></Anchor>
            <p>大屏开发页面目录结构如下。</p>
            <i-code bg>{{ code.start.structure }}</i-code>
            <p>考虑到目前单个大屏项目页面数量不多，统一在pages下进行维护，可提取复用的样式统一在根目录下的css中维护，个性化样式在pages/css中维护，三方库及插件统一放在根目录下js中，个性化脚本在pages/js中维护。</p>
            
            <Anchor title="引入栅格化" h2></Anchor>
            <i-code lang="js" bg>{{ code.start.importCol60 }}</i-code>
            
            <Anchor title="特别提醒" h2></Anchor>
            <Alert show-icon>
                <span>栅格化仅是一种布局方案，实际项目根据需求来决定采用哪种布局方式，确保质量的同时达到效率最大化。</span>
            </Alert>
            
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {

        }
    }
</script>