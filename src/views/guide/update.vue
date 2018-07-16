<style>
.doc-update .ivu-timeline .ivu-timeline-item-content {
  top: -14px;
}
.doc-update h2 {
  margin: 0;
  font-weight: normal;
}
.doc-update code {
  margin: 8px 0 10px;
}
.doc-update ul {
  padding-left: 22px !important;
}
.doc-update-important {
  color: #3399ff;
}
.doc-update-loop.ivu-load-loop {
  animation-duration: 3s;
}
</style>
<template>
    <i-article>
        <h1>更新日志</h1>
        <article class="doc-update">
            <Timeline pending>
                <Timeline-item>
                    <Anchor title="2018-7-4" h2></Anchor>
                    <ul>
                        <li>大屏开发规范调整，新增图片资源引入规范。</li>
                        <li>工具方法新增点击交互、节流防抖函数。</li>
                        <li>大屏开发包更新。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-6-14" h2></Anchor>
                    <ul>
                        <li>工具方法新增获取百分比，图表自适应，图表自动切换tooltip方法。</li>
                        <li>css3新增立体光圈效果。</li>
                        <li>常见组件新增多行文本省略效果。</li>
                        <li>大屏开发包更新，新增了工具方法。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-4-24 ~ 2018-5-18" h2></Anchor>
                    <ul>
                        <li>组件库简介内容调整，新增工作成果、后续规划。</li>
                        <li>时间组件内容调整。</li>
                        <li>地图整合前端在线文档中相关工具。</li>
                        <li>常用工具库新增ajax loading、页面动画载入效果。</li>
                        <li>大屏开发包更新，增加css盒子模型，多版本echarts，工具方法。</li>
                        <li>工具新增大屏分辨率检测工具。</li>
                        <li>地图整合前端在线文档中相关工具。</li>
                        <li>地图新增个性化地图下载，收集了项目中的个性化地图。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-4-18 ~ 2018-4-19" h2></Anchor>
                    <ul>
                        <li>新增栏目：常见组件。</li>
                        <li>常见组件新增一些大屏开发中常见的样式代码、实现方案。</li>
                        <li>实用工具新增图标字体等工具推荐。</li>
                        <li>大屏开发包内容调整，资源替换。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-3-27" h2></Anchor>
                    <ul>
                        <li>新增栏目：实用工具。</li>
                        <li>实用工具新增photoshop投影转box-shadow小工具(陈刚提供)。</li>
                        <li>新增css3效果-hover.css</li>
                        <li>部分资源下载链接调整。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-3-26" h2></Anchor>
                    <ul>
                        <li>大屏开发规范调整，新增mustache和scrollBox示例。</li>
                        <li>常用工具库新增swiper,动态载入数字效果（程姣姣提供）。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-3-23" h2></Anchor>
                    <ul>
                        <li>新增绘制钟表插件。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-3-22" h2></Anchor>
                    <ul>
                        <li>去除栅格化、快速开始栏目。</li>
                        <li>更新Utils方法。</li>
                        <li>更新css3示例。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-3-19" h2></Anchor>
                    <ul>
                        <li>新增WOW.js动效插件、示例。</li>
                        <li>新增实用css3示例、代码片段。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-3-15" h2></Anchor>
                    <ul>
                        <li>新增滚动数字加载小插件。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-3-6" h2></Anchor>
                    <ul>
                        <li>地图新增全国各省市地区经纬度坐标。</li>
                        <li>新增常用工具库-帧动画（陈刚提供）。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-2-27" h2></Anchor>
                    <ul>
                        <li>新增字体格式转换工具（陈东顺提供）。</li>
                    </ul>
                </Timeline-item>
                 <Timeline-item>
                    <Anchor title="2018-2-23" h2></Anchor>
                    <ul>
                        <li>新增其他资源-字体，包括字体包下载和使用示例。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-2-12" h2></Anchor>
                    <ul>
                        <li>开发规范新增通用开发包资源下载。</li>
                        <li>细节调整。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2018-2-11" h2>
                        <span class="doc-update-important">Happy New Year</span>
                    </Anchor>
                    <ul>
                        <li>新增非常规饼图配置。</li>
                        <li>新增更新日志。</li>
                        <li>调整组件库介绍内容。</li>
                    </ul>
                </Timeline-item>
            </Timeline>
        </article>
    </i-article>
</template>
<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Code from "../../code/guide";
import Anchor from "../../components/anchor.vue";
import version from "../../config/config";

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
  mounted() {
    window.localStorage.setItem("version", version.version);
  },
  methods: {}
};
</script>