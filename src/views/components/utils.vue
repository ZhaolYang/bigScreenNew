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

            <Anchor title="获取百分比" h2></Anchor>
            <i-code lang="js" bg>{{ code.getPercent }}</i-code>

            <Anchor title="快速数据渲染" h2></Anchor>
            <p>HTML结构</p>
            <i-code lang="html" bg>{{ code.renderNum.html }}</i-code>
            <br>
            <i-code lang="js" bg>{{ code.renderNum.js }}</i-code>

            <Anchor title="图表自适应" h2></Anchor>
            <p>针对系统的大数据页面，通常有自适应需求，可以通过给每个图表元素添加统一类名，再通过echarts的api获取元素对应的echarts实例做缩放处理。</p>
            <i-code lang="js" bg>{{ code.resizeChart }}</i-code>

            <Anchor title="常规图表的自交互-自动刷新tooltip" h2></Anchor>
            <p>为了让页面看起来“动态”一点，针对常规图表，除了正常的鼠标悬浮tooltip，另外需要新增自动显示tooltip，工具方法新增了对应的方法，如下。</p>
            <i-code lang="js" bg>{{ code.autoTooltip }}</i-code>
            
            <Anchor title="active" h2></Anchor>
            <p>常规的点击高亮操作。</p>
            <i-code lang="js" bg>{{ code.active }}</i-code>

            <Anchor title="函数防抖" h2></Anchor>
            <p>防止同样的操作连续多次执行，避免不必要的资源浪费。</p>
            <i-code lang="js" bg>{{ code.debounce }}</i-code>

            <Anchor title="函数节流" h2></Anchor>
            <p>大量操作，慢点运行。</p>
            <i-code lang="js" bg>{{ code.throttle }}</i-code>
            <br>
            <alert show-icon>函数的节流防抖可以参考<a href="https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651554442&idx=2&sn=c2f4d60c24dc8cc176d3f083a75d3414&chksm=8025554bb752dc5d35d234c769d620f99aa40587eac6803953199b49a0e0d68fc36f8442168c&mpshare=1&scene=23&srcid=0704ShAm2tsjArvnK5hcYzol%23rd" target="_blank">这篇文章</a>，解释的很详细。</alert>
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