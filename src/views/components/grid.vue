<style scoped>
    .demo-row{
        margin-bottom: 5px;
        background-image: -webkit-linear-gradient(0deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
        background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
    }
    .demo-col{
        color: #fff;
        padding: 30px 0;
        text-align: center;
        font-size: 18px;
        background: rgba(0, 153, 229, .7);
    }
    .demo-col.light{
        background: rgba(0, 153, 229, .5);
    }
    .demo-row.light .demo-col{
        background: rgba(0, 153, 229, .5);
    }
    .demo-row.light .demo-col.light{
        background: rgba(0, 153, 229, .3);
    }

    .example-demo .ivu-col, .example-demo .ivu-col div{
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background: rgba(0, 153, 229, .9);
    }
    .example-demo .gutter .ivu-col{
        background: transparent !important;
    }
    .example-demo  .ivu-col:nth-child(odd), .example-demo  .ivu-col:nth-child(odd) div{
        background: rgba(0, 153, 229, .7);
    }

    .code-row-bg{
        background: rgba(0,0,0,.05);
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Grid 栅格</h1>
            <p>经过验证，栅格系统不适用于大数据页面的开发，更适合传统网站的开发。</p>
            <Anchor title="栅格化概念，了解一下" h2></Anchor>
            <Row class-name="demo-row">
                <Col :span="24" class-name="demo-col">60：100%</Col>
            </Row>
            <Row class-name="demo-row light">
                <Col :span="12" class-name="demo-col">30：50%</Col>
                <Col :span="12" class-name="demo-col light">30：50%</Col>
            </Row>
            <Row class-name="demo-row">
                <Col :span="8" class-name="demo-col">20：33.33%</Col>
                <Col :span="8" class-name="demo-col light">20：33.33%</Col>
                <Col :span="8" class-name="demo-col">20：33.33%</Col>
            </Row>
            <Row class-name="demo-row light">
                <Col :span="6" class-name="demo-col">15：25%</Col>
                <Col :span="6" class-name="demo-col light">15：25%</Col>
                <Col :span="6" class-name="demo-col">15：25%</Col>
                <Col :span="6" class-name="demo-col light">15：25%</Col>
            </Row>
            <Row class-name="demo-row">
                <Col :span="16" class-name="demo-col">40：66.66%</Col>
                <Col :span="8" class-name="demo-col light">20：33.33%</Col>
            </Row>
            <p>以60列栅格系统为例，将区域进行60等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。</p>
            <p>栅格有两个概念，行<code>row</code>和列<code>col</code>，具体使用方法如下：</p>
            <ul>
                <li>使用栅格化之前，引入<code>grid-60cols.css</code></li>
                <li>使用<code>clearfix</code>在水平方向创建一行</li>
                <li>将一组<code>col</code>插入在<code>row</code>中</li>
                <li>在每个<code>col</code>中，键入自己的内容</li>
                <li>通过设置<code>col</code>的类名，指定跨越的范围，其范围是1到60</li>
                <li>每行中的<code>col</code>总和应该为60</li>
                <li>栅格化相关代码获取<a href="svn://192.168.0.51/2016/T16/fecodebackup/Trunk/core/%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%A4%A7%E5%B1%8F%E5%BC%80%E5%8F%91/2018%E5%A4%A7%E5%B1%8F%E6%96%B9%E6%A1%88" target="_blank">传送门</a></li>
            </ul>

            <Alert show-icon>注意！栅格化并不强制要求使用，页面开发请按照实际需求选择最优方案。</Alert>
            
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Row>
                        <Col span="12">col-30</Col>
                        <Col span="12">col-30</Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="8">col-20</Col>
                        <Col span="8">col-20</Col>
                        <Col span="8">col-20</Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="6">col-15</Col>
                        <Col span="6">col-15</Col>
                        <Col span="6">col-15</Col>
                        <Col span="6">col-15</Col>
                    </Row>
                </div>
                <div slot="desc">
                    <p>水平排列的布局。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/grid';
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
        }
    }
</script>