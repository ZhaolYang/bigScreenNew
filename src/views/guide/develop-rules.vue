<template>
    <i-article>
        <article>
            <h1>大屏开发规范</h1>
            <p>良好的开发规范利于项目的维护及交接，针对大屏开发，请各位同事认真执行以下规范。</p>
            <Anchor title="约定" h2></Anchor>
            <p>在大屏项目开发工作开始之前，在遵循<a href="http://192.168.201.159/fedemo/pages/codeguide/" target="_blank">前端代码规范</a>的前提下，还需要各位大屏开发人员遵循以下约定：</p>
            <ul>
                <li>
                    <p>确定页面的分辨率及兼容性、自适应要求,这一点非常重要。</p>
                </li>
                <li>
                    <P>开发方式，采用纯重构或者前后分离或其他方式。通常情况按照图表部分及部分涉及到数据联动交互的内容进行模拟数据，其他内容纯重构的方式进行开发。</p>
                </li>
                <li>
                    <P>评估完成时间节点。</p>
                </li>
                <li>
                    <P>以上内容确认后，在邮件中反馈，避免后续对接扯皮。</p>
                </li>
            </ul>

            <Anchor title="目录结构" h2></Anchor>
            <p>常规大屏项目通常只包含几个页面，一般采用最简易的方式搭建目录结构。</p>
            <i-code bg>{{ code.lib }}</i-code>

            <Anchor title="开发方式" h2></Anchor>
            <p>通常页面的数据模拟使用mockjax或者mock.js进行数据模拟，为了便于对接，尽量避免使用json文件模拟数据，以一个echarts图表的数据模拟为例：</p>

            <ul>
                <li>
                    <p>html中引入必要资源</p>
                    <i-code bg>{{ code.import }}</i-code>
                    <br>
                </li>

                <li>
                    <p>js中进行图表配置，模拟数据请求，数据渲染</p>
                    <i-code bg>{{ code.js }}</i-code>
                    <br>
                </li>

                <li>
                    <p>在模拟数据文件中进行数据模拟</p>
                    <i-code bg>{{ code.mockjs }}</i-code>
                    <br>
                    <Alert show-icon>
                        <span>注意：数据模拟要注意语义化，做到“见名知意”。</span>
                    </Alert>
                </li>
            </ul>

            <Anchor title="内容沉淀" h2></Anchor>
            <p>每一个大屏开发成员都有义务和责任来完善组件库内容，来提升组件库的适用范围，在日常开发工作中，针对一些非常规图表、非常规元素（如svg特效）、可复用的动画效果等内容，请及时整理并沉淀下来，便于日后其他成员复用。</p>
            <ul>
                <li>
                    <p>图表类沉淀，需要提供完整的配置，如需引入除echarts外的其他资源（如词云、地图、三方素材图等）也需要注明，特殊处理处需要额外注释，示例代码如下</p>
                    <i-code bg>{{ code.chartdemo }}</i-code>
                </li>

                <li>
                    <p>三方类库的沉淀，需要提供简单的示例demo及类库官网api文档，如animsition</p>
                </li>

                <li>
                    <p>特殊样式的沉淀，只需提供必要的代码片段即可，最终展示效果参考其他组件。</p>
                </li>
            </ul>

            <br>
            
            <Anchor title="资源" h2></Anchor>
            <ul>
                <li>对于常规的大屏页面，可以使用此<a href="./assets/bsPackage180326.rar" download>开发包</a>,包含基本的大屏开发文件骨架，必要的资源及部分示例代码。</li>
                <p>部分常用三方插件资源：</p>
                <li>
                    <a href="http://git.blivesta.com/animsition/">animsition</a>
                    常用页面加载动画效果
                </li>
                <li>
                    <a href="https://daneden.github.io/animate.css/">animate.css</a>
                    三方动画css库，用于实现一些动效交互
                </li>
            </ul>

            <Alert show-icon>
                <span>以上为大屏开发初版暂行规范，欢迎各位同事提出建议指正。</span>
            </Alert>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/develop-rules';
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

<style scoped>
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #eee;
    transition: all .2s;
}

.circle:hover {
    background-color: #f67300;
}
</style>
