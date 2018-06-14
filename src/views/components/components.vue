<template>
  <i-article>
    <article>
      <p>这部分内容主要收集一些大屏开发中经常会碰到的组件，部分使用了css3属性，不适用于有低版本兼容需求的项目。</p>

      <Anchor title="使用div模拟不规则柱状图" h2></Anchor>
      <p>此类内容基本上每个项目都会碰到，类似滚动、特殊样式等用echarts配置难以满足需求，所以直接用dom元素来实现柱状图效果，最常见的样式是渐变色柱状图，右侧形状多为菱角，可以使用css3 skew来实现，另外一种动效样式请见 组件库实用样式-常用自定义进度条。</p>
      <iframe height='265' scrolling='no' title='NMWQpO' src='//codepen.io/keroroZhao/embed/NMWQpO/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/keroroZhao/pen/NMWQpO/'>NMWQpO</a> by zyang (<a href='https://codepen.io/keroroZhao'>@keroroZhao</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
      <p>带渐变背景动画效果（此效果利用伪元素移动实现，慎用）</p>
      <iframe height='265' scrolling='no' title='KRwPvM' src='//codepen.io/keroroZhao/embed/KRwPvM/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/keroroZhao/pen/KRwPvM/'>KRwPvM</a> by zyang (<a href='https://codepen.io/keroroZhao'>@keroroZhao</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>

      <Anchor title="使用css counter给列表进行编号" h2></Anchor>
      <p>对于一些常见的TOP5、TOP10等列表或滚动列表，可以直接使用伪元素+css counter进行实现，既简化了dom结构，也大大的提高了灵活性，兼容性也非常好（ie8+）。</p>
      <iframe height='265' scrolling='no' title='deyxKV' src='//codepen.io/keroroZhao/embed/deyxKV/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/keroroZhao/pen/deyxKV/'>deyxKV</a> by zyang (<a href='https://codepen.io/keroroZhao'>@keroroZhao</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
      <alert show-icon>具体用法请参考<a href="http://www.w3school.com.cn/cssref/pr_gen_counter-increment.asp" target="_blank">css counter</a></alert>

      <Anchor title="多行文本省略" h2></Anchor>
      <p>兼容性贼6！</p>
      <iframe height='265' scrolling='no' title='XqqWyw' src='//codepen.io/keroroZhao/embed/XqqWyw/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/keroroZhao/pen/XqqWyw/'>XqqWyw</a> by zyang (<a href='https://codepen.io/keroroZhao'>@keroroZhao</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
    </article>
  </i-article>
</template>

<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Anchor from "../../components/anchor.vue";
import Demo from "../../components/demo.vue";

export default {
  components: {
    iArticle,
    iCode,
    Anchor
  },
  data() {
    return {};
  }
};
</script>