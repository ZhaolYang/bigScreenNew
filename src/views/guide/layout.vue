<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
</style>
<template>
    <i-article>
        <article>
            <Anchor title="Layout 布局" h1></Anchor>
            <p>传统的大数据页面布局比较常见的有以下几种：</p>
            <Anchor title="栅格化3*3" h2></Anchor>
            <img src="../../images/grid3-3.png"/>
            <Anchor title="栅格化3*2" h2></Anchor>
            <img src="../../images/grid3-2.png"/>
            <Anchor title="章鱼头式" h2></Anchor>
            <img src="../../images/octopus.png"/>
            <Anchor title="卡车头式" h2></Anchor>
            <img src="../../images/truck.png"/>
            <Anchor title="手套式" h2></Anchor>
            <img src="../../images/gloves.png"/>
            <Anchor title="握拳式" h2></Anchor>
            <img src="../../images/fist.png"/>
            <Anchor title="皇冠式" h2></Anchor>
            <img src="../../images/crown.png"/>
            <Anchor title="城墙式" h2></Anchor>
            <img src="../../images/wall.png"/>
            <Anchor title="凹槽式" h2></Anchor>
            <img src="../../images/groove.png"/>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/layout';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code
            }
        },
        computed: {
        },
        methods: {
        }
    }
</script>