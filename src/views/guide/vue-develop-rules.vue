<template>
    <i-article>
        <article>
            <h1>大屏开发规范(vue试行版)</h1>
            <p>vue试行版大屏开发规范基于基础版进行调整,引入vue.js,其数据驱动及组件化的概念能够在大数据项目中有很多用武之地。其中html、css、js开发规范与部门开发规范相同，此处不做赘述。</p>
            <Alert show-icon>
                具体使用请参考<a href="https://cn.vuejs.org/v2/guide/" target="_blank">vue官方文档</a>
            </Alert>

            <p>开始开发之前，可以使用<a href="./assets/vueBsPage180724.zip" download>vue版大屏开发包</a>，里面提供了必要的三方库及echarts、列表、组件等基础示例，针对常规大屏项目的开发套路，也提供了必要的方法。</p>

            <Anchor title="目录结构" h2></Anchor>
            <p>常规大屏项目通常只包含几个页面，一般采用最简易的方式搭建目录结构。</p>
            <i-code bg>{{ code.lib }}</i-code>

            <Anchor title="开发方式" h2></Anchor>
            <p>vue版开发规范摒弃了原版 <span style="color: red;">initChart(初始化图表) - getData(请求数据) - render(渲染)</span> 的开发'套路'，而是采用vue的组件来实现包括图表、列表等内容的开发，示例如下。</p>

            <ul>
                <li>
                    <p>echarts图表</p>
                    <i-code bg lang="javascript">{{ code.echarts }}</i-code>
                    <br>
                    <p>html中使用,传入图表数据和图表类型</p>
                    <i-code bg lang="html">{{ code.echartsHtml }}</i-code>
                </li>

                <li>
                    <p>列表</p>
                    <i-code bg lang="javascript">{{ code.list }}</i-code>
                    <br>
                </li>

                <li>
                    <p>组件通信</p>
                    <i-code bg lang="javascript">{{ code.componentMsg }}</i-code>
                    <br>
                    <p>html中使用,绑定事件</p>
                    <i-code bg lang="html">{{ code.componentMsgHtml }}</i-code>
                    <br>
                    <Alert show-icon>
                        <span>注意：数据模拟要注意语义化，做到“见名知意”。</span>
                    </Alert>
                </li>

                <li>
                    <p>每个页面建议对应一个vue对象</p>
                    <i-code bg lang="javascript">{{ code.vue }}</i-code>
                    <br>
                </li>
            </ul>

            <br>

            <Alert show-icon>
                <span>以上为大屏开发vue版暂行规范，欢迎各位同事提出建议指正。</span>
            </Alert>
        </article>
    </i-article>
</template>
<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Code from "../../code/vue-develop-rules";
import Anchor from "../../components/anchor.vue";

export default {
  components: {
    iArticle,
    iCode,
    Anchor
  },
  data() {
    return {
      code: Code
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
