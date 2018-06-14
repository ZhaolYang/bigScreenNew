<template>
  <i-article>
    <article>
      <p>这部分内容主要收集一些实用的小工具，由部门成员在日常工作中整理提供。</p>
      <Anchor title="photoshop投影转box-shadow" h2></Anchor>
      <p>使用方法：在ps中选中带投影的图层，右键菜单-混合选项-投影，将相关数据填写进这个转换页面即可转为box-shadow。</p>
      <alert show-icon>工具地址：<a href="./demos/psToShadow/index.html" target="_blank">psToShadow</a></alert>

      <Anchor title="iconfont图标字体" h2></Anchor>
      <p>日常大屏开发中针对tab、菜单按钮等带有图片logo的元素通常的方案是直接使用切图作为背景图实现效果，这种方式对于有交互行为（如鼠标悬浮变色）不够友好，需要切两张图片（一张普通状态，一张选中状态）才行，psd也存在素材不全的情况，现在有更好的替代方案--<a href="//www.iconfont.cn/" target="_blank">iconfont</a>,通过font-class引用兼容性ie8+，ui稿中出现的小图标基本上全都可以在iconfont找到哦，从此和烦人的切图say byebye</p>
      <alert show-icon><a href="//www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.13&amp;helptype=about" target="_blank">使用教程</a></alert>

      <Anchor title="sass+Koala,提高你的css编写效率" h2></Anchor>
      <p>大屏开发中，针对每个豆腐块，最烦人的莫过于起类名了，我们也会经常遇到类名重叠带来的痛苦，为了提(xiang)高(yao)效(tou)率(lan),减少这种起类名、改类名的时间，投入更多精力在其他代码的编写上，很有必要引入css开发工具，目前比较流行的有sass、less、stylus，三种语言的目的都是提供便利的css编写体验，以sass为例，学习成本很低，看官网文档15分钟就能上手，各种特性可以参考<a href="https://www.sass.hk/" target="_blank">sass官网</a></p>
      <p>Koala是一款前端预处理器语言图形编译工具，有了它就可以更方便的管理sass文件的编译(能省去命令行中敲各种sass命令的时间自动编译)，你唯一要做的只是打开程序，将你的项目文件拖入应用界面，它就会自动监听项目中的sass文件变动并动态编译，更多功能请参考<a href="http://koala-app.com/index-zh.html" target="_blank">Koala官网</a></p>
      <alert show-icon><a href="https://www.sass.hk/docs/" target="_blank">sass教程</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/oklai/koala/wiki/%E4%B8%AD%E6%96%87wiki" target="_blank">Koala教程</a>&nbsp;&nbsp;编写sass文件前需要在编辑器中安装对应语法的插件以获取更好的体验。</alert>

      <Anchor title="重构伴侣--蓝湖" h2></Anchor>
      <p>针对一些非常规布局的页面重构，难免会用到各种定位，量元素大小、左右边距非常痛苦有木有？接下来就是蓝湖出手的时候了，UI规范什么根本不需要，你需要的只是给ps安装一个蓝湖插件，配合cutterman，美滋滋。</p>
      <alert show-icon><a href="https://lanhuapp.com/?home" target="_blank">蓝湖官网</a></alert>

      <Anchor title="分辨率自查工具" h2></Anchor>
      <p>为了避免被项目组不确定分辨率带来的恐惧，前端研发部倾情推出分辨率自查工具，刚哥出品，必属精品。当项目组不清楚分辨率时，把这个包丢给他们吧！</p>
      <alert show-icon>一定要注意：该工具不适用于投屏软件投影的大屏！<a href="./assets/BigScreenTest.rar" download="">分辨率自查工具下载</a> <a href="./demos/BigScreenTest/index.html" target="_blank">在线分辨率测试</a></alert>
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