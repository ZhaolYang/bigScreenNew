<template>
  <i-article>
        <article>
            <Anchor title="用js实现千位分隔符" h2></Anchor>
            <i-code lang="js" bg>{{ code.commafy }}</i-code>
            <br>
            <alert show-icon>一些常用的数组对象数据处理方法，虽然比较简单，但是你会发现在处理常用模拟数据的时候非常有用,也可以根据情况改写。</alert>
            <Anchor title="获取一组数据的最大值" h2></Anchor>
            <i-code lang="js" bg>{{ code.max }}</i-code>

            <Anchor title="获取一组数据的和" h2></Anchor>
            <i-code lang="js" bg>{{ code.sum }}</i-code>

            <Anchor title="从对象数组中提取出值数组" h2></Anchor>
            <i-code lang="js" bg>{{ code.getValArr }}</i-code>

            <Anchor title="快速数据渲染" h2></Anchor>
            <p>HTML结构</p>
            <i-code lang="html" bg>{{ code.renderNum.html }}</i-code>
            <br>
            <i-code lang="js" bg>{{ code.renderNum.js }}</i-code>
        </article>
    </i-article>
</template>

<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Code from "../../code/utils";
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
  }
};
</script>