<template>
  <i-article>
    <article>
      <p>这部分内容主要收集一些能够够运用到日常项目中的常见效果，包括示例、代码片段、参考地址等。</p>
      <Anchor title="常用自定义进度条" h2></Anchor>
      <alert show-icon><a href="https://l-hammer.github.io/You-need-to-know-css/#/stripes-background" target="_blank">参考地址</a>
      </alert>
      <iframe height='265' scrolling='no' title='WzoZGW'
              src='//codepen.io/keroroZhao/embed/WzoZGW/?height=265&theme-id=0&default-tab=css,result&embed-version=2'
              frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a
        href='https://codepen.io/keroroZhao/pen/WzoZGW/'>WzoZGW</a> by zyang (<a href='https://codepen.io/keroroZhao'>@keroroZhao</a>)
        on <a href='https://codepen.io'>CodePen</a>.
      </iframe>

      <Anchor title="使用clip实现动态边框" h2></Anchor>
      <iframe height='265' scrolling='no' title='PRWJja' src='//codepen.io/keroroZhao/embed/PRWJja/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/keroroZhao/pen/PRWJja/'>PRWJja</a> by zyang (<a href='https://codepen.io/keroroZhao'>@keroroZhao</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>

      <Anchor title="hover.css" h2></Anchor>
      <p>一个专注于鼠标悬浮效果的css3库(兼容ie10+)，使用方法：1、直接引入css，给需要增加悬浮效果的元素加上类名即可；2、按需复制对应效果的css片段（建议用此方式使用）。</p>
      <alert show-icon><a href="http://ianlunn.github.io/Hover/" target="_blank">查看示例</a> <a href="https://ianlunn.co.uk/articles/hover-css-tutorial-introduction/" target="_blank">使用方法</a> <a href="./assets/Hover-master.zip" download>hover.css</a></alert>
      <iframe height='265' scrolling='no' title='geXgXm' src='//codepen.io/keroroZhao/embed/geXgXm/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/keroroZhao/pen/geXgXm/'>geXgXm</a> by zyang (<a href='https://codepen.io/keroroZhao'>@keroroZhao</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>

      <Anchor title="菜单下划线跟随效果" h2></Anchor>
      <iframe height='265' scrolling='no' title='RMjxRL' src='//codepen.io/keroroZhao/embed/RMjxRL/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/keroroZhao/pen/RMjxRL/'>RMjxRL</a> by zyang (<a href='https://codepen.io/keroroZhao'>@keroroZhao</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
    </article>
  </i-article>
</template>

<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Code from "../../code/css3";
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