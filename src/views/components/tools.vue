<template>
  <i-article>
    <article>
      <p>这部分内容主要收集一些实用的小工具，由部门成员在日常工作中整理提供。</p>
      <Anchor title="photoshop投影转box-shadow" h2></Anchor>
      <p>使用方法：在ps中选中带投影的图层，右键菜单-混合选项-投影，将相关数据填写进这个转换页面即可转为box-shadow。</p>
      <alert show-icon>工具地址：<a href="./demos/psToShadow/index.html" target="_blank">psToShadow</a></alert>
    </article>
  </i-article>
</template>

<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Anchor from "../../components/anchor.vue";

export default {
  components: {
    iArticle,
    iCode,
    Anchor
  },
  data() {
    return {
    };
  }
};
</script>